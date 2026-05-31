import { ArrowRight } from 'lucide-react';
import { Story } from '@/data/stories';
import styles from './StoryCard.module.css';

export default function StoryCard({ story }: { story: Story }) {
  return (
    <div className={styles.card}>
      <span className={styles.genre}>{story.genre}</span>
      <h3 className={styles.title}>{story.title}</h3>
      <p className={styles.excerpt}>{story.excerpt}</p>
      {story.readUrl && (
        <a
          href={story.readUrl}
          className={styles.readLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Story <ArrowRight className={styles.readIcon} />
        </a>
      )}
    </div>
  );
}
