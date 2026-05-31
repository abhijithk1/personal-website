import { ExternalLink } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';
import styles from './BlogPostCard.module.css';

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <div className={styles.card}>
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.excerpt}>{post.excerpt}</p>
      <div className={styles.footer}>
        <span className={styles.date}>{post.publishDate}</span>
        <a
          href={post.readUrl}
          className={styles.readLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read on Medium <ExternalLink className={styles.readIcon} />
        </a>
      </div>
    </div>
  );
}
