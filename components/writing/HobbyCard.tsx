import { Hobby } from '@/data/hobbies';
import styles from './HobbyCard.module.css';

export default function HobbyCard({ hobby }: { hobby: Hobby }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{hobby.name}</h3>
      <p className={styles.description}>{hobby.description}</p>
    </div>
  );
}
