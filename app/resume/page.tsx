import type { Metadata } from 'next';
import { RefreshCw, FileText, Zap } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import ResumeDownloadButton from '@/components/dev/ResumeDownloadButton';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Resume — Download PDF',
  description:
    'Download the professional resume of Abhijith K — Software Developer at IBM with 4+ years of experience in Go (Golang), Python, Kubernetes, Docker, AI Agents, and cloud-native technologies. Dynamically generated from live profile data.',
  alternates: {
    canonical: 'https://abhijithk.dev/resume',
  },
};

export default function ResumePage() {
  return (
    <div className={styles.resumePage}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            Always Up to Date
          </span>
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <h1 className={styles.title}>
            Download My Resume
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className={styles.subtitle}>
            This resume is dynamically generated from my latest profile data —
            skills, experience, projects, and certifications are always current.
            No stale PDFs, ever.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className={styles.downloadWrap}>
            <ResumeDownloadButton />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className={styles.features}>
            <div className={styles.featureCard}>
              <RefreshCw className={styles.featureIcon} />
              <p className={styles.featureTitle}>Live Data</p>
              <p className={styles.featureDesc}>
                Pulls directly from my website data — update once, resume updates everywhere.
              </p>
            </div>
            <div className={styles.featureCard}>
              <FileText className={styles.featureIcon} />
              <p className={styles.featureTitle}>Professional Format</p>
              <p className={styles.featureDesc}>
                Clean, ATS-friendly layout with Inter font, structured sections, and consistent styling.
              </p>
            </div>
            <div className={styles.featureCard}>
              <Zap className={styles.featureIcon} />
              <p className={styles.featureTitle}>Instant Generation</p>
              <p className={styles.featureDesc}>
                Generated client-side in seconds — no server round trips, no waiting.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <p className={styles.infoNote}>
            The PDF is generated in your browser using React PDF.
            Your data never leaves your device during the generation process.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
