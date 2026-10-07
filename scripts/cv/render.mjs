// Renders the CV as a standalone HTML document for printing to PDF.
// Everything (fonts, photo) is inlined so Chrome can print it from a file:// URL.

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function renderCv(cv, { withPhoto, photoDataUri, fontDataUri }) {
  const { person, summary, experience, productsIntro, products, education, otherProjects, skills, languages } = cv;

  const contact = [
    person.location,
    person.phone,
    person.email,
    person.linkedin,
    person.github,
    person.site,
  ];

  const job = (j) => `
    <section class="job">
      <div class="row">
        <h3>${esc(j.role)}, ${esc(j.company)}</h3>
        <span class="when">${esc(j.start)} – ${esc(j.end)}</span>
      </div>
      <div class="sub">${esc(j.place)}${j.blurb ? `. ${esc(j.blurb)}` : ''}</div>
      <ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
    </section>`;

  const product = (p) => `
    <section class="job product">
      <h3>${esc(p.name)} <span class="kind">${esc(p.kind)}</span></h3>
      <p>${esc(p.line)} <span class="stack-inline">${esc(p.tech)}</span></p>
    </section>`;

  const edu = (e) => `
    <section class="job">
      <div class="row">
        <h3>${esc(e.degree)}</h3>
        <span class="when">${esc(e.start)} – ${esc(e.end)}</span>
      </div>
      <div class="sub">${esc(e.school)}</div>
      ${e.notes ? `<p>${esc(e.notes)}</p>` : ''}
    </section>`;

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(person.name)} – CV</title>
<meta name="author" content="${esc(person.name)}">
<style>
@font-face{font-family:"Manrope";src:url(${fontDataUri}) format("woff2");font-weight:200 800;font-display:block}
@page{size:A4;margin:12mm 14mm 12mm 14mm}
*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{font-family:"Manrope",Arial,sans-serif;font-size:9.4pt;line-height:1.35;color:#1b2230;font-variant-ligatures:common-ligatures}
a{color:inherit;text-decoration:none}
header{display:flex;justify-content:space-between;align-items:flex-start;gap:8mm;margin-bottom:4mm}
header .id{flex:1 1 auto;min-width:0}
h1{font-size:22pt;font-weight:800;letter-spacing:-0.01em;margin:0 0 1mm;line-height:1.1}
.title{font-size:11pt;font-weight:600;color:#3b4656;margin:0 0 2.2mm}
.contact{font-size:8.9pt;color:#3b4656;line-height:1.5}
.contact span{display:inline-block;white-space:nowrap}
.contact span+span::before{content:"  |  ";color:#b8bec8;white-space:pre}
.photo{flex:0 0 auto;width:26mm;height:26mm;border-radius:3mm;object-fit:cover;display:block}
h2{font-size:10.6pt;font-weight:800;letter-spacing:0.01em;margin:3.6mm 0 1.4mm;padding-bottom:0.9mm;border-bottom:0.5pt solid #c9a227;color:#1b2230;page-break-after:avoid}
h3{font-size:10pt;font-weight:700;margin:0;line-height:1.3}
.row{display:flex;justify-content:space-between;align-items:baseline;gap:6mm}
.when{font-size:9pt;color:#3b4656;white-space:nowrap;font-variant-numeric:tabular-nums}
.sub{font-size:9.2pt;color:#3b4656;margin:0.3mm 0 1mm}
.job{margin:0 0 2.2mm;page-break-inside:avoid}
.job p{margin:0.6mm 0 0}
ul{margin:0.4mm 0 0.8mm;padding-left:4.2mm}
li{margin:0 0 0.55mm;padding-left:0.4mm}
.stack{font-size:8.8pt;color:#3b4656}
.stack::before{content:"Stack: ";font-weight:700;color:#1b2230}
.kind{font-weight:500;color:#3b4656;font-size:9.2pt}
.kind::before{content:"– "}
.product{margin-bottom:2mm}
.stack-inline{color:#3b4656}
.summary{margin:0}
.skills{margin:0;display:grid;grid-template-columns:37mm 1fr;row-gap:0.9mm;column-gap:3mm}
.skills dt{hyphens:none}
h2.pb{break-before:page;margin-top:0}
.skills dt{font-weight:700;margin:0}
.skills dd{margin:0}
.langs{margin:0}
.other{margin:0.4mm 0 0.8mm;padding-left:4.2mm}
.other li{margin:0 0 0.5mm}
.url{color:#3b4656;font-size:8.6pt}
.two{display:grid;grid-template-columns:1fr 1fr;column-gap:8mm}
</style>
</head>
<body>
<header>
  <div class="id">
    <h1>${esc(person.name)}</h1>
    <p class="title">${esc(person.title)}</p>
    <p class="contact">${contact.map((c) => `<span>${esc(c)}</span>`).join('')}</p>
  </div>
  ${withPhoto ? `<img class="photo" src="${photoDataUri}" alt="">` : ''}
</header>

<h2>Summary</h2>
<p class="summary">${esc(summary)}</p>

<h2>Experience</h2>
${experience.map(job).join('')}

<h2>Independent products</h2>
<p class="summary" style="margin-bottom:1.8mm">${esc(productsIntro)}</p>
${products.map(product).join('')}

<h2>Education</h2>
${education.map(edu).join('')}

<h2>Other projects</h2>
<ul class="other">
${otherProjects.map((o) => `<li><strong>${esc(o.name)}</strong>: ${esc(o.line)}${o.url ? ` <span class="url">${esc(o.url.replace('https://', ''))}</span>` : ''}</li>`).join('\n')}
</ul>

<h2>Skills</h2>
<dl class="skills">
${skills.map((g) => `<dt>${esc(g.group)}</dt><dd>${esc(g.items.join(', '))}</dd>`).join('\n')}
</dl>

<h2>Languages</h2>
<p class="langs">${languages.map((l) => `${esc(l.name)} (${esc(l.level)})`).join(', ')}</p>
</body>
</html>`;
}
