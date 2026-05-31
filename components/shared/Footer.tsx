import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import styles from './Footer.module.css';

const socials = [
  { href: 'https://linkedin.com/in/abhijith-k-0807', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/abhijithk1', icon: Github, label: 'GitHub' },
  { href: 'mailto:abhijith0807@gmail.com', icon: Mail, label: 'Email' },
  { href: 'tel:+919745932997', icon: Phone, label: 'Phone' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          &copy; {year} Abhijith K. All rights reserved.
        </p>
        <div className={styles.socials}>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className={styles.socialLink}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={social.label}
            >
              <social.icon className={styles.socialIcon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
