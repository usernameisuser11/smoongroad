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

      .activation-promo-entry{
        width:min(1160px,calc(100% - 40px));margin:8px auto 30px;padding:19px 21px;
        display:flex;align-items:center;justify-content:space-between;gap:18px;
        border:1px solid #c9dcf6;border-radius:20px;
        background:linear-gradient(135deg,#eef5ff 0%,#ffffff 57%,#eefbf6 100%);
        box-shadow:0 12px 34px rgba(22,67,140,.08);color:#193553
      }
      .activation-promo-entry .activation-entry-copy{min-width:0}
      .activation-promo-entry .activation-kicker{
        display:inline-flex;align-items:center;gap:6px;margin-bottom:5px;color:#1754c7;
        font-size:10px;font-weight:950;letter-spacing:.08em
      }
      .activation-promo-entry h3{margin:0;font-size:18px;line-height:1.42;letter-spacing:-.035em;word-break:keep-all}
      .activation-promo-entry p{margin:5px 0 0;color:#5b7087;font-size:12px;line-height:1.62;word-break:keep-all}
      .activation-promo-entry button{
        flex:0 0 auto;min-height:44px;padding:0 16px;border:0;border-radius:12px;
        background:#174ab9;color:#fff;font-size:12px;font-weight:950;cursor:pointer;
        box-shadow:0 8px 20px rgba(23,74,185,.18)
      }
      body[data-active-view="projects"] .activation-promo-entry,
      body[data-active-view="create"] .activation-promo-entry,
      body[data-active-view="my"] .activation-promo-entry{display:none!important}

      #activationPromoDialog{
        width:min(760px,calc(100% - 28px));max-height:min(88vh,820px);padding:0!important;
        border:0!important;border-radius:26px!important;overflow:auto;
        background:#fff;color:#172b43;box-shadow:0 28px 90px rgba(12,35,70,.28)
      }
      #activationPromoDialog::backdrop{background:rgba(10,24,45,.58);backdrop-filter:blur(5px)}
      .activation-dialog-inner{padding:26px}
      .activation-dialog-top{display:flex;align-items:flex-start;justify-content:space-between;gap:18px}
      .activation-dialog-kicker{color:#1754c7;font-size:10px;font-weight:950;letter-spacing:.1em}
      .activation-dialog-top h2{margin:6px 0 8px;font-size:30px;line-height:1.2;letter-spacing:-.05em;word-break:keep-all}
      .activation-dialog-lead{margin:0;color:#5d7187;font-size:13px;line-height:1.7;word-break:keep-all}
      .activation-dialog-close{width:40px;height:40px;flex:0 0 40px;border:1px solid #d7e1ec;border-radius:12px;background:#fff;color:#53667a;font-size:22px;cursor:pointer}
      .activation-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:22px 0}
      .activation-step{padding:15px;border:1px solid #dce6f0;border-radius:16px;background:#f8fbfe}
      .activation-step span{display:grid;place-items:center;width:30px;height:30px;margin-bottom:9px;border-radius:10px;background:#174ab9;color:#fff;font-size:10px;font-weight:950}
      .activation-step b{display:block;font-size:13px;line-height:1.4;word-break:keep-all}
      .activation-step small{display:block;margin-top:4px;color:#6a7c90;font-size:10px;line-height:1.55;word-break:keep-all}
      .activation-local-story{padding:18px;border-radius:18px;background:linear-gradient(135deg,#f3f8ff,#f1fbf6);border:1px solid #d7e7ee}
      .activation-local-story strong{display:block;margin-bottom:6px;color:#21496d;font-size:14px}
      .activation-local-story p{margin:0;color:#536b82;font-size:12px;line-height:1.72;word-break:keep-all}
      .activation-impact{display:flex;gap:7px;flex-wrap:wrap;margin-top:14px}
      .activation-impact span{padding:7px 10px;border-radius:999px;background:#eaf2ff;color:#245ab7;font-size:10px;font-weight:900}
      .activation-dialog-note{margin:14px 0 0;color:#8190a0;font-size:10px;line-height:1.55}
      .activation-dialog-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:20px}
      .activation-dialog-actions button{min-height:45px;padding:0 16px;border-radius:12px;font-size:12px;font-weight:950;cursor:pointer}
      .activation-dialog-actions .secondary{border:1px solid #d6e0eb;background:#fff;color:#425970}
      .activation-dialog-actions .primary{border:1px solid #174ab9;background:#174ab9;color:#fff}

      @media(min-width:901px){
        .brand-node.local{right:-5%!important;top:47%!important}
      }
      @media(max-width:900px){
        .brand-node.local{right:1%!important}
      }
      @media(max-width:720px){
        .activation-promo-entry{width:min(100% - 28px,1160px);align-items:flex-start;flex-direction:column;padding:17px}
        .activation-promo-entry button{width:100%}
        .activation-steps{grid-template-columns:1fr}
        .activation-dialog-inner{padding:20px}
        .activation-dialog-top h2{font-size:25px}
        .activation-dialog-actions{display:grid;grid-template-columns:1fr 1fr}
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

  function ensureActivationPromo() {
    if ($('#activationPromoDialog')) return;

    const entry = document.createElement('section');
    entry.id = 'activationPromoEntry';
    entry.className = 'activation-promo-entry';
    entry.innerHTML = `
      <div class="activation-entry-copy">
        <span class="activation-kicker">SMU.Link 활성화 방안 · 지역 공방 협업</span>
        <h3>3회 이상 활동을 인증한 상명대 학생에게 지역 공방 × 상명대 협업 굿즈를 제공합니다.</h3>
        <p>도자기·카드지갑 등 특별한 DIY 굿즈로 학생 참여를 높이고, 종로의 문화예술 자원도 함께 알리는 운영안입니다.</p>
      </div>
      <button type="button" id="activationPromoOpen">활성화 방안 보기</button>`;

    const anchor = $('#homeQuickStart') || $('.hero');
    if (anchor?.parentNode) anchor.insertAdjacentElement('afterend', entry);
    else document.body.prepend(entry);

    const dialog = document.createElement('dialog');
    dialog.id = 'activationPromoDialog';
    dialog.setAttribute('aria-labelledby', 'activationPromoTitle');
    dialog.innerHTML = `
      <div class="activation-dialog-inner">
        <div class="activation-dialog-top">
          <div>
            <div class="activation-dialog-kicker">PLATFORM ACTIVATION PLAN</div>
            <h2 id="activationPromoTitle">활동할수록 지역과 더 가까워지는 SMU.Link</h2>
            <p class="activation-dialog-lead">지역사회와 함께 프로젝트를 진행하고 <b>3회 이상 활동을 인증한 상명대학교 학생 참여자</b>에게 상명대와 지역 공방이 협업한 특별 굿즈를 제공하는 활성화 방안입니다.</p>
          </div>
          <button type="button" class="activation-dialog-close" aria-label="닫기">×</button>
        </div>

        <div class="activation-steps">
          <div class="activation-step"><span>1</span><b>지역 프로젝트 참여</b><small>SMU.Link에서 지역사회와 함께 프로젝트를 진행합니다.</small></div>
          <div class="activation-step"><span>2</span><b>3회 이상 활동 인증</b><small>프로젝트 활동 기록을 3회 이상 남긴 학생 참여자를 대상으로 합니다.</small></div>
          <div class="activation-step"><span>3</span><b>지역 공방 협업 굿즈</b><small>도자기·카드지갑 등 상명대 × 지역 공방 DIY 굿즈를 제공합니다.</small></div>
        </div>

        <div class="activation-local-story">
          <strong>왜 지역 공방 굿즈인가요?</strong>
          <p>종로구에는 세검정·부암동 공방 등 문화예술 자원이 풍부하지만 홍보와 인지도가 부족한 곳이 있습니다. 협업 굿즈에 <b>공방의 이름·제작 과정·지역적 특성</b>을 자연스럽게 담아 공방을 알리고, 학생에게는 지역에서만 만날 수 있는 특별한 굿즈를 제공해 지역의 문화예술 자원과 상명대 학생을 연결합니다.</p>
          <div class="activation-impact">
            <span>학생 참여 활성화</span><span>지역 공방 홍보</span><span>문화예술 자원 연결</span>
          </div>
        </div>

        <p class="activation-dialog-note">※ 해커톤에서 제안하는 플랫폼 활성화 운영안입니다. 실제 제공 품목과 인증 방식은 향후 협력 공방 및 운영 여건에 따라 조정될 수 있습니다.</p>
        <div class="activation-dialog-actions">
          <button type="button" class="secondary" id="activationPromoDismiss">확인했어요</button>
          <button type="button" class="primary" id="activationPromoProjects">프로젝트 보러가기</button>
        </div>
      </div>`;
    document.body.appendChild(dialog);

    const open = () => {
      if (!dialog.open) {
        try { dialog.showModal(); } catch {}
      }
    };
    const close = () => { if (dialog.open) dialog.close(); };

    $('#activationPromoOpen')?.addEventListener('click', open);
    dialog.querySelector('.activation-dialog-close')?.addEventListener('click', close);
    $('#activationPromoDismiss')?.addEventListener('click', close);
    $('#activationPromoProjects')?.addEventListener('click', () => {
      close();
      const projectNav = document.querySelector('[data-brand-view="projects"]');
      if (projectNav) projectNav.click();
      else location.hash = '#projects';
    });
    dialog.addEventListener('click', event => { if (event.target === dialog) close(); });

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem('smulink_activation_promo_seen_v1') === '1';
      if (!alreadySeen) sessionStorage.setItem('smulink_activation_promo_seen_v1', '1');
    } catch {}
    if (!alreadySeen) window.setTimeout(open, 850);
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
      <p class="ai-fallback-note">Gemini 응답을 사용할 수 없어 기본 추천으로 전환했습니다. 연결이 정상화되면 같은 버튼에서 실제 AI 분석 결과를 확인할 수 있습니다.</p>`;
  }

  function recoverTeamMatchError() {
    const result = $('#aiMatchResult');
    if (!result || result.hidden) return;

    const text = result.textContent || '';
    const aiError = /AI_(?:UPSTREAM_ERROR|TIMEOUT|EMPTY_RESPONSE|INVALID_RESPONSE|RATE_LIMIT|SERVICE_UNAVAILABLE|SERVER_ERROR|NETWORK_ERROR|BAD_REQUEST|AUTH_ERROR|MODEL_NOT_FOUND)/.test(text);
    if (aiError) showTeamMatchFallback(result);
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
    ensureActivationPromo();
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
      ensureActivationPromo();
      refineProjectHeading();
      replaceVisibleCopy();
      recoverTeamMatchError();
      refineFooterCopy();
    });
  });
  if (document.body) observer.observe(document.body, { childList: true, subtree: true, characterData: true });
})();
