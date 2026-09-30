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
  setLang(initial);
})();
