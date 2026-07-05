import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { TiltCard } from '@/components/ui/TiltCard';
import { Badge } from '@/components/ui/Badge';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-page">
        <SectionHeading
          index="05"
          eyebrow="Projects"
          title="Selected work."
          description="A growing collection — this structure makes it trivial to slot in the next build."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.id} delay={i * 0.08}>
              <TiltCard className="flex h-full flex-col p-0">
                <div className="aspect-video w-full overflow-hidden border-b border-ink-700 bg-ink-900">
                  {/* TODO: replace with a real screenshot in /public/images/projects */}
                  <img
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-ink-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-ink-200 hover:text-scalpel-bright"
                      >
                        <FiGithub /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-ink-200 hover:text-scalpel-bright"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
