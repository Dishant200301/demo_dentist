import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EyoraButton from '@/modules/core/components/EyoraButton';
import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
];

const NotFound = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found - Eyora Eye Care</title>
        <meta name="robots" content="noindex" />
        <style>{`
          /* Hide the globally rendered Navbar */
          header:not(#not-found-header) {
            display: none !important;
          }
        `}</style>
      </Helmet>

      {/* Custom Isolated White Pill Navbar */}
      <header id="not-found-header" className="fixed top-4 xl:top-6 left-0 right-0 z-[100] transition-all duration-300">
        <nav className="bg-white shadow-[0_15px_40px_rgba(21,34,77,0.06)] rounded-full mx-4 sm:mx-6 lg:mx-8 xl:mx-[100px] px-[20px] sm:px-[30px] h-[70px] lg:h-[80px] flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 relative z-[110]" onClick={() => setMenuOpen(false)}>
            <img src="/images/logo-icon.png" alt="Eyora" className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] object-contain" />
            <span className="text-[24px] lg:text-[28px] font-bold text-[#15224D] tracking-tight">
              Eyora<span className="text-[#00ADEE]">.</span>
            </span>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-10 relative z-[110]">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[#15224D] font-medium text-[15.5px] hover:text-[#00ADEE] transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4 relative z-[110]">
            <div className="hidden xl:block">
              <EyoraButton to="/appointment" text="Book Appointment" hoverStyle="darkBlue" />
            </div>
            <button
              className="xl:hidden w-[40px] h-[40px] bg-[#00ADEE] rounded-[8px] flex items-center justify-center transition-colors shadow-sm"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                 <div className="w-[34px] h-[34px] bg-white rounded flex items-center justify-center">
                    <X size={24} className="text-[#15224D]" strokeWidth={2.5} />
                 </div>
              ) : (
                 <Menu size={24} className="text-white" strokeWidth={2.5} />
              )}
            </button>
          </div>
          
          {/* Mobile Overlay Menu */}
          <div 
            className={`xl:hidden fixed inset-0 bg-[#00ADEE] z-[105] transition-transform duration-500 ease-in-out flex flex-col pt-[120px] px-6 ${
              menuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
          >
            <div className="flex flex-col gap-[25px]">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-white text-[24px] font-medium transition-colors hover:text-[#15224D]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4">
                 <EyoraButton to="/appointment" text="Book Appointment" variant="white" onClick={() => setMenuOpen(false)} />
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main 404 Content */}
      <div className="min-h-[100vh] flex items-center justify-center container-padding py-[100px] relative z-10 pt-[140px] bg-[#F8F9FA] overflow-hidden">

        <div className="max-w-[700px] w-full text-center relative z-10">
          <AnimateOnScroll className="relative z-10">
            <h1 className="text-[120px] sm:text-[180px] lg:text-[230px] font-bold text-[#15224D] opacity-[0.04] leading-none select-none tracking-tighter mb-20">
              404
            </h1>
            
            <div className="-mt-[40px] sm:-mt-[60px] lg:-mt-[90px]">
              <h2 className="text-[#15224D] text-[36px] sm:text-[45px] lg:text-[54px] font-medium leading-[1.1] mb-[20px] tracking-[-1px]">
                Page Not Found
              </h2>
              <p className="text-[#424C6F] font-normal text-[16px] lg:text-[18px] leading-[28px] max-w-[500px] mx-auto mb-[45px]">
                The page you are looking for is currently out of focus. It might have been moved or doesn't exist anymore.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center">
                <EyoraButton to="/" text="Back To Home" className="px-[35px]" hoverStyle="darkBlue" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  );
};

export default NotFound;
