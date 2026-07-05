import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { achievements, stats } from '@/data/misc';

export function Achievements() {
  return (
    <section id="achievements" className="section-pad">
      <div className="container-page">
        <SectionHeading
          index="07"
          eyebrow="Achievements"
          title="Milestones so far."
          description="A running log — updated every time something noteworthy happens."
        />

        <div className="mb-16 grid grid-cols-2 gap-8 rounded-2xl border border-ink-700 bg-ink-800/40 p-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        <div className="relative border-l border-ink-700 pl-8 sm:pl-10">
          {achievements.map((item, i) => (
            <RevealOnScroll key={item.id} delay={i * 0.08} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[2.55rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-scalpel-bright bg-scalpel/20 sm:-left-[3.05rem]">
                <span className="h-2 w-2 rounded-full bg-scalpel-bright" />
              </span>
              <div className="font-mono text-xs uppercase tracking-widest text-ink-400">
                {item.year}
              </div>
              <h3 className="mt-1 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-ink-300">{item.description}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
