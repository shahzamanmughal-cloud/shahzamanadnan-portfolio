import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { TiltCard } from '@/components/ui/TiltCard';
import { experience } from '@/data/experience';
import { FiCheckCircle } from 'react-icons/fi';

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-page">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Where the business side lives."
          description="Real, ongoing responsibility for international revenue — not a simulation."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {experience.map((item, i) => (
            <RevealOnScroll key={item.id} delay={i * 0.1}>
              <TiltCard className="h-full">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-ink-400">
                    {item.period}
                  </span>
                  {item.status === 'current' && (
                    <span className="rounded-full bg-scalpel/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-scalpel-bright">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold sm:text-2xl">
                  {item.role}
                </h3>
                <p className="mt-1 text-scalpel-bright">{item.company}</p>
                <p className="mt-3 text-sm text-ink-300">{item.summary}</p>

                {item.responsibilities.length > 0 && (
                  <div className="mt-5">
                    <div className="eyebrow mb-3">Responsibilities</div>
                    <ul className="space-y-2">
                      {item.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-ink-200">
                          <FiCheckCircle className="mt-0.5 shrink-0 text-scalpel-bright" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.achievements.length > 0 && (
                  <div className="mt-5">
                    <div className="eyebrow mb-3">Achievements</div>
                    <ul className="space-y-2">
                      {item.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-ink-200">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-scalpel-bright" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </TiltCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
