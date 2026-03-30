// components/sections/FeaturesSection/FeaturesSection.jsx
// Bento grid layout inspired by Linear, Vercel, and Framer
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Lightning, Briefcase, FilePdf, Newspaper,
  CalendarCheck, WhatsappLogo, ArrowRight,
  ShieldCheck, Trophy, Rocket, Globe, Star
} from '@phosphor-icons/react';
import styles from './FeaturesSection.module.css';

const features = [
  {
    id: 'results',
    size: 'large',
    icon: Lightning,
    color: '#6C63FF',
    title: 'Lightning-Fast Results',
    desc: 'Get exam results within 5 minutes of official declaration. JEE, NEET, UPSC, SSC, Railway — all in one place.',
    tags: ['JEE', 'NEET', 'UPSC', 'SSC', 'Railway', '200+ Exams'],
    href: '/results',
    cta: 'View Results',
    stats: { value: '5 min', label: 'Result Speed' },
  },
  {
    id: 'jobs',
    size: 'medium',
    icon: Briefcase,
    color: '#00C896',
    title: 'Govt Job Alerts',
    desc: 'Latest vacancies with one-click apply links. Filter by qualification, state, and department.',
    tags: ['Central Govt', 'State Govt', 'PSU'],
    href: '/jobs',
    cta: 'Browse Jobs',
    stats: { value: '2L+', label: 'Active Jobs' },
  },
  {
    id: 'pdf',
    size: 'medium',
    icon: FilePdf,
    color: '#00D2FF',
    title: '25+ Free PDF Tools',
    desc: 'Merge, compress, convert, OCR, e-sign — all 100% free, browser-based, no account needed.',
    tags: ['Merge', 'Compress', 'OCR', 'E-Sign'],
    href: '/tools',
    cta: 'Try PDF Tools',
    stats: { value: '25+', label: 'Tools Free' },
  },
  {
    id: 'whatsapp',
    size: 'small',
    icon: WhatsappLogo,
    color: '#25D366',
    title: 'WhatsApp Alerts',
    desc: 'Instant notifications directly on WhatsApp.',
    href: '#whatsapp-cta',
    cta: 'Subscribe Now',
  },
  {
    id: 'calendar',
    size: 'small',
    icon: CalendarCheck,
    color: '#FF6B35',
    title: 'Exam Calendar',
    desc: 'Never miss an important date again.',
    href: '/calendar',
    cta: 'View Calendar',
  },
  {
    id: 'news',
    size: 'small',
    icon: Newspaper,
    color: '#FFD700',
    title: 'Education News',
    desc: 'Curated & verified news daily.',
    href: '/news',
    cta: 'Read News',
  },
  {
    id: 'trust',
    size: 'trust',
    icon: ShieldCheck,
    color: '#00C896',
    title: 'Why 50L+ Students Choose Us',
    points: [
      { icon: Lightning, text: 'Fastest result delivery in India' },
      { icon: ShieldCheck, text: '100% free — always, no hidden charges' },
      { icon: Globe, text: 'All India coverage, 200+ exams' },
      { icon: Trophy, text: 'Trusted by toppers & state rankers' },
      { icon: Rocket, text: 'PWA — works like an app, no install' },
      { icon: Star, text: '4.9/5 rating from 50L+ students' },
    ],
  },
];

function FeatureCard({ feat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = feat.icon;

  if (feat.size === 'trust') {
    return (
      <motion.div
        ref={ref}
        className={`${styles.card} ${styles.cardTrust}`}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        style={{ '--feat-color': feat.color }}
      >
        <div className={styles.trustHeader}>
          <ShieldCheck size={24} color={feat.color} weight="duotone" />
          <h3 className={styles.trustTitle}>{feat.title}</h3>
        </div>
        <div className={styles.trustGrid}>
          {feat.points.map((point, i) => {
            const PointIcon = point.icon;
            return (
              <motion.div
                key={i}
                className={styles.trustPoint}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <PointIcon size={15} color={feat.color} weight="duotone" />
                <span>{point.text}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${styles[`card${feat.size.charAt(0).toUpperCase() + feat.size.slice(1)}`]}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{ '--feat-color': feat.color }}
    >
      {/* Glow on hover */}
      <div className={styles.cardGlow} style={{ background: `radial-gradient(ellipse at top left, ${feat.color}15 0%, transparent 60%)` }} />

      {/* Header */}
      <div className={styles.cardHeader}>
        <div className={styles.cardIcon} style={{ background: `${feat.color}15`, color: feat.color }}>
          <Icon size={22} weight="duotone" />
        </div>
        {feat.stats && (
          <div className={styles.cardStat} style={{ color: feat.color }}>
            <span className={styles.cardStatValue}>{feat.stats.value}</span>
            <span className={styles.cardStatLabel}>{feat.stats.label}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{feat.title}</h3>
        <p className={styles.cardDesc}>{feat.desc}</p>

        {feat.tags && (
          <div className={styles.cardTags}>
            {feat.tags.map(tag => (
              <span key={tag} className={styles.tag} style={{ borderColor: `${feat.color}25`, color: feat.color }}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <a href={feat.href} className={styles.cardCta} style={{ color: feat.color }}>
        {feat.cta} <ArrowRight size={15} weight="bold" />
      </a>

      {/* Bottom border accent */}
      <div className={styles.cardAccentBar} style={{ background: `linear-gradient(90deg, ${feat.color}, transparent)` }} />
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.sectionGlow} />

      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="overline">WHAT WE OFFER</span>
          <h2 className="section-title">Everything in One Platform</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Why 50 lakh+ Indian students choose ishu.fun over any other platform
          </p>
        </motion.div>

        <div className={styles.bentoGrid}>
          {features.map((feat, i) => (
            <FeatureCard key={feat.id} feat={feat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
