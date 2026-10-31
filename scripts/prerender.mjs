// Gera o HTML pronto de cada página após o build (melhor indexação e prévia de link por página)
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = path.resolve('dist');
const ssrDir = path.resolve('dist-ssr');
const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const { pages, notFound, SITE_URL } = await import(pathToFileURL(path.resolve('src/seo.js')).href);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function buildPage(url, meta, { canonical = true } = {}) {
  const fullUrl = SITE_URL + (url === '/' ? '/' : url);
  let html = template
    .replace(/<title>.*?<\/title>/s, `<title>${escape(meta.title)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/s, `$1${escape(meta.description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escape(meta.title)}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/s, `$1${escape(meta.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${fullUrl}$2`)
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);

  if (canonical) {
    html = html.replace('</title>', `</title>\n    <link rel="canonical" href="${fullUrl}" />`);
  }
  return html;
}

for (const [url, meta] of Object.entries(pages)) {
  const file = url === '/' ? 'index.html' : `${url.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), buildPage(url, meta));
  console.log(`prerender: ${url} -> dist/${file}`);
}

fs.writeFileSync(path.join(dist, '404.html'), buildPage('/404', notFound, { canonical: false }));
console.log('prerender: 404 -> dist/404.html');

fs.rmSync(ssrDir, { recursive: true, force: true });
