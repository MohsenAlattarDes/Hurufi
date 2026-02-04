import Link from 'next/link';
import { getRelatedEntries } from '@/data/entries';
import styles from './RelatedEntries.module.css';

interface RelatedEntriesProps {
  relatedSlugs: string[];
}

export default function RelatedEntries({ relatedSlugs }: RelatedEntriesProps) {
  const relatedEntries = getRelatedEntries(relatedSlugs);

  if (relatedEntries.length === 0) {
    return null;
  }

  return (
    <section className={styles.relatedSection}>
      <h2 className={styles.title}>Related</h2>
      <div className={styles.grid}>
        {relatedEntries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/entries/${entry.slug}`}
            className={styles.card}
          >
            <span className={styles.cardTitle}>{entry.title}</span>
            {entry.subtitle && (
              <span className={styles.cardSubtitle}>{entry.subtitle}</span>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
