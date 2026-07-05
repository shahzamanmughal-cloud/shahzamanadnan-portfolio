import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { technologies } from '@/data/misc';

export function Technologies() {
  return (
    <section id="technologies" className="section-pad">
      <div className="container-page">
        <SectionHeading
          index="10"
          eyebrow="Technologies"
          title="Tools of the trade."
          description="The languages, frameworks, and platforms I reach for most."
        />

        <div className="flex flex-wrap gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              whileHover={{ y: -4, borderColor: 'rgba(255,59,78,0.6)' }}
              className="rounded-xl border border-ink-700 bg-ink-800/40 px-5 py-3 text-sm text-ink-200 transition-colors"
            >
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
