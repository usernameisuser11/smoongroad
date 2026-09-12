(() => {
  function refreshHeaderIcon() {
    const icon = document.querySelector('.brand-icon');
    if (!icon) return;
    icon.src = '/smulink-icon.svg?v=20260912-icon-2';
    icon.alt = 'SMU.Link 앱 아이콘';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', refreshHeaderIcon, { once: true });
  } else {
    refreshHeaderIcon();
  }
})();
