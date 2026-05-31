'use client';

import Link from 'next/link';
import { Code, PenLine } from 'lucide-react';
import { useProfile } from '@/context/ProfileContext';
import styles from './ProfilePill.module.css';

export default function ProfilePill() {
  const { profile } = useProfile();

  const devHref = '/';
  const writingHref = '/writing';

  return (
    <div className={styles.pill} role="tablist" aria-label="Profile switcher">
      <Link
        href={devHref}
        className={`${styles.option} ${profile === 'dev' ? styles.active : ''}`}
        role="tab"
        aria-selected={profile === 'dev'}
      >
        <Code className={styles.icon} />
        Developer
      </Link>
      <Link
        href={writingHref}
        className={`${styles.option} ${profile === 'writing' ? styles.active : ''}`}
        role="tab"
        aria-selected={profile === 'writing'}
      >
        <PenLine className={styles.icon} />
        Writing
      </Link>
    </div>
  );
}
