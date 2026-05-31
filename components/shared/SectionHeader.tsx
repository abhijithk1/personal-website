import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  showLine?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  showLine = true,
}: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      {label && (
        <p className={styles.label}>
          <span className={styles.labelDot} />
          {label}
        </p>
      )}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {showLine && <div className={styles.line} />}
    </div>
  );
}
