// Renders the GitHub profile README (vitp15/vitp15) from the same data as the
// site and publishes it through the GitHub API. Run: npm run profile
import { execFileSync } from 'node:child_process';
import { apps } from '../src/data/apps.ts';
import { site } from '../src/data/site.ts';
import { experience, education } from '../src/data/cv.ts';

const SITE = site.url;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const rows = [];
for (let i = 0; i < apps.length; i += 3) rows.push(apps.slice(i, i + 3));
const cell = (a) => `    <td align="center" width="33%">
      <a href="${SITE}/${a.slug}/"><img src="${SITE}/img/apps/${a.slug}/icon-256.png" width="96" alt="${esc(a.name)}"></a><br>
      <a href="${SITE}/${a.slug}/"><strong>${esc(a.name)}</strong></a><br>
      <sub>${esc(a.tagline)}</sub><br>
      <sub>${esc(a.stack.slice(0, 3).join(' · '))}${a.android.live ? ` · <a href="${a.android.url}">Google Play</a>` : ''}${a.ios.live ? ` · <a href="${a.ios.url}">App Store</a>` : ''}</sub>
    </td>`;
const table = `<table>\n${rows.map((r) => `  <tr>\n${r.map(cell).join('\n')}\n  </tr>`).join('\n')}\n</table>`;

const badge = (label, color, logo, logoColor = 'white') =>
  `![${label}](https://img.shields.io/badge/${encodeURIComponent(label).replace(/-/g, '--')}-${color}?style=flat-square&logo=${logo}&logoColor=${logoColor})`;
const badges = [
  ['TypeScript', '3178C6', 'typescript'], ['Angular', 'DD0031', 'angular'], ['Node.js', '339933', 'nodedotjs'], ['PHP', '777BB4', 'php'],
  ['Flutter', '02569B', 'flutter'], ['Dart', '0175C2', 'dart'], ['Godot 4', '478CBF', 'godotengine'], ['Python', '3776AB', 'python'],
  ['Java', 'ED8B00', 'openjdk'], ['Swift', 'F05138', 'swift'], ['C++', '00599C', 'cplusplus'], ['React', '20232A', 'react', '61DAFB'],
  ['MySQL', '4479A1', 'mysql'], ['PostgreSQL', '4169E1', 'postgresql'], ['Redis', 'DC382D', 'redis'], ['Prisma', '2D3748', 'prisma'],
  ['Supabase', '3FCF8E', 'supabase'], ['Firebase', 'FFCA28', 'firebase', 'black'], ['Docker', '2496ED', 'docker'], ['Kubernetes', '326CE5', 'kubernetes'],
  ['GitHub Actions', '2088FF', 'githubactions'], ['Playwright', '2EAD33', 'playwright'], ['WooCommerce', '96588A', 'woocommerce'],
  ['PrestaShop', 'DF0067', 'prestashop'], ['Magento 2', 'EE672F', 'magento'], ['Google Cloud', '4285F4', 'googlecloud'],
].map((b) => badge(...b)).join('\n');

const job = (j, text) => `**${j.company}** (${j.start} – ${j.end}), ${j.role.toLowerCase()}. ${text}`;
const readme = `<h1 align="center">${site.name}</h1>

<p align="center">
  <a href="${SITE}"><img src="https://img.shields.io/badge/My_website-vitp15.github.io-7aa2ff?style=for-the-badge&logo=googlechrome&logoColor=white" alt="My website: vitp15.github.io" height="36"></a>
</p>

<p align="center">
  Full-stack software engineer in ${site.location}. Online as <code>${site.handle}</code>.<br>
  Shipping integrations and an Angular + Node.js platform at <strong>Colete-Online</strong> by day;
  mobile apps and games for Android and iOS under <strong>VitpApps</strong> the rest of the time.
</p>

<p align="center">
  <a href="${SITE}${site.cvPdf}">CV (PDF)</a> ·
  <a href="${site.linkedin}">LinkedIn</a> ·
  <a href="mailto:${site.email}">${site.email}</a>
</p>

I can take a problem from the first conversation to production: choose the stack, design the architecture and the CI/CD, implement and ship. Writing code since ${site.codingSince}, production software since ${site.workingSince}.

## Apps and games

Designed, built and published by me, from the first sketch to the store: product, code, CI/CD to both stores, listings in ${Math.max(...apps.map((a) => a.languages))} languages, monetisation and the legal pages.

${table}

Every app has its own page with screenshots, download links, support and legal documents: <a href="${SITE}/apps/">vitp15.github.io/apps</a>.

## Work

${job(experience[0], 'Shipping modules for WooCommerce, PrestaShop, Magento 2 and OpenCart and the PHP library they share: pickup points and lockers on a map widget, address autocomplete, cash on delivery, AWB generation, multi-currency pricing. Full-stack on the Angular + Node.js platform behind them (public API, Prisma and MySQL, Redis, payments). CI/CD with Playwright suites on self-hosted runners. Conducted technical interviews for the 2026 interns. A parcel-locker scanning prototype in Python (camera, laser measurement, motion control) and C++ work on a real helicopter project.')}

${job(experience[1], 'Small team building a web product for GoAhead Venture, a US client: React, FastAPI, SQL, CI/CD.')}

${job(experience[2], 'Sona, an Android app that detects car malfunctions from engine sound with an ML server on Google Cloud; Biblia Noul Testament audio for Android and iOS.')}

${education[0].degree}, Politehnica Bucharest, ${education[0].start} – ${education[0].end}.

## Stack

${badges}

## Earlier projects

- [Biblia Noul Testament audio](https://github.com/vitp15/NoulTestament_Android) for Android and [iOS](https://github.com/vitp15/NoulTestament_IOS)
- [GuessWordGame](https://github.com/vitp15/guess-word-game-telbot), a Telegram bot with a word-guessing game
- Physics simulations for YouTube Shorts: [collisionShow](https://github.com/vitp15/collisionShow), [SnakeGame](https://github.com/vitp15/SnakeGame) in the file explorer, a MIDI bouncing-square playground
- [LogoSimilarity](https://github.com/vitp15/LogoSimilarity), unsupervised clustering of logos
- University: a microservice backend on Docker Swarm with Keycloak, Prometheus and Grafana; a process scheduler in Rust; an async web server and a memory allocator in C; a Halite bot in C++

<p align="center"><img src="https://github-readme-stats.vercel.app/api?username=vitp15&show_icons=true&hide_border=true&include_all_commits=true&count_private=true&theme=transparent" alt="GitHub stats"></p>
`;

if (process.argv.includes('--print')) { console.log(readme); process.exit(0); }
const sha = execFileSync('gh', ['api', 'repos/vitp15/vitp15/contents/README.md', '--jq', '.sha']).toString().trim();
const body = JSON.stringify({ message: 'Profile: regenerate from the site data', content: Buffer.from(readme).toString('base64'), sha });
const out = execFileSync('gh', ['api', '-X', 'PUT', 'repos/vitp15/vitp15/contents/README.md', '--input', '-', '--jq', '.commit.sha'], { input: body }).toString().trim();
console.log('profile README updated, commit', out);
