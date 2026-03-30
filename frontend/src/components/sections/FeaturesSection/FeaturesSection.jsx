// components/sections/FeaturesSection/FeaturesSection.jsx
import { motion } from 'framer-motion';
import { Lightning, Briefcase, FilePdf, Newspaper, CalendarCheck, WhatsappLogo, ArrowRight } from '@phosphor-icons/react';
import { services } from '../../../constants/services';
import styles from './FeaturesSection.module.css';

const iconMap = { Lightning, Briefcase, FilePdf, Newspaper, CalendarCheck, WhatsappLogo };

function FeatureVisual({ service, index }) {
  return (
    <div className={styles.visual}>
      <div className={styles.mockupWindow} style={{ '--accent': service.color }}>
        <div className={styles.windowBar}>
          <div className={styles.windowDots}>
            <span style={{ background: '#FF5F57' }} />
            <span style={{ background: '#FEBC2E' }} />
            <span style={{ background: '#28C840' }} />
          </div>
          <div className={styles.windowUrl}>
            <span>ishu.fun/{service.ctaLink?.split('/')[1] || 'results'}</span>
          </div>
        </div>
        <div className={styles.windowContent}>
          {/* Mini result-like cards inside */}
          {[1, 2, 3].map(j => (
            <div key={j} className={styles.miniCard} style={{ animationDelay: `${j * 0.15}s` }}>
              <div className={styles.miniCardIcon} style={{ background: `${service.color}18`, color: service.color }}>
                {iconMap[service.icon] && (() => { const I = iconMap[service.icon]; return <I size={16} weight="duotone" />; })()}
              </div>
              <div className={styles.miniCardLines}>
                <div className={styles.miniLine} style={{ width: `${60 + j * 10}%`, background: `${service.color}25` }} />
                <div className={styles.miniLine} style={{ width: `${40 + j * 10}%` }} />
              </div>
              <div className={styles.miniCardBadge} style={{ background: `${service.color}15`, color: service.color }}>
                {j === 1 ? 'NEW' : j === 2 ? 'LIVE' : 'HOT'}
              </div>
            </div>
          ))}
          {/* Animated progress bar */}
          <div className={styles.miniProgress}>
            <div className={styles.miniProgressFill} style={{ background: service.color }} />
          </div>
        </div>
      </div>
      {/* Decorative glow */}
      <div className={styles.visualGlow} style={{ background: `radial-gradient(ellipse, ${service.color}20 0%, transparent 70%)` }} />
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className={styles.section} id="features">
      {/* Section glow decoration */}
      <div className={styles.sectionGlow} />

      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="overline">WHAT WE OFFER</span>
          <h2 className="section-title">Everything You Need in One Platform</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Why 50 lakh+ students choose ishu.fun over any other platform
          </p>
        </motion.div>

        <div className={styles.features}>
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const isReversed = i % 2 !== 0;

            return (
              <motion.div
                key={service.id}
                className={`${styles.feature} ${isReversed ? styles.reversed : ''}`}
                initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className={styles.featureContent}>
                  <motion.div
                    className={styles.featureIcon}
                    style={{ color: service.color, background: `${service.color}12` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {Icon && <Icon size={32} weight="duotone" />}
                  </motion.div>
                  <h3 className={styles.featureTitle}>{service.title}</h3>
                  <p className={styles.featureDesc}>{service.description}</p>
                  <a href={service.ctaLink} className={styles.featureCta} style={{ color: service.color }}>
                    {service.cta} <ArrowRight size={16} weight="bold" />
                  </a>
                </div>
                <FeatureVisual service={service} index={i} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
