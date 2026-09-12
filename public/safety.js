(() => {
  let safetyState = { authenticated: false, isAdmin: false, user: null };

  const $ = selector => document.querySelector(selector);
  const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));

  async function jsonRequest(url, options = {}) {
    const response = await fetch(url, { credentials: 'same-origin', ...options });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error(data.error || `HTTP_${response.status}`);
      error.status = response.status;
      throw error;
    }
    return data;
  }

  function toast(message) {
    const el = $('#savedToast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 2300);
  }

  function badgeLabel(user) {
    if (!user) return ['로그인 필요', 'neutral'];
    if (user.accountStatus === 'limited') return ['일부 기능 제한', 'warn'];
    if (user.accountStatus === 'suspended') return ['이용 정지', 'danger'];
    if (user.accountStatus === 'banned') return ['영구 이용 제한', 'danger'];
    if (user.verificationStatus === 'verified') {
      if (user.role === 'student') return ['상명대 학생 인증', 'good'];
      if (user.role === 'organization') return ['인증된 기관', 'good'];
      return ['인증 완료', 'good'];
    }
    if (user.verificationStatus === 'pending') return ['인증 심사 중', 'warn'];
    if (user.verificationStatus === 'basic') return ['로그인 확인', 'good'];
    if (user.verificationStatus === 'rejected') return ['인증 반려', 'danger'];
    return ['미인증', 'neutral'];
  }

  function addStyles() {
    if ($('#smulinkSafetyStyles')) return;
    const style = document.createElement('style');
    style.id = 'smulinkSafetyStyles';
    style.textContent = `
      .safety-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:16px;align-items:start}.safety-card,.report-card,.admin-card{background:#fff;border:1px solid var(--line);border-radius:24px;padding:22px;box-shadow:0 10px 34px rgba(20,40,70,.05)}.safety-card h3,.report-card h3,.admin-card h3{margin:0 0 6px;font-size:20px}.safety-card>p,.report-card>p,.admin-card>p{margin:0 0 16px;color:var(--muted);font-size:10px}.trust-state{display:flex;justify-content:space-between;gap:10px;align-items:center;padding:13px;border-radius:15px;background:var(--surface2);margin-bottom:14px}.trust-state b{font-size:12px}.trust-state small{display:block;font-size:9px;color:var(--muted);margin-top:2px}.trust-badge{display:inline-flex;padding:7px 9px;border-radius:999px;font-size:9px;font-weight:950;white-space:nowrap}.trust-badge.good{background:var(--green-soft);color:var(--green)}.trust-badge.warn{background:var(--orange-soft);color:#815713}.trust-badge.danger{background:#fff0f0;color:#a43838}.trust-badge.neutral{background:#edf1f5;color:#607184}.safety-field{display:grid;gap:6px;margin-bottom:11px}.safety-field label{font-size:9px;font-weight:950;color:#52657a}.safety-field input,.safety-field select,.safety-field textarea{width:100%;border:1px solid var(--line);border-radius:12px;background:#f9fbfd;padding:11px;outline:0}.safety-field textarea{min-height:78px;resize:vertical}.safety-note{padding:11px;border-radius:13px;background:#f7fbff;border:1px solid #d8e6f2;font-size:9px;color:#53667a;margin:10px 0}.auth-buttons{display:flex;gap:8px;flex-wrap:wrap}.auth-buttons a{padding:10px 12px;border:1px solid var(--line);border-radius:12px;background:#fff;font-size:10px;font-weight:900}.auth-buttons a.primary{background:var(--primary);border-color:var(--primary);color:#fff}.safety-actions{display:flex;gap:8px;flex-wrap:wrap}.safety-actions .btn{min-height:42px;font-size:10px}.safety-admin{margin-top:16px}.admin-table{display:grid;gap:8px}.admin-row{display:grid;grid-template-columns:1.2fr .8fr .8fr auto;gap:8px;align-items:center;padding:11px;border:1px solid var(--line);border-radius:14px;font-size:9px}.admin-row b{font-size:10px}.admin-row small{display:block;color:var(--muted)}.admin-row select,.admin-row input{border:1px solid var(--line);border-radius:9px;padding:8px;background:#f9fbfd;font-size:9px}.admin-row button{border:0;border-radius:9px;padding:8px 10px;background:var(--primary);color:#fff;font-size:9px;font-weight:900}.report-item{padding:11px;border:1px solid var(--line);border-radius:14px;font-size:9px}.report-item b{font-size:10px}.report-item p{margin:5px 0;color:#53667a}.report-item select{border:1px solid var(--line);border-radius:9px;padding:7px;background:#f9fbfd}.safety-empty{padding:24px;text-align:center;border-radius:16px;background:var(--surface2);font-size:10px;color:var(--muted)}#challengeReportBtn{background:#fff7e8;border-color:#ecd3a6;color:#72521b}@media(max-width:900px){.safety-grid{grid-template-columns:1fr}.admin-row{grid-template-columns:1fr 1fr}}@media(max-width:640px){.admin-row{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  async function loadAuthProviders() {
    try { return await jsonRequest('/api/auth/providers'); } catch { return { google:false, kakao:false, database:false }; }
  }

  function roleLabel(role) {
    return ({student:'학생',resident:'주민·일반 사용자',organization:'기업·단체'})[role] || '역할 미설정';
  }

  function renderIdentityCard() {
    const box = $('#safetyIdentity');
    if (!box) return;
    if (!safetyState.authenticated) {
      box.innerHTML = '<div class="safety-empty">로그인 상태를 확인하는 중입니다.</div>';
      return;
    }
    const user = safetyState.user;
    const [label, cls] = badgeLabel(user);
    box.innerHTML = `<div class="trust-state"><div><b>${escapeHtml(user.displayName || 'SMU.Link 사용자')}</b><small>${escapeHtml(roleLabel(user.role))}${user.organizationName ? ` · ${escapeHtml(user.organizationName)}` : ''}</small></div><span class="trust-badge ${cls}">${escapeHtml(label)}</span></div>
      <form id="safetyProfileForm">
        <div class="safety-field"><label for="safetyRole">활동 역할</label><select id="safetyRole"><option value="student" ${user.role==='student'?'selected':''}>상명대 학생</option><option value="resident" ${user.role==='resident'||!user.role?'selected':''}>주민·일반 사용자</option><option value="organization" ${user.role==='organization'?'selected':''}>기업·단체</option></select></div>
        <div class="safety-field" id="organizationNameWrap"><label for="organizationName">기업·단체명</label><input id="organizationName" maxlength="180" value="${escapeHtml(user.organizationName || '')}" placeholder="예: 종로구 ○○기관"></div>
        <div class="safety-field"><label for="verificationNote">인증 확인 메모</label><textarea id="verificationNote" maxlength="500" placeholder="학생: 학교 이메일/소속 확인에 필요한 최소 정보 · 기관: 공식 사이트나 담당 부서 등"></textarea></div>
        <div class="safety-note">학생·기관 인증은 자동 확정하지 않습니다. 요청 후 관리자가 확인해 승인합니다. 주민·일반 사용자는 OAuth 로그인 확인 상태로 참여하며, 실제 운영 단계에서는 필요 시 휴대폰 인증 등을 추가할 수 있습니다.</div>
        <div class="safety-actions"><button class="btn primary" type="submit">역할·인증 정보 저장</button><button class="btn" id="safetyLogout" type="button">로그아웃</button></div>
      </form>`;
    const role = $('#safetyRole');
    const updateRole = () => { $('#organizationNameWrap').style.display = role.value === 'organization' ? 'grid' : 'none'; };
    role.addEventListener('change', updateRole); updateRole();
    $('#safetyProfileForm').addEventListener('submit', saveProfile);
    $('#safetyLogout').addEventListener('click', logout);
  }

  async function renderLoggedOut(providers) {
    const box = $('#safetyIdentity');
    if (!box) return;
    const links = [];
    if (providers.google) links.push('<a class="primary" href="/api/auth/google/start?returnTo=/local.html%23safety">Google로 로그인</a>');
    if (providers.kakao) links.push('<a href="/api/auth/kakao/start?returnTo=/local.html%23safety">Kakao로 로그인</a>');
    box.innerHTML = `<div class="trust-state"><div><b>로그인이 필요합니다</b><small>프로젝트 참여·인증 요청·신고는 로그인 후 이용할 수 있습니다.</small></div><span class="trust-badge neutral">미로그인</span></div>${links.length?`<div class="auth-buttons">${links.join('')}</div>`:'<div class="safety-empty">OAuth 또는 데이터베이스 설정이 아직 완료되지 않았습니다.</div>'}`;
  }

  async function saveProfile(event) {
    event.preventDefault();
    try {
      const data = await jsonRequest('/api/safety/profile', {
        method: 'PUT',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({
          role: $('#safetyRole').value,
          organizationName: $('#organizationName')?.value.trim() || '',
          verificationNote: $('#verificationNote').value.trim(),
        }),
      });
      safetyState = data;
      renderIdentityCard();
      if (safetyState.isAdmin) await renderAdmin();
      toast('역할과 인증 요청 정보를 저장했습니다.');
    } catch (error) { toast(`저장 실패: ${error.message}`); }
  }

  async function logout() {
    try {
      await jsonRequest('/api/auth/logout', { method:'POST', headers:{'content-type':'application/json'}, body:'{}' });
      safetyState = { authenticated:false, isAdmin:false, user:null };
      await refreshSafety();
      toast('로그아웃했습니다.');
    } catch (error) { toast(`로그아웃 실패: ${error.message}`); }
  }

  async function submitReport(event) {
    event.preventDefault();
    if (!safetyState.authenticated) { toast('신고는 로그인 후 이용할 수 있습니다.'); return; }
    try {
      await jsonRequest('/api/safety/reports', {
        method:'POST', headers:{'content-type':'application/json'},
        body: JSON.stringify({targetType:$('#reportTargetType').value,targetId:$('#reportTargetId').value.trim(),reason:$('#reportReason').value,detail:$('#reportDetail').value.trim()}),
      });
      event.currentTarget.reset();
      toast('신고가 접수되었습니다. 관리자가 검토합니다.');
      if (safetyState.isAdmin) await renderAdmin();
    } catch (error) { toast(error.message === 'AUTH_REQUIRED' ? '로그인 후 신고할 수 있습니다.' : `신고 실패: ${error.message}`); }
  }

  function injectChallengeReportButton() {
    const actions = $('#challengeDialog .dialog-actions');
    if (!actions || $('#challengeReportBtn')) return;
    const button = document.createElement('button');
    button.className = 'btn'; button.type = 'button'; button.id = 'challengeReportBtn'; button.textContent = '신고하기';
    actions.prepend(button);
    button.addEventListener('click', () => {
      const title = $('#dialogTitle')?.textContent?.trim() || '프로젝트';
      $('#challengeDialog')?.close();
      if ($('#reportTargetType')) $('#reportTargetType').value = 'project';
      if ($('#reportTargetId')) $('#reportTargetId').value = title;
      $('#safety')?.scrollIntoView({behavior:'smooth',block:'start'});
      setTimeout(() => $('#reportDetail')?.focus(), 450);
    });
  }

  function restrictedMessage() {
    const user = safetyState.user;
    if (!safetyState.authenticated) return '프로젝트 참여는 로그인 후 이용할 수 있습니다.';
    if (!user) return '';
    if (user.accountStatus === 'limited') return '현재 계정은 일부 기능이 제한되어 프로젝트 참여를 할 수 없습니다.';
    if (user.accountStatus === 'suspended') return '현재 계정은 이용 정지 상태입니다.';
    if (user.accountStatus === 'banned') return '현재 계정은 영구 이용 제한 상태입니다.';
    return '';
  }

  function enforceParticipation() {
    document.addEventListener('click', event => {
      const target = event.target.closest('#saveInterest');
      if (!target) return;
      const message = restrictedMessage();
      if (!message) return;
      event.preventDefault(); event.stopImmediatePropagation(); toast(message); $('#safety')?.scrollIntoView({behavior:'smooth'});
    }, true);
    document.addEventListener('submit', event => {
      if (!event.target.matches('#applyForm,#reviewForm')) return;
      const message = restrictedMessage();
      if (!message) return;
      event.preventDefault(); event.stopImmediatePropagation(); toast(message); $('#safety')?.scrollIntoView({behavior:'smooth'});
    }, true);
  }

  async function updateUser(userId, row) {
    try {
      await jsonRequest(`/api/safety/admin/users/${encodeURIComponent(userId)}`, {
        method:'PATCH', headers:{'content-type':'application/json'},
        body: JSON.stringify({accountStatus:row.querySelector('[data-account]').value,verificationStatus:row.querySelector('[data-verification]').value,reason:row.querySelector('[data-reason]').value.trim()}),
      });
      toast('사용자 상태를 저장했습니다.');
      await renderAdmin();
    } catch (error) { toast(`관리 저장 실패: ${error.message}`); }
  }

  async function updateReport(reportId, status) {
    try {
      await jsonRequest(`/api/safety/admin/reports/${encodeURIComponent(reportId)}`, {method:'PATCH',headers:{'content-type':'application/json'},body:JSON.stringify({status})});
      toast('신고 상태를 변경했습니다.'); await renderAdmin();
    } catch (error) { toast(`신고 상태 변경 실패: ${error.message}`); }
  }

  async function renderAdmin() {
    const admin = $('#safetyAdmin');
    if (!admin) return;
    if (!safetyState.isAdmin) { admin.hidden = true; admin.innerHTML = ''; return; }
    admin.hidden = false;
    admin.innerHTML = '<div class="admin-card"><h3>관리자 신뢰·안전 패널</h3><p>인증 요청과 계정 제재는 외부에 공개하지 않고 내부 상태로 관리합니다.</p><div class="safety-empty">불러오는 중...</div></div>';
    try {
      const [usersData,reportsData] = await Promise.all([jsonRequest('/api/safety/admin/users'),jsonRequest('/api/safety/admin/reports')]);
      const users = usersData.users || [], reports = reportsData.reports || [];
      admin.innerHTML = `<div class="admin-card"><h3>사용자·기관 상태 관리</h3><p>신고 횟수만으로 자동 차단하지 않고 관리자가 사유를 확인한 뒤 조치합니다.</p><div class="admin-table" id="adminUserList">${users.map(user=>`<div class="admin-row" data-user-id="${escapeHtml(user.id)}"><div><b>${escapeHtml(user.display_name || '사용자')}</b><small>${escapeHtml(user.email || '이메일 없음')} · ${escapeHtml(roleLabel(user.role))}${user.organization_name?` · ${escapeHtml(user.organization_name)}`:''}</small></div><select data-verification><option value="unverified" ${user.verification_status==='unverified'?'selected':''}>미인증</option><option value="basic" ${user.verification_status==='basic'?'selected':''}>로그인 확인</option><option value="pending" ${user.verification_status==='pending'?'selected':''}>심사 중</option><option value="verified" ${user.verification_status==='verified'?'selected':''}>인증</option><option value="rejected" ${user.verification_status==='rejected'?'selected':''}>반려</option></select><select data-account><option value="active" ${user.account_status==='active'?'selected':''}>정상</option><option value="limited" ${user.account_status==='limited'?'selected':''}>일부 제한</option><option value="suspended" ${user.account_status==='suspended'?'selected':''}>이용 정지</option><option value="banned" ${user.account_status==='banned'?'selected':''}>영구 제한</option></select><div><input data-reason value="${escapeHtml(user.status_reason || '')}" placeholder="조치 사유"><button type="button" data-save-user>저장</button></div></div>`).join('') || '<div class="safety-empty">사용자가 없습니다.</div>'}</div></div><div class="admin-card" style="margin-top:12px"><h3>신고 검토</h3><p>새 신고 → 검토 중 → 처리 완료/기각 순으로 관리합니다.</p><div class="admin-table" id="adminReportList">${reports.map(report=>`<div class="report-item" data-report-id="${escapeHtml(report.id)}"><b>${escapeHtml(report.target_type)} · ${escapeHtml(report.target_id)}</b><small> 신고자 ${escapeHtml(report.reporter_name || '-')} · ${new Date(report.created_at).toLocaleString('ko-KR')}</small><p>${escapeHtml(report.detail)}</p><select data-report-status><option value="new" ${report.status==='new'?'selected':''}>새 신고</option><option value="reviewing" ${report.status==='reviewing'?'selected':''}>검토 중</option><option value="resolved" ${report.status==='resolved'?'selected':''}>처리 완료</option><option value="dismissed" ${report.status==='dismissed'?'selected':''}>기각</option></select></div>`).join('') || '<div class="safety-empty">접수된 신고가 없습니다.</div>'}</div></div>`;
      admin.querySelectorAll('[data-save-user]').forEach(button=>button.addEventListener('click',()=>{const row=button.closest('[data-user-id]');updateUser(row.dataset.userId,row);}));
      admin.querySelectorAll('[data-report-status]').forEach(select=>select.addEventListener('change',()=>updateReport(select.closest('[data-report-id]').dataset.reportId,select.value)));
    } catch (error) { admin.innerHTML = `<div class="admin-card"><h3>관리자 패널</h3><div class="safety-empty">불러오기 실패: ${escapeHtml(error.message)}</div></div>`; }
  }

  function injectSafety() {
    if ($('#safety')) return;
    addStyles();
    const section = document.createElement('section');
    section.className = 'section shell'; section.id = 'safety';
    section.innerHTML = `<div class="section-head"><span>TRUST & SAFETY</span><h2>누가 참여하는지 확인하고, 문제 행동은 내부적으로 관리합니다</h2><p>공개 블랙리스트 대신 역할·인증 상태와 관리자 제재 상태를 사용합니다. 신고만으로 자동 차단하지 않고 검토 후 제한합니다.</p></div><div class="safety-grid"><section class="safety-card"><h3>내 신뢰 상태</h3><p>Google/Kakao 로그인 후 학생·주민·기업·단체 역할을 등록할 수 있습니다.</p><div id="safetyIdentity"><div class="safety-empty">로그인 상태 확인 중...</div></div></section><form class="report-card" id="safetyReportForm"><h3>신고하기</h3><p>허위 정보·개인정보 요구·괴롭힘 등 문제가 있을 때 관리자에게 전달합니다.</p><div class="safety-field"><label for="reportTargetType">신고 대상</label><select id="reportTargetType"><option value="project">프로젝트</option><option value="user">사용자</option><option value="organization">기업·단체</option></select></div><div class="safety-field"><label for="reportTargetId">대상 이름 또는 식별 정보</label><input id="reportTargetId" required maxlength="200" placeholder="예: 종로 세대 공동기억 지도 / 사용자 닉네임"></div><div class="safety-field"><label for="reportReason">신고 사유</label><select id="reportReason"><option value="inappropriate">부적절한 언행</option><option value="no_show">반복적 약속 불이행</option><option value="false_info">허위 정보</option><option value="commercial">영리 목적·홍보</option><option value="privacy">과도한 개인정보 요구</option><option value="harassment">괴롭힘·위협</option><option value="other">기타</option></select></div><div class="safety-field"><label for="reportDetail">상세 내용</label><textarea id="reportDetail" required maxlength="1200" placeholder="관리자가 상황을 판단할 수 있도록 사실 중심으로 적어주세요."></textarea></div><div class="safety-note">신고 횟수만으로 자동 제재하지 않습니다. 관리자가 내용을 검토한 뒤 정상·일부 제한·이용 정지·영구 제한 상태를 결정합니다.</div><button class="btn primary" type="submit">신고 접수</button></form></div><div class="safety-admin" id="safetyAdmin" hidden></div>`;
    const reviews = $('#reviews');
    if (reviews) reviews.before(section); else $('.cta')?.before(section);
    $('#safetyReportForm').addEventListener('submit', submitReport);
    injectChallengeReportButton();
    enforceParticipation();
  }

  async function refreshSafety() {
    const providers = await loadAuthProviders();
    try { safetyState = await jsonRequest('/api/safety/me'); } catch { safetyState = {authenticated:false,isAdmin:false,user:null}; }
    if (safetyState.authenticated) renderIdentityCard(); else await renderLoggedOut(providers);
    await renderAdmin();
    window.SMULinkSafety = { state: safetyState, refresh: refreshSafety };
  }

  async function start() {
    injectSafety();
    await refreshSafety();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
