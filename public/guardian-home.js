const app = document.querySelector('#app');
const toast = document.querySelector('#toast');
let pairing = null;

function showToast(message){
  if(!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(showToast.t);
  showToast.t = setTimeout(()=>toast.hidden = true, 2200);
}

async function api(url, options={}){
  const response = await fetch(url,{headers:{'content-type':'application/json',...(options.headers||{})},...options});
  const data = await response.json().catch(()=>({}));
  if(!response.ok) throw new Error(data.error || '요청에 실패했습니다.');
  return data;
}

function digits(value){ return String(value || '').replace(/\D/g,'').slice(0,6); }
function esc(value){ return String(value ?? '').replace(/[&<>\"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[m])); }

function pairingView(){
  if(!pairing){
    return `<div class="pairing-empty"><div class="pairing-empty-icon">⌁</div><h2>사용자 기기를 연결해 주세요</h2><p>연결 코드는 10분 동안 사용할 수 있어요. 사용자 폰에서 QR을 스캔하거나 6자리 코드를 입력하면 됩니다.</p><button class="pairing-primary" id="make-pairing">연결 코드 만들기</button></div>`;
  }
  const code = digits(pairing.code);
  const connectUrl = `${location.origin}/connect?code=${encodeURIComponent(code)}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=8&data=${encodeURIComponent(connectUrl)}`;
  const expires = pairing.expires_at ? new Date(pairing.expires_at).toLocaleTimeString('ko-KR',{hour:'2-digit',minute:'2-digit'}) : '';
  return `<div class="pairing-live"><div class="pairing-copy"><span class="pairing-kicker">사용자 기기 연결</span><h2>QR을 스캔하거나<br>코드를 입력해 주세요</h2><p>사용자 폰 기본 카메라로 QR을 비추면 연결 화면이 바로 열립니다.</p><div class="pairing-code" aria-label="연결 코드">${code.split('').map(n=>`<b>${n}</b>`).join('')}</div><div class="pairing-actions"><button class="pairing-primary" id="copy-code">코드 복사</button><button class="pairing-secondary" id="share-pairing">연결 링크 공유</button><button class="pairing-secondary" id="refresh-pairing">새 코드 발급</button></div><small>${expires ? `${expires}까지 유효 · ` : ''}한 번 연결하면 이 코드는 다시 사용할 수 없어요.</small></div><div class="pairing-qr-wrap"><div class="pairing-qr"><img src="${qrUrl}" alt="사용자 기기 연결 QR 코드"></div><strong>사용자 폰으로 스캔</strong><span>말모아 AAC 연결 화면으로 이동합니다.</span></div></div>`;
}

function render(data){
  const guardianName = esc(data?.guardian?.name || '보호자');
  app.innerHTML = `<div class="guardian-shell"><header class="guardian-topbar"><a class="brand" href="/guardian">Mal<b>Moa</b></a><nav><a class="active" href="/guardian">홈</a><a href="/settings">설정</a><a href="/report">사용 기록</a></nav><div class="spacer"></div><a class="user-link" href="/user">사용자 화면</a></header><main class="guardian-home"><section class="guardian-hero"><div><span>GUARDIAN</span><h1>${guardianName}님,<br>사용자와 말모아를 연결해요</h1><p>보호자 설정은 연결된 AAC 사용자 기기에 반영되고, 사용 기록도 이곳에서 확인할 수 있어요.</p></div><a class="settings-link" href="/settings">환경 설정 열기 →</a></section><section class="pairing-panel">${pairingView()}</section><div class="guardian-cards"><a class="guardian-card" href="/settings"><i>⚙</i><div><strong>사용자 환경 설정</strong><small>격자 크기 · TTS 음성 · 루틴 관리</small></div><span>→</span></a><a class="guardian-card" href="/report"><i>▥</i><div><strong>사용 기록 확인</strong><small>AAC 발화 기록과 긴급 사용 확인</small></div><span>→</span></a></div></main></div>`;
  bind();
}

async function createPairing(data){
  const button = document.querySelector('#make-pairing') || document.querySelector('#refresh-pairing');
  if(button){ button.disabled = true; button.textContent = '코드 만드는 중...'; }
  try{
    pairing = await api('/api/malmoa/pairings',{method:'POST',body:'{}'});
    render(data);
  }catch(error){
    if(button) button.disabled = false;
    showToast(error.message || '연결 코드를 만들지 못했습니다.');
  }
}

function bind(){
  const currentData = window.__malmoaGuardianData;
  document.querySelector('#make-pairing')?.addEventListener('click',()=>createPairing(currentData));
  document.querySelector('#refresh-pairing')?.addEventListener('click',()=>createPairing(currentData));
  document.querySelector('#copy-code')?.addEventListener('click',async()=>{
    const code = digits(pairing?.code);
    try{ await navigator.clipboard.writeText(code); showToast('연결 코드를 복사했습니다.'); }
    catch{ showToast(`연결 코드: ${code}`); }
  });
  document.querySelector('#share-pairing')?.addEventListener('click',async()=>{
    const code = digits(pairing?.code);
    const url = `${location.origin}/connect?code=${encodeURIComponent(code)}`;
    if(navigator.share){
      try{ await navigator.share({title:'말모아 사용자 기기 연결',text:`말모아 연결 코드 ${code}`,url}); return; }
      catch(error){ if(error?.name === 'AbortError') return; }
    }
    try{ await navigator.clipboard.writeText(url); showToast('연결 링크를 복사했습니다.'); }
    catch{ showToast(`연결 코드: ${code}`); }
  });
}

(async()=>{
  try{
    const data = await api('/api/malmoa/bootstrap');
    window.__malmoaGuardianData = data;
    render(data);
  }catch(error){
    app.innerHTML = `<main class="connect-page"><section class="connect-card"><div class="connect-brand">Mal<b>Moa</b></div><h1>연결 정보를 불러오지 못했어요</h1><p>${esc(error.message)}</p><div class="connect-actions"><button onclick="location.reload()">다시 시도</button></div></section></main>`;
  }
})();