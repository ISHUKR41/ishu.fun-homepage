// components/ui/Countdown/CountdownTimer.jsx
// Countdown timer for upcoming exam results
import { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.css';

export default function CountdownTimer({ targetDate, className = '' }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(target) {
    const difference = +new Date(target) - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const { days, hours, minutes, seconds } = timeLeft;

  // If countdown is complete
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    return (
      <div className={`${styles.countdown} ${className}`}>
        <div className={styles.segment}>
          <span className={styles.value}>LIVE</span>
          <span className={styles.label}>Now</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.countdown} ${className}`}>
      {days > 0 && (
        <div className={styles.segment}>
          <span className={styles.value}>{String(days).padStart(2, '0')}</span>
          <span className={styles.label}>Days</span>
        </div>
      )}
      <div className={styles.segment}>
        <span className={styles.value}>{String(hours).padStart(2, '0')}</span>
        <span className={styles.label}>Hours</span>
      </div>
      <div className={styles.segment}>
        <span className={styles.value}>{String(minutes).padStart(2, '0')}</span>
        <span className={styles.label}>Min</span>
      </div>
      <div className={styles.segment}>
        <span className={styles.value}>{String(seconds).padStart(2, '0')}</span>
        <span className={styles.label}>Sec</span>
      </div>
    </div>
  );
}
