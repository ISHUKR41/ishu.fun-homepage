// components/sections/TrustBadges/TrustBadges.jsx
import { ShieldCheck, LockKey, Money, Globe, Certificate } from '@phosphor-icons/react';
import styles from './TrustBadges.module.css';

const badges = [
  { icon: ShieldCheck, text: '100% Secure & Safe', color: 'var(--accent-emerald)' },
  { icon: LockKey, text: 'No Password Required', color: 'var(--accent-cyan)' },
  { icon: Money, text: 'Always Free', color: 'var(--accent-gold)' },
  { icon: Globe, text: 'All India Coverage', color: 'var(--accent-saffron)' },
  { icon: Certificate, text: 'Official Sources Only', color: 'var(--accent-violet)' },
];

export default function TrustBadges() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {badges.map((b, i) => (
          <div key={i} className={styles.badge}>
            <b.icon size={22} weight="duotone" style={{ color: b.color }} />
            <span>{b.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
