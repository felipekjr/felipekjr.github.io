# felipekjr.github.io

Personal site. Static HTML, no build step.

- `index.html` — home page: career timeline with a sticky intro column (photo, name, statement, contact), then areas of expertise, recommendations and footer. Portuguese is the default text in the HTML; English strings live in the `EN` object in its script.
- `iniciativas/*.html` — one page per initiative (Pix Automático, multi-tenant platform, multi-package architecture, credit card wallet, Conta Turbinada), linked from the career timeline. Each has a `.story` section with a placeholder paragraph to replace with a personal account; the English version of that text is `story.p` in the page's `EN` object.
- `assets/style.css` — styles shared by every page.
- `assets/detail.js` — PT/EN toggle for the initiative pages (the choice is remembered across pages).
- `assets/felipe.jpg` — portrait (480px), shown at the top of the intro column.

## Preview locally

    python3 -m http.server 8000   # then open http://localhost:8000

## Deploy to GitHub Pages

Replace the contents of the `felipekjr.github.io` repo with this folder and push to the default branch.
