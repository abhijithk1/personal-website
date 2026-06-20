import { ArrowRight } from 'lucide-react';
import { Story } from '@/data/stories';
import styles from './StoryCard.module.css';

export default function StoryCard({ story }: { story: Story }) {
  return (
    <div className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.genre}>{story.genre}</span>
        {story.platform && (
          <span className={styles.platform}>{story.platform}</span>
        )}
      </div>
      <h3 className={styles.title}>{story.title}</h3>
      {story.penName && (
        <p className={styles.penName}>Written as <em>{story.penName}</em></p>
      )}
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
