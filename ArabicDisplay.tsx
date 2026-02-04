import styles from './ArabicDisplay.module.css';

interface ArabicDisplayProps {
  text: string;
  description?: string;
  size?: 'normal' | 'large' | 'display';
}

export default function ArabicDisplay({ 
  text, 
  description, 
  size = 'normal' 
}: ArabicDisplayProps) {
  const sizeClass = size === 'large' ? 'arabic-large' : size === 'display' ? 'arabic-display' : '';
  
  return (
    <div className={styles.arabicDisplayContainer}>
      <div 
        className={`${styles.arabicText} ${sizeClass}`} 
        lang="ar" 
        dir="rtl"
      >
        {text}
      </div>
      {description && (
        <div className={styles.description}>{description}</div>
      )}
    </div>
  );
}
