import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HeroDev from '@/components/dev/HeroDev';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';
import SkillCard from '@/components/dev/SkillCard';
import ProjectCard from '@/components/dev/ProjectCard';
import ContactSection from '@/components/shared/ContactSection';
import { skills } from '@/data/skills';
import { projects } from '@/data/projects';

export default function HomePage() {
  const topSkills = skills.slice(0, 6);
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <HeroDev />

      {/* Skills Preview */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              label="Expertise"
              title="Technical Skills"
              subtitle="Technologies and tools I work with every day."
            />
          </ScrollReveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 'var(--space-md)',
            marginBottom: 'var(--space-xl)',
          }}>
            {topSkills.map((skill, i) => (
              <ScrollReveal key={skill.name} delay={i * 60}>
                <SkillCard skill={skill} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <Link
              href="/dev/skills"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--accent)',
              }}
            >
              View All Skills <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              label="Portfolio"
              title="Featured Projects"
              subtitle="A selection of my recent work and side projects."
            />
          </ScrollReveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 'var(--space-lg)',
            marginBottom: 'var(--space-xl)',
          }}>
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 80}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <Link
              href="/dev/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--accent)',
              }}
            >
              View All Projects <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </>
  );
}
