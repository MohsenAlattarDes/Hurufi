import styles from './EntryCard.module.css';

interface EntryCardProps {
  children: React.ReactNode;
}

export default function EntryCard({ children }: EntryCardProps) {
  return (
    <div className={styles.entryCard}>
      {children}
    </div>
  );
}
