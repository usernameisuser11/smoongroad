(() => {
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
    .then(() => loadScript('/navigation-fix.js?v=20260912-nav-fix-2'))
    .then(() => loadScript('/header-icon-fix.js?v=20260912-header-icon-2'))
    .catch(error => console.error('[SMU.Link loader]', error));
})();