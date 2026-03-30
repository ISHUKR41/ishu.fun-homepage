// components/sections/StatsSection/StatsSection.jsx
// Premium stats with GSAP ScrollTrigger + animated number counters
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Certificate, ShieldCheck, Bell, Lightning, Globe, Star, Rocket } from '@phosphor-icons/react';
import { stats } from '../../../constants/stats';
import { useCountUp } from '../../../hooks/useCountUp';
import { formatIndian } from '../../../utils/formatNumber';
import styles from './StatsSection.module.css';

const iconMap = { Users, Certificate, ShieldCheck, Bell };

const extraStats = [
  { icon: Lightning, label: 'Result Speed', value: '< 5min', color: '#6C63FF', desc: 'After official declaration' },
  { icon: Globe, label: 'States Covered', value: '28+', color: '#00D2FF', desc: 'Including all UTs' },
  { icon: Star, label: 'User Rating', value: '4.9/5', color: '#FFD700', desc: 'From 50L+ reviews' },
  { icon: Rocket, label: 'PDF Tools', value: '25+', color: '#00C896', desc: '100% free, no signup' },
];

function StatCard({ stat, index }) {
  const { count, ref } = useCountUp(stat.number, 2200);
  const Icon = iconMap[stat.icon];

  const displayValue = stat.suffix === '%'
    ? `${count.toFixed(1)}${stat.suffix}`
    : `${formatIndian(Math.floor(count))}${stat.suffix}`;

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardGlow} style={{ background: `radial-gradient(ellipse, ${stat.color}18 0%, transparent 70%)` }} />

        <div className={styles.iconArea}>
          <div className={styles.iconWrap} style={{ background: `${stat.color}15`, color: stat.color }}>
            {Icon && <Icon size={26} weight="duotone" />}
          </div>
          <div className={styles.iconOrbit} style={{ borderColor: `${stat.color}20` }}>
            <div className={styles.orbitDot} style={{ background: stat.color }} />
          </div>
        </div>

        <div
          className={styles.number}
          style={{
            background: `linear-gradient(135deg, ${stat.color} 0%, var(--accent-cyan) 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {displayValue}
        </div>
        <div className={styles.label}>{stat.label}</div>
        <div className={styles.sublabel}>{stat.sublabel}</div>
      </div>
    </motion.div>
  );
}

function ExtraStatRow() {
  return (
    <div className={styles.extraGrid}>
      {extraStats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={i}
            className={styles.extraCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.1 }}
            style={{ '--e-color': stat.color }}
          >
            <div className={styles.extraIcon} style={{ color: stat.color, background: `${stat.color}12` }}>
              <Icon size={18} weight="duotone" />
            </div>
            <div>
              <div className={styles.extraValue} style={{ color: stat.color }}>{stat.value}</div>
              <div className={styles.extraLabel}>{stat.label}</div>
              <div className={styles.extraDesc}>{stat.desc}</div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className={styles.section} id="stats">
      <div className={styles.bgGrid} />
      <div className={styles.bgGlow} />

      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="overline">BY THE NUMBERS</span>
          <h2 className="section-title">Trusted by Millions Across India</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Real numbers. No fluff. This is why India's top students pick ishu.fun.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} index={i} />
          ))}
        </div>

        <ExtraStatRow />
      </div>
    </section>
  );
}
