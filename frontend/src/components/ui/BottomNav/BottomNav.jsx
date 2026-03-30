// components/ui/BottomNav/BottomNav.jsx
import { House, ListChecks, Toolbox, Newspaper, User } from '@phosphor-icons/react';
import styles from './BottomNav.module.css';

const items = [
  { icon: House, label: 'Home', href: '/', active: true },
  { icon: ListChecks, label: 'Results', href: '/results' },
  { icon: Toolbox, label: 'Tools', href: '/tools' },
  { icon: Newspaper, label: 'News', href: '/news' },
  { icon: User, label: 'Profile', href: '/profile' },
];

export default function BottomNav() {
  return (
    <nav className={styles.nav} aria-label="Mobile navigation">
      {items.map((item) => (
        <a key={item.label} href={item.href} className={`${styles.item} ${item.active ? styles.active : ''}`}>
          {item.active && <span className={styles.activeIndicator} />}
          <item.icon size={22} weight={item.active ? 'fill' : 'regular'} />
          <span className={styles.label}>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
