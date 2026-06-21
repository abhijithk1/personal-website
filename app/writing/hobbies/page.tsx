import type { Metadata } from 'next';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';
import HobbyCard from '@/components/writing/HobbyCard';
import { hobbies } from '@/data/hobbies';

export const metadata: Metadata = {
  title: 'Hobbies & Interests',
  description:
    'Hobbies and interests of Abhijith K — writing stories and screenplays, reading, cinema, building products, outdoor sports, and chess.',
  alternates: {
    canonical: 'https://abhijithk.dev/writing/hobbies',
  },
};

export default function HobbiesPage() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              label="Interests"
              title="Hobbies & Passions"
              subtitle="The things that keep me curious, grounded, and inspired outside of work."
            />
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 'var(--space-lg)',
            }}
          >
            {hobbies.map((hobby, i) => (
              <ScrollReveal key={hobby.name} delay={i * 80}>
                <HobbyCard hobby={hobby} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
