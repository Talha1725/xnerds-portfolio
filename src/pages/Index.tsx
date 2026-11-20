import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudyPath, projects, showcase } from "@/utils/data";
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
  Process,
} from "@/components/site";
import { Expertise } from "@/components/expertise";

const byTitle = (t: string) => projects.find((p) => p.title === t)!;

/* ---------- project marquee ---------- */

const marqueeProjects = [
  "BudSignal",
  "BlueRock Markets",
  "PropFirm Labs",
  "FXEE",
  "NexCore VPS",
  "SmartBite",
  "Bitlenz",
  "URFX",
  "TrainHub",
  "TradeMate",
].map(byTitle);

function MarqueeRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {marqueeProjects.map((p) => (
        <li key={p.title} className="flex items-center">
          {caseStudyPath(p) ? (
            <Link
              to={caseStudyPath(p)!}
              tabIndex={hidden ? -1 : undefined}
              className="inline-flex min-h-[28px] items-center whitespace-nowrap px-7 text-[15px] font-medium tracking-[-0.01em] text-fg-muted transition-colors duration-300 hover:text-fg"
            >
              {p.title}
            </Link>
          ) : p.url ? (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={hidden ? -1 : undefined}
              className="inline-flex min-h-[28px] items-center whitespace-nowrap px-7 text-[15px] font-medium tracking-[-0.01em] text-fg-muted transition-colors duration-300 hover:text-fg"
            >
              {p.title}
            </a>
          ) : (
            <span className="whitespace-nowrap px-7 text-[15px] font-medium tracking-[-0.01em] text-fg-faint">
              {p.title}
            </span>
          )}
          <span className="h-1 w-1 rounded-full bg-fg-faint/60" aria-hidden />
        </li>
      ))}
    </ul>
  );
}

function ProjectMarquee() {
  const [paused, setPaused] = useState(false);
  return (
    <div className="relative border-y border-ink-line">
      <h2 className="sr-only">Projects we have shipped</h2>
      <div
        data-paused={paused}
        className="marquee group mr-14 flex overflow-hidden py-5 md:mr-20"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 8%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 88%, transparent)",
        }}
      >
        <div className="marquee-track flex">
          <MarqueeRow />
          <MarqueeRow hidden />
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={paused ? "Play project list" : "Pause project list"}
        className="marquee-toggle absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/50 text-fg-muted backdrop-blur-xl transition-colors hover:text-fg md:right-6"
      >
        {paused ? <Play className="h-3.5 w-3.5" aria-hidden /> : <Pause className="h-3.5 w-3.5" aria-hidden />}
      </button>
    </div>
  );
}

/* ---------- hero ---------- */

const mosaic = [
  { project: byTitle("NexCore VPS"), pos: "left-0 top-[4%] w-[60%]", d: 380 },
  { project: byTitle("URFX"), pos: "right-0 top-0 w-[56%]", d: 480 },
  { project: byTitle("FXEE"), pos: "left-[16%] top-[40%] w-[70%]", d: 600 },
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
        const host = hostOf(project.url);
        return (
          <div
            key={project.title}
            onMouseEnter={() => setActive(i)}
            className={cn("frame-in absolute", pos)}
            style={{ ...delay(d), zIndex: isActive ? 30 : 10 + i }}
          >
            <div
              className={cn(
                "transition-transform duration-700 ease-out-expo [&_img]:transition-[filter,transform] [&_img]:duration-700",
                isActive ? "-translate-y-2 scale-[1.015]" : "lg:[&_img]:brightness-[.72] lg:[&_img]:saturate-[.8]"
              )}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${host}: ${project.title}, opens live site`}
                onFocus={() => setActive(i)}
                className="block rounded-xl focus-visible:outline-offset-4"
              >
                {/* Only the front frame is the page's key image; the two behind load eagerly at normal priority. */}
                <BrowserFrame
                  project={project}
                  priority={i === 2 ? true : "eager"}
                  compact
                  sizes="(min-width: 1024px) 400px, 72vw"
                />
              </a>
              {/* Decorative caption for the active frame; the link above already names the product. */}
              <div
                aria-hidden
                className={cn(
                  "pointer-events-none absolute -bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-ink-strong bg-ink/90 px-3 py-1.5 text-[13px] backdrop-blur transition-[opacity,transform] duration-500 ease-out-expo",
                  isActive ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                )}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-signal-soft" />
                <span className="font-medium text-fg">{project.title}</span>
                <span className="font-mono text-fg-muted">{host}</span>
              </div>
            </div>
          </div>
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
            "radial-gradient(70% 55% at 72% -8%, rgba(47,111,207,0.20) 0%, rgba(47,111,207,0.06) 45%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1240px] flex-1 items-center gap-14 px-5 pb-16 pt-32 md:px-8 lg:grid-cols-12 lg:gap-10 lg:pb-12 lg:pt-24">
        <div className="lg:col-span-7">
          <h1
            className="load-rise text-[clamp(2.6rem,4.9vw,4.3rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-fg [text-wrap:balance] lg:[text-wrap:wrap]"
            style={delay(0)}
          >
            <span className="lg:whitespace-nowrap">Product engineering</span>{" "}
            <br className="hidden lg:block" />
            <span className="lg:whitespace-nowrap">for ambitious founders.</span>
          </h1>
          <p
            className="load-in mt-7 max-w-[34rem] text-[clamp(1.1rem,1.5vw,1.3rem)] font-medium leading-snug tracking-[-0.01em] text-fg"
            style={delay(100)}
          >
            Deepest in trading and fintech: prop firms, brokerages, trading terminals and MetaTrader EAs.
          </p>
          <p
            className="load-in mt-4 max-w-[34rem] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-fg-muted"
            style={delay(160)}
          >
            xNerds is a software development company: a senior engineering team that designs, builds and scales web, mobile and AI products, with{" "}
            <span className="whitespace-nowrap text-fg">70+ projects</span> shipped since 2023.
          </p>
          <div className="load-in mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center" style={delay(220)}>
            <PrimaryAction className="justify-center" />
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink-strong px-6 text-[15px] font-medium text-fg transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.04]"
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

        {/* The mosaic bleeds past the container on desktop so the shipped products get real room. */}
        <div className="lg:col-span-5 lg:-mr-[14%] xl:-mr-[22%]">
          <HeroMosaic />
        </div>
      </div>

      <ProjectMarquee />
    </section>
  );
}

/* ---------- work ---------- */

function Work() {
  const featured = showcase.slice(0, 2);
  const rest = showcase.slice(2);

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
            See full portfolio
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
        </Reveal>

        <div className="mt-16 space-y-24 md:mt-20 md:space-y-32">
          {featured.map((p, i) => (
            <div key={p.title} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <Reveal clip className={cn("lg:col-span-8", i % 2 === 1 && "lg:order-2")}>
                <BrowserFrame project={p} link sizes="(min-width: 1024px) 800px, 100vw" />
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
              <BrowserFrame project={p} link />
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

const Index = () => {
  usePageMeta("/");
  return (
  <main>
    <Hero />
    <Work />
    <Expertise />
    <Engagement />
    <Record />
    <Process />
    <Close />
  </main>
  );
};

export default Index;
