import { projects } from "@/utils/data";
import { cn } from "@/lib/utils";
import { BrowserFrame, Close, Container, PageHeader, ProjectMeta, Record, Reveal } from "@/components/site";

const Portfolio = () => (
  <main>
    <PageHeader
      title="Products we built, live in production."
      lead="We build software for specific problems across industries: trading platforms, AI products, analytics, automation and retail systems, for startups, scaleups and enterprise clients."
    />

    <section className="border-t border-ink-line py-20 md:py-28">
      <Container>
        <ul className="space-y-24 md:space-y-32">
          {projects.map((p, i) => (
            <li key={p.title} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <Reveal clip className={cn("lg:col-span-8", i % 2 === 1 && "lg:order-2")}>
                <BrowserFrame project={p} priority={i === 0} />
              </Reveal>
              <Reveal d={120} className={cn("lg:col-span-4", i % 2 === 1 && "lg:order-1")}>
                <ProjectMeta project={p} large />
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

export default Portfolio;
