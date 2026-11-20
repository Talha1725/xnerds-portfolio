import { Project, TeamMember, TimelineItem, Value } from "./type";
import { caseStudyDetails } from "./case-studies";

export const projects: Project[] = [
  {
    title: "ACTFlow",
    description: "An on-chain marketplace where AI agents and people create, verify and monetise tasks, with full transparency.",
    image: "/work/act.webp",
    tags: ["Web3", "AI agents", "React", "Node.js", "MongoDB"],
    category: "Web application",
    url: "https://www.actflow.ai/",
    sector: "AI products",
  },
  {
    title: "FIGMENT",
    description: "A crypto perpetuals trading platform with order book, charting, positions and wallet-based funding.",
    image: "/work/figment.webp",
    tags: ["Fintech", "Trading", "Backend", "Microservices"],
    category: "Trading platform",
    url: "https://figment.trade/",
    sector: "Trading & fintech",
  },
  {
    title: "OpenReal",
    description: "The core infrastructure for tokenised real-world asset investment, from investor onboarding and institutional verification to asset issuance, portfolios, ownership records and compliant secondary transfers.",
    highlights: ["Individual KYC and company KYB through Sumsub", "Portals for investors, issuers and administrators", "Secondary-market Transfer Hub with lockups and eligibility checks", "Payment verification and admin approvals"],
    image: "/work/openreal.webp",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Redis", "BullMQ", "Sumsub"],
    category: "Investment platform",
    url: "https://openreal.io/",
    sector: "Trading & fintech",
  },
  {
    title: "BudSignal",
    description: "A Bitcoin futures signal service built on custom signal logic: it publishes a call only when liquidation, positioning, sentiment and order-book data agree.",
    highlights: ["Market data from the Synth and Hyblock APIs", "Custom multi-source signal logic", "Telegram integration and a signal bot"],
    image: "/work/budsignal.webp",
    tags: ["Next.js", "Express", "Prisma", "PostgreSQL", "Telegram"],
    category: "Signal service",
    url: "https://budsignal.io/",
    sector: "Trading & fintech",
  },
  {
    title: "Chart Guardian",
    description: "Turns a trader's strategy and risk rules into an active plan, then watches live TradingView charts and flags rule breaks with AI chart analysis and voice cues.",
    image: "/work/chartguardian.webp",
    tags: ["React", "Supabase", "OpenAI", "Deepgram", "WebRTC"],
    category: "Trading tool",
    url: "https://chart-guardian-ai.vercel.app/",
    sector: "Trading & fintech",
  },
  {
    title: "BlueRock Markets",
    description: "A brokerage platform covering the client portal and the back office: onboarding, KYC, funding, trading accounts, compliance and risk, with A-book and B-book order handling.",
    highlights: ["A-book and B-book risk management", "Affiliate program with referral rewards", "MatchTrader trading accounts", "Sumsub KYC and two-factor security"],
    image: "/work/bluerock.webp",
    tags: ["React", "Express", "Prisma", "PostgreSQL", "MatchTrader", "Sumsub"],
    category: "Brokerage platform",
    url: "https://www.bluerockmarkets.com/",
    sector: "Trading & fintech",
  },
  {
    title: "Calvoro Funding",
    description: "A prop firm platform covering the full trader lifecycle: evaluation challenges, rule tracking across MetaTrader, MatchTrader and TradeLocker, funded accounts and payouts.",
    image: "/work/calvoro.webp",
    tags: ["MetaTrader 4/5", "MatchTrader", "TradeLocker"],
    category: "Prop firm",
    url: "http://calvorofunding.com/",
    sector: "Prop firms",
  },
  {
    title: "PropFirm Labs",
    description: "A prop firm discovery marketplace with side-by-side comparison, reviews, curated offers and an AI advisor, plus a listing portal for the firms themselves.",
    image: "/work/propfirmlabs.webp",
    tags: ["Next.js", "Supabase", "TypeScript"],
    category: "Marketplace",
    url: "https://propfirmlabs.com/",
    sector: "Prop firms",
  },
  {
    title: "FXEE",
    description: "An AI trading assistant that generates forex, crypto and commodity signals, delivered to Telegram or executed through a connected EA.",
    image: "/work/fxee.webp",
    tags: ["Next.js", "PostgreSQL", "Drizzle", "OpenAI"],
    category: "AI trading assistant",
    url: "https://fxee.ai/",
    sector: "AI products",
  },
  {
    title: "AdGPT",
    description: "Turns a single product URL into a launch-ready campaign of UGC videos, image ads and search ads, published straight to Meta, Google and TikTok.",
    image: "/work/adgpt.webp",
    tags: ["AI video", "Shopify", "Meta", "TikTok"],
    category: "AI advertising",
    url: "https://adgpt.com/",
    sector: "AI products",
  },
  {
    title: "Sentinel",
    description: "Detects the support and resistance levels that matter across timeframes on Binance futures, scores them, and alerts traders the moment price arrives.",
    image: "/work/sentinel.webp",
    tags: ["Next.js", "Express", "WebSocket", "Binance API", "Telegram"],
    category: "Alerting platform",
    url: "https://trading-alerts-frontend-orpin.vercel.app/",
    sector: "Trading & fintech",
  },
  {
    title: "NexCore VPS",
    description: "Automates VPS provisioning on Contabo infrastructure, plus subscriptions and client access for a hosting business, with an admin console for users, orders and payments.",
    image: "/work/nexcore.webp",
    tags: ["React", "Express", "Prisma", "PostgreSQL", "Contabo API"],
    category: "Hosting platform",
    url: "https://nexcorevps.com/",
    sector: "Business platforms",
  },
  {
    title: "SmartBite",
    description: "A bilingual English/Arabic nutrition platform with AI meal recommendations and goal-based plans, plus a portal for restaurants to manage menus, orders and campaigns.",
    image: "/work/smartbite.webp",
    tags: ["React", "Supabase", "RTL", "AI"],
    category: "Nutrition platform",
    url: "https://smartbite-jade.vercel.app/",
    sector: "Business platforms",
  },
  {
    title: "AI Voice Assistant",
    description: "A real-time voice assistant that holds a spoken conversation, responds instantly and captures call details as it goes.",
    image: "/work/voice.webp",
    tags: ["Voice AI", "Realtime"],
    category: "Voice AI",
    url: "https://ai-voice-assistent-indol.vercel.app/",
    sector: "AI products",
  },
  {
    title: "Bitlenz",
    description: "A crypto market-intelligence dashboard tracking market cap, volume, social mentions and moving-average trends across tracked tokens.",
    image: "/work/bitlenz.webp",
    tags: ["Data analytics", "Crypto", "Vue.js", "D3.js"],
    category: "Analytics dashboard",
    url: "https://www.bitlenz.com/",
    sector: "Trading & fintech",
  },
  {
    title: "BasedAgent",
    description: "Intelligent virtual AI assistant that helps businesses automate customer service and support operations.",
    image: "/work/basedagent.webp",
    tags: ["AI Assistant", "NLP", "Chatbot", "OpenAI"],
    category: "AI assistant",
    url: "https://basedagent.co/",
    sector: "AI products",
  },
  {
    title: "Antaragame",
    description: "AI-powered gaming platform that creates personalized gaming experiences using machine learning algorithms.",
    image: "/work/antaragame.webp",
    tags: ["AI Gaming", "Machine Learning", "Unity", "Python"],
    category: "AI platform",
    url: "http://antaragame.io/",
    sector: "AI products",
  },
  {
    title: "NewBieTrade AI",
    description: "Runs a dedicated LightGBM model for each of roughly 13,000 US, Hong Kong and China stocks, and marks the day each trend flips.",
    tags: ["Vue 3", "FastAPI", "Python", "LightGBM"],
    category: "AI stock signals",
    url: "https://www.newbietrade-ai.com/",
    sector: "AI products",
  },
  {
    title: "Cockpit",
    image: "/work/cockpit.webp",
    description: "An investing CRM for Hong Kong investors, in Cantonese, with machine-learning trading signals for the US, Hong Kong and China stock markets.",
    highlights: ["ML signals for US, Hong Kong and China stocks", "Models we trained on years of market data", "Entry, exit and position-sizing guidance", "Member CRM, portfolios and community"],
    tags: ["React", "tRPC", "Python", "LightGBM", "Supabase", "Stripe"],
    category: "Wealth-management SaaS",
    url: "https://cockpit.traderk-ai.com/",
    sector: "Trading & fintech",
  },
  {
    title: "Forex Trade Automation",
    description: "Distributes one strategy across dozens of prop-firm accounts, sizing every trade against that account's own rules and remaining limits.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    category: "Copy-trading control",
    url: "https://forex-trade-automation-dashboard-ne.vercel.app/",
    sector: "Prop firms",
  },
  {
    title: "URFX",
    image: "/work/urfx.webp",
    description: "A prop firm platform where traders buy one-phase, two-phase or instant-funding challenges, trade them on MT4, MT5 or MatchTrader, and get paid out when they pass.",
    highlights: ["MT4, MT5 and MatchTrader challenge accounts", "Expert Advisor (EA) trading support", "Trader contracts and achievement certificates", "AI trading insights and an AI assistant bot"],
    tags: ["React", "Node.js", "PostgreSQL", "Prisma", "AWS", "MetaTrader"],
    category: "Prop firm",
    url: "https://urfx.io/",
    sector: "Prop firms",
  },
  {
    title: "PropFirm Reviews",
    description: "Turns public prop-firm review sources into consistent, editable review drafts, each traceable to its campaign and source.",
    tags: ["Prisma", "PostgreSQL", "Tailwind CSS"],
    category: "Content pipeline",
    url: "https://review.propfirmlabs.com/",
    sector: "Prop firms",
  },
  {
    title: "LeadSync CRM",
    description: "Brings leads from Telegram, Google Sheets and manual entry into one pipeline, with synced Telegram chats and AI guidance for replies.",
    tags: ["NestJS", "Prisma", "PostgreSQL", "Socket.IO", "OpenAI"],
    category: "Sales CRM",
    url: "https://crm.fxee.ai/",
    sector: "Business platforms",
  },
  {
    title: "TrainHub",
    description: "Trainers run organisations, build programs and review athletes; athletes follow plans, log workouts and send check-ins, on web and mobile.",
    tags: ["React", "FastAPI", "PostgreSQL", "React Native"],
    category: "Fitness platform",
    url: "https://trainhub.app/",
    sector: "Business platforms",
  },
  {
    title: "Headwater Production",
    description: "A booking and delivery portal for a creative agency: client bookings, project tracking, file delivery, invoicing and crew scheduling for photographers and videographers.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Google Calendar"],
    category: "Agency client portal",
    url: "https://app.headwaterpro.com/",
    sector: "Business platforms",
  },
  {
    title: "Fxutopia",
    description: "",
    tags: [],
    category: "Trading",
    url: "https://fxutopia.com/",
    sector: "Trading & fintech",
  },
  {
    title: "TradeMate",
    description: "A trading terminal where users trade forex, crypto, commodities and other markets directly from TradeMate, with live market data and TradingView charts.",
    highlights: ["Trade forex, crypto, commodities and more from one terminal", "Live prices over WebSocket with TradingView charts", "Stop-loss and take-profit orders", "Balance, equity, P/L and win-rate tracking"],
    image: "/work/trademate.webp",
    tags: ["Next.js", "TradingView", "WebSocket"],
    category: "Trading terminal",
    url: "https://trademate.urfx.io",
    sector: "Trading & fintech",
  },
  {
    title: "LotBot",
    description: "An Expert Advisor that meets a fixed daily trading-volume target at the lowest net cost, with no hedging, stacking or loss-chasing.",
    tags: ["MQL5", "MetaTrader 5", "Python"],
    category: "MetaTrader 5 EA",
    url: "",
    sector: "Trading & fintech",
  },
  {
    title: "Profit EA",
    description: "Runs independent intraday breakout strategies across gold, forex and NAS100 on one account, with same-day exits and a hard daily loss stop.",
    tags: ["MQL5", "MetaTrader 5"],
    category: "MetaTrader 5 EA",
    url: "",
    sector: "Trading & fintech",
  },
  {
    title: "LV8",
    description: "Centralises patient records, medical documents, appointments and team communication for healthcare teams in one secure dashboard.",
    tags: ["React", "NestJS", "PostgreSQL", "Vertex AI"],
    category: "Healthcare platform",
    url: "",
    sector: "Business platforms",
  },
  {
    title: "Quran AI",
    description: "A mobile app for daily Quran reading with an AI assistant, Hadith, prayer times and reflection streaks.",
    tags: ["React Native", "Expo", "Supabase"],
    category: "Mobile app",
    url: "",
    sector: "AI products",
  },
  {
    title: "Smart POS Pro",
    description: "FBR-compliant point-of-sale system with inventory management and real-time sales analytics for retail businesses.",
    image: "/work/pos.webp",
    tags: ["POS System", "FBR Compliant", "Inventory"],
    category: "Mobile app",
    url: "",
    sector: "Business platforms",
  }
];

/** The six showcase projects, in order: the homepage work section and the top of the Portfolio page. */
export const showcaseTitles = ["URFX", "BlueRock Markets", "TradeMate", "Cockpit", "OpenReal", "BudSignal"];
export const showcase: Project[] = showcaseTitles.map((t) => {
  const p = projects.find((x) => x.title === t);
  if (!p) throw new Error(`showcase: unknown project ${t}`);
  return p;
});

/** Order of the "More projects" grid on the Portfolio page; anything not listed follows in data order. */
export const moreProjectsOrder = [
  "NexCore VPS",
  "PropFirm Labs",
  "FXEE",
  "Sentinel",
  "AdGPT",
  "Forex Trade Automation",
  "Chart Guardian",
  "Calvoro Funding",
];
export const moreProjects: Project[] = [
  ...moreProjectsOrder.map((t) => {
    const p = projects.find((x) => x.title === t);
    if (!p) throw new Error(`moreProjects: unknown project ${t}`);
    return p;
  }),
  ...projects.filter((p) => !showcaseTitles.includes(p.title) && !moreProjectsOrder.includes(p.title)),
];

export const timeline: TimelineItem[] = [
  {
    year: "2023",
    title: "Founded",
    description: "xNerds Solutions was established with a vision to empower businesses through innovative technology solutions.",
  },
  {
    year: "2023",
    title: "First projects",
    description: "Successfully delivered our first web development and mobile app projects, establishing our reputation for quality.",
  },
  {
    year: "2024",
    title: "AI integration",
    description: "Expanded our services to include AI and machine learning solutions, helping clients automate and optimize their operations.",
  },
  {
    year: "2024",
    title: "Growth",
    description: "Grew our client base and portfolio across trading, AI and business software.",
  },
  {
    year: "2025",
    title: "Innovation",
    description: "Shipping AI, cloud and product work for clients worldwide.",
  }
];

export const values: Value[] = [
  {
    title: "Innovation",
    description: "We stay ahead of technology trends to provide cutting-edge solutions that give our clients a competitive advantage.",
  },
  {
    title: "Quality",
    description: "Every project is crafted with attention to detail and rigorous testing to ensure exceptional performance and reliability.",
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients as partners, understanding their vision and translating it into successful digital solutions.",
  },
  {
    title: "Growth",
    description: "We're committed to continuous learning and improvement, always expanding our skills and knowledge to serve you better.",
  }
];

export const team: TeamMember[] = [
  {
    name: "Development team",
    role: "Full-stack developers",
    description: "Developers working across modern web and mobile stacks.",
  },
  {
    name: "AI specialists",
    role: "Machine learning engineers",
    description: "Data scientists and AI engineers creating intelligent solutions.",
  },
  {
    name: "DevOps team",
    role: "Cloud engineers",
    description: "Infrastructure experts ensuring scalable and secure deployments.",
  },
  {
    name: "Design team",
    role: "UI/UX designers",
    description: "Designers who shape the product's interface and user experience.",
  }
]; 
/* ---------- case studies ---------- */

export const projectSlug = (title: string) =>
  title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/**
 * Projects that get their own page at /portfolio/<slug>: those with a written case study,
 * plus those with a screenshot and a description.
 */
export const caseStudies: Project[] = projects.filter(
  (p) => p.title in caseStudyDetails || (p.image && p.description)
);

/** Internal case-study path for a project, or undefined when it has no page of its own. */
export const caseStudyPath = (p: Project) =>
  caseStudies.includes(p) ? `/portfolio/${projectSlug(p.title)}` : undefined;
