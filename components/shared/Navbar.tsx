'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useProfile } from '@/context/ProfileContext';
import ProfilePill from './ProfilePill';
import styles from './Navbar.module.css';

const devLinks = [
  { href: '/', label: 'Home' },
  { href: '/dev/skills', label: 'Skills' },
  { href: '/dev/projects', label: 'Projects' },
  { href: '/dev/experience', label: 'Experience' },
  { href: '/dev/certifications', label: 'Certifications' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

const writingLinks = [
  { href: '/writing', label: 'Home' },
  { href: '/writing/stories', label: 'Stories' },
  { href: '/writing/blog', label: 'Blog' },
  { href: '/writing/hobbies', label: 'Hobbies' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { profile } = useProfile();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = profile === 'writing' ? writingLinks : devLinks;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href === '/writing' && pathname === '/writing') return true;
    if (href !== '/' && href !== '/writing' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navInner}>
          <Link href={profile === 'writing' ? '/writing' : '/'} className={styles.logo}>
            Abhijith<span className={styles.logoAccent}>.</span>
          </Link>

          <div className={styles.links}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${isActive(link.href) ? styles.linkActive : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.right}>
            <div className={styles.desktopPill}>
              <ProfilePill />
            </div>
            <button
              className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.mobileLink} ${isActive(link.href) ? styles.mobileLinkActive : ''}`}
          >
            {link.label}
          </Link>
        ))}
        <div className={styles.mobilePill}>
          <ProfilePill />
        </div>
      </div>
    </>
  );
}
