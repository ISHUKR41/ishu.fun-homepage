// components/ui/EnhancedIndiaMap/EnhancedIndiaMap.jsx
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './EnhancedIndiaMap.module.css';

gsap.registerPlugin(ScrollTrigger);

// State data with major cities and exam centers
const stateData = {
  'Uttar Pradesh': { users: '5.2L', exams: 450, color: '#6C63FF', cities: ['Lucknow', 'Kanpur', 'Varanasi'] },
  'Maharashtra': { users: '4.8L', exams: 420, color: '#00D2FF', cities: ['Mumbai', 'Pune', 'Nagpur'] },
  'Bihar': { users: '3.9L', exams: 380, color: '#00C896', cities: ['Patna', 'Gaya', 'Muzaffarpur'] },
  'West Bengal': { users: '3.5L', exams: 360, color: '#FF6B9D', cities: ['Kolkata', 'Howrah', 'Durgapur'] },
  'Madhya Pradesh': { users: '3.2L', exams: 340, color: '#FFC107', cities: ['Bhopal', 'Indore', 'Jabalpur'] },
  'Rajasthan': { users: '3.0L', exams: 320, color: '#FF5722', cities: ['Jaipur', 'Jodhpur', 'Udaipur'] },
  'Tamil Nadu': { users: '2.8L', exams: 300, color: '#9C27B0', cities: ['Chennai', 'Coimbatore', 'Madurai'] },
  'Karnataka': { users: '2.6L', exams: 280, color: '#3F51B5', cities: ['Bengaluru', 'Mysuru', 'Mangaluru'] },
  'Gujarat': { users: '2.4L', exams: 260, color: '#00BCD4', cities: ['Ahmedabad', 'Surat', 'Vadodara'] },
  'Andhra Pradesh': { users: '2.2L', exams: 240, color: '#4CAF50', cities: ['Visakhapatnam', 'Vijayawada'] },
  'Telangana': { users: '2.0L', exams: 220, color: '#FF9800', cities: ['Hyderabad', 'Warangal'] },
  'Kerala': { users: '1.8L', exams: 200, color: '#E91E63', cities: ['Thiruvananthapuram', 'Kochi'] },
  'Odisha': { users: '1.6L', exams: 180, color: '#795548', cities: ['Bhubaneswar', 'Cuttack'] },
  'Haryana': { users: '1.5L', exams: 170, color: '#607D8B', cities: ['Chandigarh', 'Faridabad'] },
  'Punjab': { users: '1.4L', exams: 160, color: '#FFEB3B', cities: ['Ludhiana', 'Amritsar'] },
  'Assam': { users: '1.2L', exams: 150, color: '#CDDC39', cities: ['Guwahati', 'Dibrugarh'] },
  'Jharkhand': { users: '1.1L', exams: 140, color: '#8BC34A', cities: ['Ranchi', 'Jamshedpur'] },
  'Chhattisgarh': { users: '1.0L', exams: 130, color: '#009688', cities: ['Raipur', 'Bhilai'] },
  'Delhi': { users: '2.5L', exams: 350, color: '#F44336', cities: ['New Delhi', 'Dwarka'] },
  'Uttarakhand': { users: '0.8L', exams: 120, color: '#673AB7', cities: ['Dehradun', 'Haridwar'] },
  'Himachal Pradesh': { users: '0.6L', exams: 110, color: '#03A9F4', cities: ['Shimla', 'Dharamshala'] },
  'Tripura': { users: '0.4L', exams: 90, color: '#00ACC1', cities: ['Agartala'] },
  'Meghalaya': { users: '0.3L', exams: 80, color: '#26A69A', cities: ['Shillong'] },
  'Manipur': { users: '0.3L', exams: 75, color: '#66BB6A', cities: ['Imphal'] },
  'Nagaland': { users: '0.2L', exams: 70, color: '#9CCC65', cities: ['Kohima'] },
  'Goa': { users: '0.2L', exams: 65, color: '#D4E157', cities: ['Panaji'] },
  'Arunachal Pradesh': { users: '0.2L', exams: 60, color: '#FFEE58', cities: ['Itanagar'] },
  'Mizoram': { users: '0.1L', exams: 55, color: '#FFA726', cities: ['Aizawl'] },
  'Sikkim': { users: '0.1L', exams: 50, color: '#FF7043', cities: ['Gangtok'] },
  'Puducherry': { users: '0.2L', exams: 60, color: '#EC407A', cities: ['Puducherry'] },
  'Chandigarh': { users: '0.3L', exams: 80, color: '#AB47BC', cities: ['Chandigarh'] },
  'Jammu and Kashmir': { users: '1.0L', exams: 140, color: '#5C6BC0', cities: ['Srinagar', 'Jammu'] },
  'Ladakh': { users: '0.1L', exams: 40, color: '#42A5F5', cities: ['Leh'] }
};

export default function EnhancedIndiaMap() {
  const [activeState, setActiveState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Animate states on scroll
    gsap.from(mapRef.current.querySelectorAll('path'), {
      opacity: 0,
      scale: 0.8,
      transformOrigin: 'center',
      stagger: 0.02,
      duration: 0.8,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: mapRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });

    // Pulse animation for active states
    gsap.to(mapRef.current.querySelectorAll('.active-state'), {
      scale: 1.05,
      duration: 1.5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    });
  }, []);

  const handleStateHover = (stateName) => {
    setHoveredState(stateName);
  };

  const handleStateClick = (stateName) => {
    setActiveState(activeState === stateName ? null : stateName);
  };

  return (
    <div className={styles.container} ref={mapRef}>
      <div className={styles.mapWrapper}>
        {/* Simplified India Map SVG */}
        <svg
          viewBox="0 0 800 900"
          className={styles.map}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect width="800" height="900" fill="transparent" />

          {/* Simplified state paths (sample states for demonstration) */}
          {Object.keys(stateData).slice(0, 10).map((stateName, index) => (
            <g key={stateName}>
              <path
                d={getStatePath(index)}
                fill={stateData[stateName].color}
                fillOpacity={hoveredState === stateName || activeState === stateName ? 0.8 : 0.3}
                stroke="#6C63FF"
                strokeWidth="2"
                className={activeState === stateName ? 'active-state' : ''}
                onMouseEnter={() => handleStateHover(stateName)}
                onMouseLeave={() => handleStateHover(null)}
                onClick={() => handleStateClick(stateName)}
                style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
              />
            </g>
          ))}

          {/* Major cities as dots */}
          {Object.entries(stateData).slice(0, 10).map(([stateName, data], index) => {
            const [x, y] = getCityPosition(index);
            return data.cities.map((city, cityIndex) => (
              <g key={`${stateName}-${city}`}>
                <circle
                  cx={x + cityIndex * 30}
                  cy={y + cityIndex * 30}
                  r="4"
                  fill="#FFC107"
                  className={styles.cityDot}
                />
                <text
                  x={x + cityIndex * 30}
                  y={y + cityIndex * 30 - 10}
                  className={styles.cityLabel}
                  fill="#F0F0FF"
                  fontSize="10"
                  textAnchor="middle"
                >
                  {city}
                </text>
              </g>
            ));
          })}
        </svg>

        {/* Tooltip */}
        {hoveredState && (
          <div className={styles.tooltip}>
            <h4>{hoveredState}</h4>
            <p className={styles.stat}>
              <span>👥 Users:</span> {stateData[hoveredState].users}
            </p>
            <p className={styles.stat}>
              <span>📝 Exams:</span> {stateData[hoveredState].exams}
            </p>
            <p className={styles.cities}>
              📍 {stateData[hoveredState].cities.join(', ')}
            </p>
          </div>
        )}
      </div>

      {/* State list */}
      <div className={styles.stateList}>
        <h3>Top States by Users</h3>
        <div className={styles.states}>
          {Object.entries(stateData)
            .sort((a, b) => parseFloat(b[1].users) - parseFloat(a[1].users))
            .slice(0, 10)
            .map(([stateName, data]) => (
              <div
                key={stateName}
                className={`${styles.stateCard} ${activeState === stateName ? styles.active : ''}`}
                onClick={() => handleStateClick(stateName)}
              >
                <div
                  className={styles.stateColor}
                  style={{ backgroundColor: data.color }}
                />
                <div className={styles.stateInfo}>
                  <h4>{stateName}</h4>
                  <p>{data.users} users · {data.exams} exams</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

// Helper functions to generate simplified paths
function getStatePath(index) {
  // Simplified paths for demonstration (replace with actual state SVG paths)
  const paths = [
    'M100,100 L200,100 L200,200 L100,200 Z',
    'M220,100 L320,100 L320,200 L220,200 Z',
    'M100,220 L200,220 L200,320 L100,320 Z',
    'M220,220 L320,220 L320,320 L220,320 Z',
    'M340,100 L440,100 L440,200 L340,200 Z',
    'M340,220 L440,220 L440,320 L340,320 Z',
    'M100,340 L200,340 L200,440 L100,440 Z',
    'M220,340 L320,340 L320,440 L220,440 Z',
    'M340,340 L440,340 L440,440 L340,440 Z',
    'M460,100 L560,100 L560,200 L460,200 Z',
  ];
  return paths[index % paths.length];
}

function getCityPosition(index) {
  // Returns [x, y] coordinates for cities
  const positions = [
    [150, 150], [270, 150], [150, 270], [270, 270], [390, 150],
    [390, 270], [150, 390], [270, 390], [390, 390], [510, 150]
  ];
  return positions[index % positions.length];
}
