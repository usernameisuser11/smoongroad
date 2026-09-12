const challenges = [
  {
    id: 'digital-companion',
    kind: 'both',
    question: '어르신의 디지털 어려움과 학생의 전공 역량을 서로의 배움으로 바꿀 수 있을까?',
    desc: '상명대 학생이 스마트폰·키오스크·공공앱 사용을 돕고, 주민은 자신의 생활 경험과 지역 이야기를 학생에게 나누는 쌍방향 디지털 동행 프로젝트입니다.',
    owner: '종로구 주민 · 상명대학교 학생',
    majors: '컴퓨터과학 · 디자인 · 교육 · 복지',
    majorKeys: ['컴퓨터과학', '디자인', '교육·복지'],
    mentor: '디지털 접근성 · 세대교육 전문가 멘토링',
    benefit: '전공 프로젝트 · 현장 사용자 경험 · 세대교류 기록',
    tags: ['세대교류', '디지털 동행', '상호배움'],
    difficulty: '중', duration: '2주', team: '4명',
    deliverable: '쉬운 디지털 안내 도구 + 세대 인터뷰 기록',
    priority: 96, similar: 12, status: '모집중',
    weights: [['컴퓨터과학', 30], ['디자인', 25], ['교육', 25], ['복지', 20]]
  },
  {
    id: 'memory-archive',
    kind: 'both',
    question: '종로에서 오래 살아온 주민의 기억을 학생의 콘텐츠로 남길 수 있을까?',
    desc: '중·장년층과 고령 주민이 동네의 변화, 오래된 장소, 생활문화를 이야기하고 학생이 이를 인터뷰·사진·영상·웹 콘텐츠로 기록합니다.',
    owner: '종로구 주민 · 문화기관 · 상명대학교',
    majors: '콘텐츠 · 디자인 · 컴퓨터과학 · 역사문화',
    majorKeys: ['콘텐츠', '디자인', '컴퓨터과학'],
    mentor: '지역문화 · 아카이빙 전문가 멘토링',
    benefit: '지역콘텐츠 포트폴리오 · 주민 교류 · 디지털 아카이브',
    tags: ['세대교류', '지역기억', '문화아카이브'],
    difficulty: '중', duration: '3주', team: '5명',
    deliverable: '종로 세대기억 디지털 아카이브',
    priority: 91, similar: 9, status: '모집중',
    weights: [['콘텐츠', 35], ['디자인', 25], ['컴퓨터과학', 20], ['지역연구', 20]]
  },
  {
    id: 'career-bridge',
    kind: 'both',
    question: '학생의 진로 고민과 지역 중·장년층의 직업 경험을 서로 연결할 수 있을까?',
    desc: '지역 주민의 직업·창업·생활 경험과 대학생의 최신 기술·트렌드 지식을 교환하는 세대 간 역멘토링 프로젝트입니다.',
    owner: '종로구 중·장년 주민 · 상명대학교 학생',
    majors: '경영 · 상담 · 교육 · 콘텐츠',
    majorKeys: ['경영', '교육·복지', '콘텐츠'],
    mentor: '커리어 · 지역 네트워크 전문가 멘토링',
    benefit: '진로 탐색 · 세대 네트워크 · 경험 기반 포트폴리오',
    tags: ['세대교류', '역멘토링', '진로'],
    difficulty: '하', duration: '2주', team: '3~4명',
    deliverable: '세대별 경험 카드 + 교류 세션 기록',
    priority: 88, similar: 7, status: '진행중',
    weights: [['경영', 30], ['교육', 30], ['콘텐츠', 20], ['상담·복지', 20]]
  },
  {
    id: 'local-shop-story',
    kind: 'both',
    question: '오래된 가게의 경험과 학생의 감각을 함께 살릴 수 있을까?',
    desc: '지역 상인이 가진 오랜 운영 경험과 이야기를 학생이 브랜딩·디지털 콘텐츠·서비스 개선으로 연결하고, 학생은 실제 지역 비즈니스를 배웁니다.',
    owner: '종로구 소상공인 · 상명대학교 학생',
    majors: '경영 · 디자인 · 컴퓨터과학 · 콘텐츠',
    majorKeys: ['경영', '디자인', '컴퓨터과학', '콘텐츠'],
    mentor: '로컬브랜딩 · 서비스기획 전문가',
    benefit: '실무 프로젝트 · 상인 인터뷰 · 지역 네트워크',
    tags: ['세대교류', '지역상권', '공동제작'],
    difficulty: '중', duration: '3주', team: '4명',
    deliverable: '가게 이야기 페이지 + 개선 프로토타입',
    priority: 86, similar: 6, status: '모집중',
    weights: [['경영', 30], ['디자인', 30], ['콘텐츠', 25], ['컴퓨터과학', 15]]
  },
  {
    id: 'life-class',
    kind: 'both',
    question: '학생과 주민이 서로 선생님이 되는 동네 수업을 만들 수 있을까?',
    desc: '학생은 디지털·외국어·콘텐츠 제작을, 주민은 요리·수선·지역생활·직업 경험을 나누는 소규모 교환형 수업입니다.',
    owner: '종로구 주민 · 상명대학교 동아리·학생',
    majors: '교육 · 외국어 · 콘텐츠 · 복지',
    majorKeys: ['교육·복지', '콘텐츠'],
    mentor: '평생교육 · 커뮤니티 운영 전문가',
    benefit: '세대 간 관계 형성 · 비교과 활동 · 주민 참여 기록',
    tags: ['세대교류', '생활기술', '서로배움'],
    difficulty: '하', duration: '1~2주', team: '3명',
    deliverable: '세대교환 수업안 + 참여자 피드백 기록',
    priority: 90, similar: 8, status: '모집중',
    weights: [['교육', 35], ['복지', 25], ['콘텐츠', 20], ['커뮤니티', 20]]
  }
];

const samples = {
  mobility: {
    location: '부암동', client: '종로구',
    title: '스마트폰이 어려운 주민과 상명대 학생이 서로 배우는 프로젝트를 만들 수 있을까?',
    detail: '고령 주민은 병원 예약, 지도, 키오스크 같은 디지털 서비스가 어렵고 학생은 전공을 실제 사용자에게 적용할 기회가 적다. 학생은 디지털 사용을 돕고 주민은 지역 생활 경험을 나누는 상호 교류 프로젝트가 필요하다.'
  },
  shop: {
    location: '평창동', client: '지역상인 협의체',
    title: '오래된 가게의 경험과 학생의 디지털 감각을 함께 살릴 수 있을까?',
    detail: '오랫동안 지역에서 가게를 운영한 상인은 풍부한 경험과 이야기가 있지만 온라인 홍보와 디지털 콘텐츠 제작이 어렵다. 학생이 이를 기록하고 개선하며 실제 지역 비즈니스를 배울 수 있다.'
  },
  digital: {
    location: '부암동', client: '자원봉사·복지기관',
    title: '종로에서 오래 살아온 주민의 기억을 학생의 콘텐츠로 남길 수 있을까?',
    detail: '지역 주민이 가진 동네의 오래된 기억과 생활 경험이 다음 세대에 잘 전달되지 않는다. 학생들이 인터뷰하고 사진과 영상, 웹으로 기록하면서 세대가 자연스럽게 만나는 프로젝트가 필요하다.'
  },
  hill: {
    location: '홍지동', client: '상명대학교',
    title: '학생과 주민이 서로 선생님이 되는 동네 수업을 만들 수 있을까?',
    detail: '학생과 지역 주민이 같은 생활권에 있지만 서로 만날 계기가 적다. 학생은 디지털과 외국어를, 주민은 생활기술과 직업 경험을 나누는 교환형 수업으로 지속적인 관계를 만들고 싶다.'
  }
};

const archetypes = {
  digital: {
    keys: ['스마트폰','키오스크','디지털','어르신','고령','앱','병원','예약'],
    tags: ['세대교류','디지털동행','상호배움'],
    summary: '일방적인 디지털 봉사가 아니라 학생은 기술을, 주민은 생활 경험을 나누는 쌍방향 교류 프로젝트로 설계할 수 있습니다.',
    majors: [
      ['컴퓨터과학전공','쉬운 디지털 안내 웹·도구 구현'],
      ['커뮤니케이션디자인','큰 글씨·단계형 사용자 경험 설계'],
      ['교육학과','세대별 학습 방식과 반복 교육 시나리오 설계'],
      ['가족복지학과','지역 주민 요구 조사와 관계 형성 지원']
    ],
    projects: [
      ['A','주민의 디지털 어려움 인터뷰','복지 · 교육','3일'],
      ['B','학생-주민 1:1 디지털 동행','다전공 팀','5일'],
      ['C','쉬운 안내 도구 제작','컴퓨터과학 · 디자인','7일'],
      ['D','주민의 지역생활 경험 인터뷰 기록','콘텐츠 · 다전공','3일']
    ],
    mentor: '디지털 접근성 · 세대교육 전문가', volunteer: '세대교류 활동 연계 검토',
    before: '학생과 고령 주민이 같은 지역에 있지만 서로 만날 계기가 적음', after: '디지털 도움과 지역 경험 공유가 오가는 지속적 관계 형성'
  },
  archive: {
    keys: ['기억','이야기','역사','문화','사진','영상','동네','기록','아카이브'],
    tags: ['세대교류','지역기억','콘텐츠'],
    summary: '주민이 가진 지역의 기억을 학생이 듣고 디지털 콘텐츠로 남기면서 자연스럽게 세대 간 대화와 공동 작업을 만들 수 있습니다.',
    majors: [
      ['문화콘텐츠전공','인터뷰와 지역 스토리 기획'],
      ['커뮤니케이션디자인','사진·영상·아카이브 화면 설계'],
      ['컴퓨터과학전공','디지털 아카이브 웹 구현'],
      ['역사콘텐츠전공','지역 기록의 맥락과 자료 정리']
    ],
    projects: [
      ['A','지역 주민 인터뷰','콘텐츠 · 역사','4일'],
      ['B','옛 사진·장소·생활기억 수집','다전공 팀','5일'],
      ['C','디지털 아카이브 제작','컴퓨터과학 · 디자인','7일'],
      ['D','주민과 결과물 공동 검수','다전공 팀','2일']
    ],
    mentor: '지역문화 · 아카이빙 전문가', volunteer: '지역문화 기록 활동 연계 검토',
    before: '주민의 경험과 지역 기억이 세대 안에 머묾', after: '학생과 주민이 함께 만든 디지털 지역기억으로 남음'
  },
  mentoring: {
    keys: ['진로','직업','취업','창업','경험','멘토','조언','세대'],
    tags: ['세대교류','역멘토링','진로'],
    summary: '주민이 학생에게 삶과 직업 경험을, 학생이 주민에게 최신 기술과 트렌드를 나누는 역멘토링으로 설계할 수 있습니다.',
    majors: [
      ['경영학부','직업·창업 경험을 프로젝트 구조로 정리'],
      ['교육학과','세대 간 대화와 학습 프로그램 설계'],
      ['콘텐츠전공','경험 인터뷰와 기록 콘텐츠 제작'],
      ['가족복지학과','세대 관계와 참여자 경험 지원']
    ],
    projects: [
      ['A','학생의 진로 고민 수집','교육 · 경영','3일'],
      ['B','지역 주민 직업경험 인터뷰','콘텐츠','4일'],
      ['C','세대 역멘토링 세션','다전공 팀','3일'],
      ['D','경험 카드·기록물 제작','콘텐츠 · 디자인','4일']
    ],
    mentor: '커리어 · 평생교육 전문가', volunteer: '세대교류 활동 연계 검토',
    before: '학생의 진로 고민과 주민의 경험이 서로 연결되지 않음', after: '경험과 최신 지식이 양방향으로 오가는 세대 네트워크 형성'
  },
  shop: {
    keys: ['가게','상점','상권','소상공인','홍보','브랜딩','메뉴','사장'],
    tags: ['세대교류','지역상권','공동제작'],
    summary: '학생이 상인을 단순히 돕는 것이 아니라 오랜 현장 경험을 배우고, 자신의 전공으로 그 경험을 새롭게 표현하는 공동제작 프로젝트로 설계할 수 있습니다.',
    majors: [
      ['경영학부','가게 운영 경험과 고객 문제 분석'],
      ['커뮤니케이션디자인','브랜드·메뉴·정보 전달 개선'],
      ['컴퓨터과학전공','가게 이야기·정보 웹페이지 구현'],
      ['콘텐츠전공','상인 인터뷰와 지역 스토리 제작']
    ],
    projects: [
      ['A','상인 경험·가게 역사 인터뷰','경영 · 콘텐츠','3일'],
      ['B','학생 관점 사용자 조사','경영 · 디자인','3일'],
      ['C','브랜딩·디지털 결과물 제작','디자인 · 개발','7일'],
      ['D','상인-학생 공동 피드백','다전공 팀','2일']
    ],
    mentor: '로컬브랜딩 · 서비스기획 전문가', volunteer: '지역상권 교류 활동 연계 검토',
    before: '상인의 경험과 학생의 역량이 서로 따로 존재함', after: '현장 경험과 전공 역량이 결합된 공동 결과물 제작'
  },
  class: {
    keys: ['수업','배우','가르','요리','외국어','생활','기술','교환'],
    tags: ['세대교류','서로배움','생활문화'],
    summary: '한쪽만 가르치는 수업이 아니라 각 세대가 자신이 잘하는 것을 한 번씩 나누는 교환형 프로그램으로 만들 수 있습니다.',
    majors: [
      ['교육학과','교환형 수업 구조와 참여 방식 설계'],
      ['가족복지학과','세대별 참여 장벽과 관계 형성 지원'],
      ['콘텐츠전공','수업 기록과 홍보 콘텐츠 제작'],
      ['외국어·인문계열','학생이 나눌 수 있는 학습 콘텐츠 구성']
    ],
    projects: [
      ['A','서로 배우고 싶은 것 조사','교육 · 복지','3일'],
      ['B','학생-주민 수업 매칭','다전공 팀','2일'],
      ['C','교환형 동네 수업 진행','다전공 팀','5일'],
      ['D','관계 변화·만족도 기록','교육 · 데이터','2일']
    ],
    mentor: '평생교육 · 커뮤니티 전문가', volunteer: '지역교류 활동 연계 검토',
    before: '서로 가까이 있어도 세대가 만날 이유가 없음', after: '각자의 지식과 기술을 주고받는 반복 가능한 만남 형성'
  }
};

const impactCases = [
  {status:'해결완료', title:'디지털 동행 데모', place:'부암동', team:'컴퓨터과학 · 디자인 · 복지', result:'학생 4명이 주민 인터뷰를 바탕으로 큰 글씨 단계형 스마트폰 안내 프로토타입을 제작하고 함께 사용성을 검토', metric:'세대 대화 18회 · 테스트 만족도 4.7 / 5'},
  {status:'진행중', title:'종로 세대기억 아카이브', place:'평창동 · 부암동', team:'콘텐츠 · 디자인 · 컴퓨터과학', result:'주민의 동네 기억과 오래된 장소 이야기를 학생이 인터뷰하고 웹 아카이브로 정리', metric:'주민 인터뷰 12명 · 기록 27건'},
  {status:'실증준비', title:'서로 선생님 프로젝트', place:'홍지동', team:'교육 · 복지 · 콘텐츠', result:'학생의 디지털·외국어와 주민의 생활기술·직업경험을 서로 한 번씩 가르치는 교환형 수업 설계', metric:'교환 수업 데모 6개'}
];

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
let activeChallenge = null;
let activeMajor = '전체';

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

function pickType(text) {
  let best = 'digital';
  let score = -1;
  for (const [type, data] of Object.entries(archetypes)) {
    const current = data.keys.reduce((count, key) => count + (text.includes(key) ? 1 : 0), 0);
    if (current > score) { score = current; best = type; }
  }
  return best;
}

function statusClass(status) {
  if (status === '해결완료') return 'done';
  if (status === '진행중') return 'doing';
  return 'open';
}

function injectStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .top-actions{flex-wrap:wrap;justify-content:flex-end}.top-actions .mini-nav{background:transparent}
    .problem-focus{margin:18px 0 0;padding:18px;border-radius:19px;background:linear-gradient(135deg,#123c69,#1d5b95);color:#fff;display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:start}.problem-focus strong{width:44px;height:44px;border-radius:14px;background:rgba(255,255,255,.14);display:grid;place-items:center;font-size:11px}.problem-focus b{font-size:13px}.problem-focus p{margin:3px 0 0;font-size:10px;opacity:.82}
    .exchange-strip{display:grid;grid-template-columns:1fr 46px 1fr;gap:10px;align-items:center;margin-bottom:18px}.exchange-side{padding:16px;border:1px solid var(--line);border-radius:18px;background:#fff}.exchange-side span{font-size:8px;font-weight:950;color:var(--primary2);letter-spacing:.08em}.exchange-side b{display:block;font-size:13px;margin:3px 0}.exchange-side p{font-size:10px;color:var(--muted);margin:0}.exchange-arrow{text-align:center;font-size:24px;color:var(--accent);font-weight:950}
    .challenge-statline{display:flex;gap:7px;flex-wrap:wrap;margin:13px 0 14px}.challenge-statline span{padding:6px 8px;border-radius:9px;background:var(--surface2);font-size:9px;font-weight:850;color:#53667a}.challenge-statline strong{color:var(--primary)}.challenge-status{position:absolute;right:19px;top:19px;padding:6px 8px;border-radius:999px;font-size:8px;font-weight:950}.challenge-status.open{background:#eaf3fb;color:#245a87}.challenge-status.doing{background:#fff0d8;color:#815713}.challenge-status.done{background:#e9f6f1;color:#17644f}
    .major-view-wrap{display:grid;grid-template-columns:.72fr 1.28fr;gap:16px;align-items:start}.major-selector,.major-results{background:#fff;border:1px solid var(--line);border-radius:24px;padding:22px}.major-selector h3,.major-results h3{margin:0 0 7px;font-size:21px;letter-spacing:-.04em}.major-selector p,.major-results>p{margin:0 0 15px;color:var(--muted);font-size:11px}.major-buttons{display:grid;gap:8px}.major-buttons button{border:1px solid var(--line);background:#f8fafc;border-radius:13px;padding:12px 13px;text-align:left;font-weight:900;color:#40566d}.major-buttons button.active{background:var(--primary);border-color:var(--primary);color:#fff}.major-count{display:inline-flex;margin-top:15px;padding:8px 10px;border-radius:11px;background:var(--orange-soft);color:#815713;font-size:10px;font-weight:950}.major-project-list{display:grid;gap:9px}.major-project{width:100%;border:1px solid var(--line);background:#fff;border-radius:16px;padding:14px;text-align:left;display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center}.major-project:hover{border-color:#b9cfe2;transform:translateY(-1px)}.major-project b{display:block;font-size:12px}.major-project small{display:block;color:var(--muted);font-size:9px;margin-top:3px}.major-project i{font-style:normal;font-size:9px;color:var(--primary2);font-weight:950}
    .impact-stats{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:16px}.impact-stat{background:#fff;border:1px solid var(--line);border-radius:18px;padding:17px}.impact-stat strong{display:block;font-size:29px;letter-spacing:-.04em;color:var(--primary)}.impact-stat span{font-size:9px;color:var(--muted);font-weight:900}.impact-case-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.impact-case{background:#fff;border:1px solid var(--line);border-radius:21px;padding:19px}.impact-case .case-status{display:inline-flex;padding:6px 8px;border-radius:999px;background:var(--green-soft);color:var(--green);font-size:8px;font-weight:950}.impact-case h3{font-size:17px;margin:11px 0 5px;letter-spacing:-.035em}.impact-case>p{font-size:10px;color:var(--muted);margin:0 0 12px}.case-flow{padding:11px;border-radius:13px;background:var(--surface2);font-size:10px}.case-flow b{display:block;margin-bottom:4px}.case-metric{margin-top:9px;font-size:9px;font-weight:950;color:var(--primary2)}
    .dialog-extra{margin-top:15px;border-top:1px solid var(--line);padding-top:15px}.dialog-extra-head{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-bottom:10px}.dialog-extra-head b{font-size:12px}.dialog-priority{font-size:9px;font-weight:950;color:var(--green)}.dialog-facts{display:grid;grid-template-columns:repeat(4,1fr);gap:7px}.dialog-facts div{background:var(--surface2);border-radius:12px;padding:10px}.dialog-facts span{display:block;color:var(--muted);font-size:8px;font-weight:900}.dialog-facts b{display:block;font-size:10px;margin-top:2px}.weight-list{display:grid;gap:6px;margin-top:11px}.weight-row{display:grid;grid-template-columns:88px 1fr 34px;gap:8px;align-items:center;font-size:9px}.weight-track{height:7px;background:#e4edf5;border-radius:999px;overflow:hidden}.weight-track i{display:block;height:100%;background:var(--primary2);border-radius:999px}.deliverable-box{margin-top:11px;padding:11px;border-radius:13px;background:#fff7e8;border:1px solid #f3dfb9;font-size:10px;color:#6c521f}
    .apply-dialog{border:0;padding:0;border-radius:24px;width:min(560px,calc(100% - 28px));box-shadow:0 30px 90px rgba(15,34,56,.25)}.apply-dialog::backdrop{background:rgba(15,34,56,.52);backdrop-filter:blur(4px)}.apply-inner{padding:24px}.apply-top{display:flex;justify-content:space-between;gap:15px;align-items:start}.apply-top h2{font-size:24px;line-height:1.25;margin:3px 0 0;letter-spacing:-.04em}.apply-top button{border:0;background:var(--surface2);width:36px;height:36px;border-radius:11px;font-size:20px}.apply-kicker{font-size:9px;font-weight:950;letter-spacing:.12em;color:var(--primary2)}.apply-copy{font-size:11px;color:var(--muted);margin:12px 0 16px}.apply-field{display:grid;gap:6px;margin-bottom:11px}.apply-field label{font-size:9px;font-weight:950;color:#52657a}.apply-field input,.apply-field select,.apply-field textarea{border:1px solid var(--line);border-radius:11px;padding:11px 12px;background:#f9fbfd}.apply-field textarea{min-height:86px;resize:vertical}.apply-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:15px}.apply-note{font-size:8px;color:var(--muted);margin-top:9px}
    @media(max-width:900px){.major-view-wrap{grid-template-columns:1fr}.impact-stats{grid-template-columns:repeat(2,1fr)}.impact-case-grid{grid-template-columns:1fr}.dialog-facts{grid-template-columns:repeat(2,1fr)}.top-actions .mini-nav{display:none}}
    @media(max-width:560px){.exchange-strip{grid-template-columns:1fr}.exchange-arrow{transform:rotate(90deg)}.impact-stats{grid-template-columns:1fr 1fr}.impact-stat strong{font-size:24px}.weight-row{grid-template-columns:78px 1fr 30px}}
  `;
  document.head.appendChild(style);
}

function rewriteStaticCopy() {
  document.title = '수뭉로드 세대이음 | 상명대 학생과 종로구 세대를 연결하다';
  const badge = document.querySelector('.local-badge'); if (badge) badge.textContent = '세대이음 LAB';
  const title = document.querySelector('.hero h1'); if (title) title.innerHTML = '같은 종로에 있지만,<br><em>우리는 얼마나 서로 알고 있을까?</em>';
  const copy = document.querySelector('.hero-copy');
  if (copy) copy.innerHTML = '<b>상명대 학생과 종로구의 다양한 세대는 같은 생활권에 있지만 서로 만나고 배울 기회가 부족합니다.</b><br>수뭉로드 세대이음은 학생의 전공·기술과 주민의 경험·지역의 기억을 연결해, 일방적인 봉사가 아니라 서로 주고받는 공동 프로젝트를 만듭니다.';
  const eyebrow = document.querySelector('.hero .eyebrow'); if (eyebrow) eyebrow.textContent = 'SMU STUDENTS × JONGNO GENERATIONS';
  const heroQuestion = document.querySelector('.hero-question'); if (heroQuestion) heroQuestion.textContent = '학생은 기술을, 주민은 경험을 나눈다면 세대 간 거리를 줄일 수 있지 않을까?';
  const routeRows = $$('.question-route .route-row');
  const routeCopy = [
    ['01','주민과 학생의 필요·경험 발견','배우고 싶은 것 · 나눌 수 있는 것'],
    ['02','AI가 전공과 세대교류 방식 연결','디지털 · 콘텐츠 · 교육 · 경영 · 복지'],
    ['03','함께 만드는 소규모 프로젝트','가르쳐주기보다 서로 배우기'],
    ['04','관계와 결과를 지역에 기록','반복 참여 · 지역기억 · 전공 포트폴리오']
  ];
  routeRows.forEach((row, i) => { if (!routeCopy[i]) return; row.innerHTML = `<span>${routeCopy[i][0]}</span><div><b>${routeCopy[i][1]}</b><small>${routeCopy[i][2]}</small></div>`; });

  const system = $('#system');
  if (system) {
    const head = system.querySelector('.section-head');
    if (head) head.innerHTML = '<span>WHY WE MADE IT</span><h2>문제는 고령화 그 자체보다, 세대가 만날 이유가 부족하다는 것</h2><p>상명대 학생과 종로구 주민은 같은 지역을 오가지만 서로의 능력과 경험을 알 기회가 적습니다. 수뭉로드는 이 단절을 전공 기반 공동 프로젝트로 연결합니다.</p>';
    const cards = system.querySelectorAll('.premise article');
    const texts = [
      ['1','가까이 있지만 접점이 부족','학생은 학교와 집을 오가고 주민은 자신의 생활권에서 지냅니다. 물리적으로 가까워도 자연스럽게 만날 계기가 적습니다.'],
      ['2','서로 가진 자원이 연결되지 않음','학생에게는 디지털·디자인·콘텐츠 역량이 있고 주민에게는 직업·생활·지역의 경험이 있지만 서로에게 전달되지 않습니다.'],
      ['3','일회성 봉사만으로는 관계가 남기 어려움','한 번 돕고 끝나는 방식보다 서로 배우고 결과물을 함께 만드는 프로젝트가 지속적인 세대 교류로 이어질 가능성이 높습니다.']
    ];
    cards.forEach((card, i) => { if (!texts[i]) return; card.innerHTML = `<div class="num">${texts[i][0]}</div><h3>${texts[i][1]}</h3><p>${texts[i][2]}</p>`; });
    const banner = system.querySelector('.source-banner');
    if (banner) banner.innerHTML = '<strong>↔</strong><div><b>일방적인 도움보다 서로의 강점을 교환합니다.</b><p>학생은 전공과 최신 기술을, 주민은 삶의 경험과 지역의 기억을 나눕니다. 누군가를 수혜자로만 보지 않는 것이 수뭉로드 세대이음의 핵심입니다.</p></div>';
  }

  const heads = $$('.section-head');
  const partnership = [...heads].find(h => h.textContent.includes('좋은 뜻만으로') || h.textContent.includes('PARTNERSHIP'));
  if (partnership) partnership.innerHTML = '<span>PARTNERSHIP</span><h2>한 번의 행사가 아니라, 다시 만날 수 있는 구조로</h2><p>대학·지역기관·복지기관·전문가가 각자의 역할을 맡아 세대교류가 일회성 이벤트로 끝나지 않도록 지원합니다.</p>';
  const mentoring = [...heads].find(h => h.textContent.includes('프로젝트를 선택하면') || h.textContent.includes('1:1 MENTORING'));
  if (mentoring) mentoring.innerHTML = '<span>MUTUAL MENTORING</span><h2>학생도 주민도, 서로의 멘토가 됩니다</h2><p>전문가는 프로젝트 운영을 돕고, 실제 교류에서는 학생과 주민 모두가 자신이 가진 지식과 경험을 나눕니다.</p>';
  const lab = $('#lab')?.querySelector('.section-head');
  if (lab) lab.innerHTML = '<span>AI MATCHING DEMO</span><h2>필요와 경험을 입력하면 AI가 세대교류 프로젝트로 바꿉니다</h2><p>해커톤 데모에서는 예시 데이터를 사용합니다. “누가 무엇이 필요한가”뿐 아니라 “서로 무엇을 나눌 수 있는가”를 분석해 전공과 프로젝트 구조를 제안합니다.</p>';
  const formTitle = $('#problemForm h3'); if (formTitle) formTitle.textContent = '세대교류 필요 등록 데모';
  const formP = $('#problemForm > p'); if (formP) formP.textContent = '주민과 학생이 서로 배우고 싶은 내용을 입력하면 전공·활동·결과물 구조를 제안합니다.';
  const cta = document.querySelector('.cta'); if (cta) cta.innerHTML = '<div><h2>같은 지역의 다른 세대를, 하나의 프로젝트로.</h2><p>학생의 전공과 주민의 경험이 만나면 지역문제 해결과 세대교류가 동시에 시작됩니다.</p></div><a href="#challenges">세대이음 챌린지 보기</a>';
  const footer = document.querySelector('footer .footer-row'); if (footer) footer.innerHTML = '<div><b>수뭉로드 세대이음</b><br>상명대학교 × 종로구 세대교류 프로젝트 프로토타입</div><div>Hackathon Prototype · 2026</div>';
}

function addProblemFocus() {
  const heroCopy = document.querySelector('.hero-copy');
  if (!heroCopy || document.querySelector('.problem-focus')) return;
  const box = document.createElement('div');
  box.className = 'problem-focus';
  box.innerHTML = '<strong>WHY</strong><div><b>우리가 해결하려는 문제</b><p>상명대 학생과 종로구의 고령층·중장년층 등 다양한 세대가 같은 지역에서 생활하지만, 서로의 경험과 역량을 나누는 지속적인 접점이 부족합니다.</p></div>';
  heroCopy.after(box);
}

function injectExchangeStrip() {
  const section = $('#challenges');
  const filter = section?.querySelector('.filterbar');
  if (!section || !filter || section.querySelector('.exchange-strip')) return;
  const strip = document.createElement('div');
  strip.className = 'exchange-strip';
  strip.innerHTML = '<div class="exchange-side"><span>SMU STUDENT</span><b>전공 · 디지털 · 콘텐츠 · 새로운 시각</b><p>배운 것을 실제 지역에서 적용하고 세대의 경험을 배웁니다.</p></div><div class="exchange-arrow">↔</div><div class="exchange-side"><span>JONGNO GENERATIONS</span><b>생활 · 직업 · 지역의 기억 · 관계</b><p>자신의 경험을 나누고 학생의 기술과 새로운 관점을 함께 활용합니다.</p></div>';
  filter.before(strip);
}

function enhanceNav() {
  const actions = document.querySelector('.top-actions');
  if (!actions) return;
  if (!actions.querySelector('[href="#major-view"]')) {
    const major = document.createElement('a'); major.href = '#major-view'; major.className = 'mini-nav'; major.textContent = '전공으로 참여';
    const impact = document.createElement('a'); impact.href = '#impact-board'; impact.className = 'mini-nav'; impact.textContent = '세대이음 기록';
    actions.insertBefore(major, actions.lastElementChild); actions.insertBefore(impact, actions.lastElementChild);
  }
  const primary = actions.querySelector('.primary'); if (primary) primary.textContent = '세대이음 챌린지';
}

function rewriteChallengeHead() {
  const head = $('#challenges .section-head');
  if (head) head.innerHTML = '<span>GENERATION BRIDGE CHALLENGE</span><h2>“도와드릴게요”에서 끝나지 않고, 함께 만드는 프로젝트로</h2><p>학생과 주민이 서로 필요한 것과 나눌 수 있는 것을 바탕으로 팀을 만들고, 디지털·문화·진로·생활 영역에서 실제 결과물을 함께 만듭니다.</p>';
  const filters = $$('#challenges [data-filter]');
  const labels = ['전체', '디지털 동행', '지역기억', '역멘토링'];
  filters.forEach((btn, i) => { if (labels[i]) btn.textContent = labels[i]; });
}

function renderChallenges(filter = 'all') {
  const grid = $('#challengeGrid'); if (!grid) return;
  let visible = challenges;
  if (filter === 'local') visible = challenges.filter(item => ['digital-companion','memory-archive'].includes(item.id));
  if (filter === 'campus') visible = challenges.filter(item => item.id === 'career-bridge');
  if (filter === 'both') visible = challenges;
  grid.innerHTML = visible.map(item => `
    <button type="button" class="challenge-card" data-id="${escapeHtml(item.id)}" data-kind="both">
      <span class="challenge-status ${statusClass(item.status)}">${escapeHtml(item.status)}</span>
      <div class="challenge-meta"><span class="pill both">상명대 × 종로구</span><span class="pill partner">${escapeHtml(item.tags[1])}</span></div>
      <h3>${escapeHtml(item.question)}</h3><p>${escapeHtml(item.desc)}</p>
      <div class="challenge-statline"><span>교류 필요도 <strong>${item.priority}</strong></span><span>유사 필요 ${item.similar}건</span><span>예상 ${escapeHtml(item.duration)}</span></div>
      <div class="challenge-bottom"><span><b>함께하는 사람</b> ${escapeHtml(item.owner)}</span><span><b>전공</b> ${escapeHtml(item.majors)}</span></div>
    </button>`).join('');
  grid.querySelectorAll('.challenge-card').forEach(card => card.addEventListener('click', () => openChallenge(card.dataset.id)));
}

function ensureDialogExtra() {
  const dialog = $('#challengeDialog'); const actions = dialog?.querySelector('.dialog-actions');
  if (!dialog || !actions || $('#dialogExtra')) return;
  const extra = document.createElement('div'); extra.className = 'dialog-extra'; extra.id = 'dialogExtra';
  extra.innerHTML = '<div class="dialog-extra-head"><b>AI 세대이음 프로젝트 설계</b><span class="dialog-priority" id="dialogPriority"></span></div><div class="dialog-facts"><div><span>난이도</span><b id="dialogDifficulty"></b></div><div><span>예상 기간</span><b id="dialogDuration"></b></div><div><span>팀 규모</span><b id="dialogTeam"></b></div><div><span>유사 필요</span><b id="dialogSimilar"></b></div></div><div class="weight-list" id="dialogWeights"></div><div class="deliverable-box"><b>함께 만드는 결과물</b><br><span id="dialogDeliverable"></span></div>';
  actions.before(extra); const save = $('#saveInterest'); if (save) save.textContent = '이 세대이음 프로젝트에 참여하기';
}

function openChallenge(id) {
  const item = challenges.find(challenge => challenge.id === id); const dialog = $('#challengeDialog');
  if (!item || !dialog) return; activeChallenge = item; ensureDialogExtra();
  $('#dialogKicker').textContent = 'SMU × JONGNO GENERATION BRIDGE'; $('#dialogTitle').textContent = item.question; $('#dialogDesc').textContent = item.desc; $('#dialogOwner').textContent = item.owner; $('#dialogMajors').textContent = item.majors; $('#dialogMentor').textContent = item.mentor; $('#dialogBenefit').textContent = item.benefit;
  $('#dialogPriority').textContent = `교류 필요도 ${item.priority} · ${item.status}`; $('#dialogDifficulty').textContent = item.difficulty; $('#dialogDuration').textContent = item.duration; $('#dialogTeam').textContent = item.team; $('#dialogSimilar').textContent = `${item.similar}건`; $('#dialogDeliverable').textContent = item.deliverable;
  $('#dialogWeights').innerHTML = item.weights.map(([name, value]) => `<div class="weight-row"><b>${escapeHtml(name)}</b><span class="weight-track"><i style="width:${Number(value)}%"></i></span><strong>${Number(value)}%</strong></div>`).join(''); dialog.showModal();
}

function injectMajorView() {
  const challengesSection = $('#challenges'); if (!challengesSection || $('#major-view')) return;
  const section = document.createElement('section'); section.className = 'section shell'; section.id = 'major-view';
  section.innerHTML = '<div class="section-head"><span>MY MAJOR × GENERATIONS</span><h2>내 전공으로 어떤 세대교류를 만들 수 있을까?</h2><p>학생이 자신의 전공을 선택하면 주민과 함께할 수 있는 프로젝트를 보여줍니다. 전공은 누군가를 돕는 도구이면서 동시에 다른 세대의 경험을 배우는 통로가 됩니다.</p></div><div class="major-view-wrap"><aside class="major-selector"><h3>전공 분야 선택</h3><p>내가 잘하는 것으로 시작해 보세요.</p><div class="major-buttons" id="majorButtons"></div><span class="major-count" id="majorCount"></span></aside><div class="major-results"><h3 id="majorTitle">전체 세대이음 프로젝트</h3><p>카드를 누르면 함께할 세대와 프로젝트 결과물을 확인할 수 있습니다.</p><div class="major-project-list" id="majorProjectList"></div></div></div>';
  challengesSection.after(section);
  const fields = ['전체','컴퓨터과학','디자인','경영','콘텐츠','교육·복지'];
  $('#majorButtons').innerHTML = fields.map(field => `<button type="button" data-major="${escapeHtml(field)}" class="${field === '전체' ? 'active' : ''}">${escapeHtml(field)}</button>`).join('');
  $$('#majorButtons [data-major]').forEach(button => button.addEventListener('click', () => { activeMajor = button.dataset.major; $$('#majorButtons [data-major]').forEach(item => item.classList.toggle('active', item === button)); renderMajorProjects(); })); renderMajorProjects();
}

function renderMajorProjects() {
  const list = $('#majorProjectList'); if (!list) return;
  const visible = activeMajor === '전체' ? challenges : challenges.filter(item => item.majorKeys.includes(activeMajor));
  $('#majorTitle').textContent = activeMajor === '전체' ? '전체 세대이음 프로젝트' : `${activeMajor}으로 만들 수 있는 세대교류`; $('#majorCount').textContent = `${visible.length}개의 프로젝트와 연결`;
  list.innerHTML = visible.map(item => `<button type="button" class="major-project" data-major-project="${escapeHtml(item.id)}"><div><b>${escapeHtml(item.question)}</b><small>${escapeHtml(item.owner)} · ${escapeHtml(item.duration)} · ${escapeHtml(item.team)}</small></div><i>${item.status} →</i></button>`).join('');
  $$('[data-major-project]').forEach(button => button.addEventListener('click', () => openChallenge(button.dataset.majorProject)));
}

function injectImpactBoard() {
  const majorSection = $('#major-view'); if (!majorSection || $('#impact-board')) return;
  const section = document.createElement('section'); section.className = 'section shell'; section.id = 'impact-board';
  section.innerHTML = `<div class="section-head"><span>GENERATION IMPACT</span><h2>몇 건을 해결했는지보다, 몇 번 서로 만났는지를 기록합니다</h2><p>세대교류의 성과를 단순 참여 인원으로만 보지 않습니다. 반복 만남, 공동 결과물, 서로에게 배운 내용까지 기록해 관계가 지역에 남도록 합니다.</p></div><div class="impact-stats"><article class="impact-stat"><strong>32</strong><span>주민·학생 필요 등록</span></article><article class="impact-stat"><strong>11</strong><span>세대이음 프로젝트</span></article><article class="impact-stat"><strong>54</strong><span>학생 참여</span></article><article class="impact-stat"><strong>41</strong><span>지역 주민 참여</span></article><article class="impact-stat"><strong>126</strong><span>세대 간 대화·활동</span></article></div><div class="impact-case-grid">${impactCases.map(item => `<article class="impact-case"><span class="case-status">${escapeHtml(item.status)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.place)} · ${escapeHtml(item.team)}</p><div class="case-flow"><b>만남 → 공동작업 → 기록</b>${escapeHtml(item.result)}</div><div class="case-metric">${escapeHtml(item.metric)}</div></article>`).join('')}</div>`;
  majorSection.after(section);
}

function ensureApplyDialog() {
  if ($('#applyDialog')) return;
  const dialog = document.createElement('dialog'); dialog.className = 'apply-dialog'; dialog.id = 'applyDialog';
  dialog.innerHTML = '<form class="apply-inner" id="applyForm"><div class="apply-top"><div><div class="apply-kicker">JOIN GENERATION BRIDGE</div><h2 id="applyTitle">세대이음 참여 신청</h2></div><button type="button" id="applyClose" aria-label="닫기">×</button></div><p class="apply-copy" id="applyCopy"></p><div class="apply-field"><label for="applyMajor">나의 전공/나눌 수 있는 것</label><select id="applyMajor"><option>컴퓨터과학 · 디지털 도움</option><option>디자인 · 시각/UX</option><option>경영 · 기획/상권</option><option>콘텐츠 · 기록/영상</option><option>교육·복지 · 관계/수업</option><option>기타 · 내가 잘하는 것</option></select></div><div class="apply-field"><label for="applyMotivation">내가 나누고 싶은 것과 배우고 싶은 것</label><textarea id="applyMotivation" required placeholder="예: 스마트폰 사용을 알려드리고, 대신 오래된 종로의 동네 이야기를 듣고 기록해 보고 싶습니다."></textarea></div><div class="apply-actions"><button class="btn" type="button" id="applyCancel">취소</button><button class="btn primary" type="submit">참여 신청 저장</button></div><div class="apply-note">해커톤 프로토타입에서는 신청 내용을 이 브라우저에 저장합니다. 실제 운영 시 학교·복지기관·지역기관과 참여 절차를 연계합니다.</div></form>';
  document.body.appendChild(dialog); $('#applyClose').addEventListener('click', () => dialog.close()); $('#applyCancel').addEventListener('click', () => dialog.close());
  $('#applyForm').addEventListener('submit', event => { event.preventDefault(); if (!activeChallenge) return; let applications = []; try { applications = JSON.parse(localStorage.getItem('smoongroad_generation_applications') || '[]'); } catch {} if (!Array.isArray(applications)) applications = []; applications.push({challengeId: activeChallenge.id, major: $('#applyMajor').value, motivation: $('#applyMotivation').value.trim(), createdAt: new Date().toISOString()}); localStorage.setItem('smoongroad_generation_applications', JSON.stringify(applications)); dialog.close(); const toast = $('#savedToast'); if (toast) { toast.textContent = '세대이음 프로젝트 참여 신청을 저장했습니다.'; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2200); } });
}

function startApply() {
  if (!activeChallenge) return; ensureApplyDialog(); $('#challengeDialog')?.close(); $('#applyTitle').textContent = activeChallenge.question; $('#applyCopy').textContent = `${activeChallenge.owner} · 예상 ${activeChallenge.duration} · ${activeChallenge.team} 팀 프로젝트`; $('#applyMotivation').value = ''; $('#applyDialog').showModal();
}

function fillSample(key) {
  const sample = samples[key]; if (!sample) return; $('#location').value = sample.location; $('#client').value = sample.client; $('#title').value = sample.title; $('#detail').value = sample.detail;
}

function renderAnalysis({title, detail, client, location}) {
  const type = pickType(`${title} ${detail}`); const data = archetypes[type]; $('#emptyResult').hidden = true; $('#analysisResult').hidden = false; $('#resultTitle').textContent = title; $('#fitScore').textContent = String(93 + Math.min(6, data.majors.length)); $('#tags').innerHTML = data.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join(''); $('#summary').innerHTML = `<b>${escapeHtml(location)}</b>에서 학생과 주민이 서로 나눌 수 있는 것을 <b>${escapeHtml(data.tags.join(' · '))}</b> 관점으로 분석했습니다. ${escapeHtml(data.summary)}`; $('#majorGrid').innerHTML = data.majors.map(([major, role]) => `<article class="major-card"><span>SMU MAJOR</span><b>${escapeHtml(major)}</b><p>${escapeHtml(role)}</p></article>`).join(''); $('#projectList').innerHTML = data.projects.map(([code, project, majors, duration]) => `<article class="project"><span>${escapeHtml(code)}</span><div><b>${escapeHtml(project)}</b><small>${escapeHtml(majors)} · 예상 ${escapeHtml(duration)}</small></div><i>GENERATION PROJECT</i></article>`).join(''); $('#mentorText').textContent = data.mentor; $('#volunteerText').textContent = data.volunteer; $('#ownerText').textContent = `${client} · 주민·학생 공동 피드백`; $('#beforeText').textContent = data.before; $('#afterText').textContent = data.after; $('#portfolioTitle').textContent = title; $('#portfolioClient').textContent = `${location} · Community Partner: ${client}`; $('#portfolioMajors').textContent = `추천 전공: ${data.majors.map(item => item[0]).join(' + ')}`; localStorage.setItem('smoongroad_local_last', JSON.stringify({title, detail, client, location, type, createdAt: new Date().toISOString()})); $('#analysisResult').scrollIntoView({behavior:'smooth', block:'start'});
}

function init() {
  injectStyles(); rewriteStaticCopy(); addProblemFocus(); enhanceNav(); rewriteChallengeHead(); injectExchangeStrip(); ensureDialogExtra(); renderChallenges(); injectMajorView(); injectImpactBoard(); ensureApplyDialog();
  $$('[data-filter]').forEach(button => button.addEventListener('click', () => { $$('[data-filter]').forEach(item => item.classList.remove('active')); button.classList.add('active'); renderChallenges(button.dataset.filter || 'all'); }));
  $$('[data-sample]').forEach(button => button.addEventListener('click', () => fillSample(button.dataset.sample)));
  $('#problemForm')?.addEventListener('submit', event => { event.preventDefault(); const payload = {title: $('#title').value.trim(), detail: $('#detail').value.trim(), client: $('#client').value, location: $('#location').value}; if (!payload.title || !payload.detail) return; renderAnalysis(payload); });
  $('#dialogClose')?.addEventListener('click', () => $('#challengeDialog')?.close()); $('#dialogClose2')?.addEventListener('click', () => $('#challengeDialog')?.close()); $('#saveInterest')?.addEventListener('click', startApply);
  try { const saved = JSON.parse(localStorage.getItem('smoongroad_local_last') || 'null'); if (saved) { $('#location').value = saved.location || '평창동'; $('#client').value = saved.client || '종로구'; $('#title').value = saved.title || ''; $('#detail').value = saved.detail || ''; } } catch {}
}

init();