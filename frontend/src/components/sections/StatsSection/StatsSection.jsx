// components/sections/StatsSection/StatsSection.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Certificate, ShieldCheck, Bell } from '@phosphor-icons/react';
import { stats } from '../../../constants/stats';
import { useCountUp } from '../../../hooks/useCountUp';
import { formatIndian } from '../../../utils/formatNumber';
import styles from './StatsSection.module.css';

const iconMap = { Users, Certificate, ShieldCheck, Bell };

function StatCard({ stat, index }) {
  const { count, ref } = useCountUp(stat.number, 2500);
  const Icon = iconMap[stat.icon];

  const displayValue = stat.suffix === '%'
    ? `${count.toFixed(1)}${stat.suffix}`
    : `${formatIndian(Math.floor(count))}${stat.suffix}`;

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -4, borderColor: 'rgba(108,99,255,0.3)' }}
    >
      <div className={styles.iconWrap} style={{ color: stat.color }}>
        {Icon && <Icon size={28} weight="duotone" />}
      </div>
      <div className={styles.number} style={{
        background: `linear-gradient(90deg, ${stat.color}, var(--accent-cyan))`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        {displayValue}
      </div>
      <div className={styles.label}>{stat.label}</div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className={styles.section} id="stats">
      <div className={styles.bgGlow} />
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="overline">BY THE NUMBERS</span>
          <h2 className="section-title">Trusted by Millions of Indian Students</h2>
        </motion.div>
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
