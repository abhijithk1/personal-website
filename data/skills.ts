export interface Skill {
  name: string;
  category: string;
  level: number; // 1-5
}

export const skillCategories = [
  'Languages',
  'Frontend',
  'Backend',
  'Database',
  'DevOps & Cloud',
  'Tools & Practices',
];

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', category: 'Languages', level: 4 },
  { name: 'TypeScript', category: 'Languages', level: 4 },
  { name: 'Python', category: 'Languages', level: 3 },
  { name: 'Java', category: 'Languages', level: 3 },
  { name: 'HTML/CSS', category: 'Languages', level: 5 },

  // Frontend
  { name: 'React', category: 'Frontend', level: 4 },
  { name: 'Next.js', category: 'Frontend', level: 4 },
  { name: 'Angular', category: 'Frontend', level: 3 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 4 },

  // Backend
  { name: 'Node.js', category: 'Backend', level: 4 },
  { name: 'Express.js', category: 'Backend', level: 4 },
  { name: 'REST APIs', category: 'Backend', level: 4 },

  // Database
  { name: 'MongoDB', category: 'Database', level: 3 },
  { name: 'PostgreSQL', category: 'Database', level: 3 },
  { name: 'MySQL', category: 'Database', level: 3 },

  // DevOps & Cloud
  { name: 'Git & GitHub', category: 'DevOps & Cloud', level: 4 },
  { name: 'Docker', category: 'DevOps & Cloud', level: 3 },
  { name: 'AWS', category: 'DevOps & Cloud', level: 2 },
  { name: 'CI/CD', category: 'DevOps & Cloud', level: 3 },

  // Tools & Practices
  { name: 'VS Code', category: 'Tools & Practices', level: 5 },
  { name: 'Agile/Scrum', category: 'Tools & Practices', level: 4 },
  { name: 'Linux', category: 'Tools & Practices', level: 3 },
];
