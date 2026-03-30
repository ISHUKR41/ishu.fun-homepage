// components/sections/TestimonialsSection/TestimonialsSection.jsx
// Premium scrolling testimonials marquee with star ratings
import { motion } from 'framer-motion';
import { Star, ChatTeardropText } from '@phosphor-icons/react';
import { testimonials } from '../../../constants/testimonials';
import styles from './TestimonialsSection.module.css';

const COLORS = ['#6C63FF', '#00D2FF', '#00C896', '#FF6B35', '#FFD700', '#FF4D6D'];

function TestimonialCard({ t, index }) {
  const color = COLORS[index % COLORS.length];
  const initials = t.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className={styles.card}>
      {/* Quote icon */}
      <div className={styles.quoteIcon}>
        <ChatTeardropText size={18} color={color} weight="fill" />
      </div>

      {/* Stars */}
      <div className={styles.stars}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={13} weight="fill" color="#FFD700" />
        ))}
      </div>

      {/* Text */}
      <p className={styles.text}>"{t.text}"</p>

      {/* Author */}
      <div className={styles.author}>
        <div
          className={styles.avatar}
          style={{ background: `linear-gradient(135deg, ${color}, ${COLORS[(index + 1) % COLORS.length]})` }}
        >
          {initials}
        </div>
        <div className={styles.authorInfo}>
          <div className={styles.authorName}>{t.name}</div>
          <div className={styles.authorMeta}>
            {t.location} · <span style={{ color }}>{t.exam}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const row1 = [...testimonials.slice(0, 8), ...testimonials.slice(0, 8)];
  const row2 = [...testimonials.slice(8, 16), ...testimonials.slice(8, 16)];

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.bgGlow} />

      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="overline">STUDENT SUCCESS</span>
          <h2 className="section-title">Loved by Students Across India</h2>

          {/* Rating summary */}
          <div className={styles.ratingSummary}>
            <div className={styles.ratingStars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} weight="fill" color="#FFD700" />
              ))}
            </div>
            <span className={styles.ratingText}>
              <strong>4.9/5</strong> from 50,00,000+ students
            </span>
          </div>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className={styles.marqueeWrap}>
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />

        <div className={styles.marqueeContainer}>
          {/* Row 1 */}
          <div className={styles.marqueeTrack}>
            {row1.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} index={i} />
            ))}
          </div>

          {/* Row 2 — reversed */}
          <div className={`${styles.marqueeTrack} ${styles.reverse}`}>
            {row2.map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} index={i + 8} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
