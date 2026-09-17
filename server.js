import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import express from 'express';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import dotenv from 'dotenv';
import { dbEnabled, initDatabase, query, closeDatabase } from './db.js';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = Number(process.env.PORT || 10000);
const GEMINI_MODEL = String(process.env.GEMINI_MODEL || 'gemini-3.8-flash').trim();
const isProduction = process.env.NODE_ENV === 'production';

app.set('trust proxy', 1);
app.disable('x-powered-by');
app.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }));
app.use(express.json({ limit: '700kb' }));
app.use('/api/', rateLimit({ windowMs: 60000, limit: 180, standardHeaders: 'draft-8', legacyHeaders: false }));

const memory = {
  guardian: { id: 1, role: 'guardian', name: '보호자', linked_profile_id: 2 },
  user: { id: 2, role: 'user', name: '사용자', linked_profile_id: 1 },
  settings: { profile_id: 2, grid_size: 4, voice_type: 'CHILD_MALE', speech_rate: 1.0, language_level: 2 },
  symbols: [
    ['추천','좋아요','👍','#82D8E9'],['추천','싫어요','✖','#82D8E9'],['추천','슬퍼요','😢','#82D8E9'],['추천','기뻐요','😊','#82D8E9'],
    ['음식','덥다','🥵','#82D8E9'],['음식','배','🍚','#FFDD83'],['대화','그리고','➕','#C3CDC9'],['대화','안녕','👋','#8089FF'],
    ['행동','달려요','🏃','#E5F1F8'],['행동','가다','➡️','#E6F8F0'],['음식','먹다','🍴','#E4F8EF'],['음식','물','🥤','#FFF1CB'],
    ['사람','가다','🚶','#E8F6EE'],['사람','엄마','👩','#FFE8DA'],['긴급어','아파요','🤕','#FFE7E8'],['긴급어','화장실','🚻','#FFF0C9']
  ].map((x,i)=>({id:i+1,profile_id:2,category:x[0],label:x[1],emoji:x[2],color:x[3],favorite:[7,11,13].includes(i),emergency:i>=14,sort_order:i})),
  routines: [
    {id:1,time_text:'08:00',repeat_type:'매일',sentence:'등교 준비 — 학교 상징 우선',enabled:true},
    {id:2,time_text:'12:30',repeat_type:'매일',sentence:'점심 약 복용 알림 팝업',enabled:true},
    {id:3,time_text:'21:00',repeat_type:'매일',sentence:'취침 루틴 — 양치, 약, 졸려요',enabled:false},
  ],
  pairings: new Map(), usage: []
};

async function getIds() {
  if (!dbEnabled) return { guardianId: 1, userId: 2 };
  const result = await query("SELECT id, role FROM malmoa_profiles WHERE role IN ('guardian','user') ORDER BY id");
  return {
    guardianId: result.rows.find(r=>r.role==='guardian')?.id,
    userId: result.rows.find(r=>r.role==='user')?.id,
  };
}

app.get('/api/health', (_req,res)=>res.json({ ok:true, app:'malmoa', database: dbEnabled ? 'configured':'memory' }));

app.get('/api/malmoa/bootstrap', async (_req,res,next)=>{
  try {
    if (!dbEnabled) return res.json({ guardian:memory.guardian, user:memory.user, settings:memory.settings, symbols:memory.symbols, routines:memory.routines });
    const { guardianId, userId } = await getIds();
    const [guardian,user,settings,symbols,routines] = await Promise.all([
      query('SELECT * FROM malmoa_profiles WHERE id=$1',[guardianId]),
      query('SELECT * FROM malmoa_profiles WHERE id=$1',[userId]),
      query('SELECT * FROM malmoa_settings WHERE profile_id=$1',[userId]),
      query('SELECT * FROM malmoa_symbols WHERE profile_id=$1 ORDER BY sort_order,id',[userId]),
      query('SELECT * FROM malmoa_routines WHERE guardian_profile_id=$1 ORDER BY time_text,id',[guardianId]),
    ]);
    res.json({ guardian:guardian.rows[0], user:user.rows[0], settings:settings.rows[0], symbols:symbols.rows, routines:routines.rows });
  } catch (error) { next(error); }
});

app.patch('/api/malmoa/settings', async (req,res,next)=>{
  try {
    const gridSize = [2,3,4].includes(Number(req.body.grid_size)) ? Number(req.body.grid_size) : undefined;
    const voiceType = ['CHILD_MALE','CHILD_FEMALE','ADULT_FEMALE'].includes(req.body.voice_type) ? req.body.voice_type : undefined;
    const speechRate = Math.max(.7,Math.min(1.3,Number(req.body.speech_rate || 1)));
    const languageLevel = Math.max(1,Math.min(4,Number(req.body.language_level || 2)));
    if (!dbEnabled) {
      if (gridSize) memory.settings.grid_size = gridSize;
      if (voiceType) memory.settings.voice_type = voiceType;
      memory.settings.speech_rate = speechRate; memory.settings.language_level = languageLevel;
      return res.json(memory.settings);
    }
    const { userId } = await getIds();
    const current = await query('SELECT * FROM malmoa_settings WHERE profile_id=$1',[userId]);
    const row = current.rows[0];
    const result = await query(`UPDATE malmoa_settings SET grid_size=$2,voice_type=$3,speech_rate=$4,language_level=$5,updated_at=NOW() WHERE profile_id=$1 RETURNING *`,[userId,gridSize ?? row.grid_size,voiceType ?? row.voice_type,speechRate,languageLevel]);
    res.json(result.rows[0]);
  } catch(error){ next(error); }
});

app.patch('/api/malmoa/symbols/:id', async (req,res,next)=>{
  try {
    const id = Number(req.params.id);
    const favorite = Boolean(req.body.favorite);
    const label = typeof req.body.label === 'string' && req.body.label.trim() ? req.body.label.trim().slice(0,60) : undefined;
    if (!dbEnabled) {
      const item = memory.symbols.find(s=>s.id===id); if (!item) return res.status(404).json({error:'NOT_FOUND'});
      if ('favorite' in req.body) item.favorite=favorite; if (label) item.label=label; return res.json(item);
    }
    const result = await query(`UPDATE malmoa_symbols SET favorite=COALESCE($2,favorite), label=COALESCE($3,label) WHERE id=$1 RETURNING *`,[id,'favorite' in req.body?favorite:null,label||null]);
    if (!result.rows[0]) return res.status(404).json({error:'NOT_FOUND'});
    res.json(result.rows[0]);
  } catch(error){ next(error); }
});

app.post('/api/malmoa/pairings', async (_req,res,next)=>{
  try {
    const code = String(crypto.randomInt(0,1000000)).padStart(6,'0');
    const expiresAt = new Date(Date.now()+10*60*1000);
    if (!dbEnabled) { memory.pairings.set(code,{code,expires_at:expiresAt.toISOString(),claimed_at:null}); return res.json({code,expires_at:expiresAt.toISOString()}); }
    const { guardianId } = await getIds();
    const result = await query('INSERT INTO malmoa_pairings(guardian_profile_id,code,expires_at) VALUES($1,$2,$3) RETURNING code,expires_at',[guardianId,code,expiresAt]);
    res.json(result.rows[0]);
  } catch(error){ next(error); }
});

app.post('/api/malmoa/pairings/claim', async (req,res,next)=>{
  try {
    const code = String(req.body.code || '').replace(/\D/g,'').slice(0,6);
    if (code.length!==6) return res.status(400).json({error:'INVALID_CODE'});
    if (!dbEnabled) {
      const pairing = memory.pairings.get(code); if (!pairing || new Date(pairing.expires_at)<new Date() || pairing.claimed_at) return res.status(400).json({error:'INVALID_OR_EXPIRED'});
      pairing.claimed_at = new Date().toISOString(); return res.json({ok:true,user_profile_id:2});
    }
    const { userId } = await getIds();
    const result = await query(`UPDATE malmoa_pairings SET user_profile_id=$2,claimed_at=NOW() WHERE code=$1 AND expires_at>NOW() AND claimed_at IS NULL RETURNING *`,[code,userId]);
    if (!result.rows[0]) return res.status(400).json({error:'INVALID_OR_EXPIRED'});
    res.json({ok:true,user_profile_id:userId});
  } catch(error){ next(error); }
});

app.post('/api/malmoa/usage', async (req,res,next)=>{
  try {
    const utterance = String(req.body.utterance||'').trim().slice(0,300);
    if (!utterance) return res.status(400).json({error:'EMPTY'});
    const emergency = Boolean(req.body.emergency);
    const source = String(req.body.source||'symbol').slice(0,30);
    if (!dbEnabled) { memory.usage.unshift({id:memory.usage.length+1,utterance,emergency,source,created_at:new Date().toISOString()}); return res.json({ok:true}); }
    const { userId } = await getIds();
    await query('INSERT INTO malmoa_usage_logs(user_profile_id,utterance,source,emergency) VALUES($1,$2,$3,$4)',[userId,utterance,source,emergency]);
    res.json({ok:true});
  } catch(error){ next(error); }
});

app.get('/api/malmoa/usage', async (_req,res,next)=>{
  try {
    if (!dbEnabled) return res.json(memory.usage.slice(0,100));
    const { userId } = await getIds();
    const result = await query('SELECT * FROM malmoa_usage_logs WHERE user_profile_id=$1 ORDER BY created_at DESC LIMIT 100',[userId]);
    res.json(result.rows);
  } catch(error){ next(error); }
});

app.post('/api/malmoa/ai', async (req,res,next)=>{
  try {
    const words = Array.isArray(req.body.words) ? req.body.words.map(v=>String(v).trim()).filter(Boolean).slice(0,8) : [];
    if (!words.length) return res.status(400).json({error:'EMPTY_WORDS'});
    const fallback = `${words.join(' ')} 주세요.`.replace(/\s+/g,' ').trim();
    const apiKey = String(process.env.GEMINI_API_KEY||'').trim();
    if (!apiKey) return res.json({text:fallback,source:'fallback'});
    const level = Math.max(1,Math.min(4,Number(req.body.level||2)));
    const prompt = `AAC 사용자가 고른 단어: ${words.join(', ')}. 의미를 새로 만들지 말고 한국어 한 문장으로 자연스럽게 정리해라. 언어 수준 ${level}/4. 출력은 문장 하나만.`;
    const controller = new AbortController(); const timer = setTimeout(()=>controller.abort(),12000);
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(GEMINI_MODEL)}:generateContent?key=${encodeURIComponent(apiKey)}`,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({contents:[{parts:[{text:prompt}]}],generationConfig:{temperature:.35,maxOutputTokens:120}}),signal:controller.signal});
      const data = await response.json();
      const text = data?.candidates?.[0]?.content?.parts?.map(p=>p.text||'').join('').trim();
      return res.json({text:text||fallback,source:text?'gemini':'fallback'});
    } finally { clearTimeout(timer); }
  } catch(error){ next(error); }
});

app.use(express.static(path.join(__dirname,'public'),{extensions:['html']}));
app.get(['/guardian','/user','/connect','/settings','/report'],(_req,res)=>res.sendFile(path.join(__dirname,'public','index.html')));
app.get('*',(_req,res)=>res.sendFile(path.join(__dirname,'public','index.html')));

app.use((error,_req,res,_next)=>{
  console.error(error);
  res.status(error.status||500).json({error:error.message||'INTERNAL_ERROR'});
});

let server;
initDatabase().catch(error=>console.error('[database] init failed',error)).finally(()=>{
  server=app.listen(port,'0.0.0.0',()=>console.log(`[malmoa] listening on ${port}`));
});

async function shutdown(){ if(server) server.close(); await closeDatabase(); process.exit(0); }
process.on('SIGTERM',shutdown); process.on('SIGINT',shutdown);
