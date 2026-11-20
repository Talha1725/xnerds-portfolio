// Build step: render every route to static HTML so crawlers and link previews get real content and the
// right title/description without running JavaScript. Runs after `vite build` and the SSR build.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const { render, pages, pageSchema, sitemapXml, SITE_URL } = await import(pathToFileURL(path.join(root, "dist-ssr/entry-server.js")).href);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// Every page in seo.ts: the main routes, each case study at /portfolio/<slug>, and the 404 page.
const routes = Object.keys(pages).map((key) => {
  if (key === "404") return { key, url: "/404", file: "404.html" };
  if (key === "/") return { key, url: "/", file: "index.html" };
  return { key, url: key, file: `${key.slice(1)}.html` };
});

const swap = (html, find, value, label) => {
  const found = typeof find === "string" ? html.includes(find) : find.test(html);
  if (!found) throw new Error(`prerender: template is missing ${label}`);
  // A function replacer keeps "$" sequences in the value (e.g. inside JSON) literal.
  return html.replace(find, typeof find === "string" ? () => value : value);
};

for (const r of routes) {
  const m = pages[r.key];
  const canonical = `${SITE_URL}${r.key === "404" ? "/" : m.path}`;
  let html = template;
  html = swap(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(m.title)}</title>`, "<title>");
  html = swap(html, /(<meta name="description" content=")[^"]*(")/, `$1${esc(m.description)}$2`, "description");
  html = swap(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${canonical}$2`, "canonical");
  html = swap(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${canonical}$2`, "og:url");
  html = swap(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${esc(m.title)}$2`, "og:title");
  html = swap(html, /(<meta property="og:description" content=")[^"]*(")/, `$1${esc(m.description)}$2`, "og:description");
  html = swap(html, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(m.title)}$2`, "twitter:title");
  html = swap(html, /(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(m.description)}$2`, "twitter:description");
  if (m.image) {
    html = swap(html, /(<meta property="og:image" content=")[^"]*(")/, `$1${m.image}$2`, "og:image");
    html = swap(html, /(<meta name="twitter:image" content=")[^"]*(")/, `$1${m.image}$2`, "twitter:image");
    // Screenshot sizes vary; drop the fixed 1200x630 hints and the og-image alt text that describe the default card.
    html = html.replace(/\s*<meta property="og:image:(width|height|alt)" content="[^"]*" \/>/g, "");
  }
  const schema = pageSchema(m);
  if (schema) {
    const json = JSON.stringify(schema).replace(/</g, "\\u003c");
    html = swap(html, "</head>", `  <script type="application/ld+json">${json}</script>\n  </head>`, "</head>");
  }
  if (r.key === "404") html = html.replace("<head>", '<head>\n    <meta name="robots" content="noindex" />');
  html = swap(html, '<div id="root"></div>', `<div id="root">${render(r.url)}</div>`, "#root");
  fs.mkdirSync(path.dirname(path.join(dist, r.file)), { recursive: true });
  fs.writeFileSync(path.join(dist, r.file), html);
  console.log(`prerendered ${r.url.padEnd(34)} -> dist/${r.file}`);
}

// Sitemap: every indexable route, generated from seo.ts so new case studies are never missed.
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemapXml());
console.log(`sitemap.xml: ${routes.length - 1} urls`);

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
