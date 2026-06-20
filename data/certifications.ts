export interface Certification {
  name: string;
  issuer: string;
  date: string;
  verifyUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: '2023',
    verifyUrl: '#',
  },
  {
    name: 'IBM Developer Profession Certification — Level 1 Foundational',
    issuer: 'IBM',
    date: '2023',
    verifyUrl: '#',
  },
];
