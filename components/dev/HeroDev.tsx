import Link from 'next/link';
import { ArrowRight, Mail, Download } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import styles from './HeroDev.module.css';

export default function HeroDev() {
  return (
    <section className={styles.hero} aria-label="Developer Introduction">
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <p className={styles.greeting}>Hello, I&apos;m</p>
          <h1 className={styles.name}>{personalInfo.name}</h1>
          <div className={styles.titleRow}>
            <span className={styles.titleLabel}>I&apos;m a</span>
            <span className={styles.titleAccent}>{personalInfo.titles.dev}</span>
          </div>
          <p className={styles.bio}>{personalInfo.bio.dev}</p>
          <div className={styles.actions}>
            <Link href="/dev/projects" className={styles.btnPrimary}>
              View Projects
              <ArrowRight className={styles.btnIcon} />
            </Link>
            <Link href="/resume" className={styles.btnSecondary}>
              <Download className={styles.btnIcon} />
              Resume
            </Link>
            <Link href="/contact" className={styles.btnSecondary}>
              <Mail className={styles.btnIcon} />
              Contact Me
            </Link>
          </div>
        </div>
        <div className={styles.avatarWrap}>
          <div className={styles.avatar} aria-label="Profile photo placeholder">
            AK
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
