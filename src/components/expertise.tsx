import { ArrowUpRight } from "lucide-react";
import { projects } from "@/utils/data";
import { hostOf } from "@/lib/contact";
import { Container, Reveal, SectionTitle } from "@/components/site";

const byTitle = (t: string) => {
  const p = projects.find((x) => x.title === t);
  if (!p) throw new Error(`Unknown project: ${t}`);
  return p;
};

type Capability = { title: string; body: string; proof: string[] };

/** Every capability names shipped projects that prove it; nothing here without a project behind it. */
export const expertise: { group: string; intro: string; items: Capability[] }[] = [
  {
    group: "Trading & fintech",
    intro: "Most of our recent work runs where money moves: trading desks, prop firms, brokers and signal services.",
    items: [
      {
        title: "Expert Advisors for MetaTrader",
        body: "MQL5 EAs with risk rules enforced in code: daily loss stops, volatility-based sizing, volume targets and same-day exits, validated in the MT5 Strategy Tester.",
        proof: ["LotBot", "Profit EA"],
      },
      {
        title: "Copy trading & risk engines",
        body: "One strategy distributed across dozens of accounts, with every trade sized against each account's own drawdown and firm rules.",
        proof: ["Forex Trade Automation"],
      },
      {
        title: "Prop firm platforms",
        body: "Evaluation challenges, phase rules, funded accounts and payouts across MetaTrader, MatchTrader and TradeLocker, plus discovery and review sites for the industry.",
        proof: ["Calvoro Funding", "URFX", "PropFirm Labs", "PropFirm Reviews"],
      },
      {
        title: "Brokerage & trading terminals",
        body: "Client portals, KYC, back office and compliance for brokers, and MetaTrader-style terminals with live market data.",
        proof: ["BlueRock Markets", "TradeMate", "FIGMENT"],
      },
      {
        title: "Signals & market intelligence",
        body: "Signal engines built on liquidation and positioning data, support/resistance detection, in-house indicators and per-symbol ML models.",
        proof: ["BudSignal", "Sentinel", "NewBieTrade AI", "Cockpit"],
      },
      {
        title: "Strategy & discipline tools",
        body: "Turning a trader's written strategy into a monitored plan that flags rule breaks on live charts.",
        proof: ["Chart Guardian"],
      },
    ],
  },
  {
    group: "AI",
    intro: "AI that does a job inside the product, from answering customers to picking trades.",
    items: [
      {
        title: "AI assistants & bots",
        body: "Assistants that answer customers, guide sales replies inside Telegram, deliver trade signals or support daily practice.",
        proof: ["BasedAgent", "FXEE", "LeadSync CRM", "Quran AI"],
      },
      {
        title: "Voice AI",
        body: "Real-time voice conversations with streaming speech-to-text, and spoken cues inside working tools.",
        proof: ["AI Voice Assistant", "Chart Guardian"],
      },
      {
        title: "Machine learning models",
        body: "Models trained and run in production, such as a dedicated model for each of roughly 13,000 stocks, scored on fresh market data after every close.",
        proof: ["NewBieTrade AI", "Cockpit"],
      },
      {
        title: "Generative content",
        body: "Turning a URL or a set of sources into finished output: ad campaigns, UGC video and editable review drafts.",
        proof: ["AdGPT", "PropFirm Reviews"],
      },
    ],
  },
  {
    group: "Platforms & infrastructure",
    intro: "The parts every serious product needs and many teams get wrong: money, identity, live data and scale.",
    items: [
      {
        title: "Payments & subscriptions",
        body: "Stripe billing, memberships and paid tiers, plus referral and affiliate programs, wired into the product rather than bolted on.",
        proof: ["BudSignal", "Headwater Production", "TrainHub", "NexCore VPS"],
      },
      {
        title: "KYC, compliance & security",
        body: "Individual KYC and company KYB with Sumsub, two-factor authentication, role-based access, audit logs and tenant-isolated data.",
        proof: ["BlueRock Markets", "OpenReal", "Calvoro Funding", "LV8"],
      },
      {
        title: "Real-time systems",
        body: "Live market feeds, streaming updates and in-app chat over WebSockets, server-sent events and WebRTC.",
        proof: ["TradeMate", "Sentinel", "Chart Guardian", "Cockpit"],
      },
      {
        title: "Marketplaces & multi-role SaaS",
        body: "Products with several sides to them: customers, partners, staff and admins, each with their own portal and permissions.",
        proof: ["PropFirm Labs", "SmartBite", "Headwater Production", "TrainHub"],
      },
      {
        title: "Multilingual products",
        body: "Interfaces built for more than English, including right-to-left Arabic and Cantonese for Hong Kong.",
        proof: ["SmartBite", "Cockpit", "NewBieTrade AI"],
      },
      {
        title: "Data pipelines & automation",
        body: "Scraping, scheduled jobs, background queues and sync with tools like Google Sheets, running unattended in production.",
        proof: ["PropFirm Reviews", "NewBieTrade AI", "LeadSync CRM", "OpenReal"],
      },
      {
        title: "Tokenised assets & Web3",
        body: "Issuing, investing in and transferring tokenised real-world assets, and on-chain marketplaces for AI and human work.",
        proof: ["OpenReal", "ACTFlow"],
      },
      {
        title: "Healthcare software",
        body: "Patient records, appointments and medical documents in one secure system, with AI-powered document search.",
        proof: ["LV8"],
      },
    ],
  },
];

export const integrations = [
  "MetaTrader 4/5",
  "MQL5",
  "MatchTrader",
  "TradeLocker",
  "TradingView",
  "Binance API",
  "Synth API",
  "Hyblock API",
  "Telegram bots",
  "OpenAI",
  "Deepgram",
  "Google Vertex AI",
  "Stripe",
  "Sumsub KYC",
  "AWS",
  "Docker",
  "Redis",
  "Supabase",
  "Prisma",
  "NestJS",
  "FastAPI",
  "Python",
  "Vue",
  "Playwright",
  "Vitest",
];

function ProofLinks({ names }: { names: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
      {names.map(byTitle).map((p) => {
        const host = hostOf(p.url);
        return (
          <li key={p.title}>
            {host ? (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-[14px] font-medium text-fg hover:text-signal-soft"
              >
                {p.title}
                <ArrowUpRight
                  className="h-3 w-3 text-fg-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal-soft"
                  aria-hidden
                />
              </a>
            ) : (
              <span className="text-[14px] font-medium text-fg">{p.title}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function Expertise() {
  return (
    <section className="border-t border-ink-line py-28 md:py-36">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionTitle>Where we go deepest</SectionTitle>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-fg-muted">
            Anyone can list technologies. Every line below links to something we shipped.
          </p>
        </Reveal>

        <div className="mt-16 space-y-20 md:mt-20">
          {expertise.map((g) => (
            <div key={g.group} className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <Reveal className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <h3 className="text-[clamp(1.6rem,2.6vw,2.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-fg">
                    {g.group}
                  </h3>
                  <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-fg-muted">{g.intro}</p>
                </div>
              </Reveal>
              <ul className="lg:col-span-8">
                {g.items.map((c, i) => (
                  <li key={c.title} className="border-b border-ink-line first:border-t">
                    <Reveal d={i * 40} className="grid gap-3 py-8 md:grid-cols-[1fr_1.35fr] md:gap-10">
                      <h4 className="text-[22px] font-semibold leading-tight tracking-[-0.02em] text-fg">{c.title}</h4>
                      <div>
                        <p className="text-[15px] leading-relaxed text-fg-muted">{c.body}</p>
                        <div className="mt-4">
                          <ProofLinks names={c.proof} />
                        </div>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Reveal className="mt-20 grid gap-6 border-t border-ink-line pt-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] md:gap-10">
          <p className="text-[15px] font-medium text-fg">Platforms and APIs in our shipped work</p>
          <ul className="flex flex-wrap gap-2">
            {integrations.map((n) => (
              <li
                key={n}
                className="rounded-full border border-ink-line bg-white/[0.02] px-3 py-1.5 text-[14px] text-fg-muted"
              >
                {n}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
