import { FiCode, FiLayout, FiCpu, FiTrendingUp, FiBriefcase, FiStar } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { TiltCard } from '@/components/ui/TiltCard';
import { services } from '@/data/misc';

const iconMap: Record<string, IconType> = {
  code: FiCode,
  design: FiLayout,
  software: FiCpu,
  consulting: FiTrendingUp,
  freelance: FiBriefcase,
};

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-page">
        <SectionHeading
          index="09"
          eyebrow="Services"
          title="How I can help."
          description="Where engineering skill and business experience turn into something you can hire."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon: IconType = iconMap[service.icon] ?? FiStar;
            return (
              <RevealOnScroll key={service.id} delay={i * 0.08}>
                <TiltCard className="h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-scalpel/15 text-xl text-scalpel-bright">
                    <Icon />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-ink-300">{service.description}</p>
                </TiltCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
