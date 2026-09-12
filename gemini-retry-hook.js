const nativeFetch = globalThis.fetch.bind(globalThis);

const PRIMARY_MODEL = String(process.env.GEMINI_MODEL || 'gemini-3.8-flash').trim();
const FALLBACK_MODEL = String(process.env.GEMINI_FALLBACK_MODEL || 'gemini-3.7-flash').trim();
const PRIMARY_RETRIES = Math.max(0, Math.min(2, Number(process.env.AI_PRIMARY_RETRIES || 1)));
const RETRY_BASE_MS = Math.max(250, Math.min(3000, Number(process.env.AI_RETRY_BASE_MS || 700)));
const ATTEMPT_TIMEOUT_MS = Math.max(3000, Math.min(15000, Number(process.env.GEMINI_ATTEMPT_TIMEOUT_MS || 8000)));

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function jitteredDelay(retryIndex) {
  const base = RETRY_BASE_MS * (2 ** retryIndex);
  const jitter = Math.floor(Math.random() * Math.max(120, RETRY_BASE_MS * 0.35));
  return base + jitter;
}

function requestUrl(input) {
  if (typeof input === 'string') return input;
  if (input instanceof URL) return input.toString();
  return input?.url || '';
}

function isGeminiGenerateContent(url) {
  return /generativelanguage\.googleapis\.com\/v1beta\/models\/[^/:]+:generateContent/.test(url);
}

function urlForModel(url, model) {
  return url.replace(/(\/v1beta\/models\/)[^/:]+(:generateContent)/, `$1${encodeURIComponent(model)}$2`);
}

function sanitizeGenerationConfig(init) {
  if (!init?.body || typeof init.body !== 'string') return init;
  try {
    const body = JSON.parse(init.body);
    if (body?.generationConfig && typeof body.generationConfig === 'object') {
      delete body.generationConfig.temperature;
      delete body.generationConfig.top_p;
      delete body.generationConfig.topP;
      delete body.generationConfig.top_k;
      delete body.generationConfig.topK;
      delete body.generationConfig.candidate_count;
      delete body.generationConfig.candidateCount;
    }
    return { ...init, body: JSON.stringify(body) };
  } catch {
    return init;
  }
}

function makeAiError(code, options = {}) {
  const error = new Error(code);
  error.status = options.status || 502;
  error.upstreamStatus = options.upstreamStatus || null;
  error.retryable = Boolean(options.retryable);
  error.model = options.model || null;
  error.smulinkAiError = true;
  return error;
}

function classifyStatus(status, model) {
  if (status === 408) return makeAiError('AI_TIMEOUT', { status: 504, upstreamStatus: status, retryable: true, model });
  if (status === 429) return makeAiError('AI_RATE_LIMIT', { status: 429, upstreamStatus: status, retryable: true, model });
  if (status === 503) return makeAiError('AI_SERVICE_UNAVAILABLE', { status: 503, upstreamStatus: status, retryable: true, model });
  if (status >= 500) return makeAiError('AI_SERVER_ERROR', { status: 503, upstreamStatus: status, retryable: true, model });
  if (status === 400) return makeAiError('AI_BAD_REQUEST', { status: 502, upstreamStatus: status, retryable: false, model });
  if (status === 401 || status === 403) return makeAiError('AI_AUTH_ERROR', { status: 502, upstreamStatus: status, retryable: false, model });
  if (status === 404) return makeAiError('AI_MODEL_NOT_FOUND', { status: 502, upstreamStatus: status, retryable: false, model });
  return makeAiError('AI_UPSTREAM_ERROR', { status: 502, upstreamStatus: status, retryable: false, model });
}

async function attemptGemini(input, init, model) {
  const originalUrl = requestUrl(input);
  const url = urlForModel(originalUrl, model);
  const cleanInit = sanitizeGenerationConfig(init || {});
  const attemptController = new AbortController();
  const timer = setTimeout(() => attemptController.abort(), ATTEMPT_TIMEOUT_MS);
  const externalSignal = cleanInit.signal;
  const signal = externalSignal && typeof AbortSignal.any === 'function'
    ? AbortSignal.any([externalSignal, attemptController.signal])
    : attemptController.signal;

  try {
    const response = await nativeFetch(url, { ...cleanInit, signal });
    if (response.ok) return response;

    let upstreamMessage = '';
    try {
      const payload = await response.clone().json();
      upstreamMessage = String(payload?.error?.message || '').slice(0, 220);
    } catch {}

    const error = classifyStatus(response.status, model);
    console.warn(`[gemini-retry] ${model} -> HTTP ${response.status}${upstreamMessage ? ` · ${upstreamMessage}` : ''}`);
    throw error;
  } catch (error) {
    if (error?.smulinkAiError) throw error;
    if (error?.name === 'AbortError') {
      if (externalSignal?.aborted) throw error;
      throw makeAiError('AI_TIMEOUT', { status: 504, retryable: true, model });
    }
    const networkError = makeAiError('AI_NETWORK_ERROR', { status: 503, retryable: true, model });
    networkError.cause = error;
    throw networkError;
  } finally {
    clearTimeout(timer);
  }
}

async function resilientGeminiFetch(input, init) {
  const url = requestUrl(input);
  if (!isGeminiGenerateContent(url)) return nativeFetch(input, init);

  const models = [PRIMARY_MODEL];
  if (FALLBACK_MODEL && FALLBACK_MODEL !== PRIMARY_MODEL) models.push(FALLBACK_MODEL);

  let lastError = null;
  for (let modelIndex = 0; modelIndex < models.length; modelIndex += 1) {
    const model = models[modelIndex];
    const attempts = modelIndex === 0 ? PRIMARY_RETRIES + 1 : 1;

    for (let attempt = 0; attempt < attempts; attempt += 1) {
      try {
        const response = await attemptGemini(input, init, model);
        if (modelIndex > 0) console.info(`[gemini-retry] fallback model recovered request with ${model}`);
        return response;
      } catch (error) {
        if (error?.name === 'AbortError') throw error;
        lastError = error;
        console.warn(`[gemini-retry] model=${model} attempt=${attempt + 1}/${attempts} error=${error?.message || 'unknown'}`);

        if (!error?.retryable) throw error;
        if (attempt < attempts - 1) await sleep(jitteredDelay(attempt));
      }
    }

    if (modelIndex === 0 && models.length > 1 && lastError?.retryable) {
      console.warn(`[gemini-retry] switching ${PRIMARY_MODEL} -> ${FALLBACK_MODEL}`);
    }
  }

  throw lastError || makeAiError('AI_UPSTREAM_ERROR', { status: 502, retryable: false, model: PRIMARY_MODEL });
}

globalThis.fetch = resilientGeminiFetch;

console.info(`[gemini-retry] enabled primary=${PRIMARY_MODEL} fallback=${FALLBACK_MODEL || 'none'} retries=${PRIMARY_RETRIES} attemptTimeout=${ATTEMPT_TIMEOUT_MS}ms`);
