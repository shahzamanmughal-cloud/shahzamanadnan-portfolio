import { FiMessageSquare } from 'react-icons/fi';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { TiltCard } from '@/components/ui/TiltCard';
import { testimonials } from '@/data/misc';

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="container-page">
        <SectionHeading
          index="12"
          eyebrow="Testimonials"
          title="What people say."
          description="Placeholder quotes — swap these for real feedback from clients or collaborators."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={t.id} delay={i * 0.08}>
              <TiltCard className="h-full">
                <FiMessageSquare className="mb-4 text-2xl text-scalpel-bright" />
                <p className="text-sm leading-relaxed text-ink-200">"{t.quote}"</p>
                <div className="mt-6 border-t border-ink-700 pt-4">
                  <p className="font-display text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-ink-400">{t.role}</p>
                </div>
              </TiltCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
