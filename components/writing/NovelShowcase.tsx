import { Story } from '@/data/stories';
import styles from './NovelShowcase.module.css';

export default function NovelShowcase({ story }: { story: Story }) {
  return (
    <div className={styles.showcase}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <h3 className={styles.title}>{story.title}</h3>
          <span className={styles.genre}>{story.genre}</span>
        </div>
        {story.isWip && (
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            Work in Progress
          </span>
        )}
      </div>
      <p className={styles.synopsis}>{story.excerpt}</p>
      {story.wipStatus && (
        <p className={styles.status}>{story.wipStatus}</p>
      )}
    </div>
  );
}
