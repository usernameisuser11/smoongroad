(() => {
  const PREBOOT_CLASS = 'smulink-preboot';
  const PREBOOT_STYLE_ID = 'smulinkPreBootStyle';
  const BOOT_CLASS = 'smulink-ui-loading';
  const BOOT_ID = 'smulinkBootScreen';

  function releasePreboot() {
    document.documentElement.classList.remove(PREBOOT_CLASS);
    document.getElementById(PREBOOT_STYLE_ID)?.remove();
  }

  function startBootScreen() {
    document.documentElement.classList.add(BOOT_CLASS);

    const style = document.createElement('style');
    style.id = 'smulinkBootStyle';
    style.textContent = `
      html.${BOOT_CLASS},html.${BOOT_CLASS} body{background:#f8fbff!important}
      html.${BOOT_CLASS} body>*:not(#${BOOT_ID}){visibility:hidden!important}
      #${BOOT_ID}{
        position:fixed;inset:0;z-index:99999;display:grid;place-items:center;
        background:#f8fbff;visibility:visible!important;opacity:1;
        transition:opacity .18s ease;
      }
      #${BOOT_ID}.is-leaving{opacity:0;pointer-events:none}
      #${BOOT_ID} .boot-brand{display:flex;align-items:center;gap:14px;color:#123679;font-family:Pretendard,"Noto Sans KR","Apple SD Gothic Neo",system-ui,sans-serif}
      #${BOOT_ID} img{width:54px;height:54px;border-radius:16px;display:block;box-shadow:0 10px 24px rgba(10,55,170,.14)}
      #${BOOT_ID} strong{font-size:28px;line-height:1;font-weight:900;letter-spacing:-.055em}
      #${BOOT_ID} .boot-line{position:absolute;left:50%;top:calc(50% + 48px);width:120px;height:3px;transform:translateX(-50%);overflow:hidden;border-radius:999px;background:#e5edfa}
      #${BOOT_ID} .boot-line:after{content:"";display:block;width:46%;height:100%;border-radius:999px;background:linear-gradient(90deg,#1558f0,#52d79a);animation:smulinkBoot 1s ease-in-out infinite alternate}
      @keyframes smulinkBoot{from{transform:translateX(0)}to{transform:translateX(118%)}}
    `;
    document.head.appendChild(style);

    const screen = document.createElement('div');
    screen.id = BOOT_ID;
    screen.setAttribute('aria-label', 'SMU.Link 불러오는 중');
    screen.innerHTML = `
      <div class="boot-brand">
        <img src="/smulink-icon.svg?v=20260912-larger-mark-1" alt="" />
        <strong>SMU.Link</strong>
      </div>
      <div class="boot-line" aria-hidden="true"></div>`;
    document.body.appendChild(screen);

    releasePreboot();
  }

  function finishBootScreen() {
    releasePreboot();
    const screen = document.getElementById(BOOT_ID);
    document.documentElement.classList.remove(BOOT_CLASS);
    if (!screen) return;
    screen.classList.add('is-leaving');
    window.setTimeout(() => {
      screen.remove();
      document.getElementById('smulinkBootStyle')?.remove();
    }, 190);
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.body.appendChild(script);
    });
  }

  function loadStyle(href) {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = resolve;
      link.onerror = () => reject(new Error(`Failed to load ${href}`));
      document.head.appendChild(link);
    });
  }

  startBootScreen();
  const emergencyReveal = window.setTimeout(finishBootScreen, 5000);

  loadScript('/local-core.js?v=20260912-ai-1')
    .then(() => loadScript('/reviews-v3.js?v=20260912-reviews-3'))
    .then(() => loadScript('/safety-v2.js?v=20260912-safety-3'))
    .then(() => loadScript('/copy-edit.js?v=20260912-copy-3'))
    .then(() => loadScript('/ux-polish.js?v=20260912-ux-1'))
    .then(() => loadScript('/final-audit.js?v=20260912-audit-2'))
    .then(() => loadScript('/workspace.js?v=20260912-workspace-1'))
    .then(() => loadScript('/simple-flow.js?v=20260912-simple-1'))
    .then(() => loadScript('/simple-flow-compat.js?v=20260912-simple-compat-1'))
    .then(() => loadScript('/benchmark-ui.js?v=20260912-benchmark-1'))
    .then(() => loadStyle('/reference-design.css?v=20260912-reference-1'))
    .then(() => loadScript('/brand-clean.js?v=20260912-brand-clean-1'))
    .then(() => loadScript('/navigation-fix.js?v=20260912-nav-fix-4'))
    .then(() => loadScript('/header-icon-fix.js?v=20260912-header-icon-4'))
    .then(() => loadScript('/ui-detail-fixes.js?v=20260912-detail-fixes-1'))
    .then(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))))
    .then(() => {
      clearTimeout(emergencyReveal);
      finishBootScreen();
    })
    .catch(error => {
      clearTimeout(emergencyReveal);
      console.error('[SMU.Link loader]', error);
      finishBootScreen();
    });
})();