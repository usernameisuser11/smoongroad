const samples = {
  shop: {
    location: '부암동', client: '지역 소상공인',
    title: '상명대와 가까운데 학생 손님이 거의 없는 지역 음식점',
    detail: '오래 운영한 작은 음식점이지만 온라인 정보가 부족하고 SNS 홍보도 거의 하지 못해 상명대 학생들에게 잘 알려지지 않는다. 학생 수요를 파악하고 실제 유입을 늘릴 방법이 필요하다.'
  },
  care: {
    location: '홍지동', client: '복지기관·지역단체',
    title: '급경사와 계단 때문에 어르신 이동이 불편한 골목',
    detail: '경사가 심하고 계단과 좁은 골목이 많아 어르신과 이동약자가 버스정류장, 병원, 약국까지 이동하는 데 어려움을 겪는다. 실제 접근성 정보를 조사하고 이용하기 쉬운 안내가 필요하다.'
  },
  digital: {
    location: '부암동', client: '복지기관·지역단체',
    title: '지역 어르신의 스마트폰·디지털 서비스 이용 어려움',
    detail: '스마트폰, 키오스크, 공공서비스 앱 사용에 익숙하지 않은 어르신이 많다. 단순 교육 한 번으로 끝나지 않고 누구나 반복해서 볼 수 있는 쉬운 안내와 교육 방식이 필요하다.'
  },
  culture: {
    location: '홍지동', client: '지역 주민',
    title: '상명대로 올라가는 언덕길이 지역과 연결되지 못하는 공간',
    detail: '급경사 언덕길은 학생들의 통학로이지만 종로의 역사와 문화적 특징이 드러나지 않고 주민에게는 소음과 보행 불편이 발생한다. 보행 예절과 지역 이야기를 함께 담은 공간 개선이 필요하다.'
  }
};

const archetypes = {
  shop: {
    keys: ['가게','상점','음식점','손님','상권','홍보','SNS','매출','마케팅'],
    tags: ['지역상권','디지털 전환','학생 소비'],
    summary: '지역상권의 문제를 단순 할인행사가 아니라 학생 소비 데이터, 디지털 정보 접근성, 브랜드 접점의 문제로 나눌 수 있습니다.',
    majors: [
      ['경영학부','학생 수요·상권 분석과 마케팅 전략'],
      ['컴퓨터과학전공','모바일 소개·예약·정보 서비스 구현'],
      ['빅데이터융합전공','방문·설문 데이터를 통한 효과 측정'],
      ['역사콘텐츠전공','가게와 동네의 이야기를 지역 콘텐츠로 재구성']
    ],
    projects: [
      ['A','학생 수요·상권 데이터 분석','경영학부 · 빅데이터융합전공','5~7일'],
      ['B','모바일 로컬 페이지 MVP','컴퓨터과학전공','7~10일'],
      ['C','지역 스토리 콘텐츠 패키지','역사콘텐츠전공','5일'],
      ['D','학생 대상 A/B 홍보 실험','경영학부 · 빅데이터융합전공','7일']
    ],
    before: '학생 인지도·온라인 정보 부족',
    after: '학생 접점 생성 + 실제 유입 지표 측정'
  },
  care: {
    keys: ['경사','계단','골목','어르신','장애','휠체어','이동','보행','안전','버스'],
    tags: ['이동권','보행안전','복지'],
    summary: '지형과 이동 문제를 현장조사·공간데이터·사용자 경험으로 나누고, 이동약자 관점에서 실제 사용 가능한 결과물로 설계할 수 있습니다.',
    majors: [
      ['공간환경학부','경사·보행·시설 데이터를 GIS 관점에서 조사'],
      ['가족복지학과','고령층·이동약자 사용자 요구 파악'],
      ['컴퓨터과학전공','접근성 지도와 경로 안내 웹서비스 구현'],
      ['휴먼지능정보공학전공','사람 중심 추천·접근성 UX 설계']
    ],
    projects: [
      ['A','급경사·계단·쉼터 현장 데이터 조사','공간환경학부','3~5일'],
      ['B','이동약자 인터뷰와 요구사항 정의','가족복지학과','3일'],
      ['C','상명 케어맵 MVP','컴퓨터과학전공 · 휴먼지능정보공학전공','7~10일'],
      ['D','실제 사용자 동선 테스트','가족복지학과 · 공간환경학부','3일']
    ],
    before: '최단거리 중심 정보만 존재',
    after: '이동약자 기준 접근성 정보와 검증 경로 제공'
  },
  digital: {
    keys: ['스마트폰','키오스크','디지털','어르신','고령','앱','AI','교육'],
    tags: ['디지털 격차','고령층','교육'],
    summary: '일회성 봉사 대신 사용자 관찰, 쉬운 UX, 반복 가능한 교육 콘텐츠와 효과 측정을 하나의 다전공 프로젝트로 설계할 수 있습니다.',
    majors: [
      ['교육학과','고령층 학습 방식과 교육 프로그램 설계'],
      ['가족복지학과','지역 어르신 요구 조사와 현장 연결'],
      ['휴먼지능정보공학전공','고령자 친화 UI·AI 도움 기능 설계'],
      ['컴퓨터과학전공','쉬운 안내 웹앱·콘텐츠 플랫폼 구현']
    ],
    projects: [
      ['A','고령층 디지털 어려움 인터뷰','가족복지학과','3일'],
      ['B','초보자용 교육 시나리오 설계','교육학과','4일'],
      ['C','큰 글씨·단계형 안내 MVP','휴먼지능정보공학전공 · 컴퓨터과학전공','7일'],
      ['D','교육 전후 사용성 비교','교육학과 · 휴먼지능정보공학전공','3일']
    ],
    before: '도움을 받을 때만 사용 가능',
    after: '스스로 반복 학습 가능한 디지털 안내 체계'
  },
  culture: {
    keys: ['언덕','문화','역사','관광','스토리','픽토그램','계단','정숙','공간'],
    tags: ['지역문화','공공공간','보행'],
    summary: '언덕길을 단순 미관 개선이 아니라 지역문화·보행안전·주민 정숙 요구를 함께 다루는 프로젝트로 바꿀 수 있습니다.',
    majors: [
      ['역사콘텐츠전공','종로·부암·홍지 지역 스토리 발굴'],
      ['공간환경학부','보행 동선·휴식 지점·공간 문제 분석'],
      ['행정학부','주민 의견과 공공공간 운영 조건 검토'],
      ['컴퓨터과학전공','QR 기반 디지털 스토리맵·참여형 피드백 구현']
    ],
    projects: [
      ['A','언덕길 지역 스토리 리서치','역사콘텐츠전공','4일'],
      ['B','보행 불편·휴식 지점 현장조사','공간환경학부','3일'],
      ['C','주민 정숙·보행 가이드 제안','행정학부 · 공간환경학부','4일'],
      ['D','QR 스토리맵 프로토타입','컴퓨터과학전공 · 역사콘텐츠전공','7일']
    ],
    before: '통과만 하는 가파른 통학로',
    after: '지역 이야기를 경험하고 주민과 공존하는 보행공간'
  }
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

function pickType(text) {
  let best = 'care';
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
  $('#fitScore').textContent = String(88 + Math.min(9, data.majors.length * 2));
  $('#tags').innerHTML = data.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
  $('#summary').innerHTML = `<b>${escapeHtml(location)}</b>의 문제를 <b>${escapeHtml(data.tags.join(' · '))}</b> 관점으로 분석했습니다. ${escapeHtml(data.summary)}`;
  $('#majorGrid').innerHTML = data.majors.map(([major, role]) => `<article class="major-card"><span>SMU MAJOR</span><b>${escapeHtml(major)}</b><p>${escapeHtml(role)}</p></article>`).join('');
  $('#projectList').innerHTML = data.projects.map(([code, project, majors, duration]) => `<article class="project"><span>${code}</span><div><b>${escapeHtml(project)}</b><small>${escapeHtml(majors)} · 예상 ${escapeHtml(duration)}</small></div><i>MICRO PROJECT</i></article>`).join('');
  $('#beforeText').textContent = data.before;
  $('#afterText').textContent = data.after;
  $('#portfolioTitle').textContent = title;
  $('#portfolioClient').textContent = `${location} · ${client}`;
  $('#portfolioMajors').textContent = data.majors.map(item => item[0]).join(' + ');

  localStorage.setItem('smoongroad_local_last', JSON.stringify({title, detail, client, location, type, createdAt: new Date().toISOString()}));
  $('#analysisResult').scrollIntoView({behavior: 'smooth', block: 'start'});
}

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

try {
  const saved = JSON.parse(localStorage.getItem('smoongroad_local_last') || 'null');
  if (saved) {
    $('#location').value = saved.location || '부암동';
    $('#client').value = saved.client || '지역 주민';
    $('#title').value = saved.title || '';
    $('#detail').value = saved.detail || '';
  }
} catch {}
