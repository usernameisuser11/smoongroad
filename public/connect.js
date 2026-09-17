const form = document.querySelector('#connect-form');
const input = document.querySelector('#pair-code');
const status = document.querySelector('#connect-status');
const submit = document.querySelector('#connect-submit');

function digits(value){ return String(value || '').replace(/\D/g,'').slice(0,6); }
function setStatus(message, ok=false){
  status.textContent = message;
  status.classList.toggle('success', ok);
}
async function api(url, options={}){
  const response = await fetch(url,{headers:{'content-type':'application/json',...(options.headers||{})},...options});
  const data = await response.json().catch(()=>({}));
  if(!response.ok) throw new Error(data.error || '요청에 실패했습니다.');
  return data;
}

const fromQr = digits(new URLSearchParams(location.search).get('code'));
if(fromQr){
  input.value = fromQr;
  setStatus('QR에서 연결 코드를 확인했어요. 연결하기를 눌러 주세요.', true);
}

input.addEventListener('input',()=>{
  input.value = digits(input.value);
  setStatus('');
});

form.addEventListener('submit',async event=>{
  event.preventDefault();
  const code = digits(input.value);
  if(code.length !== 6){
    setStatus('6자리 연결 코드를 입력해 주세요.');
    input.focus();
    return;
  }
  submit.disabled = true;
  submit.textContent = '연결 중...';
  setStatus('보호자와 연결하고 있어요...');
  try{
    const result = await api('/api/malmoa/pairings/claim',{method:'POST',body:JSON.stringify({code})});
    localStorage.setItem('malmoa-user-paired','1');
    if(result.user_profile_id) localStorage.setItem('malmoa-user-profile-id',String(result.user_profile_id));
    setStatus('연결되었습니다. AAC 화면을 여는 중이에요.', true);
    setTimeout(()=>location.replace('/user'),650);
  }catch(error){
    submit.disabled = false;
    submit.textContent = '연결하기';
    const known = String(error.message || '');
    setStatus(known.includes('INVALID') ? '코드가 만료되었거나 이미 사용되었습니다. 보호자에게 새 코드를 받아 주세요.' : '연결하지 못했습니다. 잠시 후 다시 시도해 주세요.');
  }
});