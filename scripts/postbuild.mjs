import { copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { siteConfig, routeMeta } from "../src/config.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const dist = resolve(root, "dist");
const pub = resolve(root, "public");

const files = [".htaccess", "robots.txt", "sitemap.xml"];

for (const f of files) {
  const src = resolve(pub, f);
  const dest = resolve(dist, f);
  if (existsSync(src)) {
    copyFileSync(src, dest);
    console.log(`copied: ${f}`);
  }
}

const escapeAttribute = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const escapeText = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const replaceMeta = (html, selector, value) => {
  const pattern = new RegExp(`(<meta ${selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")} content=")[^"]*(")`);
  if (!pattern.test(html)) throw new Error(`meta não encontrada no HTML: ${selector}`);
  return html.replace(pattern, `$1${escapeAttribute(value)}$2`);
};

// Gera o HTML estático de uma rota não raiz a partir do index.html já buildado.
// O app continua sendo uma SPA: este arquivo apenas garante que rastreadores e
// previews de link recebam título, descrição e imagem corretos sem executar JS.
function buildRouteHtml(sourceHtml, meta, origin) {
  const url = new URL(meta.canonicalPath, origin).toString();
  const imageUrl = new URL(meta.image, origin).toString();

  let html = sourceHtml.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(meta.title)}</title>`);
  html = replaceMeta(html, 'name="description"', meta.description);
  html = replaceMeta(html, 'property="og:title"', meta.title);
  html = replaceMeta(html, 'property="og:description"', meta.description);
  html = replaceMeta(html, 'property="og:url"', url);
  html = replaceMeta(html, 'property="og:image"', imageUrl);
  html = replaceMeta(html, 'name="twitter:title"', meta.title);
  html = replaceMeta(html, 'name="twitter:description"', meta.description);
  html = replaceMeta(html, 'name="twitter:image"', imageUrl);

  const canonicalPattern = /(<link rel="canonical" href=")[^"]*(")/;
  if (!canonicalPattern.test(html)) throw new Error("link canonical não encontrado no HTML");
  html = html.replace(canonicalPattern, `$1${escapeAttribute(url)}$2`);

  if (meta.noscriptHeading) {
    // Sem JavaScript o splash inline nunca é escondido e cobriria a página.
    const fallback = [
      "<noscript>",
      "<style>#splash{display:none}</style>",
      `<h1>${escapeText(meta.noscriptHeading)}</h1>`,
      `<p>${escapeText(meta.noscriptBody)}</p>`,
      `<p>Contato: WhatsApp ${escapeText(siteConfig.contact.whatsappDisplay)} · ${escapeText(siteConfig.contact.email)}</p>`,
      "</noscript>",
    ].join("");
    if (!html.includes('<div id="root"></div>')) throw new Error("container #root não encontrado no HTML");
    html = html.replace('<div id="root"></div>', `${fallback}<div id="root"></div>`);
  }

  return html;
}

const indexPath = resolve(dist, "index.html");
if (!existsSync(indexPath)) {
  throw new Error("dist/index.html não encontrado; rode o build do Vite antes do pós-build.");
}

const indexHtml = readFileSync(indexPath, "utf8");
const origin = siteConfig.brand.url;
const portfolioPath = resolve(dist, "portfolio.html");

writeFileSync(portfolioPath, buildRouteHtml(indexHtml, routeMeta.portfolio, origin), "utf8");
console.log("generated: portfolio.html");
