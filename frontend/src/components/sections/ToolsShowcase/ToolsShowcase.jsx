// components/sections/ToolsShowcase/ToolsShowcase.jsx
import { motion } from 'framer-motion';
import { ArrowRight, Star, ArrowsMerge, ArrowsIn, FileDoc, FilePdf, Scissors, ArrowClockwise, TextAa, Stamp, PenNib, LockOpen, Lock, Image, Export, Stack, Info } from '@phosphor-icons/react';
import { tools } from '../../../constants/tools';
import styles from './ToolsShowcase.module.css';

const iconMap = { ArrowsMerge, ArrowsIn, FileDoc, FilePdf, Scissors, ArrowClockwise, TextAa, Stamp, PenNib, LockOpen, Lock, Image, Export, Stack, Info };

export default function ToolsShowcase() {
  return (
    <section className={styles.section} id="tools-showcase">
      <div className="container">
        <motion.div className={styles.header} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="overline">FREE PDF TOOLS</span>
          <h2 className="section-title">15+ Professional PDF Tools — Free Forever</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>No account needed. No watermarks. No limits. Built for Indian students.</p>
        </motion.div>

        <div className={styles.grid}>
          {tools.map((tool, i) => {
            const Icon = iconMap[tool.icon];
            return (
              <motion.a
                key={tool.id}
                href={`/tools/${tool.slug}`}
                className={styles.toolCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -6, scale: 1.02 }}
                style={{ '--tool-color': tool.color }}
              >
                {tool.isPopular && <span className={styles.popularBadge}><Star size={10} weight="fill" /> Popular</span>}
                <div className={styles.toolIcon} style={{ color: tool.color, background: `${tool.color}12` }}>
                  {Icon && <Icon size={28} weight="duotone" />}
                </div>
                <span className={styles.toolName}>{tool.name}</span>
                <span className={styles.tryFree}>Try Free →</span>
              </motion.a>
            );
          })}
        </div>

        <motion.div className={styles.ctaRow} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <a href="/tools" className={styles.allToolsBtn}>🛠️ Try All Tools Free <ArrowRight size={18} /></a>
        </motion.div>
      </div>
    </section>
  );
}
