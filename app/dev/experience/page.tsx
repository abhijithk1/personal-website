import type { Metadata } from 'next';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';
import TimelineItem from '@/components/dev/TimelineItem';
import { experiences } from '@/data/experience';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional work experience and career journey of Abhijith K.',
};

export default function ExperiencePage() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              label="Career"
              title="Work Experience"
              subtitle="My professional journey in software development."
            />
          </ScrollReveal>

          <div style={{ maxWidth: '700px' }}>
            {experiences.map((exp, i) => (
              <ScrollReveal key={`${exp.company}-${exp.role}`} delay={i * 100}>
                <TimelineItem
                  experience={exp}
                  isLast={i === experiences.length - 1}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
