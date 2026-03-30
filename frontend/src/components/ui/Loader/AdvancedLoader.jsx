// AdvancedLoader.jsx — Professional Loading Animations
import { motion } from 'framer-motion';
import styles from './AdvancedLoader.module.css';

// Dot Wave Loader
export function DotWaveLoader({ color = 'var(--accent-violet)' }) {
  return (
    <div className={styles.dotWave}>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className={styles.dot}
          style={{ backgroundColor: color }}
          animate={{
            y: ['0%', '-100%', '0%'],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Pulse Ring Loader
export function PulseRingLoader({ size = 80, color = 'var(--accent-violet)' }) {
  return (
    <div className={styles.pulseRing} style={{ width: size, height: size }}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={styles.ring}
          style={{ borderColor: color }}
          animate={{
            scale: [0, 1.5],
            opacity: [1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}

// Gradient Spinner
export function GradientSpinner({ size = 60 }) {
  return (
    <div className={styles.gradientSpinner} style={{ width: size, height: size }}>
      <motion.div
        className={styles.spinner}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}

// 3D Cube Loader
export function CubeLoader({ size = 60, color = 'var(--accent-violet)' }) {
  return (
    <div className={styles.cubeLoader} style={{ width: size, height: size }}>
      <div className={styles.cube} style={{ borderColor: color }}>
        <div className={styles.cubeFace} style={{ backgroundColor: color }} />
        <div className={styles.cubeFace} style={{ backgroundColor: color }} />
        <div className={styles.cubeFace} style={{ backgroundColor: color }} />
        <div className={styles.cubeFace} style={{ backgroundColor: color }} />
        <div className={styles.cubeFace} style={{ backgroundColor: color }} />
        <div className={styles.cubeFace} style={{ backgroundColor: color }} />
      </div>
    </div>
  );
}

// Progress Bar Loader
export function ProgressBarLoader({ progress = 0, showPercentage = true }) {
  return (
    <div className={styles.progressBar}>
      <motion.div
        className={styles.progressFill}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
      />
      {showPercentage && (
        <span className={styles.progressText}>{Math.round(progress)}%</span>
      )}
    </div>
  );
}

// Skeleton Loader
export function SkeletonLoader({ width = '100%', height = 20, borderRadius = 4, count = 1 }) {
  return (
    <div className={styles.skeletonContainer}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={styles.skeleton}
          style={{
            width,
            height,
            borderRadius,
            marginBottom: count > 1 ? 8 : 0,
          }}
        />
      ))}
    </div>
  );
}

// Card Skeleton
export function CardSkeleton() {
  return (
    <div className={styles.cardSkeleton}>
      <SkeletonLoader width="100%" height={200} borderRadius={12} />
      <div style={{ padding: '16px' }}>
        <SkeletonLoader width="70%" height={24} borderRadius={4} />
        <SkeletonLoader width="100%" height={16} borderRadius={4} count={2} />
        <SkeletonLoader width="40%" height={16} borderRadius={4} />
      </div>
    </div>
  );
}

// Full Page Loader
export function FullPageLoader({ message = 'Loading...' }) {
  return (
    <motion.div
      className={styles.fullPageLoader}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.loaderContent}>
        <GradientSpinner size={80} />
        <motion.p
          className={styles.loaderMessage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {message}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default {
  DotWave: DotWaveLoader,
  PulseRing: PulseRingLoader,
  GradientSpinner,
  Cube: CubeLoader,
  ProgressBar: ProgressBarLoader,
  Skeleton: SkeletonLoader,
  CardSkeleton,
  FullPage: FullPageLoader,
};
