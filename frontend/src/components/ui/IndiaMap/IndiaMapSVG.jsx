// components/ui/IndiaMap/IndiaMapSVG.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './IndiaMapSVG.module.css';

// Simplified India states data with approximate SVG path coordinates
const statesData = [
  { id: 'JK', name: 'Jammu & Kashmir', results: 234, color: '#6C63FF' },
  { id: 'HP', name: 'Himachal Pradesh', results: 156, color: '#00D9FF' },
  { id: 'PB', name: 'Punjab', results: 289, color: '#FF6B6B' },
  { id: 'HR', name: 'Haryana', results: 312, color: '#FFC107' },
  { id: 'DL', name: 'Delhi', results: 567, color: '#4CAF50' },
  { id: 'UP', name: 'Uttar Pradesh', results: 1234, color: '#FF5722' },
  { id: 'RJ', name: 'Rajasthan', results: 678, color: '#9C27B0' },
  { id: 'GJ', name: 'Gujarat', results: 445, color: '#00BCD4' },
  { id: 'MH', name: 'Maharashtra', results: 890, color: '#FF9800' },
  { id: 'MP', name: 'Madhya Pradesh', results: 534, color: '#8BC34A' },
  { id: 'BR', name: 'Bihar', results: 623, color: '#E91E63' },
  { id: 'WB', name: 'West Bengal', results: 456, color: '#3F51B5' },
  { id: 'OR', name: 'Odisha', results: 378, color: '#009688' },
  { id: 'JH', name: 'Jharkhand', results: 267, color: '#795548' },
  { id: 'CG', name: 'Chhattisgarh', results: 234, color: '#607D8B' },
  { id: 'TN', name: 'Tamil Nadu', results: 567, color: '#FFEB3B' },
  { id: 'KA', name: 'Karnataka', results: 678, color: '#00E676' },
  { id: 'AP', name: 'Andhra Pradesh', results: 445, color: '#FF4081' },
  { id: 'TS', name: 'Telangana', results: 389, color: '#536DFE' },
  { id: 'KL', name: 'Kerala', results: 234, color: '#00BFA5' },
  { id: 'AS', name: 'Assam', results: 189, color: '#FF6E40' },
  { id: 'NE', name: 'North East States', results: 145, color: '#B388FF' },
];

export default function IndiaMapSVG() {
  const [hoveredState, setHoveredState] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (state, event) => {
    setHoveredState(state);
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
  };

  const handleMouseLeave = () => {
    setHoveredState(null);
  };

  return (
    <div className={styles.mapContainer}>
      <svg
        viewBox="0 0 800 1000"
        className={styles.mapSvg}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="800" height="1000" fill="transparent" />

        {/* Simplified India Map - Major States */}

        {/* Jammu & Kashmir */}
        <motion.path
          d="M 250 80 L 320 60 L 350 90 L 340 130 L 300 150 L 260 120 Z"
          fill={hoveredState?.id === 'JK' ? '#8B7FFF' : '#6C63FF'}
          stroke="#1A1A2E"
          strokeWidth="2"
          className={styles.statePath}
          onMouseEnter={(e) => handleMouseEnter(statesData[0], e)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
        />

        {/* Punjab */}
        <motion.path
          d="M 260 140 L 300 160 L 320 200 L 280 220 L 250 190 Z"
          fill={hoveredState?.id === 'PB' ? '#FF8989' : '#FF6B6B'}
          stroke="#1A1A2E"
          strokeWidth="2"
          className={styles.statePath}
          onMouseEnter={(e) => handleMouseEnter(statesData[2], e)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
        />

        {/* Rajasthan */}
        <motion.path
          d="M 180 220 L 280 240 L 320 300 L 280 380 L 200 360 L 170 290 Z"
          fill={hoveredState?.id === 'RJ' ? '#B14FD9' : '#9C27B0'}
          stroke="#1A1A2E"
          strokeWidth="2"
          className={styles.statePath}
          onMouseEnter={(e) => handleMouseEnter(statesData[6], e)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
        />

        {/* Gujarat */}
        <motion.path
          d="M 120 380 L 200 370 L 230 450 L 180 500 L 130 470 Z"
          fill={hoveredState?.id === 'GJ' ? '#1AD4FF' : '#00BCD4'}
          stroke="#1A1A2E"
          strokeWidth="2"
          className={styles.statePath}
          onMouseEnter={(e) => handleMouseEnter(statesData[7], e)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
        />

        {/* Maharashtra */}
        <motion.path
          d="M 210 470 L 310 460 L 350 540 L 300 600 L 230 570 Z"
          fill={hoveredState?.id === 'MH' ? '#FFB033' : '#FF9800'}
          stroke="#1A1A2E"
          strokeWidth="2"
          className={styles.statePath}
          onMouseEnter={(e) => handleMouseEnter(statesData[8], e)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
        />

        {/* Uttar Pradesh */}
        <motion.path
          d="M 320 220 L 450 240 L 480 310 L 450 370 L 380 360 L 330 300 Z"
          fill={hoveredState?.id === 'UP' ? '#FF7A52' : '#FF5722'}
          stroke="#1A1A2E"
          strokeWidth="2"
          className={styles.statePath}
          onMouseEnter={(e) => handleMouseEnter(statesData[5], e)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
        />

        {/* Madhya Pradesh */}
        <motion.path
          d="M 290 380 L 380 370 L 420 440 L 380 500 L 310 480 Z"
          fill={hoveredState?.id === 'MP' ? '#A3D95B' : '#8BC34A'}
          stroke="#1A1A2E"
          strokeWidth="2"
          className={styles.statePath}
          onMouseEnter={(e) => handleMouseEnter(statesData[9], e)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
        />

        {/* Bihar */}
        <motion.path
          d="M 480 320 L 550 330 L 560 380 L 520 410 L 470 390 Z"
          fill={hoveredState?.id === 'BR' ? '#FF3E7A' : '#E91E63'}
          stroke="#1A1A2E"
          strokeWidth="2"
          className={styles.statePath}
          onMouseEnter={(e) => handleMouseEnter(statesData[10], e)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
        />

        {/* West Bengal */}
        <motion.path
          d="M 560 390 L 610 400 L 620 450 L 580 480 L 550 450 Z"
          fill={hoveredState?.id === 'WB' ? '#5A6FD5' : '#3F51B5'}
          stroke="#1A1A2E"
          strokeWidth="2"
          className={styles.statePath}
          onMouseEnter={(e) => handleMouseEnter(statesData[11], e)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
        />

        {/* Karnataka */}
        <motion.path
          d="M 280 610 L 350 600 L 370 680 L 320 720 L 270 690 Z"
          fill={hoveredState?.id === 'KA' ? '#1AFF96' : '#00E676'}
          stroke="#1A1A2E"
          strokeWidth="2"
          className={styles.statePath}
          onMouseEnter={(e) => handleMouseEnter(statesData[16], e)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
        />

        {/* Tamil Nadu */}
        <motion.path
          d="M 310 730 L 370 720 L 390 800 L 350 840 L 300 810 Z"
          fill={hoveredState?.id === 'TN' ? '#FFF54F' : '#FFEB3B'}
          stroke="#1A1A2E"
          strokeWidth="2"
          className={styles.statePath}
          onMouseEnter={(e) => handleMouseEnter(statesData[15], e)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
        />

        {/* Andhra Pradesh */}
        <motion.path
          d="M 360 600 L 430 590 L 450 660 L 410 700 L 360 680 Z"
          fill={hoveredState?.id === 'AP' ? '#FF6BA1' : '#FF4081'}
          stroke="#1A1A2E"
          strokeWidth="2"
          className={styles.statePath}
          onMouseEnter={(e) => handleMouseEnter(statesData[17], e)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
        />

        {/* Telangana */}
        <motion.path
          d="M 390 530 L 450 520 L 470 580 L 440 610 L 400 590 Z"
          fill={hoveredState?.id === 'TS' ? '#7689FE' : '#536DFE'}
          stroke="#1A1A2E"
          strokeWidth="2"
          className={styles.statePath}
          onMouseEnter={(e) => handleMouseEnter(statesData[18], e)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
        />

        {/* Kerala */}
        <motion.path
          d="M 260 700 L 310 720 L 300 810 L 250 820 L 240 750 Z"
          fill={hoveredState?.id === 'KL' ? '#1AFFCB' : '#00BFA5'}
          stroke="#1A1A2E"
          strokeWidth="2"
          className={styles.statePath}
          onMouseEnter={(e) => handleMouseEnter(statesData[19], e)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
        />

        {/* Odisha */}
        <motion.path
          d="M 490 450 L 560 460 L 570 530 L 520 560 L 480 520 Z"
          fill={hoveredState?.id === 'OR' ? '#1AB6A8' : '#009688'}
          stroke="#1A1A2E"
          strokeWidth="2"
          className={styles.statePath}
          onMouseEnter={(e) => handleMouseEnter(statesData[12], e)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
        />

        {/* Assam & North East */}
        <motion.path
          d="M 620 360 L 680 350 L 690 420 L 650 450 L 610 420 Z"
          fill={hoveredState?.id === 'AS' ? '#FF8E60' : '#FF6E40'}
          stroke="#1A1A2E"
          strokeWidth="2"
          className={styles.statePath}
          onMouseEnter={(e) => handleMouseEnter(statesData[20], e)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
        />

        {/* Decorative elements */}
        <circle cx="300" cy="250" r="3" fill="#FFD700" opacity="0.8">
          <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="450" r="3" fill="#FFD700" opacity="0.8">
          <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Tooltip */}
      {hoveredState && (
        <motion.div
          className={styles.tooltip}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y - 80,
          }}
        >
          <div className={styles.tooltipTitle}>{hoveredState.name}</div>
          <div className={styles.tooltipStats}>
            <span className={styles.tooltipLabel}>Results Available:</span>
            <span className={styles.tooltipValue}>{hoveredState.results}</span>
          </div>
          <button className={styles.tooltipButton}>View Results →</button>
        </motion.div>
      )}
    </div>
  );
}
