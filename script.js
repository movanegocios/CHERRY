/**
 * Cherry AI — script.js
 * Lógica principal: multilíngue, formulário, integrações, vídeo, animações.
 */

(function () {
  "use strict";

  /* ═══════════════════════════════════════════════════════════
     ESTADO GLOBAL
  ═══════════════════════════════════════════════════════════ */
  let currentLang = "pt";
  let t = {}; // textos do idioma atual

  /* ═══════════════════════════════════════════════════════════
     INIT
  ═══════════════════════════════════════════════════════════ */
  document.addEventListener("DOMContentLoaded", () => {
    // Detecta idioma salvo ou padrão
    const savedLang = localStorage.getItem("cherry_lang") || CherryConfig.defaultLang || "pt";
    setLanguage(savedLang, false);

    initHeader();
    initMobileMenu();
    applyBrandAssets();
    applyVisualSettings();
    applyPerformanceSettings();
    applyConfiguredVideos();
    applyExternalLinks();
    applyFloatingButtonConfig();
    initPremiumButtonSound();
    initScrollLogoCta();
    initBackToTopButton();
    initBasicInspectProtection();
    initPeopleCounter();
    initHeroVideo();
    initBoostVideo();
    initFAQ();
    initForm();
    initReveal();
    initGTM();
    initMetaPixel();
    initTikTokPixel();
    initConversionModal();
    fireEvent("cherry_page_view");
  });

  /* ═══════════════════════════════════════════════════════════
     IDIOMA
  ═══════════════════════════════════════════════════════════ */
  function setLanguage(lang, track = true) {
    if (!CherryConfig.i18n[lang]) return;
    currentLang = lang;
    t = CherryConfig.i18n[lang];
    localStorage.setItem("cherry_lang", lang);

    // Atualiza meta
    document.title = t.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t.meta.description);
    document.documentElement.lang = lang;

    // Atualiza lang buttons
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    // Renderiza conteúdo
    renderNav();
    renderHero();
    renderPain();
    renderSolution();
    renderProducts();
    renderDemos();
    renderHow();
    renderBehind();
    renderBoost();
    renderObjections();
    renderFAQ();
    renderDiagnostic();
    renderFooter();
    renderModal();
    applyExternalLinks();
    applyFloatingButtonConfig();
    applyBackToTopConfig();
    updateFormProgress();
    updatePeopleCounterLabel();

    if (track) fireEvent("cherry_language_change", { language: lang });
  }

  // Expõe globalmente para os botões de idioma inline
  window.changeLanguage = setLanguage;

  /* ═══════════════════════════════════════════════════════════
     RENDERIZADORES
  ═══════════════════════════════════════════════════════════ */

  function renderNav() {
    setText("[data-i18n='nav.home']", t.nav.home);
    setText("[data-i18n='nav.problem']", t.nav.problem);
    setText("[data-i18n='nav.about']", t.nav.about);
    setText("[data-i18n='nav.solutions']", t.nav.solutions);
    setText("[data-i18n='nav.how']", t.nav.how);
    setText("[data-i18n='nav.demos']", t.nav.demos);
    setText("[data-i18n='nav.behind']", t.nav.behind);
    setText("[data-i18n='nav.boost']", t.nav.boost);
    setText("[data-i18n='nav.objections']", t.nav.objections);
    setText("[data-i18n='nav.faq']", t.nav.faq);
    setText("[data-i18n='nav.diagnostic']", t.nav.diagnostic);
    setText("[data-i18n='nav.language']", t.nav.language);
  }

  function renderHero() {
    setText("[data-i18n='hero.title']", t.hero.title);
    setText("[data-i18n='hero.subtitle']", t.hero.subtitle);
    setText("[data-i18n='hero.cta_primary']", t.hero.cta_primary);
    setText("[data-i18n='hero.cta_secondary']", t.hero.cta_secondary);
  }

  function renderPain() {
    setText("[data-i18n='pain.label']", t.pain.label);
    setText("[data-i18n='pain.title']", t.pain.title);
    setText("[data-i18n='pain.title_highlight']", t.pain.title_highlight);
    setText("[data-i18n='pain.subtitle']", t.pain.subtitle);

    const grid = document.querySelector(".pain-grid");
    if (!grid) return;
    grid.innerHTML = t.pain.items
      .map(
        (item) => `
      <div class="pain-card reveal">
        <span class="pain-icon">${item.icon}</span>
        <h3 class="pain-card-title">${item.title}</h3>
        <p class="pain-card-text">${item.text}</p>
      </div>`
      )
      .join("");
    reObserve(grid.querySelectorAll(".reveal"));
  }

  function renderSolution() {
    setText("[data-i18n='solution.label']", t.solution.label);
    setText("[data-i18n='solution.title']", t.solution.title);
    setText("[data-i18n='solution.subtitle']", t.solution.subtitle);

    const featList = document.querySelector(".solution-features");
    if (!featList) return;
    featList.innerHTML = t.solution.features
      .map((f) => `<li class="solution-feature">${f}</li>`)
      .join("");
  }

  function renderProducts() {
    setText("[data-i18n='products.label']", t.products.label);
    setText("[data-i18n='products.title']", t.products.title);
    setText("[data-i18n='products.subtitle']", t.products.subtitle);

    const grid = document.querySelector(".products-grid");
    if (!grid) return;
    grid.innerHTML = t.products.items
      .map(
        (p, i) => `
      <div class="product-card ${i === 5 ? "featured" : ""} reveal reveal-delay-${Math.min(i % 4, 4)}" data-product="${p.name}" role="button" tabindex="0" aria-label="${p.name}">
        <span class="product-icon">${p.icon}</span>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-tagline">${p.tagline}</p>
        <p class="product-desc">${p.desc}</p>
        <div class="product-tags">${p.tags.map((tg) => `<span class="product-tag">${tg}</span>`).join("")}</div>
      </div>`
      )
      .join("");

    // Bind click events
    grid.querySelectorAll(".product-card").forEach((card) => {
      card.addEventListener("click", () => {
        activateProductCard(card);
      });

      card.addEventListener("keydown", (e) => {
        if (e.key !== "Enter" && e.key !== " ") return;
        e.preventDefault();
        activateProductCard(card);
      });
    });

    reObserve(grid.querySelectorAll(".reveal"));
  }

  function activateProductCard(card) {
    fireEvent("cherry_solution_click", { solution: card.dataset.product });
    const diagEl = document.getElementById("diagnostic");
    if (diagEl) diagEl.scrollIntoView({ behavior: "smooth" });
  }

  function renderDemos() {
    setText("[data-i18n='demos.label']", t.demos.label);
    setText("[data-i18n='demos.title']", t.demos.title);
    setText("[data-i18n='demos.subtitle']", t.demos.subtitle);

    const grid = document.querySelector(".demos-grid");
    if (!grid) return;
    grid.innerHTML = t.demos.items
      .map(
        (d, i) => {
          const demoUrl = d.link || getConfiguredLink("demo", i);
          const demoTargetAttrs = demoUrl && demoUrl !== "#"
            ? `href="${demoUrl}" target="_blank" rel="noopener noreferrer"`
            : `href="#diagnostic"`;
          const imageMarkup = getDemoImageMarkup(d);
          return `
      <a ${demoTargetAttrs} class="demo-card demo-link reveal" aria-label="${t.demos.cta} — ${d.name}" data-demo-index="${i}">
        <div class="demo-img">
          ${imageMarkup}
        </div>
        <div class="demo-body">
          <p class="demo-type">${d.type}</p>
          <h3 class="demo-name">${d.name}</h3>
          <p class="demo-problem">${d.problem}</p>
          <span class="btn btn-outline-cherry" style="font-size:0.82rem;padding:9px 18px;">
            ${t.demos.cta} →
          </span>
        </div>
      </a>`;
        }
      )
      .join("");

    grid.querySelectorAll(".demo-link").forEach((link) => {
      link.addEventListener("click", () => {
        fireEvent("cherry_demo_click", {
          demo: link.closest(".demo-card")?.querySelector(".demo-name")?.textContent,
          url: link.getAttribute("href")
        });
      });
    });

    reObserve(grid.querySelectorAll(".reveal"));
  }

  function getDemoImageMarkup(d) {
    const markup = getUniversalImageMarkup(d, d.name, "");
    return markup || `<span class="demo-img-placeholder">🖥️</span>`;
  }

  function getUniversalImageMarkup(item, alt = "", className = "") {
    if (!item || typeof item !== "object") return "";

    const fallback =
      item.image ||
      item.img ||
      item.imgPng ||
      item.imgJpg ||
      item.imgJpeg ||
      item.imgWebp ||
      "";

    const classAttr = className ? ` class="${className}"` : "";
    const safeAlt = item.imageAlt || item.alt || alt || "";

    if (Array.isArray(item.sources) && item.sources.length) {
      return `
        <picture>
          ${item.sources
            .map((source) => {
              if (!source || !source.srcset) return "";
              return `<source srcset="${source.srcset}"${source.type ? ` type="${source.type}"` : ""}>`;
            })
            .join("")}
          <img src="${fallback}" alt="${safeAlt}" loading="lazy"${classAttr}>
        </picture>
      `;
    }

    if (fallback) {
      return `<img src="${fallback}" alt="${safeAlt}" loading="lazy"${classAttr}>`;
    }

    return "";
  }

  function renderHow() {
    setText("[data-i18n='how.label']", t.how.label);
    setText("[data-i18n='how.title']", t.how.title);
    setText("[data-i18n='how.subtitle']", t.how.subtitle);

    const steps = document.querySelector(".how-steps");
    if (!steps) return;
    steps.innerHTML = t.how.steps
      .map(
        (s) => `
      <li class="how-step reveal">
        <div class="how-step-num">${s.n}</div>
        <div class="how-step-content">
          <h3 class="how-step-title">${s.title}</h3>
          <p class="how-step-text">${s.text}</p>
        </div>
      </li>`
      )
      .join("");

    reObserve(steps.querySelectorAll(".reveal"));
  }

  let behindCarouselIndex = 0;
  let behindCarouselTimer = null;

  function renderBehind() {
    setText("[data-i18n='behind.label']", t.behind.label);
    setText("[data-i18n='behind.title']", t.behind.title);
    setText("[data-i18n='behind.title2']", t.behind.title2);
    setText("[data-i18n='behind.subtitle']", t.behind.subtitle);

    const track = document.getElementById("behind-carousel-track");
    const dots = document.getElementById("behind-carousel-dots");
    if (!track || !dots) return;

    const fallbackImage = CherryConfig.behindCarousel?.fallbackImage || CherryConfig.brandAssets?.emblem || CherryConfig.brandAssets?.logo || "";
    const slides =
      Array.isArray(t.behind.carousel) && t.behind.carousel.length
        ? t.behind.carousel
        : (t.behind.flow || []).map((node, i, arr) => ({
            step: String(i + 1).padStart(2, "0"),
            icon: node.icon,
            title: node.label,
            text: node.text || `Etapa ${i + 1} do fluxo da Cherry AI.`,
            next: arr[i + 1]?.label || t.behind.resultLabel || "Resultado",
            image: fallbackImage
          }));

    const nextLabel = t.behind.nextLabel || "Próximo";
    const ctaLabel = t.behind.ctaLabel || "Solicitar diagnóstico gratuito";

    track.innerHTML = slides
      .map((slide, i) => {
        const imageMarkup = getUniversalImageMarkup({ ...slide, image: slide.image || fallbackImage }, slide.title, "behind-slide-image") || `<div class="behind-placeholder" aria-hidden="true"></div>`;
        const nextText = slide.next || t.behind.resultLabel || "Resultado";
        const cta = slide.ctaLink
          ? `<a href="${slide.ctaLink}" class="btn btn-outline-cherry behind-slide-cta" target="_blank" rel="noopener noreferrer">${slide.ctaText || ctaLabel}</a>`
          : "";

        return `
        <article class="behind-slide" aria-label="${slide.title}">
          <div class="behind-slide-card">
            <div class="behind-slide-media">
              ${imageMarkup}
              <div class="behind-slide-overlay"></div>
              <div class="behind-slide-beam" aria-hidden="true"></div>

              <span class="behind-slide-step">${slide.step || String(i + 1).padStart(2, "0")}</span>
              <span class="behind-slide-next-badge">${nextLabel}: ${nextText}</span>
            </div>

            <div class="behind-slide-body">
              <span class="behind-slide-kicker">${t.behind.label}</span>
              <h3 class="behind-slide-title-card">
                ${slide.icon ? `<span class="behind-slide-title-icon" aria-hidden="true">${slide.icon}</span>` : ""}
                <span>${slide.title}</span>
              </h3>
              <p class="behind-slide-text">${slide.text || ""}</p>

              <div class="behind-slide-flow">
                <span class="behind-slide-flow-current">${slide.icon ? `${slide.icon} ` : ""}${slide.title}</span>
                <span class="behind-slide-flow-arrow" aria-hidden="true">→</span>
                <span class="behind-slide-flow-next">${nextText}</span>
              </div>

              ${cta}
            </div>
          </div>
        </article>`;
      })
      .join("");

    dots.innerHTML = slides
      .map(
        (slide, i) => `
        <button
          class="behind-carousel-dot${i === 0 ? " active" : ""}"
          type="button"
          aria-label="Ir para ${slide.title}"
          aria-current="${i === 0 ? "true" : "false"}"
          data-behind-dot="${i}"
        ></button>`
      )
      .join("");

    behindCarouselIndex = 0;
    initBehindCarousel();
    goToBehindSlide(0);
    startBehindCarouselAutoplay();
    reObserve(document.querySelectorAll(".behind-carousel.reveal, .behind-carousel-dots.reveal"));
  }

  function initBehindCarousel() {
    const wrapper = document.querySelector(".behind-carousel");
    const prev = document.querySelector(".behind-carousel-prev");
    const next = document.querySelector(".behind-carousel-next");
    const dots = document.getElementById("behind-carousel-dots");

    if (!wrapper || wrapper.dataset.bound === "true") return;
    wrapper.dataset.bound = "true";

    prev?.addEventListener("click", () => goToBehindSlide(behindCarouselIndex - 1, true));
    next?.addEventListener("click", () => goToBehindSlide(behindCarouselIndex + 1, true));

    dots?.addEventListener("click", (e) => {
      const dot = e.target.closest("[data-behind-dot]");
      if (!dot) return;
      goToBehindSlide(Number(dot.dataset.behindDot), true);
    });

    wrapper.addEventListener("mouseenter", stopBehindCarouselAutoplay);
    wrapper.addEventListener("mouseleave", startBehindCarouselAutoplay);
  }

  function goToBehindSlide(index, userInteracted = false) {
    const track = document.getElementById("behind-carousel-track");
    const dots = Array.from(document.querySelectorAll(".behind-carousel-dot"));
    const total = dots.length;

    if (!track || !total) return;

    behindCarouselIndex = (index + total) % total;
    track.style.transform = `translateX(-${behindCarouselIndex * 100}%)`;

    dots.forEach((dot, i) => {
      const isActive = i === behindCarouselIndex;
      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });

    if (userInteracted) {
      stopBehindCarouselAutoplay();
      startBehindCarouselAutoplay();
    }
  }

  function startBehindCarouselAutoplay() {
    stopBehindCarouselAutoplay();

    const total = document.querySelectorAll(".behind-carousel-dot").length;
    const delay = Number(CherryConfig.behindCarousel?.autoplayMs || 4800);

    if (total < 2 || delay <= 0) return;

    behindCarouselTimer = setInterval(() => {
      goToBehindSlide(behindCarouselIndex + 1);
    }, delay);
  }

  function stopBehindCarouselAutoplay() {
    if (behindCarouselTimer) {
      clearInterval(behindCarouselTimer);
      behindCarouselTimer = null;
    }
  }

  function renderBoost() {
    setText("[data-i18n='boost.label']", t.boost.label);
    setText("[data-i18n='boost.title']", t.boost.title);
    setText("[data-i18n='boost.title2']", t.boost.title2);
    setText("[data-i18n='boost.text']", t.boost.text);

    const items = document.querySelector(".boost-items");
    if (!items) return;
    items.innerHTML = t.boost.items
      .map(
        (item) => `
      <div class="boost-item">
        <div class="boost-item-icon">${item.icon}</div>
        <div>
          <h4 class="boost-item-title">${item.title}</h4>
          <p class="boost-item-text">${item.text}</p>
        </div>
      </div>`
      )
      .join("");
  }

  function renderObjections() {
    if (!t.objections) return;
    setText("[data-i18n='objections.label']", t.objections.label);
    setText("[data-i18n='objections.title']", t.objections.title);
    setText("[data-i18n='objections.subtitle']", t.objections.subtitle);

    const grid = document.querySelector(".objections-grid");
    if (!grid) return;
    grid.innerHTML = (t.objections.items || [])
      .map((item, i) => `
      <article class="objection-card" style="--i:${i};">
        <span class="objection-card-number">0${i + 1}</span>
        <h3 class="objection-card-title">${item.title}</h3>
        <p class="objection-card-text">${item.text}</p>
      </article>`
      )
      .join("");
  }

  function renderFAQ() {
    setText("[data-i18n='faq.label']", t.faq.label);
    setText("[data-i18n='faq.title']", t.faq.title);

    const list = document.querySelector(".faq-list");
    if (!list) return;
    list.innerHTML = t.faq.items
      .map(
        (item, i) => `
      <div class="faq-item" id="faq-${i}">
        <button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${i}" data-faq-index="${i}">
          <span class="faq-question-text">${item.q}</span>
          <span class="faq-icon" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" id="faq-answer-${i}" role="region">${item.a}</div>
      </div>`
      )
      .join("");

    // O clique do FAQ é tratado por delegação global em initFAQ().
  }

  function renderDiagnostic() {
    setText("[data-i18n='diagnostic.label']", t.diagnostic.label);
    setText("[data-i18n='diagnostic.title']", t.diagnostic.title);
    setText("[data-i18n='diagnostic.subtitle']", t.diagnostic.subtitle);
    setText("[data-i18n='diagnostic.submit']", t.diagnostic.submit);
    setText("[data-i18n='diagnostic.privacy']", t.diagnostic.privacy);
    setText("[data-i18n='diagnostic.success_title']", t.diagnostic.success_title);
    setText("[data-i18n='diagnostic.success_text']", t.diagnostic.success_text);

    // Labels dos campos
    setAttr("[data-i18n-ph='name']", "placeholder", t.diagnostic.fields.name);
    setAttr("[data-i18n-ph='whatsapp']", "placeholder", t.diagnostic.fields.whatsapp);
    setAttr("[data-i18n-ph='company']", "placeholder", t.diagnostic.fields.company);
    setAttr("[data-i18n-ph='segment']", "placeholder", t.diagnostic.fields.segment);
    setAttr("[data-i18n-ph='message']", "placeholder", t.diagnostic.fields.message);

    setLabel("[data-i18n-label='name']", t.diagnostic.fields.name);
    setLabel("[data-i18n-label='whatsapp']", t.diagnostic.fields.whatsapp);
    setLabel("[data-i18n-label='company']", t.diagnostic.fields.company);
    setLabel("[data-i18n-label='segment']", t.diagnostic.fields.segment);
    setLabel("[data-i18n-label='improve']", t.diagnostic.fields.improve);
    setLabel("[data-i18n-label='interest']", t.diagnostic.fields.interest);
    setLabel("[data-i18n-label='message']", t.diagnostic.fields.message);

    // Select: melhorar
    updateSelect("[data-i18n-select='improve']", t.diagnostic.improve_opts);
    // Select: interesse
    updateSelect("[data-i18n-select='interest']", t.diagnostic.interest_opts);
    // Menu visual customizado para evitar o azul nativo do sistema
    enhanceCherrySelects();
  }

  function renderFooter() {
    setText("[data-i18n='footer.tagline']", t.footer.tagline);
    setText("[data-i18n='footer.solutions']", t.footer.solutions);
    setText("[data-i18n='footer.company']", t.footer.company);
    setText("[data-i18n='footer.rights']", t.footer.rights);

    const solLinks = document.querySelector("[data-i18n='footer.links_solutions']");
    if (solLinks && t.footer.links_solutions) {
      solLinks.innerHTML = t.footer.links_solutions
        .map((l) => `<li><a href="#solutions" class="footer-link">${l}</a></li>`)
        .join("");
    }

    const compLinks = document.querySelector("[data-i18n='footer.links_company']");
    if (compLinks && t.footer.links_company) {
      const hrefs = ["#about", "#diagnostic", "#diagnostic"];
      compLinks.innerHTML = t.footer.links_company
        .map((l, i) => `<li><a href="${hrefs[i] || "#"}" class="footer-link">${l}</a></li>`)
        .join("");
    }
  }

  /* ═══════════════════════════════════════════════════════════
     HEADER
  ═══════════════════════════════════════════════════════════ */
  function initHeader() {
    const header = document.querySelector(".header");
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Smooth scroll nos links do nav
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href || href === "#") return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
          // Fecha mobile menu se aberto
          document.querySelector(".nav-mobile")?.classList.remove("open");
          document.querySelector(".nav-hamburger")?.classList.remove("open");
        }
      });
    });
  }

  /* ═══════════════════════════════════════════════════════════
     MOBILE MENU
  ═══════════════════════════════════════════════════════════ */
  function initMobileMenu() {
    const hamburger = document.querySelector(".nav-hamburger");
    const mobileMenu = document.querySelector(".nav-mobile");
    const closeBtn = document.querySelector(".nav-mobile-close");
    if (!hamburger || !mobileMenu) return;

    const closeMenu = () => {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };

    hamburger.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      hamburger.classList.toggle("open", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    closeBtn?.addEventListener("click", closeMenu);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Fecha ao clicar em link do menu mobile
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  function renderModal() {
    if (!t.modal) return;
    setText("[data-i18n='modal.label']", t.modal.label);
    setText("[data-i18n='modal.title']", t.modal.title);
    setText("[data-i18n='modal.text']", t.modal.text);
    setText("[data-i18n='modal.button']", t.modal.button);
    const closeBtn = document.querySelector(".conversion-modal__close");
    if (closeBtn && t.modal.close) closeBtn.setAttribute("aria-label", t.modal.close);
  }

  /* ═══════════════════════════════════════════════════════════
     MODAL DE CONVERSÃO
  ═══════════════════════════════════════════════════════════ */
  let conversionModalTimer = null;

  function initConversionModal() {
    const cfg = CherryConfig.conversionModal || {};
    const modal = document.getElementById("conversion-modal");
    if (!modal || cfg.enabled === false) return;

    const button = document.getElementById("conversion-modal-button");
    if (button && cfg.showButton === false) {
      button.style.display = "none";
    }

    modal.querySelectorAll("[data-modal-close]").forEach((el) => {
      el.addEventListener("click", closeConversionModal);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeConversionModal();
    });

    const alreadyShown = sessionStorage.getItem("cherry_modal_shown") === "true";
    if (cfg.showOncePerSession !== false && alreadyShown) return;

    conversionModalTimer = setTimeout(() => {
      openConversionModal();
    }, Number(cfg.delayMs || 40000));
  }

  function openConversionModal() {
    const modal = document.getElementById("conversion-modal");
    if (!modal) return;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    sessionStorage.setItem("cherry_modal_shown", "true");
    fireEvent("cherry_modal_show");
  }

  function closeConversionModal() {
    const modal = document.getElementById("conversion-modal");
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (conversionModalTimer) clearTimeout(conversionModalTimer);
  }

  /* ═══════════════════════════════════════════════════════════
     MARCA, LINKS EXTERNOS E PESSOAS ONLINE
  ═══════════════════════════════════════════════════════════ */
  function applyBrandAssets() {
    const assets = CherryConfig.brandAssets || {};
    if (assets.logo) {
      document.querySelectorAll("[data-brand-logo]").forEach((img) => {
        img.src = assets.logo;
      });
    }

    if (assets.emblem || assets.logo) {
      document.querySelectorAll("[data-brand-emblem]").forEach((img) => {
        img.src = assets.emblem || assets.logo;
      });
    }

    const favicon = document.getElementById("site-favicon") || document.querySelector('link[rel="icon"]');
    if (favicon && assets.favicon) favicon.href = assets.favicon;

    const appleTouch = document.getElementById("site-apple-touch-icon") || document.querySelector('link[rel="apple-touch-icon"]');
    if (appleTouch && (assets.appleTouchIcon || assets.favicon)) {
      appleTouch.href = assets.appleTouchIcon || assets.favicon;
    }
  }

  function applyVisualSettings() {
    const visual = CherryConfig.visual || {};
    const root = document.documentElement;

    if (visual.themeColor) {
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", visual.themeColor);
    }

    if (visual.accentColor) {
      root.style.setProperty("--cherry", visual.accentColor);
    }

    if (visual.headerOffset) {
      root.style.setProperty("--scroll-offset", `${Number(visual.headerOffset)}px`);
    }
  }

  function applyPerformanceSettings() {
    const cfg = CherryConfig.performance || {};
    if (cfg.lazyImages === false) return;

    document.querySelectorAll("img").forEach((img) => {
      const isCritical =
        img.closest(".hero") ||
        img.closest(".nav-logo") ||
        img.closest(".sticky-cta") ||
        img.closest(".scroll-logo-cta-wrap");

      if (!isCritical && !img.hasAttribute("loading")) img.loading = "lazy";
      if (!img.hasAttribute("decoding")) img.decoding = "async";
    });
  }

  /* ═══════════════════════════════════════════════════════════
     SOM PREMIUM NAS INTERAÇÕES
  ═══════════════════════════════════════════════════════════ */
  let premiumAudioCtx = null;

  function initPremiumButtonSound() {
    const cfg = CherryConfig.uiSound || {};
    if (cfg.enabled === false) return;

    const shouldPlay = (target) => {
      const interactive = target.closest(
        "button, .btn, [role='button'], .demo-card, .product-card, .faq-question, .behind-carousel-dot, .behind-carousel-nav, .cherry-select__option, .sticky-whatsapp, .scroll-logo-cta, a[data-external-link]"
      );
      return interactive && !interactive.disabled && interactive.getAttribute("aria-disabled") !== "true";
    };

    document.addEventListener("pointerdown", (e) => {
      if (!shouldPlay(e.target)) return;
      playPremiumClickSound();
    }, true);

    document.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      if (!shouldPlay(e.target)) return;
      playPremiumClickSound();
    }, true);
  }

  function playPremiumClickSound() {
    const cfg = CherryConfig.uiSound || {};
    if (cfg.enabled === false) return;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      premiumAudioCtx = premiumAudioCtx || new AudioContext();
      if (premiumAudioCtx.state === "suspended") {
        premiumAudioCtx.resume().catch(() => {});
      }

      const now = premiumAudioCtx.currentTime;
      const duration = Math.max(0.035, Number(cfg.durationMs || 82) / 1000);
      const master = premiumAudioCtx.createGain();
      master.gain.setValueAtTime(0.0001, now);
      master.gain.exponentialRampToValueAtTime(Number(cfg.volume || 0.055), now + 0.012);
      master.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      master.connect(premiumAudioCtx.destination);

      const makeOsc = (frequency, gainValue, stopOffset) => {
        const osc = premiumAudioCtx.createOscillator();
        const gain = premiumAudioCtx.createGain();
        osc.type = cfg.type || "sine";
        osc.frequency.setValueAtTime(Number(frequency), now);
        gain.gain.setValueAtTime(gainValue, now);
        osc.connect(gain);
        gain.connect(master);
        osc.start(now);
        osc.stop(now + stopOffset);
      };

      makeOsc(cfg.frequency || 760, 0.72, duration);
      makeOsc(cfg.secondaryFrequency || 1180, 0.28, duration * 0.72);
    } catch (err) {
      console.debug("[Cherry AI] Audio click skipped", err);
    }
  }

  function applyConfiguredVideos() {
    const heroCfg = CherryConfig.heroVideo || {};
    const boostCfg = CherryConfig.boostVideo || {};

    setVideoSources("hero-video-desktop", heroCfg.desktop);
    setVideoSources("hero-video-mobile", heroCfg.mobile);
    setVideoSources("boost-video-desktop", boostCfg.desktop);
    setVideoSources("boost-video-mobile", boostCfg.mobile);
  }

  function setVideoSources(videoId, mediaCfg) {
    const video = document.getElementById(videoId);
    if (!video || !mediaCfg) return;

    const sources = [];

    // Forma recomendada no config:
    // files: ["video.mp4", "video.webm", "video.mov"]
    if (Array.isArray(mediaCfg.files)) {
      mediaCfg.files.forEach((src) => {
        if (src) sources.push({ src, type: inferVideoType(src) });
      });
    }

    // Forma avançada opcional:
    // sources: [{ src: "video.mp4", type: "video/mp4" }]
    if (Array.isArray(mediaCfg.sources)) {
      mediaCfg.sources.forEach((item) => {
        if (!item) return;
        const src = item.src || item.url;
        if (src) sources.push({ src, type: item.type || inferVideoType(src) });
      });
    }

    // Compatibilidade com o modelo anterior, caso ainda exista em algum config.
    ["webm", "mp4", "ogg", "ogv", "mov", "m4v"].forEach((format) => {
      (mediaCfg[format] || []).forEach((src) => {
        if (src) sources.push({ src, type: inferVideoType(src) });
      });
    });

    if (!sources.length) return;

    video.innerHTML = sources
      .map((item) => `<source src="${item.src}"${item.type ? ` type="${item.type}"` : ""}>`)
      .join("");
  }

  function inferVideoType(src = "") {
    const clean = String(src).split("?")[0].split("#")[0].toLowerCase();
    if (clean.endsWith(".webm")) return "video/webm";
    if (clean.endsWith(".mp4")) return "video/mp4";
    if (clean.endsWith(".m4v")) return "video/mp4";
    if (clean.endsWith(".ogg") || clean.endsWith(".ogv")) return "video/ogg";
    if (clean.endsWith(".mov")) return "video/quicktime";
    return "";
  }

  function getConfiguredLink(type, index = null) {
    const links = CherryConfig.externalLinks || {};
    if (type === "demo" && Array.isArray(links.demos)) return links.demos[index] || "#";
    return links[type] || "#";
  }

  function getLangValue(value, fallback = "") {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return value[currentLang] || value.pt || value.en || value.es || fallback;
    }

    return value !== undefined && value !== null ? value : fallback;
  }

  function getWhatsAppAriaLabel(text) {
    const suffix = getLangValue({
      pt: "pelo WhatsApp",
      en: "on WhatsApp",
      es: "por WhatsApp"
    }, "pelo WhatsApp");

    return `${text} ${suffix}`.trim();
  }

  function applyExternalLinks() {
    document.querySelectorAll("[data-external-link]").forEach((el) => {
      const type = el.dataset.externalLink;
      const url = getConfiguredLink(type);
      if (!url || url === "#") return;

      el.href = url;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    });
  }

  function applyFloatingButtonConfig() {
    const stickyCfg = CherryConfig.stickyWhatsapp || {};
    const scrollCfg = CherryConfig.scrollLogoCta || {};
    const fallbackLogo = CherryConfig.brandAssets?.emblem || CherryConfig.brandAssets?.logo || "logosemfundo.png";
    const fallbackWhatsApp = getConfiguredLink("whatsapp");
    const stickyTextValue = getLangValue(stickyCfg.text, "Estamos aqui para atender");
    const stickyHoverValue = getLangValue(stickyCfg.hoverText, "Rodrigo online");
    const scrollTextValue = getLangValue(scrollCfg.text, "Vamos começar");
    const scrollHoverValue = getLangValue(scrollCfg.hoverText, stickyHoverValue);
    const stickyLink = getLangValue(stickyCfg.link, fallbackWhatsApp);
    const scrollLink = getLangValue(scrollCfg.link, stickyLink || fallbackWhatsApp);

    const stickyBtn = document.getElementById("sticky-whatsapp-btn");
    const stickyText = document.getElementById("sticky-whatsapp-text");
    const stickyTooltip = document.getElementById("sticky-whatsapp-tooltip");
    const stickyLogo = stickyBtn?.querySelector(".sticky-logo");

    if (stickyBtn) {
      stickyBtn.style.display = stickyCfg.enabled === false ? "none" : "";
      stickyBtn.href = stickyLink || fallbackWhatsApp;
      stickyBtn.target = "_blank";
      stickyBtn.rel = "noopener noreferrer";
      stickyBtn.setAttribute("aria-label", getWhatsAppAriaLabel(stickyTextValue));
      stickyBtn.style.setProperty("--sticky-logo-size", `${Number(stickyCfg.logoSize || 21)}px`);
      stickyBtn.style.setProperty("--sticky-logo-mobile-size", `${Number(stickyCfg.mobileLogoSize || stickyCfg.logoSize || 22)}px`);
    }

    if (stickyText) stickyText.textContent = stickyTextValue;
    if (stickyTooltip) stickyTooltip.textContent = stickyHoverValue;
    if (stickyLogo) stickyLogo.src = stickyCfg.logo || fallbackLogo;

    const scrollWrap = document.getElementById("scroll-logo-cta-wrap");
    const scrollBtn = document.getElementById("scroll-logo-cta");
    const scrollImg = document.getElementById("scroll-logo-cta-img");
    const scrollText = document.getElementById("scroll-logo-cta-text");
    const scrollTooltip = document.getElementById("scroll-logo-cta-tooltip");

    if (scrollWrap) {
      scrollWrap.style.display = scrollCfg.enabled === false ? "none" : "";
      scrollWrap.classList.remove("scroll-logo-cta-left", "scroll-logo-cta-right", "scroll-logo-cta-center", "scroll-logo-cta-mobile-left", "scroll-logo-cta-mobile-right", "scroll-logo-cta-mobile-center");
      scrollWrap.classList.add(`scroll-logo-cta-${scrollCfg.position?.desktop || "left"}`);
      scrollWrap.classList.add(`scroll-logo-cta-mobile-${scrollCfg.position?.mobile || "center"}`);
      scrollWrap.style.setProperty("--scroll-logo-size", `${Number(scrollCfg.logoSize || 34)}px`);
      scrollWrap.style.setProperty("--scroll-logo-mobile-size", `${Number(scrollCfg.mobileLogoSize || scrollCfg.logoSize || 42)}px`);
    }

    if (scrollBtn) {
      scrollBtn.href = scrollLink || stickyLink || fallbackWhatsApp;
      scrollBtn.target = "_blank";
      scrollBtn.rel = "noopener noreferrer";
      scrollBtn.setAttribute("aria-label", getWhatsAppAriaLabel(scrollTextValue));
    }

    if (scrollImg) {
      const isMobile = window.matchMedia("(max-width: 620px)").matches;
      scrollImg.src = (isMobile ? scrollCfg.mobileLogo : scrollCfg.logo) || scrollCfg.logo || fallbackLogo;
    }
    if (scrollText) scrollText.textContent = scrollTextValue;
    if (scrollTooltip) scrollTooltip.textContent = scrollHoverValue;
  }

  function initScrollLogoCta() {
    const wrap = document.getElementById("scroll-logo-cta-wrap");
    const cfg = CherryConfig.scrollLogoCta || {};
    if (!wrap || cfg.enabled === false) return;

    let ticking = false;
    const showAfter = Number(cfg.showAfterPx || 420);

    const update = () => {
      wrap.classList.toggle("show", window.scrollY > showAfter);
      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }, { passive: true });

    update();
  }

  function applyBackToTopConfig() {
    const cfg = CherryConfig.backToTop || {};
    const btn = document.getElementById("back-to-top");
    const icon = document.getElementById("back-to-top-icon");
    if (!btn) return;

    btn.style.display = cfg.enabled === false ? "none" : "";
    btn.setAttribute("aria-label", getLangValue(cfg.label, "Voltar ao topo"));
    if (icon) icon.textContent = cfg.icon || "↑";

    const desktop = cfg.position?.desktop || {};
    const mobile = cfg.position?.mobile || {};
    btn.style.setProperty("--back-to-top-right", `${Number(desktop.right || 28)}px`);
    btn.style.setProperty("--back-to-top-bottom", `${Number(desktop.bottom || 114)}px`);
    btn.style.setProperty("--back-to-top-mobile-right", `${Number(mobile.right || 18)}px`);
    btn.style.setProperty("--back-to-top-mobile-bottom", `${Number(mobile.bottom || 152)}px`);
  }

  function initBackToTopButton() {
    const btn = document.getElementById("back-to-top");
    const cfg = CherryConfig.backToTop || {};
    if (!btn || cfg.enabled === false) return;

    applyBackToTopConfig();

    let ticking = false;
    const showAfter = Number(cfg.showAfterPx || 620);

    const update = () => {
      btn.classList.toggle("show", window.scrollY > showAfter);
      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }, { passive: true });

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      fireEvent("cherry_back_to_top_click");
    });

    update();
  }

  function initBasicInspectProtection() {
    const cfg = CherryConfig.security || {};

    if (cfg.disableContextMenu) {
      document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
      });
    }

    if (!cfg.disableInspectShortcuts) return;

    document.addEventListener("keydown", (e) => {
      const key = String(e.key || "").toLowerCase();
      const blocked =
        key === "f12" ||
        (e.ctrlKey && e.shiftKey && ["i", "j", "c", "k"].includes(key)) ||
        (e.metaKey && e.altKey && ["i", "j", "c", "k"].includes(key)) ||
        (e.ctrlKey && key === "u") ||
        (e.metaKey && key === "u");

      if (!blocked) return;
      e.preventDefault();
      e.stopPropagation();
    }, true);
  }

  function initPeopleCounter() {
    const cfg = CherryConfig.peopleOnline || {};
    const wrap = document.getElementById("people-counter");
    const numberEl = document.getElementById("people-counter-number");
    if (!wrap || !numberEl) return;

    if (cfg.enabled === false) {
      wrap.style.display = "none";
      return;
    }

    let people = Number(cfg.initial || 18);
    const min = Number(cfg.min || 8);
    const max = Number(cfg.max || 32);

    const render = () => {
      people = Math.max(min, Math.min(max, people));
      numberEl.textContent = String(people);
      updatePeopleCounterLabel();
    };

    render();

    setInterval(() => {
      people += Math.random() > 0.5 ? 1 : -1;
      render();
    }, Number(cfg.variationMs || 9000));
  }

  function updatePeopleCounterLabel() {
    const labelEl = document.getElementById("people-counter-label");
    if (!labelEl) return;
    const cfg = CherryConfig.peopleOnline || {};
    const labels = cfg.label || {};
    labelEl.textContent = labels[currentLang] || labels.pt || "pessoas no site";
  }

  /* ═══════════════════════════════════════════════════════════
     HERO VIDEO
  ═══════════════════════════════════════════════════════════ */
  function initHeroVideo() {
    const videoEl = document.getElementById("hero-video-desktop");
    const videoMob = document.getElementById("hero-video-mobile");
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Mostra o vídeo correto
    if (isMobile) {
      if (videoEl) videoEl.style.display = "none";
      if (videoMob) {
        videoMob.style.display = "block";
        playVideo(videoMob);
      } else {
        showFallback();
      }
    } else {
      if (videoMob) videoMob.style.display = "none";
      if (videoEl) {
        playVideo(videoEl);
      } else {
        showFallback();
      }
    }
  }

  function playVideo(video) {
    if (!video) return;
    const sources = video.querySelectorAll("source");
    if (!sources.length) { showFallback(); return; }

    video.load();
    video.play().then(() => {
      video.classList.add("loaded");
    }).catch(() => {
      showFallback();
    });

    video.addEventListener("canplaythrough", () => {
      video.classList.add("loaded");
    }, { once: true });

    // Timeout fallback
    setTimeout(() => {
      if (!video.classList.contains("loaded")) showFallback();
    }, 4000);
  }

  function showFallback() {
    document.querySelector(".hero-fallback")?.style.setProperty("opacity", "1");
  }

  function initBoostVideo() {
    const desktop = document.getElementById("boost-video-desktop");
    const mobile = document.getElementById("boost-video-mobile");
    if (!desktop && !mobile) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const activeVideo = isMobile ? mobile : desktop;
    const inactiveVideo = isMobile ? desktop : mobile;

    if (inactiveVideo) {
      inactiveVideo.pause();
      inactiveVideo.style.display = "none";
    }

    if (activeVideo) {
      activeVideo.style.display = "block";
      activeVideo.muted = true;
      activeVideo.playsInline = true;
      activeVideo.setAttribute("playsinline", "");
      activeVideo.load();
      activeVideo.play().then(() => {
        activeVideo.classList.add("loaded");
      }).catch(() => {
        activeVideo.classList.add("loaded");
      });
      activeVideo.addEventListener("canplay", () => activeVideo.classList.add("loaded"), { once: true });
    }
  }

  /* ═══════════════════════════════════════════════════════════
     FAQ
  ═══════════════════════════════════════════════════════════ */
  function initFAQ() {
    // Delegação global: mantém o FAQ clicável mesmo após troca de idioma ou re-renderização.
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".faq-question");
      if (!btn) return;
      const faqList = btn.closest(".faq-list");
      const item = btn.closest(".faq-item");
      if (!faqList || !item) return;

      const isOpen = item.classList.contains("open");
      faqList.querySelectorAll(".faq-item").forEach((el) => {
        el.classList.remove("open");
        const q = el.querySelector(".faq-question");
        if (q) q.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  }

  /* ═══════════════════════════════════════════════════════════
     FORMULÁRIO DE DIAGNÓSTICO
  ═══════════════════════════════════════════════════════════ */
  function initForm() {
    const form = document.getElementById("diagnostic-form");
    if (!form) return;

    initSmartFormUX(form);

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearFormErrors(form);
      const data = collectFormData(form);
      const validation = validateFormData(data);

      if (!validation.valid) {
        showFieldError(form, validation.field, validation.message);
        fireEvent("cherry_form_validation_error", { field: validation.field });
        return;
      }

      const btn = form.querySelector(".form-submit");
      form.classList.add("is-submitting");
      if (btn) {
        btn.disabled = true;
        const btnText = btn.querySelector("span");
        if (btnText) btnText.textContent = t.diagnostic.submitting || "Enviando...";
        else btn.textContent = t.diagnostic.submitting || "Enviando...";
      }

      try {
        await Promise.allSettled([
          sendToN8N(data),
          sendToAppScript(data),
        ]);

        fireEvent("cherry_diagnostic_submit", data);
        showFormSuccess();
        openWhatsApp(data);
      } catch (err) {
        console.error("Cherry form error:", err);
        // Mesmo com erro, abre WhatsApp
        fireEvent("cherry_diagnostic_submit", data);
        showFormSuccess();
        openWhatsApp(data);
      }
    });
  }

  function initSmartFormUX(form) {
    const cfg = CherryConfig.formUX || {};
    const intelligence = document.getElementById("form-intelligence");
    if (intelligence) {
      intelligence.style.display = cfg.enabled === false ? "none" : "";
    }
    if (cfg.enabled === false || form.dataset.smartUxBound === "true") return;
    form.dataset.smartUxBound = "true";

    const fields = form.querySelectorAll("input, textarea, select");
    fields.forEach((field) => {
      const group = field.closest(".form-group");

      field.addEventListener("focus", () => {
        group?.classList.add("is-active");
        updateSmartHint(field.name);
      });

      field.addEventListener("blur", () => {
        group?.classList.remove("is-active");
        updateFieldCompleteState(field);
      });

      field.addEventListener("input", () => {
        if (cfg.whatsappMask !== false && field.name === "whatsapp") {
          field.value = formatWhatsAppValue(field.value);
        }
        if (cfg.autoResizeMessage !== false && field.tagName === "TEXTAREA") {
          autoResizeTextarea(field);
        }
        updateFieldCompleteState(field);
        updateFormProgress();
      });

      field.addEventListener("change", () => {
        updateFieldCompleteState(field);
        updateFormProgress();
      });

      updateFieldCompleteState(field);
    });

    updateSmartHint("");
    updateFormProgress();
  }

  function updateFieldCompleteState(field) {
    const group = field.closest(".form-group");
    if (!group) return;

    const value = String(field.value || "").trim();
    const isSelect = field.tagName === "SELECT";
    const isComplete = isSelect ? Boolean(value) : Boolean(value.length);
    group.classList.toggle("is-complete", isComplete);
  }

  function updateSmartHint(fieldName) {
    const cfg = CherryConfig.formUX || {};
    const hintEl = document.getElementById("form-smart-hint");
    if (!hintEl || cfg.focusHints === false) return;

    const fallback = "Preencha os dados principais para receber um atendimento mais preciso.";
    hintEl.textContent = cfg.hints?.[fieldName] || fallback;
  }

  function updateFormProgress() {
    const cfg = CherryConfig.formUX || {};
    if (cfg.enabled === false || cfg.progressEnabled === false) return;

    const form = document.getElementById("diagnostic-form");
    const bar = document.getElementById("form-progress-bar");
    const count = document.getElementById("form-progress-count");
    if (!form || !bar || !count) return;

    const requiredNames = ["name", "whatsapp", "improve", "interest"];
    const optionalNames = ["company", "segment", "message"];
    const allNames = requiredNames.concat(optionalNames);

    const score = allNames.reduce((total, name) => {
      const field = form.querySelector(`[name="${name}"]`);
      if (!field) return total;
      const value = String(field.value || "").trim();
      if (!value) return total;
      return total + (requiredNames.includes(name) ? 1.25 : 0.55);
    }, 0);

    const maxScore = requiredNames.length * 1.25 + optionalNames.length * 0.55;
    const percent = Math.min(100, Math.round((score / maxScore) * 100));

    bar.style.width = `${percent}%`;
    count.textContent = `${percent}%`;
  }

  function formatWhatsAppValue(value = "") {
    const digits = String(value).replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits ? `(${digits}` : "";
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  function autoResizeTextarea(field) {
    field.style.height = "auto";
    field.style.height = `${Math.max(field.scrollHeight, 100)}px`;
  }

  function collectFormData(form) {
    const get = (name) => form.querySelector(`[name="${name}"]`)?.value?.trim() || "";
    return {
      name: get("name"),
      whatsapp: get("whatsapp"),
      company: get("company"),
      segment: get("segment"),
      improve: get("improve"),
      interest: get("interest"),
      message: get("message"),
      lang: currentLang,
      timestamp: new Date().toISOString(),
      source: window.location.href,
    };
  }

  function validateFormData(data) {
    const labels = t.diagnostic?.fields || {};
    const selectWords = ["selecione", "selecionar", "select"];

    if (!data.name) {
      return { valid: false, field: "name", message: `${labels.name || "Nome"} é obrigatório.` };
    }

    const phoneDigits = data.whatsapp.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      return { valid: false, field: "whatsapp", message: "Informe um WhatsApp válido com DDD." };
    }

    if (!data.improve || selectWords.some((word) => data.improve.toLowerCase().includes(word))) {
      return { valid: false, field: "improve", message: "Escolha o que você deseja melhorar." };
    }

    if (!data.interest || selectWords.some((word) => data.interest.toLowerCase().includes(word))) {
      return { valid: false, field: "interest", message: "Escolha o interesse principal." };
    }

    return { valid: true };
  }

  function clearFormErrors(form) {
    form.querySelectorAll(".form-error-text").forEach((el) => el.remove());
    form.querySelectorAll("[aria-invalid='true']").forEach((el) => el.removeAttribute("aria-invalid"));
  }

  function showFieldError(form, fieldName, message) {
    const field = form.querySelector(`[name="${fieldName}"]`);
    if (!field) return;

    field.setAttribute("aria-invalid", "true");
    const visualField = field.nextElementSibling?.classList?.contains("cherry-select")
      ? field.nextElementSibling.querySelector(".cherry-select__button")
      : field;

    const error = document.createElement("p");
    error.className = "form-error-text";
    error.textContent = message;

    const group = field.closest(".form-group") || field.parentElement;
    group?.appendChild(error);
    visualField?.focus({ preventScroll: true });
    group?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function buildWhatsAppMessage(data) {
    const labels = t.diagnostic.fields;
    const lines = [
      `*Cherry AI — Diagnóstico Gratuito*`,
      ``,
      `👤 *${labels.name}:* ${data.name}`,
      `📱 *WhatsApp:* ${data.whatsapp}`,
      `🏢 *${labels.company}:* ${data.company}`,
      `🏷️ *${labels.segment}:* ${data.segment}`,
      `🎯 *${labels.improve}:* ${data.improve}`,
      `⭐ *${labels.interest}:* ${data.interest}`,
      data.message ? `💬 *${labels.message}:* ${data.message}` : "",
      ``,
      `📅 ${new Date().toLocaleString(currentLang === "pt" ? "pt-BR" : currentLang === "es" ? "es-ES" : "en-US")}`,
    ].filter(Boolean);
    return lines.join("\n");
  }

  function openWhatsApp(data) {
    const number = CherryConfig.whatsapp.number;
    const msg = encodeURIComponent(buildWhatsAppMessage(data));
    const url = `https://wa.me/${number}?text=${msg}`;
    // Abre em nova aba após 1.5s (para mostrar o sucesso)
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      fireEvent("cherry_whatsapp_click", { context: "diagnostic_form" });
    }, 1500);
  }

  function showFormSuccess() {
    const formEl = document.getElementById("diagnostic-form");
    const successEl = document.getElementById("form-success");
    if (formEl) formEl.style.display = "none";
    if (successEl) successEl.classList.add("show");
  }

  /* ── Integração n8n ─────────────────────────────────────── */
  async function sendToN8N(data) {
    const cfg = CherryConfig.integrations.n8n;
    if (!cfg.enabled || !cfg.url) return;
    await fetch(cfg.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  /* ── Integração Google Apps Script ─────────────────────── */
  async function sendToAppScript(data) {
    const cfg = CherryConfig.integrations.appScript;
    if (!cfg.enabled || !cfg.url) return;
    const params = new URLSearchParams(data);
    await fetch(`${cfg.url}?${params.toString()}`);
  }

  /* ═══════════════════════════════════════════════════════════
     ANALYTICS / EVENTOS
  ═══════════════════════════════════════════════════════════ */
  function initGTM() {
    const cfg = CherryConfig.integrations.gtm;
    if (!cfg.enabled || !cfg.id) return;
    window.dataLayer = window.dataLayer || [];
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${cfg.id}`;
    document.head.appendChild(script);
    window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  }

  function initMetaPixel() {
    const cfg = CherryConfig.integrations.metaPixel;
    if (!cfg.enabled || !cfg.pixelId) return;
    /* eslint-disable */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq("init", cfg.pixelId);
    window.fbq("track", "PageView");
  }

  function initTikTokPixel() {
    const cfg = CherryConfig.integrations.tiktokPixel;
    if (!cfg?.enabled || !cfg.pixelId) return;

    /* eslint-disable */
    !function (w, d, t) {
      w.TiktokAnalyticsObject = t;
      var ttq = w[t] = w[t] || [];
      ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
      ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } };
      for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
      ttq.instance = function (t) {
        for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
        return e;
      };
      ttq.load = function (e, n) {
        var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
        ttq._i = ttq._i || {};
        ttq._i[e] = [];
        ttq._i[e]._u = i;
        ttq._t = ttq._t || {};
        ttq._t[e] = +new Date;
        ttq._o = ttq._o || {};
        ttq._o[e] = n || {};
        var o = document.createElement("script");
        o.type = "text/javascript";
        o.async = true;
        o.src = i + "?sdkid=" + e + "&lib=" + t;
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(o, a);
      };
      ttq.load(cfg.pixelId);
      ttq.page();
    }(window, document, "ttq");
    /* eslint-enable */
  }

  function fireEvent(eventName, params = {}) {
    // GTM dataLayer
    if (CherryConfig.integrations.gtm?.enabled) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: eventName, ...params });
    }
    // Meta Pixel
    if (CherryConfig.integrations.metaPixel?.enabled && window.fbq) {
      window.fbq("trackCustom", eventName, params);
    }
    // TikTok Pixel
    if (CherryConfig.integrations.tiktokPixel?.enabled && window.ttq) {
      window.ttq.track(eventName, params);
    }
    // Debug
    console.debug(`[Cherry AI] Event: ${eventName}`, params);
  }

  window.fireEvent = fireEvent;

  /* ═══════════════════════════════════════════════════════════
     REVEAL ON SCROLL (Intersection Observer)
  ═══════════════════════════════════════════════════════════ */
  let observer;

  function initReveal() {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }

  function reObserve(els) {
    if (!observer) return;
    els.forEach((el) => {
      el.classList.remove("visible");
      observer.observe(el);
    });
  }

  /* ═══════════════════════════════════════════════════════════
     HELPERS
  ═══════════════════════════════════════════════════════════ */
  function setText(selector, value) {
    if (value === undefined) return;
    document.querySelectorAll(selector).forEach((el) => {
      el.textContent = value;
    });
  }

  function setAttr(selector, attr, value) {
    const el = document.querySelector(selector);
    if (el && value !== undefined) el.setAttribute(attr, value);
  }

  function setLabel(selector, value) {
    const el = document.querySelector(selector);
    if (el && value !== undefined) el.textContent = value;
  }

  function updateSelect(selector, opts) {
    const el = document.querySelector(selector);
    if (!el || !Array.isArray(opts)) return;
    const current = el.value;
    el.required = true;
    el.innerHTML = opts.map((o, i) => {
      const label = String(o);
      const isPlaceholder = i === 0;
      return `<option value="${isPlaceholder ? "" : escapeAttr(label)}"${isPlaceholder ? " disabled" : ""}>${escapeHTML(label)}</option>`;
    }).join("");
    // Tenta preservar a seleção
    if ([...el.options].some((o) => o.value === current)) el.value = current;
    else el.selectedIndex = 0;
  }

  /* Select customizado Cherry: mantém o select original para o formulário,
     mas cria uma interface própria para não aparecer azul no menu aberto. */
  function enhanceCherrySelects() {
    document.querySelectorAll(".form-select").forEach((select) => {
      let wrapper = select.nextElementSibling;
      if (!wrapper || !wrapper.classList.contains("cherry-select")) {
        wrapper = document.createElement("div");
        wrapper.className = "cherry-select";
        wrapper.innerHTML = `
          <button class="cherry-select__button" type="button" aria-haspopup="listbox" aria-expanded="false"></button>
          <div class="cherry-select__menu" role="listbox"></div>
        `;
        select.insertAdjacentElement("afterend", wrapper);
      }

      const button = wrapper.querySelector(".cherry-select__button");
      const menu = wrapper.querySelector(".cherry-select__menu");
      const options = Array.from(select.options);

      button.textContent = select.options[select.selectedIndex]?.textContent || options[0]?.textContent || "";
      menu.innerHTML = options.map((opt, index) => `
        <button
          class="cherry-select__option${index === select.selectedIndex ? " is-selected" : ""}${opt.disabled ? " is-disabled" : ""}"
          type="button"
          role="option"
          aria-selected="${index === select.selectedIndex ? "true" : "false"}"
          aria-disabled="${opt.disabled ? "true" : "false"}"
          data-value="${escapeAttr(opt.value)}"
        >${escapeHTML(opt.textContent)}</button>
      `).join("");

      if (!wrapper.dataset.bound) {
        wrapper.dataset.bound = "true";

        button.addEventListener("click", (e) => {
          e.stopPropagation();
          closeCherrySelects(wrapper);
          const isOpen = wrapper.classList.toggle("open");
          button.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        menu.addEventListener("click", (e) => {
          const option = e.target.closest(".cherry-select__option");
          if (!option) return;
          if (option.getAttribute("aria-disabled") === "true") return;
          select.value = option.dataset.value;
          select.dispatchEvent(new Event("change", { bubbles: true }));
          button.textContent = option.textContent;
          menu.querySelectorAll(".cherry-select__option").forEach((o) => {
            const selected = o === option;
            o.classList.toggle("is-selected", selected);
            o.setAttribute("aria-selected", selected ? "true" : "false");
          });
          wrapper.classList.remove("open");
          button.setAttribute("aria-expanded", "false");
        });
      }
    });
  }

  function closeCherrySelects(except = null) {
    document.querySelectorAll(".cherry-select.open").forEach((select) => {
      if (select === except) return;
      select.classList.remove("open");
      select.querySelector(".cherry-select__button")?.setAttribute("aria-expanded", "false");
    });
  }

  document.addEventListener("click", () => closeCherrySelects());
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCherrySelects();
  });

  function escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  function escapeAttr(value = "") {
    return escapeHTML(value).replace(/`/g, "&#96;");
  }
})();
