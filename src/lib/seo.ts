/** Single source for page titles and descriptions: used by the app at runtime and by the prerender step. */
export const SITE_URL = "https://xnerds.co";

export type PageMeta = { path: string; title: string; description: string };

export const pages: Record<string, PageMeta> = {
  "/": {
    path: "/",
    title: "xNerds — Custom Software, AI & Trading Platform Development",
    description:
      "xNerds is a software house building custom software, AI products and trading platforms for founders. A senior engineering team with 70+ projects shipped since 2023.",
  },
  "/services": {
    path: "/services",
    title: "Services — Custom Software, Mobile, AI & Trading Systems | xNerds",
    description:
      "Custom software, mobile apps, trading systems and MetaTrader EAs, AI assistants, cloud and DevOps, and staff augmentation from the xNerds engineering team.",
  },
  "/portfolio": {
    path: "/portfolio",
    title: "Work — Trading, Prop Firm, AI & SaaS Projects | xNerds",
    description:
      "Trading platforms, prop firm systems, AI products and SaaS that xNerds has built and shipped to production, with live links and screenshots.",
  },
  "/about": {
    path: "/about",
    title: "About xNerds — Senior Software & AI Engineering Team",
    description:
      "xNerds Solutions is a software house founded in 2023, building software and AI products for businesses around the world. 70+ projects for 50+ clients.",
  },
  "/contact": {
    path: "/contact",
    title: "Contact xNerds — Start a Software or AI Project",
    description:
      "Tell xNerds what you are building. Message us on WhatsApp, email info@xnerds.com or call +92 323 4314748.",
  },
  "404": {
    path: "/404",
    title: "Page not found — xNerds",
    description: "This page doesn't exist. Head back to the xNerds homepage or message us on WhatsApp.",
  },
};
