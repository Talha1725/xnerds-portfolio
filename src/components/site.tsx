import { type CSSProperties, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/utils/type";
import { Link } from "react-router-dom";
import { caseStudyPath, projects } from "@/utils/data";
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
  sizes = "(min-width: 768px) 50vw, 100vw",
}: {
  project: Project;
  className?: string;
  /** true: the page's key image (eager, high fetch priority). "eager": above the fold but not the key image. */
  priority?: boolean | "eager";
  compact?: boolean;
  /** Make the screenshot itself a link to the live product, with a frosted "visit" label on hover. */
  link?: boolean;
  /** How wide the frame renders, so the browser picks the smallest screenshot that stays sharp. */
  sizes?: string;
}) {
  const host = hostOf(project.url) || "private deployment";
  const srcSet = project.image ? responsiveSrcSet(project.image) : undefined;
  const body = project.image ? (
    <img
      src={project.image}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={`Screenshot of ${project.title}, ${/^[aeiou]/i.test(project.category) ? "an" : "a"} ${project.category.toLowerCase()} built by xNerds`}
      width={1800}
      height={1013}
      loading={priority ? "eager" : "lazy"}
      decoding={priority === true ? "sync" : "async"}
      {...({ fetchpriority: priority === true ? "high" : "auto" } as Record<string, string>)}
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
        <div className="mx-auto max-w-[75%] truncate rounded-md bg-white/[0.05] px-3 py-0.5 font-mono text-[12px] text-fg-muted">
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

/** Screenshots in /work/ ship at 640w and 1080w next to the full-size original. */
function responsiveSrcSet(src: string) {
  const m = src.match(/^(\/work\/[^/]+)\.webp$/);
  if (!m) return undefined;
  return `${m[1]}-640w.webp 640w, ${m[1]}-1080w.webp 1080w, ${src} 1800w`;
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
  const caseStudy = caseStudyPath(project);
  // Preview deployments have long machine hostnames; name the action instead of printing them.
  const isPreviewHost = /\.(vercel|netlify)\.app$/.test(host);
  return (
    <div>
      <h3
        className={cn(
          "font-semibold tracking-[-0.03em] text-fg",
          large ? "text-[clamp(1.6rem,2.6vw,2.25rem)] leading-[1.05]" : "text-[22px] leading-tight"
        )}
      >
        {caseStudy ? (
          <Link to={caseStudy} className="transition-colors hover:text-signal-soft">
            {project.title}
          </Link>
        ) : (
          project.title
        )}
      </h3>
      {project.description && (
        <p className={cn("mt-3 leading-relaxed text-fg-muted", large ? "max-w-md text-[17px]" : "text-[16px]")}>
          {project.description}
        </p>
      )}
      {project.highlights && project.highlights.length > 0 && (
        <ul className={cn("mt-5 space-y-2", large ? "max-w-md" : "")}>
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-[14px] leading-snug text-fg">
              <span className="mt-[0.6em] h-px w-3 shrink-0 bg-signal-soft" aria-hidden />
              {h}
            </li>
          ))}
        </ul>
      )}
      <p className={cn("text-[13px] text-fg-faint", project.description || project.highlights ? "mt-5" : "mt-2")}>
        {[project.category, ...project.tags].join("  ·  ")}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
        {caseStudy && (
          <Link
            to={caseStudy}
            className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-fg hover:text-signal-soft"
          >
            {project.title} case study
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
          </Link>
        )}
        {host ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-signal-soft hover:text-white"
          >
            {isPreviewHost ? <span>View live app</span> : <span className="font-mono">{host}</span>}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </a>
        ) : (
          <p className="text-[14px] text-fg-faint">Private client deployment</p>
        )}
      </div>
    </div>
  );
}

/* ---------- engagement ---------- */

export const models = [
  {
    title: "We build it",
    body: "Hand us the product. We take it from scope to launch as your engineering team, covering web, mobile, AI and the cloud it runs on.",
    points: ["Web applications and APIs", "iOS and Android apps", "AI and data features", "Cloud, CI/CD and infrastructure"],
  },
  {
    title: "We join your team",
    body: "Add engineers and AI specialists to the team you already have, without the hiring overhead.",
    points: [
      "Engineers start 1–2 days after requirements are agreed",
      "One-month minimum engagement",
      "Shift coverage around the clock",
      "NDA signed, and you own the code",
    ],
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
              <h3 className="text-[clamp(1.5rem,2.4vw,1.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-fg">{m.title}</h3>
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
  const tradingCount = projects.filter((p) => p.sector === "Trading & fintech" || p.sector === "Prop firms").length;
  return (
    <section className="border-t border-ink-line py-28 md:py-40">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal>
          <p className="max-w-[22ch] text-[clamp(1.9rem,4.4vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.035em] text-fg-faint sm:max-w-[28ch]">
            <span className="text-fg">70+ projects</span> for <span className="text-fg">50+ clients</span>, including{" "}
            <span className="text-fg">{tradingCount} trading, prop firm and brokerage systems</span>, built by engineers
            with <span className="text-fg">7+ years</span> of experience.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- process: answers a remote vendor's risks before the ask ---------- */

const steps = [
  {
    title: "Tell us the problem or the idea",
    body: "Something broken in your product, or something new to build. Message us on WhatsApp or by email; we reply within 6 hours.",
  },
  {
    title: "Proposal or a call",
    body: "We send a written proposal, or get on a call to work through it together, whichever suits you.",
  },
  {
    title: "Scope agreed, work starts",
    body: "Once the scope is agreed, work starts right away. Added engineers join within 1–2 days of agreeing the requirements.",
  },
];

const assurances = [
  { label: "Reply", value: "Within 6 hours" },
  { label: "Hours", value: "Around the clock, in shifts" },
  { label: "You talk to", value: "A project manager or the engineers" },
  { label: "Paperwork", value: "NDAs signed; you own the code" },
];

export function Process() {
  return (
    <section className="border-t border-ink-line py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionTitle className="max-w-2xl">What happens after you message</SectionTitle>
        </Reveal>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="bg-ink p-8 md:p-10">
              <Reveal d={i * 100}>
                <span className="font-mono text-[13px] text-signal-soft">{i + 1}</span>
                <h3 className="mt-3 text-[22px] font-semibold leading-tight tracking-[-0.02em] text-fg">{step.title}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-fg-muted">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal>
          <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {assurances.map((a) => (
              <div key={a.label}>
                <dt className="text-[13px] text-fg-faint">{a.label}</dt>
                <dd className="mt-1 text-[16px] text-fg">{a.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
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
          <h2 className="mx-auto max-w-4xl text-[clamp(2.6rem,4.9vw,4.3rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-fg">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-fg-muted">
            {body}
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <PrimaryAction className="justify-center" />
            <a
              href={EMAIL_URL}
              className="inline-flex h-12 items-center justify-center rounded-full border border-ink-strong px-6 text-[15px] font-medium text-fg transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.04]"
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
export function PageHeader({
  title,
  lead,
  before,
  children,
}: {
  title: ReactNode;
  lead?: ReactNode;
  /** Small line above the title, such as a breadcrumb. */
  before?: ReactNode;
  children?: ReactNode;
}) {
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
        {before && (
          <div className="load-in mb-6" style={delay(0)}>
            {before}
          </div>
        )}
        <h1
          className="load-rise max-w-4xl text-[clamp(2.6rem,5.4vw,4.3rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-fg"
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
