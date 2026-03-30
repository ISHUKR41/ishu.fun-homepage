// components/sections/HowItWorksSection/HowItWorksSection.jsx
// Apple-style clean step-by-step section
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MagnifyingGlass,
  BellRinging,
  FileArrowDown,
  ArrowRight,
  CheckCircle,
  Sparkle,
} from '@phosphor-icons/react';
import styles from './HowItWorksSection.module.css';

const steps = [
  {
    number: '01',
    icon: MagnifyingGlass,
    title: 'Search Any Exam',
    desc: 'Type any exam name — JEE, NEET, SSC, UPSC, Railway. Our smart search finds results, admit cards, and notifications instantly.',
    highlight: 'Covers 200+ national & state exams',
    color: '#6C63FF',
    tags: ['JEE 2026', 'UPSC CSE', 'SSC CGL', 'Railway NTPC'],
    demo: {
      type: 'search',
      query: 'JEE Mains Result 2026',
      result: 'Result Declared ✓',
    },
  },
  {
    number: '02',
    icon: BellRinging,
    title: 'Get Instant Alerts',
    desc: 'Subscribe via WhatsApp — zero app install needed. Get results within 5 minutes of official declaration, directly on your phone.',
    highlight: '5-minute result delivery guaranteed',
    color: '#00C896',
    tags: ['WhatsApp', 'Instant', 'Free', 'No App Needed'],
    demo: {
      type: 'whatsapp',
      message: '🔔 RESULT ALERT\nJEE Mains 2026\n📊 Result Declared!\nCheck Now →',
    },
  },
  {
    number: '03',
    icon: FileArrowDown,
    title: 'Download & Apply',
    desc: 'Download admit cards, answer keys, and scorecards. Use our free PDF tools to compress, merge, or convert documents instantly.',
    highlight: '25+ free PDF tools, no signup',
    color: '#00D2FF',
    tags: ['PDF Merge', 'Compress', 'OCR', 'E-Sign'],
    demo: {
      type: 'pdf',
      tools: ['Merge PDF', 'Compress', 'PDF to Word', 'E-Sign'],
    },
  },
];

function SearchDemo({ step }) {
  return (
    <div className={styles.demoSearch}>
      <div className={styles.demoSearchBar}>
        <MagnifyingGlass size={14} color="var(--text-muted)" />
        <span className={styles.demoSearchText}>{step.demo.query}</span>
      </div>
      <motion.div
        className={styles.demoSearchResult}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{ borderColor: `${step.color}40` }}
      >
        <CheckCircle size={14} color={step.color} weight="fill" />
        <span style={{ color: step.color, fontWeight: 600 }}>{step.demo.result}</span>
        <span className={styles.demoSearchSub}>Declared 8 min ago</span>
      </motion.div>
    </div>
  );
}

function WhatsappDemo({ step }) {
  return (
    <div className={styles.demoWhatsapp}>
      <div className={styles.demoPhone}>
        <div className={styles.demoPhoneHeader}>
          <span className={styles.demoPhoneName}>ishu.fun Alerts</span>
          <span className={styles.demoPhoneStatus} style={{ color: step.color }}>● Online</span>
        </div>
        <motion.div
          className={styles.demoMessage}
          initial={{ opacity: 0, x: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
        >
          {step.demo.message}
        </motion.div>
      </div>
    </div>
  );
}

function PdfDemo({ step }) {
  return (
    <div className={styles.demoPdf}>
      {step.demo.tools.map((tool, i) => (
        <motion.div
          key={tool}
          className={styles.demoPdfTool}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.1 }}
          style={{ '--tool-color': step.color }}
        >
          <Sparkle size={14} color={step.color} weight="fill" />
          {tool}
        </motion.div>
      ))}
    </div>
  );
}

function StepDemo({ step }) {
  if (step.demo.type === 'search') return <SearchDemo step={step} />;
  if (step.demo.type === 'whatsapp') return <WhatsappDemo step={step} />;
  if (step.demo.type === 'pdf') return <PdfDemo step={step} />;
  return null;
}

function Step({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isReversed = index % 2 !== 0;
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      className={`${styles.step} ${isReversed ? styles.reversed : ''}`}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Content Side */}
      <div className={styles.stepContent}>
        <div className={styles.stepNumber} style={{ '--step-color': step.color }}>
          {step.number}
        </div>

        <div className={styles.stepIconWrap} style={{ background: `${step.color}15`, color: step.color }}>
          <Icon size={28} weight="duotone" />
        </div>

        <h3 className={styles.stepTitle}>{step.title}</h3>
        <p className={styles.stepDesc}>{step.desc}</p>

        <div className={styles.stepHighlight} style={{ borderColor: `${step.color}30`, background: `${step.color}08` }}>
          <CheckCircle size={15} color={step.color} weight="fill" />
          <span style={{ color: step.color }}>{step.highlight}</span>
        </div>

        <div className={styles.stepTags}>
          {step.tags.map(tag => (
            <span key={tag} className={styles.stepTag} style={{ borderColor: `${step.color}25`, color: step.color }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Visual Side */}
      <div className={styles.stepVisual}>
        <div className={styles.stepVisualCard} style={{ '--card-color': step.color }}>
          <div className={styles.stepVisualGlow} style={{ background: `radial-gradient(ellipse at center, ${step.color}20 0%, transparent 70%)` }} />
          <StepDemo step={step} />
        </div>
      </div>
    </motion.div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className={styles.section} id="how-it-works">
      {/* Background */}
      <div className={styles.bgGlow} />

      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="overline">HOW IT WORKS</span>
          <h2 className="section-title">Three Steps. Zero Complexity.</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '540px' }}>
            Get from search to result in under 10 seconds. No sign-up. No app. Just instant information.
          </p>
        </motion.div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <Step key={step.number} step={step} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a href="/results" className={styles.cta}>
            Start Exploring — It's Free <ArrowRight size={18} weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
