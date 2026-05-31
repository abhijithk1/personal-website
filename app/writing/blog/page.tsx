import type { Metadata } from 'next';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';
import BlogPostCard from '@/components/writing/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog posts and articles by Abhijith K on life, creativity, and personal growth.',
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
