const challenges = [
  {
    id: 'mobility',
    kind: 'both',
    question: '상명대 학생과 종로구 주민이 같은 시간대 버스에서 불편을 겪는 이유는 뭘까?',
    desc: '통학 시간대의 혼잡·배차·정류장 이용 문제를 학생 통학만의 문제가 아니라 지역 생활교통 문제로 함께 분석합니다.',
    owner: '종로구 · 상명대학교',
    majors: '컴퓨터과학 · 빅데이터 · 디자인 · 행정',
    majorKeys: ['컴퓨터과학', '데이터', '디자인', '행정·복지'],
    mentor: '교통·데이터 실무자 1:1 멘토링',
    benefit: '프로젝트 수료 기록 · 현장실증 · 봉사 연계 검토',
    tags: ['학교 + 지역사회', '생활교통', '현장실증'],
    difficulty: '중', duration: '2~3주', team: '4명',
    deliverable: '생활교통 혼잡 분석 대시보드 + 모바일 안내 MVP',
    priority: 94, similar: 11, status: '모집중',
    weights: [['컴퓨터과학', 35], ['빅데이터', 30], ['디자인', 20], ['행정', 15]]
  },
  {
    id: 'shop',
    kind: 'both',
    question: '상명대 학생들은 왜 바로 옆 지역상권을 잘 이용하지 않을까?',
    desc: '학생 소비 동선과 지역상권의 정보·브랜딩·접근 문제를 함께 분석하고, 실제 방문 전환을 측정할 수 있는 프로젝트로 연결합니다.',
    owner: '종로구 · 지역상인 협의체',
    majors: '경영 · 컴퓨터과학 · 디자인 · 데이터',
    majorKeys: ['경영', '컴퓨터과학', '디자인', '데이터'],
    mentor: '로컬브랜딩·서비스기획 멘토링',
    benefit: '상권 데이터 포트폴리오 · 기업 피드백 · 수료 기록',
    tags: ['학교 + 지역사회', '지역상권', '학생 참여'],
    difficulty: '중', duration: '2~3주', team: '4명',
    deliverable: '학생-골목상권 연결 서비스 MVP + 방문 전환 실험',
    priority: 89, similar: 8, status: '모집중',
    weights: [['경영', 30], ['컴퓨터과학', 30], ['디자인', 25], ['데이터', 15]]
  },
  {
    id: 'hill',
    kind: 'both',
    question: '상명대 앞 언덕은 학생·주민·상인 모두에게 더 나은 길이 될 수 없을까?',
    desc: '경사·보행안전·휴식·상권 동선을 함께 보고, 단순 미관 개선이 아닌 생활 이동과 지역 경험을 동시에 개선합니다.',
    owner: '종로구 · 상명대학교 · 지역주민',
    majors: '공간환경 · 디자인 · 행정 · 컴퓨터과학',
    majorKeys: ['디자인', '행정·복지', '컴퓨터과학'],
    mentor: '공공공간·접근성 전문가 멘토링',
    benefit: '현장조사 · 프로토타입 · 사회참여 기록',
    tags: ['학교 + 지역사회', '보행', '공공공간'],
    difficulty: '상', duration: '3~4주', team: '5명',
    deliverable: '보행 불편 지도 + 휴식·안내·안전 개선 프로토타입',
    priority: 87, similar: 6, status: '진행중',
    weights: [['공간·디자인', 35], ['행정', 25], ['컴퓨터과학', 20], ['데이터', 20]]
  },
  {
    id: 'digital',
    kind: 'local',
    question: '키오스크 앞에서 주문을 포기하는 어르신을 줄일 수 있을까?',
    desc: '고령층 디지털 접근 문제를 교육 한 번으로 끝내지 않고 쉬운 UX·반복 학습·현장 지원 구조로 설계합니다.',
    owner: '종로구 · 자원봉사·복지기관',
    majors: '컴퓨터과학 · 디자인 · 교육 · 복지',
    majorKeys: ['컴퓨터과학', '디자인', '행정·복지'],
    mentor: '접근성 UX·교육 전문가 멘토링',
    benefit: '자원봉사 연계 검토 · 사용자 테스트 · 수료 기록',
    tags: ['종로구', '디지털 격차', '자원봉사'],
    difficulty: '중', duration: '2주', team: '4명',
    deliverable: '고령층용 단계형 디지털 안내 서비스 + 현장 교육안',
    priority: 91, similar: 9, status: '모집중',
    weights: [['컴퓨터과학', 30], ['디자인', 30], ['복지', 25], ['교육', 15]]
  },
  {
    id: 'tourism',
    kind: 'local',
    question: '관광객은 많은데 왜 어떤 골목에는 사람이 머물지 않을까?',
    desc: '관광객이 특정 지역에만 집중되는 이유를 동선·콘텐츠·상권 정보 측면에서 분석하고, 숨은 지역과 소상공인으로 분산하는 방안을 실험합니다.',
    owner: '종로구 · 지역상인 · 문화기관',
    majors: '콘텐츠 · 경영 · 디자인 · 데이터',
    majorKeys: ['경영', '디자인', '데이터'],
    mentor: '관광·로컬콘텐츠 전문가 멘토링',
    benefit: '지역콘텐츠 포트폴리오 · 현장 테스트 · 기관 피드백',
    tags: ['종로구', '관광분산', '골목상권'],
    difficulty: '중', duration: '2~3주', team: '4명',
    deliverable: '문화자원-골목상권 연결 코스 + 체류·방문 전환 실험',
    priority: 84, similar: 7, status: '모집중',
    weights: [['콘텐츠·디자인', 35], ['경영', 30], ['데이터', 20], ['지역연구', 15]]
  },
  {
    id: 'campus-info',
    kind: 'campus',
    question: '학생에게 필요한 학교 정보는 왜 항상 흩어져 있을까?',
    desc: '장학·지원·학사·비교과 정보가 여러 채널에 흩어진 문제를 학생 관점에서 통합하고 개인화하는 프로젝트입니다.',
    owner: '상명대학교',
    majors: '컴퓨터과학 · 디자인 · 데이터',
    majorKeys: ['컴퓨터과학', '디자인', '데이터'],
    mentor: '서비스기획·UX 멘토링',
    benefit: '교내 실증 · 포트폴리오 · 수료 기록',
    tags: ['상명대', '정보접근', '학생경험'],
    difficulty: '중', duration: '2주', team: '3명',
    deliverable: '학생 맞춤형 학교정보 탐색 프로토타입',
    priority: 79, similar: 4, status: '해결완료',
    weights: [['컴퓨터과학', 45], ['디자인', 30], ['데이터', 25]]
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
    mentor: '교통·데이터 실무자 1:1', volunteer: '현장조사 활동 연계 검토',
    before: '학생 통학 문제와 주민 교통문제가 따로 논의됨', after: '공통 이용 데이터를 기반으로 하나의 생활교통 개선안 제시'
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
    mentor: '로컬브랜딩·서비스기획 현직자', volunteer: '상권 현장조사·인터뷰 연계 검토',
    before: '대학과 가까워도 학생과 상권의 접점이 약함', after: '학생 유입 경로를 만들고 실제 방문 변화까지 측정'
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
      ['B','쉬운 단계형 UX·교육안 설계','교육 · 디자인','4일'],
      ['C','반복 학습용 웹 안내 MVP','컴퓨터과학','7일'],
      ['D','현장 사용성 테스트','다전공 팀','3일']
    ],
    mentor: '접근성 UX·교육 전문가', volunteer: '디지털 지원 봉사 연계 검토',
    before: '교육 행사 이후 다시 어려움을 겪음', after: '반복 가능한 도구와 현장 지원 구조를 함께 제공'
  },
  tourism: {
    keys: ['관광','문화재','문화유산','골목','체류','관광객','콘텐츠'],
    tags: ['종로구','관광분산','골목상권'],
    summary: '관광객을 더 모으는 것이 아니라 이미 존재하는 유동인구를 덜 알려진 문화공간과 골목상권으로 분산하는 문제로 접근할 수 있습니다.',
    majors: [
      ['문화콘텐츠전공','지역문화 스토리와 체험 동선 기획'],
      ['경영학부','상인 참여 구조와 방문 전환 지표 설계'],
      ['커뮤니케이션디자인','지역 코스·상점 정보 UX 설계'],
      ['빅데이터융합전공','체류·이동·방문 데이터 효과 측정']
    ],
    projects: [
      ['A','문화자원·상권 연결 지점 조사','콘텐츠 · 경영','4일'],
      ['B','관광객·상인 인터뷰','다전공 팀','3일'],
      ['C','지역 코스 추천 MVP','디자인 · 데이터','7일'],
      ['D','방문·체류 전환 실험','경영 · 데이터','7일']
    ],
    mentor: '관광·로컬콘텐츠 전문가', volunteer: '지역문화 조사 활동 연계 검토',
    before: '유명 관광지에 방문이 집중되고 주변 골목은 지나침', after: '문화자원과 골목상권을 연결해 체류를 분산'
  },
  hill: {
    keys: ['언덕','경사','보행','계단','길','이동','안전','휴식'],
    tags: ['학교+지역사회','보행환경','접근성'],
    summary: '상명대 앞 언덕을 학생 통학로만 보지 않고 주민 이동·상권 접근·보행 안전이 겹치는 생활공간으로 볼 수 있습니다.',
    majors: [
      ['스페이스디자인전공','휴식·안내·동선 공간 개선안 설계'],
      ['커뮤니케이션디자인','경사·거리·접근성 정보 시각화'],
      ['행정학부','공공공간 적용 조건과 기관 협업 검토'],
      ['컴퓨터과학전공','접근성 지도·안내 서비스 MVP 구현']
    ],
    projects: [
      ['A','경사·휴식·위험 지점 현장조사','다전공 팀','3일'],
      ['B','학생·주민·상인 보행 인터뷰','행정 · 디자인','3일'],
      ['C','접근성 지도·정보 MVP','컴퓨터과학','7일'],
      ['D','현장 동선 테스트와 개선안','다전공 팀','3일']
    ],
    mentor: '공공공간·접근성 전문가', volunteer: '보행환경 조사 활동 연계 검토',
    before: '학생 통학·주민 이동·상권 접근을 각각 따로 봄', after: '하나의 생활 보행환경 문제로 통합해 개선안 제시'
  }
};

const impactCases = [
  {status:'해결완료', title:'학교 정보 통합 탐색 프로토타입', place:'상명대학교', team:'컴퓨터과학 · 디자인 · 데이터', result:'흩어진 장학·학사·비교과 정보를 한 화면에서 탐색하는 MVP 제작', metric:'테스트 만족도 4.6 / 5'},
  {status:'진행중', title:'상명대 앞 언덕 보행환경 개선', place:'홍지동 · 상명대 앞', team:'디자인 · 행정 · 컴퓨터과학', result:'위험·휴식·상권 접근 지점을 현장 조사해 접근성 지도로 시각화', metric:'현장조사 31개 지점'},
  {status:'실증준비', title:'학생-지역상권 연결 프로젝트', place:'평창동 · 부암동', team:'경영 · 컴퓨터과학 · 디자인', result:'학생 소비 동선과 상점 정보 접근을 연결하는 방문 전환 실험 설계', metric:'참여 상점 데모 8곳'}
];

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
let activeChallenge = null;
let activeMajor = '전체';

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

function pickType(text) {
  let best = 'mobility';
  let score = -1;
  for (const [type, data] of Object.entries(archetypes)) {
    const current = data.keys.reduce((count, key) => count + (text.includes(key) ? 1 : 0), 0);
    if (current > score) { score = current; best = type; }
  }
  return best;
}

function pillClass(kind) {
  if (kind === 'both') return 'both';
  if (kind === 'local') return 'local';
  return 'campus';
}

function statusClass(status) {
  if (status === '해결완료') return 'done';
  if (status === '진행중') return 'doing';
  return 'open';
}

function injectEnhancementStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .top-actions{flex-wrap:wrap;justify-content:flex-end}.top-actions .mini-nav{background:transparent}
    .cluster-banner{display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:center;margin:0 0 18px;padding:17px 18px;border:1px solid #cbdceb;border-radius:19px;background:linear-gradient(135deg,#f7fbff,#fff)}
    .cluster-ai{width:44px;height:44px;border-radius:14px;display:grid;place-items:center;background:var(--primary);color:#fff;font-size:11px;font-weight:950}.cluster-banner b{display:block;font-size:13px}.cluster-banner p{margin:3px 0 0;font-size:10px;color:var(--muted)}.cluster-score{font-size:11px;font-weight:950;color:var(--green);white-space:nowrap}
    .challenge-statline{display:flex;gap:7px;flex-wrap:wrap;margin:13px 0 14px}.challenge-statline span{padding:6px 8px;border-radius:9px;background:var(--surface2);font-size:9px;font-weight:850;color:#53667a}.challenge-statline strong{color:var(--primary)}
    .challenge-status{position:absolute;right:19px;top:19px;padding:6px 8px;border-radius:999px;font-size:8px;font-weight:950}.challenge-status.open{background:#eaf3fb;color:#245a87}.challenge-status.doing{background:#fff0d8;color:#815713}.challenge-status.done{background:#e9f6f1;color:#17644f}
    .major-view-wrap{display:grid;grid-template-columns:.72fr 1.28fr;gap:16px;align-items:start}.major-selector,.major-results{background:#fff;border:1px solid var(--line);border-radius:24px;padding:22px}.major-selector h3,.major-results h3{margin:0 0 7px;font-size:21px;letter-spacing:-.04em}.major-selector p,.major-results>p{margin:0 0 15px;color:var(--muted);font-size:11px}.major-buttons{display:grid;gap:8px}.major-buttons button{border:1px solid var(--line);background:#f8fafc;border-radius:13px;padding:12px 13px;text-align:left;font-weight:900;color:#40566d}.major-buttons button.active{background:var(--primary);border-color:var(--primary);color:#fff}.major-count{display:inline-flex;margin-top:15px;padding:8px 10px;border-radius:11px;background:var(--orange-soft);color:#815713;font-size:10px;font-weight:950}
    .major-project-list{display:grid;gap:9px}.major-project{width:100%;border:1px solid var(--line);background:#fff;border-radius:16px;padding:14px;text-align:left;display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center}.major-project:hover{border-color:#b9cfe2;transform:translateY(-1px)}.major-project b{display:block;font-size:12px}.major-project small{display:block;color:var(--muted);font-size:9px;margin-top:3px}.major-project i{font-style:normal;font-size:9px;color:var(--primary2);font-weight:950}
    .impact-stats{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:16px}.impact-stat{background:#fff;border:1px solid var(--line);border-radius:18px;padding:17px}.impact-stat strong{display:block;font-size:29px;letter-spacing:-.04em;color:var(--primary)}.impact-stat span{font-size:9px;color:var(--muted);font-weight:900}
    .impact-case-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.impact-case{background:#fff;border:1px solid var(--line);border-radius:21px;padding:19px}.impact-case .case-status{display:inline-flex;padding:6px 8px;border-radius:999px;background:var(--green-soft);color:var(--green);font-size:8px;font-weight:950}.impact-case h3{font-size:17px;margin:11px 0 5px;letter-spacing:-.035em}.impact-case>p{font-size:10px;color:var(--muted);margin:0 0 12px}.case-flow{padding:11px;border-radius:13px;background:var(--surface2);font-size:10px}.case-flow b{display:block;margin-bottom:4px}.case-metric{margin-top:9px;font-size:9px;font-weight:950;color:var(--primary2)}
    .dialog-extra{margin-top:15px;border-top:1px solid var(--line);padding-top:15px}.dialog-extra-head{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-bottom:10px}.dialog-extra-head b{font-size:12px}.dialog-priority{font-size:9px;font-weight:950;color:var(--green)}.dialog-facts{display:grid;grid-template-columns:repeat(4,1fr);gap:7px}.dialog-facts div{background:var(--surface2);border-radius:12px;padding:10px}.dialog-facts span{display:block;color:var(--muted);font-size:8px;font-weight:900}.dialog-facts b{display:block;font-size:10px;margin-top:2px}.weight-list{display:grid;gap:6px;margin-top:11px}.weight-row{display:grid;grid-template-columns:88px 1fr 34px;gap:8px;align-items:center;font-size:9px}.weight-track{height:7px;background:#e4edf5;border-radius:999px;overflow:hidden}.weight-track i{display:block;height:100%;background:var(--primary2);border-radius:999px}.deliverable-box{margin-top:11px;padding:11px;border-radius:13px;background:#fff7e8;border:1px solid #f3dfb9;font-size:10px;color:#6c521f}
    .apply-dialog{border:0;padding:0;border-radius:24px;width:min(560px,calc(100% - 28px));box-shadow:0 30px 90px rgba(15,34,56,.25)}.apply-dialog::backdrop{background:rgba(15,34,56,.52);backdrop-filter:blur(4px)}.apply-inner{padding:24px}.apply-top{display:flex;justify-content:space-between;gap:15px;align-items:start}.apply-top h2{font-size:24px;line-height:1.25;margin:3px 0 0;letter-spacing:-.04em}.apply-top button{border:0;background:var(--surface2);width:36px;height:36px;border-radius:11px;font-size:20px}.apply-kicker{font-size:9px;font-weight:950;letter-spacing:.12em;color:var(--primary2)}.apply-copy{font-size:11px;color:var(--muted);margin:12px 0 16px}.apply-field{display:grid;gap:6px;margin-bottom:11px}.apply-field label{font-size:9px;font-weight:950;color:#52657a}.apply-field input,.apply-field select,.apply-field textarea{border:1px solid var(--line);border-radius:11px;padding:11px 12px;background:#f9fbfd}.apply-field textarea{min-height:86px;resize:vertical}.apply-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:15px}.apply-note{font-size:8px;color:var(--muted);margin-top:9px}
    @media(max-width:900px){.major-view-wrap{grid-template-columns:1fr}.impact-stats{grid-template-columns:repeat(2,1fr)}.impact-case-grid{grid-template-columns:1fr}.dialog-facts{grid-template-columns:repeat(2,1fr)}.cluster-banner{grid-template-columns:auto 1fr}.cluster-score{grid-column:2}.top-actions .mini-nav{display:none}}
    @media(max-width:560px){.impact-stats{grid-template-columns:1fr 1fr}.impact-stat strong{font-size:24px}.weight-row{grid-template-columns:78px 1fr 30px}}
  `;
  document.head.appendChild(style);
}

function enhanceHeroAndNav() {
  const title = document.querySelector('.hero h1');
  const copy = document.querySelector('.hero-copy');
  if (title) title.innerHTML = '종로의 문제를<br><em>상명의 전공으로 해결합니다</em>';
  if (copy) copy.innerHTML = '<b>지역의 문제를 발견하는 데서 끝나지 않습니다.</b><br>기관이 검증한 종로의 실제 문제를 AI가 분석하고, 상명대학교의 전공 역량과 연결해 학생 팀이 직접 프로젝트로 해결합니다. 해결 과정과 결과는 다시 지역에 기록됩니다.';

  const actions = document.querySelector('.top-actions');
  if (actions && !actions.querySelector('[href="#major-view"]')) {
    const major = document.createElement('a'); major.href = '#major-view'; major.className = 'mini-nav'; major.textContent = '전공으로 보는 종로';
    const impact = document.createElement('a'); impact.href = '#impact-board'; impact.className = 'mini-nav'; impact.textContent = '수뭉 임팩트';
    actions.insertBefore(major, actions.lastElementChild);
    actions.insertBefore(impact, actions.lastElementChild);
  }

  const challengeHead = document.querySelector('#challenges .section-head');
  if (challengeHead) challengeHead.innerHTML = '<span>SMUNG CHALLENGE</span><h2>문제를 발견했다면, 이제 해결하러 갑니다</h2><p>AI가 유사한 제보를 묶고 우선순위를 정리합니다. 학생은 자신의 전공과 맞는 문제를 선택해 실제 지역 프로젝트에 참여합니다.</p>';
}

function injectClusterBanner() {
  const section = $('#challenges');
  const filter = section?.querySelector('.filterbar');
  if (!section || !filter || section.querySelector('.cluster-banner')) return;
  const banner = document.createElement('div');
  banner.className = 'cluster-banner';
  banner.innerHTML = '<div class="cluster-ai">AI</div><div><b>유사 제보는 하나의 지역문제로 묶습니다</b><p>예: “골목이 어둡다” · “밤길이 무섭다” · “가로등이 부족하다” → <strong>부암동 야간 보행환경 개선</strong></p></div><div class="cluster-score">유사 제보 7건 · 우선순위 92</div>';
  filter.before(banner);
}

function renderChallenges(filter = 'all') {
  const grid = $('#challengeGrid');
  if (!grid) return;
  const visible = filter === 'all' ? challenges : challenges.filter(item => item.kind === filter);
  grid.innerHTML = visible.map(item => `
    <button type="button" class="challenge-card" data-id="${escapeHtml(item.id)}" data-kind="${escapeHtml(item.kind)}">
      <span class="challenge-status ${statusClass(item.status)}">${escapeHtml(item.status)}</span>
      <div class="challenge-meta">
        <span class="pill ${pillClass(item.kind)}">${item.kind === 'both' ? '학교 + 지역사회' : item.kind === 'local' ? '종로구' : '상명대'}</span>
        <span class="pill partner">${escapeHtml(item.tags[1])}</span>
      </div>
      <h3>${escapeHtml(item.question)}</h3>
      <p>${escapeHtml(item.desc)}</p>
      <div class="challenge-statline"><span>AI 우선순위 <strong>${item.priority}</strong></span><span>유사 제보 ${item.similar}건 병합</span><span>예상 ${escapeHtml(item.duration)}</span></div>
      <div class="challenge-bottom"><span><b>문제 주체</b> ${escapeHtml(item.owner)}</span><span><b>전공</b> ${escapeHtml(item.majors)}</span></div>
    </button>
  `).join('');
  grid.querySelectorAll('.challenge-card').forEach(card => card.addEventListener('click', () => openChallenge(card.dataset.id)));
}

function ensureDialogExtra() {
  const dialog = $('#challengeDialog');
  const actions = dialog?.querySelector('.dialog-actions');
  if (!dialog || !actions || $('#dialogExtra')) return;
  const extra = document.createElement('div');
  extra.className = 'dialog-extra';
  extra.id = 'dialogExtra';
  extra.innerHTML = `
    <div class="dialog-extra-head"><b>AI 프로젝트 설계</b><span class="dialog-priority" id="dialogPriority"></span></div>
    <div class="dialog-facts">
      <div><span>난이도</span><b id="dialogDifficulty"></b></div><div><span>예상 기간</span><b id="dialogDuration"></b></div><div><span>모집 인원</span><b id="dialogTeam"></b></div><div><span>유사 제보</span><b id="dialogSimilar"></b></div>
    </div>
    <div class="weight-list" id="dialogWeights"></div>
    <div class="deliverable-box"><b>예상 결과물</b><br><span id="dialogDeliverable"></span></div>`;
  actions.before(extra);
  const save = $('#saveInterest');
  if (save) save.textContent = '이 문제 해결에 참여하기';
}

function openChallenge(id) {
  const item = challenges.find(challenge => challenge.id === id);
  const dialog = $('#challengeDialog');
  if (!item || !dialog) return;
  activeChallenge = item;
  ensureDialogExtra();
  $('#dialogKicker').textContent = item.kind === 'both' ? 'CAMPUS × LOCAL CHALLENGE' : item.kind === 'local' ? 'JONGNO CHALLENGE' : 'SMU CHALLENGE';
  $('#dialogTitle').textContent = item.question;
  $('#dialogDesc').textContent = item.desc;
  $('#dialogOwner').textContent = item.owner;
  $('#dialogMajors').textContent = item.majors;
  $('#dialogMentor').textContent = item.mentor;
  $('#dialogBenefit').textContent = item.benefit;
  $('#dialogPriority').textContent = `AI 우선순위 ${item.priority} · ${item.status}`;
  $('#dialogDifficulty').textContent = item.difficulty;
  $('#dialogDuration').textContent = item.duration;
  $('#dialogTeam').textContent = item.team;
  $('#dialogSimilar').textContent = `${item.similar}건 병합`;
  $('#dialogDeliverable').textContent = item.deliverable;
  $('#dialogWeights').innerHTML = item.weights.map(([name, value]) => `<div class="weight-row"><b>${escapeHtml(name)}</b><span class="weight-track"><i style="width:${Number(value)}%"></i></span><strong>${Number(value)}%</strong></div>`).join('');
  dialog.showModal();
}

function injectMajorView() {
  const challengesSection = $('#challenges');
  if (!challengesSection || $('#major-view')) return;
  const section = document.createElement('section');
  section.className = 'section shell';
  section.id = 'major-view';
  section.innerHTML = `
    <div class="section-head"><span>MAJOR × JONGNO</span><h2>내 전공으로 종로에서 무엇을 해결할 수 있을까?</h2><p>전공을 선택하면 그 역량이 필요한 지역문제만 보여줍니다. 한 전공이 아니라 여러 전공이 협업하는 문제일수록 실제 해결 가능성이 높아집니다.</p></div>
    <div class="major-view-wrap">
      <aside class="major-selector"><h3>전공 분야 선택</h3><p>관심 분야를 누르면 관련 수뭉 챌린지가 바로 연결됩니다.</p><div class="major-buttons" id="majorButtons"></div><span class="major-count" id="majorCount"></span></aside>
      <div class="major-results"><h3 id="majorTitle">전체 챌린지</h3><p>카드를 누르면 프로젝트 상세와 참여 신청으로 이어집니다.</p><div class="major-project-list" id="majorProjectList"></div></div>
    </div>`;
  challengesSection.after(section);

  const fields = ['전체', '컴퓨터과학', '디자인', '경영', '데이터', '행정·복지'];
  $('#majorButtons').innerHTML = fields.map(field => `<button type="button" data-major="${escapeHtml(field)}" class="${field === '전체' ? 'active' : ''}">${escapeHtml(field)}</button>`).join('');
  $$('#majorButtons [data-major]').forEach(button => button.addEventListener('click', () => {
    activeMajor = button.dataset.major;
    $$('#majorButtons [data-major]').forEach(item => item.classList.toggle('active', item === button));
    renderMajorProjects();
  }));
  renderMajorProjects();
}

function renderMajorProjects() {
  const list = $('#majorProjectList');
  if (!list) return;
  const visible = activeMajor === '전체' ? challenges : challenges.filter(item => item.majorKeys.includes(activeMajor));
  $('#majorTitle').textContent = activeMajor === '전체' ? '전체 수뭉 챌린지' : `${activeMajor}으로 해결할 수 있는 문제`;
  $('#majorCount').textContent = `${visible.length}개의 지역문제와 연결`;
  list.innerHTML = visible.map(item => `<button type="button" class="major-project" data-major-project="${escapeHtml(item.id)}"><div><b>${escapeHtml(item.question)}</b><small>${escapeHtml(item.owner)} · ${escapeHtml(item.duration)} · ${escapeHtml(item.team)}</small></div><i>${item.status} →</i></button>`).join('');
  $$('[data-major-project]').forEach(button => button.addEventListener('click', () => openChallenge(button.dataset.majorProject)));
}

function injectImpactBoard() {
  const majorSection = $('#major-view');
  if (!majorSection || $('#impact-board')) return;
  const section = document.createElement('section');
  section.className = 'section shell';
  section.id = 'impact-board';
  section.innerHTML = `
    <div class="section-head"><span>SMUNG IMPACT</span><h2>문제 지도가 아니라, 변화가 쌓이는 지도</h2><p>등록된 문제의 수보다 중요한 것은 무엇이 실제로 시작되고 해결됐는지입니다. 프로젝트의 상태와 결과를 계속 기록해 상명대가 지역에 만든 변화를 보여줍니다.</p></div>
    <div class="impact-stats">
      <article class="impact-stat"><strong>38</strong><span>이번 학기 지역문제 등록</span></article>
      <article class="impact-stat"><strong>12</strong><span>프로젝트 진행</span></article>
      <article class="impact-stat"><strong>7</strong><span>해결·실증 완료</span></article>
      <article class="impact-stat"><strong>46</strong><span>상명대 학생 참여</span></article>
      <article class="impact-stat"><strong>21</strong><span>지역 파트너</span></article>
    </div>
    <div class="impact-case-grid">${impactCases.map(item => `<article class="impact-case"><span class="case-status">${escapeHtml(item.status)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.place)} · ${escapeHtml(item.team)}</p><div class="case-flow"><b>문제 → 프로젝트 → 현장</b>${escapeHtml(item.result)}</div><div class="case-metric">${escapeHtml(item.metric)}</div></article>`).join('')}</div>`;
  majorSection.after(section);
}

function ensureApplyDialog() {
  if ($('#applyDialog')) return;
  const dialog = document.createElement('dialog');
  dialog.className = 'apply-dialog';
  dialog.id = 'applyDialog';
  dialog.innerHTML = `
    <form class="apply-inner" id="applyForm">
      <div class="apply-top"><div><div class="apply-kicker">JOIN SMUNG CHALLENGE</div><h2 id="applyTitle">프로젝트 참여 신청</h2></div><button type="button" id="applyClose" aria-label="닫기">×</button></div>
      <p class="apply-copy" id="applyCopy"></p>
      <div class="apply-field"><label for="applyMajor">나의 전공/역할</label><select id="applyMajor"><option>컴퓨터과학 · 개발</option><option>디자인 · UX/UI</option><option>경영 · 기획/조사</option><option>데이터 · 분석</option><option>행정·복지 · 현장연결</option><option>기타 · 융합 역할</option></select></div>
      <div class="apply-field"><label for="applyMotivation">이 문제에서 해보고 싶은 것</label><textarea id="applyMotivation" required placeholder="예: 사용자 인터뷰 결과를 바탕으로 실제 작동하는 웹 MVP를 만들어 보고 싶습니다."></textarea></div>
      <div class="apply-actions"><button class="btn" type="button" id="applyCancel">취소</button><button class="btn primary" type="submit">참여 신청 저장</button></div>
      <div class="apply-note">해커톤 프로토타입에서는 신청 내용을 이 브라우저에 저장합니다. 실제 운영 시 학교·협력기관의 프로젝트 모집 절차와 연결합니다.</div>
    </form>`;
  document.body.appendChild(dialog);
  $('#applyClose').addEventListener('click', () => dialog.close());
  $('#applyCancel').addEventListener('click', () => dialog.close());
  $('#applyForm').addEventListener('submit', event => {
    event.preventDefault();
    if (!activeChallenge) return;
    let applications = [];
    try { applications = JSON.parse(localStorage.getItem('smoongroad_local_applications') || '[]'); } catch {}
    if (!Array.isArray(applications)) applications = [];
    applications.push({challengeId: activeChallenge.id, major: $('#applyMajor').value, motivation: $('#applyMotivation').value.trim(), createdAt: new Date().toISOString()});
    localStorage.setItem('smoongroad_local_applications', JSON.stringify(applications));
    dialog.close();
    const toast = $('#savedToast');
    if (toast) { toast.textContent = '수뭉 챌린지 참여 신청을 저장했습니다.'; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2200); }
  });
}

function startApply() {
  if (!activeChallenge) return;
  ensureApplyDialog();
  $('#challengeDialog')?.close();
  $('#applyTitle').textContent = activeChallenge.question;
  $('#applyCopy').textContent = `${activeChallenge.owner} · 예상 ${activeChallenge.duration} · ${activeChallenge.team} 팀 프로젝트`;
  $('#applyMotivation').value = '';
  $('#applyDialog').showModal();
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

function init() {
  injectEnhancementStyles();
  enhanceHeroAndNav();
  injectClusterBanner();
  ensureDialogExtra();
  renderChallenges();
  injectMajorView();
  injectImpactBoard();
  ensureApplyDialog();

  $$('[data-filter]').forEach(button => button.addEventListener('click', () => {
    $$('[data-filter]').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderChallenges(button.dataset.filter || 'all');
  }));

  $$('[data-sample]').forEach(button => button.addEventListener('click', () => fillSample(button.dataset.sample)));

  $('#problemForm')?.addEventListener('submit', event => {
    event.preventDefault();
    const payload = {title: $('#title').value.trim(), detail: $('#detail').value.trim(), client: $('#client').value, location: $('#location').value};
    if (!payload.title || !payload.detail) return;
    renderAnalysis(payload);
  });

  $('#dialogClose')?.addEventListener('click', () => $('#challengeDialog')?.close());
  $('#dialogClose2')?.addEventListener('click', () => $('#challengeDialog')?.close());
  $('#saveInterest')?.addEventListener('click', startApply);

  try {
    const saved = JSON.parse(localStorage.getItem('smoongroad_local_last') || 'null');
    if (saved) {
      $('#location').value = saved.location || '평창동';
      $('#client').value = saved.client || '종로구';
      $('#title').value = saved.title || '';
      $('#detail').value = saved.detail || '';
    }
  } catch {}
}

init();
