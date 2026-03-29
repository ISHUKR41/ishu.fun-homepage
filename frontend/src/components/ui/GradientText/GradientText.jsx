// components/ui/GradientText/GradientText.jsx
import './GradientText.css';

export default function GradientText({ children, className = '', animate = true }) {
  return (
    <span className={`gradient-text-component ${animate ? 'animate' : 'static'} ${className}`}>
      {children}
    </span>
  );
}
