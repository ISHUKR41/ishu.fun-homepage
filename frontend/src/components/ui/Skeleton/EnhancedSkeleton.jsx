// EnhancedSkeleton.jsx — Professional Skeleton Loader with Multiple Variants
import { motion } from 'framer-motion';
import styles from './EnhancedSkeleton.module.css';

/**
 * Enhanced Skeleton Loader Component
 * Provides various skeleton types for different content layouts
 */
export default function EnhancedSkeleton({
  variant = 'text',
  width = '100%',
  height,
  count = 1,
  className = '',
  animate = true,
  style = {}
}) {
  const skeletonVariants = {
    hidden: { opacity: 0.5 },
    visible: {
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 1.2,
        ease: 'easeInOut'
      }
    }
  };

  const getSkeletonHeight = () => {
    if (height) return height;

    switch (variant) {
      case 'text':
        return '1rem';
      case 'title':
        return '2rem';
      case 'avatar':
        return '50px';
      case 'card':
        return '200px';
      case 'image':
        return '300px';
      case 'button':
        return '40px';
      default:
        return '1rem';
    }
  };

  const getSkeletonClass = () => {
    switch (variant) {
      case 'circle':
      case 'avatar':
        return styles.circle;
      case 'card':
        return styles.card;
      default:
        return styles.rectangle;
    }
  };

  const skeletonStyle = {
    width,
    height: getSkeletonHeight(),
    ...style
  };

  return (
    <div className={`${styles.container} ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className={`${styles.skeleton} ${getSkeletonClass()}`}
          style={skeletonStyle}
          variants={animate ? skeletonVariants : {}}
          initial={animate ? 'hidden' : false}
          animate={animate ? 'visible' : false}
        />
      ))}
    </div>
  );
}

/**
 * Card Skeleton - Complete card layout with image, title, and text
 */
export function SkeletonCard({ className = '' }) {
  return (
    <div className={`${styles.cardSkeleton} ${className}`}>
      <EnhancedSkeleton variant="image" height="200px" />
      <div className={styles.cardContent}>
        <EnhancedSkeleton variant="title" width="80%" />
        <EnhancedSkeleton variant="text" count={3} />
        <div className={styles.cardFooter}>
          <EnhancedSkeleton variant="avatar" width="40px" />
          <EnhancedSkeleton variant="text" width="60%" />
        </div>
      </div>
    </div>
  );
}

/**
 * Profile Skeleton - User profile layout
 */
export function SkeletonProfile({ className = '' }) {
  return (
    <div className={`${styles.profileSkeleton} ${className}`}>
      <EnhancedSkeleton variant="circle" width="100px" height="100px" />
      <EnhancedSkeleton variant="title" width="200px" />
      <EnhancedSkeleton variant="text" width="150px" />
      <EnhancedSkeleton variant="text" count={3} width="100%" />
    </div>
  );
}

/**
 * List Skeleton - List item layout
 */
export function SkeletonList({ items = 5, className = '' }) {
  return (
    <div className={`${styles.listSkeleton} ${className}`}>
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className={styles.listItem}>
          <EnhancedSkeleton variant="avatar" width="50px" height="50px" />
          <div className={styles.listContent}>
            <EnhancedSkeleton variant="text" width="70%" />
            <EnhancedSkeleton variant="text" width="50%" />
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Table Skeleton - Data table layout
 */
export function SkeletonTable({ rows = 5, columns = 4, className = '' }) {
  return (
    <div className={`${styles.tableSkeleton} ${className}`}>
      <div className={styles.tableHeader}>
        {Array.from({ length: columns }).map((_, index) => (
          <EnhancedSkeleton key={index} variant="text" width="100%" />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className={styles.tableRow}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <EnhancedSkeleton key={colIndex} variant="text" width="100%" />
          ))}
        </div>
      ))}
    </div>
  );
}

/**
 * Dashboard Skeleton - Complete dashboard layout
 */
export function SkeletonDashboard({ className = '' }) {
  return (
    <div className={`${styles.dashboardSkeleton} ${className}`}>
      <div className={styles.dashboardHeader}>
        <EnhancedSkeleton variant="title" width="300px" />
        <EnhancedSkeleton variant="button" width="150px" />
      </div>
      <div className={styles.dashboardStats}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className={styles.statCard}>
            <EnhancedSkeleton variant="text" width="60%" />
            <EnhancedSkeleton variant="title" width="100px" />
          </div>
        ))}
      </div>
      <div className={styles.dashboardContent}>
        <div className={styles.dashboardMain}>
          <EnhancedSkeleton variant="card" height="400px" />
        </div>
        <div className={styles.dashboardSidebar}>
          <SkeletonList items={5} />
        </div>
      </div>
    </div>
  );
}
