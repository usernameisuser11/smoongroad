(() => {
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  let projectQuery = '';
  let currentFilter = 'all';

  const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  const kindLabel = kind => ({digital:'생활·복지', memory:'지역기록', mentoring:'경험·진로', local:'지역·상권', class:'공동 프로그램'}[kind] || '공동 프로젝트');

  function addStyles() {
    if ($('#smulinkBenchmarkStyles')) return;
    const style = document.createElement('style');
    style.id = 'smulinkBenchmarkStyles';
    style.textContent = `
      /* Benchmark direction: FixMyStreet = one primary action, Catchafire = outcome-first project cards,
         Decidim/Ushahidi = clear modes, search/filter and visible status. */
      body{font-size:16px;line-height:1.65}
      .shell{width:min(1160px,calc(100% - 40px))}
      .category-nav-wrap{background:rgba(255,255,255,.96);box-shadow:0 4px 18px rgba(20,40,70,.04)}
      .category-nav{gap:9px;padding:13px 0}
      .category-nav button{font-size:14px!important;min-height:44px;padding:0 18px!important;border-radius:12px!important;color:#42566d!important}
      .category-nav button.active{color:#fff!important;background:var(--primary)!important;border-color:var(--primary)!important;box-shadow:0 8px 22px rgba(18,60,105,.18)!important}
      .top-actions .btn{font-size:13px;min-height:42px;padding:0 15px}

      .hero{grid-template-columns:1fr!important;gap:0!important;padding:68px 0 28px!important;max-width:980px;margin:auto}
      .hero>div{max-width:900px}
      .hero-board{display:none!important}
      .hero .eyebrow{font-size:13px!important;letter-spacing:.08em!important;margin-bottom:12px}
      .hero h1{font-size:clamp(48px,6vw,72px)!important;line-height:1.03!important;letter-spacing:-.06em!important;margin:10px 0 24px!important;max-width:900px}
      .hero-copy{font-size:18px!important;line-height:1.7!important;max-width:760px!important;color:#52667b!important}
      .hero-copy b{font-size:20px;color:var(--text)}
      .problem-focus{display:flex!important;align-items:center;gap:12px!important;max-width:760px;margin-top:22px!important;padding:14px 16px!important;border-radius:16px!important;box-shadow:none!important}
      .problem-focus strong{width:auto!important;height:auto!important;padding:7px 10px;border-radius:9px!important;font-size:10px!important}
      .problem-focus b{font-size:13px!important}.problem-focus p{font-size:12px!important;line-height:1.5!important}
      .hero-actions{margin-top:26px!important;gap:10px!important}
      .hero-actions .btn{min-height:56px!important;padding:0 24px!important;font-size:15px!important;border-radius:14px!important}

      .simple-home-quick{padding:10px 0 72px!important}
      .simple-home-panel{padding:28px!important;border-radius:24px!important;box-shadow:0 14px 42px rgba(20,40,70,.06)!important}
      .simple-home-head{align-items:start!important;margin-bottom:8px!important}
      .simple-home-head small{font-size:11px!important}.simple-home-head h2{font-size:34px!important;line-height:1.15!important;margin-top:5px!important}
      .simple-home-head p{font-size:14px!important;line-height:1.65!important;max-width:520px!important}
      .simple-start-actions{margin:22px 0 26px!important;display:grid!important;grid-template-columns:1fr 1fr!important;gap:12px!important}
      .simple-start-actions button{min-height:64px!important;font-size:16px!important;border-radius:16px!important;text-align:center;box-shadow:0 8px 20px rgba(20,40,70,.04)}
      .simple-flow-steps{display:none!important}
      .simple-examples{grid-template-columns:repeat(3,1fr)!important;gap:12px!important}
      .simple-example{padding:18px!important;border-radius:18px!important;min-height:170px;transition:.16s;box-shadow:0 5px 16px rgba(20,40,70,.03)}
      .simple-example:hover{transform:translateY(-2px);border-color:#b9cee1;box-shadow:0 12px 26px rgba(20,40,70,.08)}
      .simple-example span{font-size:10px!important;padding:6px 9px!important}.simple-example b{font-size:16px!important;line-height:1.35!important;margin:12px 0 8px!important}
      .simple-example small{font-size:12px!important;line-height:1.6!important}.simple-example strong{font-size:11px!important;margin-top:12px!important;line-height:1.5}

      /* Project marketplace */
      #activities{display:none!important}
      #challenges{padding-top:48px!important}
      #challenges .section-head{max-width:900px!important;margin-bottom:22px!important}
      #challenges .section-head>span{font-size:11px!important}
      #challenges .section-head h2{font-size:clamp(34px,4vw,48px)!important;line-height:1.15!important;margin:7px 0 11px!important}
      #challenges .section-head p{font-size:15px!important;line-height:1.65!important;max-width:760px}
      .project-findbar{display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center;margin:0 0 14px;padding:14px;background:#fff;border:1px solid var(--line);border-radius:18px;box-shadow:0 8px 24px rgba(20,40,70,.04)}
      .project-search-wrap{position:relative}.project-search-wrap:before{content:'⌕';position:absolute;left:15px;top:50%;transform:translateY(-52%);font-size:23px;color:#698096;font-weight:700}
      .project-search{width:100%;height:50px;border:1px solid #cfdae5;background:#f8fbfd;border-radius:13px;padding:0 15px 0 45px;font-size:14px;color:var(--text);outline:none}
      .project-search:focus{border-color:var(--primary2);box-shadow:0 0 0 4px rgba(30,90,149,.08)}
      .project-count{font-size:12px;font-weight:900;color:#52667b;white-space:nowrap;padding:0 7px}
      #challenges .filterbar{gap:8px!important;margin:0 0 20px!important}
      #challenges .filterbar button{font-size:12px!important;padding:10px 14px!important;border-radius:11px!important}
      #challengeGrid{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:16px!important}
      .bench-project-card{display:flex;flex-direction:column;gap:14px;background:#fff;border:1px solid #d8e3ed;border-radius:22px;padding:22px;min-height:330px;box-shadow:0 8px 26px rgba(20,40,70,.045);transition:.17s}
      .bench-project-card:hover{transform:translateY(-2px);border-color:#b8cddd;box-shadow:0 16px 36px rgba(20,40,70,.08)}
      .bench-card-top{display:flex;justify-content:space-between;align-items:center;gap:10px}.bench-chip-row{display:flex;gap:6px;flex-wrap:wrap}
      .bench-chip{display:inline-flex;padding:6px 9px;border-radius:999px;background:var(--blue-soft);color:var(--primary2);font-size:10px;font-weight:900}
      .bench-status{display:inline-flex;padding:6px 9px;border-radius:999px;background:var(--green-soft);color:var(--green);font-size:10px;font-weight:950;white-space:nowrap}
      .bench-project-card h3{font-size:23px!important;line-height:1.32!important;letter-spacing:-.04em!important;margin:0!important;word-break:keep-all}
      .bench-project-card>p{font-size:13px!important;line-height:1.65!important;color:#5d7084!important;margin:0!important;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
      .bench-impact{padding:13px 14px;border-radius:14px;background:#f2f8f5;border:1px solid #dbece4}.bench-impact span{display:block;font-size:9px;font-weight:950;color:var(--green);letter-spacing:.05em;margin-bottom:4px}.bench-impact b{font-size:13px;line-height:1.5;color:#23493f}
      .bench-facts{display:grid;grid-template-columns:.7fr 1.3fr;gap:8px}.bench-fact{padding:10px 11px;border-radius:12px;background:#f7f9fb}.bench-fact.wide{grid-column:1/-1}.bench-fact span{display:block;font-size:9px;color:#7a8898;font-weight:900;margin-bottom:3px}.bench-fact b{font-size:11px;line-height:1.45;color:#33485d}
      .bench-card-action{margin-top:auto;width:100%;min-height:47px;border:0;border-radius:12px;background:var(--primary);color:#fff;font-size:13px;font-weight:950;cursor:pointer}.bench-card-action:hover{background:var(--primary2)}
      .project-no-result{grid-column:1/-1;padding:40px 20px;text-align:center;border:1px dashed #c7d5e1;border-radius:18px;background:#fafcfe;color:#64768a;font-size:13px}

      /* Create: one focused task, details later */
      #lab{padding-top:48px!important}
      #lab .section-head{max-width:820px!important;margin:0 auto 24px!important;text-align:center}
      #lab .section-head>span{font-size:11px!important}#lab .section-head h2{font-size:clamp(34px,4vw,48px)!important;line-height:1.15!important}#lab .section-head p{font-size:15px!important;line-height:1.65!important}
      #lab .workspace{grid-template-columns:1fr!important;gap:18px!important;max-width:900px;margin:auto}
      #problemForm{padding:26px!important;border-radius:22px!important;box-shadow:0 12px 34px rgba(20,40,70,.06)!important}
      #problemForm h3{font-size:24px!important}#problemForm>p{font-size:13px!important}
      .simple-create-intro{padding:16px 17px!important}.simple-create-intro b{font-size:15px!important}.simple-create-intro p{font-size:12px!important}
      .simple-step-label{font-size:13px!important;margin:20px 0 10px!important}.simple-step-label i{width:30px!important;height:30px!important;font-size:11px!important}
      #problemForm .field label{font-size:12px!important}.field input,.field select,.field textarea{font-size:14px!important;padding:13px 14px!important;border-radius:12px!important}.field textarea{min-height:130px!important}
      .sample-row{gap:8px!important}.sample-row button{font-size:11px!important;padding:9px 12px!important}
      .simple-partners{gap:9px!important}.simple-partner{font-size:12px!important;padding:14px 9px!important;border-radius:12px!important}
      .simple-advanced summary{font-size:11px!important;padding:13px 14px!important}
      #problemForm .analyze{min-height:58px!important;font-size:15px!important;border-radius:14px!important}
      #lab .workspace>.panel:not(#problemForm){padding:26px!important}.result-empty{min-height:220px!important}.result-empty b{font-size:17px!important}.result-empty p{font-size:12px!important}
      .analysis-result .result-title{font-size:24px!important}.ai-note{font-size:13px!important}.major-grid,.projects{font-size:12px!important}

      /* My activity */
      .my-hub-nav{gap:9px!important;padding-top:24px!important}.my-hub-nav button{font-size:13px!important;padding:11px 15px!important}
      .my-summary-strip{gap:10px!important}.my-summary-strip div{padding:15px!important}.my-summary-strip span{font-size:10px!important}.my-summary-strip b{font-size:24px!important}
      #my-projects .section-head h2,#activity-records .section-head h2,#reviews .section-head h2,#safety .section-head h2{font-size:36px!important;line-height:1.18!important}
      #my-projects .section-head p,#activity-records .section-head p,#reviews .section-head p,#safety .section-head p{font-size:14px!important}
      .my-project-card{padding:20px!important}.my-project-card h3{font-size:19px!important}.my-project-card .project-partner,.my-project-note{font-size:11px!important}.status-step{font-size:10px!important;padding:9px 5px!important}.project-state{font-size:10px!important}.my-project-actions .btn{font-size:11px!important;min-height:42px!important}
      .record-editor h3,.record-preview-wrap h3,.review-form h3,.review-board h3,.safety-card h3,.report-mock-card h3{font-size:21px!important}.record-editor>p,.record-preview-wrap>p,.review-form>p,.review-board>p,.safety-card>p,.report-mock-card>p{font-size:12px!important}
      .record-field label,.review-field label,.mock-field label{font-size:11px!important}.record-field input,.record-field textarea,.review-field input,.review-field select,.review-field textarea,.mock-field input,.mock-field select,.mock-field textarea{font-size:13px!important}

      @media(max-width:800px){
        .shell{width:min(100% - 28px,1160px)}.hero{padding-top:42px!important}.hero h1{font-size:44px!important}.hero-copy{font-size:16px!important}.hero-copy b{font-size:18px!important}
        .simple-start-actions{grid-template-columns:1fr!important}.simple-examples{grid-template-columns:1fr!important}.simple-example{min-height:0}
        #challengeGrid{grid-template-columns:1fr!important}.project-findbar{grid-template-columns:1fr}.project-count{padding:0 3px 4px}
        .simple-partners{grid-template-columns:1fr 1fr!important}.bench-project-card{min-height:0}.bench-project-card h3{font-size:21px!important}
      }
      @media(max-width:520px){
        .category-nav button{font-size:12px!important;min-height:40px;padding:0 13px!important}.hero h1{font-size:38px!important}.problem-focus{align-items:flex-start!important}
        .simple-home-panel{padding:18px!important}.simple-home-head h2{font-size:28px!important}.simple-home-head p{font-size:13px!important}
        .bench-facts{grid-template-columns:1fr}.bench-fact.wide{grid-column:auto}.simple-partners{grid-template-columns:1fr!important}
      }
    `;
    document.head.appendChild(style);
  }

  function refineHome() {
    const eyebrow = $('.hero .eyebrow');
    if (eyebrow) eyebrow.textContent = 'SMU.Link · 상명대 × 종로 지역사회';
    const quickHead = $('.simple-home-head');
    if (quickHead) {
      const small = quickHead.querySelector('small');
      const h2 = quickHead.querySelector('h2');
      const p = quickHead.querySelector('p');
      if (small) small.textContent = 'START HERE';
      if (h2) h2.textContent = '무엇을 하고 싶나요?';
      if (p) p.textContent = '참여할 프로젝트를 바로 찾거나, 지역에서 바꾸고 싶은 문제를 한 문장으로 적어 프로젝트를 만들 수 있습니다.';
    }
    const startButtons = $$('.simple-start-actions button');
    if (startButtons[0]) startButtons[0].textContent = '참여할 프로젝트 찾기';
    if (startButtons[1]) startButtons[1].textContent = '새 프로젝트 만들기';
  }

  function refineProjectHead() {
    const head = $('#challenges .section-head');
    if (!head) return;
    const span = head.querySelector('span');
    const h2 = head.querySelector('h2');
    const p = head.querySelector('p');
    if (span) span.textContent = 'PROJECT MARKETPLACE';
    if (h2) h2.textContent = '내가 함께할 프로젝트를 찾아보세요';
    if (p) p.textContent = '프로젝트마다 지역사회가 얻는 결과, 필요한 전공과 예상 기간을 먼저 보여줍니다. 관심 있는 프로젝트를 누르면 세부 역할과 참여 방법을 확인할 수 있습니다.';
  }

  function injectProjectFindbar() {
    const section = $('#challenges');
    const filterbar = section?.querySelector('.filterbar');
    if (!section || !filterbar || $('#projectFindbar')) return;
    const bar = document.createElement('div');
    bar.id = 'projectFindbar';
    bar.className = 'project-findbar';
    bar.innerHTML = '<div class="project-search-wrap"><input class="project-search" id="projectSearch" type="search" placeholder="프로젝트명, 지역 주체, 전공으로 검색" aria-label="프로젝트 검색"></div><div class="project-count" id="projectCount">프로젝트 0개</div>';
    filterbar.before(bar);
    $('#projectSearch')?.addEventListener('input', event => {
      projectQuery = event.target.value.trim().toLowerCase();
      renderBenchmarkProjects(currentFilter);
    });
  }

  function visibleChallenges(filter) {
    let items = typeof challenges !== 'undefined' && Array.isArray(challenges) ? challenges : [];
    if (filter === 'both') items = items.filter(item => item.kind === 'digital');
    if (filter === 'local') items = items.filter(item => item.kind === 'memory' || item.kind === 'local');
    if (filter === 'campus') items = items.filter(item => item.kind === 'mentoring' || item.kind === 'class');
    if (projectQuery) {
      items = items.filter(item => [item.question,item.desc,item.owner,item.majors,item.deliverable,...(item.tags || [])].join(' ').toLowerCase().includes(projectQuery));
    }
    return items;
  }

  function renderBenchmarkProjects(filter = 'all') {
    currentFilter = filter || 'all';
    const grid = $('#challengeGrid');
    if (!grid) return;
    const items = visibleChallenges(currentFilter);
    const count = $('#projectCount');
    if (count) count.textContent = `프로젝트 ${items.length}개`;
    if (!items.length) {
      grid.innerHTML = '<div class="project-no-result"><b>조건에 맞는 프로젝트가 없어요.</b><br>검색어를 줄이거나 다른 카테고리를 선택해보세요.</div>';
      return;
    }
    grid.innerHTML = items.map(item => `
      <article class="bench-project-card" data-id="${escapeHtml(item.id)}">
        <div class="bench-card-top"><div class="bench-chip-row"><span class="bench-chip">${escapeHtml(kindLabel(item.kind))}</span><span class="bench-chip">${escapeHtml(item.tags?.[0] || '공동제작')}</span></div><span class="bench-status">${escapeHtml(item.status)}</span></div>
        <h3>${escapeHtml(item.question)}</h3>
        <p>${escapeHtml(item.desc)}</p>
        <div class="bench-impact"><span>지역사회와 함께 남기는 결과</span><b>${escapeHtml(item.deliverable)}</b></div>
        <div class="bench-facts"><div class="bench-fact"><span>예상 기간</span><b>${escapeHtml(item.duration)}</b></div><div class="bench-fact"><span>함께하는 주체</span><b>${escapeHtml(item.owner)}</b></div><div class="bench-fact wide"><span>추천 전공·역할</span><b>${escapeHtml(item.majors)}</b></div></div>
        <button class="bench-card-action" type="button" data-bench-open="${escapeHtml(item.id)}">프로젝트 자세히 보기 →</button>
      </article>`).join('');
    $$('[data-bench-open]').forEach(button => button.addEventListener('click', () => {
      if (typeof openChallenge === 'function') openChallenge(button.dataset.benchOpen);
    }));
  }

  function wireFilters() {
    $$('#challenges [data-filter]').forEach(button => {
      button.addEventListener('click', () => {
        currentFilter = button.dataset.filter || 'all';
        setTimeout(() => renderBenchmarkProjects(currentFilter), 0);
      });
    });
  }

  function refineCreate() {
    const head = $('#lab .section-head');
    if (head) {
      const span = head.querySelector('span');
      const h2 = head.querySelector('h2');
      const p = head.querySelector('p');
      if (span) span.textContent = 'CREATE A PROJECT';
      if (h2) h2.textContent = '지역의 문제를 적으면 AI가 프로젝트 초안으로 정리해드려요';
      if (p) p.textContent = '필요한 전공을 몰라도 괜찮습니다. 문제와 함께할 대상을 고르면 공동 목표, 역할, 활동, 결과물을 한 번에 제안합니다.';
    }
    const form = $('#problemForm');
    if (form) {
      const h3 = form.querySelector('h3');
      const p = form.querySelector(':scope > p');
      if (h3) h3.textContent = '3단계로 프로젝트 만들기';
      if (p) p.textContent = '문제 입력 → 함께할 대상 선택 → AI 초안 확인';
    }
    const empty = $('#emptyResult');
    if (empty) {
      const b = empty.querySelector('b');
      const p = empty.querySelector('p');
      if (b) b.textContent = '왼쪽에서 문제를 한 문장으로 적어보세요';
      if (p) p.textContent = 'AI가 필요한 역할과 전공, 공동 활동, 결과물까지 프로젝트 초안으로 정리합니다.';
    }
  }

  function refineMyActivity() {
    const myHead = $('#my-projects .section-head');
    if (myHead) {
      const h2 = myHead.querySelector('h2');
      const p = myHead.querySelector('p');
      if (h2) h2.textContent = '내가 참여한 프로젝트를 한눈에 확인합니다';
      if (p) p.textContent = '신청, 활동 중, 완료 상태를 확인하고 필요한 순간에만 활동 기록·후기·기록서를 작성합니다.';
    }
  }

  function overrideRenderer() {
    try { renderChallenges = renderBenchmarkProjects; } catch { globalThis.renderChallenges = renderBenchmarkProjects; }
  }

  function start() {
    addStyles();
    refineHome();
    refineProjectHead();
    injectProjectFindbar();
    refineCreate();
    refineMyActivity();
    overrideRenderer();
    wireFilters();
    renderBenchmarkProjects('all');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();