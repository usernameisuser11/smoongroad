(() => {
  function refreshHeaderIcons() {
    document.querySelectorAll('.brand-icon').forEach(icon => {
      icon.src = '/smulink-icon.svg?v=20260912-safe-spacing-1';
      icon.alt = 'SMU.Link 앱 아이콘';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', refreshHeaderIcons, { once: true });
  } else {
    refreshHeaderIcons();
  }
})();
