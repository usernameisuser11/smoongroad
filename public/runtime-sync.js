(()=>{
  const nativeFetch=window.fetch.bind(window);
  const BOOT='malmoa-runtime-bootstrap-v1';
  const LOGS='malmoa-runtime-usage-v1';
  const QUEUE='malmoa-runtime-usage-queue-v1';
  const jsonResponse=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json'}});
  const read=(k,fallback=null)=>{try{return JSON.parse(localStorage.getItem(k)||'null')??fallback}catch{return fallback}};
  const write=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
  const methodOf=(input,init)=>String(init?.method||(input instanceof Request?input.method:'GET')||'GET').toUpperCase();
  const urlOf=(input)=>new URL(typeof input==='string'?input:input.url,location.href);
  const bodyOf=async(input,init)=>{if(typeof init?.body==='string')return init.body;if(input instanceof Request){try{return await input.clone().text()}catch{}}return ''};

  async function queuedUsage(input,init){
    try{return await nativeFetch(input,init)}catch(err){
      const body=await bodyOf(input,init);const q=read(QUEUE,[]);q.push({body,at:Date.now()});write(QUEUE,q.slice(-100));updateBadge();return jsonResponse({ok:true,queued:true},202)
    }
  }
  async function cachedGet(input,init,key){
    try{const r=await nativeFetch(input,{...init,cache:'no-store'});if(r.ok){try{write(key,await r.clone().json())}catch{}}return r}catch(err){const cached=read(key);if(cached)return jsonResponse(cached,200);throw err}
  }
  window.fetch=async(input,init={})=>{
    const u=urlOf(input),m=methodOf(input,init);
    if(u.origin===location.origin&&u.pathname==='/api/malmoa/bootstrap'&&m==='GET')return cachedGet(input,init,BOOT);
    if(u.origin===location.origin&&u.pathname==='/api/malmoa/usage'&&m==='GET')return cachedGet(input,init,LOGS);
    if(u.origin===location.origin&&u.pathname==='/api/malmoa/usage'&&m==='POST')return queuedUsage(input,init);
    return nativeFetch(input,init);
  };

  async function flushQueue(){
    if(!navigator.onLine)return;const q=read(QUEUE,[]);if(!q.length)return;
    const remain=[];
    for(const item of q){try{const r=await nativeFetch('/api/malmoa/usage',{method:'POST',headers:{'content-type':'application/json'},body:item.body});if(!r.ok)remain.push(item)}catch{remain.push(item)}}
    write(QUEUE,remain);updateBadge();
  }

  let badge=null;
  function ensureBadge(){
    if(badge||!document.body)return;
    badge=document.createElement('button');badge.type='button';badge.id='runtime-sync-badge';badge.hidden=true;document.body.appendChild(badge);
  }
  function updateBadge(message){
    ensureBadge();if(!badge)return;
    const q=read(QUEUE,[]).length;
    if(message){badge.textContent=message;badge.hidden=false;return}
    if(!navigator.onLine){badge.textContent='오프라인 · 마지막 화면 사용 중';badge.hidden=false;badge.onclick=null;return}
    if(q){badge.textContent=`연결 복구 중 · 기록 ${q}개 대기`;badge.hidden=false;badge.onclick=null;return}
    badge.hidden=true;badge.onclick=null;
  }
  function signature(v){
    const s=v?.settings||{};const symbols=(v?.symbols||[]).map(x=>[x.id,x.label,x.category,x.emoji,x.color,!!x.favorite,!!x.emergency,x.updated_at||'']);
    const routines=(v?.routines||[]).map(x=>[x.id,x.time_text,x.repeat_type,x.sentence,!!x.enabled]);
    return JSON.stringify([s.grid_size,s.voice_type,s.speech_rate,s.language_level,symbols,routines]);
  }
  function safeToReload(){
    if(document.querySelector('.modal-bg'))return false;
    if(location.pathname==='/user'&&document.querySelectorAll('.symbol.selected').length)return false;
    const edit=[...document.querySelectorAll('button')].some(x=>x.textContent?.includes('편집 모드 ON'));
    if(edit)return false;
    return true;
  }
  let bootSig=null,usageSig=null,polling=false;
  async function poll(){
    if(polling||document.hidden||!navigator.onLine)return;polling=true;
    try{
      if(['/user','/guardian','/settings'].includes(location.pathname)){
        const r=await nativeFetch('/api/malmoa/bootstrap',{cache:'no-store'});if(r.ok){const d=await r.json();write(BOOT,d);const sig=signature(d);if(bootSig===null)bootSig=sig;else if(sig!==bootSig){bootSig=sig;if(safeToReload())location.reload();else{updateBadge('새 설정 있음 · 눌러서 반영');ensureBadge();badge.onclick=()=>location.reload()}}}
      }
      if(['/guardian','/report'].includes(location.pathname)){
        const r=await nativeFetch('/api/malmoa/usage',{cache:'no-store'});if(r.ok){const d=await r.json();write(LOGS,d);const sig=JSON.stringify((d||[]).slice(0,20).map(x=>[x.id,x.created_at,x.emergency,x.utterance]));if(usageSig===null)usageSig=sig;else if(sig!==usageSig){usageSig=sig;if(safeToReload())location.reload();else{updateBadge('새 사용 기록 있음 · 눌러서 반영');ensureBadge();badge.onclick=()=>location.reload()}}}
      }
    }catch{}finally{polling=false}
  }
  addEventListener('online',()=>{updateBadge();flushQueue().then(poll)});
  addEventListener('offline',()=>updateBadge());
  document.addEventListener('visibilitychange',()=>{if(!document.hidden){flushQueue();poll()}});
  document.addEventListener('DOMContentLoaded',()=>{updateBadge();flushQueue();setInterval(poll,5000);setTimeout(poll,1200)});
})();