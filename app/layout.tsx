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
  title: {
    default: 'Abhijith K — Software Developer',
    template: '%s | Abhijith K',
  },
  description:
    'Personal website of Abhijith K — Software Developer, Writer & Storyteller. Explore my projects, skills, writing, and more.',
  keywords: ['software developer', 'portfolio', 'writer', 'Abhijith K', 'full stack developer'],
  authors: [{ name: 'Abhijith K' }],
  openGraph: {
    title: 'Abhijith K — Software Developer',
    description: 'Personal website of Abhijith K — Software Developer, Writer & Storyteller.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-profile="dev" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${geistMono.variable}`}>
        <ProfileProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ProfileProvider>
      </body>
    </html>
  );
}
