export interface Certification {
  name: string;
  issuer: string;
  date: string;
  verifyUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    verifyUrl: '#',
  },
  {
    name: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: '2023',
    verifyUrl: '#',
  },
];
