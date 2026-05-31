import { Experience } from '@/data/experience';
import styles from './TimelineItem.module.css';

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

export default function TimelineItem({ experience, isLast }: TimelineItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.line}>
        <div className={styles.dot} />
        <div className={`${styles.connector} ${isLast ? styles.connectorHidden : ''}`} />
      </div>
      <div className={styles.card}>
        <h3 className={styles.role}>{experience.role}</h3>
        <p className={styles.company}>{experience.company}</p>
        <p className={styles.period}>{experience.period}</p>
        <p className={styles.description}>{experience.description}</p>
        {experience.highlights.length > 0 && (
          <div className={styles.highlights}>
            {experience.highlights.map((h, i) => (
              <div key={i} className={styles.highlight}>
                <span className={styles.highlightDot} />
                <span>{h}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
