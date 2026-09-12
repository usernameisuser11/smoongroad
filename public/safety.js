(() => {
  const $ = selector => document.querySelector(selector);

  function addStyles() {
    if ($('#smulinkSafetyStyles')) return;
    const style = document.createElement('style');
    style.id = 'smulinkSafetyStyles';
    style.textContent = `
      .safety-mock-note{display:flex;align-items:center;gap:8px;width:max-content;max-width:100%;margin:0 0 16px;padding:8px 11px;border-radius:999px;background:#eef4fa;color:#52657a;font-size:9px;font-weight:900}
      .safety-mock-note:before{content:'MOCKUP';padding:3px 6px;border-radius:999px;background:var(--primary);color:#fff;font-size:7px;letter-spacing:.08em}
      .safety-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:16px;align-items:start}
      .safety-card,.safety-flow{background:#fff;border:1px solid var(--line);border-radius:24px;padding:22px;box-shadow:0 10px 34px rgba(20,40,70,.05)}
      .safety-card h3,.safety-flow h3{margin:0 0 6px;font-size:20px;letter-spacing:-.04em}.safety-card>p,.safety-flow>p{margin:0 0 17px;color:var(--muted);font-size:10px}
      .verification-list{display:grid;gap:9px}.verification-item{display:flex;justify-content:space-between;gap:14px;align-items:center;padding:13px 14px;border-radius:15px;background:var(--surface2)}
      .verification-item b{display:block;font-size:11px}.verification-item small{display:block;margin-top:2px;color:var(--muted);font-size:9px}
      .trust-badge{display:inline-flex;flex:0 0 auto;padding:7px 9px;border-radius:999px;font-size:9px;font-weight:950;white-space:nowrap}.trust-badge.good{background:var(--green-soft);color:var(--green)}.trust-badge.warn{background:var(--orange-soft);color:#815713}.trust-badge.neutral{background:#edf1f5;color:#607184}.trust-badge.danger{background:#fff0f0;color:#a43838}
      .safety-process{display:grid;gap:8px}.safety-process article{display:grid;grid-template-columns:32px 1fr;gap:10px;align-items:start;padding:11px;border-radius:14px;background:var(--surface2)}.safety-process span{width:32px;height:32px;border-radius:10px;background:var(--primary);color:#fff;display:grid;place-items:center;font-size:9px;font-weight:950}.safety-process b{font-size:11px}.safety-process p{margin:2px 0 0;color:var(--muted);font-size:9px}
      .moderation-example{margin-top:12px;padding:12px 13px;border:1px solid #e4d3b4;background:#fff9ee;border-radius:14px;font-size:9px;color:#68583e}.moderation-example b{color:#6d4d18}
      @media(max-width:900px){.safety-grid{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  function injectSafety() {
    if ($('#safety')) return;
    addStyles();
    const section = document.createElement('section');
    section.className = 'section shell';
    section.id = 'safety';
    section.innerHTML = `
      <div class="section-head">
        <span>TRUST & SAFETY</span>
        <h2>누가 참여하는지 확인하고,<br>문제 상황은 내부적으로 관리합니다</h2>
        <p>해커톤에서는 인증 절차 자체를 구현하지 않고, 실제 서비스에서 사용될 인증·제재 상태를 목업으로 보여줍니다.</p>
      </div>
      <div class="safety-mock-note">실제 인증·차단 기능이 아닌 서비스 운영 화면 예시입니다</div>
      <div class="safety-grid">
        <section class="safety-card">
          <h3>참여자 인증 상태 예시</h3>
          <p>역할에 따라 필요한 확인 수준을 다르게 두고, 화면에서는 상태를 명확하게 표시합니다.</p>
          <div class="verification-list">
            <div class="verification-item"><div><b>상명대학교 학생</b><small>학교 소속 확인이 완료된 상태</small></div><span class="trust-badge good">학생 인증 완료</span></div>
            <div class="verification-item"><div><b>지역 기관 · 기업</b><small>기관 정보 확인을 요청한 상태</small></div><span class="trust-badge warn">인증 심사 중</span></div>
            <div class="verification-item"><div><b>주민 · 일반 참여자</b><small>기본 계정 확인 후 참여하는 상태</small></div><span class="trust-badge neutral">기본 확인</span></div>
            <div class="verification-item"><div><b>문제 행동이 확인된 계정</b><small>공개 블랙리스트 대신 내부 상태로 관리</small></div><span class="trust-badge danger">이용 제한</span></div>
          </div>
        </section>
        <section class="safety-flow">
          <h3>신고·제재 운영 흐름</h3>
          <p>신고 수만으로 자동 차단하지 않고 관리자 확인을 거치는 구조를 제안합니다.</p>
          <div class="safety-process">
            <article><span>1</span><div><b>신고 접수</b><p>허위 정보, 개인정보 요구, 괴롭힘 등 문제 상황을 접수합니다.</p></div></article>
            <article><span>2</span><div><b>관리자 검토</b><p>신고 내용과 활동 기록을 확인해 오신고 가능성까지 검토합니다.</p></div></article>
            <article><span>3</span><div><b>내부 상태 변경</b><p>정상 · 검토 중 · 일부 제한 · 이용 정지 등의 상태로 관리합니다.</p></div></article>
          </div>
          <div class="moderation-example"><b>운영 원칙</b><br>사용자 이름을 공개하는 블랙리스트는 만들지 않고, 필요한 제재 상태만 서비스 내부에서 관리합니다.</div>
        </section>
      </div>`;

    const reviews = $('#reviews');
    const cta = document.querySelector('.cta');
    if (reviews) reviews.after(section);
    else if (cta) cta.before(section);
    else document.querySelector('main')?.appendChild(section);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', injectSafety);
  else injectSafety();
})();
