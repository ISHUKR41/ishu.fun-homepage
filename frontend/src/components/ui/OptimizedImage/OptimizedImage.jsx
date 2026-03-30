// OptimizedImage.jsx — Enhanced Lazy-loaded Optimized Image Component
// Supports WebP/AVIF with fallback, lazy loading, LQIP, and responsive images
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Detect WebP and AVIF support
const detectImageSupport = async () => {
  const webpSupport = await checkWebPSupport();
  const avifSupport = await checkAVIFSupport();
  return { webp: webpSupport, avif: avifSupport };
};

const checkWebPSupport = () => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => resolve(webP.height === 2);
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

const checkAVIFSupport = () => {
  return new Promise((resolve) => {
    const avif = new Image();
    avif.onload = avif.onerror = () => resolve(avif.height === 2);
    avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  });
};

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  objectFit = 'cover',
  lqip,
  sizes,
  onLoad,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(lqip || null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) {
      // Load immediately for above-fold images
      loadImage();
    } else {
      // Lazy load with Intersection Observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadImage();
              observer.disconnect();
            }
          });
        },
        { rootMargin: '50px' }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    }
  }, [src, priority]);

  const loadImage = () => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
      onLoad?.();
    };
  };

  // Generate srcset for responsive images
  const generateSrcSet = () => {
    if (!sizes) return undefined;

    const basePath = src.substring(0, src.lastIndexOf('.'));
    const extension = src.substring(src.lastIndexOf('.'));

    return sizes
      .map((size) => `${basePath}-${size}w${extension} ${size}w`)
      .join(', ');
  };

  return (
    <div
      ref={imgRef}
      className={className}
      style={{
        position: 'relative',
        width: width || '100%',
        height: height || 'auto',
        overflow: 'hidden',
      }}
    >
      {/* LQIP Background */}
      {lqip && !isLoaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${lqip})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(10px)',
            transform: 'scale(1.1)',
          }}
        />
      )}

      {/* Main Image */}
      {currentSrc && (
        <motion.img
          src={currentSrc}
          srcSet={generateSrcSet()}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '100%',
            height: '100%',
            objectFit,
            display: 'block',
          }}
        />
      )}

      {/* Loading Skeleton */}
      {!isLoaded && !lqip && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, var(--bg-surface) 0%, var(--bg-elevated) 50%, var(--bg-surface) 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }}
        />
      )}
    </div>
  );
}

// WebP/AVIF detection and source generation
export function generateImageSources(imagePath, options = {}) {
  const { formats = ['avif', 'webp', 'jpg'], sizes = [320, 640, 768, 1024, 1280, 1920] } = options;

  const basePath = imagePath.substring(0, imagePath.lastIndexOf('.'));
  const sources = [];

  formats.forEach((format) => {
    sources.push({
      type: `image/${format}`,
      srcset: sizes.map((size) => `${basePath}-${size}w.${format} ${size}w`).join(', '),
    });
  });

  return sources;
}

// Picture component with multiple formats
export function PictureImage({ src, alt, width, height, className, priority }) {
  const sources = generateImageSources(src);

  return (
    <picture>
      {sources.map((source, i) => (
        <source key={i} type={source.type} srcSet={source.srcset} />
      ))}
      <OptimizedImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
      />
    </picture>
  );
}
