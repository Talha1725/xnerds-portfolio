import { usePageMeta } from "@/hooks/use-page-meta";
import { timeline, values, team } from "@/utils/data";
import { Close, Container, PageHeader, Record, Reveal, SectionTitle } from "@/components/site";

const About = () => {
  usePageMeta("/about");
  return (
    <main>
      <PageHeader
        title="A senior engineering team that ships products."
        lead="xNerds Solutions was founded in 2023 to build software and AI products for businesses around the world. The team brings 7+ years of engineering experience to every project."
      />

      {/* Mission */}
      <section className="border-t border-ink-line py-24 md:py-32">
        <Container className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="text-[15px] font-medium text-fg">Our mission</h2>
          </Reveal>
          <Reveal d={100} className="lg:col-span-8">
            <p className="text-[clamp(1.6rem,3.2vw,2.6rem)] font-medium leading-[1.15] tracking-[-0.03em] text-fg">
              To help businesses grow through AI and well-engineered software, while holding every project to the
              highest standard of quality.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Journey */}
      <section className="border-t border-ink-line py-24 md:py-32">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionTitle>How we got here</SectionTitle>
            </div>
          </Reveal>
          <ol className="lg:col-span-8">
            {timeline.map((e, i) => (
              <li key={`${e.year}-${e.title}`} className="border-b border-ink-line first:border-t">
                <Reveal d={i * 50} className="grid gap-3 py-8 sm:grid-cols-[96px_1fr] sm:gap-8">
                  <span className="font-mono text-[14px] text-signal-soft">{e.year}</span>
                  <div>
                    <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-fg">{e.title}</h3>
                    <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-fg-muted">{e.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Values */}
      <section className="border-t border-ink-line py-24 md:py-32">
        <Container>
          <Reveal>
            <SectionTitle>What we hold ourselves to</SectionTitle>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} d={(i % 2) * 100} className="bg-ink p-8 md:p-10">
                <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-fg">{v.title}</h3>
                <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-fg-muted">{v.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="border-t border-ink-line py-24 md:py-32">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionTitle>Who you work with</SectionTitle>
            <p className="mt-5 max-w-sm text-[17px] leading-relaxed text-fg-muted">
              One team that covers the whole stack, so nothing gets lost between vendors.
            </p>
          </Reveal>
          <ul className="lg:col-span-8">
            {team.map((m, i) => (
              <li key={m.name} className="border-b border-ink-line first:border-t">
                <Reveal d={i * 50} className="grid gap-2 py-7 sm:grid-cols-[1fr_1.2fr] sm:gap-8">
                  <div>
                    <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-fg">{m.name}</h3>
                    <p className="mt-1 text-[14px] text-fg-faint">{m.role}</p>
                  </div>
                  <p className="text-[15px] leading-relaxed text-fg-muted">{m.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Record />
      <Close />
    </main>
  );
};

export default About;
