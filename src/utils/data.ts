import { Code, Smartphone, ShoppingCart, Cloud, Brain, Rocket, Users, Award, Star, TrendingUp, Shield, Zap, Play, Lightbulb, Target, Palette } from "lucide-react";
import { Feature, Project, Service, Stat, TeamMember, TimelineItem, Value } from "./type";

export const projects: Project[] = [
  {
    title: "ACTFlow",
    description: "An on-chain marketplace where AI agents and people create, verify and monetise tasks, with full transparency.",
    image: "/work/act.webp",
    tags: ["Web3", "AI agents", "React", "Node.js", "MongoDB"],
    category: "Web Application",
    url: "https://www.actflow.ai/",
    sector: "AI products",
    featured: true,
  },
  {
    title: "FIGMENT",
    description: "A crypto perpetuals trading platform with order book, charting, positions and wallet-based funding.",
    image: "/work/figment.webp",
    tags: ["Fintech", "Trading", "Backend", "Microservices"],
    category: "Trading platform",
    url: "https://figment.trade/",
    sector: "Trading & fintech",
    featured: true,
  },
  {
    title: "OpenReal",
    description: "A multi-tenant platform for tokenised real-world assets. Issuers publish assets, verified investors invest, and ownership records and secondary transfers stay compliant.",
    image: "/work/openreal.webp",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Redis", "BullMQ"],
    category: "Investment platform",
    url: "https://openreal.io/",
    sector: "Trading & fintech",
    featured: true,
  },
  {
    title: "BudSignal",
    description: "A Bitcoin futures signal service that publishes a call only when liquidation, positioning, sentiment and order-book data all agree.",
    image: "/work/budsignal.webp",
    tags: ["Next.js", "Express", "Prisma", "PostgreSQL"],
    category: "Signal service",
    url: "https://budsignal.io/",
    sector: "Trading & fintech",
    featured: true,
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
    description: "A client portal and back office for an online broker: onboarding, KYC, funding requests, trading accounts, compliance, affiliates and risk in one system.",
    image: "/work/bluerock.webp",
    tags: ["React", "Express", "Prisma", "PostgreSQL", "Sumsub"],
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
    description: "Automates VPS provisioning, subscriptions and client access for a hosting business, with an admin console for users, orders and payments.",
    image: "/work/nexcore.webp",
    tags: ["React", "Express", "Prisma", "PostgreSQL"],
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
    category: "Analytics Dashboard",
    url: "https://www.bitlenz.com/",
    sector: "Trading & fintech",
  },
  {
    title: "BasedAgent",
    description: "Intelligent virtual AI assistant that helps businesses automate customer service and support operations.",
    image: "/work/basedagent.webp",
    tags: ["AI Assistant", "NLP", "Chatbot", "OpenAI"],
    category: "AI Solution",
    url: "https://basedagent.co/",
    sector: "AI products",
  },
  {
    title: "Antaragame",
    description: "AI-powered gaming platform that creates personalized gaming experiences using machine learning algorithms.",
    image: "/work/antaragame.webp",
    tags: ["AI Gaming", "Machine Learning", "Unity", "Python"],
    category: "AI Platform",
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
    description: "A Cantonese-language AI investing cockpit for Hong Kong retail investors: what to research, when to enter and exit, how much to size, and a members' community.",
    tags: ["React", "tRPC", "Supabase", "Stripe"],
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
    description: "A prop firm where traders buy one-phase, two-phase or instant-funding challenges and receive payouts once they pass.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
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
    description: "A simulated brokerage and MetaTrader-style terminal with live market data, plus admin tools for trade editing, injection and audit logs.",
    tags: ["Next.js", "TradingView", "WebSocket"],
    category: "Trading terminal",
    url: "",
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
    category: "Mobile App",
    url: "",
    sector: "Business platforms",
  }
];

export const services: Service[] = [
  {
    title: "Custom Software Development",
    description: "Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.",
    icon: Code,
    features: ["Web Applications", "API Development", "System Integration"],
    gradient: "from-blue-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Mobile App Development", 
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    icon: Smartphone,
    features: ["iOS & Android", "React Native", "Flutter"],
    gradient: "from-teal-500 to-cyan-600",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww"
  },
  {
    title: "Enterprise Solutions",
    description: "Comprehensive business solutions including ERP, CRM, and POS systems with full compliance and integration.",
    icon: ShoppingCart,
    features: ["ERP Systems", "CRM Solutions", "POS Integration"],
    gradient: "from-purple-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWklMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment solutions for modern businesses.",
    icon: Cloud,
    features: ["AWS/Azure", "CI/CD", "Infrastructure as Code"],
    gradient: "from-indigo-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "AI & Data Analytics",
    description: "Intelligent solutions powered by machine learning and advanced analytics to drive business insights.",
    icon: Brain,
    features: ["Machine Learning", "Data Visualization", "Predictive Analytics"],
    gradient: "from-green-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Staff Augmentation",
    description: "Extend your team with top-tier engineers, AI specialists, and developers — without the hiring overhead. We help you scale fast and smart.",
    icon: Rocket,
    features: ["Vetted Tech Talent", "On-Demand Scaling", "Seamless Team Integration"],
    gradient: "from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D"
  }
];

export const stats: Stat[] = [
  { number: "70+", label: "Projects Delivered", icon: TrendingUp, color: "text-blue-400" },
  { number: "50+", label: "Happy Clients", icon: Users, color: "text-purple-400" },
  { number: "7+", label: "Years of Team Experience", icon: Award, color: "text-teal-400" },
  { number: "100%", label: "Client Satisfaction", icon: Star, color: "text-yellow-400" }
];

export const features: Feature[] = [
  {
    title: "Expert Team",
    description: "Seasoned professionals with deep expertise in modern technologies and industry best practices.",
    icon: Users,
    gradient: "from-blue-500/20 to-purple-500/20",
    iconColor: "text-blue-400"
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing protocols and quality control measures to ensure flawless delivery.",
    icon: Shield,
    gradient: "from-green-500/20 to-teal-500/20",
    iconColor: "text-green-400"
  },
  {
    title: "Agile Delivery",
    description: "Fast, iterative development process with transparent communication and on-time delivery.",
    icon: Zap,
    gradient: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400"
  }
];

export const timeline: TimelineItem[] = [
  {
    year: "2023",
    title: "Founded",
    description: "xNerds Solutions was established with a vision to empower businesses through innovative technology solutions.",
    icon: Rocket,
    color: "from-blue-500 to-cyan-500"
  },
  {
    year: "2023",
    title: "First Projects",
    description: "Successfully delivered our first web development and mobile app projects, establishing our reputation for quality.",
    icon: Code,
    color: "from-green-500 to-emerald-500"
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Expanded our services to include AI and machine learning solutions, helping clients automate and optimize their operations.",
    icon: Brain,
    color: "from-purple-500 to-pink-500"
  },
  {
    year: "2024",
    title: "Growth",
    description: "Reached 30+ satisfied clients and 50+ completed projects, building a strong portfolio across multiple industries.",
    icon: Users,
    color: "from-orange-500 to-red-500"
  },
  {
    year: "2025",
    title: "Innovation",
    description: "Shipping AI, cloud and product work for clients worldwide.",
    icon: Zap,
    color: "from-indigo-500 to-purple-500"
  }
];

export const values: Value[] = [
  {
    title: "Innovation",
    description: "We stay ahead of technology trends to provide cutting-edge solutions that give our clients a competitive advantage.",
    icon: Lightbulb,
    gradient: "from-blue-500 via-blue-600 to-cyan-500"
  },
  {
    title: "Quality",
    description: "Every project is crafted with attention to detail and rigorous testing to ensure exceptional performance and reliability.",
    icon: Award,
    gradient: "from-purple-500 via-purple-600 to-pink-500"
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients as partners, understanding their vision and translating it into successful digital solutions.",
    icon: Users,
    gradient: "from-green-500 via-green-600 to-emerald-500"
  },
  {
    title: "Growth",
    description: "We're committed to continuous learning and improvement, always expanding our skills and knowledge to serve you better.",
    icon: Target,
    gradient: "from-orange-500 via-orange-600 to-red-500"
  }
];

export const team: TeamMember[] = [
  {
    name: "Development Team",
    role: "Full-Stack Developers",
    description: "Developers working across modern web and mobile stacks.",
    icon: Code
  },
  {
    name: "AI Specialists",
    role: "Machine Learning Engineers",
    description: "Data scientists and AI engineers creating intelligent solutions.",
    icon: Brain
  },
  {
    name: "DevOps Team",
    role: "Cloud Engineers",
    description: "Infrastructure experts ensuring scalable and secure deployments.",
    icon: Zap
  },
  {
    name: "Design Team",
    role: "UI/UX Designers",
    description: "Designers who shape the product's interface and user experience.",
    icon: Palette
  }
]; 