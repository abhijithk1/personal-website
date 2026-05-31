import Link from 'next/link';
import { BookOpen, Mail } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import styles from './HeroWriter.module.css';

export default function HeroWriter() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <p className={styles.greeting}>Welcome to my creative space</p>
          <h1 className={styles.name}>{personalInfo.name}</h1>
          <div className={styles.titleRow}>
            <span className={styles.titleAccent}>{personalInfo.titles.writing}</span>
          </div>
          <p className={styles.bio}>{personalInfo.bio.writing}</p>
          <div className={styles.actions}>
            <Link href="/writing/stories" className={styles.btnPrimary}>
              <BookOpen className={styles.btnIcon} />
              Read My Stories
            </Link>
            <Link href="/contact" className={styles.btnSecondary}>
              <Mail className={styles.btnIcon} />
              Get in Touch
            </Link>
          </div>
        </div>
        <div className={styles.quoteBlock}>
          <span className={styles.quoteSymbol}>&ldquo;</span>
          <p className={styles.quoteText}>
            There is no greater agony than bearing an untold story inside you.
          </p>
          <span className={styles.quoteAuthor}>— Maya Angelou</span>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Explore</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
