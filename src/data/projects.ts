export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

/**
 * Replace the placeholder entries below with your real projects.
 * Drop matching cover images into /public/images/projects and update
 * the `image` path for each one.
 */
export const projects: Project[] = [
  {
    id: 'proj-01',
    title: 'This Portfolio',
    description:
      'The site you are looking at right now — a React, TypeScript, and Tailwind build with Framer Motion animations, designed and engineered from scratch.',
    image: '/images/projects/placeholder-01.svg',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://shahzamanmughal.com',
    featured: true,
  },
  {
    id: 'proj-02',
    title: 'Asamar Surgical — Digital Presence',
    description:
      'Planning and brand direction for the company website of an OEM surgical instrument manufacturer, aimed at international buyers.',
    image: '/images/projects/placeholder-02.svg',
    tags: ['WordPress', 'Branding', 'Business Strategy'],
    demo: undefined,
  },
  {
    id: 'proj-03',
    title: 'Project Slot — Add Your Next Build',
    description:
      'Reserved card. Swap this out for your next project: include a real screenshot, a short write-up, and links to the repo and live demo.',
    image: '/images/projects/placeholder-03.svg',
    tags: ['Add', 'Your', 'Stack'],
  },
];
