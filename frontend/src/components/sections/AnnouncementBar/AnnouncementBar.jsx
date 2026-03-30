// components/sections/AnnouncementBar/AnnouncementBar.jsx
import { useState } from 'react';
import { X, Pause, Play } from '@phosphor-icons/react';
import { announcements } from '../../../constants/examCalendar';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import styles from './AnnouncementBar.module.css';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useLocalStorage('announcementDismissed', false);
  const [isPaused, setIsPaused] = useState(false);

  if (dismissed) return null;

  const items = announcements;
  const duplicated = [...items, ...items];

  return (
    <div className={styles.bar} role="region" aria-label="Latest announcements" aria-live="polite">
      <div className={`${styles.track} ${isPaused ? styles.paused : ''}`}>
        {duplicated.map((item, i) => (
          <a
            key={`${item.id}-${i}`}
            href={item.link}
            className={styles.item}
            aria-label={`Announcement: ${item.text}`}
          >
            <span className={styles.text}>{item.text}</span>
            <span className={styles.arrow} aria-hidden="true">→</span>
            <span className={styles.separator} aria-hidden="true">·</span>
          </a>
        ))}
      </div>
      <div className={styles.controls}>
        <button
          className={styles.pauseButton}
          onClick={() => setIsPaused(!isPaused)}
          aria-label={isPaused ? 'Play announcements' : 'Pause announcements'}
          title={isPaused ? 'Play' : 'Pause'}
        >
          {isPaused ? <Play size={14} weight="bold" /> : <Pause size={14} weight="bold" />}
        </button>
        <button
          className={styles.dismiss}
          onClick={() => setDismissed(true)}
          aria-label="Dismiss announcements"
          title="Close"
        >
          <X size={14} weight="bold" />
        </button>
      </div>
    </div>
  );
}
