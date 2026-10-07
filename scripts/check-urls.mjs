// Verifies that every URL the apps, the stores and AdMob depend on exists in
// the build output (default) or answers 200 on the live site (`--live`).
// Usage: node scripts/check-urls.mjs [dist] [--live]
import { existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const APPS = ['solvyx', 'naova', 'huglet', 'moneymanager', 'sliceward', 'impossible-taxi'];
const DOCS = ['privacy', 'terms', 'data-deletion'];

export const requiredPaths = [
  '/', '/apps/', '/cv/', '/cv/CV_Vadim_Plamadeala.pdf', '/cv/CV_Vadim_Plamadeala_no_photo.pdf',
  '/.well-known/assetlinks.json', '/.well-known/apple-app-site-association', '/app-ads.txt',
  '/solvyx/duel/', '/huglet/i/',
  '/sliceward/config.json', '/sliceward/version.json',
  '/impossible-taxi/config.json', '/impossible-taxi/version.json',
  '/vitp-apps-policies/',
  ...APPS.flatMap((a) => [`/${a}/`, `/${a}/support/`, `/vitp-apps-policies/${a}/`, ...DOCS.map((d) => `/vitp-apps-policies/${a}/${d}`)]),
  '/vitp-apps-policies/huglet/child-safety',
];

const args = process.argv.slice(2);
const live = args.includes('--live');
const dist = args.find((a) => !a.startsWith('--')) ?? 'dist';

let failed = 0;
if (live) {
  for (const p of requiredPaths) {
    const url = 'https://vitp15.github.io' + p;
    const res = await fetch(url, { method: 'GET', redirect: 'manual' });
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
