import { ExternalLink } from 'lucide-react';
import { Certification } from '@/data/certifications';
import styles from './CertCard.module.css';

export default function CertCard({ cert }: { cert: Certification }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{cert.name}</h3>
      <p className={styles.issuer}>{cert.issuer}</p>
      <div className={styles.meta}>
        <span className={styles.date}>{cert.date}</span>
        {cert.verifyUrl && cert.verifyUrl !== '#' && (
          <a
            href={cert.verifyUrl}
            className={styles.verify}
            target="_blank"
            rel="noopener noreferrer"
          >
            Verify
            <ExternalLink className={styles.verifyIcon} />
          </a>
        )}
      </div>
    </div>
  );
}
