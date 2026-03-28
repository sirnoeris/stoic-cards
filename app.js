// ========================================
// STOIC CARDS — App Logic
// ========================================

(function () {
  "use strict";

  // State
  let currentIndex = 0;
  let answered = new Array(QUOTE_CARDS.length).fill(false);
  let expandedStates = new Array(QUOTE_CARDS.length).fill(false);

  // DOM refs
  const container = document.getElementById("cardContainer");
  const counter = document.getElementById("cardCounter");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dotsContainer = document.getElementById("navDots");

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
              <div class="expanded-label">Modern Scenario</div>
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
    container.innerHTML = QUOTE_CARDS.map((card, i) => renderCard(card, i)).join("");
    renderDots();
    updateNav();
    bindEvents();
  }

  // ========================================
  // NAVIGATION
  // ========================================
  function renderDots() {
    dotsContainer.innerHTML = QUOTE_CARDS.map(
      (_, i) => `<button class="nav-dot ${i === 0 ? "active" : ""}" data-dot="${i}" aria-label="Go to card ${i + 1}"></button>`
    ).join("");
  }

  function updateNav() {
    counter.textContent = `${currentIndex + 1} / ${QUOTE_CARDS.length}`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === QUOTE_CARDS.length - 1;

    document.querySelectorAll(".nav-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function goToCard(newIndex, direction) {
    if (newIndex < 0 || newIndex >= QUOTE_CARDS.length || newIndex === currentIndex) return;

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
  }

  // ========================================
  // EVENTS
  // ========================================
  function bindEvents() {
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
        const card = QUOTE_CARDS[cardIdx];
        const isCorrect = selectedIdx === card.mcq_correct_index;
        const feedback = document.getElementById(`feedback-${cardIdx}`);

        answered[cardIdx] = true;

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
      });
    });

    // Nav buttons
    prevBtn.addEventListener("click", () => goToCard(currentIndex - 1, "backward"));
    nextBtn.addEventListener("click", () => goToCard(currentIndex + 1, "forward"));

    // Dot navigation
    dotsContainer.addEventListener("click", (e) => {
      const dot = e.target.closest(".nav-dot");
      if (dot) {
        goToCard(parseInt(dot.dataset.dot));
      }
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
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
    const viewport = document.getElementById("cardViewport");

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
  }

  // ========================================
  // INIT
  // ========================================
  renderAllCards();
})();
