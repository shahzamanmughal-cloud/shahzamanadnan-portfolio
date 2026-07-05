import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="font-display text-6xl font-semibold text-scalpel sm:text-8xl">404</h1>
        <p className="mt-4 max-w-md text-ink-300">
          This page doesn't exist — maybe it was never built, or it moved.
          Let's get you back to solid ground.
        </p>
        <div className="mt-8 flex justify-center">
          <Link to="/">
            <Button icon={<FiArrowLeft />}>Back to Home</Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
