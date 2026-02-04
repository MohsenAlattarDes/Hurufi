import styles from './LetterForms.module.css';

interface LetterForm {
  form: string;
  example: string;
  label: string;
}

interface LetterFormsProps {
  items: LetterForm[];
}

export default function LetterForms({ items }: LetterFormsProps) {
  return (
    <div className={styles.letterForms}>
      <div className={styles.formsGrid}>
        {items.map((item, index) => (
          <div key={index} className={styles.formItem}>
            <div className={styles.formExample} lang="ar" dir="rtl">
              {item.example}
            </div>
            <div className={styles.formLabel}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
