import type { Metadata } from 'next';
import ContactSection from '@/components/shared/ContactSection';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Abhijith K — connect via LinkedIn, GitHub, Medium, email, or phone.',
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <ContactSection />
    </div>
  );
}
