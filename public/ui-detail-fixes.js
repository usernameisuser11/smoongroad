(() => {
  const $ = (selector, root = document) => root.querySelector(selector);

  function addStyles() {
    if ($('#smulinkDetailFixStyles')) return;
    const style = document.createElement('style');
    style.id = 'smulinkDetailFixStyles';
    style.textContent = `
      #challenges .section-head h2 .keep-project-example{white-space:nowrap}
      .brand-node{z-index:4!important}
      @media(min-width:901px){
        .brand-node.local{right:-5%!important;top:47%!important}
      }
      @media(max-width:900px){
        .brand-node.local{right:1%!important}
      }
    `;
    document.head.appendChild(style);
  }

  function refineProjectHeading() {
    const heading = $('#challenges .section-head h2');
    if (!heading) return;
    const desired = '지역에서 바로 시작해볼 수 있는 <span class="keep-project-example">공동 프로젝트 예시</span>';
    if (heading.innerHTML !== desired) heading.innerHTML = desired;
  }

  function refineFooterCopy() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const current = String(node.nodeValue || '');
      if (!current.includes('상명대학교 서울캠퍼스 기반')) continue;
      const next = current
        .replace(/상명대학교 서울캠퍼스 기반\s*·\s*종로구 세대 공동 프로젝트 제안/g, '상명대학교 서울캠퍼스 기반 · 지역사회 공동 프로젝트 제안')
        .replace(/상명대학교 서울캠퍼스 기반\s*·\s*종로구 공동 프로젝트 제안/g, '상명대학교 서울캠퍼스 기반 · 지역사회 공동 프로젝트 제안');
      if (next !== current) node.nodeValue = next;
    }
  }

  function run() {
    addStyles();
    refineProjectHeading();
    refineFooterCopy();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }

  let queued = false;
  const observer = new MutationObserver(() => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      refineProjectHeading();
      refineFooterCopy();
    });
  });
  if (document.body) observer.observe(document.body, { childList: true, subtree: true, characterData: true });
})();
