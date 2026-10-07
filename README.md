# vitp15.github.io

Personal site of Vadim Plămădeală and the public home of the VitpApps mobile apps:
landing, support and legal pages for every app, plus the files the apps and the
stores read from this domain.

Live at <https://vitp15.github.io>. Built with [Astro](https://astro.build) and
deployed by GitHub Actions on every push to `main`.

## Layout

| Path | What it is |
|---|---|
| `src/data/apps.ts` | The six apps: names, copy, colours, store links, legal documents. Feeds every app page. |
| `src/data/cv.ts` | The CV. Renders the `/cv/` page and the PDF. |
| `src/data/support.ts` | Support page content per app. |
| `src/content/legal/<app>/*.html` | Privacy, terms, data deletion (verbatim legal text; only the page chrome is a template). |
| `src/pages/` | Routes. `[app]/` and `vitp-apps-policies/[app]/[doc]` are generated from the data files. |
| `src/layouts/Base.astro` | Document shell: theme script, fonts, nav, footer. |
| `public/` | Served as-is. Includes the files other systems depend on (below). |
| `scripts/cv-pdf.mjs` | Builds `public/cv/*.pdf` from `src/data/cv.ts` with headless Chrome. |
| `scripts/check-urls.mjs` | Fails the build if any required URL is missing. |

## URLs that must not change

These are read by the apps, the stores or AdMob and are kept byte-identical in `public/`:

- `/.well-known/assetlinks.json`, `/.well-known/apple-app-site-association` (deep links)
- `/app-ads.txt` (AdMob)
- `/solvyx/duel/`, `/huglet/i/` (invite links opened by the apps)
- `/sliceward/config.json`, `/sliceward/version.json`, `/impossible-taxi/config.json`, `/impossible-taxi/version.json` (remote config)
- `/vitp-apps-policies/<app>/{privacy,terms,data-deletion}` (linked from the apps and the store listings)

`scripts/check-urls.mjs` lists them all and runs in CI.

## Working on it

```bash
npm ci
npm run dev          # http://localhost:4321
npm run build        # dist/
npm run check:urls   # verify dist/ has every required path
npm run cv:pdf       # regenerate the CV PDFs (needs google-chrome)
```

Theme: dark for every visitor; switching to light from the header is remembered
in the browser.
