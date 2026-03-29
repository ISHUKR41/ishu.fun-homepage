// components/sections/NewsPreview/NewsPreview.jsx
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from '@phosphor-icons/react';
import styles from './NewsPreview.module.css';

const newsData = [
  { id: 1, title: 'JEE Mains 2026 Session 2 Registration Begins — Complete Guide', category: 'EXAMS', date: '28 Mar 2026', excerpt: 'NTA has opened registration for JEE Mains Session 2. Here\'s everything you need to know about eligibility, fees, and important dates.', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80', featured: true },
  { id: 2, title: 'NEET 2026: Top 10 Last-Minute Preparation Tips', category: 'EDUCATION', date: '27 Mar 2026', excerpt: 'Expert strategies for the final month of NEET preparation.', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80' },
  { id: 3, title: 'SSC CGL 2026 Notification Expected Next Week', category: 'GOVT JOBS', date: '26 Mar 2026', excerpt: 'SSC is likely to release CGL 2026 notification by April first week.', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80' },
  { id: 4, title: 'Railway RRB NTPC Result: Cutoff Analysis by Category', category: 'RESULTS', date: '25 Mar 2026', excerpt: 'Detailed cutoff analysis for RRB NTPC across all categories.', image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80' },
];

export default function NewsPreview() {
  const featured = newsData[0];
  const rest = newsData.slice(1);

  return (
    <section className={styles.section} id="news-preview">
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="overline">LATEST NEWS</span>
            <h2 className="section-title">Education News & Updates</h2>
          </div>
          <a href="/news" className={styles.viewAll}>View All News <ArrowRight size={16} /></a>
        </div>

        <div className={styles.grid}>
          <motion.a href={`/news/${featured.id}`} className={styles.featuredCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -4 }}>
            <div className={styles.featuredImage}>
              <img src={featured.image} alt={featured.title} loading="lazy" />
              <span className={styles.catBadge}>{featured.category}</span>
            </div>
            <div className={styles.featuredContent}>
              <h3 className={styles.featuredTitle}>{featured.title}</h3>
              <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
              <div className={styles.meta}><Clock size={14} /> {featured.date}</div>
              <span className={styles.readMore}>Read Full Story →</span>
            </div>
          </motion.a>

          <div className={styles.smallCards}>
            {rest.map((news, i) => (
              <motion.a key={news.id} href={`/news/${news.id}`} className={styles.smallCard} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ x: 4 }}>
                <div className={styles.smallImage}>
                  <img src={news.image} alt={news.title} loading="lazy" />
                </div>
                <div className={styles.smallContent}>
                  <span className={styles.smallCat}>{news.category}</span>
                  <h4 className={styles.smallTitle}>{news.title}</h4>
                  <span className={styles.smallDate}><Clock size={12} /> {news.date}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
