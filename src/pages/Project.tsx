import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { caseStudies, caseStudyPath, projectSlug } from "@/utils/data";
import { caseStudyDetails } from "@/utils/case-studies";
import type { Sector } from "@/utils/type";
import { hostOf } from "@/lib/contact";
import { BrowserFrame, Close, Container, PageHeader, PrimaryAction, Reveal, SecondaryAction, SectionTitle } from "@/components/site";
import NotFound from "./NotFound";

/** The service on /services that each sector's work falls under; ids match the anchors there. */
const sectorService: Record<Sector, { name: string; id: string }> = {
  "Trading & fintech": { name: "Trading systems & automation", id: "trading-systems-and-automation" },
  "Prop firms": { name: "Prop firm & brokerage platforms", id: "trading-systems-and-automation" },
  "AI products": { name: "AI & data", id: "ai-and-data" },
  "Business platforms": { name: "Custom software", id: "custom-software" },
};

const h2 = "text-[clamp(1.6rem,2.6vw,2.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-fg";

function FeatureList({ title, items }: { title: string; items: string[] }) {
  return (
    <>
      <h2 className={h2}>{title}</h2>
      <ul className="mt-6 space-y-3">
        {items.map((h) => (
          <li key={h} className="flex gap-3 text-[17px] leading-snug text-fg">
            <span className="mt-[0.65em] h-px w-4 shrink-0 bg-signal-soft" aria-hidden />
            {h}
          </li>
        ))}
      </ul>
    </>
  );
}

const Project = () => {
  const { slug = "" } = useParams();
  const project = caseStudies.find((p) => projectSlug(p.title) === slug);
  if (!project) return <NotFound />;
  return <CaseStudy key={slug} slug={slug} />;
};

function CaseStudy({ slug }: { slug: string }) {
  const p = caseStudies.find((x) => projectSlug(x.title) === slug)!;
  usePageMeta(caseStudyPath(p)!);
  const host = hostOf(p.url);
  const service = p.sector ? sectorService[p.sector] : undefined;
  const related = caseStudies.filter((x) => x !== p && x.sector === p.sector).slice(0, 4);
  const detail = caseStudyDetails[p.title];
  const features = detail?.features ?? p.highlights ?? [];

  return (
    <main>
      <PageHeader
        title={p.title}
        lead={p.description}
        before={
          <nav aria-label="Breadcrumb" className="text-[14px] text-fg-faint">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/portfolio" className="hover:text-fg">
                  Portfolio
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-fg-muted">
                {p.title}
              </li>
            </ol>
          </nav>
        }
      >
        <div className="flex flex-wrap items-center gap-3">
          {host && (
            <SecondaryAction href={p.url} external>
              Visit <span className="font-mono text-fg-muted">{host}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </SecondaryAction>
          )}
          <PrimaryAction>Build something similar</PrimaryAction>
        </div>
      </PageHeader>

      <section className="border-t border-ink-line pb-24 pt-12 md:pb-32 md:pt-16">
        <Container>
          {/* Without a screenshot the frame would only repeat the title, so private builds go straight to the write-up. */}
          {p.image && <BrowserFrame project={p} priority link={!!host} sizes="(min-width: 1240px) 1176px, 100vw" />}

          <div className={`grid gap-14 lg:grid-cols-12 lg:gap-12 ${p.image ? "mt-16 md:mt-20" : ""}`}>
            <div className="lg:col-span-7">
              {detail && (
                <>
                  <h2 className={h2}>Overview</h2>
                  <div className="mt-6 space-y-5">
                    {detail.overview.map((para) => (
                      <p key={para} className="max-w-[62ch] text-[17px] leading-relaxed text-fg-muted">
                        {para}
                      </p>
                    ))}
                  </div>
                </>
              )}
              {!detail && features.length > 0 && <FeatureList title="What we built" items={features} />}
              {service && (
                <p className={`${detail || features.length ? "mt-10" : ""} max-w-[62ch] text-[17px] leading-relaxed text-fg-muted`}>
                  {p.title} is part of our{" "}
                  <Link to={`/services#${service.id}`} className="text-fg underline decoration-white/20 hover:decoration-white/60">
                    {service.name.toLowerCase()}
                  </Link>{" "}
                  work. See the{" "}
                  <Link to="/portfolio" className="text-fg underline decoration-white/20 hover:decoration-white/60">
                    full software development portfolio
                  </Link>{" "}
                  for more products we have shipped.
                </p>
              )}
            </div>

            <dl className="grid content-start gap-x-10 gap-y-7 sm:grid-cols-2 lg:col-span-5">
              <div>
                <dt className="text-[13px] text-fg-faint">Product</dt>
                <dd className="mt-1 text-[16px] text-fg">{p.category}</dd>
              </div>
              {p.sector && (
                <div>
                  <dt className="text-[13px] text-fg-faint">Sector</dt>
                  <dd className="mt-1 text-[16px] text-fg">{p.sector}</dd>
                </div>
              )}
              {!detail && p.tags.length > 0 && (
                <div className="sm:col-span-2">
                  <dt className="text-[13px] text-fg-faint">Technology</dt>
                  <dd className="mt-1 text-[16px] leading-relaxed text-fg">{p.tags.join("  ·  ")}</dd>
                </div>
              )}
              <div className="sm:col-span-2">
                <dt className="text-[13px] text-fg-faint">Status</dt>
                <dd className="mt-1 text-[16px] text-fg">
                  {host ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 hover:text-signal-soft"
                    >
                      Live at <span className="font-mono">{host}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  ) : (
                    "Private client deployment"
                  )}
                </dd>
              </div>
            </dl>
          </div>

          {detail && (
            <div className="mt-20 grid gap-14 border-t border-ink-line pt-16 md:mt-24 md:pt-20 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <FeatureList title="What we built" items={features} />
              </div>
              <div className="lg:col-span-5">
                <h2 className={h2}>Technology</h2>
                <dl className="mt-6 space-y-6">
                  {detail.stack.map((row) => (
                    <div key={row.label}>
                      <dt className="text-[13px] text-fg-faint">{row.label}</dt>
                      <dd className="mt-1 text-[16px] leading-relaxed text-fg">{row.items}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          )}
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-ink-line py-24 md:py-32">
          <Container>
            <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionTitle>Related projects</SectionTitle>
              <Link
                to="/portfolio"
                className="group inline-flex shrink-0 items-center gap-2 text-[15px] font-medium text-fg-muted hover:text-fg"
              >
                See full portfolio
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
            </Reveal>
            <ul className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-2">
              {related.map((r, i) => (
                <li key={r.title}>
                  <Reveal d={(i % 2) * 100}>
                    <Link to={caseStudyPath(r)!} className="group block">
                      <BrowserFrame project={r} />
                      <h3 className="mt-6 text-[22px] font-semibold leading-tight tracking-[-0.03em] text-fg group-hover:text-signal-soft">
                        {r.title}
                      </h3>
                      <p className="mt-2 text-[15px] text-fg-muted">{r.category}</p>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <Close title={`Building something like ${p.title}? Let's talk.`} />
    </main>
  );
}

export default Project;
