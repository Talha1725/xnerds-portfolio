import { usePageMeta } from "@/hooks/use-page-meta";
import { useSearchParams } from "react-router-dom";
import { useHydrated } from "@/hooks/use-hydrated";
import { projects } from "@/utils/data";
import type { Sector } from "@/utils/type";
import { cn } from "@/lib/utils";
import { BrowserFrame, Close, Container, PageHeader, ProjectMeta, Record, Reveal } from "@/components/site";

const sectors: Sector[] = ["Trading & fintech", "Prop firms", "AI products", "Business platforms"];

const slug = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-");

function FilterBar({ active, onChange }: { active: Sector | null; onChange: (s: Sector | null) => void }) {
  const options: { label: string; value: Sector | null; count: number }[] = [
    { label: "All", value: null, count: projects.length },
    ...sectors.map((s) => ({ label: s, value: s, count: projects.filter((p) => p.sector === s).length })),
  ];
  return (
    <div role="group" aria-label="Filter projects by sector" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0">
      {options.map((o) => {
        const on = o.value === active;
        return (
          <button
            key={o.label}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(o.value)}
            className={cn(
              "inline-flex h-10 shrink-0 items-center gap-2 rounded-full border px-4 text-[14px] font-medium transition-colors duration-200",
              on
                ? "border-fg bg-fg text-ink"
                : "border-ink-strong text-fg-muted hover:border-white/30 hover:text-fg"
            )}
          >
            {o.label}
            <span className={cn("font-mono text-[13px]", on ? "text-ink/60" : "text-fg-faint")}>{o.count}</span>
          </button>
        );
      })}
    </div>
  );
}

const Portfolio = () => {
  usePageMeta("/portfolio");
  const [params, setParams] = useSearchParams();
  const hydrated = useHydrated();
  // The prerendered page is the unfiltered list; apply ?sector= only once React has taken over.
  const active = hydrated ? sectors.find((s) => slug(s) === params.get("sector")) ?? null : null;

  const setActive = (s: Sector | null) => {
    const next = new URLSearchParams(params);
    if (s) next.set("sector", slug(s));
    else next.delete("sector");
    setParams(next, { replace: true });
  };

  const featured = active ? [] : projects.filter((p) => p.featured);
  const grid = active ? projects.filter((p) => p.sector === active) : projects.filter((p) => !p.featured);

  return (
    <main>
      <PageHeader
        title="Products we built, live in production."
        lead={`${projects.length} projects across trading, prop firms, AI and business software, for startups, scaleups and enterprise clients. Most are live; a few run privately for the clients who own them.`}
      />

      <section className="border-t border-ink-line pb-24 pt-10 md:pb-32 md:pt-12">
        <Container>
          <div className="sticky top-16 z-20 -mx-5 border-b border-ink-line bg-ink/85 px-5 py-4 backdrop-blur-xl md:-mx-8 md:px-8">
            <FilterBar active={active} onChange={setActive} />
          </div>

          {featured.length > 0 && <h2 className="sr-only">Featured projects</h2>}
          {active && <h2 className="sr-only">{active} projects</h2>}
          {featured.length > 0 && (
            <ul className="mt-16 space-y-24 md:mt-20 md:space-y-32">
              {featured.map((p, i) => (
                <li key={p.title} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
                  <Reveal clip className={cn("lg:col-span-8", i % 2 === 1 && "lg:order-2")}>
                    <BrowserFrame project={p} priority={i === 0} link sizes="(min-width: 1024px) 800px, 100vw" />
                  </Reveal>
                  <Reveal d={120} className={cn("lg:col-span-4", i % 2 === 1 && "lg:order-1")}>
                    <ProjectMeta project={p} large />
                  </Reveal>
                </li>
              ))}
            </ul>
          )}

          {featured.length > 0 && (
            <h2 className="mt-28 text-[clamp(1.6rem,2.6vw,2.25rem)] font-semibold tracking-[-0.03em] text-fg md:mt-36">
              More projects
            </h2>
          )}

          <ul
            key={active ?? "all"}
            className={cn("grid gap-x-10 gap-y-16 md:grid-cols-2", featured.length > 0 ? "mt-12" : "mt-14")}
          >
            {grid.map((p, i) => (
              <li key={p.title}>
                <Reveal d={(i % 2) * 100}>
                  <BrowserFrame project={p} link />
                  <div className="mt-7">
                    <ProjectMeta project={p} />
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Record />
      <Close title="Want your product on this page? Let's talk." />
    </main>
  );
};

export default Portfolio;
