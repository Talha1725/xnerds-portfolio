/** Single source for page titles, descriptions and per-page structured data: used by the app at runtime and by the prerender step. */
import { caseStudies, caseStudyPath } from "@/utils/data";
import type { Project } from "@/utils/type";

export const SITE_URL = "https://xnerds.co";
const ORG_ID = `${SITE_URL}/#organization`;

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  /** Social preview image; defaults to the site-wide og-image.jpg. */
  image?: string;
  /** Breadcrumb trail after "Home", used for BreadcrumbList JSON-LD. */
  crumbs?: { name: string; path: string }[];
  /** Extra JSON-LD nodes for this page (the Organization and WebSite nodes ship on every page). */
  schema?: Record<string, unknown>[];
};

export const pages: Record<string, PageMeta> = {
  "/": {
    path: "/",
    title: "xNerds — Custom Software, SaaS & AI Development Company",
    description:
      "xNerds is a software development company building custom web applications, SaaS platforms, AI products and trading systems for startups and businesses. 70+ projects shipped.",
  },
  "/services": {
    path: "/services",
    title: "Software Development Services: Web, SaaS, AI & Trading | xNerds",
    description:
      "Custom web application and API development, SaaS platforms, mobile apps, AI assistants, trading systems and MetaTrader EAs, cloud and DevOps, and staff augmentation.",
    crumbs: [{ name: "Services", path: "/services" }],
  },
  "/portfolio": {
    path: "/portfolio",
    title: "Software Development Portfolio — Trading, SaaS & AI Projects | xNerds",
    description:
      "Prop firm platforms, brokerages, trading terminals, AI products and SaaS that xNerds has designed, built and shipped to production, with screenshots and live links.",
    crumbs: [{ name: "Portfolio", path: "/portfolio" }],
  },
  "/about": {
    path: "/about",
    title: "About xNerds — Software Development Team Since 2023",
    description:
      "xNerds Solutions is a software development company founded in 2023: a senior team of engineers building web, mobile and AI products for clients worldwide. 70+ projects for 50+ clients.",
    crumbs: [{ name: "About", path: "/about" }],
  },
  "/contact": {
    path: "/contact",
    title: "Contact xNerds — Start a Software or AI Project",
    description:
      "Tell xNerds what you are building. Message us on WhatsApp, email info@xnerds.com or call +92 323 4314748. We reply within 6 hours.",
    crumbs: [{ name: "Contact", path: "/contact" }],
  },
  "404": {
    path: "/404",
    title: "Page not found — xNerds",
    description: "This page doesn't exist. Head back to the xNerds homepage or message us on WhatsApp.",
  },
};

/* ---------- case-study pages ---------- */

/** Search-friendly names where the on-page category is too terse to read well in a title. */
const titleKind: Record<string, string> = {
  URFX: "Prop firm platform",
  "Calvoro Funding": "Prop firm platform",
  BudSignal: "Bitcoin signal service",
  "BlueRock Markets": "Forex brokerage platform",
  "Smart POS Pro": "Point-of-sale app",
  "NewBieTrade AI": "AI stock signal platform",
  "Forex Trade Automation": "Copy-trading risk platform",
  "PropFirm Reviews": "AI review content platform",
  "LeadSync CRM": "Sales CRM",
  "Headwater Production": "Agency client portal",
};

const clip = (s: string, max: number) => {
  if (s.length <= max) return s;
  const cut = s.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.]$/, "")}…`;
};

/** "Prop firm platform" -> "Prop Firm Platform"; acronyms like "AI" and "SaaS" are left alone. */
const titleCase = (s: string) => s.replace(/(^|[\s-])([a-z])/g, (_, sep, c) => sep + c.toUpperCase());
/** Sentence-case a category for use mid-sentence, keeping acronyms and names ("AI …", "MetaTrader 5 EA"). */
const midSentence = (s: string) => (/^\S+[A-Z]/.test(s.split(" ")[0]) ? s : s[0].toLowerCase() + s.slice(1));
const article = (s: string) => (/^[aeiouAEIOU]/.test(s) ? "an" : "a");

function projectMeta(p: Project): PageMeta {
  const path = caseStudyPath(p)!;
  const kind = titleKind[p.title] ?? p.category;
  const noun = midSentence(kind);
  // Descriptions that already open with "A …"/"An …" read better appended than repeated after "is a …".
  const description = clip(
    /^An? /.test(p.description)
      ? `${p.title}, built by xNerds: ${p.description[0].toLowerCase()}${p.description.slice(1)}`
      : `${p.title} is ${article(noun)} ${noun} built by xNerds. ${p.description}`,
    160
  );
  return {
    path,
    title: `${p.title} — ${titleCase(kind)} Development | xNerds`,
    description,
    image: p.image ? `${SITE_URL}${p.image.replace(/\.webp$/, "-1080w.webp")}` : undefined,
    crumbs: [
      { name: "Portfolio", path: "/portfolio" },
      { name: p.title, path },
    ],
    schema: [
      {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}${path}#project`,
        name: p.title,
        headline: `${p.title}: ${kind}`,
        description: p.description,
        url: `${SITE_URL}${path}`,
        ...(p.image ? { image: `${SITE_URL}${p.image}` } : {}),
        genre: p.category,
        keywords: p.tags.join(", "),
        creator: { "@id": ORG_ID },
        ...(p.url ? { sameAs: p.url } : {}),
      },
    ],
  };
}

for (const p of caseStudies) {
  const m = projectMeta(p);
  pages[m.path] = m;
}

/* ---------- structured data ---------- */

/** Per-page JSON-LD (breadcrumbs plus any page-specific nodes); the site-wide Organization graph lives in index.html. */
export function pageSchema(m: PageMeta): Record<string, unknown> | null {
  const graph: Record<string, unknown>[] = [];
  if (m.crumbs?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [{ name: "Home", path: "/" }, ...m.crumbs].map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: `${SITE_URL}${c.path === "/" ? "/" : c.path}`,
      })),
    });
  }
  if (m.schema) graph.push(...m.schema);
  return graph.length ? { "@context": "https://schema.org", "@graph": graph } : null;
}

/* ---------- sitemap ---------- */

/** sitemap.xml for every indexable page (all of `pages` except the 404). Used by the build and the dev server. */
export function sitemapXml(lastmod = new Date().toISOString().slice(0, 10)) {
  const priority = (p: string) =>
    p === "/" ? "1.0" : p.startsWith("/portfolio/") ? "0.7" : p === "/contact" ? "0.6" : "0.8";
  const urls = Object.entries(pages)
    .filter(([key]) => key !== "404")
    .map(
      ([, m]) =>
        `  <url>\n    <loc>${SITE_URL}${m.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority(m.path)}</priority>\n  </url>`
    );
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
}
