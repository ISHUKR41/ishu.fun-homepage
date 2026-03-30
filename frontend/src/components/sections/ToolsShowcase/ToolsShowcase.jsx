// components/sections/ToolsShowcase/ToolsShowcase.jsx
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowsMerge, ArrowsIn, FileDoc, FilePdf, Scissors, ArrowClockwise,
  TextAa, Stamp, PenNib, LockOpen, Lock, Image, Export, Stack, Info, Star, ArrowRight
} from '@phosphor-icons/react';
import { tools as toolsData } from '../../../constants/tools';
import styles from './ToolsShowcase.module.css';

const iconMap = {
  ArrowsMerge, ArrowsIn, FileDoc, FilePdf, Scissors, ArrowClockwise,
  TextAa, Stamp, PenNib, LockOpen, Lock, Image, Export, Stack, Info
};

function ToolCard({ tool, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || window.innerWidth < 1024) return;

    let VanillaTilt;
    import('vanilla-tilt').then(mod => {
      VanillaTilt = mod.default;
      VanillaTilt.init(card, {
        max: 12,
        speed: 400,
        glare: true,
        'max-glare': 0.15,
        scale: 1.02,
      });
    });

    return () => {
      if (card?.vanillaTilt) card.vanillaTilt.destroy();
    };
  }, []);

  const Icon = iconMap[tool.icon];

  return (
    <motion.a
      ref={cardRef}
      href={`/tools/${tool.slug}`}
      className={styles.card}
      style={{ '--tool-color': tool.color }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      {tool.isPopular && (
        <span className={styles.popularBadge}>
          <Star size={10} weight="fill" /> Popular
        </span>
      )}
      <div className={styles.iconWrap} style={{ background: `${tool.color}12`, color: tool.color }}>
        {Icon && <Icon size={28} weight="duotone" />}
      </div>
      <span className={styles.toolName}>{tool.name}</span>
      <span className={styles.tryLabel}>Try Free →</span>
    </motion.a>
  );
}

export default function ToolsShowcase() {
  return (
    <section className={styles.section} id="tools-showcase">
      <div className={styles.bgGlow} />
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="overline">FREE PDF TOOLS</span>
          <h2 className="section-title">15+ Professional PDF Tools — Free Forever</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            No account needed. No watermarks. No limits. Built for Indian students.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {toolsData.map((tool, i) => (
            <ToolCard key={tool.id || i} tool={tool} index={i} />
          ))}
        </div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a href="/tools" className={styles.ctaBtn}>
            🛠️ Try All Tools Free <ArrowRight size={18} weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
