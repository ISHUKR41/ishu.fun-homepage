// components/sections/PageLoader/PageLoader.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PageLoader.module.css';

export default function PageLoader({ onComplete }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const minTime = 500;
    const start = Date.now();

    const interval = setInterval(() => {
      setProgress(prev => {
        const elapsed = Date.now() - start;
        const naturalProgress = Math.min((elapsed / minTime) * 100, 95);
        return Math.max(prev, naturalProgress);
      });
    }, 20);

    const handleLoad = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(minTime - elapsed, 0);

      setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setIsLoading(false);
          if (onComplete) onComplete();
        }, 300);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Guarantee exit after 2s max
    const maxTimeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        if (onComplete) onComplete();
      }, 300);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(maxTimeout);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={styles.preloader}
          exit={{ y: '-100vh' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          role="status"
          aria-label="Loading ishu.fun"
        >
          <div className={styles.content}>
            <div className={styles.logo}>
              {'ishu'.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  className={styles.letter}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                className={styles.dot}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >.</motion.span>
              <motion.span
                className={styles.fun}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
              >fun</motion.span>
            </div>

            <div className={styles.progressBar}>
              <motion.div
                className={styles.progressFill}
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
