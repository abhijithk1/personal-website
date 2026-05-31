import type { Metadata } from 'next';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';
import NovelShowcase from '@/components/writing/NovelShowcase';
import StoryCard from '@/components/writing/StoryCard';
import { stories } from '@/data/stories';

export const metadata: Metadata = {
  title: 'Stories',
  description: 'Stories, novels, and creative writing by Abhijith K.',
};

export default function StoriesPage() {
  const novel = stories.find((s) => s.isNovel);
  const otherStories = stories.filter((s) => !s.isNovel);

  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              label="Creative Writing"
              title="Stories & Novels"
              subtitle="Words that explore the human experience — from short stories to a novel in the making."
            />
          </ScrollReveal>

          {novel && (
            <div style={{ marginBottom: 'var(--space-3xl)' }}>
              <ScrollReveal>
                <NovelShowcase story={novel} />
              </ScrollReveal>
            </div>
          )}

          {otherStories.length > 0 && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: 'var(--space-lg)',
              }}
            >
              {otherStories.map((story, i) => (
                <ScrollReveal key={story.title} delay={i * 80}>
                  <StoryCard story={story} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
