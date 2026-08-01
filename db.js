import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;

export const dbEnabled = Boolean(connectionString);

export const pool = dbEnabled
  ? new Pool({
      connectionString,
      max: Number(process.env.DB_POOL_MAX || 5),
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 10_000,
      allowExitOnIdle: false,
    })
  : null;

if (pool) {
  pool.on('error', (error) => {
    console.error('[database] unexpected idle client error', error);
  });
}

export async function query(text, params = []) {
  if (!pool) {
    const error = new Error('DATABASE_URL is not configured');
    error.code = 'DATABASE_DISABLED';
    throw error;
  }
  return pool.query(text, params);
}

export async function initDatabase() {
  if (!pool) {
    console.warn('[database] DATABASE_URL is missing. Guest mode will still work, but cloud sync is disabled.');
    return false;
  }

  await query(`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY,
      email TEXT,
      display_name TEXT NOT NULL DEFAULT '수뭉로드 사용자',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS oauth_accounts (
      provider TEXT NOT NULL CHECK (provider IN ('google', 'kakao')),
      provider_user_id TEXT NOT NULL,
      user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      email TEXT,
      display_name TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      PRIMARY KEY (provider, provider_user_id)
    );

    CREATE INDEX IF NOT EXISTS oauth_accounts_user_id_idx
      ON oauth_accounts(user_id);

    CREATE TABLE IF NOT EXISTS sessions (
      token_hash CHAR(64) PRIMARY KEY,
      user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      provider TEXT NOT NULL CHECK (provider IN ('google', 'kakao')),
      expires_at TIMESTAMPTZ NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE INDEX IF NOT EXISTS sessions_user_id_idx
      ON sessions(user_id);
    CREATE INDEX IF NOT EXISTS sessions_expires_at_idx
      ON sessions(expires_at);

    CREATE TABLE IF NOT EXISTS user_data (
      user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
      payload JSONB NOT NULL DEFAULT '{}'::jsonb,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );


    CREATE TABLE IF NOT EXISTS feedback (
      id UUID PRIMARY KEY,
      user_id UUID REFERENCES users(id) ON DELETE SET NULL,
      major_id TEXT,
      feedback_type TEXT NOT NULL,
      detail TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'new',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE INDEX IF NOT EXISTS feedback_created_at_idx
      ON feedback(created_at DESC);
  `);

  await query('DELETE FROM sessions WHERE expires_at < NOW()');
  console.log('[database] schema ready');
  return true;
}

export async function closeDatabase() {
  if (pool) await pool.end();
}
