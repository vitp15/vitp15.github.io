// Builds public/cv/*.pdf from src/data/cv.ts with headless Chrome, then
// normalises the PDF metadata. Run: npm run cv:pdf
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PDFDocument } from 'pdf-lib';
import { renderCv } from './cv/render.mjs';
import * as cv from '../src/data/cv.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const chrome = process.env.CHROME ?? 'google-chrome';
const outDir = join(root, 'public', 'cv');
mkdirSync(outDir, { recursive: true });

const dataUri = (path, mime) => `data:${mime};base64,${readFileSync(path).toString('base64')}`;
const fontDataUri = dataUri(join(root, 'public/fonts/Manrope-Variable.woff2'), 'font/woff2');
const photoDataUri = dataUri(join(root, 'public/img/photo-480.jpg'), 'image/jpeg');

const work = mkdtempSync(join(tmpdir(), 'cv-'));
const variants = [
  { file: 'CV_Vadim_Plamadeala.pdf', withPhoto: true },
  { file: 'CV_Vadim_Plamadeala_no_photo.pdf', withPhoto: false },
];

for (const v of variants) {
  const html = renderCv(cv, { withPhoto: v.withPhoto, photoDataUri, fontDataUri });
  const htmlPath = join(work, v.file.replace(/\.pdf$/, '.html'));
  const rawPdf = join(work, 'raw-' + v.file);
  writeFileSync(htmlPath, html);
  execFileSync(chrome, [
    '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
    '--no-pdf-header-footer', '--virtual-time-budget=4000',
    `--print-to-pdf=${rawPdf}`, `file://${htmlPath}`,
  ], { stdio: 'pipe' });

  const doc = await PDFDocument.load(readFileSync(rawPdf));
  const now = new Date();
  doc.setTitle(`${cv.person.asciiName} - CV`);
  doc.setAuthor(cv.person.name);
  doc.setSubject(cv.person.title);
  doc.setKeywords(['CV', 'resume', 'software engineer', 'full-stack', 'Flutter', 'TypeScript', 'PHP']);
  doc.setCreator('Vadim Plamadeala');
  doc.setProducer('Vadim Plamadeala');
  doc.setCreationDate(now);
  doc.setModificationDate(now);
  const bytes = await doc.save({ updateMetadata: false });
  writeFileSync(join(outDir, v.file), bytes);
  console.log(`${v.file}: ${doc.getPageCount()} page(s), ${(bytes.length / 1024).toFixed(0)} KB`);
}
