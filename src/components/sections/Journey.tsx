import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { journey } from '@/data/misc';

export function Journey() {
  return (
    <section id="journey" className="section-pad">
      <div className="container-page">
        <SectionHeading
          index="08"
          eyebrow="My Journey"
          title="Student to engineer."
          description="The path from learning fundamentals to building world-class products."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((point, i) => (
            <RevealOnScroll key={point.id} delay={i * 0.1}>
              <div className="relative rounded-2xl border border-ink-700 bg-ink-800/40 p-6">
                <span className="font-mono text-xs uppercase tracking-widest text-scalpel-bright">
                  {point.label}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm text-ink-300">{point.description}</p>
                {i < journey.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-ink-600 lg:block" />
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
