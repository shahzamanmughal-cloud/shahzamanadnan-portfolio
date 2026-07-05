import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { education } from '@/data/education';

export function EducationTimeline() {
  return (
    <section id="education" className="section-pad">
      <div className="container-page">
        <SectionHeading
          index="02"
          eyebrow="Education"
          title="Academic foundation."
          description="Formal training that backs up the hands-on business experience — with room to grow."
        />

        <div className="relative border-l border-ink-700 pl-8 sm:pl-10">
          {education.map((item, i) => (
            <RevealOnScroll key={item.id} delay={i * 0.1} className="relative mb-14 last:mb-0">
              <span
                className={`absolute -left-[2.55rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 sm:-left-[3.05rem] ${
                  item.status === 'in-progress'
                    ? 'border-scalpel-bright bg-scalpel/20'
                    : item.status === 'completed'
                    ? 'border-paper bg-paper/20'
                    : 'border-ink-500 bg-ink-800'
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    item.status === 'upcoming' ? 'bg-ink-500' : 'bg-scalpel-bright'
                  }`}
                />
              </span>

              <div className="font-mono text-xs uppercase tracking-widest text-ink-400">
                {item.period}
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold">{item.degree}</h3>
              <p className="mt-1 text-scalpel-bright">{item.institution}</p>
              <p className="mt-3 max-w-2xl text-ink-300">{item.description}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
