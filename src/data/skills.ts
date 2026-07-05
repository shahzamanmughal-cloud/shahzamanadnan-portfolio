export interface Skill {
  name: string;
  level: number; // 0-100, used for animated skill bars
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'programming',
    title: 'Programming',
    skills: [
      { name: 'C++', level: 75 },
      { name: 'Programming Fundamentals', level: 85 },
      { name: 'Data Structures & Algorithms', level: 70 },
    ],
  },
  {
    id: 'web',
    title: 'Web Development',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 75 },
      { name: 'Responsive Design', level: 85 },
      { name: 'WordPress', level: 80 },
      { name: 'UI/UX Fundamentals', level: 70 },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: [
      { name: 'SQL / Database Systems', level: 70 },
      { name: 'Requirement Engineering', level: 70 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Software Engineering',
    skills: [
      { name: 'Software Engineering', level: 75 },
      { name: 'Git & GitHub', level: 55 },
      { name: 'Problem Solving', level: 85 },
    ],
  },
];

export const businessSkills: string[] = [
  'International Communication',
  'Negotiation',
  'Marketing',
  'Client Acquisition',
  'Branding',
  'Business Development',
];
