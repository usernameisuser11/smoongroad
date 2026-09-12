(() => {
  const $ = (selector, root = document) => root.querySelector(selector);

  function addStyles() {
    if ($('#smulinkDetailFixStyles')) return;
    const style = document.createElement('style');
    style.id = 'smulinkDetailFixStyles';
    style.textContent = `
      #challenges .section-head h2 .keep-project-example{white-space:nowrap}
      .brand-node{z-index:4!important}
      .ai-purpose-note{
        margin:14px 0 0;padding:13px 15px;border:1px solid #d8e6f6;border-radius:14px;
        background:#f6f9ff;color:#31577f;font-size:12px;font-weight:800;line-height:1.65;
        word-break:keep-all
      }
      .ai-purpose-note b{color:#174ab9}
      @media(min-width:901px){
        .brand-node.local{right:-5%!important;top:47%!important}
      }
      @media(max-width:900px){
        .brand-node.local{right:1%!important}
      }
    `;
    document.head.appendChild(style);
  }

  function refineHeroCopy() {
    const eyebrow = $('.brand-hero-eyebrow');
    if (eyebrow) eyebrow.textContent = '종로의 생활문제와 상명대의 전공역량을 잇습니다';

    const desc = $('.brand-hero-desc');
    if (desc) {
      const desired = '<b>주민·상인·기관이 생활 속 문제를 자신의 언어로 남기면 AI가 필요한 역할과 전공을 분석합니다.</b><br>학생과 지역사회는 문제를 함께 정하고, 함께 만들고, 결과를 함께 남깁니다.';
      if (desc.innerHTML !== desired) desc.innerHTML = desired;
    }
  }

  function ensureAiPurposeNote() {
    const head = $('#lab .section-head');
    if (!head || head.querySelector('.ai-purpose-note')) return;
    const note = document.createElement('div');
    note.className = 'ai-purpose-note';
    note.innerHTML = '<b>왜 AI인가요?</b> AI는 주민의 일상 언어를 분석해 문제를 구조화하고, 필요한 역량과 상명대 전공을 연결합니다.';
    head.appendChild(note);
  }

  function refineProjectHeading() {
    const heading = $('#challenges .section-head h2');
    if (!heading) return;
    const desired = '지역에서 바로 시작해볼 수 있는 <span class="keep-project-example">공동 프로젝트 예시</span>';
    if (heading.innerHTML !== desired) heading.innerHTML = desired;
  }

  function replaceVisibleCopy() {
    const replacements = [
      [
        '학생과 주민이 함께 “누구나 쓰기 쉬운 종로 디지털 생활가이드”를 만들 수 있을까?',
        '부암·홍지동의 언덕·골목 생활 안내를 주민과 학생이 함께 개선할 수 있을까?'
      ],
      [
        '학생이 사용법을 일방적으로 알려주는 대신 주민이 실제로 막히는 상황을 고르고, 학생과 주민이 함께 문구·화면·설명을 테스트하며 생활가이드를 공동 제작합니다.',
        '주민이 언덕·골목 이동 중 겪는 불편을 제안하고, 학생과 함께 생활 이동 정보와 안내 방식을 정리해 접근성 안내를 공동 제작합니다.'
      ],
      [
        '세대 공동 디지털 생활가이드 + 사용성 테스트 기록',
        '언덕·골목 생활 접근성 안내 + 현장 확인 기록'
      ],
      [
        '오래된 가게의 경험과 학생의 시각을 합쳐 새로운 지역 경험을 만들 수 있을까?',
        '종로 지역 상점의 이용 경험을 상인과 학생이 함께 개선할 수 있을까?'
      ],
      [
        '학생이 가게를 대신 홍보하는 것이 아니라 상인과 학생이 고객 문제를 함께 찾고, 가게의 역사·상품·서비스 중 무엇을 바꿀지 함께 결정하고 실험합니다.',
        '종로 상인과 학생이 고객의 불편을 함께 찾고, 가게의 경험과 학생의 전공 역량을 합쳐 메뉴·안내·예약 등 이용 경험을 함께 개선합니다.'
      ]
    ];

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      let next = String(node.nodeValue || '');
      for (const [from, to] of replacements) next = next.replaceAll(from, to);
      if (next !== node.nodeValue) node.nodeValue = next;
    }
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
    refineHeroCopy();
    ensureAiPurposeNote();
    refineProjectHeading();
    replaceVisibleCopy();
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
      refineHeroCopy();
      ensureAiPurposeNote();
      refineProjectHeading();
      replaceVisibleCopy();
      refineFooterCopy();
    });
  });
  if (document.body) observer.observe(document.body, { childList: true, subtree: true, characterData: true });
})();
