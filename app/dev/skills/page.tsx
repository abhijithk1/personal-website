import type { Metadata } from 'next';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';
import SkillCard from '@/components/dev/SkillCard';
import { skills, skillCategories } from '@/data/skills';

export const metadata: Metadata = {
  title: 'Technical Skills — Go, Python, React, Kubernetes, AI Agents',
  description:
    'Technical skills of Abhijith K — proficient in Go (Golang), Python, JavaScript, TypeScript, React, Next.js, Kubernetes, Docker, AWS, CI/CD, Jenkins, ArgoCD, AI Agents, MCP (Model Context Protocol), LLMs, and RAG. Full stack developer with cloud-native expertise.',
  alternates: {
    canonical: 'https://abhijithk.dev/dev/skills',
  },
};

export default function SkillsPage() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              label="Expertise"
              title="Technical Skills"
              subtitle="A comprehensive overview of the technologies, frameworks, and tools I use to build great software."
            />
          </ScrollReveal>

          {skillCategories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <div key={category} style={{ marginBottom: 'var(--space-3xl)' }}>
                <ScrollReveal>
                  <h3
                    style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      marginBottom: 'var(--space-lg)',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {category}
                  </h3>
                </ScrollReveal>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: 'var(--space-md)',
                  }}
                >
                  {categorySkills.map((skill, i) => (
                    <ScrollReveal key={skill.name} delay={i * 50}>
                      <SkillCard skill={skill} />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
