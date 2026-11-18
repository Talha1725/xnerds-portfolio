import { usePageMeta } from "@/hooks/use-page-meta";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/utils/data";
import { EMAIL, EMAIL_URL, hostOf } from "@/lib/contact";
import {
  Close,
  Container,
  Engagement,
  PageHeader,
  PrimaryAction,
  Reveal,
  SecondaryAction,
  SectionTitle,
} from "@/components/site";

const byTitle = (t: string) => projects.find((p) => p.title === t)!;

const detail = [
  {
    title: "Custom software",
    body: "Web applications, APIs, and integrations with the systems you already run. We build the product end to end, from the data model to the interface.",
    covers: ["Web applications", "API development", "System integration"],
    work: ["OpenReal", "BlueRock Markets", "ACTFlow", "Headwater Production"].map(byTitle),
  },
  {
    title: "Mobile apps",
    body: "iOS and Android apps, built native or cross-platform with React Native and Expo, with the backend they depend on.",
    covers: ["iOS & Android", "React Native & Expo", "Flutter"],
    work: ["TrainHub", "Quran AI", "Smart POS Pro"].map(byTitle),
  },
  {
    title: "Enterprise systems",
    body: "ERP, CRM and POS systems with full compliance and integration, including FBR-compliant point of sale for retail in Pakistan.",
    covers: ["ERP systems", "CRM solutions", "POS integration"],
    work: ["LeadSync CRM", "LV8", "Smart POS Pro"].map(byTitle),
  },
  {
    title: "Cloud & DevOps",
    body: "AWS infrastructure (EC2, S3, RDS), Docker deployments, CI/CD pipelines and environments defined as code, so releases are repeatable.",
    covers: ["AWS (EC2, S3, RDS)", "Docker", "CI/CD", "Infrastructure as code"],
    work: ["NexCore VPS", "OpenReal", "BlueRock Markets", "URFX"].map(byTitle),
  },
  {
    title: "AI & data",
    body: "Machine learning, analytics and dashboards built into your product rather than bolted on.",
    covers: ["Machine learning", "Data visualization", "Predictive analytics"],
    work: ["NewBieTrade AI", "AdGPT", "FXEE", "BudSignal"].map(byTitle),
  },
  {
    title: "Trading systems & automation",
    body: "Expert Advisors for MetaTrader with risk rules enforced in code, copy trading across many accounts, prop firm and brokerage platforms, and signal engines on live market data.",
    covers: ["MQL5 Expert Advisors", "Copy trading & risk engines", "Prop firm & brokerage platforms", "Signals & alerts"],
    work: ["LotBot", "Forex Trade Automation", "Calvoro Funding", "BlueRock Markets", "BudSignal"].map(byTitle),
  },
  {
    title: "AI assistants & bots",
    body: "Assistants that do a job inside the product: answering customers, guiding sales replies in Telegram, holding voice conversations and delivering trade signals.",
    covers: ["Chat & support assistants", "Voice AI", "Telegram bots", "Trading assistants"],
    work: ["BasedAgent", "AI Voice Assistant", "LeadSync CRM", "FXEE"].map(byTitle),
  },
  {
    title: "Staff augmentation",
    body: "Vetted engineers and AI specialists who join your team and work inside your process, without the hiring overhead.",
    covers: ["Vetted tech talent", "On-demand scaling", "Seamless team integration"],
    work: [],
  },
];

const Services = () => {
  usePageMeta("/services");
  return (
  <main>
    <PageHeader
      title="Everything it takes to ship a product."
      lead="We work with teams from the first idea to production scale, across design, engineering, AI and DevOps. Every engagement is iterative, with clear communication and modern engineering practice."
    >
      <div className="flex flex-wrap items-center gap-3">
        <PrimaryAction />
        <SecondaryAction href={EMAIL_URL}>{EMAIL}</SecondaryAction>
      </div>
    </PageHeader>

    <section className="border-t border-ink-line py-20 md:py-28">
      <Container>
        <ul>
          {detail.map((s, i) => (
            <li key={s.title} className="border-b border-ink-line first:border-t">
              <Reveal d={i * 40} className="grid gap-6 py-12 md:py-14 lg:grid-cols-12 lg:gap-10">
                <h2 className="text-[clamp(1.6rem,2.6vw,2.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-fg lg:col-span-4">
                  {s.title}
                </h2>
                <div className="lg:col-span-5">
                  <p className="max-w-[60ch] text-[17px] leading-relaxed text-fg-muted">{s.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {s.covers.map((c) => (
                      <li key={c} className="flex items-center gap-3 text-[15px] text-fg">
                        <span className="h-px w-4 bg-signal-soft" aria-hidden />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-3">
                  {s.work.length > 0 ? (
                    <>
                      <p className="text-[13px] text-fg-faint">Shipped in this area</p>
                      <ul className="mt-3 space-y-2">
                        {s.work.map((p) => {
                          const host = hostOf(p.url);
                          return (
                            <li key={p.title}>
                              {host ? (
                                <a
                                  href={p.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-fg hover:text-signal-soft"
                                >
                                  {p.title}
                                  <ArrowUpRight
                                    className="h-3.5 w-3.5 text-fg-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal-soft"
                                    aria-hidden
                                  />
                                </a>
                              ) : (
                                <span className="text-[15px] font-medium text-fg">{p.title}</span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  ) : (
                    <p className="text-[13px] text-fg-faint">Engineers placed inside client teams</p>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>

    <Engagement />

    <section className="border-t border-ink-line py-20 md:py-28">
      <Container className="grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionTitle>How a project starts</SectionTitle>
        </Reveal>
        <Reveal d={120} className="lg:col-span-7">
          <ol className="grid gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line sm:grid-cols-3">
            {[
              { t: "Conversation", b: "Tell us what you're building on WhatsApp or by email." },
              { t: "Scope", b: "We agree on what ships first, the stack and how we'll work." },
              { t: "Build", b: "Iterative delivery with regular, visible progress." },
            ].map((step) => (
              <li key={step.t} className="bg-ink p-7">
                <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-fg">{step.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">{step.b}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>

    <Close title="Not sure which service fits? Ask us." />
  </main>
  );
};

export default Services;
