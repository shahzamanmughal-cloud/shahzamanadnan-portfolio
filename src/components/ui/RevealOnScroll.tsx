import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/**
 * Wrap any element to make it fade + slide up the first time it scrolls
 * into view. This is the single scroll-reveal primitive used everywhere
 * so every section animates consistently.
 */
export function RevealOnScroll({
  children,
  delay = 0,
  y = 24,
  className,
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
