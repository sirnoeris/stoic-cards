// ========================================
// STOIC CARDS — App Logic
// ========================================

(function () {
  "use strict";

  // State
  let currentMode = null;
  let filteredCards = [];
  let currentIndex = 0;
  let answered = [];
  let expandedStates = [];
  let score = 0;
  let totalAnswered = 0;

  // Fisher-Yates shuffle — randomizes card order each time a mode is entered
  function shuffleArray(arr) {
    const shuffled = arr.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // DOM refs
  const modeScreen = document.getElementById("modeScreen");
  const appShell = document.getElementById("appShell");
  const container = document.getElementById("cardContainer");
  const counter = document.getElementById("cardCounter");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const progressFill = document.getElementById("progressFill");
  const scoreLabel = document.getElementById("scoreLabel");
  const backBtn = document.getElementById("backBtn");
  const modeBadge = document.getElementById("modeBadge");
  const viewport = document.getElementById("cardViewport");

  // Completion screen refs
  const completionScreen = document.getElementById("completionScreen");
  const completionIcon = document.getElementById("completionIcon");
  const completionTitle = document.getElementById("completionTitle");
  const completionSubtitle = document.getElementById("completionSubtitle");
  const completionScore = document.getElementById("completionScore");
  const completionBreakdown = document.getElementById("completionBreakdown");
  const completionRestart = document.getElementById("completionRestart");
  const completionHome = document.getElementById("completionHome");

  // ========================================
  // THEME TOGGLE
  // ========================================
  (function () {
    const t = document.querySelector("[data-theme-toggle]");
    const r = document.documentElement;
    let d = matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
    r.setAttribute("data-theme", d);
    if (t) {
      updateToggleIcon(t, d);
      t.addEventListener("click", () => {
        d = d === "dark" ? "light" : "dark";
        r.setAttribute("data-theme", d);
        t.setAttribute("aria-label", "Switch to " + (d === "dark" ? "light" : "dark") + " mode");
        updateToggleIcon(t, d);
      });
    }
    function updateToggleIcon(btn, theme) {
      btn.innerHTML = theme === "dark"
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    }
  })();

  // ========================================
  // MODE SELECTION
  // ========================================
  const modeLabels = { all: "Everyone", teen: "Teens", parent: "Parents" };

  document.querySelectorAll(".mode-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      enterMode(mode);
    });
  });

  backBtn.addEventListener("click", () => {
    exitMode();
  });

  function enterMode(mode) {
    currentMode = mode;

    // Set mode attribute on html for CSS theming
    document.documentElement.setAttribute("data-mode", mode);

    // Filter cards and shuffle for random order
    filteredCards = shuffleArray(QUOTE_CARDS.filter((c) => c.mode === mode));
    currentIndex = 0;
    answered = new Array(filteredCards.length).fill(false);
    expandedStates = new Array(filteredCards.length).fill(false);
    score = 0;
    totalAnswered = 0;

    // Update badge
    modeBadge.textContent = modeLabels[mode];
    modeBadge.className = "mode-badge mode-badge--" + mode;

    // Hide completion screen if visible
    completionScreen.hidden = true;

    // Transition screens
    modeScreen.classList.add("exiting");
    setTimeout(() => {
      modeScreen.hidden = true;
      modeScreen.classList.remove("exiting");
      appShell.hidden = false;
      appShell.classList.add("entering");
      renderAllCards();
      requestAnimationFrame(() => {
        appShell.classList.remove("entering");
        appShell.classList.add("visible");
      });
    }, 300);
  }

  function exitMode() {
    currentMode = null;
    document.documentElement.removeAttribute("data-mode");

    // Hide completion if showing
    completionScreen.hidden = true;

    appShell.classList.remove("visible");
    appShell.classList.add("exiting");
    setTimeout(() => {
      appShell.hidden = true;
      appShell.classList.remove("exiting");
      modeScreen.hidden = false;
      modeScreen.classList.add("entering");
      requestAnimationFrame(() => {
        modeScreen.classList.remove("entering");
      });
    }, 250);
  }

  // ========================================
  // RENDER CARDS
  // ========================================
  function renderCard(card, index) {
    const markers = ["A", "B", "C"];
    const optionsHTML = card.mcq_options
      .map((opt, i) => `
        <button class="mcq-option" data-index="${i}" data-card="${index}">
          <span class="option-marker">${markers[i]}</span>
          <span class="option-text">${opt}</span>
        </button>
      `)
      .join("");

    return `
      <article class="quote-card ${index === 0 ? "active" : ""}" data-card-index="${index}" aria-label="Quote card ${index + 1}">
        <div class="card-quote-section">
          <div class="card-attribution">
            <span class="attribution-dot"></span>
            <span class="attribution-text">${card.author}</span>
          </div>
          <blockquote class="card-quote">${card.quote_text}</blockquote>
          <cite class="card-source">${card.source_work}, ${card.source_reference}</cite>
        </div>

        <div class="card-tags">
          ${card.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>

        <button class="card-expand-trigger" aria-expanded="false" data-expand="${index}">
          <span>What does this mean?</span>
          <svg class="expand-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
        </button>

        <div class="card-expanded" id="expanded-${index}">
          <div class="expanded-inner">
            <div class="expanded-section">
              <div class="expanded-label">Core Idea</div>
              <p class="expanded-text">${card.core_meaning}</p>
            </div>
            <div class="expanded-section">
              <div class="expanded-label">${currentMode === "teen" ? "Real-Life Example" : currentMode === "parent" ? "Parenting Scenario" : "Modern Scenario"}</div>
              <p class="expanded-text">${card.scenario_generic}</p>
            </div>
          </div>
        </div>

        <div class="mcq-section">
          <p class="mcq-question">${card.mcq_question}</p>
          <div class="mcq-options">
            ${optionsHTML}
          </div>
          <div class="mcq-feedback" id="feedback-${index}"></div>
        </div>
      </article>
    `;
  }

  function renderAllCards() {
    container.innerHTML = filteredCards.map((card, i) => renderCard(card, i)).join("");
    updateNav();
    bindCardEvents();
  }

  // ========================================
  // NAVIGATION
  // ========================================
  function updateNav() {
    counter.textContent = `${currentIndex + 1} / ${filteredCards.length}`;
    prevBtn.disabled = currentIndex === 0;

    // On last card, show "Finish" state instead of disabling next
    const isLast = currentIndex === filteredCards.length - 1;
    nextBtn.disabled = isLast;

    // Update progress bar
    const progress = ((currentIndex + 1) / filteredCards.length) * 100;
    progressFill.style.width = progress + "%";

    // Update score label
    if (totalAnswered > 0) {
      scoreLabel.textContent = `${score} / ${totalAnswered} correct`;
    } else {
      scoreLabel.textContent = `Card ${currentIndex + 1} of ${filteredCards.length}`;
    }
  }

  function goToCard(newIndex, direction) {
    if (newIndex < 0 || newIndex >= filteredCards.length || newIndex === currentIndex) return;

    const cards = document.querySelectorAll(".quote-card");
    const oldCard = cards[currentIndex];
    const newCard = cards[newIndex];

    // Determine direction
    const goingForward = direction === "forward" || (direction === undefined && newIndex > currentIndex);

    // Exit old card
    oldCard.classList.remove("active");
    oldCard.classList.add(goingForward ? "exiting-left" : "exiting-right");

    // Prepare new card
    newCard.classList.add(goingForward ? "entering-right" : "entering-left");

    // Force reflow
    void newCard.offsetHeight;

    // Activate new card
    requestAnimationFrame(() => {
      newCard.classList.remove("entering-right", "entering-left");
      newCard.classList.add("active");
    });

    // Clean up old card after transition
    setTimeout(() => {
      oldCard.classList.remove("exiting-left", "exiting-right");
    }, 400);

    currentIndex = newIndex;
    updateNav();

    // Scroll viewport back to top so the new card starts at the top
    viewport.scrollTop = 0;
  }

  // ========================================
  // CARD EVENTS
  // ========================================
  function bindCardEvents() {
    // Expand triggers
    document.querySelectorAll(".card-expand-trigger").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.expand);
        const panel = document.getElementById(`expanded-${idx}`);
        const isOpen = panel.classList.contains("open");

        if (isOpen) {
          panel.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
          expandedStates[idx] = false;
        } else {
          panel.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
          expandedStates[idx] = true;
        }
      });
    });

    // MCQ options
    document.querySelectorAll(".mcq-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cardIdx = parseInt(btn.dataset.card);
        if (answered[cardIdx]) return;

        const selectedIdx = parseInt(btn.dataset.index);
        const card = filteredCards[cardIdx];
        const isCorrect = selectedIdx === card.mcq_correct_index;
        const feedback = document.getElementById(`feedback-${cardIdx}`);

        answered[cardIdx] = true;
        totalAnswered++;
        if (isCorrect) score++;

        // Mark selected
        btn.classList.add("selected", isCorrect ? "correct" : "incorrect");

        // If wrong, reveal the correct one
        if (!isCorrect) {
          const allOpts = btn.parentElement.querySelectorAll(".mcq-option");
          allOpts[card.mcq_correct_index].classList.add("revealed", "is-correct");
        }

        // Show feedback
        feedback.textContent = isCorrect ? card.mcq_feedback_correct : card.mcq_feedback_incorrect;
        feedback.className = `mcq-feedback ${isCorrect ? "correct" : "incorrect"}`;

        // Animate in
        requestAnimationFrame(() => {
          feedback.classList.add("visible");
        });

        // Disable all options in this card
        btn.parentElement.querySelectorAll(".mcq-option").forEach((o) => {
          o.style.pointerEvents = "none";
        });

        // Update score display
        updateNav();

        // Check if all cards have been answered
        if (totalAnswered === filteredCards.length) {
          // Brief delay to let the user see the last feedback
          setTimeout(() => {
            showCompletion();
          }, 1200);
        }
      });
    });
  }

  // ========================================
  // COMPLETION SCREEN
  // ========================================
  function showCompletion() {
    const pct = Math.round((score / filteredCards.length) * 100);
    const total = filteredCards.length;

    // Determine tier and message
    let icon, title, subtitle;
    if (pct >= 90) {
      icon = "\u{1F3DB}\u{FE0F}";  // 🏛️
      title = "Stoic Sage";
      subtitle = "You\u2019ve internalised these teachings. The ancient philosophers would be impressed.";
    } else if (pct >= 70) {
      icon = "\u{1F4DC}";  // 📜
      title = "Devoted Student";
      subtitle = "A strong understanding. A few more passes and you\u2019ll have these principles wired in.";
    } else if (pct >= 50) {
      icon = "\u{1F331}";  // 🌱
      title = "Growing Mind";
      subtitle = "You\u2019re building a foundation. Come back tomorrow and you\u2019ll notice the ideas landing differently.";
    } else {
      icon = "\u{1F30A}";  // 🌊
      title = "Just Beginning";
      subtitle = "Every philosopher started here. Read the explanations, try again, and watch the ideas take root.";
    }

    completionIcon.textContent = icon;
    completionTitle.textContent = title;
    completionSubtitle.textContent = subtitle;
    completionScore.textContent = `${score} / ${total}`;
    completionBreakdown.textContent = `${pct}% correct \u2014 ${totalAnswered} questions answered`;

    completionScreen.hidden = false;
  }

  completionRestart.addEventListener("click", () => {
    completionScreen.hidden = true;
    // Re-enter same mode (reshuffled)
    const mode = currentMode;
    filteredCards = shuffleArray(QUOTE_CARDS.filter((c) => c.mode === mode));
    currentIndex = 0;
    answered = new Array(filteredCards.length).fill(false);
    expandedStates = new Array(filteredCards.length).fill(false);
    score = 0;
    totalAnswered = 0;
    renderAllCards();
    viewport.scrollTop = 0;
  });

  completionHome.addEventListener("click", () => {
    exitMode();
  });

  // ========================================
  // GLOBAL NAVIGATION EVENTS
  // ========================================
  prevBtn.addEventListener("click", () => goToCard(currentIndex - 1, "backward"));
  nextBtn.addEventListener("click", () => {
    if (currentIndex === filteredCards.length - 1) {
      // Last card — show completion if all answered, or just don't move
      if (totalAnswered === filteredCards.length) {
        showCompletion();
      }
      return;
    }
    goToCard(currentIndex + 1, "forward");
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (appShell.hidden) return;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      goToCard(currentIndex + 1, "forward");
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      goToCard(currentIndex - 1, "backward");
    }
  });

  // Touch swipe
  let touchStartX = 0;
  let touchStartY = 0;

  viewport.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  viewport.addEventListener("touchend", (e) => {
    const diffX = e.changedTouches[0].screenX - touchStartX;
    const diffY = e.changedTouches[0].screenY - touchStartY;
    const threshold = 50;

    // Only horizontal swipes
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > threshold) {
      if (diffX < 0) {
        goToCard(currentIndex + 1, "forward");
      } else {
        goToCard(currentIndex - 1, "backward");
      }
    }
  }, { passive: true });
})();
