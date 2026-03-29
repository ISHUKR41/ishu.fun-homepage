// components/ui/BottomNav/BottomNav.jsx
import { House, ClipboardText, Toolbox, Newspaper, User } from '@phosphor-icons/react';
import { useIsMobile } from '../../../hooks/useMediaQuery';
import styles from './BottomNav.module.css';

const items = [
  { icon: House, label: 'Home', href: '/' },
  { icon: ClipboardText, label: 'Results', href: '/results' },
  { icon: Toolbox, label: 'Tools', href: '/tools' },
  { icon: Newspaper, label: 'News', href: '/news' },
  { icon: User, label: 'Profile', href: '/profile' },
];

export default function BottomNav() {
  const isMobile = useIsMobile();
  if (!isMobile) return null;

  return (
    <nav className={styles.nav} aria-label="Bottom navigation">
      {items.map((item, i) => (
        <a key={item.label} href={item.href} className={`${styles.item} ${i === 0 ? styles.active : ''}`}>
          <item.icon size={22} weight={i === 0 ? 'fill' : 'regular'} />
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
