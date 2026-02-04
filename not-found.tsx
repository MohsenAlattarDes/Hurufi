import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <h1>Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link href="/">Return to Index</Link>
      </div>
    </div>
  );
}
