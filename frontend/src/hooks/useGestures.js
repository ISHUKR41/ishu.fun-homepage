// hooks/useGestures.js
// Advanced gesture detection using @use-gesture/react
// Provides swipe, pinch, drag, and other touch/mouse gestures

import { useGesture } from '@use-gesture/react';
import { useSpring } from '@react-spring/web';

/**
 * Swipe Gesture Hook
 * Detects swipe direction and triggers callbacks
 *
 * @param {object} callbacks - { onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown }
 * @param {object} options - Configuration options
 * @returns {function} Gesture bind function
 */
export const useSwipe = (callbacks = {}, options = {}) => {
  const threshold = options.threshold || 50;
  const velocity = options.velocity || 0.5;

  return useGesture(
    {
      onDrag: ({ movement: [mx, my], velocity: [vx, vy], last }) => {
        if (!last) return;

        const absX = Math.abs(mx);
        const absY = Math.abs(my);

        if (absX > threshold || Math.abs(vx) > velocity) {
          if (mx > 0 && callbacks.onSwipeRight) {
            callbacks.onSwipeRight();
          } else if (mx < 0 && callbacks.onSwipeLeft) {
            callbacks.onSwipeLeft();
          }
        }

        if (absY > threshold || Math.abs(vy) > velocity) {
          if (my > 0 && callbacks.onSwipeDown) {
            callbacks.onSwipeDown();
          } else if (my < 0 && callbacks.onSwipeUp) {
            callbacks.onSwipeUp();
          }
        }
      },
    },
    {
      drag: {
        filterTaps: true,
        ...options.drag,
      },
    }
  );
};

/**
 * Draggable Element Hook
 * Makes an element draggable with spring physics
 *
 * @param {object} options - Configuration options
 * @returns {object} { bind, style }
 */
export const useDraggable = (options = {}) => {
  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
  }));

  const bind = useGesture(
    {
      onDrag: ({ offset: [x, y], down }) => {
        api.start({
          x: options.lockX ? 0 : x,
          y: options.lockY ? 0 : y,
          immediate: down,
        });

        if (options.onDrag) {
          options.onDrag({ x, y, down });
        }
      },
      onDragEnd: ({ offset: [x, y] }) => {
        if (options.snapBack) {
          api.start({ x: 0, y: 0 });
        }

        if (options.onDragEnd) {
          options.onDragEnd({ x, y });
        }
      },
    },
    {
      drag: {
        from: () => [style.x.get(), style.y.get()],
        bounds: options.bounds,
        rubberband: options.rubberband !== false,
        ...options.drag,
      },
    }
  );

  return { bind, style };
};

/**
 * Pinch to Zoom Hook
 * Handles pinch gestures for zoom/scale
 *
 * @param {object} options - Configuration options
 * @returns {object} { bind, style }
 */
export const usePinchZoom = (options = {}) => {
  const [style, api] = useSpring(() => ({
    scale: 1,
  }));

  const bind = useGesture(
    {
      onPinch: ({ offset: [scale] }) => {
        api.start({
          scale: Math.max(
            options.minScale || 0.5,
            Math.min(options.maxScale || 3, scale)
          ),
        });

        if (options.onPinch) {
          options.onPinch(scale);
        }
      },
      onPinchEnd: () => {
        if (options.resetOnEnd) {
          api.start({ scale: 1 });
        }

        if (options.onPinchEnd) {
          options.onPinchEnd();
        }
      },
    },
    {
      pinch: {
        scaleBounds: { min: options.minScale || 0.5, max: options.maxScale || 3 },
        rubberband: true,
        ...options.pinch,
      },
    }
  );

  return { bind, style };
};

/**
 * Pull to Refresh Hook
 * Implements pull-to-refresh gesture
 *
 * @param {function} onRefresh - Callback when refresh triggered
 * @param {object} options - Configuration options
 * @returns {object} { bind, progress }
 */
export const usePullToRefresh = (onRefresh, options = {}) => {
  const threshold = options.threshold || 80;

  const [{ y }, api] = useSpring(() => ({ y: 0 }));

  const bind = useGesture(
    {
      onDrag: ({ movement: [, my], last, velocity: [, vy] }) => {
        if (my < 0) return;

        if (last) {
          if (my > threshold || vy > 0.5) {
            api.start({ y: threshold });
            onRefresh();
            setTimeout(() => api.start({ y: 0 }), 1000);
          } else {
            api.start({ y: 0 });
          }
        } else {
          api.start({ y: Math.min(my, threshold * 1.5) });
        }
      },
    },
    {
      drag: {
        from: () => [0, y.get()],
        filterTaps: true,
        bounds: { top: 0 },
        rubberband: true,
        ...options.drag,
      },
    }
  );

  return { bind, progress: y.to([0, threshold], [0, 1]) };
};

/**
 * Long Press Hook
 * Detects long press gestures
 *
 * @param {function} onLongPress - Callback when long press detected
 * @param {object} options - Configuration options
 * @returns {function} Gesture bind function
 */
export const useLongPress = (onLongPress, options = {}) => {
  const duration = options.duration || 500;

  return useGesture(
    {
      onDrag: ({ tap, elapsedTime }) => {
        if (tap && elapsedTime >= duration) {
          onLongPress();
        }
      },
    },
    {
      drag: {
        delay: duration,
        filterTaps: false,
        ...options.drag,
      },
    }
  );
};

/**
 * Hover Intent Hook
 * Detects intentional hover (delays trigger)
 *
 * @param {object} callbacks - { onHoverStart, onHoverEnd }
 * @param {object} options - Configuration options
 * @returns {function} Gesture bind function
 */
export const useHoverIntent = (callbacks = {}, options = {}) => {
  const delay = options.delay || 300;
  let timeout;

  return useGesture({
    onHover: ({ hovering }) => {
      if (hovering) {
        timeout = setTimeout(() => {
          if (callbacks.onHoverStart) {
            callbacks.onHoverStart();
          }
        }, delay);
      } else {
        clearTimeout(timeout);
        if (callbacks.onHoverEnd) {
          callbacks.onHoverEnd();
        }
      }
    },
  });
};

/**
 * Scroll Gesture Hook
 * Advanced scroll detection with direction and velocity
 *
 * @param {object} callbacks - { onScrollUp, onScrollDown, onScrollEnd }
 * @param {object} options - Configuration options
 * @returns {function} Gesture bind function
 */
export const useScrollGesture = (callbacks = {}, options = {}) => {
  const threshold = options.threshold || 10;

  return useGesture(
    {
      onScroll: ({ delta: [, dy], direction: [, dirY], last }) => {
        if (Math.abs(dy) > threshold) {
          if (dirY === -1 && callbacks.onScrollUp) {
            callbacks.onScrollUp(dy);
          } else if (dirY === 1 && callbacks.onScrollDown) {
            callbacks.onScrollDown(dy);
          }
        }

        if (last && callbacks.onScrollEnd) {
          callbacks.onScrollEnd();
        }
      },
    },
    {
      scroll: {
        ...options.scroll,
      },
    }
  );
};

/**
 * Double Tap Hook
 * Detects double tap/click gestures
 *
 * @param {function} onDoubleTap - Callback when double tap detected
 * @param {object} options - Configuration options
 * @returns {function} Gesture bind function
 */
export const useDoubleTap = (onDoubleTap, options = {}) => {
  const delay = options.delay || 300;
  let lastTap = 0;

  return useGesture({
    onDrag: ({ tap, timeStamp }) => {
      if (tap) {
        const now = timeStamp;
        if (now - lastTap < delay) {
          onDoubleTap();
          lastTap = 0;
        } else {
          lastTap = now;
        }
      }
    },
  });
};

/**
 * Wheel Zoom Hook
 * Handles mouse wheel zoom
 *
 * @param {object} options - Configuration options
 * @returns {object} { bind, scale }
 */
export const useWheelZoom = (options = {}) => {
  const [{ scale }, api] = useSpring(() => ({ scale: 1 }));

  const bind = useGesture(
    {
      onWheel: ({ delta: [, dy] }) => {
        const newScale = Math.max(
          options.minScale || 0.5,
          Math.min(options.maxScale || 3, scale.get() - dy * 0.01)
        );

        api.start({ scale: newScale });

        if (options.onZoom) {
          options.onZoom(newScale);
        }
      },
    },
    {
      wheel: {
        ...options.wheel,
      },
    }
  );

  return { bind, scale };
};

/**
 * Combined Gesture Hook
 * Combines multiple gestures on same element
 *
 * @param {object} gestures - Object with gesture handlers
 * @param {object} options - Configuration options
 * @returns {function} Combined gesture bind function
 */
export const useCombinedGestures = (gestures, options = {}) => {
  return useGesture(
    {
      ...gestures,
    },
    {
      ...options,
    }
  );
};

export default {
  useSwipe,
  useDraggable,
  usePinchZoom,
  usePullToRefresh,
  useLongPress,
  useHoverIntent,
  useScrollGesture,
  useDoubleTap,
  useWheelZoom,
  useCombinedGestures,
};
