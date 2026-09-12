import crypto from 'node:crypto';
import http from 'node:http';
import { spawn } from 'node:child_process';
import express from 'express';
import { rateLimit } from 'express-rate-limit';
import dotenv from 'dotenv';
import { dbEnabled, initDatabase, query, closeDatabase } from './db.js';

dotenv.config();

const app = express();
const publicPort = Number(process.env.PORT || 10000);
const internalPort = Number(process.env.INTERNAL_APP_PORT || 10001);
const SESSION_COOKIE = 'smoongroad_session';
const roles = new Set(['student', 'resident', 'organization']);
const verificationStates = new Set(['unverified', 'basic', 'pending', 'verified', 'rejected']);
const accountStates = new Set(['active', 'limited', 'suspended', 'banned']);
const reportReasons = new Set(['inappropriate', 'no_show', 'false_info', 'commercial', 'privacy', 'harassment', 'other']);

app.disable('x-powered-by');
app.set('trust proxy', 1);

const safetyLimiter = rateLimit({
  windowMs: 60_000,
  limit: 60,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
});

function parseCookies(req) {
  const cookies = {};
  for (const part of String(req.headers.cookie || '').split(';')) {
    const index = part.indexOf('=');
    if (index < 0) continue;
    const key = part.slice(0, index).trim();
    const value = part.slice(index + 1).trim();
    if (!key) continue;
    try { cookies[key] = decodeURIComponent(value); } catch { cookies[key] = value; }
  }
  return cookies;
}

function tokenHash(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

function text(value, max = 800) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function adminEmails() {
  return new Set(String(process.env.ADMIN_EMAILS || '')
    .split(',')
    .map(value => value.trim().toLowerCase())
    .filter(Boolean));
}

async function ensureSafetySchema() {
  if (!dbEnabled) return false;
  await initDatabase();
  await query(`
    CREATE TABLE IF NOT EXISTS smulink_profiles (
      user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
      role TEXT NOT NULL DEFAULT 'resident' CHECK (role IN ('student','resident','organization')),
      verification_status TEXT NOT NULL DEFAULT 'unverified' CHECK (verification_status IN ('unverified','basic','pending','verified','rejected')),
      organization_name TEXT,
      verification_note TEXT,
      account_status TEXT NOT NULL DEFAULT 'active' CHECK (account_status IN ('active','limited','suspended','banned')),
      status_reason TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS smulink_reports (
      id UUID PRIMARY KEY,
      reporter_user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      target_type TEXT NOT NULL CHECK (target_type IN ('user','organization','project')),
      target_id TEXT NOT NULL,
      reason TEXT NOT NULL,
      detail TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new','reviewing','resolved','dismissed')),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE INDEX IF NOT EXISTS smulink_reports_status_idx ON smulink_reports(status, created_at DESC);
    CREATE INDEX IF NOT EXISTS smulink_reports_target_idx ON smulink_reports(target_type, target_id);

    CREATE TABLE IF NOT EXISTS smulink_moderation_actions (
      id UUID PRIMARY KEY,
      target_user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      admin_user_id UUID REFERENCES users(id) ON DELETE SET NULL,
      action TEXT NOT NULL,
      reason TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE INDEX IF NOT EXISTS smulink_moderation_target_idx ON smulink_moderation_actions(target_user_id, created_at DESC);
  `);
  return true;
}

async function getSafetySession(req) {
  if (!dbEnabled) return null;
  const token = parseCookies(req)[SESSION_COOKIE];
  if (!token || token.length < 32) return null;
  const result = await query(
    `SELECT s.user_id, s.provider, s.expires_at,
            u.email, u.display_name,
            p.role, p.verification_status, p.organization_name,
            p.account_status, p.status_reason
       FROM sessions s
       JOIN users u ON u.id = s.user_id
       LEFT JOIN smulink_profiles p ON p.user_id = u.id
      WHERE s.token_hash = $1 AND s.expires_at > NOW()`,
    [tokenHash(token)],
  );
  const row = result.rows[0];
  if (!row) return null;
  return {
    userId: row.user_id,
    provider: row.provider,
    email: row.email,
    displayName: row.display_name,
    role: row.role || null,
    verificationStatus: row.verification_status || 'unverified',
    organizationName: row.organization_name || '',
    accountStatus: row.account_status || 'active',
    statusReason: row.status_reason || '',
  };
}

async function requireSafetySession(req, res, next) {
  try {
    const session = await getSafetySession(req);
    if (!session) return res.status(401).json({ error: 'AUTH_REQUIRED' });
    req.safetySession = session;
    next();
  } catch (error) { next(error); }
}

async function requireAdmin(req, res, next) {
  try {
    const session = req.safetySession || await getSafetySession(req);
    if (!session) return res.status(401).json({ error: 'AUTH_REQUIRED' });
    if (!session.email || !adminEmails().has(String(session.email).toLowerCase())) {
      return res.status(403).json({ error: 'ADMIN_REQUIRED' });
    }
    req.safetySession = session;
    next();
  } catch (error) { next(error); }
}

function publicSession(session) {
  const isAdmin = Boolean(session?.email && adminEmails().has(String(session.email).toLowerCase()));
  return {
    authenticated: Boolean(session),
    isAdmin,
    user: session ? {
      id: session.userId,
      displayName: session.displayName,
      email: session.email,
      provider: session.provider,
      role: session.role,
      verificationStatus: session.verificationStatus,
      organizationName: session.organizationName,
      accountStatus: session.accountStatus,
      statusReason: session.statusReason,
    } : null,
  };
}

const safety = express.Router();
safety.use(safetyLimiter);
safety.use(express.json({ limit: '64kb', strict: true }));

safety.get('/status', (_req, res) => {
  res.json({ database: dbEnabled, adminConfigured: adminEmails().size > 0 });
});

safety.get('/me', async (req, res, next) => {
  try { res.json(publicSession(await getSafetySession(req))); } catch (error) { next(error); }
});

safety.put('/profile', requireSafetySession, async (req, res, next) => {
  try {
    const role = text(req.body?.role, 40);
    if (!roles.has(role)) return res.status(400).json({ error: 'INVALID_ROLE' });
    const organizationName = role === 'organization' ? text(req.body?.organizationName, 180) : '';
    const verificationNote = text(req.body?.verificationNote, 500);
    if (role === 'organization' && organizationName.length < 2) return res.status(400).json({ error: 'ORGANIZATION_NAME_REQUIRED' });

    const current = req.safetySession;
    let verificationStatus = 'basic';
    if (role === 'student' || role === 'organization') verificationStatus = 'pending';
    if (current.verificationStatus === 'verified' && current.role === role) verificationStatus = 'verified';

    await query(
      `INSERT INTO smulink_profiles (user_id, role, verification_status, organization_name, verification_note)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (user_id)
       DO UPDATE SET role = EXCLUDED.role,
                     verification_status = CASE
                       WHEN smulink_profiles.role = EXCLUDED.role AND smulink_profiles.verification_status = 'verified' THEN 'verified'
                       ELSE EXCLUDED.verification_status
                     END,
                     organization_name = EXCLUDED.organization_name,
                     verification_note = EXCLUDED.verification_note,
                     updated_at = NOW()`,
      [current.userId, role, verificationStatus, organizationName || null, verificationNote || null],
    );
    res.json(publicSession(await getSafetySession(req)));
  } catch (error) { next(error); }
});

safety.post('/reports', requireSafetySession, async (req, res, next) => {
  try {
    const targetType = text(req.body?.targetType, 40);
    const targetId = text(req.body?.targetId, 200);
    const reason = text(req.body?.reason, 80);
    const detail = text(req.body?.detail, 1200);
    if (!['user','organization','project'].includes(targetType) || targetId.length < 2 || !reportReasons.has(reason) || detail.length < 5) {
      return res.status(400).json({ error: 'INVALID_REPORT' });
    }
    const id = crypto.randomUUID();
    await query(
      `INSERT INTO smulink_reports (id, reporter_user_id, target_type, target_id, reason, detail)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [id, req.safetySession.userId, targetType, targetId, reason, detail],
    );
    res.status(201).json({ ok: true, id });
  } catch (error) { next(error); }
});

safety.get('/admin/users', requireSafetySession, requireAdmin, async (_req, res, next) => {
  try {
    const result = await query(
      `SELECT u.id, u.email, u.display_name,
              COALESCE(p.role, 'resident') AS role,
              COALESCE(p.verification_status, 'unverified') AS verification_status,
              COALESCE(p.organization_name, '') AS organization_name,
              COALESCE(p.account_status, 'active') AS account_status,
              COALESCE(p.status_reason, '') AS status_reason,
              u.created_at
         FROM users u
         LEFT JOIN smulink_profiles p ON p.user_id = u.id
        ORDER BY u.created_at DESC
        LIMIT 100`,
    );
    res.json({ users: result.rows });
  } catch (error) { next(error); }
});

safety.patch('/admin/users/:userId', requireSafetySession, requireAdmin, async (req, res, next) => {
  try {
    const userId = text(req.params.userId, 80);
    const accountStatus = text(req.body?.accountStatus, 40);
    const verificationStatus = text(req.body?.verificationStatus, 40);
    const reason = text(req.body?.reason, 600);
    if (accountStatus && !accountStates.has(accountStatus)) return res.status(400).json({ error: 'INVALID_ACCOUNT_STATUS' });
    if (verificationStatus && !verificationStates.has(verificationStatus)) return res.status(400).json({ error: 'INVALID_VERIFICATION_STATUS' });
    if (!accountStatus && !verificationStatus) return res.status(400).json({ error: 'NO_CHANGES' });

    await query(
      `INSERT INTO smulink_profiles (user_id, role, verification_status, account_status, status_reason)
       SELECT id, 'resident', COALESCE(NULLIF($2, ''), 'unverified'), COALESCE(NULLIF($1, ''), 'active'), NULLIF($3, '')
         FROM users WHERE id = $4
       ON CONFLICT (user_id)
       DO UPDATE SET account_status = COALESCE(NULLIF($1, ''), smulink_profiles.account_status),
                     verification_status = COALESCE(NULLIF($2, ''), smulink_profiles.verification_status),
                     status_reason = CASE WHEN NULLIF($1, '') IS NOT NULL THEN NULLIF($3, '') ELSE smulink_profiles.status_reason END,
                     updated_at = NOW()`,
      [accountStatus, verificationStatus, reason, userId],
    );
    await query(
      `INSERT INTO smulink_moderation_actions (id, target_user_id, admin_user_id, action, reason)
       VALUES ($1, $2, $3, $4, $5)`,
      [crypto.randomUUID(), userId, req.safetySession.userId, `status:${accountStatus || '-'};verification:${verificationStatus || '-'}`, reason || null],
    );
    res.json({ ok: true });
  } catch (error) { next(error); }
});

safety.get('/admin/reports', requireSafetySession, requireAdmin, async (_req, res, next) => {
  try {
    const result = await query(
      `SELECT r.id, r.target_type, r.target_id, r.reason, r.detail, r.status, r.created_at,
              u.display_name AS reporter_name
         FROM smulink_reports r
         JOIN users u ON u.id = r.reporter_user_id
        ORDER BY CASE r.status WHEN 'new' THEN 0 WHEN 'reviewing' THEN 1 ELSE 2 END, r.created_at DESC
        LIMIT 100`,
    );
    res.json({ reports: result.rows });
  } catch (error) { next(error); }
});

safety.patch('/admin/reports/:reportId', requireSafetySession, requireAdmin, async (req, res, next) => {
  try {
    const status = text(req.body?.status, 40);
    if (!['new','reviewing','resolved','dismissed'].includes(status)) return res.status(400).json({ error: 'INVALID_REPORT_STATUS' });
    await query('UPDATE smulink_reports SET status = $1, updated_at = NOW() WHERE id = $2', [status, text(req.params.reportId, 80)]);
    res.json({ ok: true });
  } catch (error) { next(error); }
});

app.use('/api/safety', safety);

// Restricted accounts are blocked at the gateway for state-changing API calls.
app.use(async (req, res, next) => {
  if (!dbEnabled || ['GET','HEAD','OPTIONS'].includes(req.method) || req.path.startsWith('/api/safety') || req.path.startsWith('/api/auth/')) return next();
  try {
    const session = await getSafetySession(req);
    if (!session) return next();
    if (session.accountStatus === 'banned' || session.accountStatus === 'suspended') {
      return res.status(403).json({ error: 'ACCOUNT_RESTRICTED', status: session.accountStatus });
    }
    if (session.accountStatus === 'limited' && req.path.startsWith('/api/')) {
      return res.status(403).json({ error: 'ACCOUNT_LIMITED', status: session.accountStatus });
    }
    next();
  } catch (error) { next(error); }
});

function proxyToCore(req, res) {
  const headers = { ...req.headers };
  headers.host = req.headers.host || `127.0.0.1:${internalPort}`;
  headers['x-forwarded-host'] = req.headers.host || '';
  const proxy = http.request({
    hostname: '127.0.0.1',
    port: internalPort,
    path: req.originalUrl,
    method: req.method,
    headers,
  }, proxyRes => {
    res.statusCode = proxyRes.statusCode || 502;
    for (const [name, value] of Object.entries(proxyRes.headers)) {
      if (value === undefined || ['connection','keep-alive','transfer-encoding'].includes(name.toLowerCase())) continue;
      res.setHeader(name, value);
    }
    proxyRes.pipe(res);
  });
  proxy.on('error', error => {
    console.error('[gateway] core proxy error', error.message);
    if (!res.headersSent) res.status(503).json({ error: 'CORE_APP_STARTING' });
    else res.end();
  });
  req.pipe(proxy);
}

app.use(proxyToCore);

app.use((error, _req, res, _next) => {
  console.error('[safety]', error);
  if (!res.headersSent) res.status(500).json({ error: 'SAFETY_INTERNAL_ERROR' });
});

let coreProcess = null;

async function start() {
  if (dbEnabled) await ensureSafetySchema();
  coreProcess = spawn(process.execPath, ['server.js'], {
    env: { ...process.env, PORT: String(internalPort) },
    stdio: 'inherit',
  });
  coreProcess.on('exit', code => {
    if (code && code !== 0) console.error(`[gateway] core server exited with code ${code}`);
  });
  app.listen(publicPort, '0.0.0.0', () => {
    console.log(`[gateway] SMU.Link safety gateway listening on 0.0.0.0:${publicPort}; core=${internalPort}`);
  });
}

start().catch(error => {
  console.error('[gateway startup]', error);
  process.exit(1);
});

for (const signal of ['SIGINT','SIGTERM']) {
  process.on(signal, async () => {
    if (coreProcess && !coreProcess.killed) coreProcess.kill(signal);
    await closeDatabase();
    process.exit(0);
  });
}
