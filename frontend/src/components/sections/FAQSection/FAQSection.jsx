// components/sections/FAQSection/FAQSection.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from '@phosphor-icons/react';
import { faqs } from '../../../constants/faqs';
import styles from './FAQSection.module.css';

function FAQItem({ faq, index, isOpen, onClick }) {
  return (
    <div className={styles.item}>
      <button className={styles.question} onClick={onClick} aria-expanded={isOpen} aria-controls={`faq-${index}`}>
        <span>{faq.q}</span>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
          <Plus size={20} weight="bold" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-${index}`}
            className={styles.answer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  // JSON-LD FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <section className={styles.section} id="faq">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container">
        <motion.div className={styles.header} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="overline">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </motion.div>
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} isOpen={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
