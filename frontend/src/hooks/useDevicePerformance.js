// hooks/useDevicePerformance.js
import { useState, useEffect } from 'react';

export function useDevicePerformance() {
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    const cores = navigator.hardwareConcurrency || 4;
    const memory = navigator.deviceMemory || 4;
    const isOldAndroid = /Android [1-6]/.test(navigator.userAgent);
    const isSlowConnection = navigator.connection?.effectiveType === '2g' || navigator.connection?.effectiveType === 'slow-2g';

    setIsLowEnd(cores <= 2 || memory <= 2 || isOldAndroid || isSlowConnection);
  }, []);

  return { isLowEnd };
}
