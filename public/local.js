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

  loadScript('/local-core.js?v=20260912-ai-1')
    .then(() => loadScript('/reviews-v3.js?v=20260912-reviews-3'))
    .then(() => loadScript('/safety-v2.js?v=20260912-safety-3'))
    .then(() => loadScript('/copy-edit.js?v=20260912-copy-3'))
    .then(() => loadScript('/ux-polish.js?v=20260912-ux-1'))
    .catch(error => console.error('[SMU.Link loader]', error));
})();
