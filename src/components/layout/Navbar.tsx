import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useActiveSection } from '@/hooks/useActiveSection';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleNavClick(id: string) {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? 'border-b border-ink-700/70 bg-ink/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-display text-lg font-semibold tracking-tight"
        >
          SM<span className="text-scalpel-bright">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`relative font-mono text-xs uppercase tracking-widest transition-colors ${
                  activeId === link.id ? 'text-paper' : 'text-ink-400 hover:text-paper'
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 h-[2px] w-full bg-scalpel-bright"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNavClick('contact')}
          className="hidden rounded-full border border-ink-500 px-5 py-2 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-scalpel-bright hover:text-scalpel-bright md:inline-block"
        >
          Let's Talk
        </button>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
          className="text-2xl text-paper md:hidden"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-ink-700 bg-ink/95 backdrop-blur-lg md:hidden"
          >
            <ul className="container-page flex flex-col gap-5 py-6">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`font-mono text-sm uppercase tracking-widest ${
                      activeId === link.id ? 'text-scalpel-bright' : 'text-ink-300'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
