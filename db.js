import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;
const connectionString = process.env.DATABASE_URL;
export const dbEnabled = Boolean(connectionString);
export const pool = dbEnabled ? new Pool({
  connectionString,
  max: Number(process.env.DB_POOL_MAX || 5),
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
  allowExitOnIdle: false,
}) : null;

if (pool) pool.on('error', (error) => console.error('[database] idle client error', error));

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
    console.warn('[database] DATABASE_URL is missing; in-memory demo mode enabled.');
    return false;
  }
  await query(`
    CREATE TABLE IF NOT EXISTS malmoa_profiles (
      id BIGSERIAL PRIMARY KEY,
      role TEXT NOT NULL CHECK (role IN ('guardian','user')),
      name TEXT NOT NULL,
      linked_profile_id BIGINT REFERENCES malmoa_profiles(id) ON DELETE SET NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS malmoa_settings (
      profile_id BIGINT PRIMARY KEY REFERENCES malmoa_profiles(id) ON DELETE CASCADE,
      grid_size INTEGER NOT NULL DEFAULT 4 CHECK (grid_size IN (2,3,4)),
      voice_type TEXT NOT NULL DEFAULT 'CHILD_MALE',
      speech_rate NUMERIC(3,1) NOT NULL DEFAULT 1.0,
      language_level INTEGER NOT NULL DEFAULT 2 CHECK (language_level BETWEEN 1 AND 4),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS malmoa_symbols (
      id BIGSERIAL PRIMARY KEY,
      profile_id BIGINT NOT NULL REFERENCES malmoa_profiles(id) ON DELETE CASCADE,
      category TEXT NOT NULL,
      label TEXT NOT NULL,
      emoji TEXT NOT NULL DEFAULT '💬',
      color TEXT NOT NULL DEFAULT '#AEE6F2',
      image_data TEXT NOT NULL DEFAULT '',
      favorite BOOLEAN NOT NULL DEFAULT FALSE,
      emergency BOOLEAN NOT NULL DEFAULT FALSE,
      sort_order INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS malmoa_pairings (
      id BIGSERIAL PRIMARY KEY,
      guardian_profile_id BIGINT NOT NULL REFERENCES malmoa_profiles(id) ON DELETE CASCADE,
      user_profile_id BIGINT REFERENCES malmoa_profiles(id) ON DELETE SET NULL,
      code CHAR(6) NOT NULL UNIQUE,
      expires_at TIMESTAMPTZ NOT NULL,
      claimed_at TIMESTAMPTZ,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE INDEX IF NOT EXISTS malmoa_pairings_code_idx ON malmoa_pairings(code);

    CREATE TABLE IF NOT EXISTS malmoa_routines (
      id BIGSERIAL PRIMARY KEY,
      guardian_profile_id BIGINT NOT NULL REFERENCES malmoa_profiles(id) ON DELETE CASCADE,
      time_text CHAR(5) NOT NULL,
      repeat_type TEXT NOT NULL DEFAULT '매일',
      sentence TEXT NOT NULL,
      enabled BOOLEAN NOT NULL DEFAULT TRUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS malmoa_usage_logs (
      id BIGSERIAL PRIMARY KEY,
      user_profile_id BIGINT NOT NULL REFERENCES malmoa_profiles(id) ON DELETE CASCADE,
      utterance TEXT NOT NULL,
      source TEXT NOT NULL DEFAULT 'symbol',
      emergency BOOLEAN NOT NULL DEFAULT FALSE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
  await query("ALTER TABLE malmoa_symbols ADD COLUMN IF NOT EXISTS image_data TEXT NOT NULL DEFAULT ''");

  const profileCount = await query('SELECT COUNT(*)::int AS count FROM malmoa_profiles');
  if (profileCount.rows[0].count === 0) {
    const guardian = await query("INSERT INTO malmoa_profiles(role,name) VALUES('guardian','보호자') RETURNING id");
    const user = await query("INSERT INTO malmoa_profiles(role,name) VALUES('user','사용자') RETURNING id");
    const guardianId = guardian.rows[0].id;
    const userId = user.rows[0].id;
    await query('UPDATE malmoa_profiles SET linked_profile_id=$1 WHERE id=$2', [userId, guardianId]);
    await query('UPDATE malmoa_profiles SET linked_profile_id=$1 WHERE id=$2', [guardianId, userId]);
    await query('INSERT INTO malmoa_settings(profile_id) VALUES($1),($2)', [guardianId, userId]);
    const symbols = [
      ['추천','좋아요','👍','#82D8E9',false,false],['추천','싫어요','✖','#82D8E9',false,false],['추천','슬퍼요','😢','#82D8E9',false,false],['추천','기뻐요','😊','#82D8E9',false,false],
      ['음식','덥다','🥵','#82D8E9',false,false],['음식','배','🍚','#FFDD83',false,false],['대화','그리고','➕','#C3CDC9',false,false],['대화','안녕','👋','#8089FF',true,false],
      ['행동','달려요','🏃','#E5F1F8',false,false],['행동','가다','➡️','#E6F8F0',false,false],['음식','먹다','🍴','#E4F8EF',false,false],['음식','물','🥤','#FFF1CB',true,false],
      ['사람','가다','🚶','#E8F6EE',false,false],['사람','엄마','👩','#FFE8DA',true,false],['긴급어','아파요','🤕','#FFE7E8',false,true],['긴급어','화장실','🚻','#FFF0C9',false,true]
    ];
    for (let i=0;i<symbols.length;i++) {
      const [category,label,emoji,color,favorite,emergency] = symbols[i];
      await query('INSERT INTO malmoa_symbols(profile_id,category,label,emoji,color,favorite,emergency,sort_order) VALUES($1,$2,$3,$4,$5,$6,$7,$8)', [userId,category,label,emoji,color,favorite,emergency,i]);
    }
    await query("INSERT INTO malmoa_routines(guardian_profile_id,time_text,repeat_type,sentence,enabled) VALUES($1,'08:00','매일','등교 준비 — 학교 상징 우선',true),($1,'12:30','매일','점심 약 복용 알림 팝업',true),($1,'21:00','매일','취침 루틴 — 양치, 약, 졸려요',false)", [guardianId]);
  }
  console.log('[database] malmoa schema ready');
  return true;
}

export async function closeDatabase() {
  if (pool) await pool.end();
}
