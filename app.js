const app = document.getElementById("app");

const state = {
  modal: null
};

function render() {
  app.innerHTML = `
    <div class="home-shell">
      <section class="home-stage">
        <div class="brand-lockup">
          <h1>JamesLingo</h1>
          <p>KAVA 12기의 무궁한 영광을 위하여.</p>
        </div>

        <div class="round-row">
          <button class="round-button round-button-primary" data-action="open-modal" data-modal="round-1">
            <span class="round-number">1회차</span>
            <span class="round-caption">바로 입장!</span>
          </button>
          <button class="round-button" data-action="open-modal" data-modal="coming-soon-2">
            <span class="round-number">2회차</span>
            <span class="round-caption">Coming Soon</span>
          </button>
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
          <p class="modal-copy">원하시는 방식을 선택하세요.</p>
          <div class="modal-actions">
            <a class="mode-card mode-card-study" href="./round-1/#flashcards">
              <span class="mode-title">플래시카드</span>
              <span class="mode-sub">차근차근 공부할래요</span>
            </a>
            <a class="mode-card mode-card-quiz" href="./round-1/#quiz">
              <span class="mode-title">모의고사</span>
              <span class="mode-sub">바로 시험 볼래요</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  const roundInfo =
    state.modal === "coming-soon-2"
      ? {
          label: "2회차",
          message: "2회차 시험은 5월 4일 ~ 8일, 온라인 자율 시험입니다."
        }
      : {
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
