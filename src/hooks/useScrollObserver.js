import { useEffect, useState, useRef } from 'react';

export const useScrollObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, {
      root: null,
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px'
    });
    
    const currentElement = ref.current;
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options.threshold, options.rootMargin]);
  
  return [ref, isVisible];
};