// components/ui/ScrollProgress/ScrollProgress.jsx
import { useScrollProgress } from '../../../hooks/useScrollProgress';
import styles from './ScrollProgress.module.css';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className={styles.container} role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
      <div className={styles.bar} style={{ width: `${progress}%` }} />
    </div>
  );
}
