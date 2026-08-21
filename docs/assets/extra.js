(function () {
  "use strict";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Revelar ao rolar a página ---------- */
  function initReveal() {
    var items = document.querySelectorAll(".grid.cards li, .ai-journey__step, .ai-step, .ai-mission-card, .timeline-item, .reveal");
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

  /* ---------- Chat de demonstração, passo a passo ----------
     Só avança por um controle explícito (botão). Clicar dentro do
     balão de conversa NÃO avança mais nada, de propósito. */
  function initChatDemo() {
    var demo = document.querySelector(".chat-demo");
    if (!demo) return;

    var messages = Array.prototype.slice.call(demo.querySelectorAll(".chat-msg"));
    if (!messages.length) return;

    demo.classList.add("js-interactive");

    var footer = demo.closest(".ai-chat-frame")
      ? demo.closest(".ai-chat-frame").querySelector(".ai-chat-frame__footer")
      : null;

    var controls = document.createElement("div");
    controls.className = "chat-demo-controls";
    var button = document.createElement("button");
    button.type = "button";
    button.className = "chat-demo-button";
    controls.appendChild(button);

    if (footer) {
      footer.appendChild(controls);
    } else {
      demo.parentNode.insertBefore(controls, demo.nextSibling);
    }

    var shownCount = 0;
    var typingEl = null;

    function updateButton() {
      if (shownCount === 0) {
        button.textContent = "▶ Começar conversa";
      } else if (shownCount < messages.length) {
        button.textContent = "Continuar ↓";
      } else {
        button.textContent = "🔁 Ver novamente";
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
        result.innerHTML = "";
        result.className = "calc-result";
        return;
      }

      if (n < b) {
        var diff = b - n;
        var pct = (diff / b) * 100;
        result.innerHTML =
          '<span class="calc-result__figure">↓ ' + pct.toFixed(1).replace(".", ",") + "%</span>" +
          "R$ " + diff.toFixed(2).replace(".", ",") + " mais barato do que da última vez visto.<br>" +
          "🔔 Esse é o tipo de mudança que pode gerar um alerta.";
        result.className = "calc-result calc-result--good";
      } else if (n === b) {
        result.innerHTML = "O preço continua igual ao que já foi visto — nenhum alerta seria enviado aqui.";
        result.className = "calc-result calc-result--neutral";
      } else {
        result.innerHTML = "Esse preço está maior do que o já visto antes — também não geraria alerta.";
        result.className = "calc-result calc-result--neutral";
      }
    }

    before.addEventListener("input", update);
    now.addEventListener("input", update);
  }

  /* ---------- Telegram: segmented control entre cenários ---------- */
  function initScenarioTabs() {
    var wrap = document.querySelector(".ai-tabs");
    if (!wrap) return;

    var panels = Array.prototype.slice.call(wrap.querySelectorAll(".ai-tabs__panel"));
    if (!panels.length) return;

    wrap.classList.add("js-ready");

    var list = document.createElement("ul");
    list.className = "ai-tabs__list";
    list.setAttribute("role", "tablist");

    panels.forEach(function (panel, i) {
      var li = document.createElement("li");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ai-tabs__btn";
      btn.textContent = panel.getAttribute("data-label") || "Cenário " + (i + 1);
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", i === 0 ? "true" : "false");
      btn.setAttribute("aria-controls", panel.id);
      panel.setAttribute("role", "tabpanel");
      panel.classList.toggle("is-active", i === 0);

      btn.addEventListener("click", function () {
        panels.forEach(function (p) { p.classList.remove("is-active"); });
        list.querySelectorAll(".ai-tabs__btn").forEach(function (b) {
          b.setAttribute("aria-selected", "false");
        });
        panel.classList.add("is-active");
        btn.setAttribute("aria-selected", "true");
      });

      li.appendChild(btn);
      list.appendChild(li);
    });

    wrap.insertBefore(list, panels[0]);
  }

  function init() {
    initReveal();
    initChatDemo();
    initPriceCalc();
    initScenarioTabs();
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
