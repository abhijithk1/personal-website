import type { Metadata } from 'next';
import ContactSection from '@/components/shared/ContactSection';

export const metadata: Metadata = {
  title: 'Contact — Hire Abhijith K',
  description:
    'Get in touch with Abhijith K — Software Developer open to remote roles globally and on-site positions with visa sponsorship. Connect via LinkedIn, GitHub, Medium, email, or phone. Available for full-time opportunities, collaborations, and consulting.',
  alternates: {
    canonical: 'https://abhijithk.dev/contact',
  },
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <ContactSection />
    </div>
  );
}
