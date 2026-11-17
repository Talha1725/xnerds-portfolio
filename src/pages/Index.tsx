import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/utils/data";
import { EMAIL, EMAIL_URL, hostOf } from "@/lib/contact";
import { cn } from "@/lib/utils";
import {
  BrowserFrame,
  Close,
  Engagement,
  PrimaryAction,
  ProjectMeta,
  Record,
  Reveal,
  delay,
  services,
} from "@/components/site";

const byTitle = (t: string) => projects.find((p) => p.title === t)!;

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
                  "absolute -bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-ink-strong bg-ink/90 px-3 py-1.5 text-[13px] backdrop-blur transition-[opacity,transform] duration-500 ease-out-expo",
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
            xNerds is a senior engineering team. We design, build and scale web, mobile and AI
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
