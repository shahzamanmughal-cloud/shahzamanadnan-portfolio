import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import { site } from '@/data/site';

const socialIcons = [
  { icon: FiGithub, href: site.socials.github, label: 'GitHub' },
  { icon: FiLinkedin, href: site.socials.linkedin, label: 'LinkedIn' },
  { icon: FiTwitter, href: site.socials.twitter, label: 'Twitter / X' },
  { icon: FiInstagram, href: site.socials.instagram, label: 'Instagram' },
];

const FOOTER_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-700/70">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-3">
        <div>
          <div className="font-display text-xl font-semibold">
            Shahzaman<span className="text-scalpel-bright">.</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink-400">{site.tagline}</p>
        </div>

        <div>
          <div className="eyebrow mb-4">Navigate</div>
          <ul className="space-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() =>
                    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-sm text-ink-300 transition-colors hover:text-scalpel-bright"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Connect</div>
          <div className="flex gap-3">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-600 text-ink-300 transition-all hover:border-scalpel-bright hover:text-scalpel-bright"
              >
                <Icon />
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-ink-400">{site.location}</p>
        </div>
      </div>

      <div className="border-t border-ink-700/70">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-ink-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="font-mono">Built with React · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
