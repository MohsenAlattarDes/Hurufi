import styles from './Comparison.module.css';

interface ComparisonProps {
  latinText?: string;
  arabicText?: string;
  latinExample?: string;
  arabicExample?: string;
  description?: string;
}

export default function Comparison({
  latinText,
  arabicText,
  latinExample,
  arabicExample,
  description,
}: ComparisonProps) {
  return (
    <div className={styles.comparison}>
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.comparisonGrid}>
        {latinText && (
          <div className={styles.comparisonItem}>
            <div className={styles.label}>Latin</div>
            <div className={styles.example}>{latinText}</div>
            {latinExample && <div className={styles.note}>{latinExample}</div>}
          </div>
        )}
        {arabicText && (
          <div className={styles.comparisonItem}>
            <div className={styles.label}>Arabic</div>
            <div className={`${styles.example} ${styles.arabic}`} lang="ar" dir="rtl">
              {arabicText}
            </div>
            {arabicExample && <div className={styles.note}>{arabicExample}</div>}
          </div>
        )}
      </div>
    </div>
  );
}
