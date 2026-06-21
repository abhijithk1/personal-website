import type { Metadata } from 'next';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';
import BlogPostCard from '@/components/writing/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: 'Blog — Technical Articles on Go, AI, Cloud-Native',
  description:
    'Technical blog posts by Abhijith K on Go (Golang), AI Agents, MCP (Model Context Protocol), cloud-native architecture, Kubernetes, REST APIs, concurrency, and software engineering best practices. Published on Medium.',
  alternates: {
    canonical: 'https://abhijithk.dev/writing/blog',
  },
};

export default function BlogPage() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              label="Blog"
              title="Posts & Articles"
              subtitle="Thoughts, reflections, and explorations published on Medium."
            />
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: 'var(--space-lg)',
            }}
          >
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 80}>
                <BlogPostCard post={post} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
