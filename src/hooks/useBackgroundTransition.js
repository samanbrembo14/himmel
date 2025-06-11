import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useBackgroundTransition(options = {}) {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Fade in the section background
          gsap.to(element, {
            backgroundPosition: options.backgroundPosition || 'center center',
            backgroundSize: options.backgroundSize || '100% 100%',
            opacity: 1,
            duration: options.duration || 1.5,
            ease: options.ease || "power2.inOut"
          });
          
          // If using image backgrounds
          if (element.querySelector('.bg-image')) {
            gsap.to(element.querySelector('.bg-image'), {
              opacity: options.bgOpacity || 0.8,
              scale: 1,
              duration: options.duration || 1.5,
              ease: options.ease || "power2.inOut"
            });
          }
        } else {
          // Optional: actions when section is not in view
        }
      });
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px'
    });
    
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [options]);
  
  return ref;
}