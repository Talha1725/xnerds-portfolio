/**
 * Long-form case-study content for /portfolio/<slug> pages, keyed by project title.
 * Source: the team's project write-ups. Keep it factual: no invented clients, numbers or results.
 */
export interface CaseStudyDetail {
  /** What the product is, who it serves and the problem it solves; 2–4 short paragraphs. */
  overview: string[];
  /** What we built, as concrete capabilities (8–14 points). */
  features: string[];
  /** Technology grouped by layer. */
  stack: { label: string; items: string }[];
}

export const caseStudyDetails: Record<string, CaseStudyDetail> = {
  URFX: {
    overview: [
      "URFX is a proprietary trading firm. Traders buy an evaluation challenge, one-phase, two-phase or instant funding, trade it on MetaTrader 4, MetaTrader 5 or MatchTrader, and receive a payout once they pass.",
      "We built the platform that runs it: the trader-facing site and dashboard, challenge purchase, and challenge accounts across MetaTrader 4, MetaTrader 5 and MatchTrader, with EA trading support, trader contracts, certificates and AI trading insights, running on AWS.",
    ],
    features: [
      "One-phase, two-phase and instant-funding challenge types",
      "Challenge accounts on MT4, MT5 and MatchTrader from one trader dashboard",
      "Expert Advisor (EA) trading support",
      "Trader contracts and achievement certificates",
      "AI trading insights and an AI assistant bot",
      "Payouts for traders who pass their challenge",
    ],
    stack: [
      { label: "Frontend", items: "React (Vite)" },
      { label: "Backend", items: "Node.js, Prisma, PostgreSQL" },
      { label: "Trading platforms", items: "MetaTrader 4/5, MatchTrader" },
      { label: "Cloud", items: "AWS EC2, RDS and S3" },
    ],
  },

  "Calvoro Funding": {
    overview: [
      "Calvoro Funding is a prop firm platform that manages the whole trader lifecycle: choosing and paying for an evaluation challenge, account provisioning, identity verification, trading under the challenge rules, funding, payouts and certificates.",
      "The platform is broker-agnostic. A trader's account can run on MetaTrader 4/5, MatchTrader or TradeLocker without changing their experience: the backend keeps a separate integration for each platform and synchronises balances, trades and evaluation state, with a persistent gRPC stream for real-time MatchTrader events.",
      "To provision at scale, the backend keeps pre-provisioned pools of trading accounts. At checkout a trader is assigned an account from the right pool, pools replenish automatically, and the operations team is alerted before one runs low.",
      "Behind it sits a large admin system for traders, accounts, challenges, payments, KYC, payouts, support tickets, permissions and platform configuration.",
    ],
    features: [
      "One-phase, two-phase and instant-funding challenges with per-phase profit targets, daily loss and max drawdown",
      "Automated phase pass/fail evaluation with certificates on success",
      "MetaTrader 4/5, MatchTrader and TradeLocker accounts in one dashboard",
      "Real-time MatchTrader event streaming over gRPC",
      "Account-pool provisioning with auto-replenishment and depletion alerts",
      "Paid add-ons such as weekend trading and scalping permissions",
      "Checkout with multiple payment gateways, coupons and PDF invoices",
      "Payout requests with admin approval",
      "KYC document review and e-signed account-activation contracts with an audit trail",
      "AI trade insights and a chatbot that can analyse trade screenshots",
      "Public certificate verification by code and QR",
      "Role-based admin panel, support tickets with SLA tracking, and 30+ transactional emails",
      "Public leaderboard, promotions and conversion tracking",
      "English, French, Spanish and German interface",
    ],
    stack: [
      { label: "Frontend", items: "React 19, TypeScript, Vite, Redux Toolkit, Jotai, TanStack Query, Tailwind CSS, i18next" },
      { label: "Backend", items: "Node.js, Express, Prisma, PostgreSQL, node-cron, PM2, Swagger" },
      { label: "Trading", items: "MetaApi (MT4/MT5), MatchTrader REST and gRPC, TradeLocker" },
      { label: "Integrations", items: "OpenAI via LangChain, Signaturely, Google OAuth, SendGrid, S3-compatible storage, Telegram" },
    ],
  },

  "BlueRock Markets": {
    overview: [
      "BlueRock Markets is a brokerage management platform that brings an online broker's whole operation into one system: client onboarding, identity verification, deposits and withdrawals, trading accounts, compliance, affiliates, risk and reporting.",
      "It replaced spreadsheets, email threads and manual approvals. Clients use one portal to register, verify, secure their account, fund it and reach their trading accounts; the brokerage team uses a separate admin portal to review clients, process financial requests, apply controls and watch the business.",
      "Every request goes through a secured API that checks identity and permissions before applying business rules, and external providers (KYC, payments, trading platforms, storage, email) sit behind their own integration modules so they can be swapped as the business changes.",
    ],
    features: [
      "Client registration, email verification and two-factor authentication",
      "Sumsub KYC with admin review, approval, rejection and resubmission",
      "Separate client and admin portals with role-based permissions",
      "Trading-account creation and credential management (MatchTrader)",
      "Wallets, transaction history and admin adjustments",
      "Deposit and withdrawal requests with an approval workflow",
      "A-book and B-book risk management and country blacklisting",
      "Affiliate and Introducing Broker programme with referral commissions",
      "Reports on deposits, withdrawals, revenue, volume, country and affiliates, with CSV export",
      "Audit records for sensitive admin and financial actions",
      "Error monitoring, structured logging and rate-limited, validated APIs",
    ],
    stack: [
      { label: "Frontend", items: "React 19, TypeScript, Vite, Tailwind CSS, shadcn/ui, Zustand, TanStack Table, Recharts" },
      { label: "Backend", items: "Node.js, Express, Better Auth, Prisma, PostgreSQL, Zod, Pino" },
      { label: "Integrations", items: "Sumsub, MatchTrader (gRPC), S3-compatible storage, Nodemailer, Sentry" },
      { label: "Infrastructure", items: "Docker, Nginx, PM2, Swagger/OpenAPI" },
    ],
  },

  OpenReal: {
    overview: [
      "OpenReal is a multi-tenant platform for tokenised real-world asset investment. It connects institutional asset issuers with verified investors and covers the full lifecycle: research, onboarding, verification, issuance, portfolios, ownership records and compliant secondary-market transfers.",
      "Several investment institutions run on the same application, each with its own users, assets, documents and settings. Tenant isolation is enforced in the application and again in the database with PostgreSQL Row-Level Security.",
      "Ownership transfers move through a state-based workflow (buyer confirmation, payment evidence, compliance review and approvals) before the ownership registry changes, and every step leaves an immutable audit record.",
    ],
    features: [
      "Public marketplace for researching real-world assets",
      "Individual KYC and company KYB through Sumsub",
      "Separate portals for investors, issuers, tenant admins and super admins",
      "Multi-tenant architecture with database-level isolation",
      "Investor portfolios, holdings, distributions and performance",
      "Issuer tools for assets, offerings, documents and investor participation",
      "Transfer Hub for secondary-market ownership transfers",
      "Eligibility, holding-limit and lockup-period checks",
      "Payment-evidence submission with admin approval or rejection",
      "Ownership registry with full history",
      "Maker-checker approvals and immutable audit logs",
      "Multi-factor authentication, rate limiting and Redis-backed sessions",
    ],
    stack: [
      { label: "Frontend", items: "Next.js, React, TypeScript, Tailwind CSS" },
      { label: "Backend", items: "Node.js, NestJS, Prisma, PostgreSQL, Redis, BullMQ" },
      { label: "Integrations", items: "Sumsub, Google OAuth, Postmark, Paddle, S3-compatible storage" },
      { label: "Infrastructure", items: "Docker, Nginx, PM2, GitHub Actions CI/CD, Playwright end-to-end tests" },
    ],
  },

  BudSignal: {
    overview: [
      "BudSignal is a subscription signal service for Bitcoin perpetual futures. It reads the positioning data a price chart never shows (liquidation heatmaps, whale versus retail positioning, sentiment spreads and order-book depth) and publishes a directional call only when those independent sources agree.",
      "The engine runs every hour as a strict chain of gates rather than a weighted score. If any gate fails, the output is NO TRADE, which by design is most of the time. Qualified setups are graded into strength tiers with a plain-English explanation and published only when the direction or tier changes.",
      "Subscribers get a web dashboard and a private Telegram channel whose membership follows their Stripe billing status. Every call is stored with its raw data and scored against what price did afterwards, so the track record is auditable. The client specified the trading strategy; we built the engine, every indicator, the scoring layer, the delivery pipeline and both applications.",
    ],
    features: [
      "Gated signal engine: liquidation clusters, liquidation probability, whale and sentiment confirmation, order flow",
      "25 computed features written in-house, with no third-party technical-analysis library",
      "Strength tiers from SOFT to 4x, LONG or SHORT, with generated reasoning",
      "Market data from the Hyblock Capital and Synth APIs and Binance perpetuals",
      "Subscriber dashboard with signal history",
      "Private Telegram channel with single-use invite links",
      "Channel access granted and revoked automatically from Stripe webhooks",
      "Every call scored against subsequent price movement",
    ],
    stack: [
      { label: "Frontend", items: "Next.js 16, React 19, TypeScript, Tailwind CSS, shadcn/ui, Recharts" },
      { label: "Backend", items: "Express, Prisma, PostgreSQL, node-cron, PM2, Swagger" },
      { label: "Integrations", items: "Hyblock Capital, Synth, Binance, Telegram Bot API, Stripe" },
    ],
  },

  Sentinel: {
    overview: [
      "Sentinel is a crypto market-structure alerting platform. It finds the support and resistance levels that matter across timeframes on Binance perpetual futures and notifies traders the moment price reaches them.",
      "Each level gets a bounce-or-breakout probability from how price actually behaved there historically. Traders can set price, zone and market-dominance alerts or build their own multi-timeframe rules, and an AI assistant explains market conditions and creates alerts from plain-language requests.",
      "Detection runs only on closed candles, so levels never shift after they are drawn, and every alert is edge-triggered so a setup fires once rather than repeating.",
    ],
    features: [
      "Swing-pivot, range and rejection zones per timeframe",
      "Volume profile: point of control, value area, high and low volume nodes",
      "Cross-timeframe confluence scoring and historical bounce/breakout probability",
      "29 indicators built in-house, including RSI, ADX, MACD, ATR, OBV and divergences",
      "Custom rules with nested AND/OR conditions across 14 timeframes",
      "Price, zone entry/exit and market-dominance alerts",
      "AI assistant for market explanations and natural-language alert creation",
      "Delivery in-app, by email and on Telegram",
    ],
    stack: [
      { label: "Frontend", items: "Next.js 16, React 19, TypeScript, Tailwind CSS, lightweight-charts" },
      { label: "Backend", items: "Express, Prisma, PostgreSQL, WebSocket, server-sent events" },
      { label: "Integrations", items: "Binance Futures API, CoinGecko, OpenAI, Telegram Bot, Nodemailer" },
    ],
  },

  "Chart Guardian": {
    overview: [
      "Chart Guardian turns a trader's own strategy and risk rules into an active trading plan, then watches their TradingView charts and steps in before they break it.",
      "During setup the trader picks a style, a strategy, entry and exit rules, risk limits and psychology rules. While they trade, the app compares live chart context against the plan: hard limits such as instruments, hours, daily trades and daily loss, then deeper conditions such as trend, trendline breaks, candle confirmation and confluence.",
      "Deterministic checks are the baseline, and AI adds strategy parsing and chart-image analysis on top. When a likely violation is detected, the trader gets visual, sound and voice alerts, must confirm intent to override, and repeated breaks trigger a cooldown, so the outcome is fewer impulsive, out-of-plan trades.",
    ],
    features: [
      "Guided setup for day, swing or position trading with strategy templates",
      "Custom entry, exit, invalidation, risk and psychology rules",
      "TradingView chart integration with chart capture and drawing support",
      "Real-time monitoring over WebSockets with change detection",
      "Deterministic rule engine for limits and setup validation",
      "AI strategy parsing and chart-image analysis",
      "Voice Guardian with streaming speech-to-text and spoken interventions",
      "Override flow, violation history, discipline score and cooldown lock",
      "Performance dashboard with adherence metrics and daily AI summaries",
      "Admin tools for users, roles and Guardian logs",
    ],
    stack: [
      { label: "Frontend", items: "React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, TanStack Query, Zustand" },
      { label: "Charts", items: "TradingView, lightweight-charts, ECharts, Recharts" },
      { label: "Backend", items: "Supabase (Auth, PostgreSQL with Row Level Security, Realtime, Edge Functions)" },
      { label: "AI and voice", items: "OpenAI-compatible models, Deepgram speech-to-text, WebRTC" },
    ],
  },

  FXEE: {
    overview: [
      "FXEE is an AI trading assistant that generates data-driven trading signals across forex, crypto and commodities.",
      "It offers daily recommended signals, custom analysis of a trade the user is considering, and a Best Trade mode where the AI picks the strongest opportunity in current conditions. High-confidence signals go straight to a Telegram channel or can be executed through a connected Expert Advisor.",
    ],
    features: [
      "Daily AI-recommended signals for forex, crypto and commodities",
      "Custom trade analysis on request",
      "Best Trade mode that selects the strongest current opportunity",
      "Signal delivery to a Telegram channel",
      "Execution through a connected EA",
    ],
    stack: [
      { label: "Application", items: "Next.js 15, React 19, TypeScript" },
      { label: "Data", items: "PostgreSQL, Drizzle ORM" },
      { label: "AI", items: "OpenAI" },
    ],
  },

  "PropFirm Labs": {
    overview: [
      "PropFirm Labs is a prop firm discovery marketplace serving both sides of the market.",
      "Traders browse and compare firms side by side, find curated offers, read and write reviews, and ask an AI advisor that recommends firms based on their goals and trading style. Prop firms get a listing portal to request a listing, manage their profile and offers, and reach traders through comparison, best-seller and featured-deal placement.",
      "An admin and curator role approves listings, curates offers and moderates reviews and discussions, keeping the directory accurate and trustworthy.",
    ],
    features: [
      "Prop firm directory with search",
      "Side-by-side firm comparison",
      "Best-sellers and curated offers",
      "Favourites, reviews and a personalised dashboard",
      "AI advisor that recommends firms by goals and trading style",
      "Community discussions",
      "Listing portal for firms: onboarding, profile and offer management",
      "Admin listing approval, offer curation and moderation",
    ],
    stack: [
      { label: "Application", items: "Next.js 16, React 19, TypeScript" },
      { label: "UI", items: "Tailwind CSS, Radix UI, shadcn/ui, TanStack Table" },
      { label: "Backend", items: "Supabase (auth and database)" },
    ],
  },

  "PropFirm Reviews": {
    overview: [
      "PropFirm Reviews is a content-production workflow that turns public prop-firm review sources into consistent, editable review drafts.",
      "A team creates a campaign for a firm, sets a target number of reviews and adds source URLs. The scraper respects robots.txt, paces requests per host and falls back to a real browser for dynamic pages. Generation then uses the scraped evidence as context, and every draft must pass a strict schema and quality checks for length, duplicates and AI-sounding phrasing.",
      "Drafts stay editable and traceable to their campaign and source, and export to CSV or JSON marks them as delivered, so the team always knows what is work in progress.",
    ],
    features: [
      "Campaigns per prop firm with review targets",
      "Source URL management with validation and duplicate prevention",
      "Scrape jobs with progress tracking, retries and logs",
      "robots.txt compliance, per-host rate limiting and a Playwright fallback",
      "AI review generation with strict structured output",
      "Topic splits such as payouts, support and rules",
      "Quality checks for rating range, length, duplicates and AI-sounding phrases",
      "Review library, editor and single-review regeneration",
      "CSV and JSON export with status tracking",
      "Analytics, audit trail and failure alerts",
    ],
    stack: [
      { label: "Application", items: "Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui" },
      { label: "Data", items: "PostgreSQL, Prisma" },
      { label: "Scraping and AI", items: "Cheerio, Playwright, OpenAI, Zod" },
    ],
  },

  "Forex Trade Automation": {
    overview: [
      "Forex Trade Automation is a risk-governed copy-trading control platform for professional prop-firm traders, who often hold dozens of funded and evaluation accounts, each under a different firm's rulebook.",
      "One strategy runs on a master account. The platform decides which accounts may receive each trade, sizes every position against that account's remaining limits, and monitors each account continuously against its own firm's terms. Trades execute on MT4 and MT5 through a copy-trading service, and every outbound action passes an execution guard.",
      "The client supplies the strategies; the platform does not generate signals or decide what to trade. It governs distribution and risk: who receives a trade, at what size, and when an account must be pulled out of the flow to protect it. Firm rulebooks are structured and version-tracked, so a change in terms surfaces for review instead of being discovered through a violation.",
    ],
    features: [
      "Per-account trade eligibility and position sizing against each account's remaining limits",
      "Four drawdown models (max, daily, trailing and static), each configured per firm",
      "Daily drawdown that resets at each firm's own hour and timezone",
      "Profit target rules, separately for evaluation and funded accounts",
      "Consistency rules and daily profit caps",
      "Floating-loss limits per account and per symbol, with soft and hard breach tiers",
      "Exposure caps on open positions, lot volume and margin",
      "News blackout windows around high-impact events",
      "Martingale, grid and HFT restrictions, plus weekend, overnight and minimum-hold rules",
      "Firm rulebooks structured and version-tracked, so rule changes surface for review",
      "Execution guard that can hold the whole system read-only",
      "Exportable risk history, payout progress and configuration audit",
    ],
    stack: [
      { label: "Application", items: "Next.js 16, React 19, TypeScript, Tailwind CSS 4, TanStack Query and Table" },
      { label: "Data", items: "PostgreSQL (Supabase), Prisma" },
      { label: "Trading", items: "MetaTrader 4/5 through the Duplikium copy-trading API, economic calendar feed" },
      { label: "Tooling", items: "OpenAI, Playwright, Cheerio, XLSX and DOCX export, OpenAPI/Swagger" },
    ],
  },

  "NexCore VPS": {
    overview: [
      "NexCore VPS is a VPS hosting platform that automates the whole journey from payment to a running server.",
      "Customers pick a plan and pay through a hosted checkout. When the payment webhook arrives, the backend verifies its signature, resolves the account, provisions a Windows VPS on Contabo, waits in the background for its IP address, and emails the credentials, without blocking the purchase.",
      "Recurring billing is automated too: failed payments start a grace period that stops the server, recovery restarts it, and cancellations, refunds or chargebacks terminate it. Administrators see every user, order and server in one place and can assign a server manually.",
    ],
    features: [
      "Plan selection with billing cycles, quantities and add-ons",
      "Hosted checkout linked to the customer's account by a signed token",
      "Automated Contabo VPS provisioning on payment",
      "Signed webhook verification with idempotent handling and an audit log",
      "Background IP polling and credential email",
      "Grace-period suspension, automatic restart and termination",
      "Customer dashboard with credentials, payments and order status",
      "Admin views of users, orders and servers, with manual VPS assignment",
      "Transactional emails for every lifecycle event",
    ],
    stack: [
      { label: "Frontend", items: "React 19, TypeScript, Vite, Tailwind CSS 4, shadcn/ui, Zustand" },
      { label: "Backend", items: "Node.js, Express, Prisma, PostgreSQL, node-cron, Swagger" },
      { label: "Integrations", items: "Contabo API, CopeCart webhooks, Nodemailer" },
    ],
  },

  TradeMate: {
    overview: [
      "TradeMate is a brokerage-style trading terminal. Users follow live market data, open and manage positions, and review their performance in an interface that works the way MetaTrader users expect.",
      "Behind the terminal sits an order engine for market orders, stop-loss and take-profit checks and live P/L, plus an admin layer where every account change goes through role checks and is written to an audit log.",
    ],
    features: [
      "Dashboard with balance, equity, floating P/L, win rate and equity curve",
      "Trading terminal with symbol search and TradingView charts",
      "Market buy and sell with lot sizing, stop-loss and take-profit",
      "Open-position monitoring with partial and full close",
      "Trade history with search and filters",
      "Live quotes over WebSocket and historical data through an EODHD relay",
      "Admin account management with role checks and audit logging",
    ],
    stack: [
      { label: "Application", items: "Next.js 16, React 19, TypeScript, Tailwind CSS, shadcn/ui" },
      { label: "State and data", items: "Zustand, TanStack Query, Recharts" },
      { label: "Market data", items: "TradingView Charting Library, WebSocket price feed, EODHD" },
    ],
  },

  Cockpit: {
    overview: [
      "Cockpit is a Cantonese-language AI wealth-management SaaS for Hong Kong retail investors. Rather than a stock-tip service, it is a full trading cockpit: which stocks are worth researching today, when to enter and exit, how much to put in, and what to do once already holding.",
      "Its signal layer uses per-symbol machine-learning models for the US, Hong Kong and China markets, with in-house analytics on top: a momentum-ranked strong-stock list, a market-sentiment index, a market-breadth indicator and relative-strength rankings. Everything runs on finalised end-of-day data behind integrity checks, split repair and provider failover.",
      "Around the signals, members get a live position and risk system, a position-sizing tool, an AI wealth-advisor chatbot grounded in their own portfolio, courses and weekly live Zoom sessions. It runs on four Stripe subscription tiers with a feature-permission matrix, and staff operate members through a separate console that can only make changes through a signed bridge back into the product.",
    ],
    features: [
      "Machine-learning trend signals for US, Hong Kong and China stocks",
      "Momentum-ranked daily strong-stock list",
      "Market-sentiment and market-breadth indicators",
      "Real-time quotes with provider failover and data-integrity monitoring",
      "Live positions, P&L, concentration and stop-loss proximity",
      "Position-size calculator and strategy predictor",
      "Portfolio import from screenshots using OCR",
      "Broker sync for positions and trades",
      "AI wealth-advisor chatbot grounded in the member's portfolio",
      "Four Stripe membership tiers with per-feature access control",
      "Courses, beginner guide, live replays and weekly Zoom webinars",
      "Separate operations console for the internal team",
    ],
    stack: [
      { label: "Frontend", items: "React 19, TypeScript, Vite, Tailwind CSS 4, shadcn/ui, tRPC, KLineCharts, ECharts" },
      { label: "Backend", items: "Node.js, Express, tRPC, Drizzle ORM, MySQL, Redis, node-cron" },
      { label: "Data and AI", items: "EODHD, Alpaca, Futu OpenD, AkShare, multiple LLM providers via the Vercel AI SDK" },
      { label: "Platform", items: "Supabase Auth, Stripe, Zoom SDK, Resend, Directus" },
    ],
  },

  "NewBieTrade AI": {
    overview: [
      "NewBieTrade AI is a stock trend-signal platform that shows beginner investors, at a glance, whether a stock is trending up or down and marks the day the trend flips.",
      "Its AI engine trains and runs a dedicated LightGBM model for each of roughly 13,000 stocks across the US, Hong Kong and China markets. After every market close it pulls the latest prices, recomputes 300+ indicators, and turns each model's probability into an up/down phase, a dynamic break-point level and reversal arrows, smoothed so signals don't flip-flop on daily noise.",
      "Signals run only on finalised end-of-day candles, so they never repaint. The client provided the strategy and signal logic; every indicator and the engine were built in-house.",
    ],
    features: [
      "One LightGBM model per stock, roughly 13,000 in total, each trained on years of price history",
      "300+ indicators built in-house, with no third-party technical-analysis library",
      "Momentum, VWAP and volume-trend features, plus relative strength and beta against market benchmarks",
      "One feature pipeline shared by training and daily inference, so live signals match how models were trained",
      "Up/down trend phases, a dynamic break-point level and flip arrows",
      "EMA and hysteresis smoothing so signals don't flip-flop on daily noise",
      "Per-market end-of-day jobs timed to each exchange's calendar and timezone",
      "Non-repainting: signals use finalised end-of-day candles only",
      "Signals served over a REST API and stored per symbol",
      "User accounts and Stripe subscriptions in a multi-language web app",
    ],
    stack: [
      { label: "Frontend", items: "Vue 3, Vite, Pinia, Tailwind CSS, PrimeVue, Chart.js" },
      { label: "User backend", items: "Python, FastAPI, SQLAlchemy, MySQL, Celery, Redis, Stripe, Futu API" },
      { label: "AI engine", items: "Python, LightGBM, pandas, NumPy, Flask, PostgreSQL, EODHD, AWS EC2" },
    ],
  },

  LotBot: {
    overview: [
      "LotBot is a MetaTrader 5 Expert Advisor for accounts that must generate a fixed daily trading volume. Its job is to deliver that volume every day at the smallest possible net cost.",
      "The rules are enforced in code: the daily lot target is met and never exceeded, with no hedging, no position stacking, a minimum holding time and no loss-chasing. Instead of trading randomly to make up volume, it ranks opportunities by quality and fills the remainder only when needed, on the pair and at the time where it costs least.",
      "It was validated on the broker's own real-tick data over 600+ trading days, and delivered in several versions so the owner can choose the trade-off between weekly cost and single bad days.",
    ],
    features: [
      "Daily lot target scheduled across the session and completed before day end",
      "Quality-ranked entries with separate fill-up trades",
      "Live spread monitoring that avoids expensive pairs and sessions",
      "Volatility-based stops and targets with a maximum holding time",
      "Hard per-trade and per-day caps, no hedging or stacking",
      "Multi-pair trading from one chart",
      "On-chart dashboard and CSV reporting of volume, P/L and spread cost",
      "Preset files for different daily volumes",
    ],
    stack: [
      { label: "Expert Advisor", items: "MQL5, MetaTrader 5, CTrade" },
      { label: "Indicators", items: "In-house ATR, EMA, ADX and spread monitor" },
      { label: "Research", items: "MT5 Strategy Tester (real ticks), Python and NumPy analysis" },
    ],
  },

  "Profit EA": {
    overview: [
      "Profit EA is a rules-based MetaTrader 5 Expert Advisor that runs several independent intraday breakout strategies across gold, forex and NAS100 on one account, so no single market decides the result.",
      "Risk comes first: a fixed share of equity per trade, volatility-adjusted sizing, a hard daily loss stop that closes everything until the next day, and automatic risk reduction during drawdowns. All trades close the same day, and a news filter keeps it out of the highest-risk event days.",
      "It came out of a strict research process: more than 20 strategy families were tested and rejected, and only ideas that held up on untouched data, with execution delay and changed settings, were kept.",
    ],
    features: [
      "Independent strategy legs, each with its own market, session and limits",
      "One trade per strategy per day with same-day exit",
      "Volatility-adjusted position sizing and trailing exits",
      "Hard daily equity stop with close-all and pause",
      "Drawdown-based risk reduction that survives restarts",
      "Small-account protection that skips oversized minimum lots",
      "Economic news filter",
      "Restart safety that restores daily state and open orders",
      "CSV and HTML reporting per strategy, month and trade",
    ],
    stack: [
      { label: "Expert Advisor", items: "MQL5, MetaTrader 5, pending stop orders, MT5 economic calendar" },
      { label: "Research", items: "MT5 Strategy Tester (real ticks), Python, NumPy, Numba" },
    ],
  },

  "LeadSync CRM": {
    overview: [
      "LeadSync CRM is a sales and support operations platform that keeps leads, Telegram conversations and sales performance in one workflow.",
      "Leads arrive from manual entry, Google Sheets or Telegram, then move through assignment, pipeline stages, tags and follow-ups until they are won or lost. Because Telegram is where the team works, reps keep their chats synced inside the CRM, reply from it and get AI reply suggestions in context. Sales data is ingested separately and turned into revenue reporting.",
    ],
    features: [
      "Lead capture from manual entry, Telegram and Google Sheets",
      "Assignment, ownership tracking and role-based access",
      "Pipeline stages, statuses and tags",
      "Follow-up templates",
      "Telegram account linking and chat sync with message history",
      "Urgent-chat detection",
      "AI reply suggestions from lead and chat context",
      "Sales webhook ingestion and revenue dashboards",
    ],
    stack: [
      { label: "Frontend", items: "React, TypeScript, Vite, TanStack Query, Zustand, shadcn/ui, Socket.IO" },
      { label: "Backend", items: "NestJS, Prisma, PostgreSQL, Socket.IO, Swagger" },
      { label: "Integrations", items: "Telegram, Google Sheets, OpenAI" },
    ],
  },

  TrainHub: {
    overview: [
      "TrainHub is a fitness-management platform connecting trainers, organisations and athletes on web and mobile.",
      "Trainers run organisations, build reusable exercises and programs, assign workouts and review their athletes. Athletes follow their programs, log workouts and send periodic check-ins with measurements, notes and progress photos. Invitations and role-based access keep each trainer-athlete relationship private, and subscriptions control paid access.",
    ],
    features: [
      "Roles for admins, organisation admins, trainers and athletes",
      "Organisation management and trainer and athlete invitations",
      "Exercise catalogue with videos",
      "Program builder with sets, reps, weights and tempo",
      "Workout assignment and workout logging",
      "Configurable check-ins with photos and measurements",
      "Real-time chat over WebSockets",
      "Push and email notifications",
      "Stripe subscriptions",
      "iOS and Android app",
    ],
    stack: [
      { label: "Web", items: "React, TypeScript, Vite" },
      { label: "Mobile", items: "React Native, Expo" },
      { label: "Backend", items: "Python, FastAPI, SQLAlchemy, PostgreSQL, WebSockets" },
      { label: "Integrations", items: "Stripe, S3-compatible storage, Firebase Cloud Messaging, SMTP" },
    ],
  },

  "Headwater Production": {
    overview: [
      "Headwater Production's portal runs a creative agency's bookings and delivery, with a workspace for each role involved.",
      "Clients book services, follow their projects, download deliverables, pay invoices and message their team. Photographers and videographers see only their own assignments, sync them to their calendar, upload files and log timesheets. Editors manage post-production and hand off finished work; social media managers schedule content from delivered assets.",
      "Agency admins approve and staff bookings, manage services and retainers, invoices, payroll, files and reporting from the same system.",
    ],
    features: [
      "Client portal for bookings, project tracking, downloads and invoices",
      "Scoped workspaces for creative pros, editors and social media managers",
      "Booking approval and team assignment",
      "Google Calendar sync for shoots",
      "File upload, review and delivery",
      "Timesheets and payroll",
      "Services, retainers, invoices and Stripe payments",
      "Direct messaging, including a chat-only guest role",
      "Analytics and reports",
    ],
    stack: [
      { label: "Application", items: "Next.js 16, React 19, TypeScript, Tailwind CSS, shadcn/ui" },
      { label: "Data", items: "PostgreSQL, Drizzle ORM, Supabase Auth" },
      { label: "Integrations", items: "Stripe, Google Calendar, pdf-lib" },
    ],
  },

  LV8: {
    overview: [
      "LV8 is a healthcare platform that centralises patient records, medical documents, appointments and team communication in one secure dashboard, replacing paper records, local files, spreadsheets and separate calendars.",
      "Documents are stored in cloud storage and linked to the right patient, then indexed so authorised users can search them by meaning rather than filename. An AI layer answers questions using only the retrieved patient documents and summarises what it finds, as an aid to review that does not replace clinical judgement.",
      "Appointments sync with Google Calendar, and role-based access means each user sees only the patients and actions their role allows.",
    ],
    features: [
      "Patient profiles with demographic and healthcare information",
      "Secure document upload linked to each patient",
      "Semantic search across patient documents",
      "AI question answering and summaries grounded in the patient's own documents",
      "Appointment scheduling with Google Calendar sync",
      "Role-based access to patients and operations",
      "Central dashboard for patient activity",
    ],
    stack: [
      { label: "Frontend", items: "React, TypeScript" },
      { label: "Backend", items: "Node.js, NestJS, PostgreSQL (Neon)" },
      { label: "AI and search", items: "Google Vertex AI Search, LangChain" },
      { label: "Cloud", items: "Google Cloud Storage, Google Calendar API" },
    ],
  },

  SmartBite: {
    overview: [
      "SmartBite is a bilingual English and Arabic nutrition platform with a full right-to-left interface, serving consumers, restaurants and business partners.",
      "Consumers get goal-based daily plans, AI meal recommendations for their dietary needs, nutrition logging and an assistant that tracks their progress, alongside restaurant discovery and ordering. Restaurants manage menus with nutrition data, orders, goal-based campaigns and analytics, with a Menu Health Score and benchmarks against platform averages.",
      "Partners can embed SmartBite's recommendations in their own apps through a Partner API, and a platform admin manages business accounts, tiered access and feature flags.",
    ],
    features: [
      "Goal-based daily nutrition plans",
      "AI meal recommendations and a progress-aware assistant",
      "Nutrition logging",
      "Restaurant discovery and ordering",
      "Restaurant portal: menus, nutrition, orders, promotions and analytics",
      "Menu Health Score and KPI benchmarking",
      "Partner API with keys, usage and white-label configuration",
      "Tier-based access control and feature flags",
      "Full English and Arabic interface with RTL support",
    ],
    stack: [
      { label: "Frontend", items: "React, TypeScript, Vite, Tailwind CSS, React Router, Recharts" },
      { label: "Backend", items: "Supabase" },
    ],
  },

  "Quran AI": {
    overview: [
      "Quran AI is a mobile app for daily Quran reading and building consistent spiritual habits.",
      "Alongside the Quran itself, it offers an AI assistant for questions and reflection, Hadith browsing, location-based prayer times with reminders, reflection streaks and challenges, Tajwid tips, an explore feed and a support mode for difficult moments, with a premium tier for advanced features.",
    ],
    features: [
      "Quran reading",
      "AI chat assistant",
      "Hadith browsing",
      "Location-based prayer times and reminders",
      "Reflection streaks and challenges",
      "Tajwid tips",
      "Explore feed",
      "Support mode for moments of need",
      "Onboarding and a premium tier",
    ],
    stack: [
      { label: "Mobile", items: "React Native, Expo, TypeScript, React Navigation, Zustand" },
      { label: "Backend", items: "Supabase" },
      { label: "Device", items: "MMKV and SQLite storage, location, notifications, audio, adhan prayer-time calculation" },
    ],
  },

  AdGPT: {
    overview: [
      "AdGPT is an AI advertising platform that turns a single product URL into a launch-ready campaign in minutes.",
      "It generates UGC videos, short video ads, static image ads and Google Search ads for Meta, TikTok and Instagram, with AI avatar videos including scriptwriting and lip sync, Shopify catalogue sync, a competitor ad research tool and direct publishing to ad accounts.",
    ],
    features: [
      "One-click full campaign generation from a product URL",
      "AI UGC avatar videos with scriptwriting and lip sync",
      "Short video ads and static image ads",
      "Google Search ads",
      "Shopify catalogue sync",
      "Competitor ad research",
      "Direct publishing to Meta, Google and TikTok ad accounts",
    ],
    stack: [
      { label: "Integrations", items: "Shopify, Meta, Google Ads, TikTok" },
      { label: "AI", items: "AI video generation, scriptwriting and lip sync" },
    ],
  },
};
