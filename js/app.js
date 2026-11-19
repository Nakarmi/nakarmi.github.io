/**
 * Bipin Nakarmi portfolio — application behaviour.
 *
 * Edit the CONFIG object below to update profile links and form endpoint.
 * The rest of this file is deliberately data-driven and progressively enhanced.
 */

"use strict";

const CONFIG = {
  email: "bpin.nakarmi77@gmail.com",

  // Add your actual profile URLs. Empty strings keep the respective links hidden.
  social: {
    instagram: "",
    behance: "",
    linkedin: ""
  },

  // Optional public CV file. Put your PDF at this path or change the URL.
  cvUrl: "assets/Bipin-Nakarmi-CV.pdf",

  /**
   * Contact form options:
   * 1) Recommended: configure a serverless endpoint (Formspree, Getform,
   *    Netlify Forms, or your own API) and paste its HTTPS URL here.
   * 2) Do not put private API keys or email-provider secrets in frontend JS.
   *
   * Example: "https://formspree.io/f/your-form-id"
   */
  formEndpoint: ""
};

const SELECTORS = {
  nav: "[data-nav]",
  menuToggle: "[data-menu-toggle]",
  sections: "main > .section",
  reveal: ".reveal",
  projectTrack: "[data-project-track]",
  carouselPrev: "[data-carousel-prev]",
  carouselNext: "[data-carousel-next]",
  carouselStatus: "[data-carousel-status]",
  contactForm: "[data-contact-form]",
  formFeedback: "[data-form-feedback]"
};

function initNavigation() {
  const nav = document.querySelector(SELECTORS.nav);
  const toggle = document.querySelector(SELECTORS.menuToggle);
  if (!nav || !toggle) return;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  nav.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const sections = [...document.querySelectorAll(SELECTORS.sections)];
  const navLinks = [...nav.querySelectorAll('a[href^="#"]')];

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const activeId = `#${entry.target.id}`;
        navLinks.forEach((link) => {
          const active = link.getAttribute("href") === activeId;
          link.classList.toggle("is-active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

    sections.forEach((section) => sectionObserver.observe(section));
  }
}

function initRevealAnimations() {
  const elements = document.querySelectorAll(SELECTORS.reveal);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  elements.forEach((element) => revealObserver.observe(element));
}

function initProjectCarousel() {
  const track = document.querySelector(SELECTORS.projectTrack);
  const previous = document.querySelector(SELECTORS.carouselPrev);
  const next = document.querySelector(SELECTORS.carouselNext);
  const status = document.querySelector(SELECTORS.carouselStatus);
  if (!track || !previous || !next) return;

  const cards = [...track.querySelectorAll(".project-card")];
  if (!cards.length) return;

  const getCardStep = () => {
    const first = cards[0];
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap) || 0;
    return first.getBoundingClientRect().width + gap;
  };

  const getActiveIndex = () => {
    const step = getCardStep();
    return Math.min(cards.length, Math.max(1, Math.round(track.scrollLeft / step) + 1));
  };

  const updateStatus = () => {
    if (status) status.textContent = `Project ${getActiveIndex()} of ${cards.length}`;
  };

  previous.addEventListener("click", () => {
    track.scrollBy({ left: -getCardStep(), behavior: "smooth" });
  });

  next.addEventListener("click", () => {
    track.scrollBy({ left: getCardStep(), behavior: "smooth" });
  });

  let scrollFrame = null;
  track.addEventListener("scroll", () => {
    if (scrollFrame) cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(updateStatus);
  }, { passive: true });

  window.addEventListener("resize", updateStatus, { passive: true });
  updateStatus();
}

function initSocialLinks() {
  document.querySelectorAll("[data-social]").forEach((anchor) => {
    const platform = anchor.dataset.social;
    const url = CONFIG.social[platform];

    if (url && /^https:\/\/|^http:\/\//i.test(url)) {
      anchor.href = url;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.hidden = false;
    } else {
      anchor.hidden = true;
    }
  });
}

function initCvLink() {
  const link = document.querySelector("[data-cv-link]");
  if (!link) return;
  link.href = CONFIG.cvUrl;
}

function setFormFeedback(message, state = "") {
  const feedback = document.querySelector(SELECTORS.formFeedback);
  if (!feedback) return;
  feedback.textContent = message;
  if (state) feedback.dataset.state = state;
  else delete feedback.dataset.state;
}

function initContactForm() {
  const form = document.querySelector(SELECTORS.contactForm);
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    if (!CONFIG.formEndpoint) {
      setFormFeedback(
        `The form is designed for ${CONFIG.email}, but it is not connected yet. Configure CONFIG.formEndpoint in js/app.js before publishing.`,
        "error"
      );
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = "Sending…";
    setFormFeedback("Sending your message…");

    try {
      const formData = new FormData(form);
      const response = await fetch(CONFIG.formEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (!response.ok) {
        throw new Error(`Form endpoint returned ${response.status}`);
      }

      form.reset();
      setFormFeedback("Thank you — your message has been sent successfully.", "success");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setFormFeedback("Sorry, the message could not be sent. Please email me directly at " + CONFIG.email + ".", "error");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
}

function initFooterYear() {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
}

function init() {
  initNavigation();
  initRevealAnimations();
  initProjectCarousel();
  initSocialLinks();
  initCvLink();
  initContactForm();
  initFooterYear();
}

document.addEventListener("DOMContentLoaded", init);
