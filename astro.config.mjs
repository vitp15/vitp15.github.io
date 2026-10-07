import { defineConfig } from 'astro/config';

// Static site for GitHub Pages (user site, served from the domain root).
// `build.format: 'preserve'` keeps the source file layout in `dist/`, so
// `src/pages/vitp-apps-policies/[app]/[doc].astro` becomes `privacy.html`
// and the policy URLs hard-coded in the apps keep working unchanged.
export default defineConfig({
  site: 'https://vitp15.github.io',
  trailingSlash: 'ignore',
  build: { format: 'preserve' },
  compressHTML: true,
});
