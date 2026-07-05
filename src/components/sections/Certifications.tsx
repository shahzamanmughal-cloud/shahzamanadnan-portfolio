import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { TiltCard } from '@/components/ui/TiltCard';
import { certifications } from '@/data/misc';

export function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="container-page">
        <SectionHeading
          index="06"
          eyebrow="Certifications"
          title="Credentials in progress."
          description="Placeholders ready to be swapped for real certificates as they're earned."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <RevealOnScroll key={cert.id} delay={i * 0.08}>
              <TiltCard className="h-full">
                <div className="mb-4 aspect-[4/3] w-full overflow-hidden rounded-xl border border-ink-700 bg-ink-900">
                  {/* TODO: replace with a real certificate image in /public/images/certificates */}
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-display text-base font-semibold">{cert.title}</h3>
                <p className="mt-1 text-sm text-scalpel-bright">{cert.issuer}</p>
                <p className="mt-1 font-mono text-xs text-ink-400">{cert.date}</p>
              </TiltCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
