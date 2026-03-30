// components/ui/Card/GlassCard.jsx
import { forwardRef } from 'react';
import styles from './Card.module.css';

const GlassCard = forwardRef(function GlassCard({ children, className = '', hover = true, glow = false, style = {}, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={`${styles.glassCard} ${hover ? styles.hoverLift : ''} ${glow ? styles.glowBorder : ''} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
});

export default GlassCard;
