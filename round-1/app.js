import { flashcards, quizQuestions, quizRounds, meta } from "../generated/index.js";

const app = document.getElementById("app");

const CATEGORY_LABELS = {
  "vc-law": "VC 법규/조합 구조",
  "investment-terms": "투자계약/우선주/실무",
  finance: "재무/회계",
  valuation: "밸류에이션/계산형",
  "vc-principles": "VC 본질/투자판단",
  industry: "산업별 핵심"
};

const initialScreen = window.location.hash === "#quiz" ? "quiz" : "flashcards";

const state = {
  screen: initialScreen,
  cardCategory: Object.keys(CATEGORY_LABELS)[0],
  cardIndex: 0,
  showAnswer: false,
  selectedRoundId: quizRounds[0]?.id ?? null,
  quizQuestionIndex: 0,
  selectedAnswer: null,
  quizOrders: {}
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function nlToBr(value) {
  return escapeHtml(value).replace(/\n/g, "<br>");
}

function badgeClass(tag) {
  if (tag === "출제확정" || tag === "언급된 문제") return "pill is-accent";
  if (tag === "함정주의") return "pill is-danger";
  if (tag === "계산형") return "pill is-warn";
  return "pill";
}

function getCardsByCategory(category) {
  return flashcards.filter((card) => card.category === category);
}

function getCurrentCard() {
  const cards = getCardsByCategory(state.cardCategory);
  return cards[state.cardIndex] ?? null;
}

function shuffleArray(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function getBaseQuestionsForRound(roundId) {
  const round = quizRounds.find((item) => item.id === roundId);
  if (!round) return [];
  const order = new Map(round.questionIds.map((id, index) => [id, index]));
  return quizQuestions
    .filter((question) => order.has(question.id))
    .sort((a, b) => order.get(a.id) - order.get(b.id));
}

function getQuestionsForRound(roundId) {
  const questions = getBaseQuestionsForRound(roundId);
  if (!state.quizOrders[roundId]) {
    state.quizOrders[roundId] = shuffleArray(questions.map((question) => question.id));
  }

  const questionsById = new Map(questions.map((question) => [question.id, question]));
  return state.quizOrders[roundId].map((id) => questionsById.get(id)).filter(Boolean);
}

function getCurrentQuestion() {
  const questions = getQuestionsForRound(state.selectedRoundId);
  return questions[state.quizQuestionIndex] ?? null;
}

function getCorrectAnswerLabel(question) {
  if (question.type === "ox") return question.answer;
  const option = question.options?.find((item) => item.id === question.answer);
  return option ? `${option.id}. ${option.text}` : question.answer;
}

function pickFeedback(isCorrect) {
  const key = isCorrect ? "정답 피드백" : "오답 피드백";
  const pool = meta.uiCopy[key] ?? [];
  if (!pool.length) return "";
  return pool[Math.floor(Math.random() * pool.length)];
}

function resetQuizState({ reshuffle = false } = {}) {
  if (reshuffle && state.selectedRoundId) {
    delete state.quizOrders[state.selectedRoundId];
  }
  state.quizQuestionIndex = 0;
  state.selectedAnswer = null;
}

function renderSidebar() {
  const items = [
    ["flashcards", "플래시카드"],
    ["quiz", "모의고사"]
  ];

  return `
    <aside class="sidebar">
      <a class="home-link" href="../">← 홈으로</a>
      <div class="sidebar-brand">
        <div class="sidebar-logo">JamesLingo</div>
        <div class="sidebar-copy">1회차 전용 정리본입니다</div>
      </div>
      <div class="sidebar-stats">
        <span class="stat-chip">카드 ${flashcards.length}장</span>
        <span class="stat-chip">문제 ${quizQuestions.length}문항</span>
      </div>
      <div class="nav-group">
        ${items
          .map(
            ([screen, label]) => `
              <button class="nav-button ${state.screen === screen ? "is-active" : ""}" data-action="go-screen" data-screen="${screen}">
                ${label}
              </button>
            `
          )
          .join("")}
      </div>
    </aside>
  `;
}

function renderFlashcards() {
  const cards = getCardsByCategory(state.cardCategory);
  const card = getCurrentCard();
  const progressPercent = cards.length ? ((state.cardIndex + 1) / cards.length) * 100 : 0;

  if (!card) {
    return `<section class="panel"><div class="empty">아직 준비된 카드가 없습니다.</div></section>`;
  }

  return `
    <section class="panel">
      <div class="toolbar">
        <div class="toolbar-left">
          <h2>플래시카드</h2>
          <select class="select" data-action="change-category">
            ${Object.entries(CATEGORY_LABELS)
              .map(
                ([value, label]) => `
                  <option value="${value}" ${value === state.cardCategory ? "selected" : ""}>${label}</option>
                `
              )
              .join("")}
          </select>
        </div>
        <div class="toolbar-right">
          <button class="button button-secondary" data-action="go-screen" data-screen="quiz">시험 모드로 이동</button>
        </div>
      </div>
      <div class="card-stage">
        <div class="progress-stack">
          <div class="progress">${state.cardIndex + 1} / ${cards.length}</div>
          <div class="progress-track"><div class="progress-fill" style="width:${progressPercent}%"></div></div>
        </div>
        <div class="pill-row">
          ${card.tags.map((tag) => `<span class="${badgeClass(tag)}">${tag}</span>`).join("")}
        </div>
        <article class="card-sheet">
          <h2>${escapeHtml(card.title)}</h2>
          <div class="card-block">
            <div class="card-label">Question</div>
            <div class="card-text">${nlToBr(card.question)}</div>
          </div>
          ${
            state.showAnswer
              ? `
                <div class="card-block">
                  <div class="card-label">Answer</div>
                  <div class="card-text">${nlToBr(card.answer)}</div>
                </div>
                <div class="card-block">
                  <div class="card-label">Summary</div>
                  <div class="card-text">${nlToBr(card.summary)}</div>
                </div>
              `
              : ""
          }
          <div class="card-actions is-sticky-mobile">
            <button class="button button-primary" data-action="toggle-answer">
              ${state.showAnswer ? "정답 닫기" : "정답 보기"}
            </button>
            <button class="button button-soft" data-action="prev-card" ${state.cardIndex === 0 ? "disabled" : ""}>이전 카드</button>
            <button class="button button-secondary" data-action="next-card" ${state.cardIndex >= cards.length - 1 ? "disabled" : ""}>다음 카드</button>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderQuiz() {
  const questions = getQuestionsForRound(state.selectedRoundId);
  const question = getCurrentQuestion();
  const progressPercent = questions.length ? ((state.quizQuestionIndex + 1) / questions.length) * 100 : 0;

  if (!question) {
    return `<section class="panel"><div class="empty">선택하신 회차에 문항이 없습니다.</div></section>`;
  }

  const isAnswered = state.selectedAnswer !== null;
  const isCorrect = isAnswered && state.selectedAnswer === question.answer;
  const isLastQuestion = state.quizQuestionIndex >= questions.length - 1;
  const feedbackCopy = isAnswered
    ? `${pickFeedback(isCorrect)}\n\n정답: ${getCorrectAnswerLabel(question)}\n\n${question.explanation}`
    : "";

  const optionsMarkup =
    question.type === "ox"
      ? ["O", "X"]
          .map((value) => {
            const optionState = !isAnswered
              ? ""
              : value === question.answer
                ? "is-correct"
                : value === state.selectedAnswer
                  ? "is-wrong"
                  : "";
            return `
              <button class="option ${optionState}" data-action="answer" data-answer="${value}" ${isAnswered ? "disabled" : ""}>
                ${value}
              </button>
            `;
          })
          .join("")
      : (question.options ?? [])
          .map((option) => {
            const optionState = !isAnswered
              ? ""
              : option.id === question.answer
                ? "is-correct"
                : option.id === state.selectedAnswer
                  ? "is-wrong"
                  : "";
            return `
              <button class="option ${optionState}" data-action="answer" data-answer="${option.id}" ${isAnswered ? "disabled" : ""}>
                <strong>${option.id}.</strong> ${escapeHtml(option.text)}
              </button>
            `;
          })
          .join("");

  return `
    <section class="panel">
      <div class="toolbar">
        <div class="toolbar-left">
          <h2>모의고사</h2>
          <select class="select" data-action="change-round">
            ${quizRounds
              .map(
                (round) => `
                  <option value="${round.id}" ${round.id === state.selectedRoundId ? "selected" : ""}>${round.title}</option>
                `
              )
              .join("")}
          </select>
        </div>
        <div class="toolbar-right">
          <button class="button button-secondary" data-action="reset-round">처음부터 다시</button>
        </div>
      </div>
      <div class="quiz-header">
        <div class="progress-stack">
          <div class="progress">${state.quizQuestionIndex + 1} / ${questions.length}</div>
          <div class="progress-track"><div class="progress-fill" style="width:${progressPercent}%"></div></div>
        </div>
        <div class="pill-row">
          ${question.tags.map((tag) => `<span class="${badgeClass(tag)}">${tag}</span>`).join("")}
          ${question.uiHint ? `<span class="pill">${escapeHtml(question.uiHint)}</span>` : ""}
        </div>
        <div class="quiz-prompt">${escapeHtml(question.prompt)}</div>
      </div>
      <div class="option-list">${optionsMarkup}</div>
      ${
        isAnswered
          ? `
            <div class="feedback ${isCorrect ? "is-correct" : "is-wrong"}">
              <div class="feedback-title">${isCorrect ? "정답입니다" : "조금만 더 보시면 됩니다"}</div>
              <div class="feedback-copy">${nlToBr(feedbackCopy)}</div>
            </div>
          `
          : ""
      }
      ${
        isAnswered && isLastQuestion
          ? `
            <div class="quiz-finish-note">
              마지막 문항까지 모두 보셨습니다. 한 번 더 돌려보시면 훨씬 편안해지실 거예요.
            </div>
          `
          : ""
      }
      <div class="card-actions is-sticky-mobile">
        <button class="button button-soft" data-action="prev-question" ${state.quizQuestionIndex === 0 ? "disabled" : ""}>이전 문제</button>
        ${
          isLastQuestion
            ? `<button class="button button-primary" data-action="reset-round" ${!isAnswered ? "disabled" : ""}>처음부터 다시</button>`
            : `<button class="button button-primary" data-action="next-question" ${!isAnswered ? "disabled" : ""}>다음 문제</button>`
        }
      </div>
    </section>
  `;
}

function render() {
  app.innerHTML = `
    <div class="shell">
      <div class="main-grid">
        ${renderSidebar()}
        <main>
          ${state.screen === "flashcards" ? renderFlashcards() : ""}
          ${state.screen === "quiz" ? renderQuiz() : ""}
        </main>
      </div>
      <nav class="dock">
        ${[
          ["flashcards", "카드"],
          ["quiz", "시험"]
        ]
          .map(
            ([screen, label]) => `
              <button class="dock-button ${state.screen === screen ? "is-active" : ""}" data-action="go-screen" data-screen="${screen}">
                ${label}
              </button>
            `
          )
          .join("")}
      </nav>
    </div>
  `;
}

function goScreen(screen) {
  state.screen = screen;
  window.location.hash = screen === "quiz" ? "quiz" : "flashcards";
  render();
}

function answerQuestion(answer) {
  const question = getCurrentQuestion();
  if (!question || state.selectedAnswer !== null) return;

  state.selectedAnswer = answer;
  render();
}

function nextQuestion() {
  const questions = getQuestionsForRound(state.selectedRoundId);
  if (state.quizQuestionIndex < questions.length - 1) {
    state.quizQuestionIndex += 1;
    state.selectedAnswer = null;
    render();
  }
}

function prevQuestion() {
  if (state.quizQuestionIndex > 0) {
    state.quizQuestionIndex -= 1;
    state.selectedAnswer = null;
    render();
  }
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const action = target.dataset.action;

  if (action === "go-screen") {
    goScreen(target.dataset.screen);
    return;
  }
  if (action === "toggle-answer") {
    state.showAnswer = !state.showAnswer;
    render();
    return;
  }
  if (action === "prev-card") {
    if (state.cardIndex > 0) state.cardIndex -= 1;
    state.showAnswer = false;
    render();
    return;
  }
  if (action === "next-card") {
    const cards = getCardsByCategory(state.cardCategory);
    if (state.cardIndex < cards.length - 1) state.cardIndex += 1;
    state.showAnswer = false;
    render();
    return;
  }
  if (action === "answer") {
    answerQuestion(target.dataset.answer);
    return;
  }
  if (action === "next-question") {
    nextQuestion();
    return;
  }
  if (action === "prev-question") {
    prevQuestion();
    return;
  }
  if (action === "reset-round") {
    resetQuizState({ reshuffle: true });
    state.screen = "quiz";
    window.location.hash = "quiz";
    render();
  }
});

app.addEventListener("change", (event) => {
  const target = event.target;
  const action = target.dataset.action;

  if (action === "change-category") {
    state.cardCategory = target.value;
    state.cardIndex = 0;
    state.showAnswer = false;
    render();
    return;
  }

  if (action === "change-round") {
    state.selectedRoundId = target.value;
    resetQuizState({ reshuffle: true });
    render();
  }
});

render();
