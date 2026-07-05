import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * A short "booting up" sequence that plays once per session. It mimics a
 * technical readout — fitting for an engineer who also sells precision
 * instruments — then reveals the site.
 */
export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('hasLoaded')) {
      setDone(true);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 18 + 6;
        if (next >= 100) {
          clearInterval(interval);
          sessionStorage.setItem('hasLoaded', 'true');
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return next;
      });
    }, 140);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink"
        >
          <div className="font-mono text-xs uppercase tracking-[0.4em] text-ink-400">
            Initializing Portfolio
          </div>
          <div className="mt-6 font-display text-2xl text-paper sm:text-3xl">
            Shahzaman Mughal
          </div>
          <div className="mt-8 h-px w-56 overflow-hidden bg-ink-700 sm:w-72">
            <motion.div
              className="h-full bg-gradient-to-r from-scalpel-deep via-scalpel to-scalpel-bright"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="mt-3 font-mono text-xs text-ink-500">
            {Math.min(Math.round(progress), 100)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
