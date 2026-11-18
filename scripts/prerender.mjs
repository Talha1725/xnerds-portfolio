// Build step: render every route to static HTML so crawlers and link previews get real content and the
// right title/description without running JavaScript. Runs after `vite build` and the SSR build.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const { render, pages, SITE_URL } = await import(pathToFileURL(path.join(root, "dist-ssr/entry-server.js")).href);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const routes = [
  { key: "/", url: "/", file: "index.html" },
  { key: "/services", url: "/services", file: "services.html" },
  { key: "/portfolio", url: "/portfolio", file: "portfolio.html" },
  { key: "/about", url: "/about", file: "about.html" },
  { key: "/contact", url: "/contact", file: "contact.html" },
  { key: "404", url: "/404", file: "404.html" },
];

const swap = (html, find, value, label) => {
  const found = typeof find === "string" ? html.includes(find) : find.test(html);
  if (!found) throw new Error(`prerender: template is missing ${label}`);
  return html.replace(find, value);
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
  if (r.key === "404") html = html.replace("<head>", '<head>\n    <meta name="robots" content="noindex" />');
  html = swap(html, '<div id="root"></div>', `<div id="root">${render(r.url)}</div>`, "#root");
  fs.writeFileSync(path.join(dist, r.file), html);
  console.log(`prerendered ${r.url.padEnd(11)} -> dist/${r.file}`);
}

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
