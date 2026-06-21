import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import localFont from 'next/font/local';
import { ProfileProvider } from '@/context/ProfileContext';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abhijithk.dev'),
  title: {
    default: 'Abhijith K — Software Developer | Go, Python, AI, Kubernetes',
    template: '%s | Abhijith K',
  },
  description:
    'Software Developer at IBM with 4+ years of experience in Go (Golang), Python, React, Kubernetes, Docker, and AI Agent systems (MCP, LLMs, RAG). AWS Certified. Open to remote and on-site opportunities globally. Explore projects, skills, experience, and download resume.',
  keywords: [
    'Abhijith K',
    'software developer',
    'software engineer',
    'full stack developer',
    'backend engineer',
    'golang developer',
    'Go developer',
    'python developer',
    'react developer',
    'AI engineer',
    'AI developer',
    'AI agent developer',
    'MCP developer',
    'Model Context Protocol',
    'LLM developer',
    'cloud native developer',
    'kubernetes engineer',
    'DevOps engineer',
    'docker',
    'microservices',
    'IBM software developer',
    'AWS certified',
    'remote software developer',
    'hire software developer',
    'hire golang developer',
    'hire AI developer',
    'developer portfolio',
    'open to work',
    'visa sponsorship developer',
    'CI/CD',
    'ArgoCD',
    'GitOps',
    'OpenShift',
    'REST API developer',
    'technical writer',
  ],
  authors: [{ name: 'Abhijith K', url: 'https://abhijithk.dev' }],
  creator: 'Abhijith K',
  publisher: 'Abhijith K',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://abhijithk.dev',
  },
  openGraph: {
    title: 'Abhijith K — Software Developer | Go, Python, AI, Kubernetes',
    description:
      'Software Developer at IBM with 4+ years of experience in Go, Python, React, Kubernetes, and AI Agent systems. AWS Certified. Open to global opportunities.',
    type: 'website',
    locale: 'en_US',
    url: 'https://abhijithk.dev',
    siteName: 'Abhijith K — Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhijith K — Software Developer | Go, Python, AI, Kubernetes',
    description:
      'Software Developer at IBM with 4+ years of experience in Go, Python, React, Kubernetes, and AI Agent systems. Open to global opportunities.',
    creator: '@abhijith0807',
  },
  verification: {
    // Add your Google Search Console verification code here when ready
    // google: 'your-verification-code',
  },
  category: 'technology',
};

/** JSON-LD Structured Data for rich search results and hiring bot parsing */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': 'https://abhijithk.dev/#profilepage',
      url: 'https://abhijithk.dev',
      name: 'Abhijith K — Software Developer Portfolio',
      description:
        'Professional portfolio and resume of Abhijith K — Software Developer at IBM specializing in Go, Python, Kubernetes, and AI Agent systems.',
      mainEntity: { '@id': 'https://abhijithk.dev/#person' },
    },
    {
      '@type': 'Person',
      '@id': 'https://abhijithk.dev/#person',
      name: 'Abhijith K',
      givenName: 'Abhijith',
      familyName: 'K',
      jobTitle: 'Software Developer',
      description:
        'Software Developer with 4+ years of experience at IBM, specializing in Go (Golang), Python, cloud-native technologies, Kubernetes, and AI-powered agentic systems.',
      url: 'https://abhijithk.dev',
      email: 'mailto:abhijith0807@gmail.com',
      telephone: '+919745932997',
      image: 'https://abhijithk.dev/og-image.png',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
      },
      worksFor: {
        '@type': 'Organization',
        name: 'IBM',
        url: 'https://www.ibm.com',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'NSS College of Engineering',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Palakkad',
          addressRegion: 'Kerala',
          addressCountry: 'IN',
        },
      },
      knowsAbout: [
        'Go (Golang)',
        'Python',
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'Kubernetes',
        'Docker',
        'OpenShift',
        'AWS',
        'CI/CD',
        'Jenkins',
        'ArgoCD',
        'GitOps',
        'Microservices',
        'REST APIs',
        'PostgreSQL',
        'AI Agents',
        'Large Language Models (LLMs)',
        'Model Context Protocol (MCP)',
        'RAG (Retrieval-Augmented Generation)',
        'OpenTelemetry',
        'Agile / Scrum',
        'Cloud-Native Architecture',
        'Software Development',
        'Backend Development',
        'Full Stack Development',
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'AWS Certified Cloud Practitioner',
          credentialCategory: 'Professional Certification',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Amazon Web Services (AWS)',
          },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'IBM Developer Profession Certification — Level 1 Foundational',
          credentialCategory: 'Professional Certification',
          recognizedBy: {
            '@type': 'Organization',
            name: 'IBM',
          },
        },
      ],
      hasOccupation: [
        {
          '@type': 'Occupation',
          name: 'Software Developer',
          occupationLocation: [
            { '@type': 'Country', name: 'India' },
            { '@type': 'Country', name: 'Remote' },
          ],
          skills:
            'Go, Python, JavaScript, TypeScript, React, Kubernetes, Docker, AWS, CI/CD, AI Agents, MCP, Microservices',
        },
      ],
      sameAs: [
        'https://linkedin.com/in/abhijith-k-0807',
        'https://github.com/abhijithk1',
        'https://medium.com/@abhijith0807',
      ],
      seeks: {
        '@type': 'Demand',
        name: 'Software Development Opportunities',
        description:
          'Open to remote roles globally and on-site positions with visa sponsorship in Europe, Australia, Singapore, United States, and UAE (Dubai).',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://abhijithk.dev/#website',
      url: 'https://abhijithk.dev',
      name: 'Abhijith K — Software Developer Portfolio',
      publisher: { '@id': 'https://abhijithk.dev/#person' },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-profile="dev" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <ProfileProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ProfileProvider>
      </body>
    </html>
  );
}
