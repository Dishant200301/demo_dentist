import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; to?: string }[];
}

const PageBanner = ({ title, breadcrumbs }: PageBannerProps) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset / 2.5);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[400px] lg:h-[550px] xl:rounded-[20px] overflow-hidden mx-0 sm:mx-0 lg:mx-0 xl:mx-[14px] xl:mt-4">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 will-change-transform"
        style={{ 
          backgroundImage: 'url(/images/hero/hero-bg.jpg)',
          transform: `translate3d(0, ${offsetY}px, 0)`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center pt-20">
        <h1 className="text-[30px] md:text-5xl lg:text-[72px] font-sans text-white md:mb-2 capitalize">{title}</h1>
        <div className="flex items-center gap-3 text-white text-sm md:text-lg font-medium">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-3">
              {i > 0 && <span className="text-white/60">/</span>}
              {crumb.to ? (
                <Link to={crumb.to} className="hover:text-primary transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-white/60">{crumb.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
