import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import HeroDev from '@/components/dev/HeroDev';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';
import SkillCard from '@/components/dev/SkillCard';
import ProjectCard from '@/components/dev/ProjectCard';
import ContactSection from '@/components/shared/ContactSection';
import { skills } from '@/data/skills';
import { projects } from '@/data/projects';
import { personalInfo } from '@/data/personal';

export const metadata: Metadata = {
  title: 'Abhijith K — Software Developer | Go, Python, AI, Kubernetes',
  description:
    'Abhijith K is a Software Developer at IBM with 4+ years of experience building scalable backend services in Go (Golang), Python, and cloud-native technologies. Expertise in Kubernetes, Docker, AI Agents, MCP, React, and CI/CD. AWS Certified. Open to remote and on-site roles globally.',
  alternates: {
    canonical: 'https://abhijithk.dev',
  },
};

export default function HomePage() {
  const topSkills = skills.slice(0, 6);
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      {/* Visually hidden SEO content for recruiters and hiring bots */}
      <section className="visually-hidden" aria-label="Professional Summary">
        <h2>Professional Summary — Abhijith K, Software Developer</h2>
        <p>{personalInfo.summary}</p>
        <h3>Key Skills</h3>
        <ul>
          {skills.map((skill) => (
            <li key={skill.name}>{skill.name} — {skill.category}</li>
          ))}
        </ul>
        <h3>Availability</h3>
        <p>{personalInfo.availability}</p>
        <ul>
          {personalInfo.targetRegions.map((region) => (
            <li key={region}>{region}</li>
          ))}
        </ul>
        <h3>Contact</h3>
        <p>Email: {personalInfo.email}</p>
        <p>Phone: {personalInfo.phone}</p>
        <p>LinkedIn: {personalInfo.linkedin}</p>
        <p>GitHub: {personalInfo.github}</p>
        <p>Location: {personalInfo.location}</p>
        <p>
          <a href="/resume">Download Resume (PDF)</a>
        </p>
      </section>

      <HeroDev />

      {/* Skills Preview */}
      <section className="section" aria-label="Technical Skills">
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
      <section className="section" style={{ background: 'var(--bg-secondary)' }} aria-label="Featured Projects">
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

      {/* Resume CTA */}
      <section className="section" aria-label="Download Resume">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <SectionHeader
              label="Resume"
              title="Get My Resume"
              subtitle="Dynamically generated from my latest profile data — always up to date."
              showLine={false}
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Link
              href="/resume"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))',
                color: '#fff',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-base)',
                fontWeight: 600,
                letterSpacing: '0.01em',
                transition: 'transform var(--transition-fast), box-shadow var(--transition-base)',
                boxShadow: '0 4px 20px rgba(var(--accent-rgb), 0.3)',
              }}
            >
              <Download style={{ width: 18, height: 18 }} />
              Download Resume
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </>
  );
}
