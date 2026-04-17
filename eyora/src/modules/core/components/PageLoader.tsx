import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-secondary transition-opacity duration-300">
      <div className="relative">
        <div className="w-16 h-16 flex items-center justify-center">
          <img src="/images/logo-icon.png" alt="Eyora" className="w-10 h-10 animate-pulse-soft" />
        </div>
        <div className="absolute inset-0 w-16 h-16">
          <svg className="animate-spin-slow" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="28" fill="none" stroke="hsl(197, 100%, 47%)" strokeWidth="3" strokeDasharray="120 60" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
