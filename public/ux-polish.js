(() => {
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];

  function setText(el, text) { if (el && el.textContent !== text) el.textContent = text; }
  function setHtml(el, html) { if (el && el.innerHTML !== html) el.innerHTML = html; }

  function fixKoreanTypos(root = document.body) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const next = String(node.nodeValue || '').replace(/종노/g, '종로');
      if (next !== node.nodeValue) node.nodeValue = next;
    });
  }

  function addStyles() {
    if ($('#smulinkUxPolishStyles')) return;
    const style = document.createElement('style');
    style.id = 'smulinkUxPolishStyles';
    style.textContent = `
      .hero .eyebrow{font-size:12px;letter-spacing:.08em;color:var(--primary2);font-weight:950}
      .hero h1{margin-top:10px}.hero h1 em{display:inline-block}
      .example-note{display:inline-flex;align-items:center;margin:0 0 16px;padding:7px 10px;border-radius:999px;background:var(--orange-soft);color:#7b5415;font-size:9px;font-weight:900}
      .activity-card .stake-value{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0}
      .activity-card .stake-value>div{background:var(--surface2);border-radius:12px;padding:10px}
      .activity-card .stake-value span{display:block;font-size:8px;font-weight:950;color:var(--primary2);margin-bottom:3px}.activity-card .stake-value b{font-size:9px;line-height:1.45}
      @media(max-width:640px){.activity-card .stake-value{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  function refineHero() {
    const eyebrow = $('.hero .eyebrow');
    const title = $('.hero h1');
    const focus = $('.problem-focus');
    setText(eyebrow, '도와주는 세대교류가 아니라');
    setHtml(title, '<em>같이 만드는 세대교류</em>');
    if (focus) setHtml(focus, '<strong>RULE</strong><div><b>SMU.Link의 기본 원칙은 공동제작입니다.</b><p>같이 정하기 → 같이 하기 → 같이 결과물 남기기. 한쪽이 대신 해주는 활동보다 서로의 역할이 있는 프로젝트를 제안합니다.</p></div>');
  }

  function refineActivityExamples() {
    const section = $('#activities');
    if (!section) return;
    section.innerHTML = `
      <div class="section-head"><span>SMU.LINK CO-CREATION EXAMPLES</span><h2>지역사회가 실제로 참여할 이유가 보이는 프로젝트를 제안합니다</h2><p>막연한 세대교류가 아니라 지역 주체가 이미 겪는 문제에서 시작하고, 학생의 전공 역량을 더해 현장에서 다시 쓸 수 있는 결과물을 남깁니다.</p></div>
      <div class="example-note">목업 예시 · 실제 참여 기관이 확정되었다는 의미는 아닙니다</div>
      <div class="co-rule"><div><span>STEP 1</span><b>현장 필요를 같이 정하기</b></div><div><span>STEP 2</span><b>학생·지역 주체가 같이 만들기</b></div><div><span>STEP 3</span><b>현장에서 써보고 결과 남기기</b></div></div>
      <div class="activity-grid" style="margin-top:16px">
        <article class="activity-card"><div class="activity-label">01 · WELFARE × UX</div><h3>복지관 프로그램 신청·이용 안내 개선</h3><p>주민이 어디에서 헷갈리는지, 담당자가 어떤 설명을 반복하는지 함께 찾고 학생이 정보구조·디자인·웹 역량을 보탭니다.</p><div class="stake-value"><div><span>지역사회가 얻는 것</span><b>반복해서 사용할 쉬운 안내자료와 신청 안내 화면</b></div><div><span>학생이 기여하는 것</span><b>UX·디자인·웹 제작과 사용성 테스트</b></div></div><div class="activity-result"><b>공동 결과물:</b> 쉬운 안내 카드 + 모바일 안내 페이지 + 주민 테스트 기록</div></article>
        <article class="activity-card"><div class="activity-label">02 · LOCAL SHOP × CX</div><h3>지역 상점의 메뉴·예약·외국인 안내 개선</h3><p>상인이 실제 고객 문의와 불편을 알려주고, 학생과 함께 한 가지 문제를 골라 작게 바꾼 뒤 현장에서 반응을 확인합니다.</p><div class="stake-value"><div><span>지역사회가 얻는 것</span><b>바로 가게에서 시험해 볼 메뉴·예약·안내 개선안</b></div><div><span>학생이 기여하는 것</span><b>경영·디자인·콘텐츠·개발 역량</b></div></div><div class="activity-result"><b>공동 결과물:</b> 개선 시안 + 현장 테스트 결과 + 재사용 가능한 안내 콘텐츠</div></article>
        <article class="activity-card"><div class="activity-label">03 · LOCAL MEMORY × CONTENT</div><h3>동네의 기억을 지역 프로그램 자산으로 만들기</h3><p>주민모임·문화기관과 학생이 기록할 장소와 이야기를 같이 고르고, 주민의 기억과 학생의 제작 역량을 하나의 콘텐츠로 엮습니다.</p><div class="stake-value"><div><span>지역사회가 얻는 것</span><b>행사·교육·전시에 다시 활용할 수 있는 지역 기록</b></div><div><span>학생이 기여하는 것</span><b>인터뷰·사진·영상·지도·아카이브 제작</b></div></div><div class="activity-result"><b>공동 결과물:</b> 세대 공동 지역지도 + 장소별 기록 카드</div></article>
        <article class="activity-card"><div class="activity-label">04 · COMMUNITY PROGRAM × INFO</div><h3>지역 행사·프로그램 참여 안내 개선</h3><p>기관 담당자와 실제 참여자가 신청 과정의 불편을 고르고 학생이 콘텐츠·디자인·기술을 더해 더 이해하기 쉬운 안내 방식을 만듭니다.</p><div class="stake-value"><div><span>지역사회가 얻는 것</span><b>프로그램 홍보·신청에 반복 사용할 수 있는 안내 틀</b></div><div><span>학생이 기여하는 것</span><b>콘텐츠 구조화·시각화·간단한 웹 구현</b></div></div><div class="activity-result"><b>공동 결과물:</b> 참여 안내 페이지 또는 카드뉴스 + 피드백 기록</div></article>
      </div>
      <div class="bridge-steps"><article class="bridge-step"><span>1</span><b>현장 필요 등록</b><p>기관·상인·주민이 실제로 바꾸고 싶은 한 가지를 적습니다.</p></article><article class="bridge-step"><span>2</span><b>공동 목표 확정</b><p>누구를 도울지보다 무엇을 같이 만들지 정합니다.</p></article><article class="bridge-step"><span>3</span><b>AI/직접 매칭</b><p>필요한 역할과 전공을 추천받거나 직접 선택합니다.</p></article><article class="bridge-step"><span>4</span><b>제작·검증·기록</b><p>현장에서 써보고 수정한 뒤 결과와 후기를 남깁니다.</p></article></div>`;
  }

  function refineChallengeExamples() {
    try {
      if (typeof challenges === 'undefined' || !Array.isArray(challenges)) return;
      const updates = {
        'digital-guide': {
          question:'복지기관의 프로그램 신청·이용 안내를 주민·담당자·학생이 함께 더 쉽게 만들 수 있을까?',
          desc:'주민이 실제로 헷갈리는 신청 절차와 담당자가 반복 설명하는 내용을 함께 찾고, 학생이 정보구조·디자인·웹 역량을 더해 쉬운 안내물을 공동 제작합니다.',
          owner:'지역 복지기관 · 주민 · 상명대학교 학생',
          majors:'컴퓨터과학 · 디자인 · 교육 · 복지',
          together:['주민·담당자가 반복되는 불편을 함께 선정','학생과 쉬운 문구·화면·안내 구조를 공동 설계','주민이 직접 사용해 보고 수정사항을 함께 결정'],
          deliverable:'쉬운 이용 안내 카드 + 모바일 안내 페이지 + 사용성 테스트 기록'
        },
        'local-shop-lab': {
          question:'지역 상점의 메뉴·예약·외국인 안내를 상인과 학생이 함께 개선할 수 있을까?',
          desc:'상인이 자주 받는 고객 질문과 불편을 알려주고 학생과 한 가지 문제를 골라 개선안을 만든 뒤 실제 손님 반응을 함께 확인합니다.',
          owner:'지역 상인 · 상명대학교 학생',
          together:['상인이 실제 고객 문의와 불편을 공유','학생과 개선할 한 가지를 공동 선정','개선 시안을 현장에서 시험하고 결과를 함께 판단'],
          deliverable:'메뉴·예약·안내 개선안 + 현장 테스트 결과'
        },
        'memory-map': {
          question:'주민의 동네 기억을 지역 행사·교육에 다시 쓸 수 있는 기록으로 함께 만들 수 있을까?',
          desc:'주민모임·문화기관과 학생이 기록할 장소와 질문을 같이 정하고 사진·음성·글·지도를 묶어 다시 활용할 수 있는 지역 콘텐츠를 만듭니다.',
          owner:'주민모임 · 지역 문화기관 · 상명대학교 학생',
          together:['함께 기록할 장소와 질문을 선정','주민의 기억과 학생의 현재 관점을 공동 편집','공개 범위와 활용 방식을 함께 결정'],
          deliverable:'세대 공동 지역지도 + 장소별 기록 카드'
        },
        'career-cards': {
          question:'중·장년의 실제 직업 경험을 청년 프로그램에서 다시 쓸 수 있는 콘텐츠로 함께 만들 수 있을까?',
          desc:'강연 한 번으로 끝내지 않고 학생의 실제 질문과 중·장년 주민의 경험을 함께 정리해 다른 참여자도 사용할 수 있는 직업·선택 카드를 만듭니다.',
          owner:'중·장년 주민 · 청년 참여자 · 지역기관',
          together:['학생이 실제 진로 질문을 제안','주민과 선택·실패·변화 경험을 함께 정리','다음 프로그램에서도 쓸 카드·오디오로 공동 제작'],
          deliverable:'공동 직업경험 카드 + 짧은 오디오 기록'
        },
        'co-class': {
          question:'지역기관의 프로그램을 주민과 학생이 함께 기획하고, 다음에도 쓸 수 있는 운영안을 남길 수 있을까?',
          desc:'한쪽이 강사이고 다른 쪽이 수강생인 구조에서 벗어나 주민과 학생이 주제·역할·진행 방식을 같이 정하고 운영 결과까지 기록합니다.',
          owner:'지역기관 · 주민 · 상명대학교 학생',
          together:['함께 프로그램 주제와 목표를 결정','주민과 학생이 역할을 나눠 공동 운영','참여자 피드백을 반영해 다음 운영안을 완성'],
          deliverable:'공동 프로그램 1회 + 재사용 가능한 운영안·콘텐츠'
        }
      };
      challenges.forEach(item => { if (updates[item.id]) Object.assign(item, updates[item.id]); });
      if (typeof renderChallenges === 'function') renderChallenges('all');
      if (typeof renderMajorProjects === 'function') renderMajorProjects();
      $$('.challenge-statline span:first-child').forEach(el => setText(el, '공동제작 원칙'));
    } catch (error) { console.warn('[SMU.Link examples]', error); }
  }

  function refineAiSamples() {
    const form = $('#problemForm');
    if (!form) return;
    const samples = {
      mobility:{label:'복지관 안내 개선',location:'부암동',client:'자원봉사·복지기관',title:'복지관 프로그램 신청 안내를 주민과 학생이 함께 더 쉽게 만들 수 있을까?',detail:'주민이 신청 절차와 준비물에서 자주 헷갈리고 담당자도 같은 설명을 반복합니다. 주민과 담당자가 어려운 지점을 고르고, 컴퓨터·디자인 학생과 함께 쉬운 안내 카드와 모바일 안내 페이지를 만들고 싶습니다.'},
      shop:{label:'상점 이용경험 개선',location:'평창동',client:'지역상인 협의체',title:'지역 상점의 메뉴·예약·외국인 안내를 상인과 학생이 함께 개선할 수 있을까?',detail:'상인이 실제로 자주 받는 고객 질문을 정리하고 학생과 한 가지 문제를 골라 메뉴·예약·안내 시안을 만든 뒤 손님 반응을 함께 확인하고 싶습니다.'},
      digital:{label:'동네기억 자산화',location:'부암동',client:'문화·지역기관',title:'주민의 동네 기억을 지역 행사와 교육에 다시 쓸 수 있는 기록으로 만들 수 있을까?',detail:'주민과 학생이 기록할 장소와 질문을 같이 정하고, 주민의 기억과 학생의 사진·콘텐츠·웹 제작 역량을 합쳐 지역지도와 기록 카드를 만들고 싶습니다.'},
      hill:{label:'지역행사 안내 개선',location:'홍지동',client:'문화·지역기관',title:'지역 행사와 프로그램의 참여 안내를 주민과 학생이 함께 더 이해하기 쉽게 만들 수 있을까?',detail:'기관 담당자와 실제 참여자가 신청 과정에서 막히는 지점을 고르고 학생이 콘텐츠·디자인·웹 역량을 더해 재사용 가능한 안내 페이지와 카드뉴스를 만들고 싶습니다.'}
    };
    $$('[data-sample]').forEach(button => { const sample=samples[button.dataset.sample]; if(sample) button.textContent=sample.label; });
    form.addEventListener('click', event => {
      const button = event.target.closest('[data-sample]');
      if (!button || !form.contains(button)) return;
      const sample = samples[button.dataset.sample];
      if (!sample) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const location = $('#location'), client = $('#client'), title = $('#title'), detail = $('#detail');
      if (location) location.value = sample.location;
      if (client) client.value = sample.client;
      if (title) title.value = sample.title;
      if (detail) detail.value = sample.detail;
    }, true);
  }

  function run() {
    addStyles();
    refineHero();
    refineActivityExamples();
    refineChallengeExamples();
    refineAiSamples();
    fixKoreanTypos();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();

  let queued = false;
  const observer = new MutationObserver(() => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; fixKoreanTypos(); });
  });
  if (document.body) observer.observe(document.body, {childList:true,subtree:true,characterData:true});
})();