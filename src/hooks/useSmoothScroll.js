import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Register ScrollToPlugin
    gsap.registerPlugin(ScrollToPlugin);
    
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      e.preventDefault();
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      
      if (element) {
        const navbarHeight = 80; // Approximate navbar height
        
        gsap.to(window, {
          duration: 1.2, 
          scrollTo: { 
            y: element, 
            offsetY: navbarHeight 
          },
          ease: "power3.inOut"
        });
        
        // Update URL hash without scrolling (optional)
        if (history.pushState) {
          history.pushState(null, null, href);
        } else {
          location.hash = href;
        }
      }
    };

    // Add event listener to handle all anchor clicks
    document.body.addEventListener('click', handleAnchorClick);

    return () => {
      document.body.removeEventListener('click', handleAnchorClick);
    };
  }, []);
};