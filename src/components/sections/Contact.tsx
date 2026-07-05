import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Button } from '@/components/ui/Button';
import { site } from '@/data/site';

type Status = 'idle' | 'sending' | 'success' | 'error';

/**
 * EmailJS setup (all free):
 * 1. Create an account at https://www.emailjs.com
 * 2. Add an Email Service (e.g. Gmail) and note the Service ID
 * 3. Create an Email Template and note the Template ID
 * 4. Copy your Public Key from Account > API Keys
 * 5. Paste all three below.
 */
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;

    try {
      if (EMAILJS_SERVICE_ID.startsWith('YOUR_')) {
        // EmailJS hasn't been configured yet — surface a clear message
        // instead of silently failing.
        throw new Error('EmailJS is not configured yet.');
      }
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section-pad">
      <div className="container-page">
        <SectionHeading
          index="13"
          eyebrow="Contact"
          title="Let's build something."
          description="Open to internships, freelance work, and international business conversations alike."
        />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <RevealOnScroll className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-scalpel/15 text-scalpel-bright">
                <FiMail />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-ink-400">Email</p>
                <a href={`mailto:${site.email}`} className="text-ink-100 hover:text-scalpel-bright">
                  {site.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-scalpel/15 text-scalpel-bright">
                <FiPhone />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-ink-400">Phone</p>
                <a href={`tel:${site.phone}`} className="text-ink-100 hover:text-scalpel-bright">
                  {site.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-scalpel/15 text-scalpel-bright">
                <FiMapPin />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-ink-400">Location</p>
                <p className="text-ink-100">{site.location}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {[
                { icon: FiGithub, href: site.socials.github, label: 'GitHub' },
                { icon: FiLinkedin, href: site.socials.linkedin, label: 'LinkedIn' },
                { icon: FiTwitter, href: site.socials.twitter, label: 'Twitter' },
                { icon: FiInstagram, href: site.socials.instagram, label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-600 text-ink-300 hover:border-scalpel-bright hover:text-scalpel-bright"
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Map placeholder — swap the src in site.mapEmbedUrl with your exact embed link */}
            <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-ink-700 grayscale transition-all hover:grayscale-0">
              <iframe
                title="Location map"
                src={site.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-ink-700 bg-ink-800/40 p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-widest text-ink-400">
                    Name
                  </label>
                  <input
                    id="name"
                    name="user_name"
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-ink-600 bg-ink-900/60 px-4 py-3 text-sm text-paper placeholder:text-ink-500 focus:border-scalpel-bright"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest text-ink-400">
                    Email
                  </label>
                  <input
                    id="email"
                    name="user_email"
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-ink-600 bg-ink-900/60 px-4 py-3 text-sm text-paper placeholder:text-ink-500 focus:border-scalpel-bright"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="mb-2 block text-xs uppercase tracking-widest text-ink-400">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    className="w-full rounded-xl border border-ink-600 bg-ink-900/60 px-4 py-3 text-sm text-paper placeholder:text-ink-500 focus:border-scalpel-bright"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-widest text-ink-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me a bit about the opportunity or project..."
                    className="w-full resize-none rounded-xl border border-ink-600 bg-ink-900/60 px-4 py-3 text-sm text-paper placeholder:text-ink-500 focus:border-scalpel-bright"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <Button type="submit" icon={<FiSend />}>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </Button>
                {status === 'success' && (
                  <span className="text-sm text-green-400">Message sent — thank you!</span>
                )}
                {status === 'error' && (
                  <span className="text-sm text-scalpel-bright">
                    Couldn't send yet — connect EmailJS in Contact.tsx.
                  </span>
                )}
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
