(() => {
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  function addStyles() {
    if ($('#smulinkBrandCleanStyles')) return;
    const style = document.createElement('style');
    style.id = 'smulinkBrandCleanStyles';
    style.textContent = `
      :root{
        --bg:#f8fbff;--surface:#fff;--surface2:#f2f6fb;--text:#0b2861;--muted:#667a98;
        --line:#dce6f2;--primary:#0b3fbf;--primary2:#195cff;--accent:#4fd19b;--green:#26a77b;
        --blue-soft:#edf4ff;--green-soft:#ecfaf5;--shadow:0 20px 60px rgba(13,54,130,.10);--radius:24px;
      }
      html,body{background:var(--bg)!important;color:var(--text)!important}
      body{font-family:Pretendard,"Noto Sans KR","Apple SD Gothic Neo",system-ui,sans-serif!important;letter-spacing:-.01em}
      .shell{width:min(1180px,calc(100% - 48px))!important}

      header{height:78px;background:rgba(255,255,255,.96)!important;border-bottom:1px solid #edf1f7!important;box-shadow:0 2px 18px rgba(11,40,97,.025)!important;backdrop-filter:blur(18px)!important}
      .header-inner{min-height:78px!important;padding:0!important;display:grid!important;grid-template-columns:auto 1fr auto!important;gap:34px!important}
      .brand{gap:11px!important;min-width:max-content}
      .brand-icon{width:46px;height:46px;border-radius:14px;display:block;box-shadow:0 8px 20px rgba(10,55,170,.14)}
      .brand-wordmark{font-size:27px;font-weight:900;letter-spacing:-.055em;color:#123679;line-height:1;white-space:nowrap}
      .brand-main-nav{display:flex;align-items:center;justify-content:center;gap:8px}
      .brand-main-nav button{position:relative;border:0;background:transparent;padding:27px 15px 25px;color:#536989;font-size:14px;font-weight:800;white-space:nowrap}
      .brand-main-nav button:hover{color:var(--primary2)}
      .brand-main-nav button.active{color:var(--primary2)}
      .brand-main-nav button.active:after{content:"";position:absolute;left:14px;right:14px;bottom:0;height:3px;border-radius:999px;background:var(--primary2)}
      .brand-header-cta{border:1px solid #cbd9ed;background:#fff;color:#173b78;border-radius:999px;min-height:44px;padding:0 18px;font-size:13px;font-weight:850;white-space:nowrap}
      .brand-header-cta.primary{background:linear-gradient(135deg,#1758f6,#0d45d5);border-color:transparent;color:#fff;box-shadow:0 9px 22px rgba(23,88,246,.18)}
      .brand-header-actions{display:flex;gap:8px;align-items:center}
      .category-nav-wrap{display:none!important}

      .hero{max-width:none!important;width:min(1180px,calc(100% - 48px))!important;min-height:620px!important;padding:62px 0 54px!important;margin:auto!important;display:grid!important;grid-template-columns:.94fr 1.06fr!important;gap:46px!important;align-items:center!important}
      .brand-hero-copy{max-width:560px}
      .brand-hero-eyebrow{font-size:16px;font-weight:800;color:#184aa6;margin:0 0 18px;word-break:keep-all}
      .brand-hero-title{font-size:clamp(52px,5.2vw,76px)!important;line-height:1.08!important;letter-spacing:-.07em!important;margin:0 0 26px!important;color:#0a2b68!important;word-break:keep-all}
      .brand-hero-title em{font-style:normal;color:#1759f4;background:linear-gradient(135deg,#0c49e8,#3b79ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
      .brand-hero-desc{font-size:17px;line-height:1.8;color:#4e6485;max-width:520px;margin:0;word-break:keep-all}
      .brand-hero-desc b{color:#173a74}
      .brand-hero-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
      .brand-hero-actions button{min-height:55px;padding:0 25px;border-radius:999px;border:1px solid #cdd9ea;background:#fff;color:#173a74;font-size:14px;font-weight:900}
      .brand-hero-actions button.primary{border-color:transparent;background:linear-gradient(135deg,#1357fa,#0d43d3);color:#fff;box-shadow:0 13px 28px rgba(20,84,235,.20)}
      .brand-hero-actions button:hover{transform:translateY(-1px)}

      .brand-hero-art{position:relative;min-height:500px;display:grid;place-items:center;isolation:isolate}
      .brand-hero-art:before{content:"";position:absolute;width:520px;height:410px;border-radius:50%;background:radial-gradient(circle at 45% 45%,rgba(88,150,255,.17),rgba(220,236,255,.23) 55%,rgba(255,255,255,0) 72%);z-index:-3}
      .brand-orbit{position:absolute;width:520px;height:330px;border:2px solid rgba(50,115,240,.14);border-radius:50%;transform:rotate(-7deg);z-index:-2}
      .brand-orbit:after{content:"";position:absolute;right:24px;top:42px;width:17px;height:17px;border-radius:50%;background:#55d5a4;box-shadow:0 0 0 10px rgba(85,213,164,.09)}
      .brand-orbit:before{content:"";position:absolute;left:36px;bottom:46px;width:17px;height:17px;border-radius:50%;background:#2f72ff;box-shadow:0 0 0 10px rgba(47,114,255,.08)}
      .brand-hero-icon{width:260px;height:260px;border-radius:56px;filter:drop-shadow(0 25px 35px rgba(8,48,150,.19));z-index:2}
      .brand-node{position:absolute;display:flex;align-items:center;gap:9px;padding:10px 14px;border-radius:999px;background:rgba(255,255,255,.93);border:1px solid #d9e5f3;box-shadow:0 9px 25px rgba(15,58,130,.07);color:#26528d;font-size:12px;font-weight:850;white-space:nowrap}
      .brand-node:before{content:"";width:10px;height:10px;border-radius:50%;background:#3479ff;box-shadow:0 0 0 5px rgba(52,121,255,.09)}
      .brand-node.local:before{background:#52d2a0;box-shadow:0 0 0 5px rgba(82,210,160,.11)}
      .brand-node.student{left:2%;top:30%}.brand-node.local{right:0;top:47%}
      .brand-art-caption{position:absolute;bottom:55px;padding:9px 13px;border-radius:12px;background:rgba(255,255,255,.72);color:#57708f;font-size:11px;font-weight:800;letter-spacing:.02em}

      #homeQuickStart{padding:0 0 58px!important}
      #homeQuickStart .simple-home-panel{padding:0!important;border:0!important;background:transparent!important;box-shadow:none!important;border-radius:0!important}
      #homeQuickStart .simple-home-head,#homeQuickStart .simple-start-actions,#homeQuickStart .simple-flow-steps{display:none!important}
      #homeQuickStart .simple-examples{display:grid!important;grid-template-columns:repeat(3,1fr)!important;gap:0!important;background:#fff!important;border:1px solid #e3eaf3!important;border-radius:22px!important;overflow:hidden!important;box-shadow:0 16px 38px rgba(15,58,130,.055)!important}
      #homeQuickStart .simple-example{min-height:128px!important;border:0!important;border-radius:0!important;padding:24px 26px!important;background:#fff!important;box-shadow:none!important;position:relative!important}
      #homeQuickStart .simple-example+ .simple-example:before{content:"";position:absolute;left:0;top:24px;bottom:24px;width:1px;background:#e7edf5}
      #homeQuickStart .simple-example span{display:none!important}
      #homeQuickStart .simple-example b{font-size:17px!important;color:#153876!important;margin:0 0 7px!important}
      #homeQuickStart .simple-example small{font-size:12px!important;color:#71819a!important;line-height:1.6!important}
      #homeQuickStart .simple-example strong{font-size:11px!important;color:#2a9f78!important;margin-top:8px!important}
      #homeQuickStart .simple-example:hover{transform:none!important;background:#fbfdff!important}

      .section{padding:54px 0!important}
      .section-head{max-width:820px!important;margin-bottom:24px!important}
      .section-head>span{font-size:10px!important;color:#2a63d9!important;letter-spacing:.12em!important}
      .section-head h2{color:#102f6a!important;font-size:clamp(32px,3.7vw,46px)!important;line-height:1.18!important;letter-spacing:-.055em!important;margin:7px 0 10px!important}
      .section-head p{font-size:14px!important;line-height:1.75!important;color:#687c98!important}

      #challenges{padding-top:48px!important}
      .project-findbar{border-color:#e1e8f2!important;border-radius:18px!important;box-shadow:0 10px 30px rgba(15,58,130,.045)!important}
      .project-search{background:#fbfdff!important;border-color:#dbe5f1!important;font-size:14px!important}
      #challenges .filterbar button{background:#fff!important;color:#58708f!important;border-color:#dce5ef!important}
      #challenges .filterbar button.active{background:#1354e9!important;border-color:#1354e9!important;color:#fff!important}
      .bench-project-card{border-color:#e0e8f2!important;border-radius:20px!important;box-shadow:0 8px 28px rgba(15,58,130,.04)!important}
      .bench-project-card:hover{border-color:#bcd0ea!important;box-shadow:0 15px 34px rgba(15,58,130,.08)!important}
      .bench-chip{background:#edf4ff!important;color:#245cc8!important}.bench-status{background:#edfaf5!important;color:#208763!important}
      .bench-impact{background:#f1fbf7!important;border-color:#dcefe7!important}
      .bench-card-action{background:linear-gradient(135deg,#1357f5,#0c45d1)!important;border-radius:12px!important}

      #lab .workspace,#my-projects,#activity-records,#reviews,#safety{max-width:960px!important;margin-left:auto!important;margin-right:auto!important}
      #problemForm,.panel,.record-editor,.record-preview-wrap,.review-form,.review-board,.safety-card,.report-mock-card,.my-project-card{border-color:#e1e8f2!important;box-shadow:0 10px 32px rgba(15,58,130,.045)!important}
      .field input,.field select,.field textarea,.record-field input,.record-field textarea,.review-field input,.review-field select,.review-field textarea,.mock-field input,.mock-field select,.mock-field textarea{background:#fbfdff!important;border-color:#dbe5f1!important}
      .btn.primary,#problemForm .analyze{background:linear-gradient(135deg,#1458f5,#0c43cd)!important;border-color:transparent!important;color:#fff!important}
      .my-hub-nav button.active{background:#1354e9!important;border-color:#1354e9!important}
      .project-state{background:#edf4ff!important;color:#245cc8!important}.project-state.done{background:#edfaf5!important;color:#208763!important}

      footer{background:#fff!important;border-top:1px solid #e8edf4!important;color:#71829b!important}

      @media(max-width:900px){
        header{height:auto}.header-inner{min-height:70px!important;grid-template-columns:auto 1fr!important;gap:14px!important}.brand-main-nav{display:none}.brand-header-actions{justify-self:end}.brand-header-cta:not(.primary){display:none}
        .brand-wordmark{font-size:22px}.brand-icon{width:40px;height:40px;border-radius:12px}
        .hero{min-height:auto!important;grid-template-columns:1fr!important;gap:22px!important;padding-top:44px!important}
        .brand-hero-copy{max-width:680px}.brand-hero-title{font-size:clamp(45px,9vw,64px)!important}.brand-hero-art{min-height:350px}.brand-hero-icon{width:210px;height:210px;border-radius:46px}.brand-orbit{width:390px;height:250px}.brand-node.student{left:2%;top:25%}.brand-node.local{right:1%;top:55%}
        #homeQuickStart .simple-examples{grid-template-columns:1fr!important}.simple-example+ .simple-example:before{left:24px!important;right:24px!important;top:0!important;bottom:auto!important;width:auto!important;height:1px!important}
      }
      @media(max-width:560px){
        .shell,.hero{width:min(100% - 28px,1180px)!important}.header-inner{width:min(100% - 28px,1180px)!important}.brand-header-cta.primary{min-height:40px;padding:0 14px;font-size:12px}
        .brand-hero-eyebrow{font-size:13px}.brand-hero-title{font-size:42px!important;line-height:1.1!important}.brand-hero-desc{font-size:15px}.brand-hero-actions{display:grid;grid-template-columns:1fr 1fr}.brand-hero-actions button{padding:0 12px;font-size:13px}
        .brand-hero-art{min-height:300px}.brand-hero-icon{width:176px;height:176px;border-radius:40px}.brand-orbit{width:315px;height:205px}.brand-node{font-size:10px;padding:8px 10px}.brand-node.student{left:0;top:23%}.brand-node.local{right:0;top:58%}.brand-art-caption{bottom:25px;font-size:9px}
        #homeQuickStart{padding-bottom:36px!important}.section{padding:42px 0!important}
      }
    `;
    document.head.appendChild(style);
  }

  function rewriteHeader() {
    const inner = $('.header-inner');
    if (!inner) return;
    inner.innerHTML = `
      <a class="brand" href="#home" aria-label="SMU.Link 홈">
        <img class="brand-icon" src="/smulink-icon.svg" alt="SMU.Link" />
        <span class="brand-wordmark">SMU.Link</span>
      </a>
      <nav class="brand-main-nav" aria-label="주요 메뉴">
        <button type="button" data-brand-view="home">홈</button>
        <button type="button" data-brand-view="projects">프로젝트</button>
        <button type="button" data-brand-view="create">프로젝트 만들기</button>
        <button type="button" data-brand-view="my">내 활동</button>
      </nav>
      <div class="brand-header-actions">
        <button class="brand-header-cta" type="button" data-brand-view="projects">둘러보기</button>
        <button class="brand-header-cta primary" type="button" data-brand-view="create">프로젝트 만들기</button>
      </div>`;
  }

  function rewriteHero() {
    const hero = $('.hero');
    if (!hero) return;
    hero.innerHTML = `
      <div class="brand-hero-copy">
        <p class="brand-hero-eyebrow">상명대학교와 지역사회를 잇는 플랫폼</p>
        <h1 class="brand-hero-title">함께 만드는<br><em>더 가까운</em> 지역</h1>
        <p class="brand-hero-desc"><b>SMU.Link는 상명대학교 학생과 종로의 주민·상인·기관을 연결합니다.</b><br>학생의 전공 역량과 지역의 경험을 한 팀으로 이어, 함께 프로젝트를 만들고 결과와 활동 기록까지 남깁니다.</p>
        <div class="brand-hero-actions">
          <button class="primary" type="button" data-brand-view="projects">프로젝트 둘러보기 →</button>
          <button type="button" data-brand-view="create">프로젝트 만들기</button>
        </div>
      </div>
      <div class="brand-hero-art" aria-label="상명대 학생과 지역사회의 연결을 표현한 SMU.Link 비주얼">
        <div class="brand-orbit" aria-hidden="true"></div>
        <span class="brand-node student">상명대학교 학생</span>
        <img class="brand-hero-icon" src="/smulink-icon.svg" alt="SMU.Link 앱 아이콘" />
        <span class="brand-node local">지역사회 주민 · 상인 · 기관</span>
        <span class="brand-art-caption">연결되는 역량 · 함께 남는 결과</span>
      </div>`;
  }

  function simplifyHomeStrip() {
    const examples = $$('#homeQuickStart .simple-example');
    const copy = [
      ['지역의 필요에서 시작','주민·상인·기관이 필요한 일을 쉽게 제안합니다.','문제를 한 문장으로 등록'],
      ['전공과 경험을 연결','AI가 필요한 역할과 상명대 전공을 추천합니다.','사람이 최종 팀을 선택'],
      ['결과와 활동을 남김','함께 만든 결과물과 참여 과정을 기록으로 축적합니다.','SMU.Link 활동 기록서']
    ];
    examples.forEach((el, i) => {
      if (!copy[i]) return;
      el.innerHTML = `<b>${copy[i][0]}</b><small>${copy[i][1]}</small><strong>${copy[i][2]}</strong>`;
      el.dataset.brandView = i === 0 ? 'create' : i === 1 ? 'projects' : 'my';
      el.removeAttribute('data-simple-view');
    });
  }

  function navigate(view) {
    const hiddenNavButton = $(`.category-nav [data-simple-view="${view}"]`);
    if (hiddenNavButton) hiddenNavButton.click();
    else {
      location.hash = view === 'home' ? '#home' : `#${view}`;
      window.scrollTo({top:0,behavior:'smooth'});
    }
    $$('[data-brand-view]').forEach(btn => {
      if (btn.closest('.brand-main-nav')) btn.classList.toggle('active', btn.dataset.brandView === view);
    });
  }

  function bindNavigation() {
    $$('[data-brand-view]').forEach(button => button.addEventListener('click', event => {
      event.preventDefault();
      navigate(button.dataset.brandView || 'home');
    }));
    $('.brand')?.addEventListener('click', event => { event.preventDefault(); navigate('home'); });
  }

  function syncActiveNav() {
    const hash = location.hash.replace('#','');
    const view = ['projects','create','my'].includes(hash) ? hash : 'home';
    $$('[data-brand-view]').forEach(btn => {
      if (btn.closest('.brand-main-nav')) btn.classList.toggle('active', btn.dataset.brandView === view);
    });
  }

  function updateMeta() {
    document.title = 'SMU.Link | 상명대학교와 지역사회를 잇는 공동 프로젝트 플랫폼';
    $('meta[name="theme-color"]')?.setAttribute('content','#0b3fbf');
    $('meta[name="description"]')?.setAttribute('content','상명대학교 학생과 종로 지역사회의 주민·상인·기관이 함께 프로젝트를 만들고 활동과 결과를 남기는 SMU.Link');
  }

  function start() {
    addStyles();
    rewriteHeader();
    rewriteHero();
    simplifyHomeStrip();
    bindNavigation();
    syncActiveNav();
    updateMeta();
    window.addEventListener('hashchange', syncActiveNav);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();