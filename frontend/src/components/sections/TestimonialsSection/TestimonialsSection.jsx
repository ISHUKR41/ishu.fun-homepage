// components/sections/TestimonialsSection/TestimonialsSection.jsx
import { motion } from 'framer-motion';
import { Star } from '@phosphor-icons/react';
import { testimonials } from '../../../constants/testimonials';
import styles from './TestimonialsSection.module.css';

function TestimonialCard({ t }) {
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=6C63FF&color=fff&size=48&bold=true`;
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img src={avatarUrl} alt={t.name} className={styles.avatar} loading="lazy" width="48" height="48" />
        <div>
          <div className={styles.name}>{t.name}</div>
          <div className={styles.location}>{t.location}</div>
        </div>
      </div>
      <div className={styles.stars}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={14} weight="fill" color="var(--accent-gold)" />
        ))}
      </div>
      <p className={styles.text}>"{t.text}"</p>
      <div className={styles.tags}>
        <span className={styles.tag}>{t.exam}</span>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const row1 = [...testimonials.slice(0, 8), ...testimonials.slice(0, 8)];
  const row2 = [...testimonials.slice(8), ...testimonials.slice(0, 7), ...testimonials.slice(8), ...testimonials.slice(0, 7)];

  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <motion.div className={styles.header} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="overline">STUDENT SUCCESS</span>
          <h2 className="section-title">Loved by Students Across India</h2>
          <p className={styles.statsRow}>⭐ 4.9/5 · 50L+ Happy Users · Featured in 20+ State Toppers</p>
        </motion.div>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {row1.map((t, i) => <TestimonialCard key={`r1-${i}`} t={t} />)}
        </div>
        <div className={`${styles.marqueeTrack} ${styles.reverse}`}>
          {row2.map((t, i) => <TestimonialCard key={`r2-${i}`} t={t} />)}
        </div>
      </div>
    </section>
  );
}
