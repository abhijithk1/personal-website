import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/data/projects';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={`${styles.card} ${project.featured ? styles.featured : ''}`}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.tags}>
        {project.tech.map((t) => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
      <div className={styles.links}>
        {project.github && (
          <a
            href={project.github}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className={styles.linkIcon} />
            Source
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className={styles.linkIcon} />
            Live
          </a>
        )}
      </div>
    </div>
  );
}
