// components/sections/FeaturesSection/FeaturesSection.jsx
import { motion } from 'framer-motion';
import { Lightning, Briefcase, FilePdf, Newspaper, CalendarCheck, WhatsappLogo } from '@phosphor-icons/react';
import { services } from '../../../constants/services';
import styles from './FeaturesSection.module.css';

const iconMap = { Lightning, Briefcase, FilePdf, Newspaper, CalendarCheck, WhatsappLogo };

export default function FeaturesSection() {
  return (
    <section className={styles.section} id="features">
      <div className="container">
        <motion.div className={styles.header} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="overline">WHAT WE OFFER</span>
          <h2 className="section-title">Everything You Need in One Platform</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>Why 50 lakh+ students choose ishu.fun over any other platform</p>
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
                  <div className={styles.featureIcon} style={{ color: service.color, background: `${service.color}15` }}>
                    {Icon && <Icon size={32} weight="duotone" />}
                  </div>
                  <h3 className={styles.featureTitle}>{service.title}</h3>
                  <p className={styles.featureDesc}>{service.description}</p>
                  <a href={service.ctaLink} className={styles.featureCta} style={{ color: service.color }}>
                    {service.cta}
                  </a>
                </div>
                <div className={styles.featureVisual}>
                  <div className={styles.mockupCard} style={{ borderColor: `${service.color}30` }}>
                    <div className={styles.mockupHeader}>
                      <div className={styles.mockupDots}>
                        <span style={{ background: service.color }} /><span /><span />
                      </div>
                    </div>
                    <div className={styles.mockupBody}>
                      <div className={styles.mockupLine} style={{ width: '80%', background: `${service.color}20` }} />
                      <div className={styles.mockupLine} style={{ width: '60%' }} />
                      <div className={styles.mockupLine} style={{ width: '90%' }} />
                      <div className={styles.mockupLine} style={{ width: '45%', background: `${service.color}20` }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
