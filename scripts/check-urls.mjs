// Verifies that every URL the apps, the stores and AdMob depend on exists in
// the build output (default) or answers 200 on the live site (`--live`).
// The per-app paths come from src/data/apps.ts, so a new app is covered automatically.
// Usage: node --experimental-strip-types scripts/check-urls.mjs [dist] [--live]
import { existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { apps } from '../src/data/apps.ts';
import { support } from '../src/data/support.ts';

export const requiredPaths = [
  '/', '/apps/', '/cv/', '/cv/CV_Vadim_Plamadeala.pdf', '/cv/CV_Vadim_Plamadeala_no_photo.pdf',
  '/.well-known/assetlinks.json', '/.well-known/apple-app-site-association', '/app-ads.txt',
  '/solvyx/duel/', '/huglet/i/',
  '/sliceward/config.json', '/sliceward/version.json',
  '/impossible-taxi/config.json', '/impossible-taxi/version.json',
  '/vitp-apps-policies/',
  ...apps.flatMap((a) => [
    `/${a.slug}/`,
    ...(support[a.slug] ? [`/${a.slug}/support/`] : []),
    ...(a.legal.length ? [`/vitp-apps-policies/${a.slug}/`] : []),
    ...a.legal.map((d) => `/vitp-apps-policies/${a.slug}/${d.slug}`),
  ]),
];

const args = process.argv.slice(2);
const live = args.includes('--live');
const dist = args.find((a) => !a.startsWith('--')) ?? 'dist';

let failed = 0;
if (live) {
  for (const p of requiredPaths) {
    const res = await fetch('https://vitp15.github.io' + p, { method: 'GET', redirect: 'manual' });
    const ok = res.status === 200;
    if (!ok) failed++;
    console.log(`${ok ? 'ok  ' : 'FAIL'} ${res.status} ${p}`);
  }
} else {
  for (const p of requiredPaths) {
    const candidates = p.endsWith('/') ? [join(dist, p, 'index.html')] : [join(dist, p), join(dist, p + '.html'), join(dist, p, 'index.html')];
    const hit = candidates.find((c) => existsSync(c) && statSync(c).isFile());
    if (!hit) failed++;
    console.log(`${hit ? 'ok  ' : 'FAIL'} ${p}${hit ? '  <- ' + hit.slice(dist.length) : ''}`);
  }
}
console.log(failed ? `\n${failed} missing` : `\nall ${requiredPaths.length} paths present`);
process.exit(failed ? 1 : 0);
