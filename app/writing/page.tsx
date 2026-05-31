import HeroWriter from '@/components/writing/HeroWriter';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';
import NovelShowcase from '@/components/writing/NovelShowcase';
import StoryCard from '@/components/writing/StoryCard';
import BlogPostCard from '@/components/writing/BlogPostCard';
import ContactSection from '@/components/shared/ContactSection';
import { stories } from '@/data/stories';
import { blogPosts } from '@/data/blogPosts';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function WritingHomePage() {
  const novel = stories.find((s) => s.isNovel);
  const otherStories = stories.filter((s) => !s.isNovel);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <HeroWriter />

      {/* Novel Showcase */}
      {novel && (
        <section className="section">
          <div className="container">
            <ScrollReveal>
              <SectionHeader
                label="Featured Work"
                title="Current Novel"
                subtitle="My debut novel — a work in progress."
              />
            </ScrollReveal>
            <ScrollReveal>
              <NovelShowcase story={novel} />
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Stories */}
      {otherStories.length > 0 && (
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <ScrollReveal>
              <SectionHeader
                label="Stories"
                title="Short Stories & Writing"
                subtitle="Explorations in fiction, from quick tales to longer narratives."
              />
            </ScrollReveal>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 'var(--space-lg)',
              marginBottom: 'var(--space-xl)',
            }}>
              {otherStories.map((story, i) => (
                <ScrollReveal key={story.title} delay={i * 80}>
                  <StoryCard story={story} />
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <Link
                href="/writing/stories"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--accent)',
                }}
              >
                View All Stories <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="section">
          <div className="container">
            <ScrollReveal>
              <SectionHeader
                label="Blog"
                title="Latest Posts"
                subtitle="Thoughts, reflections, and stories beyond code."
              />
            </ScrollReveal>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: 'var(--space-lg)',
              marginBottom: 'var(--space-xl)',
            }}>
              {recentPosts.map((post, i) => (
                <ScrollReveal key={post.title} delay={i * 80}>
                  <BlogPostCard post={post} />
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <Link
                href="/writing/blog"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--accent)',
                }}
              >
                View All Posts <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      <ContactSection />
    </>
  );
}
