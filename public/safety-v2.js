(() => {
  const $ = selector => document.querySelector(selector);

  function toast(message) {
    const el = $('#savedToast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 2300);
  }

  function addStyles() {
    if ($('#smulinkSafetyV2Styles')) return;
    const style = document.createElement('style');
    style.id = 'smulinkSafetyV2Styles';
    style.textContent = `
      .safety-mock-note{display:flex;align-items:center;gap:8px;width:max-content;max-width:100%;margin:0 0 16px;padding:8px 11px;border-radius:999px;background:#eef4fa;color:#52657a;font-size:9px;font-weight:900}
      .safety-mock-note:before{content:'MOCKUP';padding:3px 6px;border-radius:999px;background:var(--primary);color:#fff;font-size:7px;letter-spacing:.08em}
      .safety-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;align-items:start}
      .safety-card,.report-mock-card,.safety-flow{background:#fff;border:1px solid var(--line);border-radius:24px;padding:22px;box-shadow:0 10px 34px rgba(20,40,70,.05)}
      .safety-card h3,.report-mock-card h3,.safety-flow h3{margin:0 0 6px;font-size:20px;letter-spacing:-.04em}.safety-card>p,.report-mock-card>p,.safety-flow>p{margin:0 0 17px;color:var(--muted);font-size:10px}
      .verification-list{display:grid;gap:9px}.verification-item{display:flex;justify-content:space-between;gap:14px;align-items:center;padding:13px 14px;border-radius:15px;background:var(--surface2)}
      .verification-item b{display:block;font-size:11px}.verification-item small{display:block;margin-top:2px;color:var(--muted);font-size:9px}
      .trust-badge{display:inline-flex;flex:0 0 auto;padding:7px 9px;border-radius:999px;font-size:9px;font-weight:950;white-space:nowrap}.trust-badge.good{background:var(--green-soft);color:var(--green)}.trust-badge.warn{background:var(--orange-soft);color:#815713}.trust-badge.neutral{background:#edf1f5;color:#607184}.trust-badge.danger{background:#fff0f0;color:#a43838}
      .mock-field{display:grid;gap:6px;margin-bottom:11px}.mock-field label{font-size:9px;font-weight:950;color:#52657a}.mock-field input,.mock-field select,.mock-field textarea{width:100%;border:1px solid var(--line);border-radius:12px;background:#f9fbfd;padding:11px;outline:0}.mock-field textarea{min-height:78px;resize:vertical}
      .mock-field input:focus,.mock-field select:focus,.mock-field textarea:focus{border-color:var(--primary2);box-shadow:0 0 0 3px rgba(30,90,149,.09)}
      .report-mock-note{margin:10px 0 12px;padding:11px;border-radius:13px;background:#f7fbff;border:1px solid #d8e6f2;color:#53667a;font-size:9px}
      .safety-flow{margin-top:16px}.safety-process{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.safety-process article{display:grid;grid-template-columns:32px 1fr;gap:10px;align-items:start;padding:11px;border-radius:14px;background:var(--surface2)}.safety-process span{width:32px;height:32px;border-radius:10px;background:var(--primary);color:#fff;display:grid;place-items:center;font-size:9px;font-weight:950}.safety-process b{font-size:11px}.safety-process p{margin:2px 0 0;color:var(--muted);font-size:9px}
      .moderation-example{margin-top:12px;padding:12px 13px;border:1px solid #e4d3b4;background:#fff9ee;border-radius:14px;font-size:9px;color:#68583e}.moderation-example b{color:#6d4d18}
      @media(max-width:900px){.safety-grid{grid-template-columns:1fr}.safety-process{grid-template-columns:1fr}}
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
        <p>해커톤에서는 실제 인증·제재 시스템을 구현하지 않고, 운영 시 필요한 상태와 신고 흐름을 목업으로 보여줍니다.</p>
      </div>
      <div class="safety-mock-note">실제 인증·차단·신고 전송 기능이 아닌 서비스 운영 화면 예시입니다</div>
      <div class="safety-grid">
        <section class="safety-card">
          <h3>참여자 인증 상태 예시</h3>
          <p>역할에 따라 필요한 확인 수준을 다르게 두고, 사용자는 현재 상태를 한눈에 확인합니다.</p>
          <div class="verification-list">
            <div class="verification-item"><div><b>상명대학교 학생</b><small>학교 소속 확인이 완료된 상태</small></div><span class="trust-badge good">학생 인증 완료</span></div>
            <div class="verification-item"><div><b>지역 기관 · 기업</b><small>기관·단체 정보 확인을 요청한 상태</small></div><span class="trust-badge warn">인증 심사 중</span></div>
            <div class="verification-item"><div><b>주민 · 상인</b><small>기본 계정 확인 후 참여하는 상태</small></div><span class="trust-badge neutral">기본 확인</span></div>
            <div class="verification-item"><div><b>문제 행동이 확인된 계정</b><small>공개 명단이 아니라 내부 상태로 관리</small></div><span class="trust-badge danger">이용 제한</span></div>
          </div>
        </section>

        <form class="report-mock-card" id="reportMockForm">
          <h3>신고하기 화면 예시</h3>
          <p>‘사용자’처럼 넓은 분류 대신 실제 참여 주체를 구분해 신고 대상을 명확하게 합니다.</p>
          <div class="mock-field"><label for="mockReportTargetType">신고 대상 유형</label><select id="mockReportTargetType"><option>학생</option><option>주민</option><option>상인</option><option>기업·단체</option><option>프로젝트</option></select></div>
          <div class="mock-field"><label for="mockReportTarget">대상 이름 또는 프로젝트명</label><input id="mockReportTarget" maxlength="160" placeholder="예: 참여자 닉네임 / ○○ 공동 프로젝트"></div>
          <div class="mock-field"><label for="mockReportReason">신고 사유</label><select id="mockReportReason"><option>부적절한 언행</option><option>반복적 약속 불이행</option><option>허위 정보</option><option>영리 목적·과도한 홍보</option><option>과도한 개인정보 요구</option><option>괴롭힘·위협</option><option>기타</option></select></div>
          <div class="mock-field"><label for="mockReportDetail">상세 내용</label><textarea id="mockReportDetail" maxlength="600" placeholder="관리자가 상황을 이해할 수 있도록 사실 중심으로 작성"></textarea></div>
          <div class="report-mock-note">목업 화면이므로 제출 버튼을 눌러도 실제 신고가 전송되지는 않습니다.</div>
          <button class="btn primary" type="submit">신고 접수 흐름 보기</button>
        </form>
      </div>

      <section class="safety-flow">
        <h3>신고·제재 운영 흐름</h3>
        <p>신고 횟수만으로 자동 차단하지 않고 관리자 확인을 거치는 구조를 제안합니다.</p>
        <div class="safety-process">
          <article><span>1</span><div><b>신고 접수</b><p>대상 유형과 사유, 사실관계를 함께 기록합니다.</p></div></article>
          <article><span>2</span><div><b>관리자 검토</b><p>활동 기록과 내용을 확인해 오신고 가능성도 검토합니다.</p></div></article>
          <article><span>3</span><div><b>내부 상태 변경</b><p>정상 · 검토 중 · 일부 제한 · 이용 정지 등으로 관리합니다.</p></div></article>
        </div>
        <div class="moderation-example"><b>운영 원칙</b><br>사용자 이름을 공개하는 블랙리스트는 만들지 않고, 필요한 제재 상태만 서비스 내부에서 관리합니다.</div>
      </section>`;

    const reviews = $('#reviews');
    const cta = document.querySelector('.cta');
    if (reviews) reviews.after(section);
    else if (cta) cta.before(section);
    else document.querySelector('main')?.appendChild(section);

    $('#reportMockForm')?.addEventListener('submit', event => {
      event.preventDefault();
      toast('목업입니다. 실제 서비스에서는 신고가 관리자 검토함으로 전달됩니다.');
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', injectSafety); else injectSafety();
})();