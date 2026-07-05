import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { site } from '@/data/site';

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-page">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Two disciplines, one direction."
          description="A quick look at how a software engineering student ended up running international business development for a surgical instruments manufacturer — and why that's exactly the plan."
        />

        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5">
            {site.bio.map((paragraph, i) => (
              <RevealOnScroll key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-ink-200 sm:text-lg">
                  {paragraph}
                </p>
              </RevealOnScroll>
            ))}
          </div>

          <div className="space-y-8">
            <RevealOnScroll>
              <div className="rounded-2xl border border-ink-700 bg-ink-800/50 p-6">
                <div className="eyebrow mb-3">Vision</div>
                <p className="text-ink-100">{site.vision}</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div>
                <div className="eyebrow mb-4">Values</div>
                <div className="flex flex-wrap gap-2">
                  {site.values.map((value) => (
                    <span
                      key={value}
                      className="rounded-full border border-ink-600 px-4 py-2 text-sm text-ink-200"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <div>
                <div className="eyebrow mb-4">Languages</div>
                <div className="flex gap-2">
                  <span className="rounded-full bg-scalpel/15 px-4 py-2 text-sm text-scalpel-bright">
                    English
                  </span>
                  <span className="rounded-full bg-scalpel/15 px-4 py-2 text-sm text-scalpel-bright">
                    Urdu
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
