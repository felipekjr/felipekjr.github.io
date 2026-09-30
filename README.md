# felipekjr.github.io

Personal site. Static HTML, no build step.

- `index.html` — home page. Portuguese is the default text in the HTML; English strings live in the `EN` object in its script.
- `iniciativas/*.html` — one page per initiative (Pix Automático, multi-tenant platform, multi-package architecture, credit card wallet, Conta Turbinada), linked from the career timeline. Each has a `.story` section with a placeholder paragraph to replace with a personal account; the English version of that text is `story.p` in the page's `EN` object.
- `assets/style.css` — styles shared by every page.
- `assets/detail.js` — PT/EN toggle for the initiative pages (the choice is remembered across pages).
- `assets/felipe.jpg` — portrait (480px), used in the header and the profile section.
- The home hero is a WebGL scene built with three.js r149, loaded from jsDelivr: a 3×3 cube visitors can drag (with inertia) and tap to twist a layer. Without WebGL the hero shows text only.

## Preview locally

    python3 -m http.server 8000   # then open http://localhost:8000

## Deploy to GitHub Pages

Replace the contents of the `felipekjr.github.io` repo with this folder and push to the default branch.
