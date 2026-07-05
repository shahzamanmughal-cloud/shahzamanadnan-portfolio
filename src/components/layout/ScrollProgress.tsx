import { motion, useScroll, useSpring } from 'framer-motion';

/** A thin scalpel-red bar across the very top that fills as you scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-gradient-to-r from-scalpel-deep via-scalpel to-scalpel-bright"
    />
  );
}
