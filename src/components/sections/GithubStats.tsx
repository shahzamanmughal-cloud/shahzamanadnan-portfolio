import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { site } from '@/data/site';

/**
 * GitHub activity is rendered via github-readme-stats, a free image-based
 * API — no backend or API key needed. Just make sure `site.socials.github`
 * points at your real GitHub username and these images resolve automatically.
 *
 * To connect a live contribution graph or repo list instead, see the
 * comments below for where to plug in the GitHub REST/GraphQL API.
 */
export function GithubStats() {
  const username = site.socials.github.split('/').filter(Boolean).pop() ?? 'yourusername';

  return (
    <section id="github" className="section-pad">
      <div className="container-page">
        <SectionHeading
          index="11"
          eyebrow="GitHub"
          title="Open-source activity."
          description="Live stats pulled from GitHub — update the username in src/data/site.ts to make these yours."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <RevealOnScroll>
            <div className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-800/40 p-4">
              {/*
                Free image widget via github-readme-stats — no API key required.
                Swap `username` above for your real GitHub handle.
              */}
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&bg_color=0a0a0b&title_color=ff3b4e&text_color=f5f5f2&icon_color=ff3b4e&border_color=232326&hide_border=true`}
                alt="GitHub stats"
                loading="lazy"
                className="w-full"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-800/40 p-4">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&bg_color=0a0a0b&title_color=ff3b4e&text_color=f5f5f2&border_color=232326&hide_border=true`}
                alt="Most used languages"
                loading="lazy"
                className="w-full"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15} className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-800/40 p-4">
              <img
                src={`https://ghchart.rshah.org/ff3b4e/${username}`}
                alt="GitHub contribution graph"
                loading="lazy"
                className="w-full"
              />
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.2} className="mt-8 rounded-2xl border border-dashed border-ink-600 bg-ink-900/40 p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-400">
            Integration note
          </p>
          <p className="mt-2 text-sm text-ink-300">
            The widgets above load directly from public image APIs — nothing
            to configure beyond your username. If you'd rather pull live
            repository data (stars, forks, latest commits) directly into
            React components, call the GitHub REST API
            (<code className="text-scalpel-bright">https://api.github.com/users/&#123;username&#125;/repos</code>)
            or the GraphQL API from a small serverless function, since GitHub
            rate-limits unauthenticated requests from the browser.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
