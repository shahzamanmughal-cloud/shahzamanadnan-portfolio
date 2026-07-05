import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import { site } from '@/data/site';

/** Simple typewriter effect cycling through the roles array. */
function useTypewriter(words: string[], typingSpeed = 55, pauseTime = 1400) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === currentWord) {
      timeout = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
        );
      }, deleting ? typingSpeed / 2 : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, pauseTime]);

  return text;
}

export function Hero() {
  const roleText = useTypewriter(site.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Signature element: a scanning line sweeping over a blueprint frame,
          echoing both a surgical-instrument technical drawing and a code
          diff scanner — the bridge between the two halves of this profile. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden opacity-70">
        <div className="absolute inset-0 animate-scan-line bg-gradient-to-b from-transparent via-scalpel/10 to-transparent" />
      </div>

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-ink-700 px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-scalpel-bright" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-scalpel-bright" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Shahzaman <span className="text-scalpel">Mughal</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 flex h-8 items-center font-mono text-lg text-ink-200 sm:text-xl"
          >
            <span>{roleText}</span>
            <span className="ml-1 h-6 w-[2px] animate-blink bg-scalpel-bright" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg"
          >
            {site.tagline} Based in {site.location}, studying Software
            Engineering at UMT while driving international sales for a
            surgical instruments manufacturer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href={site.resumeUrl} download icon={<FiDownload />}>
              Download CV
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Projects
            </Button>
            <Button
              variant="ghost"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex items-center gap-5"
          >
            {[
              { icon: FiGithub, href: site.socials.github, label: 'GitHub' },
              { icon: FiLinkedin, href: site.socials.linkedin, label: 'LinkedIn' },
              { icon: FiTwitter, href: site.socials.twitter, label: 'Twitter' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-xl text-ink-400 transition-colors hover:text-scalpel-bright"
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile image placeholder — replace src in /public/images/profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-scalpel/30 via-transparent to-transparent blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-ink-600 bg-ink-800">
            {/* TODO: replace this placeholder with /images/profile/your-photo.jpg */}
            <img
              src="/images/profile/placeholder.svg"
              alt="Portrait of Shahzaman Mughal"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-blueprint-grid bg-grid opacity-20" />
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-400 hover:text-scalpel-bright"
      >
        <FiArrowDown size={22} />
      </motion.button>
    </section>
  );
}
