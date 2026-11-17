import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/utils/data";
import type { Project } from "@/utils/type";
import { EMAIL, EMAIL_URL, WHATSAPP_URL, hostOf } from "@/lib/contact";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const byTitle = (t: string) => projects.find((p) => p.title === t)!;

/* ---------- shared pieces ---------- */

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

function Reveal({
  children,
  className,
  clip = false,
  d = 0,
}: {
  children: ReactNode;
  className?: string;
  clip?: boolean;
  d?: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={cn("reveal", clip && "reveal-clip", className)} style={delay(d)}>
      {children}
    </div>
  );
}

function BrowserFrame({
  project,
  className,
  priority = false,
  compact = false,
}: {
  project: Project;
  className?: string;
  priority?: boolean;
  compact?: boolean;
}) {
  const host = hostOf(project.url) || "private deployment";
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-ink-strong bg-ink-raised shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_40px_80px_-30px_rgba(0,0,0,0.85),0_12px_24px_-12px_rgba(0,0,0,0.6)]",
        className
      )}
    >
      <div className="flex h-8 items-center gap-3 border-b border-ink-line px-3">
        <div className={cn("flex gap-1.5", compact && "hidden xl:flex")} aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="mx-auto max-w-[75%] truncate rounded-md bg-white/[0.05] px-3 py-0.5 font-mono text-[11px] text-fg-faint">
          {host}
        </div>
        <span className={cn("w-[42px]", compact && "hidden xl:block")} aria-hidden />
      </div>
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        width={1800}
        height={1013}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className="block aspect-[16/9] w-full object-cover object-top"
      />
    </div>
  );
}

function PrimaryAction({ className, children = "Message us on WhatsApp" }: { className?: string; children?: ReactNode }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex h-12 items-center gap-2 rounded-full bg-signal pl-6 pr-5 text-[15px] font-medium text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)] transition-[background-color,box-shadow] duration-300 hover:bg-signal-hover hover:shadow-[0_12px_32px_-8px_rgba(37,99,235,0.75)]",
        className
      )}
    >
      {children}
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden
      />
    </a>
  );
}

/* ---------- hero ---------- */

const mosaic = [
  { project: byTitle("Bitlenz"), pos: "left-0 top-[4%] w-[60%]", d: 380 },
  { project: byTitle("FIGMENT"), pos: "right-0 top-0 w-[56%]", d: 480 },
  { project: byTitle("ACTFlow"), pos: "left-[16%] top-[40%] w-[70%]", d: 600 },
];

function HeroMosaic() {
  const [active, setActive] = useState(2);

  return (
    <div
      className="relative mx-auto aspect-[1/0.78] w-full max-w-[640px] lg:max-w-none"
      onMouseLeave={() => setActive(2)}
    >
      {mosaic.map(({ project, pos, d }, i) => {
        const isActive = active === i;
        return (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title}, live at ${hostOf(project.url)}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            className={cn("frame-in absolute block focus-visible:outline-offset-4", pos)}
            style={{ ...delay(d), zIndex: isActive ? 30 : 10 + i }}
          >
            <div
              className={cn(
                "transition-[transform,opacity,filter] duration-700 ease-out-expo",
                isActive ? "-translate-y-2 scale-[1.015] opacity-100" : "lg:opacity-60 lg:saturate-50"
              )}
            >
              <BrowserFrame project={project} priority compact />
              <div
                className={cn(
                  "absolute -bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-ink-strong bg-ink/90 px-3 py-1.5 text-[12px] backdrop-blur transition-[opacity,transform] duration-500 ease-out-expo",
                  isActive ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                )}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-signal-soft" aria-hidden />
                <span className="font-medium text-fg">{project.title}</span>
                <span className="font-mono text-fg-muted">{hostOf(project.url)}</span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden lg:min-h-[min(100svh,960px)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 72% -8%, rgba(61,126,242,0.20) 0%, rgba(61,126,242,0.06) 45%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1240px] flex-1 items-center gap-14 px-5 pb-16 pt-32 md:px-8 lg:grid-cols-12 lg:gap-10 lg:pb-12 lg:pt-24">
        <div className="lg:col-span-7">
          <h1
            className="load-in text-[clamp(2.6rem,4.9vw,4.3rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-fg [text-wrap:wrap]"
            style={delay(0)}
          >
            <span className="lg:whitespace-nowrap">Product engineering</span>{" "}
            <br className="hidden lg:block" />
            <span className="lg:whitespace-nowrap">for ambitious founders.</span>
          </h1>
          <p
            className="load-in mt-7 max-w-[34rem] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-fg-muted"
            style={delay(120)}
          >
            xNerds is a senior engineering team in Lahore. We design, build and scale web, mobile and AI
            products, and we have shipped <span className="text-fg">70+ projects</span> since 2023.
          </p>
          <div className="load-in mt-10 flex flex-wrap items-center gap-3" style={delay(220)}>
            <PrimaryAction />
            <a
              href="#work"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-ink-strong px-6 text-[15px] font-medium text-fg transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.04]"
            >
              See our work
            </a>
          </div>
          <p className="load-in mt-6 text-[14px] text-fg-faint" style={delay(300)}>
            Prefer email?{" "}
            <a href={EMAIL_URL} className="text-fg-muted underline decoration-white/20 hover:text-fg hover:decoration-white/60">
              {EMAIL}
            </a>
          </p>
        </div>

        <div className="lg:col-span-5">
          <HeroMosaic />
        </div>
      </div>

      <div className="relative border-y border-ink-line">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:gap-10 md:px-8">
          <p className="shrink-0 text-[13px] text-fg-faint">Shipped and running</p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {projects.map((p) => (
              <li key={p.title} className="text-[15px] font-medium tracking-[-0.01em] text-fg-muted">
                {p.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- work ---------- */

function ProjectMeta({ project, large = false }: { project: Project; large?: boolean }) {
  const host = hostOf(project.url);
  return (
    <div>
      <h3
        className={cn(
          "font-semibold tracking-[-0.03em] text-fg",
          large ? "text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05]" : "text-[22px] leading-tight"
        )}
      >
        {project.title}
      </h3>
      <p className={cn("mt-3 leading-relaxed text-fg-muted", large ? "max-w-md text-[17px]" : "text-[15px]")}>
        {project.description}
      </p>
      <p className="mt-4 text-[13px] text-fg-faint">{[project.category, ...project.tags].join("  ·  ")}</p>
      {host ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium text-signal-soft hover:text-white"
        >
          <span className="font-mono">{host}</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </a>
      ) : (
        <p className="mt-5 text-[14px] text-fg-faint">Private client deployment</p>
      )}
    </div>
  );
}

function Work() {
  const featured = [byTitle("ACTFlow"), byTitle("FIGMENT")];
  const rest = projects.filter((p) => !featured.includes(p));

  return (
    <section id="work" className="scroll-mt-20 py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-fg">
            Products we built that are live in production today.
          </h2>
          <Link
            to="/portfolio"
            className="group inline-flex shrink-0 items-center gap-2 text-[15px] font-medium text-fg-muted hover:text-fg"
          >
            All work
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
        </Reveal>

        <div className="mt-16 space-y-24 md:mt-20 md:space-y-32">
          {featured.map((p, i) => (
            <div key={p.title} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <Reveal clip className={cn("lg:col-span-8", i % 2 === 1 && "lg:order-2")}>
                <BrowserFrame project={p} />
              </Reveal>
              <Reveal d={120} className={cn("lg:col-span-4", i % 2 === 1 && "lg:order-1")}>
                <ProjectMeta project={p} large />
              </Reveal>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-x-10 gap-y-20 md:mt-32 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.title} d={(i % 2) * 120}>
              <BrowserFrame project={p} />
              <div className="mt-8">
                <ProjectMeta project={p} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- services ---------- */

const services = [
  { title: "Custom software", body: "Web applications, APIs, and integrations with the systems you already run.", line: "Web applications · API development · System integration" },
  { title: "Mobile apps", body: "iOS and Android apps, built native or cross-platform.", line: "iOS · Android · React Native · Flutter" },
  { title: "Enterprise systems", body: "ERP, CRM and POS systems, including FBR-compliant point of sale for retail in Pakistan.", line: "ERP · CRM · POS" },
  { title: "Cloud & DevOps", body: "Infrastructure, deployment pipelines and environments defined as code.", line: "AWS · Azure · CI/CD · Infrastructure as code" },
  { title: "AI & data", body: "Machine learning, analytics and dashboards built into your product.", line: "Machine learning · Data visualization · Predictive analytics" },
  { title: "Staff augmentation", body: "Vetted engineers and AI specialists who join your team and work inside your process.", line: "Vetted engineers · On-demand scaling · Team integration" },
];

function Services() {
  return (
    <section className="border-t border-ink-line py-28 md:py-36">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-fg">
                What we build
              </h2>
              <p className="mt-5 max-w-sm text-[17px] leading-relaxed text-fg-muted">
                One team across the stack, from the first prototype to the infrastructure it runs on.
              </p>
              <Link
                to="/services"
                className="group mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-fg-muted hover:text-fg"
              >
                Service details
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>

        <ul className="border-t border-ink-line lg:col-span-8">
          {services.map((s, i) => (
            <li key={s.title} className="border-b border-ink-line">
              <Reveal d={i * 40} className="grid gap-4 py-9 md:grid-cols-[1fr_1.1fr] md:gap-10">
                <h3 className="text-[22px] font-semibold leading-tight tracking-[-0.02em] text-fg">{s.title}</h3>
                <div>
                  <p className="text-[15px] leading-relaxed text-fg-muted">{s.body}</p>
                  <p className="mt-3 text-[13px] text-fg-faint">{s.line}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- engagement ---------- */

const models = [
  {
    title: "We build it",
    body: "Hand us the product. We take it from scope to launch as your engineering team, covering web, mobile, AI and the cloud it runs on.",
    points: ["Web applications and APIs", "iOS and Android apps", "AI and data features", "Cloud, CI/CD and infrastructure"],
  },
  {
    title: "We join your team",
    body: "Add vetted engineers and AI specialists to the team you already have, without the hiring overhead.",
    points: ["Vetted tech talent", "On-demand scaling", "Seamless team integration"],
  },
];

function Engagement() {
  return (
    <section className="border-t border-ink-line py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-fg">
            Two ways to work with us
          </h2>
        </Reveal>
        <div className="mt-14 grid overflow-hidden rounded-2xl border border-ink-line md:grid-cols-2">
          {models.map((m, i) => (
            <Reveal
              key={m.title}
              d={i * 120}
              className={cn(
                "relative bg-ink-raised/60 p-8 md:p-12",
                i === 1 && "border-t border-ink-line md:border-l md:border-t-0"
              )}
            >
              <h3 className="text-[26px] font-semibold tracking-[-0.03em] text-fg">{m.title}</h3>
              <p className="mt-4 max-w-md text-[16px] leading-relaxed text-fg-muted">{m.body}</p>
              <ul className="mt-8 space-y-3">
                {m.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-3 text-[15px] text-fg">
                    <span className="h-px w-4 bg-signal-soft" aria-hidden />
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- record ---------- */

function Record() {
  return (
    <section className="border-t border-ink-line py-28 md:py-40">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal>
          <p className="max-w-[22ch] text-[clamp(1.9rem,4.4vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.035em] text-fg-faint sm:max-w-[26ch]">
            Since <span className="text-fg">2023</span>, we have shipped{" "}
            <span className="text-fg">70+ projects</span> for <span className="text-fg">50+ clients</span>, led by
            engineers with <span className="text-fg">7+ years</span> of experience.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- close ---------- */

function useLahoreTime() {
  const fmt = () =>
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Karachi",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = window.setInterval(() => setTime(fmt()), 30_000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

function Close() {
  const time = useLahoreTime();
  return (
    <section className="relative overflow-hidden border-t border-ink-line">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(55% 80% at 50% 120%, rgba(61,126,242,0.22), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-5 py-28 text-center md:px-8 md:py-40">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.04em] text-fg">
            Have a product to build? Tell us about it.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-fg-muted">
            Message us on WhatsApp or send an email with what you're building, and we'll take it from there.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <PrimaryAction />
            <a
              href={EMAIL_URL}
              className="inline-flex h-12 items-center rounded-full border border-ink-strong px-6 text-[15px] font-medium text-fg transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.04]"
            >
              {EMAIL}
            </a>
          </div>
          <p className="mt-8 text-[13px] text-fg-faint">
            Lahore, Pakistan · <span className="font-mono">{time}</span> PKT
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const Index = () => (
  <main>
    <Hero />
    <Work />
    <Services />
    <Engagement />
    <Record />
    <Close />
  </main>
);

export default Index;
