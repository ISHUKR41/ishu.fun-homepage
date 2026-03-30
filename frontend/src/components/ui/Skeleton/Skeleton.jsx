// components/ui/Skeleton/Skeleton.jsx
// Skeleton loading placeholders for content

import styles from './Skeleton.module.css';

export default function Skeleton({
  variant = 'text', // text, circular, rectangular, card
  width = '100%',
  height,
  count = 1,
  animation = 'pulse', // pulse, wave, none
  className = '',
}) {
  const skeletons = Array.from({ length: count });

  const getHeight = () => {
    if (height) return height;
    switch (variant) {
      case 'text':
        return '1.2em';
      case 'circular':
        return '40px';
      case 'rectangular':
        return '200px';
      case 'card':
        return '300px';
      default:
        return '1.2em';
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'circular':
        return styles.circular;
      case 'rectangular':
        return styles.rectangular;
      case 'card':
        return styles.card;
      default:
        return styles.text;
    }
  };

  return (
    <div className={styles.container}>
      {skeletons.map((_, i) => (
        <div
          key={i}
          className={`${styles.skeleton} ${getVariantStyles()} ${styles[animation]} ${className}`}
          style={{
            width,
            height: getHeight(),
          }}
        />
      ))}
    </div>
  );
}

// Pre-built skeleton components for common patterns
export function SkeletonCard() {
  return (
    <div className={styles.skeletonCard}>
      <Skeleton variant="rectangular" height="200px" animation="wave" />
      <div className={styles.skeletonCardBody}>
        <Skeleton variant="text" width="60%" height="24px" />
        <Skeleton variant="text" width="90%" count={2} />
        <Skeleton variant="text" width="80%" />
      </div>
    </div>
  );
}

export function SkeletonText({ lines = 3 }) {
  return (
    <div className={styles.skeletonText}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          width={i === lines - 1 ? '70%' : '100%'}
        />
      ))}
    </div>
  );
}

export function SkeletonAvatar({ size = '40px' }) {
  return (
    <Skeleton
      variant="circular"
      width={size}
      height={size}
      animation="pulse"
    />
  );
}

export function SkeletonProfile() {
  return (
    <div className={styles.skeletonProfile}>
      <SkeletonAvatar size="80px" />
      <div className={styles.skeletonProfileInfo}>
        <Skeleton variant="text" width="150px" height="24px" />
        <Skeleton variant="text" width="200px" />
      </div>
    </div>
  );
}

export function SkeletonList({ count = 3 }) {
  return (
    <div className={styles.skeletonList}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles.skeletonListItem}>
          <SkeletonAvatar size="48px" />
          <div className={styles.skeletonListContent}>
            <Skeleton variant="text" width="40%" height="20px" />
            <Skeleton variant="text" width="80%" />
          </div>
        </div>
      ))}
    </div>
  );
}
