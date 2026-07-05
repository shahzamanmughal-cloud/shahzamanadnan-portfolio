import { MouseEvent, ReactNode, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * A premium glass card that tilts subtly toward the cursor and shows a
 * soft red glow that follows the pointer. Used for skill, project, and
 * certification cards throughout the site.
 */
export function TiltCard({ children, className = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setStyle({
      rotateX: (0.5 - y) * 10,
      rotateY: (x - 0.5) * 10,
      glowX: x * 100,
      glowY: y * 100,
    });
  }

  function handleMouseLeave() {
    setStyle({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: style.rotateX, rotateY: style.rotateY }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      style={{
        transformStyle: 'preserve-3d',
        background: `radial-gradient(circle at ${style.glowX}% ${style.glowY}%, rgba(255,59,78,0.12), transparent 60%), rgba(23,23,26,0.7)`,
      }}
      className={`group relative overflow-hidden rounded-2xl border border-ink-700/80 p-6 shadow-card backdrop-blur-sm transition-colors duration-300 hover:border-scalpel/50 ${className}`}
    >
      {children}
    </motion.div>
  );
}
