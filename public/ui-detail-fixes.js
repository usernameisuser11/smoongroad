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
      .ai-fallback-note{margin-top:8px;color:#6a7890;font-size:11px;line-height:1.55}
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

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[char]);
  }

  function showTeamMatchFallback(result) {
    const major = $('#applyMajor')?.value.trim() || '입력한 전공';
    const role = $('#applyRole')?.value || '프로젝트 공동 역할';
    const strengths = $('#applyStrengths')?.value.trim();
    const interest = $('#applyInterest')?.value.trim();
    const project = $('#applyTitle')?.textContent.trim() || '이 프로젝트';
    const reasonBits = [
      `${major}의 전공 역량을 프로젝트에 활용할 수 있습니다.`,
      strengths ? `${strengths} 강점을 실제 공동 제작 과정에 연결할 수 있습니다.` : '팀원과 역할을 나누며 필요한 역량을 보완할 수 있습니다.',
      interest ? `${interest}에 대한 관심을 지역 참여자와의 협업에 활용할 수 있습니다.` : '지역 참여자의 경험과 학생의 전공 역량을 함께 활용하는 방식이 적합합니다.'
    ];

    result.hidden = false;
    result.innerHTML = `
      <div class="scoreline"><span>기본 역할 추천</span><strong>추천</strong></div>
      <h4>${escapeHtml(project)}에서 ${escapeHtml(role)} 역할로 참여해보세요.</h4>
      <p><b>추천 역할:</b> ${escapeHtml(role)} · <b>팀 형태:</b> 다른 전공과 협업 가능한 공동팀</p>
      <ul>${reasonBits.map(reason => `<li>${escapeHtml(reason)}</li>`).join('')}</ul>
      <p><b>다음 단계:</b> 추천 내용을 참고해 최종 참여 여부와 역할은 직접 선택하세요.</p>
      <p class="ai-fallback-note">Gemini 연결이 일시적으로 불안정해 기본 추천으로 전환했습니다. 연결이 정상화되면 같은 버튼에서 실제 AI 분석 결과를 확인할 수 있습니다.</p>`;
  }

  function recoverTeamMatchError() {
    const result = $('#aiMatchResult');
    const button = $('#aiMatchBtn');
    if (!result || result.hidden || !button) return;

    const text = result.textContent || '';
    const upstreamError = /AI_UPSTREAM_ERROR|AI_TIMEOUT|AI_EMPTY_RESPONSE|AI_INVALID_RESPONSE/.test(text);
    if (!upstreamError) {
      if (/Gemini AI 팀 매칭|추천 결과/.test(text)) button.dataset.smulinkRetry = '0';
      return;
    }

    const retryCount = Number(button.dataset.smulinkRetry || '0');
    if (retryCount < 1 && !button.disabled) {
      button.dataset.smulinkRetry = '1';
      result.innerHTML = '<h4>AI 연결을 한 번 더 확인하고 있어요</h4><p>잠시만 기다려 주세요.</p>';
      window.setTimeout(() => {
        if (!button.disabled) button.click();
      }, 900);
      return;
    }

    showTeamMatchFallback(result);
    button.dataset.smulinkRetry = '0';
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
    recoverTeamMatchError();
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
      recoverTeamMatchError();
      refineFooterCopy();
    });
  });
  if (document.body) observer.observe(document.body, { childList: true, subtree: true, characterData: true });
})();