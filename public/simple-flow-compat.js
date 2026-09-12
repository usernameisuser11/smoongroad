(() => {
  function clearLegacyHidden(root = document) {
    root.querySelectorAll?.('.smu-category-hidden').forEach(el => el.classList.remove('smu-category-hidden'));
    if (root.nodeType === 1 && root.classList?.contains('smu-category-hidden')) root.classList.remove('smu-category-hidden');
  }

  clearLegacyHidden();

  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes' && mutation.target.classList?.contains('smu-category-hidden')) {
        mutation.target.classList.remove('smu-category-hidden');
      }
      mutation.addedNodes.forEach(node => { if (node.nodeType === 1) clearLegacyHidden(node); });
    }
  });
  observer.observe(document.body, {subtree:true, childList:true, attributes:true, attributeFilter:['class']});
})();
