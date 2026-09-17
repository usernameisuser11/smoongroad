let deferredInstallPrompt = null;

const standalone = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
const ios = () => /iphone|ipad|ipod/i.test(navigator.userAgent);

function roleName() {
  return location.pathname.startsWith('/user') || location.pathname.startsWith('/connect') ? '사용자 AAC' : '보호자';
}

function ensureInstallButton() {
  const header = document.querySelector('.topbar, .user-head');
  if (!header || standalone() || header.querySelector('[data-pwa-install]')) return;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'pwa-install';
  button.dataset.pwaInstall = '1';
  button.textContent = '앱 설치';
  const spacer = header.querySelector('.spacer');
  if (spacer?.nextSibling) header.insertBefore(button, spacer.nextSibling);
  else header.append(button);
}

function showGuide() {
  document.querySelector('.pwa-guide')?.remove();
  const layer = document.createElement('div');
  layer.className = 'modal-bg pwa-guide';
  const guide = ios()
    ? '<b>iPhone / iPad</b><br>Safari 아래쪽의 <strong>공유</strong> 버튼을 누른 뒤 <strong>홈 화면에 추가</strong>를 선택해 주세요.'
    : '<b>Android / Chrome</b><br>브라우저 메뉴에서 <strong>앱 설치</strong> 또는 <strong>홈 화면에 추가</strong>를 선택해 주세요.';
  layer.innerHTML = `<section class="modal pwa-guide-card"><div class="pwa-guide-icon">＋</div><h2>${roleName()} 앱 설치</h2><p>${guide}</p><p class="pwa-guide-note">설치 후에는 일반 앱처럼 홈 화면에서 바로 실행할 수 있어요.</p><button type="button" class="primary" data-pwa-close>확인</button></section>`;
  document.body.append(layer);
}

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  ensureInstallButton();
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  document.querySelector('[data-pwa-install]')?.remove();
});

document.addEventListener('click', async (event) => {
  const install = event.target.closest('[data-pwa-install]');
  if (install) {
    if (standalone()) return;
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice.catch(() => null);
      deferredInstallPrompt = null;
    } else {
      showGuide();
    }
    return;
  }
  if (event.target.closest('[data-pwa-close]') || event.target.classList.contains('pwa-guide')) {
    document.querySelector('.pwa-guide')?.remove();
  }
});

const observer = new MutationObserver(ensureInstallButton);
observer.observe(document.documentElement, { childList: true, subtree: true });
ensureInstallButton();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(() => {}));
}
