import { useEffect, useRef, useState } from 'react';

interface Options {
  end: number;
  duration?: number;
  start?: number;
  isActive: boolean;
}

/** Animates a number from `start` to `end` once `isActive` becomes true. */
export function useCountUp({ end, duration = 1800, start = 0, isActive }: Options) {
  const [value, setValue] = useState(start);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isActive || hasRun.current) return;
    hasRun.current = true;

    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isActive, end, duration, start]);

  return value;
}
