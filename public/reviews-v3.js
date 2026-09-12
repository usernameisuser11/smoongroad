(() => {
  const STORAGE_KEY = 'smulink_reviews';
  const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));

  function readReviews() {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(value) ? value : [];
    } catch { return []; }
  }

  function writeReviews(reviews) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews.slice(-100)));
  }

  function toast(message) {
    const el = document.getElementById('savedToast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 2200);
  }

  function addStyles() {
    if (document.getElementById('smulinkReviewV3Styles')) return;
    const style = document.createElement('style');
    style.id = 'smulinkReviewV3Styles';
    style.textContent = `
      .review-wrap{display:grid;grid-template-columns:.9fr 1.1fr;gap:16px;align-items:start}
      .review-form,.review-board{background:#fff;border:1px solid var(--line);border-radius:24px;padding:22px;box-shadow:0 10px 34px rgba(20,40,70,.05)}
      .review-form h3,.review-board h3{margin:0 0 6px;font-size:20px;letter-spacing:-.04em}
      .review-form>p,.review-board>p{margin:0 0 17px;color:var(--muted);font-size:10px}
      .review-field{display:grid;gap:6px;margin-bottom:12px}.review-field label{font-size:9px;font-weight:950;color:#52657a}
      .review-field input,.review-field select,.review-field textarea{width:100%;border:1px solid var(--line);border-radius:12px;background:#f9fbfd;padding:11px;outline:0}
      .review-field textarea{min-height:72px;resize:vertical}.review-field input:focus,.review-field select:focus,.review-field textarea:focus{border-color:var(--primary2);box-shadow:0 0 0 3px rgba(30,90,149,.09)}
      .review-row{display:grid;grid-template-columns:1fr 1fr;gap:9px}
      .star-rating{display:flex;align-items:center;gap:4px;min-height:45px;padding:7px 10px;border:1px solid var(--line);border-radius:12px;background:#f9fbfd}
      .star-rating button{border:0;background:transparent;padding:0 2px;font-size:25px;line-height:1;color:#c8d1dc;cursor:pointer;transition:.15s;transform-origin:center}
      .star-rating button.active{color:#d99a24}.star-rating button:hover{transform:scale(1.08)}
      .star-rating small{margin-left:7px;color:var(--muted);font-size:9px;font-weight:850}
      .review-consent{display:flex;align-items:flex-start;gap:8px;padding:11px;border-radius:13px;background:var(--surface2);font-size:9px;color:#53667a;margin:11px 0}.review-consent input{margin-top:2px}
      .review-submit{width:100%}.review-list{display:grid;gap:10px}.review-card{border:1px solid var(--line);border-radius:18px;padding:16px;background:linear-gradient(145deg,#fff,#f8fbfe)}
      .review-card-top{display:flex;justify-content:space-between;gap:12px;align-items:start}.review-card-top strong{font-size:12px}.review-card-top span{font-size:9px;color:var(--muted)}
      .review-stars{font-size:14px;letter-spacing:1px;color:#d99a24;font-weight:950;white-space:nowrap}.review-card dl{margin:12px 0 0;display:grid;gap:8px}.review-card dt{font-size:8px;font-weight:950;color:var(--primary2);letter-spacing:.04em}.review-card dd{margin:2px 0 0;font-size:10px;color:#52657a}
      .review-empty{padding:36px 18px;text-align:center;background:var(--surface2);border-radius:18px;color:var(--muted);font-size:10px}.review-empty b{display:block;color:var(--text);font-size:13px;margin-bottom:4px}
      .review-count{display:inline-flex;margin-bottom:12px;padding:6px 9px;border-radius:999px;background:var(--green-soft);color:var(--green);font-size:9px;font-weight:950}
      @media(max-width:900px){.review-wrap{grid-template-columns:1fr}}@media(max-width:640px){.review-row{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  function renderReviews() {
    const list = document.getElementById('reviewList');
    const count = document.getElementById('reviewCount');
    if (!list) return;
    const publicReviews = readReviews().filter(item => item.isPublic).sort((a,b) => String(b.createdAt).localeCompare(String(a.createdAt)));
    if (count) count.textContent = `공개 후기 ${publicReviews.length}개`;
    if (!publicReviews.length) {
      list.innerHTML = '<div class="review-empty"><b>아직 공개된 후기가 없어요.</b>프로젝트가 끝난 뒤 첫 후기를 남겨보세요.</div>';
      return;
    }
    list.innerHTML = publicReviews.map(item => {
      const date = item.createdAt ? new Date(item.createdAt).toLocaleDateString('ko-KR') : '';
      const rating = Math.max(1, Math.min(5, Number(item.rating) || 5));
      return `<article class="review-card"><div class="review-card-top"><div><strong>${escapeHtml(item.projectName)}</strong><br><span>${escapeHtml(item.role)} · ${escapeHtml(date)}</span></div><div class="review-stars" aria-label="만족도 ${rating}점">${'★'.repeat(rating)}${'☆'.repeat(5-rating)}</div></div><dl><div><dt>같이 하면서 좋았던 점</dt><dd>${escapeHtml(item.goodPoint)}</dd></div><div><dt>상대 세대에 대해 새롭게 알게 된 점</dt><dd>${escapeHtml(item.learned)}</dd></div><div><dt>다음에 같이 해보고 싶은 것</dt><dd>${escapeHtml(item.nextIdea)}</dd></div></dl></article>`;
    }).join('');
  }

  function injectReviews() {
    if (document.getElementById('reviews')) return;
    addStyles();
    const section = document.createElement('section');
    section.className = 'section shell';
    section.id = 'reviews';
    section.innerHTML = `
      <div class="section-head"><span>PROJECT REVIEW</span><h2>프로젝트가 끝난 뒤, 서로 무엇을 배웠는지 남깁니다</h2><p>지역사회 참여 범위가 넓어져도 사용할 수 있도록 프로젝트명은 작성자가 직접 입력합니다.</p></div>
      <div class="review-wrap">
        <form class="review-form" id="reviewForm">
          <h3>간단 후기 남기기</h3><p>프로젝트명과 함께한 경험만 간단히 기록합니다.</p>
          <div class="review-field"><label for="reviewProjectTitle">참여한 프로젝트명</label><input id="reviewProjectTitle" maxlength="160" required placeholder="예: 부암동 복지관 디지털 안내 개선 프로젝트"></div>
          <div class="review-row">
            <div class="review-field"><label for="reviewRole">나는 어떤 참여자였나요?</label><select id="reviewRole" required><option>학생</option><option>주민</option><option>상인</option><option>기관·단체</option><option>기타</option></select></div>
            <div class="review-field"><label>전체 만족도</label><div class="star-rating" id="reviewStarRating" role="radiogroup" aria-label="전체 만족도"><button type="button" data-star="1" aria-label="별 1개">★</button><button type="button" data-star="2" aria-label="별 2개">★</button><button type="button" data-star="3" aria-label="별 3개">★</button><button type="button" data-star="4" aria-label="별 4개">★</button><button type="button" data-star="5" aria-label="별 5개">★</button><small id="reviewStarText">5점 · 매우 만족</small></div><input type="hidden" id="reviewRating" value="5"></div>
          </div>
          <div class="review-field"><label for="reviewGood">같이 하면서 가장 좋았던 점</label><textarea id="reviewGood" maxlength="400" required placeholder="예: 주민과 학생이 처음부터 같이 문제를 정해서 실제 공동 프로젝트라는 느낌이 들었습니다."></textarea></div>
          <div class="review-field"><label for="reviewLearned">상대 세대에 대해 새롭게 알게 된 점</label><textarea id="reviewLearned" maxlength="400" required placeholder="예: 지역에서 오래 살아온 분들이 가진 생활 경험이 서비스 개선에 큰 도움이 됐습니다."></textarea></div>
          <div class="review-field"><label for="reviewNext">다음에 같이 해보고 싶은 것</label><textarea id="reviewNext" maxlength="400" required placeholder="예: 다음에는 다른 동네와 기관까지 함께해 보고 싶습니다."></textarea></div>
          <label class="review-consent"><input type="checkbox" id="reviewPublic" checked><span>이 후기를 SMU.Link의 공개 후기 카드에 익명으로 표시하는 데 동의합니다.</span></label>
          <button class="btn primary review-submit" type="submit">후기 저장하기</button>
        </form>
        <section class="review-board" aria-live="polite"><h3>함께한 사람들의 후기</h3><p>공개에 동의한 후기만 표시됩니다.</p><span class="review-count" id="reviewCount">공개 후기 0개</span><div class="review-list" id="reviewList"></div></section>
      </div>`;

    const cta = document.querySelector('.cta');
    if (cta) cta.before(section); else document.querySelector('main')?.appendChild(section);

    const labels = ['1점 · 많이 아쉬움','2점 · 아쉬움','3점 · 보통','4점 · 만족','5점 · 매우 만족'];
    const ratingInput = document.getElementById('reviewRating');
    const starText = document.getElementById('reviewStarText');
    const stars = [...document.querySelectorAll('#reviewStarRating [data-star]')];
    const setRating = value => {
      const rating = Math.max(1, Math.min(5, Number(value) || 5));
      ratingInput.value = String(rating);
      stars.forEach(button => {
        const active = Number(button.dataset.star) <= rating;
        button.classList.toggle('active', active);
        button.setAttribute('aria-checked', String(Number(button.dataset.star) === rating));
      });
      starText.textContent = labels[rating - 1];
    };
    stars.forEach(button => button.addEventListener('click', () => setRating(button.dataset.star)));
    setRating(5);

    document.getElementById('reviewForm').addEventListener('submit', event => {
      event.preventDefault();
      const projectName = document.getElementById('reviewProjectTitle').value.trim();
      const goodPoint = document.getElementById('reviewGood').value.trim();
      const learned = document.getElementById('reviewLearned').value.trim();
      const nextIdea = document.getElementById('reviewNext').value.trim();
      if (!projectName || !goodPoint || !learned || !nextIdea) return;
      const review = {
        id: globalThis.crypto?.randomUUID?.() || `review-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        projectName,
        role: document.getElementById('reviewRole').value,
        rating: Number(ratingInput.value),
        goodPoint,
        learned,
        nextIdea,
        isPublic: document.getElementById('reviewPublic').checked,
        createdAt: new Date().toISOString(),
      };
      const reviews = readReviews();
      reviews.push(review);
      writeReviews(reviews);
      event.currentTarget.reset();
      document.getElementById('reviewPublic').checked = true;
      setRating(5);
      renderReviews();
      toast(review.isPublic ? '후기를 저장하고 공개 목록에 추가했습니다.' : '후기를 비공개로 저장했습니다.');
    });

    renderReviews();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', injectReviews); else injectReviews();
})();