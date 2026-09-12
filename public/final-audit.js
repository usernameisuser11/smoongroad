(() => {
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];

  function text(el, value) { if (el && el.textContent !== value) el.textContent = value; }

  function cleanLegacyVisibleText() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const current = String(node.nodeValue || '');
      const next = current
        .replace(/종노/g, '종로')
        .replace(/수뭉로드 세대이음/g, 'SMU.Link')
        .replace(/수뭉로드/g, 'SMU.Link');
      if (next !== current) node.nodeValue = next;
    });
  }

  function refineChallenges() {
    const section = $('#challenges');
    if (!section) return;
    const head = section.querySelector('.section-head');
    if (head) {
      text(head.querySelector('span'), 'SMU.LINK PROJECT EXAMPLES');
      text(head.querySelector('h2'), '지역에서 바로 시작해볼 수 있는 공동 프로젝트 예시');
      text(head.querySelector('p'), '지역 주체가 실제로 겪는 문제와 얻는 결과가 보이도록 예시를 구체화했습니다. 실제 참여 기관이 확정된 사례가 아니라 서비스 이용 시나리오입니다.');
    }
    const labels = {
      all: '전체',
      both: '생활·복지',
      local: '지역·상권·기록',
      campus: '경험·프로그램',
    };
    $$('[data-filter]').forEach(button => { if (labels[button.dataset.filter]) text(button, labels[button.dataset.filter]); });
    $$('.challenge-statline span:first-child').forEach(el => text(el, '공동제작 원칙'));
    text($('#dialogPriority'), '공동제작 원칙');
  }

  function refineMeta() {
    document.title = 'SMU.Link | 상명대와 종로를 잇는 세대 공동 프로젝트';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'SMU.Link는 상명대학교 학생과 종로 지역의 다양한 세대가 전공·경험·생활지식을 합쳐 공동 프로젝트를 만드는 해커톤 서비스 목업입니다.');
  }

  function run() {
    refineMeta();
    refineChallenges();
    cleanLegacyVisibleText();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();

  let queued = false;
  const observer = new MutationObserver(() => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      refineChallenges();
      cleanLegacyVisibleText();
    });
  });
  if (document.body) observer.observe(document.body, {childList:true,subtree:true,characterData:true});
})();