import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * A soft, trailing red-glow cursor that replaces the system cursor on
 * desktop pointer devices. Falls back silently on touch devices.
 */
export function CustomCursor() {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsFinePointer(mq.matches);

    if (!mq.matches) return;

    document.body.classList.add('custom-cursor-active');

    const handleMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setIsHoveringLink(!!target.closest('a, button, input, textarea'));
    };
    const handleDown = () => setIsPointerDown(true);
    const handleUp = () => setIsPointerDown(false);

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerdown', handleDown);
    window.addEventListener('pointerup', handleUp);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerdown', handleDown);
      window.removeEventListener('pointerup', handleUp);
    };
  }, [x, y]);

  if (!isFinePointer) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
    >
      <motion.div
        animate={{
          scale: isPointerDown ? 0.7 : isHoveringLink ? 1.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="h-4 w-4 rounded-full bg-paper"
      />
    </motion.div>
  );
}
