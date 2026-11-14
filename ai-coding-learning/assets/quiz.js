/* Reusable quiz widget.
 *
 * Markup:
 *   <div class="quiz">
 *     <div class="q">
 *       <p class="prompt">Question?</p>
 *       <div class="options">
 *         <button class="opt">Answer A</button>
 *         <button class="opt" data-correct>Answer B</button>
 *       </div>
 *       <div class="why">Explanation shown after answering.</div>
 *     </div>
 *     <p class="quiz-score"></p>
 *   </div>
 *
 * Only the first click counts (retrieval practice: commit before you see the answer).
 * Progress is remembered per page in localStorage.
 */
(function () {
  function init(quiz, qi) {
    const qs = [...quiz.querySelectorAll(".q")];
    const score = quiz.querySelector(".quiz-score");
    const key = "quiz:" + location.pathname + ":" + qi;
    const saved = JSON.parse(localStorage.getItem(key) || "{}");

    function update() {
      const answered = qs.filter((q) => q.classList.contains("answered"));
      const right = answered.filter((q) => q.dataset.result === "right").length;
      if (score) {
        score.textContent = answered.length === qs.length
          ? `Score: ${right} / ${qs.length}${right === qs.length ? " — nice." : " — re-read the explanations, then retry tomorrow."}`
          : `${answered.length} / ${qs.length} answered`;
      }
    }

    function answer(q, i, btns, idx, persist) {
      const chosen = btns[idx];
      const correct = chosen.hasAttribute("data-correct");
      btns.forEach((b) => {
        b.disabled = true;
        if (b.hasAttribute("data-correct")) b.classList.add("right");
      });
      if (!correct) chosen.classList.add("wrong");
      q.dataset.result = correct ? "right" : "wrong";
      q.classList.add("answered");
      if (persist) {
        saved[i] = idx;
        localStorage.setItem(key, JSON.stringify(saved));
      }
      update();
    }

    qs.forEach((q, i) => {
      const btns = [...q.querySelectorAll("button.opt")];
      btns.forEach((b, idx) => b.addEventListener("click", () => answer(q, i, btns, idx, true)));
      if (saved[i] !== undefined) answer(q, i, btns, saved[i], false);
    });

    const reset = document.createElement("button");
    reset.textContent = "Reset quiz";
    reset.className = "opt";
    reset.style.marginTop = "0.5rem";
    reset.onclick = () => { localStorage.removeItem(key); location.reload(); };
    quiz.appendChild(reset);
    update();
  }

  document.querySelectorAll(".quiz").forEach(init);

  // Persist "done" checkboxes in step lists: <input type="checkbox" data-step="id">
  document.querySelectorAll("input[data-step]").forEach((cb) => {
    const k = "step:" + location.pathname + ":" + cb.dataset.step;
    cb.checked = localStorage.getItem(k) === "1";
    cb.addEventListener("change", () => localStorage.setItem(k, cb.checked ? "1" : "0"));
  });
})();
