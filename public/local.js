const challenges = [
  {
    id: 'mobility',
    kind: 'both',
    question: '상명대 학생과 종로구 주민이 같은 시간대 버스에서 불편을 겪는 이유는 뭘까?',
    desc: '통학 시간대의 혼잡·배차·정류장 이용 문제를 학생 통학만의 문제가 아니라 지역 생활교통 문제로 함께 분석합니다.',
    owner: '종로구 · 상명대학교',
    majors: '컴퓨터과학 · 데이터 · 디자인 · 행정',
    mentor: '교통·데이터 실무자 1:1 멘토링',
    benefit: '프로젝트 수료 기록 · 현장실증 · 봉사 연계 검토',
    tags: ['학교 + 지역사회', '생활교통', '현장실증']
  },
  {
    id: 'shop',
    kind: 'both',
    question: '상명대 학생들은 왜 바로 옆 지역상권을 잘 이용하지 않을까?',
    desc: '학생 소비 동선과 지역상권의 정보·브랜딩·접근 문제를 함께 분석하고, 실제 방문 전환을 측정할 수 있는 프로젝트로 연결합니다.',
    owner: '종로구 · 지역상인 협의체',
    majors: '경영 · 컴퓨터과학 · 디자인 · 콘텐츠',
    mentor: '로컬브랜딩·서비스기획 멘토링',
    benefit: '상권 데이터 포트폴리오 · 기업 피드백 · 수료 기록',
    tags: ['학교 + 지역사회', '지역상권', '학생 참여']
  },
  {
    id: 'hill',
    kind: 'both',
    question: '상명대 앞 언덕은 학생·주민·상인 모두에게 더 나은 길이 될 수 없을까?',
    desc: '경사·보행안전·휴식·상권 동선을 함께 보고, 단순 미관 개선이 아닌 생활 이동과 지역 경험을 동시에 개선합니다.',
    owner: '종로구 · 상명대학교 · 지역주민',
    majors: '공간환경 · 디자인 · 행정 · 컴퓨터과학',
    mentor: '공공공간·접근성 전문가 멘토링',
    benefit: '현장조사 · 프로토타입 · 사회참여 기록',
    tags: ['학교 + 지역사회', '보행', '공공공간']
  },
  {
    id: 'digital',
    kind: 'local',
    question: '키오스크 앞에서 주문을 포기하는 어르신을 줄일 수 있을까?',
    desc: '고령층 디지털 접근 문제를 교육 한 번으로 끝내지 않고 쉬운 UX·반복 학습·현장 지원 구조로 설계합니다.',
    owner: '종로구 · 자원봉사·복지기관',
    majors: '컴퓨터과학 · 디자인 · 교육 · 복지',
    mentor: '접근성 UX·교육 전문가 멘토링',
    benefit: '자원봉사 연계 검토 · 사용자 테스트 · 수료 기록',
    tags: ['종로구', '디지털 격차', '자원봉사']
  },
  {
    id: 'tourism',
    kind: 'local',
    question: '관광객은 많은데 왜 어떤 골목에는 사람이 머물지 않을까?',
    desc: '관광객이 특정 지역에만 집중되는 이유를 동선·콘텐츠·상권 정보 측면에서 분석하고 숨은 지역으로 연결하는 방안을 실험합니다.',
    owner: '종로구 · 지역상인 · 문화기관',
    majors: '콘텐츠 · 경영 · 디자인 · 데이터',
    mentor: '관광·로컬콘텐츠 전문가 멘토링',
    benefit: '지역콘텐츠 포트폴리오 · 현장 테스트 · 기관 피드백',
    tags: ['종로구', '관광분산', '골목상권']
  },
  {
    id: 'campus-info',
    kind: 'campus',
    question: '학생에게 필요한 학교 정보는 왜 항상 흩어져 있을까?',
    desc: '장학·지원·학사·비교과 정보가 여러 채널에 흩어진 문제를 학생 관점에서 통합하고 개인화하는 프로젝트입니다.',
    owner: '상명대학교',
    majors: '컴퓨터과학 · 디자인 · 데이터',
    mentor: '서비스기획·UX 멘토링',
    benefit: '교내 실증 · 포트폴리오 · 수료 기록',
    tags: ['상명대', '정보접근', '학생경험']
  }
];

const samples = {
  mobility: {
    location: '상명대학교 서울캠퍼스', client: '종로구',
    title: '상명대 학생과 종로구 주민이 같은 시간대 버스에서 불편을 겪는 이유는 뭘까?',
    detail: '통학 시간대에 학생과 주민이 같은 정류장과 노선을 이용하면서 혼잡, 승차 실패, 도착시간 불확실성을 함께 겪는다. 학생 통학 문제로만 보지 않고 지역 생활교통 관점에서 데이터 기반 개선안을 만들고 싶다.'
  },
  shop: {
    location: '평창동', client: '지역상인 협의체',
    title: '상명대 학생들은 왜 바로 옆 지역상권을 잘 이용하지 않을까?',
    detail: '대학과 가까운 상권인데도 학생 유입이 적고, 온라인 정보와 학생 대상 접점도 부족하다. 학생 소비 동선과 상권 정보를 분석하고 실제 방문을 늘릴 수 있는 서비스를 실험하고 싶다.'
  },
  digital: {
    location: '부암동', client: '자원봉사·복지기관',
    title: '키오스크 앞에서 주문을 포기하는 어르신을 줄일 수 있을까?',
    detail: '고령 주민이 키오스크와 공공 앱을 어려워해 다른 사람의 도움을 기다리거나 이용을 포기한다. 반복해서 볼 수 있는 쉬운 안내와 현장 지원 구조가 필요하다.'
  },
  hill: {
    location: '홍지동', client: '상명대학교',
    title: '상명대 앞 언덕은 학생·주민·상인 모두에게 더 나은 길이 될 수 없을까?',
    detail: '가파른 언덕과 좁은 보행환경은 학생 통학뿐 아니라 주민 이동과 주변 상권 접근에도 영향을 준다. 경사도, 보행, 휴식 지점, 상권 동선을 함께 분석해 개선안을 만들고 싶다.'
  }
};

const archetypes = {
  mobility: {
    keys: ['버스','통학','정류장','교통','혼잡','배차','승차','도착시간'],
    tags: ['학교+지역사회','생활교통','데이터'],
    summary: '학생 통학과 주민 이동을 별개로 보지 않고, 같은 시간대·같은 노선에서 발생하는 생활교통 문제로 재구성할 수 있습니다.',
    majors: [
      ['컴퓨터과학전공','실시간 도착·혼잡 정보 서비스와 MVP 구현'],
      ['빅데이터융합전공','시간대별 이용 패턴과 혼잡 데이터 분석'],
      ['커뮤니케이션디자인','정류장·모바일 정보 전달 UX 설계'],
      ['행정학부','교통정책·기관 협업 조건과 실증 구조 검토']
    ],
    projects: [
      ['A','시간대별 혼잡·승차 실패 데이터 정리','빅데이터융합전공','5~7일'],
      ['B','이용자 인터뷰와 핵심 불편 정의','디자인 · 행정','3~5일'],
      ['C','도착·혼잡 안내 서비스 MVP','컴퓨터과학전공','7~10일'],
      ['D','학생·주민 현장 테스트','다전공 팀','3일']
    ],
    mentor: '교통·데이터 실무자 1:1',
    volunteer: '현장조사 활동 연계 검토',
    before: '학생 통학 문제와 주민 교통문제가 따로 논의됨',
    after: '공통 이용 데이터를 기반으로 하나의 생활교통 개선안 제시'
  },
  shop: {
    keys: ['가게','상점','음식점','손님','상권','홍보','SNS','매출','학생','소비','관광객'],
    tags: ['학교+지역사회','지역상권','학생소비'],
    summary: '지역상권 활성화를 단순 할인행사가 아니라 학생 소비 동선·상점 정보 접근·브랜딩·방문 전환 데이터의 문제로 나눌 수 있습니다.',
    majors: [
      ['경영학부','학생 수요·상권 분석과 방문 전환 전략'],
      ['컴퓨터과학전공','지역상점 탐색·추천 서비스 MVP 구현'],
      ['커뮤니케이션디자인','상권 브랜드와 사용자 접점 개선'],
      ['빅데이터융합전공','방문·설문·이용 데이터를 통한 효과 측정']
    ],
    projects: [
      ['A','학생 소비 동선·수요 조사','경영학부 · 빅데이터융합','5일'],
      ['B','지역상점 정보 구조와 UX 설계','디자인','4일'],
      ['C','로컬 탐색 서비스 MVP','컴퓨터과학전공','7~10일'],
      ['D','방문 전환 A/B 실험','경영 · 데이터','7일']
    ],
    mentor: '로컬브랜딩·서비스기획 현직자',
    volunteer: '상권 현장조사·인터뷰 연계 검토',
    before: '대학과 가까워도 학생과 상권의 접점이 약함',
    after: '학생 유입 경로를 만들고 실제 방문 변화까지 측정'
  },
  digital: {
    keys: ['스마트폰','키오스크','디지털','어르신','고령','앱','교육','접근성'],
    tags: ['종로구','디지털격차','자원봉사'],
    summary: '일회성 교육보다 사용자 관찰, 쉬운 UX, 반복 가능한 교육 콘텐츠, 현장 지원을 하나의 프로젝트로 묶을 수 있습니다.',
    majors: [
      ['교육학과','고령층 학습 방식과 반복 교육 시나리오 설계'],
      ['가족복지학과','지역 어르신 요구 조사와 현장 연결'],
      ['커뮤니케이션디자인','큰 글씨·단계형 안내 UX 설계'],
      ['컴퓨터과학전공','쉬운 디지털 안내 웹서비스 구현']
    ],
    projects: [
      ['A','고령층 디지털 어려움 인터뷰','복지','3일'],
      ['B','쉬운 사용 시나리오 설계','교육 · 디자인','4일'],
      ['C','단계형 안내 MVP','컴퓨터과학','7일'],
      ['D','교육 전후 사용성 비교','다전공 팀','3일']
    ],
    mentor: '접근성 UX·디지털교육 전문가',
    volunteer: '자원봉사센터 사전 협의 대상',
    before: '도움을 받을 때만 사용할 수 있음',
    after: '스스로 반복 학습하고 필요한 도움을 받을 수 있는 구조'
  },
  hill: {
    keys: ['언덕','경사','계단','골목','보행','주민','상인','통학','이동','쉼터'],
    tags: ['학교+지역사회','보행','공공공간'],
    summary: '상명대의 통학 불편을 지역 주민의 이동·보행안전·상권 접근과 함께 다루면 하나의 지역 생활환경 프로젝트가 됩니다.',
    majors: [
      ['공간환경학부','경사·보행·휴식 지점 현장 분석'],
      ['커뮤니케이션디자인','보행 안내·공간 경험과 정보 디자인'],
      ['행정학부','공공공간 운영과 주민 협의 조건 검토'],
      ['컴퓨터과학전공','경사·접근성 정보를 제공하는 지도 서비스 구현']
    ],
    projects: [
      ['A','경사·계단·쉼터 현장 데이터 조사','공간환경','3~5일'],
      ['B','학생·주민·상인 인터뷰','행정 · 디자인','3일'],
      ['C','접근성 지도·정보 MVP','컴퓨터과학','7일'],
      ['D','현장 동선 테스트와 개선안','다전공 팀','3일']
    ],
    mentor: '공공공간·접근성 전문가',
    volunteer: '보행환경 조사 활동 연계 검토',
    before: '학생 통학·주민 이동·상권 접근을 각각 따로 봄',
    after: '하나의 생활 보행환경 문제로 통합해 개선안 제시'
  }
};

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
let activeChallenge = null;

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

function pickType(text) {
  let best = 'mobility';
  let score = -1;
  for (const [type, data] of Object.entries(archetypes)) {
    const current = data.keys.reduce((count, key) => count + (text.includes(key) ? 1 : 0), 0);
    if (current > score) {
      score = current;
      best = type;
    }
  }
  return best;
}

function pillClass(kind) {
  if (kind === 'both') return 'both';
  if (kind === 'local') return 'local';
  return 'campus';
}

function renderChallenges(filter = 'all') {
  const grid = $('#challengeGrid');
  if (!grid) return;
  const visible = filter === 'all' ? challenges : challenges.filter(item => item.kind === filter);
  grid.innerHTML = visible.map(item => `
    <button type="button" class="challenge-card" data-id="${escapeHtml(item.id)}" data-kind="${escapeHtml(item.kind)}">
      <div class="challenge-meta">
        <span class="pill ${pillClass(item.kind)}">${item.kind === 'both' ? '학교 + 지역사회' : item.kind === 'local' ? '종로구' : '상명대'}</span>
        <span class="pill partner">${escapeHtml(item.tags[1])}</span>
      </div>
      <h3>${escapeHtml(item.question)}</h3>
      <p>${escapeHtml(item.desc)}</p>
      <div class="challenge-bottom"><span><b>문제 주체</b> ${escapeHtml(item.owner)}</span><span><b>전공</b> ${escapeHtml(item.majors)}</span></div>
    </button>
  `).join('');

  grid.querySelectorAll('.challenge-card').forEach(card => {
    card.addEventListener('click', () => openChallenge(card.dataset.id));
  });
}

function openChallenge(id) {
  const item = challenges.find(challenge => challenge.id === id);
  const dialog = $('#challengeDialog');
  if (!item || !dialog) return;
  activeChallenge = item;
  $('#dialogKicker').textContent = item.kind === 'both' ? 'CAMPUS × LOCAL' : item.kind === 'local' ? 'JONGNO LOCAL' : 'SMU CAMPUS';
  $('#dialogTitle').textContent = item.question;
  $('#dialogDesc').textContent = item.desc;
  $('#dialogOwner').textContent = item.owner;
  $('#dialogMajors').textContent = item.majors;
  $('#dialogMentor').textContent = item.mentor;
  $('#dialogBenefit').textContent = item.benefit;
  dialog.showModal();
}

function fillSample(key) {
  const sample = samples[key];
  if (!sample) return;
  $('#location').value = sample.location;
  $('#client').value = sample.client;
  $('#title').value = sample.title;
  $('#detail').value = sample.detail;
}

function renderAnalysis({title, detail, client, location}) {
  const type = pickType(`${title} ${detail}`);
  const data = archetypes[type];

  $('#emptyResult').hidden = true;
  $('#analysisResult').hidden = false;
  $('#resultTitle').textContent = title;
  $('#fitScore').textContent = String(91 + Math.min(7, data.majors.length));
  $('#tags').innerHTML = data.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
  $('#summary').innerHTML = `<b>${escapeHtml(location)}</b>의 문제를 <b>${escapeHtml(data.tags.join(' · '))}</b> 관점으로 분석했습니다. ${escapeHtml(data.summary)}`;
  $('#majorGrid').innerHTML = data.majors.map(([major, role]) => `<article class="major-card"><span>SMU MAJOR</span><b>${escapeHtml(major)}</b><p>${escapeHtml(role)}</p></article>`).join('');
  $('#projectList').innerHTML = data.projects.map(([code, project, majors, duration]) => `<article class="project"><span>${escapeHtml(code)}</span><div><b>${escapeHtml(project)}</b><small>${escapeHtml(majors)} · 예상 ${escapeHtml(duration)}</small></div><i>MICRO PROJECT</i></article>`).join('');
  $('#mentorText').textContent = data.mentor;
  $('#volunteerText').textContent = data.volunteer;
  $('#ownerText').textContent = `${client} 현장 피드백`;
  $('#beforeText').textContent = data.before;
  $('#afterText').textContent = data.after;
  $('#portfolioTitle').textContent = title;
  $('#portfolioClient').textContent = `${location} · Problem Owner: ${client}`;
  $('#portfolioMajors').textContent = `추천 전공: ${data.majors.map(item => item[0]).join(' + ')}`;

  localStorage.setItem('smoongroad_local_last', JSON.stringify({title, detail, client, location, type, createdAt: new Date().toISOString()}));
  $('#analysisResult').scrollIntoView({behavior: 'smooth', block: 'start'});
}

function saveInterest() {
  if (!activeChallenge) return;
  let saved = [];
  try { saved = JSON.parse(localStorage.getItem('smoongroad_local_interest') || '[]'); } catch {}
  if (!Array.isArray(saved)) saved = [];
  if (!saved.includes(activeChallenge.id)) saved.push(activeChallenge.id);
  localStorage.setItem('smoongroad_local_interest', JSON.stringify(saved));
  const toast = $('#savedToast');
  toast?.classList.add('show');
  setTimeout(() => toast?.classList.remove('show'), 1800);
  $('#challengeDialog')?.close();
}

renderChallenges();

$$('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    $$('[data-filter]').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderChallenges(button.dataset.filter || 'all');
  });
});

$$('[data-sample]').forEach(button => button.addEventListener('click', () => fillSample(button.dataset.sample)));

$('#problemForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const payload = {
    title: $('#title').value.trim(),
    detail: $('#detail').value.trim(),
    client: $('#client').value,
    location: $('#location').value
  };
  if (!payload.title || !payload.detail) return;
  renderAnalysis(payload);
});

$('#dialogClose')?.addEventListener('click', () => $('#challengeDialog')?.close());
$('#dialogClose2')?.addEventListener('click', () => $('#challengeDialog')?.close());
$('#saveInterest')?.addEventListener('click', saveInterest);

try {
  const saved = JSON.parse(localStorage.getItem('smoongroad_local_last') || 'null');
  if (saved) {
    $('#location').value = saved.location || '평창동';
    $('#client').value = saved.client || '종로구';
    $('#title').value = saved.title || '';
    $('#detail').value = saved.detail || '';
  }
} catch {}
