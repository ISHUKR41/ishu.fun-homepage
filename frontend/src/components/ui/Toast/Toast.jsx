// components/ui/Toast/Toast.jsx
// Individual toast notification component

import { motion } from 'framer-motion';
import { X, CheckCircle, WarningCircle, Info, Warning } from '@phosphor-icons/react';
import styles from './Toast.module.css';

const icons = {
  success: <CheckCircle size={24} weight="fill" />,
  error: <WarningCircle size={24} weight="fill" />,
  warning: <Warning size={24} weight="fill" />,
  info: <Info size={24} weight="fill" />,
};

export default function Toast({ id, message, type = 'info', onClose, action }) {
  return (
    <motion.div
      className={`${styles.toast} ${styles[type]}`}
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, x: 100 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      layout
    >
      <div className={styles.icon}>
        {icons[type]}
      </div>

      <div className={styles.content}>
        <p className={styles.message}>{message}</p>
        {action && (
          <button className={styles.action} onClick={action.onClick}>
            {action.label}
          </button>
        )}
      </div>

      <button className={styles.close} onClick={onClose} aria-label="Close notification">
        <X size={20} weight="bold" />
      </button>
    </motion.div>
  );
}
