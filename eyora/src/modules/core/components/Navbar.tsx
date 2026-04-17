import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import EyoraButton from './EyoraButton';
import { useWebAuth } from '@/modules/auth/context/WebAuthContext';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
];

const Navbar = () => {
  const { user, logout } = useWebAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Fix: Don't use transparent navbar on certain pages where background is already light/white
  const isWhitePage = ['/login', '/register', '/dashboard', '/profile'].includes(location.pathname);
  const isTransparent = !isScrolled && !isWhitePage;

  const navbarBg = !isTransparent
    ? 'bg-card shadow-lg'
    : 'bg-transparent';

  const textColor = isTransparent ? 'text-primary-foreground' : 'text-secondary';
  const logoTextColor = isTransparent ? 'text-primary-foreground' : 'text-secondary';

  return (
    <header className="fixed top-2 xl:top-6 left-0 right-0 z-50 px-2 sm:px-4 lg:px-6 xl:px-[100px]">
      <nav
        className={`${navbarBg} w-full mx-auto max-w-[1550px] transition-all duration-500 ease-in-out rounded-full px-4 sm:px-4 lg:px-4 xl:px-[20px]`}
      >
        <div className="flex items-center justify-between h-[60px] lg:h-[80px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 relative z-[60]" onClick={() => setMenuOpen(false)}>
            <img src="/images/logo-icon.png" alt="Eyora" className="w-10 h-10" />
            <span className={`text-2xl font-bold ${menuOpen ? 'text-white' : logoTextColor}`}>
              Eyora<span className={menuOpen ? 'text-white' : 'text-primary'}>.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-[16px] font-medium transition-colors duration-300 hover:text-primary ${location.pathname === item.to ? 'text-primary' : textColor
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-4">
              {user ? (
                <div className="relative group/profile">
                  <div className={`flex items-center gap-3 font-medium bg-gray-100 hover:bg-gray-200 text-[#15224D] px-4 py-2 rounded-full transition-all duration-300 cursor-pointer shadow-sm`}>
                    <div className="w-8 h-8 bg-[#00ADEE] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {user?.name?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <span className="max-w-[120px] truncate">
                      {user?.name?.split(' ')[0] || user?.email?.split('@')[0]}
                    </span>
                  </div>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-[calc(100%+0px)] right-0 pt-4 opacity-0 invisible group-hover/profile:opacity-100 group-hover/profile:visible transition-all duration-300 transform translate-y-2 group-hover/profile:translate-y-0 z-50">
                    <div className="bg-white rounded-[20px] shadow-[0_15px_50px_rgba(21,34,77,0.15)] overflow-hidden min-w-[220px] border border-gray-100">
                      <div className="px-6 bg-gray-50 border-b border-gray-100">
                        <p className="text-[14px] font-bold text-[#15224D] truncate">{user.name}</p>
                        <p className="text-[12px] text-[#868E96] truncate">{user.email}</p>
                      </div>
                      <Link to="/profile" className="flex items-center gap-3 px-6 py-4 text-[#15224D] hover:bg-gray-50 hover:text-[#00ADEE] transition-all font-medium">
                        <User className="w-4 h-4" /> My Profile
                      </Link>
                      <button 
                        onClick={() => {
                          logout();
                          window.location.href = '/'; // Simple hard redirect to clear state and go home
                        }} 
                        className="w-full flex items-center gap-3 px-6 py-4 text-[#FA6E6E] hover:bg-red-50 transition-all font-medium text-left border-t border-gray-100"
                      >
                        <X className="w-4 h-4" /> Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link 
                  to="/login" 
                  className={`flex items-center gap-2 font-medium bg-gray-100 hover:bg-gray-200 text-[#15224D] px-4 py-2 rounded-full transition-all duration-300 shadow-sm mr-2`}
                >
                  <User className="w-4 h-4 text-[#00ADEE]" />
                  <span>Account</span>
                </Link>
              )}
              <EyoraButton to="/appointment" text="Book Appointment" hoverStyle={isTransparent ? "default" : "darkBlue"} />
            </div>
            <button
              className="xl:hidden w-[38px] h-[38px] bg-[#00ADEE] rounded-[8px] flex items-center justify-center transition-colors duration-300 z-[60]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <div className="w-[32px] h-[32px] bg-white rounded flex items-center justify-center">
                  <X size={24} className="text-[#15224D]" strokeWidth={2.5} />
                </div>
              ) : (
                <Menu size={26} className="text-white" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`xl:hidden fixed inset-0 bg-[#00ADEE] z-50 transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          <div className="flex flex-col h-full pt-[120px] px-6">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-white text-[22px] font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/appointment"
                className="text-white text-[22px] font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Appointment
              </Link>
              <div className="w-full h-px bg-white/20 my-2" />
              {user ? (
                <>
                  <Link to="/profile" className="text-white text-[22px] font-medium transition-colors flex items-center gap-4" onClick={() => setMenuOpen(false)}>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 font-bold">
                      {user?.name?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <span>{user?.name?.split(' ')[0] || user?.email?.split('@')[0]}</span>
                  </Link>
                  <button 
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                      window.location.href = '/';
                    }} 
                    className="text-white/80 text-[22px] font-medium transition-colors flex items-center gap-4 text-left pl-2"
                  >
                    <X size={24} /> Sign Out
                  </button>
                </>
              ) : (
                <Link to="/login" className="text-white text-[22px] font-medium transition-colors flex items-center gap-4" onClick={() => setMenuOpen(false)}>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20">
                    <User size={20} />
                  </div>
                  <span>Account</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
