// components/ui/SectionWrapper/SectionWrapper.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './SectionWrapper.module.css';

export default function SectionWrapper({ children, id, className = '', dark = false, noPadding = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id={id}
      className={`${styles.section} ${dark ? styles.dark : ''} ${noPadding ? styles.noPadding : ''} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
