import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          // Optional: stop observing once revealed
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% is visible
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Give React a moment to render the DOM elements
    const timeoutId = setTimeout(() => {
      // Find all sections that don't already have motion elements from framer-motion heavily nested
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        // Only add base reveal class if it hasn't been added
        if (!section.classList.contains('reveal-base') && !section.classList.contains('reveal-active')) {
          section.classList.add('reveal-base');
          observer.observe(section);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [location.pathname]); // Re-run when route changes
};
