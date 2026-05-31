import { Skill } from '@/data/skills';
import styles from './SkillCard.module.css';

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.name}>{skill.name}</span>
        <div className={styles.level}>
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i < skill.level ? styles.dotFilled : ''}`}
            />
          ))}
        </div>
      </div>
      <span className={styles.category}>{skill.category}</span>
    </div>
  );
}
