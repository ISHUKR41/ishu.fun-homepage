// components/ui/Badge/Badge.jsx
import styles from './Badge.module.css';

const variants = {
  live: styles.live,
  new: styles.new,
  hot: styles.hot,
  popular: styles.popular,
  upcoming: styles.upcoming,
};

export default function Badge({ children, variant = 'new', pulse = false, className = '' }) {
  return (
    <span className={`${styles.badge} ${variants[variant] || ''} ${pulse ? styles.pulse : ''} ${className}`}>
      {pulse && <span className={styles.pulseDot} />}
      {children}
    </span>
  );
}
