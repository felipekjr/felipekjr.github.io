// Shared by iniciativas/*.html: PT/EN toggle (remembers the choice made on any page) and the footer year.
(() => {
  const nodes = [...document.querySelectorAll("[data-i18n]")];
  const PT = Object.fromEntries(nodes.map(n => [n.dataset.i18n, n.innerHTML]));
  const EN = window.EN || {};
  const setLang = (l) => {
    const dict = l === "en" ? EN : PT;
    nodes.forEach(n => { const v = dict[n.dataset.i18n]; if (v != null) n.innerHTML = v; });
    document.documentElement.lang = l === "en" ? "en" : "pt-BR";
    document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === l)));
    try { localStorage.setItem("lang", l); } catch (e) {}
  };
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  const initial = saved === "en" || saved === "pt" ? saved : ((navigator.language || "pt").toLowerCase().startsWith("pt") ? "pt" : "en");
  document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
  document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());
  // Inside an embed (the preview) the outer page keeps its scroll position across navigations; ask to be shown from the top
  const top = () => { window.scrollTo(0, 0); if (window.top !== window.self) document.documentElement.scrollIntoView({ block: "start" }); };
  top();
  window.addEventListener("load", top);
  const glow = document.querySelector(".ambient-glow");
  let gq = false, gx = 0, gy = 0;
  if (glow) window.addEventListener("pointermove", (e) => {
    gx = e.clientX; gy = e.clientY;
    if (!gq) { gq = true; requestAnimationFrame(() => { gq = false; glow.style.setProperty("--gx", gx + "px"); glow.style.setProperty("--gy", gy + "px"); }); }
  }, { passive: true });
  // Content rises into view as it scrolls in (once), with a small stagger between siblings
  const fx = document.querySelectorAll(".top .who, .top-right, .detail-card, .story, .others");
  const motionOK = !matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (motionOK && "IntersectionObserver" in window) {
    fx.forEach(el => { el.classList.add("fx"); const i = [...el.parentElement.children].indexOf(el); el.style.transitionDelay = Math.min(i, 8) * 60 + "ms"; });
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: .12, rootMargin: "0px 0px -6% 0px" });
    fx.forEach(el => io.observe(el));
  }
  setLang(initial);
})();
