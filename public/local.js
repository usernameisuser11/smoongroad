const challenges = [
  {
    id: 'digital-guide',
    kind: 'digital',
    question: '학생과 주민이 함께 “누구나 쓰기 쉬운 종로 디지털 생활가이드”를 만들 수 있을까?',
    desc: '학생이 사용법을 일방적으로 알려주는 대신 주민이 실제로 막히는 상황을 고르고, 학생과 주민이 함께 문구·화면·설명을 테스트하며 생활가이드를 공동 제작합니다.',
    owner: '종로구 주민 · 상명대학교 학생',
    majors: '컴퓨터과학 · 디자인 · 교육 · 복지',
    majorKeys: ['컴퓨터과학', '디자인', '교육·복지'],
    tags: ['공동제작', '디지털', '생활문제'],
    difficulty: '중', duration: '2~3주', team: '4~6명', status: '모집중', priority: 96,
    matchMode: '지정 + AI 보완',
    together: ['주민이 실제 어려운 디지털 상황을 선정', '학생·주민이 쉬운 설명과 화면을 함께 설계', '서로 직접 사용해 보고 수정사항 결정'],
    deliverable: '세대 공동 디지털 생활가이드 + 사용성 테스트 기록',
    weights: [['컴퓨터과학', 30], ['디자인', 30], ['교육', 20], ['복지', 20]]
  },
  {
    id: 'memory-map',
    kind: 'memory',
    question: '학생과 주민이 함께 종로의 기억과 오늘을 한 지도에 담을 수 있을까?',
    desc: '주민이 기억하는 장소와 학생이 바라보는 현재의 장소를 함께 걷고, 사진·음성·글·지도를 한 화면에 담는 세대 공동 지역지도를 만듭니다.',
    owner: '종로구 주민 · 문화기관 · 상명대학교 학생',
    majors: '콘텐츠 · 디자인 · 컴퓨터과학 · 역사문화',
    majorKeys: ['콘텐츠', '디자인', '컴퓨터과학'],
    tags: ['공동기록', '지역기억', '지도'],
    difficulty: '중', duration: '3주', team: '5~7명', status: '모집중', priority: 94,
    matchMode: 'AI 추천 또는 직접 지정',
    together: ['함께 걸으며 기록할 장소를 선정', '주민의 기억과 학생의 현재 관점을 함께 작성', '공개할 사진·문장·지도 표현을 공동 결정'],
    deliverable: '종로 세대 공동기억 지도 + 장소별 공동 기록',
    weights: [['콘텐츠', 30], ['디자인', 25], ['컴퓨터과학', 25], ['역사문화', 20]]
  },
  {
    id: 'career-cards',
    kind: 'mentoring',
    question: '청년의 진로 고민과 중·장년의 직업 경험을 함께 콘텐츠로 만들 수 있을까?',
    desc: '주민이 강연하고 학생이 듣는 방식에서 벗어나 학생의 질문과 주민의 실제 경험을 묶어 다른 세대도 활용할 수 있는 직업·인생 선택 카드를 함께 제작합니다.',
    owner: '종로구 중·장년 주민 · 상명대학교 학생',
    majors: '경영 · 교육 · 콘텐츠 · 상담/복지',
    majorKeys: ['경영', '콘텐츠', '교육·복지'],
    tags: ['공동기획', '진로', '경험'],
    difficulty: '하', duration: '2주', team: '4~5명', status: '진행중', priority: 89,
    matchMode: '전공 무관 공개 + AI 추천',
    together: ['학생이 실제 진로 질문을 제안', '주민과 학생이 경험·실패·선택 사례를 같이 정리', '다른 세대에게 도움이 될 카드·오디오를 공동 제작'],
    deliverable: '세대 공동 직업·인생 선택 카드 또는 짧은 오디오 콘텐츠',
    weights: [['경영', 30], ['교육', 25], ['콘텐츠', 25], ['복지', 20]]
  },
  {
    id: 'local-shop-lab',
    kind: 'local',
    question: '오래된 가게의 경험과 학생의 시각을 합쳐 새로운 지역 경험을 만들 수 있을까?',
    desc: '학생이 가게를 대신 홍보하는 것이 아니라 상인과 학생이 고객 문제를 함께 찾고, 가게의 역사·상품·서비스 중 무엇을 바꿀지 함께 결정하고 실험합니다.',
    owner: '종로구 소상공인 · 상명대학교 학생',
    majors: '경영 · 디자인 · 컴퓨터과학 · 콘텐츠',
    majorKeys: ['경영', '디자인', '컴퓨터과학', '콘텐츠'],
    tags: ['공동문제해결', '지역상권', '실험'],
    difficulty: '중', duration: '3주', team: '4~6명', status: '모집중', priority: 91,
    matchMode: '원하는 학과 지정 + AI 보완',
    together: ['상인과 학생이 개선할 한 가지 문제를 공동 선정', '가게 경험과 학생 아이디어를 결합해 시안 제작', '실제 손님 반응을 함께 보고 최종안 결정'],
    deliverable: '공동 브랜드·메뉴·웹·서비스 개선안 중 1개 + 현장 실험 결과',
    weights: [['경영', 30], ['디자인', 30], ['콘텐츠', 25], ['컴퓨터과학', 15]]
  },
  {
    id: 'co-class',
    kind: 'class',
    question: '학생과 주민이 “같이 가르치고 같이 만드는” 동네 클래스를 열 수 있을까?',
    desc: '서로 한 번씩 선생님이 되는 데서 더 나아가 두 세대가 하나의 주제를 정하고 공동 수업을 기획·운영해 마지막에 작은 결과물을 함께 만듭니다.',
    owner: '종로구 주민 · 상명대학교 동아리·학생',
    majors: '교육 · 외국어 · 콘텐츠 · 복지 · 전공 무관',
    majorKeys: ['교육·복지', '콘텐츠'],
    tags: ['공동수업', '생활문화', '세대교류'],
    difficulty: '하', duration: '1~2주', team: '4명 이상', status: '모집중', priority: 90,
    matchMode: '전공 무관 공개',
    together: ['함께 배우고 만들 주제를 선정', '학생과 주민이 수업 역할을 나눠 공동 진행', '레시피북·영상·작품·생활팁 등 결과물을 같이 완성'],
    deliverable: '세대 공동 클래스 + 공동 결과물 1개',
    weights: [['교육', 30], ['콘텐츠', 25], ['복지', 20], ['자율역량', 25]]
  }
];

const archetypes = {
  digital: {
    keys: ['스마트폰','키오스크','디지털','앱','예약','AI','컴퓨터'],
    tags: ['공동제작','디지털','사용자경험'],
    summary: '학생이 사용법을 알려주는 방식보다 주민이 실제로 어려운 상황을 정의하고 학생과 함께 쉬운 디지털 도구를 설계·검증하는 공동제작 프로젝트가 적합합니다.',
    majors: [['컴퓨터과학전공','구현과 기술 검토'],['커뮤니케이션디자인','쉬운 정보·화면 설계'],['교육학과','함께 배우는 활동 구조'],['가족복지학과','세대별 참여 장벽과 현장 연결']],
    projects: [['A','함께 문제 상황 고르기','주민 + 학생','1회'],['B','공동 아이디어 워크숍','다전공 + 주민','1회'],['C','생활가이드 프로토타입 공동 제작','개발 · 디자인 · 주민','7일'],['D','서로 사용해 보고 함께 수정','전체 참여자','2회']],
    before: '학생이 알려주고 주민이 배우는 일방향 활동', after: '주민이 문제를 정의하고 학생과 함께 도구를 만드는 공동 프로젝트'
  },
  memory: {
    keys: ['기억','이야기','역사','문화','사진','영상','동네','지도','장소','아카이브'],
    tags: ['공동기록','지역기억','지도'],
    summary: '주민을 인터뷰 대상에만 두지 않고 학생과 주민이 기록할 장소, 질문, 문장, 공개 방식을 함께 정하는 공동 지역기록 프로젝트가 적합합니다.',
    majors: [['문화콘텐츠전공','공동 스토리 기획'],['커뮤니케이션디자인','지도·사진·기록 시각화'],['컴퓨터과학전공','웹 지도·아카이브 구현'],['역사콘텐츠전공','지역 맥락과 기록 검토']],
    projects: [['A','함께 걸을 장소 선정','주민 + 학생','1회'],['B','세대 공동 동네 걷기','전체 참여자','1~2회'],['C','사진·글·음성 공동 편집','콘텐츠 · 주민','5일'],['D','세대 공동지도 공개·검수','전체 참여자','3일']],
    before: '주민은 인터뷰 대상, 학생은 제작자', after: '주민과 학생 모두 기록자이자 편집자가 되는 공동 아카이브'
  },
  mentoring: {
    keys: ['진로','직업','취업','창업','경험','멘토','조언','회사'],
    tags: ['공동기획','진로','경험'],
    summary: '주민의 경험을 듣는 멘토링보다 학생의 실제 질문과 주민의 경험을 함께 구조화해 다음 참여자도 활용할 결과물을 만드는 방식이 적합합니다.',
    majors: [['경영학부','직업·창업 경험 구조화'],['교육학과','대화·질문 활동 설계'],['콘텐츠전공','공동 카드·오디오 제작'],['가족복지학과','세대 관계와 참여 경험 지원']],
    projects: [['A','학생 진로질문 공동 선정','학생 + 주민','1회'],['B','경험·실패·선택 대화','전체 참여자','2회'],['C','직업·인생 선택 카드 공동 제작','콘텐츠 + 전체','4일'],['D','다른 세대 피드백 반영','전체 참여자','1회']],
    before: '한쪽이 말하고 다른 쪽이 듣는 멘토링', after: '질문과 경험을 함께 정리해 다른 사람에게도 남는 공동 콘텐츠'
  },
  local: {
    keys: ['가게','상점','상권','소상공인','브랜딩','메뉴','사장','상품','홍보'],
    tags: ['공동문제해결','지역상권','현장실험'],
    summary: '학생이 홍보물을 대신 만들어주는 방식보다 상인과 학생이 개선할 문제를 같이 고르고 시안과 현장 실험 결과를 함께 판단하는 공동문제해결 프로젝트가 적합합니다.',
    majors: [['경영학부','고객·상권 문제 분석'],['커뮤니케이션디자인','브랜드·정보 개선 공동 설계'],['컴퓨터과학전공','필요 시 웹·서비스 구현'],['콘텐츠전공','가게 경험·이야기 공동 표현']],
    projects: [['A','가게 문제 한 가지 공동 선정','상인 + 학생','1회'],['B','현장 고객 관찰','상인 + 학생','2일'],['C','개선안 공동 제작','전공팀 + 상인','7일'],['D','손님 반응 보고 최종안 공동 결정','전체 참여자','3일']],
    before: '학생이 가게를 대신 홍보해줌', after: '상인과 학생이 같은 문제를 함께 정하고 실험하는 공동 프로젝트'
  },
  class: {
    keys: ['수업','배우','가르','요리','수선','외국어','생활','클래스'],
    tags: ['공동수업','생활문화','세대교류'],
    summary: '서로 번갈아 가르치는 것에서 더 나아가 하나의 주제를 함께 정하고 수업과 결과물을 공동 기획하는 활동이 적합합니다.',
    majors: [['교육학과','공동 수업 구조 설계'],['가족복지학과','세대별 참여 장벽 지원'],['콘텐츠전공','공동 결과물 기록'],['전공 무관','각자의 취미·생활기술·관심사 활용']],
    projects: [['A','같이 만들 주제 선정','주민 + 학생','1회'],['B','공동 클래스 기획','전체 참여자','2일'],['C','학생·주민 공동 진행','전체 참여자','1회'],['D','결과물 완성·공유','전체 참여자','3일']],
    before: '서로 한 번씩 가르치고 끝나는 활동', after: '한 목표를 정하고 같이 기획·진행·완성하는 공동 클래스'
  }
};

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
let activeChallenge = null;
let activeMajor = '전체';

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

function pickType(text) {
  let best = 'digital'; let score = -1;
  for (const [type, data] of Object.entries(archetypes)) {
    const current = data.keys.reduce((n, key) => n + (text.includes(key) ? 1 : 0), 0);
    if (current > score) { score = current; best = type; }
  }
  return best;
}

function addDynamicStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .co-rule{margin-top:18px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.co-rule div{background:#fff;border:1px solid var(--line);border-radius:14px;padding:12px}.co-rule span{font-size:8px;font-weight:950;color:var(--primary2)}.co-rule b{display:block;font-size:11px;margin-top:3px}
    .matching-box{margin-top:16px;background:#fff;border:1px solid var(--line);border-radius:22px;padding:20px}.matching-box h3{margin:0 0 7px;font-size:18px}.matching-box>p{margin:0 0 15px;font-size:10px;color:var(--muted)}.matching-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.matching-card{background:var(--surface2);border-radius:14px;padding:12px}.matching-card span{font-size:8px;font-weight:950;color:var(--primary2)}.matching-card b{display:block;font-size:11px;margin:4px 0}.matching-card p{font-size:9px;color:var(--muted);margin:0}
    .together-list{display:grid;gap:6px;margin-top:11px}.together-list div{display:grid;grid-template-columns:24px 1fr;gap:8px;align-items:center;background:var(--surface2);border-radius:11px;padding:8px;font-size:9px}.together-list i{width:24px;height:24px;border-radius:8px;background:var(--primary);color:#fff;display:grid;place-items:center;font-style:normal;font-weight:950}
    .challenge-statline{display:flex;gap:7px;flex-wrap:wrap;margin:12px 0}.challenge-statline span{background:var(--surface2);border-radius:9px;padding:6px 8px;font-size:9px;color:#53667a;font-weight:850}.challenge-status{position:absolute;right:18px;top:18px;background:var(--green-soft);color:var(--green);border-radius:999px;padding:6px 8px;font-size:8px;font-weight:950}
    .match-mode-note{margin-top:8px;padding:10px;border-radius:12px;background:#f7fbff;border:1px solid #d8e6f2;font-size:9px;color:#52657a}.match-mode-note b{color:var(--primary)}
    .major-view-wrap{display:grid;grid-template-columns:.72fr 1.28fr;gap:16px}.major-selector,.major-results{background:#fff;border:1px solid var(--line);border-radius:24px;padding:22px}.major-selector h3,.major-results h3{margin:0 0 7px;font-size:20px}.major-selector p,.major-results>p{margin:0 0 14px;color:var(--muted);font-size:10px}.major-buttons{display:grid;gap:8px}.major-buttons button{border:1px solid var(--line);background:#f8fafc;border-radius:12px;padding:11px;text-align:left;font-weight:900;color:#40566d}.major-buttons button.active{background:var(--primary);color:#fff;border-color:var(--primary)}.major-count{display:inline-flex;margin-top:13px;padding:7px 9px;background:var(--orange-soft);border-radius:10px;color:#815713;font-size:9px;font-weight:950}.major-project-list{display:grid;gap:8px}.major-project{width:100%;border:1px solid var(--line);background:#fff;border-radius:15px;padding:13px;text-align:left;display:grid;grid-template-columns:1fr auto;gap:10px}.major-project b{font-size:12px}.major-project small{display:block;color:var(--muted);font-size:9px;margin-top:3px}.major-project i{font-style:normal;color:var(--primary2);font-size:9px;font-weight:950}
    .apply-dialog{border:0;padding:0;border-radius:24px;width:min(580px,calc(100% - 28px));box-shadow:0 30px 90px rgba(15,34,56,.25)}.apply-dialog::backdrop{background:rgba(15,34,56,.52);backdrop-filter:blur(4px)}.apply-inner{padding:24px}.apply-top{display:flex;justify-content:space-between;gap:14px}.apply-top h2{font-size:22px;line-height:1.3;margin:4px 0}.apply-top button{border:0;background:var(--surface2);width:36px;height:36px;border-radius:11px}.apply-field{display:grid;gap:6px;margin:11px 0}.apply-field label{font-size:9px;font-weight:950;color:#52657a}.apply-field select,.apply-field textarea{border:1px solid var(--line);border-radius:11px;padding:11px;background:#f9fbfd}.apply-field textarea{min-height:80px}.apply-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:14px}
    @media(max-width:900px){.matching-grid{grid-template-columns:1fr 1fr}.major-view-wrap{grid-template-columns:1fr}}
    @media(max-width:640px){.co-rule,.matching-grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);
}

function rewriteHero() {
  const title = document.querySelector('.hero h1');
  if (title) title.innerHTML = '도와주는 세대교류가 아니라,<br><em>같이 만드는 세대교류</em>';
  const copy = document.querySelector('.hero-copy');
  if (copy) copy.innerHTML = '<b>상명대 학생과 종로구 주민이 서로를 “도와주는 사람”과 “도움받는 사람”으로 나누지 않습니다.</b><br>같은 목표를 정하고, 각자 가진 전공·경험·생활지식을 합쳐 하나의 결과물을 함께 만드는 세대 공동 프로젝트 플랫폼입니다.';
  const focus = document.querySelector('.problem-focus');
  if (focus) focus.innerHTML = '<strong>RULE</strong><div><b>모든 프로젝트는 공동제작이 원칙입니다.</b><p>같이 정하기 → 같이 하기 → 같이 결과물 남기기. 세 단계 중 하나라도 빠지면 세대이음 프로젝트로 등록하지 않습니다.</p></div>';
  const q = document.querySelector('.hero-question'); if (q) q.textContent = '서로 다른 세대가 같은 목표를 함께 완성한다면?';
  const rows = $$('.question-route .route-row');
  const copyRows = [
    ['01','같이 문제·목표 정하기','주민과 학생이 무엇을 만들지 함께 결정'],
    ['02','전공·경험을 조합해 역할 나누기','직접 학과 지정 또는 AI 추천·보완'],
    ['03','같이 조사·기획·제작하기','한쪽이 대신 해주는 방식은 제외'],
    ['04','공동 결과물과 관계 기록하기','지도 · 콘텐츠 · 서비스 · 클래스 등']
  ];
  rows.forEach((row,i)=>{ if(copyRows[i]) row.innerHTML=`<span>${copyRows[i][0]}</span><div><b>${copyRows[i][1]}</b><small>${copyRows[i][2]}</small></div>`; });
  const heroActions = document.querySelector('.hero-actions');
  if (heroActions) heroActions.innerHTML = '<a class="btn primary" href="#activities">같이 만드는 활동 보기</a><a class="btn" href="#lab">프로젝트 매칭 해보기</a>';
}

function rewriteActivities() {
  const section = $('#activities'); if (!section) return;
  section.innerHTML = `
    <div class="section-head"><span>CO-CREATION ACTIVITIES</span><h2>세대의 차이를 “서로 해주는 일”이 아니라 “같이 하는 일”로 바꿉니다</h2><p>활동의 핵심은 지식 전달이 아니라 공동 목표입니다. 주민과 학생이 함께 선택하고, 함께 움직이고, 함께 결과물을 남깁니다.</p></div>
    <div class="co-rule"><div><span>STEP 1</span><b>같이 정하기</b></div><div><span>STEP 2</span><b>같이 하기</b></div><div><span>STEP 3</span><b>같이 남기기</b></div></div>
    <div class="activity-grid" style="margin-top:16px">
      <article class="activity-card"><div class="activity-label">01 · DIGITAL</div><h3>세대 공동 디지털 생활가이드</h3><p>주민이 실제로 불편한 디지털 상황을 고르고 학생과 함께 쉬운 설명·화면을 설계하고 직접 테스트합니다.</p><div class="activity-result"><b>공동 결과물:</b> 종로 생활 디지털 가이드 + 주민·학생 사용성 테스트 기록</div></article>
      <article class="activity-card"><div class="activity-label">02 · LOCAL MAP</div><h3>종로 세대 공동기억 지도</h3><p>같이 동네를 걸으며 주민의 기억과 학생의 현재 시선을 한 장소에 함께 기록하고 공개할 내용을 공동 편집합니다.</p><div class="activity-result"><b>공동 결과물:</b> 사진·음성·글이 들어간 세대 공동 지역지도</div></article>
      <article class="activity-card"><div class="activity-label">03 · LOCAL BUSINESS</div><h3>상인 × 학생 공동 실험실</h3><p>학생이 홍보를 대신해주는 것이 아니라 상인과 학생이 가게의 한 문제를 같이 고르고 개선안을 만들어 실제 손님 반응까지 함께 봅니다.</p><div class="activity-result"><b>공동 결과물:</b> 브랜드·메뉴·웹·서비스 개선안 + 현장 실험 결과</div></article>
      <article class="activity-card"><div class="activity-label">04 · CO-CLASS</div><h3>세대 공동 클래스</h3><p>학생과 주민이 하나의 주제를 함께 정해 수업을 공동 기획·운영하고 레시피북·영상·작품·생활팁 같은 결과물을 같이 완성합니다.</p><div class="activity-result"><b>공동 결과물:</b> 공동 수업 + 세대가 함께 만든 결과물</div></article>
    </div>
    <div class="bridge-steps"><article class="bridge-step"><span>1</span><b>공동 목표 등록</b><p>“누가 누구를 도와줄까”가 아니라 “무엇을 같이 만들까”를 적습니다.</p></article><article class="bridge-step"><span>2</span><b>매칭 방식 선택</b><p>학과 직접 지정·AI 추천·지정+AI 보완·전공 무관 중 선택합니다.</p></article><article class="bridge-step"><span>3</span><b>팀 공동 실행</b><p>학생과 주민 모두 프로젝트의 의사결정에 참여합니다.</p></article><article class="bridge-step"><span>4</span><b>공동 결과 기록</b><p>완성물과 함께 서로 무엇을 배웠는지 남깁니다.</p></article></div>`;
}

function rewriteSystem() {
  const system = $('#system'); if (!system) return;
  const head = system.querySelector('.section-head');
  if (head) head.innerHTML = '<span>WHY CO-CREATION</span><h2>교류의 목적은 “만나는 것”보다 “같이 해보는 것”</h2><p>대화나 일회성 체험만으로 끝나면 관계를 지속하기 어렵습니다. 공동 목표와 공동 결과물이 있으면 서로의 역할이 생기고 다음 만남의 이유도 만들어집니다.</p>';
  const cards = system.querySelectorAll('.premise article');
  const texts = [
    ['1','수혜자와 제공자로 나누지 않기','주민도 학생도 프로젝트의 공동 기획자이자 제작자입니다.'],
    ['2','전공보다 “함께할 역할”을 먼저 보기','원하는 학과가 있으면 지정하고, 모르면 AI가 필요 역량과 전공을 추천합니다.'],
    ['3','공동 결과물이 지역에 남기','지도·콘텐츠·서비스·수업처럼 다음 사람도 볼 수 있는 결과를 축적합니다.']
  ];
  cards.forEach((card,i)=>{ if(texts[i]) card.innerHTML=`<div class="num">${texts[i][0]}</div><h3>${texts[i][1]}</h3><p>${texts[i][2]}</p>`; });
  const banner = system.querySelector('.source-banner');
  if (banner) banner.innerHTML = '<strong>=</strong><div><b>AI는 사람을 결정하지 않습니다.</b><p>현장이 원하는 학과를 직접 고를 수도 있고, AI에게 추천받을 수도 있으며, “컴퓨터과학은 꼭 필요해요”처럼 지정한 뒤 AI가 다른 전공을 보완 추천하게 할 수도 있습니다.</p></div>';
  if (!system.querySelector('.matching-box')) {
    const box = document.createElement('div'); box.className='matching-box';
    box.innerHTML='<h3>4가지 매칭 방식</h3><p>프로젝트 성격과 등록자의 판단 수준에 따라 매칭 방식을 자유롭게 선택합니다.</p><div class="matching-grid"><div class="matching-card"><span>01</span><b>학과 직접 지정</b><p>“컴퓨터과학 학생과 같이 하고 싶어요”처럼 원하는 학과를 선택</p></div><div class="matching-card"><span>02</span><b>AI 전공 추천</b><p>필요한 전공을 모르면 AI가 역할·역량을 분석해 추천</p></div><div class="matching-card"><span>03</span><b>지정 + AI 보완</b><p>필수 학과는 고정하고 AI가 융합하면 좋은 전공을 추가 제안</p></div><div class="matching-card"><span>04</span><b>전공 무관 공개</b><p>관심과 역량 중심으로 누구나 지원하고 원하는 팀을 직접 선택</p></div></div>';
    system.appendChild(box);
  }
}

function rewriteChallengeHead() {
  const head = $('#challenges .section-head');
  if (head) head.innerHTML = '<span>CO-CREATION CHALLENGE</span><h2>“누가 해줄 사람?”이 아니라 “누구와 같이 만들까?”</h2><p>모든 챌린지는 주민과 학생이 함께 결정해야 하는 단계와 공동 결과물을 포함합니다.</p>';
  const buttons = $$('#challenges [data-filter]');
  const labels = ['전체','디지털','지역기억','진로·경험']; buttons.forEach((b,i)=>{if(labels[i]) b.textContent=labels[i];});
}

function renderChallenges(filter='all') {
  const grid=$('#challengeGrid'); if(!grid) return;
  let visible=challenges;
  if(filter==='both') visible=challenges.filter(x=>x.kind==='digital');
  if(filter==='local') visible=challenges.filter(x=>x.kind==='memory'||x.kind==='local');
  if(filter==='campus') visible=challenges.filter(x=>x.kind==='mentoring'||x.kind==='class');
  grid.innerHTML=visible.map(item=>`<button type="button" class="challenge-card" data-id="${escapeHtml(item.id)}" data-kind="both"><span class="challenge-status">${escapeHtml(item.status)}</span><div class="challenge-meta"><span class="pill both">공동제작</span><span class="pill partner">${escapeHtml(item.tags[1])}</span></div><h3>${escapeHtml(item.question)}</h3><p>${escapeHtml(item.desc)}</p><div class="challenge-statline"><span>공동성 <strong>${item.priority}</strong></span><span>${escapeHtml(item.duration)}</span><span>${escapeHtml(item.matchMode)}</span></div><div class="challenge-bottom"><span><b>함께하는 사람</b> ${escapeHtml(item.owner)}</span><span><b>전공</b> ${escapeHtml(item.majors)}</span></div></button>`).join('');
  grid.querySelectorAll('.challenge-card').forEach(card=>card.addEventListener('click',()=>openChallenge(card.dataset.id)));
}

function ensureDialogExtra() {
  const dialog=$('#challengeDialog'); const actions=dialog?.querySelector('.dialog-actions');
  if(!dialog||!actions||$('#dialogExtra')) return;
  const extra=document.createElement('div'); extra.id='dialogExtra'; extra.className='dialog-extra';
  extra.innerHTML='<div class="dialog-extra-head"><b>같이 만드는 방식</b><span class="dialog-priority" id="dialogPriority"></span></div><div class="dialog-facts"><div><span>난이도</span><b id="dialogDifficulty"></b></div><div><span>기간</span><b id="dialogDuration"></b></div><div><span>팀</span><b id="dialogTeam"></b></div><div><span>매칭</span><b id="dialogMatch"></b></div></div><div class="together-list" id="dialogTogether"></div><div class="deliverable-box"><b>공동 결과물</b><br><span id="dialogDeliverable"></span></div>';
  actions.before(extra); const save=$('#saveInterest'); if(save) save.textContent='이 공동 프로젝트에 참여하기';
}

function openChallenge(id) {
  const item=challenges.find(x=>x.id===id); const dialog=$('#challengeDialog'); if(!item||!dialog) return;
  activeChallenge=item; ensureDialogExtra();
  $('#dialogKicker').textContent='SMU × JONGNO CO-CREATION'; $('#dialogTitle').textContent=item.question; $('#dialogDesc').textContent=item.desc; $('#dialogOwner').textContent=item.owner; $('#dialogMajors').textContent=item.majors; $('#dialogMentor').textContent='학생·주민 공동 의사결정 + 필요 시 전문가 자문'; $('#dialogBenefit').textContent='공동 결과물 · 전공 프로젝트 · 지역 관계 기록';
  $('#dialogPriority').textContent=`공동성 ${item.priority}`; $('#dialogDifficulty').textContent=item.difficulty; $('#dialogDuration').textContent=item.duration; $('#dialogTeam').textContent=item.team; $('#dialogMatch').textContent=item.matchMode; $('#dialogDeliverable').textContent=item.deliverable;
  $('#dialogTogether').innerHTML=item.together.map((x,i)=>`<div><i>${i+1}</i><b>${escapeHtml(x)}</b></div>`).join(''); dialog.showModal();
}

function addMatchingFields() {
  const form=$('#problemForm'); if(!form||$('#matchMode')) return;
  const titleField=$('#title')?.closest('.field');
  const wrapper=document.createElement('div');
  wrapper.innerHTML=`<div class="field"><label for="matchMode">전공 매칭 방식</label><select id="matchMode"><option value="direct">학과 직접 지정</option><option value="ai" selected>AI에게 추천받기</option><option value="hybrid">지정 + AI 보완 추천</option><option value="open">전공 무관 공개</option></select></div><div class="field" id="preferredMajorField"><label for="preferredMajor">원하는 학과·분야 (선택)</label><input id="preferredMajor" placeholder="예: 컴퓨터과학전공 / 공학계열 / 디자인 분야" /></div><div class="match-mode-note" id="matchModeNote"><b>AI 추천:</b> 입력한 공동 목표를 바탕으로 필요한 역할과 전공을 추천하되, 최종 선택은 사람이 합니다.</div>`;
  titleField?.before(...wrapper.children);
  const mode=$('#matchMode');
  const update=()=>{ const v=mode.value; const notes={direct:'원하는 학과·단과대·분야를 직접 지정합니다.',ai:'AI가 필요한 역할과 전공을 추천하며 최종 선택은 사람이 합니다.',hybrid:'필수 학과는 직접 지정하고 AI가 함께하면 좋은 전공을 추가 제안합니다.',open:'전공 제한 없이 공개하고 지원자·팀을 직접 선택하거나 AI 추천을 받을 수 있습니다.'}; $('#matchModeNote').innerHTML=`<b>${mode.options[mode.selectedIndex].text}:</b> ${notes[v]}`; $('#preferredMajorField').style.display=(v==='ai'||v==='open')?'none':'grid'; };
  mode.addEventListener('change',update); update();
}

function injectMajorView() {
  const challengesSection=$('#challenges'); if(!challengesSection||$('#major-view')) return;
  const section=document.createElement('section'); section.className='section shell'; section.id='major-view';
  section.innerHTML='<div class="section-head"><span>HOW TO JOIN</span><h2>같은 학과끼리도, 단과대끼리도, 융합팀으로도</h2><p>학생은 자신의 전공과 참여 성향에 따라 프로젝트를 탐색하고, 원하는 사람·팀을 직접 고르거나 AI 추천을 받을 수 있습니다.</p></div><div class="major-view-wrap"><aside class="major-selector"><h3>전공으로 프로젝트 보기</h3><p>전공은 참여의 시작점일 뿐 제한 조건은 아닙니다.</p><div class="major-buttons" id="majorButtons"></div><span class="major-count" id="majorCount"></span></aside><div class="major-results"><h3 id="majorTitle">전체 공동 프로젝트</h3><p>같은 학과팀 / 단과대팀 / 융합팀 / 직접 선택 / AI 추천 모두 가능합니다.</p><div class="major-project-list" id="majorProjectList"></div></div></div>';
  challengesSection.after(section);
  const fields=['전체','컴퓨터과학','디자인','경영','콘텐츠','교육·복지']; $('#majorButtons').innerHTML=fields.map(x=>`<button type="button" data-major="${escapeHtml(x)}" class="${x==='전체'?'active':''}">${escapeHtml(x)}</button>`).join('');
  $$('#majorButtons [data-major]').forEach(btn=>btn.addEventListener('click',()=>{activeMajor=btn.dataset.major; $$('#majorButtons [data-major]').forEach(x=>x.classList.toggle('active',x===btn)); renderMajorProjects();})); renderMajorProjects();
}

function renderMajorProjects() {
  const list=$('#majorProjectList'); if(!list) return; const visible=activeMajor==='전체'?challenges:challenges.filter(x=>x.majorKeys.includes(activeMajor));
  $('#majorTitle').textContent=activeMajor==='전체'?'전체 공동 프로젝트':`${activeMajor}에서 참여할 수 있는 공동 프로젝트`; $('#majorCount').textContent=`${visible.length}개 프로젝트`;
  list.innerHTML=visible.map(x=>`<button class="major-project" type="button" data-major-project="${escapeHtml(x.id)}"><div><b>${escapeHtml(x.question)}</b><small>${escapeHtml(x.owner)} · ${escapeHtml(x.matchMode)}</small></div><i>같이 만들기 →</i></button>`).join('');
  $$('[data-major-project]').forEach(btn=>btn.addEventListener('click',()=>openChallenge(btn.dataset.majorProject)));
}

function ensureApplyDialog() {
  if($('#applyDialog')) return; const dialog=document.createElement('dialog'); dialog.id='applyDialog'; dialog.className='apply-dialog';
  dialog.innerHTML=`<form class="apply-inner" id="applyForm"><div class="apply-top"><div><small>JOIN CO-CREATION PROJECT</small><h2 id="applyTitle">공동 프로젝트 참여</h2></div><button type="button" id="applyClose">×</button></div><p id="applyCopy"></p><div class="apply-field"><label for="joinMode">어떻게 참여할까요?</label><select id="joinMode"><option>같은 학과 학생들과 팀으로</option><option>같은 단과대 학생들과 팀으로</option><option>다른 전공과 융합팀으로</option><option>참여자·팀을 직접 선택</option><option>AI에게 팀 추천받기</option></select></div><div class="apply-field"><label for="applyRole">내가 같이 맡고 싶은 역할</label><select id="applyRole"><option>기획·문제정의</option><option>개발·기술</option><option>디자인·콘텐츠</option><option>조사·인터뷰</option><option>운영·현장소통</option><option>기타</option></select></div><div class="apply-field"><label for="applyMotivation">같이 만들고 싶은 이유</label><textarea id="applyMotivation" required placeholder="예: 주민과 함께 실제 사용 가능한 지역지도를 만들고 싶습니다."></textarea></div><div class="apply-actions"><button class="btn" type="button" id="applyCancel">취소</button><button class="btn primary" type="submit">참여 신청 저장</button></div></form>`;
  document.body.appendChild(dialog); $('#applyClose').addEventListener('click',()=>dialog.close()); $('#applyCancel').addEventListener('click',()=>dialog.close());
  $('#applyForm').addEventListener('submit',e=>{e.preventDefault(); if(!activeChallenge)return; let arr=[]; try{arr=JSON.parse(localStorage.getItem('smoongroad_cocreation_apps')||'[]')}catch{}; if(!Array.isArray(arr))arr=[]; arr.push({challengeId:activeChallenge.id,joinMode:$('#joinMode').value,role:$('#applyRole').value,motivation:$('#applyMotivation').value.trim(),createdAt:new Date().toISOString()}); localStorage.setItem('smoongroad_cocreation_apps',JSON.stringify(arr)); dialog.close(); const toast=$('#savedToast'); if(toast){toast.textContent='공동 프로젝트 참여 신청을 저장했습니다.';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2000);}});
}

function startApply(){if(!activeChallenge)return;ensureApplyDialog();$('#challengeDialog')?.close();$('#applyTitle').textContent=activeChallenge.question;$('#applyCopy').textContent=`${activeChallenge.owner} · ${activeChallenge.duration} · ${activeChallenge.matchMode}`;$('#applyMotivation').value='';$('#applyDialog').showModal();}

function rewriteLab() {
  const head=$('#lab .section-head'); if(head) head.innerHTML='<span>AI CO-MATCHING DEMO</span><h2>원하는 전공은 직접 고르고, 모르는 부분만 AI에게 맡깁니다</h2><p>공동 목표를 입력하고 매칭 방식을 선택하면 AI가 필요한 역할·전공·공동 활동을 제안합니다. AI는 추천만 하고 최종 팀 선택과 프로젝트 방향은 참여자가 결정합니다.</p>';
  const formP=$('#problemForm > p'); if(formP) formP.textContent='누가 누구를 도울지가 아니라 무엇을 같이 만들지 입력해 보세요.';
  const labels=$$('#problemForm .sample-row button'); const txt=['공동 디지털가이드','상인×학생 공동실험','세대 공동지도','공동 클래스']; labels.forEach((x,i)=>{if(txt[i])x.textContent=txt[i]});
  const titleLabel=$('label[for="title"]'); if(titleLabel) titleLabel.textContent='같이 만들고 싶은 프로젝트';
  const title=$('#title'); if(title) title.placeholder='예: 주민과 학생이 함께 종로의 세대 공동지도를 만들고 싶어요.';
  const detailLabel=$('label[for="detail"]'); if(detailLabel) detailLabel.textContent='같이 할 일과 만들 결과';
  const detail=$('#detail'); if(detail) detail.placeholder='예: 주민은 오래된 장소와 이야기를 제안하고, 학생은 지도와 콘텐츠 제작 기술을 더해 함께 걷고 기록하고 싶습니다.';
  const button=$('#problemForm .analyze'); if(button) button.textContent='AI 공동 프로젝트 설계하기';
}

function renderAnalysis({title,detail,client,location,matchMode,preferredMajor}) {
  const type=pickType(`${title} ${detail}`); const data=archetypes[type];
  $('#emptyResult').hidden=true; $('#analysisResult').hidden=false; $('#resultTitle').textContent=title; $('#fitScore').textContent='96'; $('#tags').innerHTML=data.tags.map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join('');
  const modeText={direct:'학과 직접 지정',ai:'AI 전공 추천',hybrid:'지정 + AI 보완',open:'전공 무관 공개'}[matchMode]||'AI 전공 추천';
  $('#summary').innerHTML=`<b>${escapeHtml(location)}</b>에서 진행할 <b>공동제작 프로젝트</b>로 분석했습니다. ${escapeHtml(data.summary)}<div class="match-mode-note"><b>${escapeHtml(modeText)}</b>${preferredMajor?` · 우선 고려: ${escapeHtml(preferredMajor)}`:''} · 최종 선택은 참여자가 결정합니다.</div>`;
  $('#majorGrid').innerHTML=data.majors.map(([m,r])=>`<article class="major-card"><span>추천 역할·전공</span><b>${escapeHtml(m)}</b><p>${escapeHtml(r)}</p></article>`).join(''); $('#projectList').innerHTML=data.projects.map(([c,p,m,d])=>`<article class="project"><span>${escapeHtml(c)}</span><div><b>${escapeHtml(p)}</b><small>${escapeHtml(m)} · ${escapeHtml(d)}</small></div><i>같이 진행</i></article>`).join('');
  $('#mentorText').textContent='필요 시 전문가 자문'; $('#volunteerText').textContent='주민·학생 공동 운영'; $('#ownerText').textContent=`${client} · 공동 의사결정`; $('#beforeText').textContent=data.before; $('#afterText').textContent=data.after; $('#portfolioTitle').textContent=title; $('#portfolioClient').textContent=`${location} · ${client} · ${modeText}`; $('#portfolioMajors').textContent=`추천 전공: ${data.majors.map(x=>x[0]).join(' + ')}`; $('#analysisResult').scrollIntoView({behavior:'smooth',block:'start'});
}

function init(){
  addDynamicStyles(); rewriteHero(); rewriteActivities(); rewriteSystem(); rewriteChallengeHead(); rewriteLab(); addMatchingFields(); renderChallenges(); injectMajorView(); ensureDialogExtra(); ensureApplyDialog();
  $$('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{$$('[data-filter]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderChallenges(btn.dataset.filter||'all');}));
  const samples={mobility:{location:'부암동',client:'종로구',title:'주민과 학생이 함께 종로 디지털 생활가이드를 만들 수 있을까?',detail:'주민이 실제로 어려운 앱과 키오스크 상황을 고르고 학생과 함께 쉬운 설명과 화면을 만들고 직접 테스트하고 싶다.'},shop:{location:'평창동',client:'지역상인 협의체',title:'오래된 가게 상인과 학생이 함께 새로운 가게 경험을 실험할 수 있을까?',detail:'상인과 학생이 고객 불편 한 가지를 같이 고르고 가게 경험과 학생의 디자인·기술을 합쳐 개선안을 제작하고 손님 반응을 함께 보고 싶다.'},digital:{location:'부암동',client:'문화·지역기관',title:'주민과 학생이 함께 종로 세대 공동기억 지도를 만들 수 있을까?',detail:'주민과 학생이 동네를 같이 걸으며 기록할 장소를 고르고 옛 기억과 현재의 시선을 사진·음성·웹 지도에 함께 남기고 싶다.'},hill:{location:'홍지동',client:'상명대학교',title:'학생과 주민이 하나의 주제로 세대 공동 클래스를 열 수 있을까?',detail:'한쪽이 가르치는 수업이 아니라 두 세대가 주제를 같이 정하고 역할을 나눠 수업을 공동 운영하고 결과물까지 함께 만들고 싶다.'}};
  $$('[data-sample]').forEach(btn=>btn.addEventListener('click',()=>{const s=samples[btn.dataset.sample];if(!s)return;$('#location').value=s.location;$('#client').value=s.client;$('#title').value=s.title;$('#detail').value=s.detail;}));
  $('#problemForm')?.addEventListener('submit',e=>{e.preventDefault();const payload={title:$('#title').value.trim(),detail:$('#detail').value.trim(),client:$('#client').value,location:$('#location').value,matchMode:$('#matchMode').value,preferredMajor:$('#preferredMajor')?.value.trim()||''};if(!payload.title||!payload.detail)return;renderAnalysis(payload);});
  $('#dialogClose')?.addEventListener('click',()=>$('#challengeDialog')?.close()); $('#dialogClose2')?.addEventListener('click',()=>$('#challengeDialog')?.close()); $('#saveInterest')?.addEventListener('click',startApply);
}

init();
