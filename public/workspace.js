(() => {
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const APP_KEY = 'smulink_cocreation_apps';

  const categoryLabels = {
    home: '홈',
    projects: '프로젝트 찾기',
    ai: 'AI 프로젝트 설계',
    my: '내 프로젝트',
    records: '후기·기록',
    safety: '신뢰·안전',
  };

  const mockProjects = [
    {
      id: 'mock-welfare-guide',
      title: '부암동 복지관 이용 안내 개선 프로젝트',
      partner: '지역 복지기관 · 주민 · 상명대학교 학생',
      status: '활동 중',
      statusIndex: 2,
      note: '주민 사용성 테스트를 진행하고 안내 페이지를 수정하는 단계입니다.',
      mock: true,
    },
    {
      id: 'mock-local-shop',
      title: '지역 상점 메뉴·예약 안내 개선 프로젝트',
      partner: '지역 상인 · 상명대학교 학생',
      status: '완료',
      statusIndex: 4,
      note: '현장 테스트와 결과 정리를 마쳐 활동 기록서를 만들 수 있습니다.',
      mock: true,
      completed: true,
    },
  ];

  const sampleRecord = {
    projectName: '지역 상점 메뉴·예약 안내 개선 프로젝트',
    period: '2026.08.10 – 2026.08.31',
    place: '종로구 지역 상점 · 목업 예시',
    participant: '상명대학교 학생',
    role: '웹·정보구조 개선 및 현장 테스트',
    hours: '12시간',
    contribution: '상인이 반복해서 받는 고객 질문을 정리하고, 메뉴·예약 정보를 모바일에서 쉽게 확인할 수 있도록 화면 구조를 제작했습니다. 상인과 함께 현장 테스트 결과를 확인하고 수정안을 반영했습니다.',
    deliverable: '모바일 안내 페이지 시안 · 메뉴 안내 카드 · 현장 테스트 기록',
    link: '프로젝트 결과물 링크(목업)',
    timeline: [
      ['2026.08.10', '상인과 고객 문의·불편 정리', '2시간'],
      ['2026.08.17', '메뉴·예약 안내 화면 공동 제작', '5시간'],
      ['2026.08.24', '현장 테스트 및 수정', '3시간'],
      ['2026.08.31', '최종 결과 정리·공유', '2시간'],
    ],
  };

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  }

  function toast(message) {
    const el = $('#savedToast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 2200);
  }

  function addStyles() {
    if ($('#smulinkWorkspaceStyles')) return;
    const style = document.createElement('style');
    style.id = 'smulinkWorkspaceStyles';
    style.textContent = `
      .category-nav-wrap{position:sticky;top:72px;z-index:44;background:rgba(244,247,251,.94);backdrop-filter:blur(16px);border-bottom:1px solid var(--line)}
      .category-nav{display:flex;gap:7px;overflow-x:auto;padding:10px 0;scrollbar-width:none}.category-nav::-webkit-scrollbar{display:none}
      .category-nav button{flex:0 0 auto;border:1px solid var(--line);background:#fff;color:#53667a;border-radius:999px;padding:9px 13px;font-size:10px;font-weight:900;white-space:nowrap}
      .category-nav button.active{background:var(--primary);border-color:var(--primary);color:#fff}
      .smu-category-hidden{display:none!important}
      .category-intro{padding:34px 0 0}.category-intro>div{background:linear-gradient(135deg,#123c69,#1d5b95);color:#fff;border-radius:24px;padding:22px 24px}.category-intro small{font-size:9px;letter-spacing:.12em;font-weight:950;opacity:.72}.category-intro h2{font-size:28px;margin:5px 0 7px;letter-spacing:-.045em}.category-intro p{margin:0;color:#dce8f4;font-size:11px;max-width:850px}
      .my-project-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.my-project-card{background:#fff;border:1px solid var(--line);border-radius:22px;padding:20px}.my-project-card header{position:static;background:transparent;border:0;backdrop-filter:none;display:flex;justify-content:space-between;gap:12px;align-items:start}.my-project-card h3{margin:0;font-size:18px;letter-spacing:-.04em}.my-project-card .project-partner{margin:5px 0 0;font-size:9px;color:var(--muted)}.project-state{padding:6px 9px;border-radius:999px;background:var(--blue-soft);color:var(--primary2);font-size:9px;font-weight:950;white-space:nowrap}.project-state.done{background:var(--green-soft);color:var(--green)}.project-state.mock{background:var(--orange-soft);color:#815713}.my-project-note{margin:13px 0;color:#52657a;font-size:10px}.status-track{display:grid;grid-template-columns:repeat(5,1fr);gap:5px;margin:14px 0}.status-step{padding:8px 4px;border-radius:10px;background:#edf1f5;color:#7a8795;text-align:center;font-size:8px;font-weight:900}.status-step.done{background:#e9f6f1;color:var(--green)}.status-step.current{background:var(--primary);color:#fff}.my-project-actions{display:flex;gap:7px;flex-wrap:wrap}.my-project-actions .btn{min-height:38px;font-size:9px;padding:0 12px}.my-empty{padding:28px;border:1px dashed #cbd7e3;border-radius:18px;text-align:center;color:var(--muted);font-size:10px;background:#f9fbfd}.my-subhead{margin:28px 0 12px}.my-subhead h3{margin:0 0 4px;font-size:20px}.my-subhead p{margin:0;color:var(--muted);font-size:10px}
      .record-layout{display:grid;grid-template-columns:.9fr 1.1fr;gap:16px;align-items:start}.record-editor,.record-preview-wrap{background:#fff;border:1px solid var(--line);border-radius:24px;padding:22px;box-shadow:0 10px 34px rgba(20,40,70,.05)}.record-editor h3,.record-preview-wrap h3{margin:0 0 6px;font-size:20px}.record-editor>p,.record-preview-wrap>p{margin:0 0 16px;color:var(--muted);font-size:10px}.record-field{display:grid;gap:6px;margin-bottom:11px}.record-field label{font-size:9px;font-weight:950;color:#52657a}.record-field input,.record-field textarea{width:100%;border:1px solid var(--line);border-radius:12px;background:#f9fbfd;padding:11px;outline:0}.record-field textarea{min-height:82px;resize:vertical}.record-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}.timeline-editor{display:grid;gap:7px;margin:8px 0 12px}.timeline-edit-row{display:grid;grid-template-columns:.8fr 1.5fr .55fr auto;gap:6px}.timeline-edit-row input{min-width:0}.timeline-remove{border:1px solid var(--line);background:#fff;border-radius:10px;padding:0 10px;font-weight:950}.record-actions{display:flex;gap:7px;flex-wrap:wrap}.record-actions .btn{min-height:42px;font-size:9px}.record-disclaimer{margin:12px 0;padding:10px 11px;border-radius:12px;background:#fff7e8;border:1px solid #f0d9af;color:#71551f;font-size:9px}
      .record-sheet{border:1px solid #cfdce8;border-radius:18px;padding:22px;background:#fff}.record-sheet-head{display:flex;justify-content:space-between;gap:12px;align-items:start;border-bottom:2px solid var(--primary);padding-bottom:14px;margin-bottom:16px}.record-sheet-head small{font-size:8px;color:var(--primary2);font-weight:950;letter-spacing:.12em}.record-sheet-head h2{font-size:26px;margin:3px 0 0;letter-spacing:-.05em}.record-sheet-badge{padding:7px 9px;border-radius:999px;background:var(--orange-soft);color:#815713;font-size:8px;font-weight:950}.record-meta{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:15px}.record-meta div{background:var(--surface2);border-radius:12px;padding:10px}.record-meta span{display:block;font-size:8px;color:var(--muted);font-weight:900}.record-meta b{display:block;font-size:10px;margin-top:3px}.record-sheet h4{font-size:12px;margin:16px 0 7px}.record-sheet p{font-size:10px;color:#52657a;margin:0;line-height:1.7}.record-timeline{display:grid;gap:6px}.record-timeline div{display:grid;grid-template-columns:.8fr 1.5fr .55fr;gap:8px;background:#f8fafc;border-radius:10px;padding:8px;font-size:9px}.portfolio-summary{margin-top:12px;padding:13px;border-radius:14px;background:#f7fbff;border:1px solid #d8e6f2}.portfolio-summary b{font-size:10px}.portfolio-summary p{margin:4px 0 0;font-size:9px;color:#53667a}.record-empty-preview{padding:36px 18px;text-align:center;border-radius:16px;background:var(--surface2);color:var(--muted);font-size:10px}
      @media(max-width:900px){.category-nav-wrap{top:0}.my-project-grid,.record-layout{grid-template-columns:1fr}}
      @media(max-width:640px){.record-row{grid-template-columns:1fr}.timeline-edit-row{grid-template-columns:1fr}.status-track{grid-template-columns:1fr 1fr}.category-intro h2{font-size:23px}}
      @media print{
        body *{visibility:hidden!important}.record-sheet,.record-sheet *{visibility:visible!important}.record-sheet{position:absolute!important;left:0!important;top:0!important;width:100%!important;border:0!important;border-radius:0!important;box-shadow:none!important;padding:18mm!important}.record-sheet-badge{display:none!important}
      }
    `;
    document.head.appendChild(style);
  }

  function readApps() {
    try {
      const apps = JSON.parse(localStorage.getItem(APP_KEY) || '[]');
      return Array.isArray(apps) ? apps : [];
    } catch { return []; }
  }

  function challengeById(id) {
    try {
      if (typeof challenges !== 'undefined' && Array.isArray(challenges)) return challenges.find(item => item.id === id) || null;
    } catch {}
    return null;
  }

  function statusTrack(index) {
    const steps = ['모집중','매칭중','활동중','결과정리','완료'];
    return `<div class="status-track">${steps.map((label, i) => `<div class="status-step ${i < index ? 'done' : i === index ? 'current' : ''}">${label}</div>`).join('')}</div>`;
  }

  function injectMyProjects() {
    if ($('#my-projects')) return;
    const section = document.createElement('section');
    section.className = 'section shell';
    section.id = 'my-projects';
    section.innerHTML = `
      <div class="section-head"><span>MY SMU.LINK</span><h2>신청부터 완료까지, 내 프로젝트를 한곳에서 봅니다</h2><p>실제 서비스에서는 참여 신청·진행 상태·활동 기록·결과물을 여기에서 이어서 관리하는 구조입니다.</p></div>
      <div id="savedApplicationArea"></div>
      <div class="my-subhead"><h3>프로젝트 진행 상태 목업</h3><p>해커톤에서는 전체 흐름을 보여주기 위해 활동 중·완료 상태의 예시 프로젝트를 함께 표시합니다.</p></div>
      <div class="my-project-grid" id="mockProjectGrid"></div>`;
    const cta = $('.cta');
    if (cta) cta.before(section); else $('main')?.appendChild(section);
    renderMyProjects();
  }

  function renderMyProjects() {
    const saved = $('#savedApplicationArea');
    const mock = $('#mockProjectGrid');
    if (!saved || !mock) return;
    const apps = readApps();
    if (!apps.length) {
      saved.innerHTML = '<div class="my-subhead"><h3>내가 신청한 프로젝트</h3><p>이 브라우저에서 참여 신청을 저장하면 여기에 표시됩니다.</p></div><div class="my-empty"><b>아직 저장된 참여 신청이 없습니다.</b><br>프로젝트 찾기에서 관심 프로젝트에 참여 신청을 해보세요.</div>';
    } else {
      const cards = apps.slice().reverse().map(app => {
        const challenge = challengeById(app.challengeId);
        const title = challenge?.question || app.challengeId || 'SMU.Link 공동 프로젝트';
        const partner = challenge?.owner || `${app.major || '참여자'} · ${app.role || '공동 역할'}`;
        return `<article class="my-project-card"><header><div><h3>${escapeHtml(title)}</h3><p class="project-partner">${escapeHtml(partner)}</p></div><span class="project-state">참여 신청</span></header>${statusTrack(1)}<p class="my-project-note">신청 정보가 저장된 상태입니다. 실제 서비스에서는 운영자 확인 후 매칭·활동 단계로 이동합니다.</p><div class="my-project-actions"><button class="btn" type="button" data-project-open="${escapeHtml(app.challengeId || '')}">프로젝트 보기</button></div></article>`;
      }).join('');
      saved.innerHTML = `<div class="my-subhead"><h3>내가 신청한 프로젝트</h3><p>이 브라우저에 저장된 참여 신청입니다.</p></div><div class="my-project-grid">${cards}</div>`;
    }

    mock.innerHTML = mockProjects.map(project => `<article class="my-project-card"><header><div><h3>${escapeHtml(project.title)}</h3><p class="project-partner">${escapeHtml(project.partner)}</p></div><span class="project-state ${project.completed ? 'done' : 'mock'}">${project.completed ? '완료 · 목업' : '활동 중 · 목업'}</span></header>${statusTrack(project.statusIndex)}<p class="my-project-note">${escapeHtml(project.note)}</p><div class="my-project-actions">${project.completed ? '<button class="btn primary" type="button" data-open-record>활동 기록서 보기</button><button class="btn" type="button" data-open-record>포트폴리오 요약</button>' : '<button class="btn" type="button" data-open-record>활동 기록 예시 보기</button>'}</div></article>`).join('');

    $$('[data-project-open]').forEach(button => button.addEventListener('click', () => {
      const id = button.dataset.projectOpen;
      showCategory('projects');
      if (id && typeof openChallenge === 'function') setTimeout(() => openChallenge(id), 100);
    }));
    $$('[data-open-record]').forEach(button => button.addEventListener('click', () => {
      fillRecord(sampleRecord);
      showCategory('records');
      setTimeout(() => $('#activity-records')?.scrollIntoView({behavior:'smooth',block:'start'}), 80);
    }));
  }

  function timelineRow(date = '', activity = '', hours = '') {
    const row = document.createElement('div');
    row.className = 'timeline-edit-row';
    row.innerHTML = `<input class="tl-date" aria-label="활동 날짜" placeholder="2026.08.10" value="${escapeHtml(date)}"><input class="tl-activity" aria-label="활동 내용" placeholder="예: 주민 인터뷰와 문제 정의" value="${escapeHtml(activity)}"><input class="tl-hours" aria-label="활동 시간" placeholder="2시간" value="${escapeHtml(hours)}"><button class="timeline-remove" type="button" aria-label="활동 삭제">×</button>`;
    row.querySelector('.timeline-remove').addEventListener('click', () => row.remove());
    return row;
  }

  function injectActivityRecords() {
    if ($('#activity-records')) return;
    const section = document.createElement('section');
    section.className = 'section shell';
    section.id = 'activity-records';
    section.innerHTML = `
      <div class="section-head"><span>ACTIVITY RECORD</span><h2>활동이 끝나면, 참여 과정과 결과를 기록으로 남깁니다</h2><p>학생은 포트폴리오에 활용하고 지역 주체는 프로젝트 성과를 정리할 수 있도록 ‘SMU.Link 활동 기록서’를 만드는 구조입니다.</p></div>
      <div class="record-layout">
        <form class="record-editor" id="recordForm">
          <h3>활동 기록 작성</h3><p>목업에서 내용을 수정하면 오른쪽 기록서 미리보기에 바로 반영할 수 있습니다.</p>
          <div class="record-field"><label for="recordProjectName">프로젝트명</label><input id="recordProjectName" required></div>
          <div class="record-row"><div class="record-field"><label for="recordPeriod">참여 기간</label><input id="recordPeriod" required></div><div class="record-field"><label for="recordPlace">지역·기관</label><input id="recordPlace" required></div></div>
          <div class="record-row"><div class="record-field"><label for="recordParticipant">참여자 유형</label><input id="recordParticipant" required></div><div class="record-field"><label for="recordHours">총 활동 시간</label><input id="recordHours" required></div></div>
          <div class="record-field"><label for="recordRole">내 역할</label><input id="recordRole" required></div>
          <div class="record-field"><label for="recordContribution">주요 기여 내용</label><textarea id="recordContribution" required></textarea></div>
          <div class="record-field"><label for="recordDeliverable">공동 결과물</label><input id="recordDeliverable" required></div>
          <div class="record-field"><label for="recordLink">결과물 링크·위치</label><input id="recordLink" placeholder="선택 입력"></div>
          <div class="record-field"><label>활동 타임라인</label><div class="timeline-editor" id="timelineEditor"></div><button class="btn" id="addTimelineRow" type="button">+ 활동 한 줄 추가</button></div>
          <div class="record-disclaimer"><b>주의:</b> 이 문서는 상명대학교 공식 인증서나 봉사시간 증명서가 아니라, SMU.Link 프로젝트 참여 내용을 정리하는 활동 기록서입니다.</div>
          <div class="record-actions"><button class="btn primary" type="submit">기록서 미리보기</button><button class="btn" id="portfolioCopy" type="button">포트폴리오 요약 복사</button><button class="btn" id="recordPrint" type="button">인쇄 · PDF 저장</button></div>
        </form>
        <section class="record-preview-wrap"><h3>SMU.Link 활동 기록서</h3><p>브라우저 인쇄에서 ‘PDF로 저장’을 선택하면 파일로 보관할 수 있습니다.</p><div id="recordPreview"></div></section>
      </div>`;
    const reviews = $('#reviews');
    if (reviews) reviews.before(section); else $('.cta')?.before(section);
    $('#addTimelineRow')?.addEventListener('click', () => $('#timelineEditor')?.appendChild(timelineRow()));
    $('#recordForm')?.addEventListener('submit', event => { event.preventDefault(); renderRecordPreview(); });
    $('#recordPrint')?.addEventListener('click', () => { renderRecordPreview(); window.print(); });
    $('#portfolioCopy')?.addEventListener('click', copyPortfolioSummary);
    fillRecord(sampleRecord);
  }

  function getRecordData() {
    const timeline = $$('.timeline-edit-row').map(row => [row.querySelector('.tl-date')?.value.trim() || '', row.querySelector('.tl-activity')?.value.trim() || '', row.querySelector('.tl-hours')?.value.trim() || '']).filter(item => item.some(Boolean));
    return {
      projectName: $('#recordProjectName')?.value.trim() || '', period: $('#recordPeriod')?.value.trim() || '', place: $('#recordPlace')?.value.trim() || '', participant: $('#recordParticipant')?.value.trim() || '', role: $('#recordRole')?.value.trim() || '', hours: $('#recordHours')?.value.trim() || '', contribution: $('#recordContribution')?.value.trim() || '', deliverable: $('#recordDeliverable')?.value.trim() || '', link: $('#recordLink')?.value.trim() || '', timeline,
    };
  }

  function fillRecord(record) {
    if (!$('#recordForm')) return;
    $('#recordProjectName').value = record.projectName || '';
    $('#recordPeriod').value = record.period || '';
    $('#recordPlace').value = record.place || '';
    $('#recordParticipant').value = record.participant || '';
    $('#recordRole').value = record.role || '';
    $('#recordHours').value = record.hours || '';
    $('#recordContribution').value = record.contribution || '';
    $('#recordDeliverable').value = record.deliverable || '';
    $('#recordLink').value = record.link || '';
    const editor = $('#timelineEditor');
    editor.innerHTML = '';
    (record.timeline || []).forEach(item => editor.appendChild(timelineRow(item[0], item[1], item[2])));
    renderRecordPreview();
  }

  function portfolioText(data) {
    return `${data.projectName}에서 ${data.role} 역할로 참여했습니다. ${data.period} 동안 총 ${data.hours} 활동하며 ${data.contribution} 공동 결과물로 ${data.deliverable}을(를) 완성했습니다.`;
  }

  function renderRecordPreview() {
    const preview = $('#recordPreview');
    if (!preview) return;
    const data = getRecordData();
    if (!data.projectName) {
      preview.innerHTML = '<div class="record-empty-preview">왼쪽에서 활동 내용을 입력하면 기록서가 생성됩니다.</div>';
      return;
    }
    preview.innerHTML = `<article class="record-sheet" id="recordSheet"><div class="record-sheet-head"><div><small>SMU.LINK PROJECT ACTIVITY RECORD</small><h2>SMU.Link 활동 기록서</h2></div><span class="record-sheet-badge">비공식 프로젝트 기록</span></div><div class="record-meta"><div><span>프로젝트</span><b>${escapeHtml(data.projectName)}</b></div><div><span>참여 기간</span><b>${escapeHtml(data.period)}</b></div><div><span>지역·기관</span><b>${escapeHtml(data.place)}</b></div><div><span>참여자 / 활동 시간</span><b>${escapeHtml(data.participant)} · ${escapeHtml(data.hours)}</b></div></div><h4>내 역할</h4><p>${escapeHtml(data.role)}</p><h4>주요 기여 내용</h4><p>${escapeHtml(data.contribution)}</p><h4>활동 타임라인</h4><div class="record-timeline">${data.timeline.length ? data.timeline.map(item => `<div><b>${escapeHtml(item[0])}</b><span>${escapeHtml(item[1])}</span><b>${escapeHtml(item[2])}</b></div>`).join('') : '<p>기록된 활동이 없습니다.</p>'}</div><h4>공동 결과물</h4><p>${escapeHtml(data.deliverable)}${data.link ? `<br>${escapeHtml(data.link)}` : ''}</p><div class="portfolio-summary"><b>포트폴리오용 요약</b><p>${escapeHtml(portfolioText(data))}</p></div></article>`;
  }

  async function copyPortfolioSummary() {
    const data = getRecordData();
    const value = portfolioText(data);
    try { await navigator.clipboard.writeText(value); toast('포트폴리오용 요약을 복사했습니다.'); }
    catch { toast('복사할 수 없어 미리보기에서 직접 선택해 주세요.'); }
  }

  function sectionByLabel(labels) {
    return [...document.querySelectorAll('main > section')].find(section => {
      const label = section.querySelector('.section-head > span')?.textContent.trim();
      return labels.includes(label);
    }) || null;
  }

  function categorySections() {
    const home = [$('.hero'), $('#system'), sectionByLabel(['PARTICIPATION STRUCTURE','PARTNERSHIP']), sectionByLabel(['CO-CREATION SUPPORT','MUTUAL MENTORING']), $('.cta')].filter(Boolean);
    const projects = [$('#activities'), $('#challenges'), $('#major-view')].filter(Boolean);
    const ai = [$('#lab')].filter(Boolean);
    const my = [$('#my-projects')].filter(Boolean);
    const records = [$('#activity-records'), $('#reviews')].filter(Boolean);
    const safety = [$('#safety')].filter(Boolean);
    return { home, projects, ai, my, records, safety };
  }

  function introFor(view) {
    const text = {
      home: ['SMU.Link 한눈에 보기','상명대와 종로의 서로 다른 세대가 공동 프로젝트를 만드는 구조를 소개합니다.'],
      projects: ['프로젝트 찾기','지역의 실제 필요에서 시작하는 프로젝트 예시를 보고, 전공·관심사에 맞는 참여 방식을 탐색합니다.'],
      ai: ['AI 프로젝트 설계','지역의 아이디어를 입력하면 실제 Gemini AI가 필요한 역할·전공·활동·결과물 구조를 제안합니다.'],
      my: ['내 프로젝트','신청한 프로젝트와 진행 상태를 확인하고, 활동이 끝나면 기록 단계로 이어집니다.'],
      records: ['후기·활동 기록','프로젝트 경험을 후기와 활동 기록서로 남기고 포트폴리오용 요약이나 PDF 형태로 보관합니다.'],
      safety: ['신뢰·안전','학생·주민·상인·기관의 인증 상태와 신고·제재 운영 흐름을 목업으로 보여줍니다.'],
    }[view];
    const intro = $('#categoryIntro');
    if (!intro || !text) return;
    intro.innerHTML = `<div><small>${categoryLabels[view].toUpperCase()}</small><h2>${text[0]}</h2><p>${text[1]}</p></div>`;
  }

  function showCategory(view = 'home', options = {}) {
    if (!categoryLabels[view]) view = 'home';
    const groups = categorySections();
    Object.values(groups).flat().forEach(section => section.classList.add('smu-category-hidden'));
    (groups[view] || []).forEach(section => section.classList.remove('smu-category-hidden'));
    $$('.category-nav [data-category]').forEach(button => button.classList.toggle('active', button.dataset.category === view));
    introFor(view);
    $('#categoryIntro')?.classList.remove('smu-category-hidden');
    if (!options.keepPosition) window.scrollTo({top:0,behavior:'smooth'});
    const hash = view === 'home' ? '#home' : `#view-${view}`;
    if (location.hash !== hash) history.replaceState(null, '', hash);
  }

  function injectCategoryNav() {
    if ($('#smulinkCategoryNav')) return;
    const wrap = document.createElement('div');
    wrap.className = 'category-nav-wrap';
    wrap.id = 'smulinkCategoryNav';
    wrap.innerHTML = `<nav class="shell category-nav" aria-label="SMU.Link 카테고리">${Object.entries(categoryLabels).map(([key,label]) => `<button type="button" data-category="${key}">${label}</button>`).join('')}</nav>`;
    $('header')?.after(wrap);
    const intro = document.createElement('section');
    intro.className = 'shell category-intro';
    intro.id = 'categoryIntro';
    $('main')?.prepend(intro);
    $$('.category-nav [data-category]').forEach(button => button.addEventListener('click', () => showCategory(button.dataset.category)));
  }

  function refineHeaderActions() {
    const actions = $('.top-actions');
    if (!actions) return;
    actions.innerHTML = '<a href="#lab">AI 설계</a><a class="primary" href="#my-projects">내 프로젝트</a>';
  }

  function categoryForTarget(id) {
    if (['activities','challenges','major-view'].includes(id)) return 'projects';
    if (id === 'lab') return 'ai';
    if (id === 'my-projects') return 'my';
    if (['activity-records','reviews'].includes(id)) return 'records';
    if (id === 'safety') return 'safety';
    return 'home';
  }

  function interceptHashLinks() {
    document.addEventListener('click', event => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute('href').slice(1);
      if (!id || id === 'home' || id.startsWith('view-')) return;
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      const view = categoryForTarget(id);
      showCategory(view, {keepPosition:true});
      setTimeout(() => target.scrollIntoView({behavior:'smooth',block:'start'}), 50);
    });
  }

  function initialView() {
    const hash = location.hash || '';
    if (hash.startsWith('#view-')) return hash.replace('#view-','');
    if (hash && hash !== '#home') return categoryForTarget(hash.slice(1));
    return 'home';
  }

  function start() {
    addStyles();
    injectMyProjects();
    injectActivityRecords();
    injectCategoryNav();
    refineHeaderActions();
    interceptHashLinks();
    showCategory(initialView(), {keepPosition:true});
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
