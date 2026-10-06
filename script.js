/* Renders content from data.js and adds horizontal scrolling behavior. */
(() => {
  const D = PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const track = $("track");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Small helper: create element with props and children. */
  const el = (tag, props = {}, ...kids) => {
    const node = document.createElement(tag);
    Object.entries(props).forEach(([key, value]) => {
      if (key === "dataset") Object.assign(node.dataset, value);
      else node[key] = value;
    });
    kids.flat().forEach((k) => node.append(k));
    return node;
  };

  const navIcons = {
    home: "M3 10.5 12 3l9 7.5M5.5 9v11h13V9M9 20v-6h6v6",
    work: "M3 7h18v14H3zM8 7V4h8v3M3 12h18M10 12v2h4v-2",
    about: "M20 21a8 8 0 0 0-16 0M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
    services: "M4 7h16v14H4zM9 7V4h6v3M4 12h16M10 12v2h4v-2",
    contact: "M3 5h18v14H3zM3 6l9 7 9-7",
  };

  function colorChannels(color) {
    const values = color.match(/[\d.]+/g)?.map(Number);
    return values?.length >= 3 ? values : null;
  }

  function relativeLuminance([r, g, b]) {
    const linear = [r, g, b].map((channel) => {
      const value = channel / 255;
      return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
    });
    return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
  }

  function updateNavTheme(panel) {
    const nav = document.querySelector(".topbar");
    const panelColor = colorChannels(getComputedStyle(panel).backgroundColor);
    const pageColor = colorChannels(getComputedStyle(document.body).backgroundColor);
    const [r, g, b, alpha = 1] = panelColor || pageColor;
    const [pr, pg, pb] = pageColor;
    const background = [r * alpha + pr * (1 - alpha), g * alpha + pg * (1 - alpha), b * alpha + pb * (1 - alpha)];
    const luminance = relativeLuminance(background);
    const contrast = (candidate) => {
      const candidateLuminance = relativeLuminance(candidate);
      return (Math.max(luminance, candidateLuminance) + 0.05) / (Math.min(luminance, candidateLuminance) + 0.05);
    };
    const foreground = contrast([23, 26, 74]) >= contrast([255, 255, 255]) ? "#171a4a" : "#ffffff";
    nav.style.backgroundColor = `rgb(${background.map(Math.round).join(", ")})`;
    nav.style.color = foreground;
  }

  function navIcon(sectionId) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", navIcons[sectionId]);
    svg.append(path);
    return svg;
  }

  /* ---------- Render content ---------- */
  function render() {
    document.title = `${D.name} | ${D.role}`;
    //$("logo").textContent = D.logo || D.name;
    $("heroRole").textContent = `${D.role} in ${D.location}`;
    $("heroTag").textContent = D.tagline;

    const name = $("heroName");
    name.setAttribute("aria-label", D.name);
    [...D.name].forEach((ch, i) => {
      const s = el("span", { textContent: ch });
      s.style.setProperty("--i", i);
      s.setAttribute("aria-hidden", "true");
      name.append(s);
    });

    $("workTitle").textContent = D.work.title;
    $("workText").textContent = D.work.text;
    $("projects").append(...D.projects.map(projectCard));

    $("aboutTitle").textContent = D.about.title;
    $("aboutBody").append(...D.about.paragraphs.map((t) => el("p", { textContent: t })));
    $("skills").append(...D.about.skills.map((t) => el("li", { textContent: t })));
    $("tools").append(...D.about.tools.map((t) => el("li", { textContent: t })));

    $("servicesTitle").textContent = D.services.title;
    $("services").append(...D.services.items.map((s) =>
      el("li", {}, el("h3", { textContent: s.title }), el("p", { textContent: s.text }))));

    $("contactTitle").textContent = D.contact.title;
    const mail = $("mail");
    mail.textContent = D.contact.email;
    mail.href = `mailto:${D.contact.email}`;
    $("socials").append(...D.contact.socials.map((s) =>
      el("li", {}, el("a", { href: s.url, textContent: s.label, target: "_blank", rel: "noopener noreferrer" }))));
    //$("foot").textContent = `© ${new Date().getFullYear()} ${D.name}. Designed and coded by hand.`;

    $("nav").append(...[...track.querySelectorAll(".panel")].map((p) =>
      el("a", { href: `#${p.id}`, dataset: { target: p.id } },
        navIcon(p.id), el("span", { textContent: p.dataset.title }))));
  }

  function projectCard(p) {
    const card = el("a", { className: "project", href: p.link || "#", target: "_blank", rel: "noopener noreferrer" });
    card.style.setProperty("--c", p.color);
    if (p.image) card.append(el("img", { src: p.image, alt: p.title, loading: "lazy" }));
    else card.append(el("span", { className: "project__shape" }));
    card.append(el("div", { className: "project__info" },
      el("p", { className: "project__meta", textContent: `${p.category}, ${p.year}` }),
      el("h3", { className: "project__title", textContent: p.title }),
      el("p", { className: "project__desc", textContent: p.description })));
    return card;
  }

  /* ---------- Smooth wheel-to-horizontal scrolling ---------- */
  let target = 0, current = 0, raf = null;
  const maxScroll = () => track.scrollWidth - track.clientWidth;
  const clamp = (v) => Math.max(0, Math.min(maxScroll(), v));

  function tick() {
    current += (target - current) * 0.12;
    if (Math.abs(target - current) < 0.5) current = target;
    track.scrollLeft = current;
    raf = current === target ? null : requestAnimationFrame(tick);
  }
  const glideTo = (x) => {
    target = clamp(x);
    if (reduceMotion) { track.scrollLeft = current = target; return; }
    if (!raf) { current = track.scrollLeft; raf = requestAnimationFrame(tick); }
  };

  track.addEventListener("wheel", (e) => {
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;   // native horizontal gestures pass through
    e.preventDefault();
    if (!raf) target = track.scrollLeft;
    glideTo(target + e.deltaY * (e.deltaMode === 1 ? 32 : 1));
  }, { passive: false });

  track.addEventListener("scroll", () => {
    if (!raf) target = current = track.scrollLeft;
    updateUI();
  }, { passive: true });

  /* ---------- Nav, progress, active section ---------- */
  function updateUI() {
    const max = maxScroll();
    $("bar").style.width = `${max > 0 ? (track.scrollLeft / max) * 100 : 0}%`;
    const mid = track.scrollLeft + track.clientWidth / 2;
    let active = null;
    track.querySelectorAll(".panel").forEach((p) => { if (p.offsetLeft <= mid) active = p.id; });
    if (track.scrollLeft >= max - 2) active = track.lastElementChild.id;
    if (active) updateNavTheme($(active));
    document.querySelectorAll("[data-target]").forEach((a) =>
      a.id === "logo" || a.setAttribute("aria-current", String(a.dataset.target === active)));
  }

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-target]");
    if (!a) return;
    e.preventDefault();
    glideTo($(a.dataset.target).offsetLeft);
  });

  document.addEventListener("keydown", (e) => {
    if (e.target.closest("input, textarea")) return;
    const step = track.clientWidth * 0.6;
    if (e.key === "ArrowRight" || e.key === "PageDown") { e.preventDefault(); glideTo(track.scrollLeft + step); }
    if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); glideTo(track.scrollLeft - step); }
    if (e.key === "Home") glideTo(0);
    if (e.key === "End") glideTo(maxScroll());
  });

  addEventListener("resize", updateUI);

  render();
  updateUI();
  track.focus({ preventScroll: true });
})();
