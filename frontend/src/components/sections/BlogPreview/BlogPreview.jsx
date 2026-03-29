// components/sections/BlogPreview/BlogPreview.jsx
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from '@phosphor-icons/react';
import styles from './BlogPreview.module.css';

const blogs = [
  { id: 1, title: 'How to Score 300+ in JEE Mains 2026 — Complete Strategy Guide', category: 'JEE PREPARATION', author: 'Team ishu.fun', date: '25 Mar 2026', readTime: '8 min', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80', featured: true },
  { id: 2, title: 'UPSC Mains 2025: Most Important Topics to Focus On', category: 'UPSC', author: 'Team ishu.fun', date: '22 Mar 2026', readTime: '12 min', image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80' },
  { id: 3, title: 'Best Free Websites for NEET Preparation in 2026', category: 'NEET', author: 'Team ishu.fun', date: '20 Mar 2026', readTime: '6 min', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80' },
];

export default function BlogPreview() {
  return (
    <section className={styles.section} id="blog-preview">
      <div className="container">
        <motion.div className={styles.header} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="overline">FROM OUR BLOG</span>
          <h2 className="section-title">Study Strategies from Toppers</h2>
        </motion.div>
        <div className={styles.grid}>
          <motion.a href={`/blog/${blogs[0].id}`} className={styles.featuredCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -4 }}>
            <div className={styles.featuredImg}><img src={blogs[0].image} alt={blogs[0].title} loading="lazy" /></div>
            <div className={styles.featuredBody}>
              <span className={styles.cat}>{blogs[0].category}</span>
              <h3 className={styles.blogTitle}>{blogs[0].title}</h3>
              <div className={styles.meta}><User size={14} /> {blogs[0].author} · <Clock size={14} /> {blogs[0].readTime} read · {blogs[0].date}</div>
              <span className={styles.cta}>Read Article <ArrowRight size={14} /></span>
            </div>
          </motion.a>
          <div className={styles.smallBlogs}>
            {blogs.slice(1).map((blog, i) => (
              <motion.a key={blog.id} href={`/blog/${blog.id}`} className={styles.smallCard} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ x: 4 }}>
                <div className={styles.smallImg}><img src={blog.image} alt={blog.title} loading="lazy" /></div>
                <div className={styles.smallBody}>
                  <span className={styles.smallCat}>{blog.category}</span>
                  <h4 className={styles.smallTitle}>{blog.title}</h4>
                  <span className={styles.smallMeta}><Clock size={12} /> {blog.readTime} · {blog.date}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
