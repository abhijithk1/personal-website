import { Education } from '@/data/experience';
import styles from './EducationItem.module.css';

interface EducationItemProps {
  education: Education;
  isLast: boolean;
}

export default function EducationItem({ education, isLast }: EducationItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.line}>
        <div className={styles.dot} />
        <div className={`${styles.connector} ${isLast ? styles.connectorHidden : ''}`} />
      </div>
      <div className={styles.card}>
        <h3 className={styles.degree}>{education.degree}</h3>
        <p className={styles.institution}>{education.institution}</p>
        <p className={styles.field}>{education.field}</p>
        <div className={styles.meta}>
          <span className={styles.period}>{education.period}</span>
          <span className={styles.grade}>{education.grade}</span>
        </div>
        <p className={styles.location}>{education.location}</p>
      </div>
    </div>
  );
}
