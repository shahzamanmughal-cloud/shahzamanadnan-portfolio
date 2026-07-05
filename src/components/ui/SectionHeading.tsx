import { motion } from 'framer-motion';

interface SectionHeadingProps {
  index: string; // e.g. "02" — encodes real position in the page's narrative
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

/**
 * Every section opens with the same rhythm: a mono index + eyebrow label,
 * a large display title, and an optional supporting line. Reused across
 * all 15 sections for visual cohesion.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 sm:mb-20 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span className="font-mono text-xs text-ink-400">/{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 text-4xl font-semibold leading-[1.1] sm:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`mt-5 text-ink-300 sm:text-lg ${align === 'center' ? '' : 'max-w-xl'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
