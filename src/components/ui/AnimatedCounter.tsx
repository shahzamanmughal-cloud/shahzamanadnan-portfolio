import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCountUp } from '@/hooks/useCountUp';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function AnimatedCounter({ value, suffix = '', label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const count = useCountUp({ end: value, isActive: isInView });

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-semibold text-paper sm:text-5xl">
        {count}
        <span className="text-scalpel-bright">{suffix}</span>
      </div>
      <div className="mt-2 font-mono text-xs uppercase tracking-widest text-ink-400">
        {label}
      </div>
    </div>
  );
}
