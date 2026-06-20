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
  'AI & Emerging Tech',
  'Tools & Practices',
];

export const skills: Skill[] = [
  // Languages
  { name: 'Go (Golang)', category: 'Languages', level: 5 },
  { name: 'Python', category: 'Languages', level: 4 },
  { name: 'JavaScript', category: 'Languages', level: 4 },
  { name: 'TypeScript', category: 'Languages', level: 4 },
  { name: 'HTML/CSS', category: 'Languages', level: 4 },

  // Frontend
  { name: 'React', category: 'Frontend', level: 4 },
  { name: 'React Native', category: 'Frontend', level: 3 },
  { name: 'Next.js', category: 'Frontend', level: 4 },
  { name: 'Vite', category: 'Frontend', level: 4 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 4 },
  { name: 'Expo', category: 'Frontend', level: 3 },

  // Backend
  { name: 'REST APIs', category: 'Backend', level: 5 },
  { name: 'Gin (Go)', category: 'Backend', level: 4 },
  { name: 'Microservices', category: 'Backend', level: 4 },
  { name: 'Node.js / Express', category: 'Backend', level: 3 },

  // Database
  { name: 'PostgreSQL', category: 'Database', level: 3 },
  { name: 'Supabase', category: 'Database', level: 3 },

  // DevOps & Cloud
  { name: 'Docker', category: 'DevOps & Cloud', level: 5 },
  { name: 'Docker Compose', category: 'DevOps & Cloud', level: 4 },
  { name: 'Kubernetes', category: 'DevOps & Cloud', level: 4 },
  { name: 'OpenShift', category: 'DevOps & Cloud', level: 4 },
  { name: 'AWS', category: 'DevOps & Cloud', level: 3 },
  { name: 'Jenkins', category: 'DevOps & Cloud', level: 4 },
  { name: 'ArgoCD', category: 'DevOps & Cloud', level: 4 },
  { name: 'GitOps', category: 'DevOps & Cloud', level: 4 },
  { name: 'CI/CD', category: 'DevOps & Cloud', level: 5 },

  // AI & Emerging Tech
  { name: 'LLMs & GenAI', category: 'AI & Emerging Tech', level: 4 },
  { name: 'AI Agents', category: 'AI & Emerging Tech', level: 4 },
  { name: 'MCP (Model Context Protocol)', category: 'AI & Emerging Tech', level: 4 },
  { name: 'WebMCP', category: 'AI & Emerging Tech', level: 3 },
  { name: 'RAG (Retrieval-Augmented Generation)', category: 'AI & Emerging Tech', level: 3 },
  { name: 'OpenTelemetry', category: 'AI & Emerging Tech', level: 3 },

  // Tools & Practices
  { name: 'Git & GitHub', category: 'Tools & Practices', level: 5 },
  { name: 'Agile / Scrum', category: 'Tools & Practices', level: 4 },
  { name: 'Code Reviews', category: 'Tools & Practices', level: 5 },
  { name: 'Linux', category: 'Tools & Practices', level: 4 },
  { name: 'Cobra CLI', category: 'Tools & Practices', level: 3 },
  { name: 'sqlc', category: 'Tools & Practices', level: 3 },
];
