// components/sections/AnnouncementBar/AnnouncementBar.jsx
import { useState } from 'react';
import { X } from '@phosphor-icons/react';
import { announcements } from '../../../constants/examCalendar';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import styles from './AnnouncementBar.module.css';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useLocalStorage('announcementDismissed', false);

  if (dismissed) return null;

  const items = announcements;
  const duplicated = [...items, ...items];

  return (
    <div className={styles.bar} role="marquee" aria-label="Latest announcements">
      <div className={styles.track}>
        {duplicated.map((item, i) => (
          <a key={`${item.id}-${i}`} href={item.link} className={styles.item}>
            <span className={styles.text}>{item.text}</span>
            <span className={styles.arrow}>→</span>
            <span className={styles.separator}>·</span>
          </a>
        ))}
      </div>
      <button
        className={styles.dismiss}
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcements"
      >
        <X size={14} weight="bold" />
      </button>
    </div>
  );
}
