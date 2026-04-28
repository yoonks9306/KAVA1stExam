const app = document.getElementById("app");

const state = {
  modal: null
};

function render() {
  app.innerHTML = `
    <div class="home-shell">
      <section class="home-stage">
        <div class="brand-lockup">
          <img class="brand-logo-image" src="./jameslingo-logo.png" alt="JamesLingo" />
          <p>KAVA 12기의 무궁한 영광을 위하여.</p>
        </div>

        <div class="buddy-bubble" aria-hidden="true">
          <span class="buddy-face">(• ◡ •)</span>
          <span class="buddy-copy">2회차 OPEN!</span>
        </div>

        <div class="round-row">
          <button class="round-button round-button-muted" data-action="open-modal" data-modal="round-1">
            <span class="round-number">1회차</span>
            <span class="round-caption">수고하셨습니다!</span>
          </button>
          <a class="round-button round-button-primary round-button-live" href="./round-2/#quiz">
            <span class="round-number">2회차</span>
            <span class="round-caption">바로 입장!</span>
            <span class="round-sparkle">new</span>
          </a>
          <button class="round-button" data-action="open-modal" data-modal="coming-soon-3">
            <span class="round-number">3회차</span>
            <span class="round-caption">Coming Soon</span>
          </button>
        </div>
      </section>

      ${renderModal()}
    </div>
  `;
}

function renderModal() {
  if (!state.modal) return "";

  if (state.modal === "round-1") {
    return `
      <div class="modal-backdrop" data-action="close-modal">
        <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="round1-title">
          <button class="modal-close" type="button" aria-label="닫기" data-action="close-modal">×</button>
          <div class="modal-chip">1회차</div>
          <h3 id="round1-title">어떤 모드로 시작하실까요?</h3>
          <p class="modal-copy">1주차 복습도 언제든 다시 들어가실 수 있습니다.</p>
          <div class="modal-actions">
            <a class="mode-card mode-card-study" href="./round-1/#flashcards">
              <span class="mode-title">플래시카드</span>
              <span class="mode-sub">차근차근 다시 볼래요</span>
            </a>
            <a class="mode-card mode-card-quiz" href="./round-1/#quiz">
              <span class="mode-title">모의고사</span>
              <span class="mode-sub">복습 시험 볼래요</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  const roundInfo =
    {
      label: "3회차",
      message: "3회차 시험은 5월 22일입니다."
    };

  return `
    <div class="modal-backdrop" data-action="close-modal">
      <div class="modal-card modal-card-compact" role="dialog" aria-modal="true" aria-labelledby="soon-title">
        <button class="modal-close" type="button" aria-label="닫기" data-action="close-modal">×</button>
        <div class="modal-chip">${roundInfo.label}</div>
        <h2 id="soon-title">Coming Soon.</h2>
        <p class="modal-copy">${roundInfo.message}</p>
        <button class="confirm-button" type="button" data-action="close-modal">확인</button>
      </div>
    </div>
  `;
}

app.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;

  const action = actionTarget.dataset.action;

  if (action === "open-modal") {
    state.modal = actionTarget.dataset.modal;
    render();
    return;
  }

  if (action === "close-modal") {
    state.modal = null;
    render();
  }
});

render();
