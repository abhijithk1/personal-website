import { Linkedin, Github, Mail, Phone, BookOpen } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import styles from './ContactSection.module.css';

const contacts = [
  {
    label: 'LinkedIn',
    value: 'Abhijith K',
    href: 'https://linkedin.com/in/abhijith-k-0807',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'abhijithk1',
    href: 'https://github.com/abhijithk1',
    icon: Github,
  },
  {
    label: 'Medium',
    value: '@abhijith0807',
    href: 'https://medium.com/@abhijith0807',
    icon: BookOpen,
  },
  {
    label: 'Email',
    value: 'abhijith0807@gmail.com',
    href: 'mailto:abhijith0807@gmail.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+91 9745932997',
    href: 'tel:+919745932997',
    icon: Phone,
  },
];

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            label="Get in Touch"
            title="Let's Connect"
            subtitle="I'm always open to new opportunities, collaborations, and conversations."
          />
        </ScrollReveal>
        <div className={styles.grid}>
          {contacts.map((contact, i) => (
            <ScrollReveal key={contact.label} delay={i * 80}>
              <a
                href={contact.href}
                className={styles.card}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className={styles.iconWrap}>
                  <contact.icon className={styles.icon} />
                </div>
                <div className={styles.info}>
                  <span className={styles.cardLabel}>{contact.label}</span>
                  <span className={styles.cardValue}>{contact.value}</span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
