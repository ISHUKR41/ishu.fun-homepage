// animations/velocity/velocityAnimations.js
// Velocity.js animation utilities for high-performance animations

import Velocity from 'velocity-animate';

/**
 * Fade in element with velocity
 * @param {string|Element} element - Element or selector
 * @param {Object} options - Animation options
 */
export function velocityFadeIn(element, options = {}) {
  const {
    duration = 600,
    easing = 'easeOutQuart',
    delay = 0,
    complete = null,
  } = options;

  return Velocity(
    element,
    {
      opacity: [1, 0],
      translateY: [0, 20],
    },
    {
      duration,
      easing,
      delay,
      complete,
    }
  );
}

/**
 * Fade out element with velocity
 * @param {string|Element} element - Element or selector
 * @param {Object} options - Animation options
 */
export function velocityFadeOut(element, options = {}) {
  const {
    duration = 400,
    easing = 'easeInQuart',
    delay = 0,
    complete = null,
  } = options;

  return Velocity(
    element,
    {
      opacity: [0, 1],
      translateY: [20, 0],
    },
    {
      duration,
      easing,
      delay,
      complete,
    }
  );
}

/**
 * Slide in from direction
 * @param {string|Element} element - Element or selector
 * @param {string} direction - Direction: left, right, top, bottom
 * @param {Object} options - Options
 */
export function velocitySlideIn(element, direction = 'left', options = {}) {
  const {
    duration = 600,
    easing = 'easeOutExpo',
    distance = 100,
    delay = 0,
  } = options;

  const transforms = {
    left: { translateX: [0, -distance] },
    right: { translateX: [0, distance] },
    top: { translateY: [0, -distance] },
    bottom: { translateY: [0, distance] },
  };

  const transform = transforms[direction] || transforms.left;

  return Velocity(
    element,
    {
      ...transform,
      opacity: [1, 0],
    },
    {
      duration,
      easing,
      delay,
    }
  );
}

/**
 * Scale bounce in animation
 * @param {string|Element} element - Element or selector
 * @param {Object} options - Options
 */
export function velocityBounceIn(element, options = {}) {
  const {
    duration = 800,
    easing = 'spring',
    delay = 0,
  } = options;

  return Velocity(
    element,
    {
      scale: [1, 0],
      opacity: [1, 0],
    },
    {
      duration,
      easing,
      delay,
    }
  );
}

/**
 * Rotation animation
 * @param {string|Element} element - Element or selector
 * @param {number} degrees - Rotation degrees
 * @param {Object} options - Options
 */
export function velocityRotate(element, degrees = 360, options = {}) {
  const {
    duration = 1000,
    easing = 'easeInOutQuart',
    loop = false,
    delay = 0,
  } = options;

  return Velocity(
    element,
    {
      rotateZ: degrees,
    },
    {
      duration,
      easing,
      loop,
      delay,
    }
  );
}

/**
 * Shake animation
 * @param {string|Element} element - Element or selector
 * @param {Object} options - Options
 */
export function velocityShake(element, options = {}) {
  const {
    intensity = 10,
    duration = 500,
    complete = null,
  } = options;

  return Velocity(
    element,
    {
      translateX: [0, -intensity, intensity, -intensity, intensity, 0],
    },
    {
      duration,
      complete,
    }
  );
}

/**
 * Pulse animation
 * @param {string|Element} element - Element or selector
 * @param {Object} options - Options
 */
export function velocityPulse(element, options = {}) {
  const {
    scale = 1.1,
    duration = 600,
    loop = true,
    easing = 'easeInOutQuad',
  } = options;

  return Velocity(
    element,
    {
      scale: [scale, 1],
    },
    {
      duration,
      loop,
      easing,
    }
  );
}

/**
 * Flip animation
 * @param {string|Element} element - Element or selector
 * @param {string} axis - Axis: X, Y
 * @param {Object} options - Options
 */
export function velocityFlip(element, axis = 'Y', options = {}) {
  const {
    duration = 600,
    easing = 'easeInOutCubic',
    delay = 0,
  } = options;

  const transform = axis === 'Y' ? 'rotateY' : 'rotateX';

  return Velocity(
    element,
    {
      [transform]: [180, 0],
    },
    {
      duration,
      easing,
      delay,
    }
  );
}

/**
 * Swing animation
 * @param {string|Element} element - Element or selector
 * @param {Object} options - Options
 */
export function velocitySwing(element, options = {}) {
  const {
    duration = 1000,
    angle = 15,
    complete = null,
  } = options;

  return Velocity(
    element,
    {
      rotateZ: [0, angle, -angle, angle, -angle, 0],
    },
    {
      duration,
      complete,
    }
  );
}

/**
 * Attention seeker - wiggle
 * @param {string|Element} element - Element or selector
 * @param {Object} options - Options
 */
export function velocityWiggle(element, options = {}) {
  const {
    duration = 800,
    complete = null,
  } = options;

  return Velocity(
    element,
    {
      rotateZ: [0, -3, 3, -3, 3, 0],
      translateX: [0, -5, 5, -5, 5, 0],
    },
    {
      duration,
      complete,
    }
  );
}

/**
 * Jello animation
 * @param {string|Element} element - Element or selector
 * @param {Object} options - Options
 */
export function velocityJello(element, options = {}) {
  const {
    duration = 900,
    easing = 'easeInOutQuart',
    complete = null,
  } = options;

  return Velocity(
    element,
    {
      skewX: [0, -12.5, 6.25, -3.125, 1.5625, 0],
      skewY: [0, -12.5, 6.25, -3.125, 1.5625, 0],
    },
    {
      duration,
      easing,
      complete,
    }
  );
}

/**
 * Rubber band animation
 * @param {string|Element} element - Element or selector
 * @param {Object} options - Options
 */
export function velocityRubberBand(element, options = {}) {
  const {
    duration = 1000,
    complete = null,
  } = options;

  return Velocity(
    element,
    {
      scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
      scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
    },
    {
      duration,
      complete,
    }
  );
}

/**
 * Heart beat animation
 * @param {string|Element} element - Element or selector
 * @param {Object} options - Options
 */
export function velocityHeartBeat(element, options = {}) {
  const {
    duration = 1300,
    loop = true,
  } = options;

  return Velocity(
    element,
    {
      scale: [1, 1.3, 1, 1.3, 1],
    },
    {
      duration,
      loop,
    }
  );
}

/**
 * Bounce animation
 * @param {string|Element} element - Element or selector
 * @param {Object} options - Options
 */
export function velocityBounce(element, options = {}) {
  const {
    duration = 1000,
    height = 30,
    complete = null,
  } = options;

  return Velocity(
    element,
    {
      translateY: [0, -height, 0, -height / 2, 0, -height / 4, 0],
    },
    {
      duration,
      complete,
    }
  );
}

/**
 * Flash animation
 * @param {string|Element} element - Element or selector
 * @param {Object} options - Options
 */
export function velocityFlash(element, options = {}) {
  const {
    duration = 750,
    loop = 2,
  } = options;

  return Velocity(
    element,
    {
      opacity: [1, 0, 1, 0, 1],
    },
    {
      duration,
      loop,
    }
  );
}

/**
 * Stagger animation for multiple elements
 * @param {string} selector - Elements selector
 * @param {Object} animation - Animation properties
 * @param {Object} options - Options
 */
export function velocityStagger(selector, animation = {}, options = {}) {
  const {
    duration = 600,
    delay = 0,
    stagger = 100,
    easing = 'easeOutQuart',
  } = options;

  const elements = document.querySelectorAll(selector);

  elements.forEach((el, i) => {
    Velocity(
      el,
      animation,
      {
        duration,
        delay: delay + i * stagger,
        easing,
      }
    );
  });

  return elements;
}

/**
 * Custom easing curves
 */
export const customEasings = {
  bounceIn: [0.6, -0.28, 0.735, 0.045],
  bounceOut: [0.175, 0.885, 0.32, 1.275],
  elasticIn: [0.6, -0.28, 0.735, 0.045],
  elasticOut: [0.175, 0.885, 0.32, 1.675],
  backIn: [0.6, -0.28, 0.735, 0.045],
  backOut: [0.175, 0.885, 0.32, 1.275],
};

export default {
  velocityFadeIn,
  velocityFadeOut,
  velocitySlideIn,
  velocityBounceIn,
  velocityRotate,
  velocityShake,
  velocityPulse,
  velocityFlip,
  velocitySwing,
  velocityWiggle,
  velocityJello,
  velocityRubberBand,
  velocityHeartBeat,
  velocityBounce,
  velocityFlash,
  velocityStagger,
  customEasings,
};
