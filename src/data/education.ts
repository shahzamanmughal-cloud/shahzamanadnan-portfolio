export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: 'in-progress' | 'completed' | 'upcoming';
  description: string;
}

export const education: EducationItem[] = [
  {
    id: 'edu-01',
    degree: 'BS Software Engineering',
    institution: 'University of Management and Technology (UMT), Sialkot Campus',
    period: '2023 — Present',
    status: 'in-progress',
    description:
      'Coursework spanning programming fundamentals, data structures & algorithms, database systems, requirement engineering, and software architecture — while running an international business on the side.',
  },
  {
    id: 'edu-02',
    degree: 'Certifications & Specializations',
    institution: 'Slot reserved for your next credential',
    period: 'Planned',
    status: 'upcoming',
    description:
      'This slot is intentionally open — add your next certification (cloud, AI, or web development) here as you complete it.',
  },
];
