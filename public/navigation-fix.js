(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const validViews = new Set(['home','projects','create','my']);

  function addStyles() {
    if ($('#smulinkNavigationFixStyles')) return;
    const style = document.createElement('style');
    style.id = 'smulinkNavigationFixStyles';
    style.textContent = `
      html,body{overflow-x:hidden!important}
      body .smu-simple-hidden{display:none!important}
      body[data-active-view="projects"] .hero,
      body[data-active-view="projects"] #homeQuickStart,
      body[data-active-view="create"] .hero,
      body[data-active-view="create"] #homeQuickStart,
      body[data-active-view="my"] .hero,
      body[data-active-view="my"] #homeQuickStart{display:none!important}
      body[data-active-view="home"] .hero{display:grid!important}
      body[data-active-view="home"] #homeQuickStart{display:block!important}
      .brand-hero-art{overflow:visible!important;max-width:100%!important}
      .brand-hero-icon,.brand-icon{object-fit:contain!important}
      @media(max-width:900px){.brand-hero-art{overflow:hidden!important}}
    `;
    document.head.appendChild(style);
  }

  function setActive(view) {
    $$('[data-brand-view]').forEach(button => {
      if (button.closest('.brand-main-nav')) button.classList.toggle('active', button.dataset.brandView === view);
    });
  }

  function showDirect(view) {
    if (!validViews.has(view)) view = 'home';
    document.body.dataset.activeView = view;

    const hiddenNavButton = $(`.category-nav [data-simple-view="${view}"]`);
    if (hiddenNavButton) hiddenNavButton.click();

    if (view !== 'home') {
      $('.hero')?.classList.add('smu-simple-hidden');
      $('#homeQuickStart')?.classList.add('smu-simple-hidden');
    } else {
      $('.hero')?.classList.remove('smu-simple-hidden');
      $('#homeQuickStart')?.classList.remove('smu-simple-hidden');
    }

    setActive(view);
    const hash = view === 'home' ? '#home' : `#${view}`;
    if (location.hash !== hash) history.replaceState(null, '', hash);
    window.scrollTo({top:0,left:0,behavior:'auto'});
  }

  function refreshBrandIcons() {
    $$('.brand-icon').forEach(icon => {
      icon.src = '/smulink-icon.svg?v=20260912-safe-spacing-1';
      icon.alt = 'SMU.Link 앱 아이콘';
    });
    $$('.brand-hero-icon').forEach(icon => {
      icon.src = '/smulink-symbol.svg?v=20260912-safe-spacing-1';
      icon.alt = 'SMU.Link 앱 아이콘';
    });
  }

  function bindNavigation() {
    document.addEventListener('click', event => {
      const button = event.target.closest('[data-brand-view]');
      if (!button) return;
      const view = button.dataset.brandView;
      if (!validViews.has(view)) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      showDirect(view);
    }, true);

    $('.brand')?.addEventListener('click', event => {
      event.preventDefault();
      event.stopImmediatePropagation();
      showDirect('home');
    }, true);

    window.addEventListener('hashchange', () => {
      const hashView = location.hash.replace('#','');
      showDirect(validViews.has(hashView) ? hashView : 'home');
    });
  }

  function init() {
    addStyles();
    refreshBrandIcons();
    bindNavigation();
    const hashView = location.hash.replace('#','');
    showDirect(validViews.has(hashView) ? hashView : 'home');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();
