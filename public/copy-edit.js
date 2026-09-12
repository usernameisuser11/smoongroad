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
      let value = node.nodeValue || '';
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
      h1,h2,h3,.hero-copy,.section-head p,.challenge-card p,.activity-card p,.eco p,.mentor-story p,.review-card dd,.safety-card p,.report-card p{
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
      @media(max-width:1000px){
        #system .section-head h2{white-space:normal}
      }
    `;
    document.head.appendChild(style);
  }

  function refineCopy() {
    const systemHead = document.querySelector('#system .section-head');
    if (systemHead) {
      const title = systemHead.querySelector('h2');
      const copy = systemHead.querySelector('p');
      if (title) title.textContent = '교류의 목적은 “만남”보다 “함께 해보는 것”입니다';
      if (copy) copy.textContent = '공통의 목표와 공동의 결과물이 있을 때, 서로의 역할이 생기고 다음 만남의 이유도 자연스럽게 이어집니다.';
    }

    const safetyHead = document.querySelector('#safety .section-head');
    if (safetyHead) {
      const title = safetyHead.querySelector('h2');
      const copy = safetyHead.querySelector('p');
      if (title) title.innerHTML = '누가 참여하는지 확인하고,<br>문제 상황은 내부적으로 관리합니다';
      if (copy) copy.innerHTML = '공개 블랙리스트 대신 역할별 인증 상태와 관리자 제재 상태를 사용합니다.<br>신고만으로 자동 차단하지 않고, 검토 후 제한합니다.';
    }

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
