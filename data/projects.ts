export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'Personal Website',
    description:
      'A premium dual-profile personal website built with Next.js, featuring a dark developer portfolio and a warm creative writing section with smooth theme transitions.',
    tech: ['Next.js', 'TypeScript', 'CSS Modules', 'Vercel'],
    github: 'https://github.com/abhijithk1/personal-website',
    featured: true,
  },
  {
    title: 'Project Alpha',
    description:
      'A full-stack web application demonstrating modern development practices with authentication, real-time updates, and responsive design.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/abhijithk1',
    featured: true,
  },
  {
    title: 'Utility CLI Tool',
    description:
      'A command-line productivity tool that automates repetitive development workflows and integrates with popular services.',
    tech: ['Python', 'Docker', 'REST API'],
    github: 'https://github.com/abhijithk1',
    featured: false,
  },
];
