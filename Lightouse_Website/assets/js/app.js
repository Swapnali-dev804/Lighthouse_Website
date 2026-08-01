/* ============================================================
   Lighthouse Learning Hub — App
   Reusable components + per-page rendering.
   All content comes from assets/js/data.js — edit content there.
   ============================================================ */

(function () {
  "use strict";

  var CFG = window.SITE_CONFIG;
  var COURSES = window.COURSES;

  /* ---------------- helpers ---------------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function fmtNum(n) {
    if (typeof n !== "number") return n;
    return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(n);
  }

  function getParam(name) {
    return new URLSearchParams(location.search).get(name);
  }

  function courseById(id) {
    for (var i = 0; i < COURSES.length; i++) if (COURSES[i].id === id) return COURSES[i];
    return null;
  }

  function hexToRgba(hex, a) {
    var h = hex.replace("#", "");
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var n = parseInt(h, 16);
    return "rgba(" + (n >> 16 & 255) + "," + (n >> 8 & 255) + "," + (n & 255) + "," + a + ")";
  }

  var STATUS_LABEL = { live: "Live", "in-progress": "In Progress", "coming-soon": "Coming Soon" };
  var TYPE_LABEL = { pdf: "PDF", cheatsheet: "Cheat Sheet", code: "Source Code", prompts: "Prompt Pack", assignment: "Assignments", practice: "Practice Files" };

  /* ---------------- inline icons ---------------- */
  var I = {
    play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v13.72c0 .8.87 1.3 1.56.88l10.54-6.86a1.05 1.05 0 0 0 0-1.76L9.56 4.26A1.04 1.04 0 0 0 8 5.14z"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    level: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="5" y1="20" x2="5" y2="14"/><line x1="12" y1="20" x2="12" y2="9"/><line x1="19" y1="20" x2="19" y2="4"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
    chevron: '<svg class="accordion__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    smartphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    dot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/></svg>',
    /* resource types */
    pdf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>',
    cheatsheet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    prompts: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3z"/></svg>',
    assignment: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="m9 14 2 2 4-4"/></svg>',
    practice: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    /* trust icons */
    free: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12V8H4v4"/><path d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"/><path d="M12 8v12"/><path d="M12 8a3 3 0 1 0-3-3c0 1.66 1.34 3 3 3z"/><path d="M12 8a3 3 0 1 1 3-3c0 1.66-1.34 3-3 3z"/></svg>',
    fresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
    beginner: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    project: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    community: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
    roadmap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>',
    /* social */
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg>',
    discord: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.52.07.07 0 0 0-.08.04c-.21.38-.44.87-.6 1.25a18.27 18.27 0 0 0-5.49 0 12.6 12.6 0 0 0-.62-1.25.08.08 0 0 0-.08-.04 19.74 19.74 0 0 0-4.88 1.52.07.07 0 0 0-.03.03C.53 9.05-.32 13.58.1 18.06a.08.08 0 0 0 .03.05 19.9 19.9 0 0 0 6 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.22-2a.08.08 0 0 0-.04-.1 13.1 13.1 0 0 1-1.87-.9.08.08 0 0 1-.01-.13c.13-.09.25-.19.37-.29a.07.07 0 0 1 .08-.01c3.93 1.8 8.18 1.8 12.06 0a.07.07 0 0 1 .08 0c.12.11.25.21.37.3a.08.08 0 0 1 0 .13c-.6.35-1.22.64-1.88.9a.08.08 0 0 0-.04.1c.36.7.78 1.36 1.23 2a.08.08 0 0 0 .08.02 19.84 19.84 0 0 0 6.03-3.02.08.08 0 0 0 .03-.06c.5-5.17-.84-9.66-3.55-13.65a.06.06 0 0 0-.03-.03zM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.22 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3z"/></svg>',
    twitter: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82L5 21.75H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23zm-1.16 17.52h1.83L7.08 4.13H5.12z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z"/></svg>'
  };

  /* ---------------- shared components ---------------- */
  var NAV_LINKS = [
    { href: "index.html", label: "Home", page: "home" },
    { href: "courses.html", label: "Courses", page: "courses" },
    { href: "resources.html", label: "Resources", page: "resources" },
    { href: "roadmap.html", label: "Roadmap", page: "roadmap" },
    { href: "about.html", label: "About", page: "about" }
  ];

  function renderNavbar() {
    var page = document.body.getAttribute("data-page");
    var host = $("#site-header");
    if (!host) return;
    host.innerHTML =
      '<nav class="navbar" aria-label="Main navigation">' +
      '<div class="container navbar__inner">' +
      '<a class="navbar__logo" href="index.html"><img src="assets/img/logo.svg" alt="" width="34" height="34"><span>' + esc(CFG.name) + "</span></a>" +
      '<div class="navbar__links" id="nav-links">' +
      NAV_LINKS.map(function (l) {
        return '<a href="' + l.href + '"' + (l.page === page ? ' class="active" aria-current="page"' : "") + ">" + l.label + "</a>";
      }).join("") +
      "</div>" +
      '<div class="navbar__cta">' +
      '<a class="btn btn--youtube btn--sm" href="' + esc(CFG.social.youtube) + '" target="_blank" rel="noopener">' + I.youtube + " Subscribe</a>" +
      '<button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle menu"><span></span><span></span><span></span></button>' +
      "</div></div></nav>";

    var toggle = $("#nav-toggle");
    var links = $("#nav-links");
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
    });

    var nav = $(".navbar");
    function onScroll() { nav.classList.toggle("scrolled", window.scrollY > 12); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function renderFooter() {
    var host = $("#site-footer");
    if (!host) return;
    var courseLinks = COURSES.filter(function (c) { return c.status !== "coming-soon"; }).slice(0, 5)
      .map(function (c) { return '<a href="course.html?id=' + c.id + '">' + esc(c.title) + "</a>"; }).join("");
    // only render social links that are actually configured in data.js
    var socialLinks = [["youtube", "YouTube"], ["discord", "Discord"], ["github", "GitHub"], ["twitter", "X (Twitter)"], ["linkedin", "LinkedIn"]]
      .filter(function (s) { return CFG.social[s[0]]; })
      .map(function (s) { return '<a href="' + esc(CFG.social[s[0]]) + '" target="_blank" rel="noopener" aria-label="' + s[1] + '">' + I[s[0]] + "</a>"; })
      .join("");
    // supports multiple numbers separated by "/" — each gets its own tel: link
    var phoneLinks = CFG.contact.phone.split("/").map(function (p) {
      p = p.trim();
      return '<a href="tel:' + p.replace(/[^+\d]/g, "") + '">' + esc(p) + "</a>";
    }).join("");
    host.innerHTML =
      '<footer class="footer">' +
      '<div class="container footer__grid">' +
      '<div class="footer__brand">' +
      '<a class="footer__logo" href="index.html"><img src="assets/img/logo.svg" alt="" width="30" height="30"><span>' + esc(CFG.name) + "</span></a>" +
      "<p>" + esc(CFG.description) + "</p>" +
      '<div class="footer__social">' + socialLinks + "</div></div>" +
      '<div class="footer__col"><h4>Courses</h4>' + courseLinks + '<a href="courses.html">View all →</a></div>' +
      '<div class="footer__col"><h4>Explore</h4>' +
      '<a href="resources.html">Resources</a><a href="roadmap.html">Roadmap</a><a href="about.html">About</a></div>' +
      '<div class="footer__col"><h4>Contact us</h4>' +
      '<a href="mailto:' + esc(CFG.contact.email) + '">' + esc(CFG.contact.email) + "</a>" +
      phoneLinks +
      '<a href="' + esc(CFG.social.youtube) + '" target="_blank" rel="noopener">YouTube Channel</a></div>' +
      "</div>" +
      '<div class="container footer__bottom">' +
      "<span>© " + new Date().getFullYear() + " " + esc(CFG.name) + ". All courses free, forever.</span>" +
      "<span>Built with ♥ for the developer community.</span>" +
      "</div></footer>";
  }

  function courseCard(c) {
    var isSoon = c.status === "coming-soon";
    var playBtn = isSoon
      ? '<span class="btn btn--youtube btn--sm btn--disabled">' + I.play + " Playlist</span>"
      : '<a class="btn btn--youtube btn--sm" href="' + esc(c.playlist) + '" target="_blank" rel="noopener">' + I.play + " Playlist</a>";
    var appBtn = '<button type="button" class="btn btn--app btn--sm js-app-watch">' + I.smartphone + " Watch on App</button>";
    var resBtn = c.resources.length
      ? '<a class="btn btn--ghost btn--sm" href="resources.html#' + c.id + '">' + I.download + " Resources</a>"
      : "";
    var accentVars =
      "--accent:" + c.accent +
      ";--accent-soft:" + hexToRgba(c.accent, 0.16) +
      ";--accent-border:" + hexToRgba(c.accent, 0.38) +
      ";--card-glow: 0 0 42px " + hexToRgba(c.accent, 0.28);
    return (
      '<article class="glass course-card reveal" style="' + accentVars + '">' +
      '<div class="course-card__media">' +
      '<img src="' + c.cover + '" alt="' + esc(c.title) + ' course cover" loading="lazy" width="640" height="360">' +
      '<span class="badge badge--' + c.status + ' course-card__status">' + STATUS_LABEL[c.status] + "</span>" +
      '<span class="badge badge--free course-card__free">FREE</span>' +
      "</div>" +
      '<div class="course-card__body">' +
      '<div class="course-card__meta">' +
      "<span>" + I.level + esc(c.level) + "</span>" +
      "<span>" + I.clock + esc(c.duration) + "</span>" +
      (c.lessons ? "<span>" + I.book + c.lessons + " lessons</span>" : "") +
      "</div>" +
      '<h3><a href="course.html?id=' + c.id + '">' + esc(c.title) + "</a></h3>" +
      '<p class="course-card__desc">' + esc(c.description) + "</p>" +
      '<div class="course-card__actions">' +
      playBtn + appBtn + resBtn +
      '<a class="btn btn--ghost btn--sm" href="course.html?id=' + c.id + '#modules">' + I.map + " Roadmap</a>" +
      "</div></div></article>"
    );
  }

  function resourceItem(r, course, showCourse) {
    // external urls (Google Drive, Dropbox…) open in a new tab; local files download directly
    var isExternal = /^https?:\/\//i.test(r.url);
    return (
      '<div class="glass resource-item">' +
      '<div class="resource-item__icon ricon--' + r.type + '">' + (I[r.type] || I.pdf) + "</div>" +
      '<div class="resource-item__body">' +
      "<h4>" + esc(r.title) + "</h4>" +
      '<div class="resource-item__meta">' +
      "<span>" + TYPE_LABEL[r.type] + "</span><span>" + esc(r.size) + "</span>" +
      "<span>" + fmtNum(r.downloads) + " downloads</span>" +
      (showCourse && course ? '<span><a href="course.html?id=' + course.id + '" style="color:var(--gold)">' + esc(course.title) + "</a></span>" : "") +
      "</div></div>" +
      '<a class="btn btn--ghost btn--sm" href="' + esc(r.url) + '"' + (isExternal ? ' target="_blank" rel="noopener"' : " download") + ">" + I.download + " Download</a>" +
      "</div>"
    );
  }

  /* ---------------- behaviors ---------------- */
  function initReveal() {
    var els = $all(".reveal, .reveal-stagger");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  function initAccordions(root) {
    $all(".accordion__item", root).forEach(function (item) {
      var btn = $(".accordion__btn", item);
      var panel = $(".accordion__panel", item);
      btn.addEventListener("click", function () {
        var open = item.getAttribute("data-open") === "true";
        item.setAttribute("data-open", String(!open));
        btn.setAttribute("aria-expanded", String(!open));
        panel.style.maxHeight = open ? "0px" : panel.scrollHeight + "px";
      });
    });
  }

  var toastTimer;
  function toast(msg) {
    var t = $("#toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status");
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 3200);
  }

  function initNewsletter() {
    $all(".newsletter__form").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var input = $("input[type=email]", form);
        var btn = $("button[type=submit]", form);
        var msg = $(".newsletter__msg", form.parentElement);
        var email = input.value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
          msg.textContent = "Please enter a valid email address.";
          msg.className = "newsletter__msg err";
          return;
        }

        var endpoint = CFG.newsletter && CFG.newsletter.endpoint;
        if (!endpoint || endpoint.indexOf("REPLACE") >= 0) {
          // Formspree not connected yet — see README "Collect newsletter subscribers"
          console.warn("Newsletter endpoint not configured — subscriptions are NOT being collected. See README.");
          msg.textContent = "You're in! We'll email you when new courses and resources drop.";
          msg.className = "newsletter__msg ok";
          form.reset();
          return;
        }

        var originalLabel = btn.textContent;
        btn.disabled = true;
        btn.textContent = "Subscribing…";
        msg.textContent = "";
        msg.className = "newsletter__msg";
        fetch(endpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form)
        }).then(function (res) {
          if (!res.ok) throw new Error("HTTP " + res.status);
          msg.textContent = "You're in! We'll email you when new courses and resources drop.";
          msg.className = "newsletter__msg ok";
          form.reset();
        }).catch(function () {
          msg.textContent = "Something went wrong — please try again.";
          msg.className = "newsletter__msg err";
        }).then(function () {
          btn.disabled = false;
          btn.textContent = originalLabel;
        });
      });
    });
  }

  /* ---------------- page: home ---------------- */
  function initHome() {
    var feat = COURSES.filter(function (c) { return c.featured; });
    $("#featured-courses").innerHTML = feat.map(courseCard).join("");

    // latest resources across all courses
    var all = [];
    COURSES.forEach(function (c) {
      c.resources.forEach(function (r) { all.push({ r: r, c: c }); });
    });
    all.sort(function (a, b) { return a.r.updated < b.r.updated ? 1 : -1; });
    $("#recent-resources").innerHTML = all.slice(0, 4).map(function (x) { return resourceItem(x.r, x.c, true); }).join("");

    $("#trust-grid").innerHTML = window.TRUST_POINTS.map(function (t) {
      return (
        '<div class="glass trust-card">' +
        '<div class="trust-card__icon">' + (I[t.icon] || I.check) + "</div>" +
        "<h3>" + esc(t.title) + "</h3><p>" + esc(t.text) + "</p></div>"
      );
    }).join("");

    // hero stats
    var s = CFG.stats;
    $("#hero-stats").innerHTML =
      '<div class="stat"><b>' + s.learners + "</b><span>Learners</span></div>" +
      '<div class="stat"><b>' + s.courses + "</b><span>Courses</span></div>" +
      '<div class="stat"><b>' + s.resources + "</b><span>Free resources</span></div>" +
      '<div class="stat"><b>' + s.hoursOfContent + "</b><span>Hours of content</span></div>";
  }

  /* ---------------- page: courses ---------------- */
  function initCourses() {
    var state = { q: "", category: "all", level: "all", status: "all" };
    var grid = $("#courses-grid");

    var cats = []; var levels = [];
    COURSES.forEach(function (c) {
      if (cats.indexOf(c.category) < 0) cats.push(c.category);
      if (levels.indexOf(c.level) < 0) levels.push(c.level);
    });
    $("#filter-category").innerHTML = '<option value="all">All categories</option>' +
      cats.map(function (c) { return '<option value="' + esc(c) + '">' + esc(c) + "</option>"; }).join("");
    $("#filter-level").innerHTML = '<option value="all">All levels</option>' +
      levels.map(function (l) { return '<option value="' + esc(l) + '">' + esc(l) + "</option>"; }).join("");

    function apply() {
      var out = COURSES.filter(function (c) {
        if (state.category !== "all" && c.category !== state.category) return false;
        if (state.level !== "all" && c.level !== state.level) return false;
        if (state.status !== "all" && c.status !== state.status) return false;
        if (state.q) {
          var hay = (c.title + " " + c.description + " " + c.tags.join(" ")).toLowerCase();
          if (hay.indexOf(state.q) < 0) return false;
        }
        return true;
      });
      grid.innerHTML = out.length
        ? out.map(courseCard).join("")
        : '<div class="empty-state" style="grid-column:1/-1"><b>No courses match your filters</b>Try clearing the search or choosing another category.</div>';
      $all(".reveal", grid).forEach(function (el) { el.classList.add("visible"); });
      $("#courses-count").textContent = out.length + " course" + (out.length === 1 ? "" : "s");
    }

    $("#filter-search").addEventListener("input", function () { state.q = this.value.trim().toLowerCase(); apply(); });
    $("#filter-category").addEventListener("change", function () { state.category = this.value; apply(); });
    $("#filter-level").addEventListener("change", function () { state.level = this.value; apply(); });
    $all("#status-chips .chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        $all("#status-chips .chip").forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        state.status = chip.getAttribute("data-status");
        apply();
      });
    });
    apply();
  }

  /* ---------------- page: course detail ---------------- */
  function initCourseDetail() {
    var id = getParam("id");
    var c = courseById(id);
    var root = $("#course-root");

    if (!c) {
      root.innerHTML =
        '<div class="container empty-state section"><b>Course not found</b>' +
        'The course you\'re looking for doesn\'t exist (yet). <br><br>' +
        '<a class="btn btn--primary" href="courses.html">Browse all courses</a></div>';
      return;
    }

    document.title = c.title + " — " + CFG.name;
    var metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", c.description);

    var isSoon = c.status === "coming-soon";
    var playBtn = isSoon
      ? '<span class="btn btn--youtube btn--disabled">' + I.play + " Playlist coming soon</span>"
      : '<a class="btn btn--primary" href="' + esc(c.playlist) + '" target="_blank" rel="noopener">' + I.play + " Watch Playlist on YouTube</a>";
    var appBtn = '<button type="button" class="btn btn--app js-app-watch">' + I.smartphone + " Watch on App</button>";

    root.innerHTML =
      /* ---- hero ---- */
      '<section class="course-hero"><div class="container course-hero__grid">' +
      "<div>" +
      '<div class="course-hero__badges">' +
      '<span class="badge badge--' + c.status + '">' + STATUS_LABEL[c.status] + "</span>" +
      '<span class="badge badge--free">100% FREE</span>' +
      '<span class="badge">' + esc(c.category) + "</span>" +
      "</div>" +
      "<h1>" + esc(c.title) + "</h1>" +
      '<p class="course-hero__tagline" style="color:' + esc(c.accent) + '">// ' + esc(c.tagline) + "</p>" +
      '<p class="course-hero__desc">' + esc(c.description) + "</p>" +
      '<div class="course-hero__facts">' +
      "<span>" + I.level + esc(c.level) + "</span>" +
      "<span>" + I.clock + esc(c.duration) + "</span>" +
      (c.lessons ? "<span>" + I.book + c.lessons + " lessons</span>" : "") +
      (c.learners ? "<span>" + I.users + esc(c.learners) + " learners</span>" : "") +
      "</div>" +
      '<div class="course-hero__actions">' + playBtn + appBtn +
      (c.resources.length ? '<a class="btn btn--ghost" href="#downloads">' + I.download + " Download Resources</a>" : "") +
      '<a class="btn btn--ghost" href="#modules">' + I.map + " Course Roadmap</a>" +
      "</div></div>" +
      '<div class="course-hero__cover"><img src="' + c.cover + '" alt="' + esc(c.title) + ' cover art" width="640" height="360"></div>' +
      "</div></section>" +

      /* ---- body ---- */
      '<div class="container detail-layout section--tight">' +
      '<div class="detail-main">' +

      '<section id="outcomes"><h2>What you\'ll learn</h2><ul class="outcome-list">' +
      c.outcomes.map(function (o) { return '<li class="glass">' + I.check + "<span>" + esc(o) + "</span></li>"; }).join("") +
      "</ul></section>" +

      '<section id="modules"><h2>Course roadmap &amp; modules</h2><div class="accordion" id="modules-acc">' +
      c.modules.map(function (m, i) {
        return (
          '<div class="glass accordion__item" data-open="' + (i === 0 ? "true" : "false") + '">' +
          '<button class="accordion__btn" aria-expanded="' + (i === 0 ? "true" : "false") + '">' +
          '<span class="accordion__num">' + String(i + 1).padStart(2, "0") + "</span>" +
          '<span class="accordion__title">' + esc(m.title) + "</span>" +
          '<span class="accordion__dur">' + esc(m.duration) + "</span>" + I.chevron +
          "</button>" +
          '<div class="accordion__panel"><ul class="accordion__panel-inner">' +
          m.topics.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") +
          "</ul></div></div>"
        );
      }).join("") +
      "</div></section>" +

      (c.resources.length
        ? '<section id="downloads"><h2>Downloads &amp; resources</h2><div class="res-group__list">' +
          c.resources.map(function (r) { return resourceItem(r, c, false); }).join("") +
          "</div></section>"
        : "") +

      (c.faqs.length
        ? '<section id="faqs"><h2>FAQs</h2><div class="accordion" id="faq-acc">' +
          c.faqs.map(function (f) {
            return (
              '<div class="glass accordion__item" data-open="false">' +
              '<button class="accordion__btn" aria-expanded="false"><span class="accordion__title">' + esc(f.q) + "</span>" + I.chevron + "</button>" +
              '<div class="accordion__panel"><div class="accordion__panel-inner"><p>' + esc(f.a) + "</p></div></div></div>"
            );
          }).join("") +
          "</div></section>"
        : "") +

      "</div>" +

      /* ---- sidebar ---- */
      '<aside class="detail-side">' +
      '<div class="glass side-card">' +
      "<h3>Start learning</h3>" +
      (isSoon
        ? '<span class="btn btn--youtube btn--disabled">' + I.play + " Coming soon</span>"
        : '<a class="btn btn--primary" href="' + esc(c.playlist) + '" target="_blank" rel="noopener">' + I.play + " Watch on YouTube</a>") +
      '<button type="button" class="btn btn--app js-app-watch">' + I.smartphone + " Watch on App</button>" +
      (c.resources.length ? '<a class="btn btn--ghost" href="resources.html#' + c.id + '">' + I.download + " All resources</a>" : "") +
      '<div style="margin-top:14px">' +
      '<div class="side-fact"><span>Status</span><b>' + STATUS_LABEL[c.status] + "</b></div>" +
      '<div class="side-fact"><span>Level</span><b>' + esc(c.level) + "</b></div>" +
      '<div class="side-fact"><span>Duration</span><b>' + esc(c.duration) + "</b></div>" +
      "</div></div>" +
      '<div class="glass side-card"><h3>Prerequisites</h3><ul class="prereq-list">' +
      c.prerequisites.map(function (p) { return "<li>" + I.dot + "<span>" + esc(p) + "</span></li>"; }).join("") +
      "</ul></div>" +
      '<div class="glass side-card"><h3>Questions? Contact us</h3>' +
      '<p style="color:var(--text-dim);font-size:0.9rem;margin-bottom:14px">Ask in the YouTube comments, or reach us directly — we read everything.</p>' +
      '<a class="btn btn--ghost" href="mailto:' + esc(CFG.contact.email) + '">' + I.mail + " Email us</a>" +
      '<a class="btn btn--ghost" href="' + esc(CFG.social.youtube) + '" target="_blank" rel="noopener">' + I.youtube + " YouTube channel</a></div>" +
      "</aside></div>";

    initAccordions(root);
    // open the first module panel that starts expanded
    $all('.accordion__item[data-open="true"] .accordion__panel', root).forEach(function (p) {
      p.style.maxHeight = p.scrollHeight + "px";
    });
  }

  /* ---------------- page: resources ---------------- */
  function initResources() {
    var state = { q: "", type: "all" };
    var host = $("#resources-root");

    function apply() {
      var groups = COURSES.filter(function (c) { return c.resources.length; }).map(function (c) {
        var items = c.resources.filter(function (r) {
          if (state.type !== "all" && r.type !== state.type) return false;
          if (state.q && (r.title + " " + c.title).toLowerCase().indexOf(state.q) < 0) return false;
          return true;
        });
        return { c: c, items: items };
      }).filter(function (g) { return g.items.length; });

      host.innerHTML = groups.length
        ? groups.map(function (g) {
            return (
              '<section class="res-group" id="' + g.c.id + '">' +
              '<div class="res-group__head">' +
              '<img src="' + g.c.cover + '" alt="">' +
              "<h2>" + esc(g.c.title) + "</h2>" +
              '<a class="btn btn--ghost btn--sm" href="course.html?id=' + g.c.id + '">View course ' + I.arrow + "</a>" +
              "</div>" +
              '<div class="res-group__list">' +
              g.items.map(function (r) { return resourceItem(r, g.c, false); }).join("") +
              "</div></section>"
            );
          }).join("")
        : '<div class="empty-state"><b>No resources found</b>Try a different search or type filter.</div>';
    }

    $("#res-search").addEventListener("input", function () { state.q = this.value.trim().toLowerCase(); apply(); });
    $all("#type-chips .chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        $all("#type-chips .chip").forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        state.type = chip.getAttribute("data-type");
        apply();
      });
    });

    apply();

    // deep link: resources.html#course-id
    if (location.hash) {
      var target = $(location.hash.replace(/[^#\w-]/g, ""));
      if (target) setTimeout(function () { target.scrollIntoView({ behavior: "smooth", block: "start" }); }, 100);
    }
  }

  /* ---------------- page: roadmap ---------------- */
  function initRoadmap() {
    var DOT = { live: "var(--green)", "in-progress": "var(--amber)", planned: "var(--violet)", researching: "var(--magenta)" };
    var LABEL = { live: "Live", "in-progress": "In Progress", planned: "Planned", researching: "Researching" };
    $("#roadmap-track").innerHTML = window.ROADMAP.map(function (r) {
      var badgeClass = r.status === "in-progress" ? "badge--in-progress" : r.status === "live" ? "badge--live" : "badge--coming-soon";
      return (
        '<div class="glass roadmap-item reveal" style="--dot:' + DOT[r.status] + '">' +
        '<div class="roadmap-item__top">' +
        '<span class="roadmap-item__quarter">' + esc(r.quarter) + "</span>" +
        '<span class="badge ' + badgeClass + '">' + LABEL[r.status] + "</span>" +
        "<h3>" + esc(r.title) + "</h3>" +
        "</div>" +
        "<p>" + esc(r.description) + "</p>" +
        '<span class="roadmap-item__eta">' + I.calendar.replace("<svg", '<svg width="14" height="14" style="display:inline;vertical-align:-2px;margin-right:6px"') + esc(r.eta) + "</span>" +
        (r.courseId ? '<br><a class="btn btn--ghost btn--sm" href="course.html?id=' + r.courseId + '">View course page ' + I.arrow + "</a>" : "") +
        "</div>"
      );
    }).join("");
  }

  /* ---------------- page: about ---------------- */
  function initAbout() {
    var host = $("#about-contact");
    if (!host) return;
    var firstTel = CFG.contact.phone.split("/")[0].replace(/[^+\d]/g, "");
    host.innerHTML =
      '<a class="glass contact-direct" href="mailto:' + esc(CFG.contact.email) + '">' + I.mail + "<b>Email</b><span>" + esc(CFG.contact.email) + "</span></a>" +
      '<a class="glass contact-direct" href="tel:' + firstTel + '">' + I.phone + "<b>Call / WhatsApp</b><span>" + esc(CFG.contact.phone) + "</span></a>" +
      '<a class="glass contact-direct" href="' + esc(CFG.social.youtube) + '" target="_blank" rel="noopener">' + I.youtube + "<b>YouTube</b><span>Visit our channel</span></a>";
  }

  /* ---------------- "Watch on App" teaser ---------------- */
  function initAppTeaser() {
    document.addEventListener("click", function (e) {
      var btn = e.target.closest && e.target.closest(".js-app-watch");
      if (!btn) return;
      e.preventDefault();
      toast("📱 Our app is launching very soon — every course, in even more depth. Stay tuned!");
    });
  }

  /* ---------------- boot ---------------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderNavbar();
    renderFooter();

    switch (document.body.getAttribute("data-page")) {
      case "home": initHome(); break;
      case "courses": initCourses(); break;
      case "course": initCourseDetail(); break;
      case "resources": initResources(); break;
      case "roadmap": initRoadmap(); break;
      case "about": initAbout(); break;
    }

    initNewsletter();
    initAppTeaser();
    initReveal();
  });
})();



