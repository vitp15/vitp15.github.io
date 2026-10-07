// One-time import of the legal documents from the old `vitp-apps-policies`
// repository into src/content/legal/<app>/<doc>.html. Only the page body is
// kept (the old breadcrumb and stylesheet are dropped); the text is verbatim.
// Usage: node scripts/import-legal.mjs ../vitp-apps-policies
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const src = process.argv[2];
if (!src || !existsSync(src)) throw new Error('pass the path of the old policies repo');
const out = 'src/content/legal';

for (const app of readdirSync(src, { withFileTypes: true }).filter((d) => d.isDirectory() && !d.name.startsWith('.'))) {
  for (const file of readdirSync(join(src, app.name)).filter((f) => f.endsWith('.html') && f !== 'index.html')) {
    const html = readFileSync(join(src, app.name, file), 'utf8');
    let body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';
    // unwrap the data-deletion box, drop the breadcrumb and the <br> after it
    body = body.replace(/<div class="box">([\s\S]*)<\/div>\s*$/i, '$1');
    body = body.replace(/<div class="nav-header">[\s\S]*?<\/div>\s*(<br\s*\/?>\s*)?/i, '');
    body = body.trim() + '\n';
    mkdirSync(join(out, app.name), { recursive: true });
    writeFileSync(join(out, app.name, file), body);
    console.log(`${app.name}/${file}: ${body.length} chars`);
  }
}
