import { ReactNode } from 'react';

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-ink-600 bg-ink-800/60 px-3 py-1 font-mono text-xs text-ink-200">
      {children}
    </span>
  );
}
