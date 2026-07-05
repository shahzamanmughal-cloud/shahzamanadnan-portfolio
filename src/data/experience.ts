export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  status: 'current' | 'upcoming';
  summary: string;
  responsibilities: string[];
  achievements: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: 'exp-01',
    role: 'Business Development Executive — International Markets',
    company: 'Asamar Surgical',
    period: '2023 — Present',
    status: 'current',
    summary:
      'Asamar Surgical is an OEM manufacturer specializing in surgical retractors and a wide range of surgical instruments, serving clients across international markets.',
    responsibilities: [
      'Driving international business development and new-market outreach',
      'Generating and qualifying leads across global B2B channels',
      'Managing email communication and client relationships end-to-end',
      'Shaping business strategy, marketing direction, and brand positioning',
      'Planning and overseeing the company website and digital presence',
    ],
    achievements: [
      'Built outbound outreach systems that consistently generate qualified international leads',
      'Strengthened the company\'s brand presentation across digital channels',
      'Directly manages relationships with clients across multiple continents',
    ],
  },
  {
    id: 'exp-02',
    role: 'Software Engineering Role',
    company: 'Slot reserved for your next opportunity',
    period: 'Upcoming',
    status: 'upcoming',
    summary:
      'This card is intentionally left open — add your next internship or engineering role here once it happens.',
    responsibilities: [],
    achievements: [],
  },
];
