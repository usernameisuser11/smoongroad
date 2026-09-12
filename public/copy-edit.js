(() => {
  const replacements = [
    [/JONGNO/g, 'JONG-RO'],
    [/Jongno/g, 'Jong-ro'],
    [/jongno/g, 'jong-ro'],
  ];

  function replaceEnglishJongno(root = document.body) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      const value = node.nodeValue || '';
      let next = value;
      for (const [pattern, replacement] of replacements) next = next.replace(pattern, replacement);
      if (next !== value) node.nodeValue = next;
    }
  }

  function addTypographyStyles() {
    if (document.getElementById('smulinkCopyEditStyles')) return;
    const style = document.createElement('style');
    style.id = 'smulinkCopyEditStyles';
    style.textContent = `
      h1,h2,h3,.hero-copy,.section-head p,.challenge-card p,.activity-card p,.eco p,.mentor-story p,.review-card dd,.safety-card p,.safety-flow p{
        word-break:keep-all;
        overflow-wrap:break-word;
        line-break:strict;
      }
      #system .section-head{max-width:none;width:100%}
      #system .section-head h2{
        white-space:nowrap;
        word-break:keep-all;
        overflow-wrap:normal;
        font-size:clamp(34px,3.4vw,46px);
        letter-spacing:-.05em;
      }
      #system .section-head p{max-width:1080px;line-height:1.65}
      #safety .section-head{max-width:1100px}
      #safety .section-head h2{word-break:keep-all;overflow-wrap:normal;line-height:1.2}
      #safety .section-head p{max-width:1050px;line-height:1.65;word-break:keep-all}
      .eco-icon{font-size:13px;letter-spacing:-.03em}
      @media(max-width:1000px){#system .section-head h2{white-space:normal}}
    `;
    document.head.appendChild(style);
  }

  function setTextIfChanged(element, value) {
    if (element && element.textContent !== value) element.textContent = value;
  }

  function setHtmlIfChanged(element, value) {
    if (element && element.innerHTML !== value) element.innerHTML = value;
  }

  function sectionByLabel(label) {
    return [...document.querySelectorAll('.section-head > span')]
      .find(span => span.textContent.trim() === label)?.closest('.section') || null;
  }

  function refinePartnership() {
    const section = sectionByLabel('PARTNERSHIP');
    if (!section) return;
    const head = section.querySelector('.section-head');
    setTextIfChanged(head?.querySelector('h2'), '여러 주체가 각자의 역할로 공동 프로젝트를 지원합니다');
    setTextIfChanged(head?.querySelector('p'), '아래는 해커톤에서 제안하는 운영 구조입니다. 실제 협약이나 참여가 확정된 기관을 의미하지 않습니다.');

    const cards = section.querySelectorAll('.eco');
    const data = [
      ['區','종로구 · 지역기관','지역 현장과 주민 참여를 연결할 수 있는 주체입니다.',['주민·활동 공간 연계','지역 현장 요구 전달','프로젝트 확장 협력']],
      ['SMU','상명대학교','학생의 전공과 프로젝트 경험을 지역 공동제작에 연결합니다.',['전공 기반 참여','교과·비교과 연계 가능성','학생 결과물·경험 축적']],
      ['人','주민 · 상인 · 지역 세대','도움의 대상이 아니라 경험과 생활지식을 가진 공동 제작자입니다.',['생활·직업 경험 공유','지역기억·문화 제안','공동 의사결정·검증']],
      ['PRO','전문가 · 복지기관','필요할 때 접근성·교육·운영 관점에서 프로젝트를 자문합니다.',['세대교류 활동 자문','접근성·교육 피드백','안전한 현장 운영 지원']],
    ];
    cards.forEach((card,index) => {
      const item = data[index];
      if (!item) return;
      setTextIfChanged(card.querySelector('.eco-icon'), item[0]);
      setTextIfChanged(card.querySelector('h3'), item[1]);
      setTextIfChanged(card.querySelector('p'), item[2]);
      const list = card.querySelector('ul');
      const html = item[3].map(text => `<li>${text}</li>`).join('');
      setHtmlIfChanged(list, html);
    });
  }

  function refineSupportSection() {
    const section = sectionByLabel('MUTUAL MENTORING');
    if (!section) return;
    setTextIfChanged(section.querySelector('.section-head > span'), 'CO-CREATION SUPPORT');
    setTextIfChanged(section.querySelector('.section-head h2'), '멘토링보다, 함께 만드는 팀을 중심에 둡니다');
    setTextIfChanged(section.querySelector('.section-head p'), '전문가는 필요할 때 자문하고, 실제 프로젝트의 기획·선택·제작은 학생과 주민이 함께 진행합니다.');

    setTextIfChanged(section.querySelector('.mentor-story h3'), '“관계의 중심은 가르침이 아니라 공동 제작입니다.”');
    setTextIfChanged(section.querySelector('.mentor-story > p'), '학생과 주민은 각자 가진 전공·경험·생활지식을 한 팀 안에서 결합합니다. 전문가는 프로젝트를 대신 이끌기보다 필요한 순간에 자문하는 역할을 맡습니다.');

    const flows = section.querySelectorAll('.mentor-flow > div');
    const flowData = [
      ['1. 공동 목표 합의','무엇을 같이 만들지 학생과 주민이 함께 결정'],
      ['2. 역할 나누기','전공·경험·생활지식에 따라 서로의 역할을 설계'],
      ['3. 공동 제작·검증','같이 만들고 사용해 본 뒤 결과를 함께 수정'],
    ];
    flows.forEach((flow,index) => {
      if (!flowData[index]) return;
      setTextIfChanged(flow.querySelector('b'), flowData[index][0]);
      setTextIfChanged(flow.querySelector('small'), flowData[index][1]);
    });

    const mentorCards = section.querySelectorAll('.mentor-card');
    const cardData = [
      ['UX','디지털 접근성 자문','쉬운 설명·화면·디지털 접근성 관점의 피드백','컴퓨터·디자인'],
      ['DOC','지역기록 자문','인터뷰·사진·영상·기록 윤리와 콘텐츠 구성 피드백','콘텐츠·인문'],
      ['SAFE','세대교류 운영 자문','다양한 세대가 안전하게 함께 참여하는 방식 검토','교육·복지'],
    ];
    mentorCards.forEach((card,index) => {
      const item = cardData[index];
      if (!item) return;
      setTextIfChanged(card.querySelector('.avatar'), item[0]);
      setTextIfChanged(card.querySelector('b'), item[1]);
      setTextIfChanged(card.querySelector('small'), item[2]);
      setTextIfChanged(card.querySelector('.match'), item[3]);
    });
  }

  function refineCopy() {
    const systemHead = document.querySelector('#system .section-head');
    if (systemHead) {
      setTextIfChanged(systemHead.querySelector('h2'), '교류의 목적은 “만남”보다 “함께 해보는 것”입니다');
      setTextIfChanged(systemHead.querySelector('p'), '공통의 목표와 공동의 결과물이 있을 때, 서로의 역할이 생기고 다음 만남의 이유도 자연스럽게 이어집니다.');
    }

    const safetyHead = document.querySelector('#safety .section-head');
    if (safetyHead) {
      setHtmlIfChanged(safetyHead.querySelector('h2'), '누가 참여하는지 확인하고,<br>문제 상황은 내부적으로 관리합니다');
      setTextIfChanged(safetyHead.querySelector('p'), '해커톤에서는 인증 절차 자체를 구현하지 않고, 실제 서비스에서 사용될 인증·제재 상태를 목업으로 보여줍니다.');
    }

    refinePartnership();
    refineSupportSection();
    replaceEnglishJongno(document.body);
  }

  addTypographyStyles();
  refineCopy();

  let scheduled = false;
  const observer = new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      refineCopy();
    });
  });
  if (document.body) observer.observe(document.body, { childList: true, subtree: true, characterData: true });
})();
