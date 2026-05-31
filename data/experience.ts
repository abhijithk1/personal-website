export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Company Name',
    role: 'Software Developer',
    period: '2023 — Present',
    description:
      'Working on building and maintaining web applications, collaborating with cross-functional teams, and contributing to the full software development lifecycle.',
    highlights: [
      'Developed and maintained responsive web applications using React and TypeScript',
      'Collaborated with design and product teams to deliver user-centric features',
      'Implemented RESTful APIs and integrated third-party services',
      'Participated in code reviews and mentored junior developers',
    ],
  },
  {
    company: 'Previous Company',
    role: 'Junior Developer',
    period: '2022 — 2023',
    description:
      'Started professional journey in software development, working on frontend features and learning best practices in a collaborative environment.',
    highlights: [
      'Built UI components and implemented responsive designs',
      'Contributed to testing and debugging efforts',
      'Learned and adopted agile development practices',
    ],
  },
];
