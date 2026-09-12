(() => {
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];

  const views = {
    home: '홈',
    projects: '프로젝트',
    create: '프로젝트 만들기',
    my: '내 활동',
  };

  const myTabs = {
    projects: '내 프로젝트',
    records: '활동 기록',
    reviews: '후기',
    safety: '안전 안내',
  };

  function addStyles() {
    if ($('#smulinkSimpleFlowStyles')) return;
    const style = document.createElement('style');
    style.id = 'smulinkSimpleFlowStyles';
    style.textContent = `
      #categoryIntro{display:none!important}
      .category-nav{justify-content:center;padding:12px 0}.category-nav button{font-size:12px;padding:11px 18px;border-radius:14px}.category-nav button.active{box-shadow:0 7px 18px rgba(18,60,105,.14)}
      .simple-home-quick{padding:12px 0 58px}.simple-home-panel{background:#fff;border:1px solid var(--line);border-radius:28px;padding:26px;box-shadow:0 16px 46px rgba(20,40,70,.07)}
      .simple-home-head{display:flex;justify-content:space-between;align-items:end;gap:18px;margin-bottom:18px}.simple-home-head small{font-size:9px;font-weight:950;letter-spacing:.12em;color:var(--primary2)}.simple-home-head h2{font-size:30px;line-height:1.2;letter-spacing:-.05em;margin:4px 0 0}.simple-home-head p{margin:0;color:var(--muted);font-size:11px;max-width:470px}
      .simple-start-actions{display:flex;gap:9px;flex-wrap:wrap;margin:20px 0 24px}.simple-start-actions button{min-height:50px;border-radius:14px;padding:0 20px;border:1px solid var(--line);background:#fff;font-weight:950}.simple-start-actions button.primary{background:var(--primary);border-color:var(--primary);color:#fff}
      .simple-flow-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-bottom:18px}.simple-flow-step{background:var(--surface2);border-radius:15px;padding:14px}.simple-flow-step span{display:inline-grid;place-items:center;width:27px;height:27px;border-radius:9px;background:var(--primary);color:#fff;font-size:9px;font-weight:950}.simple-flow-step b{display:block;margin:8px 0 3px;font-size:12px}.simple-flow-step p{margin:0;color:var(--muted);font-size:9px}
      .simple-examples{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.simple-example{border:1px solid var(--line);border-radius:16px;padding:14px;background:#fff;text-align:left}.simple-example span{display:inline-flex;padding:5px 7px;border-radius:999px;background:var(--blue-soft);color:var(--primary2);font-size:8px;font-weight:950}.simple-example b{display:block;margin:9px 0 5px;font-size:12px}.simple-example small{display:block;color:var(--muted);font-size:9px;line-height:1.5}.simple-example strong{display:block;color:var(--green);font-size:9px;margin-top:8px}
      .hero{padding-bottom:28px}.hero-copy{max-width:610px}.hero-actions .btn{min-width:150px}
      #activities .section-head,#challenges .section-head,#lab .section-head,#my-projects .section-head,#activity-records .section-head,#reviews .section-head,#safety .section-head{margin-bottom:20px}
      #challenges .challenge-grid{grid-template-columns:repeat(2,1fr);gap:12px}.challenge-card{min-height:0;padding:19px}.challenge-card h3{font-size:20px;line-height:1.3;margin-right:60px}.challenge-card p{font-size:10px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:13px}.challenge-statline{margin:9px 0}.challenge-bottom{font-size:9px}.challenge-status{top:16px;right:16px}
      #major-view{display:none!important}
      .simple-create-intro{margin:0 0 16px;padding:15px 16px;border-radius:17px;background:linear-gradient(135deg,#f2f7fc,#fff);border:1px solid #d7e3ef}.simple-create-intro b{display:block;font-size:13px}.simple-create-intro p{margin:4px 0 0;color:var(--muted);font-size:10px}.simple-step-label{display:flex;align-items:center;gap:8px;margin:15px 0 8px;font-size:10px;font-weight:950;color:var(--text)}.simple-step-label i{font-style:normal;width:25px;height:25px;border-radius:8px;display:grid;place-items:center;background:var(--primary);color:#fff;font-size:9px}
      .simple-partners{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-bottom:14px}.simple-partner{border:1px solid var(--line);border-radius:12px;background:#fff;padding:11px 7px;font-size:9px;font-weight:900;color:#52657a}.simple-partner.active{background:var(--blue-soft);border-color:#bfd3e5;color:var(--primary)}
      #problemForm .simple-hidden{display:none!important}.simple-advanced{margin:12px 0;border:1px solid var(--line);border-radius:14px;background:#fbfcfe}.simple-advanced summary{cursor:pointer;padding:11px 13px;font-size:9px;font-weight:900;color:#607184}.simple-advanced-inner{padding:0 13px 12px}.simple-advanced .field{margin-bottom:9px}
      #problemForm .analyze{min-height:52px;font-size:12px}.sample-row{margin-bottom:10px}.sample-row button{padding:8px 10px;font-size:9px}
      .apply-inner{max-height:86vh;overflow:auto}.apply-field.simple-extra{display:none}.apply-simple-note{padding:10px 11px;border-radius:12px;background:var(--blue-soft);color:#42627e;font-size:9px;margin:8px 0 13px}.apply-actions{position:sticky;bottom:-24px;background:#fff;padding-top:10px;border-top:1px solid var(--line)}
      .my-hub-nav{display:flex;gap:7px;overflow:auto;margin:0 auto 4px;padding:16px 0 6px}.my-hub-nav button{border:1px solid var(--line);background:#fff;border-radius:12px;padding:10px 13px;font-size:10px;font-weight:900;white-space:nowrap;color:#607184}.my-hub-nav button.active{background:var(--primary);border-color:var(--primary);color:#fff}
      .my-summary-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:0 0 17px}.my-summary-strip div{background:#fff;border:1px solid var(--line);border-radius:15px;padding:13px}.my-summary-strip span{font-size:8px;color:var(--muted);font-weight:900}.my-summary-strip b{display:block;font-size:20px;margin-top:2px;color:var(--primary)}
      #activity-records .record-layout{grid-template-columns:1fr 1fr}.record-editor .simple-record-details{border:1px solid var(--line);border-radius:13px;margin:8px 0 12px}.record-editor .simple-record-details summary{cursor:pointer;padding:10px 12px;font-size:9px;font-weight:900;color:#607184}.record-editor .simple-record-details-body{padding:0 12px 10px}.record-editor .simple-record-focus{padding:12px 13px;border-radius:13px;background:var(--blue-soft);margin:0 0 12px;color:#46637e;font-size:9px}.record-editor #timelineEditor{margin-top:5px}.record-editor #addTimelineRow{width:100%;min-height:40px}.record-actions .btn.primary{flex:1}
      #safety .safety-mock-note{margin-bottom:10px}.smu-simple-hidden{display:none!important}
      @media(max-width:900px){.simple-home-head{display:block}.simple-home-head p{margin-top:8px}.simple-examples{grid-template-columns:1fr}.simple-flow-steps{grid-template-columns:1fr 1fr 1fr}.simple-partners{grid-template-columns:1fr 1fr}#activity-records .record-layout{grid-template-columns:1fr}}
      @media(max-width:640px){.category-nav{justify-content:flex-start}.category-nav button{font-size:10px;padding:9px 12px}.simple-flow-steps{grid-template-columns:1fr}.simple-home-panel{padding:18px}.simple-home-head h2{font-size:24px}.hero{padding-top:34px}.hero h1{font-size:40px}.challenge-grid,#challenges .challenge-grid{grid-template-columns:1fr}.my-summary-strip{grid-template-columns:repeat(3,1fr)}.simple-start-actions{display:grid;grid-template-columns:1fr 1fr}.simple-start-actions button{padding:0 10px}}
    `;
    document.head.appendChild(style);
  }

  function sectionByLabel(labels) {
    return $$('.section').find(section => labels.includes(section.querySelector('.section-head > span')?.textContent.trim())) || null;
  }

  function managedSections() {
    return [
      $('.hero'), $('#homeQuickStart'), $('#system'),
      sectionByLabel(['PARTICIPATION STRUCTURE','PARTNERSHIP']),
      sectionByLabel(['CO-CREATION SUPPORT','MUTUAL MENTORING']),
      $('#activities'), $('#challenges'), $('#major-view'), $('#lab'),
      $('#my-projects'), $('#activity-records'), $('#reviews'), $('#safety'), $('.cta'), $('#myHubNav')
    ].filter(Boolean);
  }

  function injectHomeQuickStart() {
    if ($('#homeQuickStart')) return;
    const section = document.createElement('section');
    section.id = 'homeQuickStart';
    section.className = 'shell simple-home-quick';
    section.innerHTML = `
      <div class="simple-home-panel">
        <div class="simple-home-head"><div><small>START IN 10 SECONDS</small><h2>찾거나, 만들거나. 시작은 두 가지면 충분합니다.</h2></div><p>복잡한 가입 절차나 전공 선택부터 시작하지 않습니다. 필요한 프로젝트를 찾거나 지역의 문제를 한 문장으로 적으면 됩니다.</p></div>
        <div class="simple-start-actions"><button class="primary" type="button" data-simple-view="projects">프로젝트 찾아보기</button><button type="button" data-simple-view="create">프로젝트 만들기</button></div>
        <div class="simple-flow-steps"><div class="simple-flow-step"><span>1</span><b>필요를 고르거나 적기</b><p>관심 프로젝트를 찾거나 현장의 문제를 한 문장으로 입력합니다.</p></div><div class="simple-flow-step"><span>2</span><b>AI가 역할을 정리</b><p>필요한 전공과 함께할 역할을 추천하고 초안을 만듭니다.</p></div><div class="simple-flow-step"><span>3</span><b>같이 만들고 기록</b><p>학생과 지역 주체가 결과물을 만들고 활동 기록을 남깁니다.</p></div></div>
        <div class="simple-examples">
          <button class="simple-example" type="button" data-simple-view="projects"><span>생활·복지</span><b>복지관 이용 안내 개선</b><small>주민이 헷갈리는 신청 과정을 학생과 함께 더 쉽게 정리</small><strong>결과: 안내 카드 + 모바일 안내 페이지</strong></button>
          <button class="simple-example" type="button" data-simple-view="projects"><span>지역·상권</span><b>상점 메뉴·예약 안내 개선</b><small>상인이 반복해서 받는 고객 문의를 학생과 함께 개선</small><strong>결과: 개선 시안 + 현장 테스트</strong></button>
          <button class="simple-example" type="button" data-simple-view="projects"><span>지역기록</span><b>동네 기억을 지역 콘텐츠로</b><small>주민의 장소 기억을 행사·교육에서 다시 쓸 수 있는 기록으로 제작</small><strong>결과: 지역지도 + 기록 카드</strong></button>
        </div>
      </div>`;
    $('.hero')?.after(section);
  }

  function replaceCategoryNav() {
    const nav = $('.category-nav');
    if (!nav) return;
    nav.innerHTML = Object.entries(views).map(([key,label]) => `<button type="button" data-simple-view="${key}">${label}</button>`).join('');
  }

  function refineHeaderAndHero() {
    const actions = $('.top-actions');
    if (actions) actions.innerHTML = '<button class="btn" type="button" data-simple-view="projects">프로젝트</button><button class="btn primary" type="button" data-simple-view="create">프로젝트 만들기</button>';
    const heroActions = $('.hero-actions');
    if (heroActions) heroActions.innerHTML = '<button class="btn primary" type="button" data-simple-view="projects">프로젝트 찾아보기</button><button class="btn" type="button" data-simple-view="create">프로젝트 만들기</button>';
    const heroCopy = $('.hero-copy');
    if (heroCopy) heroCopy.innerHTML = '<b>상명대 학생과 종로의 주민·상인·기관이 같은 목표를 두고 함께 결과물을 만드는 프로젝트 플랫폼입니다.</b><br>지역의 필요를 등록하면 필요한 전공과 역할을 연결하고, 활동이 끝나면 결과와 참여 기록까지 남깁니다.';
  }

  function showView(view = 'home', smooth = true) {
    if (!views[view]) view = 'home';
    managedSections().forEach(section => section.classList.add('smu-simple-hidden'));
    const groups = {
      home: [$('.hero'), $('#homeQuickStart')],
      projects: [$('#activities'), $('#challenges')],
      create: [$('#lab')],
      my: [$('#myHubNav')],
    };
    (groups[view] || []).filter(Boolean).forEach(section => section.classList.remove('smu-simple-hidden'));
    $$('.category-nav [data-simple-view]').forEach(button => button.classList.toggle('active', button.dataset.simpleView === view));
    if (view === 'my') showMyTab(document.querySelector('.my-hub-nav button.active')?.dataset.myTab || 'projects', false);
    if (smooth) window.scrollTo({top:0,behavior:'smooth'});
    history.replaceState(null, '', view === 'home' ? '#home' : `#${view}`);
  }

  function injectMyHub() {
    if ($('#myHubNav')) return;
    const nav = document.createElement('section');
    nav.id = 'myHubNav';
    nav.className = 'shell';
    nav.innerHTML = `<div class="my-hub-nav">${Object.entries(myTabs).map(([key,label], index) => `<button type="button" data-my-tab="${key}" class="${index===0?'active':''}">${label}</button>`).join('')}</div><div class="my-summary-strip"><div><span>신청</span><b id="myAppliedCount">0</b></div><div><span>진행 중</span><b>1</b></div><div><span>완료</span><b>1</b></div></div>`;
    $('#my-projects')?.before(nav);
    try {
      const apps = JSON.parse(localStorage.getItem('smulink_cocreation_apps') || '[]');
      $('#myAppliedCount').textContent = Array.isArray(apps) ? String(apps.length) : '0';
    } catch {}
  }

  function showMyTab(tab = 'projects', scroll = true) {
    if (!myTabs[tab]) tab = 'projects';
    const map = {projects:$('#my-projects'),records:$('#activity-records'),reviews:$('#reviews'),safety:$('#safety')};
    Object.values(map).filter(Boolean).forEach(section => section.classList.add('smu-simple-hidden'));
    map[tab]?.classList.remove('smu-simple-hidden');
    $$('.my-hub-nav [data-my-tab]').forEach(button => button.classList.toggle('active', button.dataset.myTab === tab));
    if (scroll) $('#myHubNav')?.scrollIntoView({behavior:'smooth',block:'start'});
  }

  function simplifyCreateForm() {
    const form = $('#problemForm');
    if (!form || form.dataset.simpleReady) return;
    form.dataset.simpleReady = '1';
    const intro = document.createElement('div');
    intro.className = 'simple-create-intro';
    intro.innerHTML = '<b>지역의 문제를 한 문장으로 적으면 시작할 수 있습니다.</b><p>학과와 팀 구성을 먼저 정할 필요 없습니다. AI가 필요한 역할과 공동 결과물 초안을 제안합니다.</p>';
    form.prepend(intro);

    const title = $('#title');
    const detail = $('#detail');
    const titleField = title?.closest('.field');
    if (titleField) titleField.classList.add('simple-hidden');
    if (title) title.required = false;
    if (detail) {
      const label = form.querySelector('label[for="detail"]');
      if (label) label.textContent = '지역에서 함께 해결하거나 만들고 싶은 것은 무엇인가요?';
      detail.placeholder = '예: 복지관 프로그램 신청 방법을 주민들이 더 쉽게 이해할 수 있게 바꾸고 싶어요.';
      detail.addEventListener('input', () => {
        if (title) title.value = detail.value.trim() ? `지역 공동 프로젝트 · ${detail.value.trim().slice(0, 55)}` : '';
      });
    }

    const detailField = detail?.closest('.field');
    if (detailField && !detailField.previousElementSibling?.classList.contains('simple-step-label')) detailField.insertAdjacentHTML('beforebegin','<div class="simple-step-label"><i>1</i>문제를 한 문장으로 적어주세요</div>');

    const client = $('#client');
    const clientField = client?.closest('.field');
    if (clientField) clientField.classList.add('simple-hidden');
    ['지역 주민','지역 상인','지역 기관·단체','지역사회 참여자'].forEach(value => {
      if (client && ![...client.options].some(option => option.value === value)) client.add(new Option(value,value));
    });
    if (detailField) {
      const partnerBlock = document.createElement('div');
      partnerBlock.innerHTML = '<div class="simple-step-label"><i>2</i>누구와 함께하고 싶나요?</div><div class="simple-partners"><button type="button" class="simple-partner" data-client="지역 주민">주민</button><button type="button" class="simple-partner" data-client="지역 상인">상인</button><button type="button" class="simple-partner" data-client="지역 기관·단체">기관·단체</button><button type="button" class="simple-partner active" data-client="지역사회 참여자">잘 모르겠어요</button></div>';
      detailField.after(partnerBlock);
      if (client) client.value = '지역사회 참여자';
      partnerBlock.querySelectorAll('[data-client]').forEach(button => button.addEventListener('click', () => {
        partnerBlock.querySelectorAll('[data-client]').forEach(x => x.classList.remove('active'));
        button.classList.add('active');
        if (client) client.value = button.dataset.client;
      }));
    }

    const locationField = $('#location')?.closest('.field');
    const matchField = $('#matchMode')?.closest('.field');
    const preferredField = $('#preferredMajorField');
    const modeNote = $('#matchModeNote');
    const details = document.createElement('details');
    details.className = 'simple-advanced';
    details.innerHTML = '<summary>세부 설정(선택) · 지역이나 원하는 전공을 직접 정하고 싶다면</summary><div class="simple-advanced-inner"></div>';
    const body = details.querySelector('.simple-advanced-inner');
    [locationField,matchField,preferredField,modeNote].filter(Boolean).forEach(node => body.appendChild(node));
    form.querySelector('.analyze')?.before(details);
    form.querySelector('.analyze')?.insertAdjacentHTML('beforebegin','<div class="simple-step-label"><i>3</i>AI가 프로젝트 초안을 만듭니다</div>');
    const submit = form.querySelector('.analyze');
    if (submit) submit.textContent = 'AI로 프로젝트 초안 만들기';
    const p = form.querySelector(':scope > p');
    if (p) p.textContent = '문제를 적고 함께할 대상을 고르면 됩니다.';
  }

  function simplifyApplyDialog() {
    const form = $('#applyForm');
    if (!form || form.dataset.simpleReady) return;
    form.dataset.simpleReady = '1';
    const title = $('#applyTitle'); if (title) title.textContent = '프로젝트 참여하기';
    const copy = $('#applyCopy'); if (copy) copy.insertAdjacentHTML('afterend','<div class="apply-simple-note">전공·역할·가능 시간만 적으면 참여할 수 있습니다. 나머지는 선택 입력입니다.</div>');
    const keepIds = new Set(['applyMajor','applyAvailability','applyRole']);
    const optionalIds = ['applyStrengths','applyInterest','joinMode','applyMotivation'];
    const details = document.createElement('details');
    details.className = 'simple-advanced';
    details.innerHTML = '<summary>추가 정보 입력(선택)</summary><div class="simple-advanced-inner"></div>';
    const body = details.querySelector('.simple-advanced-inner');
    optionalIds.forEach(id => {
      const field = $(`#${id}`)?.closest('.apply-field');
      if (field) body.appendChild(field);
    });
    const motivation = $('#applyMotivation');
    if (motivation && !motivation.value.trim()) motivation.value = '프로젝트의 공동 목표에 함께 참여하고 싶습니다.';
    const aiResult = $('#aiMatchResult');
    if (aiResult) aiResult.before(details); else form.querySelector('.apply-actions')?.before(details);
    const submit = form.querySelector('button[type="submit"]'); if (submit) submit.textContent = '이 프로젝트에 참여하기';
    const ai = $('#aiMatchBtn'); if (ai) ai.textContent = 'AI 역할 추천(선택)';
    keepIds.forEach(id => { const input = $(`#${id}`); if (input) input.required = id === 'applyMajor'; });
  }

  function simplifyRecords() {
    const form = $('#recordForm');
    if (!form || form.dataset.simpleReady) return;
    form.dataset.simpleReady = '1';
    const h3 = form.querySelector('h3'); if (h3) h3.textContent = '오늘 활동을 간단히 기록';
    const p = form.querySelector(':scope > p'); if (p) p.textContent = '날짜 · 활동 내용 · 시간만 추가하면 기록서에 자동으로 모입니다.';
    const focus = document.createElement('div');
    focus.className = 'simple-record-focus';
    focus.textContent = '프로젝트 기본 정보는 프로젝트에서 자동으로 가져오는 구조입니다. 목업에서는 아래 “기록서 세부 정보”에서 수정할 수 있습니다.';
    p?.after(focus);
    const timelineField = $('#timelineEditor')?.closest('.record-field');
    if (timelineField) {
      const label = timelineField.querySelector('label'); if (label) label.textContent = '활동 기록';
      form.querySelector('.record-disclaimer')?.before(timelineField);
    }
    const metaNodes = [];
    [...form.children].forEach(node => {
      if (node.matches?.('.record-field,.record-row') && node !== timelineField) metaNodes.push(node);
    });
    if (metaNodes.length) {
      const details = document.createElement('details');
      details.className = 'simple-record-details';
      details.innerHTML = '<summary>기록서 세부 정보 수정</summary><div class="simple-record-details-body"></div>';
      const body = details.querySelector('.simple-record-details-body');
      metaNodes.forEach(node => body.appendChild(node));
      focus.after(details);
    }
    const previewTitle = $('#activity-records .record-preview-wrap h3'); if (previewTitle) previewTitle.textContent = '활동 기록서 미리보기';
  }

  function bindEvents() {
    document.addEventListener('click', event => {
      const viewButton = event.target.closest('[data-simple-view]');
      if (viewButton) { event.preventDefault(); showView(viewButton.dataset.simpleView); return; }
      const myButton = event.target.closest('[data-my-tab]');
      if (myButton) { event.preventDefault(); showMyTab(myButton.dataset.myTab); return; }
      if (event.target.closest('[data-open-record]')) setTimeout(() => { showView('my', false); showMyTab('records'); }, 0);
      if (event.target.closest('[data-project-open]')) setTimeout(() => showView('projects', false), 0);
    });
  }

  function observeLazyUi() {
    const observer = new MutationObserver(() => {
      simplifyApplyDialog();
      simplifyRecords();
    });
    observer.observe(document.body,{childList:true,subtree:true});
  }

  function start() {
    addStyles();
    injectHomeQuickStart();
    injectMyHub();
    replaceCategoryNav();
    refineHeaderAndHero();
    simplifyCreateForm();
    simplifyApplyDialog();
    simplifyRecords();
    bindEvents();
    observeLazyUi();
    const hash = location.hash.replace('#','');
    const initial = ['projects','create','my'].includes(hash) ? hash : 'home';
    showView(initial,false);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
