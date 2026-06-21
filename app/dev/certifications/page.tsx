import type { Metadata } from 'next';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';
import CertCard from '@/components/dev/CertCard';
import { certifications } from '@/data/certifications';

export const metadata: Metadata = {
  title: 'Certifications — AWS Certified Cloud Practitioner',
  description:
    'Professional certifications of Abhijith K — AWS Certified Cloud Practitioner and IBM Developer Profession Certification. Validated expertise in cloud computing, software development, and enterprise-grade engineering.',
  alternates: {
    canonical: 'https://abhijithk.dev/dev/certifications',
  },
};

export default function CertificationsPage() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              label="Credentials"
              title="Certifications"
              subtitle="Professional certifications and credentials that validate my expertise."
            />
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 'var(--space-lg)',
            }}
          >
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.name} delay={i * 80}>
                <CertCard cert={cert} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
