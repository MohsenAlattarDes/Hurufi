import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <Link href="/" className={styles.logo}>
          Hurufi
        </Link>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            Index
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/sources" className={styles.link}>
            Sources
          </Link>
        </div>
      </div>
    </nav>
  );
}
