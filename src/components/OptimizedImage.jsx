import React, { useState, useEffect, useRef } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  lazy = true,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y1ZjVmNSIvPjwvc3ZnPg==',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const [imageSrc, setImageSrc] = useState(placeholder);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Generate optimized image paths
  const getOptimizedSrc = (originalSrc) => {
    const pathParts = originalSrc.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const nameWithoutExt = fileName.split('.')[0];
    
    // Handle spaces in filenames
    const cleanName = nameWithoutExt.replace(/\s+/g, ' ');
    
    return originalSrc.replace(
      fileName, 
      `optimized/${cleanName}.webp`
    );
  };

  const getFallbackSrc = (originalSrc) => {
    const pathParts = originalSrc.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const nameWithoutExt = fileName.split('.')[0];
    
    // Handle spaces in filenames
    const cleanName = nameWithoutExt.replace(/\s+/g, ' ');
    
    return originalSrc.replace(
      fileName, 
      `optimized/${cleanName}-fallback.jpg`
    );
  };

  useEffect(() => {
    if (!lazy || isInView) {
      const optimizedSrc = getOptimizedSrc(src);
      const fallbackSrc = getFallbackSrc(src);
      
      const img = new Image();
      
      img.onload = () => {
        setImageSrc(optimizedSrc);
        setIsLoaded(true);
      };
      
      img.onerror = () => {
        // Fallback to JPG if WebP fails
        setImageSrc(fallbackSrc);
        setIsLoaded(true);
      };
      
      img.src = optimizedSrc;
    }
  }, [src, isInView, lazy]);

  useEffect(() => {
    if (lazy && imgRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        },
        {
          rootMargin: '50px 0px',
          threshold: 0.1
        }
      );

      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [lazy]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
      style={{
        ...style,
        opacity: isLoaded ? 1 : 0.7,
        transition: 'opacity 0.3s ease-in-out',
        filter: isLoaded ? 'none' : 'blur(2px)'
      }}
      loading={lazy ? 'lazy' : 'eager'}
      {...props}
    />
  );
};

export default OptimizedImage; 