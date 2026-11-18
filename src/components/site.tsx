import { type CSSProperties, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/utils/type";
import { EMAIL, EMAIL_URL, WHATSAPP_URL, hostOf } from "@/lib/contact";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

/* ---------- shared pieces ---------- */

export const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Reveal({
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

export function BrowserFrame({
  project,
  className,
  priority = false,
  compact = false,
  link = false,
}: {
  project: Project;
  className?: string;
  priority?: boolean;
  compact?: boolean;
  /** Make the screenshot itself a link to the live product, with a frosted "visit" label on hover. */
  link?: boolean;
}) {
  const host = hostOf(project.url) || "private deployment";
  const body = project.image ? (
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      width={1800}
      height={1013}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      className="block aspect-[16/9] w-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover/frame:scale-[1.015]"
    />
  ) : (
    <NameplateBody project={project} />
  );
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
        <div className="mx-auto max-w-[75%] truncate rounded-md bg-white/[0.05] px-3 py-0.5 font-mono text-[12px] text-fg-faint">
          {host}
        </div>
        <span className={cn("w-[42px]", compact && "hidden xl:block")} aria-hidden />
      </div>
      {link && project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title} at ${host}`}
          className="group/frame relative block overflow-hidden focus-visible:outline-offset-[-3px]"
        >
          {body}
          <span
            className="pointer-events-none absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink/35 px-3.5 py-1.5 text-[13px] text-fg opacity-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_24px_-8px_rgba(0,0,0,0.6)] backdrop-blur-xl backdrop-saturate-150 transition-[opacity,transform] duration-500 ease-out-expo [transform:translateY(6px)] group-hover/frame:opacity-100 group-hover/frame:[transform:none] group-focus-visible/frame:opacity-100 group-focus-visible/frame:[transform:none]"
            aria-hidden
          >
            Visit <span className="font-mono text-fg-muted">{host}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </a>
      ) : (
        body
      )}
    </div>
  );
}

/**
 * Stands in for a screenshot when no clean public capture exists (private builds,
 * login-only apps). It sets the product's own name in the frame rather than faking a UI.
 */
function NameplateBody({ project }: { project: Project }) {
  return (
    <div className="relative flex aspect-[16/9] w-full flex-col justify-end overflow-hidden p-[6%]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 90% at 85% 0%, rgba(47,111,207,0.14), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.02), transparent 40%)",
        }}
      />
      <p className="relative text-[13px] text-fg-faint">{project.category}</p>
      <p className="relative mt-1 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1] tracking-[-0.04em] text-fg">
        {project.title}
      </p>
    </div>
  );
}

export function PrimaryAction({ className, children = "Message us on WhatsApp" }: { className?: string; children?: ReactNode }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex h-12 items-center gap-2 rounded-full bg-signal pl-6 pr-5 text-[15px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_24px_-8px_rgba(29,95,192,0.6)] transition-[background-color,box-shadow] duration-300 hover:bg-signal-hover hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_12px_32px_-8px_rgba(29,95,192,0.75)]",
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

export function ProjectMeta({ project, large = false }: { project: Project; large?: boolean }) {
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
      {project.description && (
        <p className={cn("mt-3 leading-relaxed text-fg-muted", large ? "max-w-md text-[17px]" : "text-[15px]")}>
          {project.description}
        </p>
      )}
      <p className={cn("text-[13px] text-fg-faint", project.description ? "mt-4" : "mt-2")}>
        {[project.category, ...project.tags].join("  ·  ")}
      </p>
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

export const services = [
  { title: "Custom software", body: "Web applications, APIs, and integrations with the systems you already run.", line: "Web applications · API development · System integration" },
  { title: "Mobile apps", body: "iOS and Android apps, built native or cross-platform.", line: "iOS · Android · React Native · Expo · Flutter" },
  { title: "Enterprise systems", body: "ERP, CRM and POS systems, including FBR-compliant point of sale for retail in Pakistan.", line: "ERP · CRM · POS" },
  { title: "Cloud & DevOps", body: "AWS infrastructure, Docker deployments, pipelines and environments defined as code.", line: "AWS · Docker · CI/CD · Infrastructure as code" },
  { title: "AI & data", body: "Machine learning, analytics and dashboards built into your product.", line: "Machine learning · Data visualization · Predictive analytics" },
  { title: "Trading systems & automation", body: "MetaTrader EAs, copy trading and risk engines, prop firm and brokerage platforms, and signal services.", line: "MQL5 · MetaTrader 4/5 · TradingView · Exchange APIs" },
  { title: "AI assistants & bots", body: "Chat, voice and Telegram assistants that answer customers, guide sales and deliver signals.", line: "OpenAI · Deepgram · Telegram bots" },
  { title: "Staff augmentation", body: "Vetted engineers and AI specialists who join your team and work inside your process.", line: "Vetted engineers · On-demand scaling · Team integration" },
];

/* ---------- engagement ---------- */

export const models = [
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

export function Engagement() {
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
              <h3 className="text-[clamp(1.5rem,2.4vw,1.75rem)] font-semibold tracking-[-0.03em] text-fg">{m.title}</h3>
              <p className="mt-4 max-w-md text-[17px] leading-relaxed text-fg-muted">{m.body}</p>
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

export function Record() {
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

export function Close({
  title = "Have a product to build? Tell us about it.",
  body = "Message us on WhatsApp or send an email with what you're building, and we'll take it from there.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-ink-line">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(55% 80% at 50% 120%, rgba(47,111,207,0.22), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-5 py-28 text-center md:px-8 md:py-40">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.04em] text-fg">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-fg-muted">
            {body}
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
        </Reveal>
      </div>
    </section>
  );
}


/* ---------- page scaffolding ---------- */

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-5 md:px-8", className)}>{children}</div>;
}

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cn("text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-fg", className)}>
      {children}
    </h2>
  );
}

/** Interior page opening: one display line, one lead paragraph, the same light as the home hero. */
export function PageHeader({ title, lead, children }: { title: ReactNode; lead?: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 70% at 70% -20%, rgba(47,111,207,0.16) 0%, rgba(47,111,207,0.05) 45%, transparent 75%)",
        }}
      />
      <Container className="relative pb-16 pt-36 md:pb-24 md:pt-44">
        <h1
          className="load-in max-w-4xl text-[clamp(2.6rem,5.4vw,4.3rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-fg"
          style={delay(0)}
        >
          {title}
        </h1>
        {lead && (
          <p
            className="load-in mt-7 max-w-2xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-fg-muted"
            style={delay(120)}
          >
            {lead}
          </p>
        )}
        {children && (
          <div className="load-in mt-10" style={delay(220)}>
            {children}
          </div>
        )}
      </Container>
    </section>
  );
}

export function SecondaryAction({
  href,
  children,
  className,
  external = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex h-12 items-center gap-2 rounded-full border border-ink-strong px-6 text-[15px] font-medium text-fg transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.04]",
        className
      )}
    >
      {children}
    </a>
  );
}
