import styles from './page.module.css';

export const metadata = {
  title: 'About — Hurufi',
  description: 'About Hurufi, a visual guide to Arabic typography',
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>About</h1>
        </header>
        
        <div className={styles.content}>
          <p>
            Hurufi is a visual guide to understanding Arabic typography as a system. 
            It is designed for non-Arabic-speaking designers who want to work with 
            Arabic text thoughtfully and with confidence.
          </p>
          
          <p>
            The site teaches through visual explanation, not linguistic instruction. 
            Each entry covers one concept, demonstrating how Arabic typography behaves 
            rather than explaining grammatical rules.
          </p>
          
          <p>
            Typography is the interface. There are no decorative elements, no unnecessary 
            interactions, and no marketing language.
          </p>
          
          <p>
            All entries are accessible directly via URL. You can read them in any order. 
            There are no prerequisites, no lessons, and no tests.
          </p>
        </div>
      </div>
    </div>
  );
}
