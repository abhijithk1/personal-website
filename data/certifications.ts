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
    verifyUrl: 'https://www.credly.com/badges/ca0267ed-195f-4386-b708-9675ea65c3bc/public_url',
  },
  {
    name: 'IBM Developer Profession Certification — Level 1 Foundation',
    issuer: 'IBM',
    date: '2025',
    verifyUrl: 'https://www.credly.com/badges/1e1c8726-5b8a-40eb-9687-eeeb43c8199a/public_url',
  },
];
