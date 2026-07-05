// -----------------------------------------------------------------------
// Certifications
// -----------------------------------------------------------------------
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export const certifications: Certification[] = [
  {
    id: 'cert-01',
    title: 'Certification Slot #1',
    issuer: 'Add issuing organization',
    date: 'Add date earned',
    image: '/images/certificates/placeholder-01.svg',
  },
  {
    id: 'cert-02',
    title: 'Certification Slot #2',
    issuer: 'Add issuing organization',
    date: 'Add date earned',
    image: '/images/certificates/placeholder-02.svg',
  },
  {
    id: 'cert-03',
    title: 'Certification Slot #3',
    issuer: 'Add issuing organization',
    date: 'Add date earned',
    image: '/images/certificates/placeholder-03.svg',
  },
];

// -----------------------------------------------------------------------
// Achievements
// -----------------------------------------------------------------------
export interface Achievement {
  id: string;
  year: string;
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    id: 'ach-01',
    year: '2023',
    title: 'Started BS Software Engineering',
    description: 'Enrolled at UMT Sialkot to formally pursue software engineering.',
  },
  {
    id: 'ach-02',
    year: '2023',
    title: 'Joined Asamar Surgical',
    description: 'Took ownership of international business development for a surgical instruments OEM.',
  },
  {
    id: 'ach-03',
    year: '2025',
    title: 'Bridging Two Disciplines',
    description: 'Actively combining software engineering study with hands-on international business execution.',
  },
  {
    id: 'ach-04',
    year: 'Next',
    title: 'Your Next Milestone',
    description: 'Reserved — update this the moment you hit your next achievement.',
  },
];

export const stats = [
  { id: 'stat-countries', label: 'Countries Reached', value: 15, suffix: '+' },
  { id: 'stat-years', label: 'Years in Business Dev.', value: 2, suffix: '+' },
  { id: 'stat-languages', label: 'Languages Spoken', value: 2, suffix: '' },
  { id: 'stat-projects', label: 'Projects Shipped', value: 3, suffix: '+' },
];

// -----------------------------------------------------------------------
// Services
// -----------------------------------------------------------------------
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'code' | 'design' | 'software' | 'consulting' | 'freelance';
}

export const services: Service[] = [
  {
    id: 'svc-01',
    title: 'Web Development',
    description: 'Modern, responsive, high-performance websites built with clean, maintainable code.',
    icon: 'code',
  },
  {
    id: 'svc-02',
    title: 'UI/UX Design',
    description: 'Interfaces that are as usable as they are good-looking — designed around real user goals.',
    icon: 'design',
  },
  {
    id: 'svc-03',
    title: 'Software Solutions',
    description: 'Requirement analysis and system design for practical, scalable software solutions.',
    icon: 'software',
  },
  {
    id: 'svc-04',
    title: 'Business Consulting',
    description: 'International market entry, lead generation, and business strategy grounded in real experience.',
    icon: 'consulting',
  },
  {
    id: 'svc-05',
    title: 'Freelance Services',
    description: 'Slot reserved for freelance offerings as they open up — update once available.',
    icon: 'freelance',
  },
];

// -----------------------------------------------------------------------
// Technologies
// -----------------------------------------------------------------------
export interface Technology {
  name: string;
  category: 'language' | 'frontend' | 'tool' | 'platform';
}

export const technologies: Technology[] = [
  { name: 'HTML5', category: 'language' },
  { name: 'CSS3', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'TypeScript', category: 'language' },
  { name: 'C++', category: 'language' },
  { name: 'SQL', category: 'language' },
  { name: 'React', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'WordPress', category: 'platform' },
  { name: 'Git', category: 'tool' },
  { name: 'GitHub', category: 'tool' },
  { name: 'VS Code', category: 'tool' },
];

// -----------------------------------------------------------------------
// Testimonials (dummy — replace with real client/colleague quotes)
// -----------------------------------------------------------------------
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-01',
    name: 'International Client',
    role: 'Procurement Manager, Overseas Distributor',
    quote:
      'Placeholder testimonial — replace with a real quote from a client about clarity, responsiveness, or reliability during a deal.',
  },
  {
    id: 'test-02',
    name: 'University Colleague',
    role: 'Software Engineering, UMT Sialkot',
    quote:
      'Placeholder testimonial — replace with a real quote from a classmate or teammate about collaboration on a project.',
  },
  {
    id: 'test-03',
    name: 'Business Partner',
    role: 'Asamar Surgical Network',
    quote:
      'Placeholder testimonial — replace with a real quote from a colleague about your work ethic or business instincts.',
  },
];

// -----------------------------------------------------------------------
// "My Journey" — the narrative timeline
// -----------------------------------------------------------------------
export interface JourneyPoint {
  id: string;
  label: string;
  title: string;
  description: string;
}

export const journey: JourneyPoint[] = [
  {
    id: 'j-01',
    label: 'Student',
    title: 'Learning the Fundamentals',
    description: 'Started building a foundation in programming, data structures, and software engineering principles.',
  },
  {
    id: 'j-02',
    label: 'Operator',
    title: 'Running International Business',
    description: 'Took on business development for a surgical instruments manufacturer, learning global trade from the inside.',
  },
  {
    id: 'j-03',
    label: 'Builder',
    title: 'Combining Both Worlds',
    description: 'Now designing and building digital products, applying business instinct to real engineering decisions.',
  },
  {
    id: 'j-04',
    label: 'Engineer',
    title: 'Future Software Engineer',
    description: 'The long-term goal: a world-class software engineer who also understands how to build a business around what he ships.',
  },
];
