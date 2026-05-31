import type { Metadata } from 'next';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';
import ProjectCard from '@/components/dev/ProjectCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Software projects, open source contributions, and side projects by Abhijith K.',
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              label="Portfolio"
              title="Projects"
              subtitle="A collection of my software projects, from full-stack applications to tools and experiments."
            />
          </ScrollReveal>

          {featured.length > 0 && (
            <>
              <ScrollReveal>
                <h3
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    marginBottom: 'var(--space-lg)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  Featured
                </h3>
              </ScrollReveal>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                  gap: 'var(--space-lg)',
                  marginBottom: 'var(--space-3xl)',
                }}
              >
                {featured.map((project, i) => (
                  <ScrollReveal key={project.title} delay={i * 80}>
                    <ProjectCard project={project} />
                  </ScrollReveal>
                ))}
              </div>
            </>
          )}

          {others.length > 0 && (
            <>
              <ScrollReveal>
                <h3
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--space-lg)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  Other Projects
                </h3>
              </ScrollReveal>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                  gap: 'var(--space-lg)',
                }}
              >
                {others.map((project, i) => (
                  <ScrollReveal key={project.title} delay={i * 80}>
                    <ProjectCard project={project} />
                  </ScrollReveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
