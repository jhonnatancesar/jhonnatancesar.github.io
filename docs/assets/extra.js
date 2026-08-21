(function () {
  "use strict";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Revelar ao rolar a página ---------- */
  function initReveal() {
    var items = document.querySelectorAll(".grid.cards li, .flow-step, .timeline-item, .reveal");
    if (!items.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    items.forEach(function (el) { el.classList.add("reveal-init"); });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Chat de demonstração, passo a passo ---------- */
  function initChatDemo() {
    var demo = document.querySelector(".chat-demo");
    if (!demo) return;

    var messages = Array.prototype.slice.call(demo.querySelectorAll(".chat-msg"));
    if (!messages.length) return;

    demo.classList.add("js-interactive");

    var controls = document.createElement("div");
    controls.className = "chat-demo-controls";
    var button = document.createElement("button");
    button.type = "button";
    button.className = "chat-demo-button";
    demo.parentNode.insertBefore(controls, demo.nextSibling);
    controls.appendChild(button);

    var shownCount = 0;
    var typingEl = null;

    function updateButton() {
      if (shownCount === 0) {
        button.textContent = "▶ Começar a conversa";
      } else if (shownCount < messages.length) {
        button.textContent = "Continuar conversa ↓";
      } else {
        button.textContent = "🔁 Ver de novo";
      }
    }

    function removeTyping() {
      if (typingEl) {
        typingEl.remove();
        typingEl = null;
      }
    }

    function showNext() {
      removeTyping();

      if (shownCount >= messages.length) {
        messages.forEach(function (m) { m.classList.remove("shown"); });
        shownCount = 0;
        updateButton();
        demo.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
        return;
      }

      var next = messages[shownCount];
      var isBot = next.classList.contains("bot");

      if (isBot && !reduceMotion) {
        typingEl = document.createElement("div");
        typingEl.className = "chat-msg bot chat-typing";
        typingEl.innerHTML = "<span></span><span></span><span></span>";
        demo.insertBefore(typingEl, next);
        button.disabled = true;
        window.setTimeout(function () {
          removeTyping();
          next.classList.add("shown");
          shownCount += 1;
          button.disabled = false;
          updateButton();
        }, 550);
      } else {
        next.classList.add("shown");
        shownCount += 1;
        updateButton();
      }
    }

    button.addEventListener("click", showNext);
    demo.addEventListener("click", function () {
      if (shownCount < messages.length) showNext();
    });

    updateButton();
  }

  /* ---------- Calculadora simples de queda de preço ---------- */
  function initPriceCalc() {
    var calc = document.querySelector(".price-calc");
    if (!calc) return;

    var before = calc.querySelector("#calc-before");
    var now = calc.querySelector("#calc-now");
    var result = calc.querySelector(".calc-result");
    if (!before || !now || !result) return;

    function update() {
      var b = parseFloat((before.value || "").replace(",", "."));
      var n = parseFloat((now.value || "").replace(",", "."));

      if (isNaN(b) || isNaN(n) || b <= 0 || n <= 0) {
        result.textContent = "";
        result.className = "calc-result";
        return;
      }

      if (n < b) {
        var diff = b - n;
        var pct = (diff / b) * 100;
        result.textContent =
          "Caiu " + pct.toFixed(1).replace(".", ",") + "% — R$ " + diff.toFixed(2).replace(".", ",") +
          " a menos do que da última vez que foi visto. É esse tipo de queda que gera um alerta.";
        result.className = "calc-result calc-result--good";
      } else if (n === b) {
        result.textContent = "O preço continua igual ao que já foi visto — nenhum alerta seria enviado aqui.";
        result.className = "calc-result calc-result--neutral";
      } else {
        result.textContent = "Esse preço está maior do que o já visto antes — também não geraria alerta.";
        result.className = "calc-result calc-result--neutral";
      }
    }

    before.addEventListener("input", update);
    now.addEventListener("input", update);
  }

  /* ---------- Cards de loja: clique para saber mais ---------- */
  function initStoreCards() {
    var cards = document.querySelectorAll(".store-card");
    if (!cards.length) return;

    cards.forEach(function (card) {
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      var toggle = function () { card.classList.toggle("is-expanded"); };
      card.addEventListener("click", toggle);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  function init() {
    initReveal();
    initChatDemo();
    initPriceCalc();
    initStoreCards();
  }

  /* O tema usa navegação instantânea (troca de página via JS, sem reload).
     document$ já dispara uma vez no carregamento inicial e de novo a cada
     troca de página, então ele sozinho substitui o DOMContentLoaded — usar
     os dois juntos duplicaria os widgets na primeira carga. */
  if (window.document$) {
    window.document$.subscribe(init);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
