// PageTransition.jsx — Advanced Page Transitions with Framer Motion
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

/**
 * Page Transition Wrapper
 * Provides smooth transitions between pages
 */
export default function PageTransition({ children, variant = 'fade' }) {
  const location = useLocation();

  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    slide: {
      initial: { x: '100%', opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: '-100%', opacity: 0 },
      transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }
    },
    scale: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 1.2, opacity: 0 },
      transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }
    },
    slideUp: {
      initial: { y: '100%', opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: '-100%', opacity: 0 },
      transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
    },
    slideDown: {
      initial: { y: '-100%', opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: '100%', opacity: 0 },
      transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
    },
    rotate: {
      initial: { rotateY: 90, opacity: 0 },
      animate: { rotateY: 0, opacity: 1 },
      exit: { rotateY: -90, opacity: 0 },
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
    },
    curtain: {
      initial: { clipPath: 'circle(0% at 50% 50%)' },
      animate: { clipPath: 'circle(150% at 50% 50%)' },
      exit: { clipPath: 'circle(0% at 50% 50%)' },
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
    },
    morphing: {
      initial: {
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        opacity: 0
      },
      animate: {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        opacity: 1
      },
      exit: {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        opacity: 0
      },
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
    },
  };

  const selectedVariant = variants[variant] || variants.fade;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={selectedVariant.initial}
        animate={selectedVariant.animate}
        exit={selectedVariant.exit}
        transition={selectedVariant.transition}
        style={{ width: '100%', minHeight: '100vh' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Section Transition - For transitioning between sections on the same page
 */
export function SectionTransition({ children, delay = 0, variant = 'fadeUp' }) {
  const sectionVariants = {
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay,
          ease: [0.43, 0.13, 0.23, 0.96]
        }
      }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.5,
          delay,
          ease: 'easeInOut'
        }
      }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
          delay,
          ease: [0.43, 0.13, 0.23, 0.96]
        }
      }
    },
    slideLeft: {
      hidden: { opacity: 0, x: -100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          delay,
          ease: [0.43, 0.13, 0.23, 0.96]
        }
      }
    },
    slideRight: {
      hidden: { opacity: 0, x: 100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          delay,
          ease: [0.43, 0.13, 0.23, 0.96]
        }
      }
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants[variant] || sectionVariants.fadeUp}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger Children - Animate children with stagger effect
 */
export function StaggerChildren({ children, staggerDelay = 0.1, childVariant = 'fadeUp' }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  };

  const childVariants = {
    fadeUp: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
      }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
      }
    },
    slideIn: {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
      }
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={childVariants[childVariant] || childVariants.fadeUp}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={childVariants[childVariant] || childVariants.fadeUp}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}

/**
 * Modal Transition - Smooth modal animations
 */
export function ModalTransition({ children, isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Reveal Text - Character by character reveal
 */
export function RevealText({ children, delay = 0 }) {
  const text = children?.toString() || '';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: 0.03,
        delayChildren: 0.1
      }
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: 'inline-block' }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={charVariants}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

/**
 * Number Counter - Animated number counting
 */
export function CounterTransition({ from = 0, to, duration = 2, delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.span
        initial={from}
        animate={to}
        transition={{ duration, delay, ease: 'easeOut' }}
      >
        {(value) => Math.floor(value).toLocaleString()}
      </motion.span>
    </motion.span>
  );
}
