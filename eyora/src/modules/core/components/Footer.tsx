import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Linkedin } from 'lucide-react';
import EyoraButton from './EyoraButton';

const Footer = () => {
  const quickLinks = ['Home', 'About Us', 'Services', 'Pricing', 'Testimonials'];
  const services = [
    'Comprehensive Eye Exams',
    'Contact Lens Fitting',
    'Diabetic Eye Care',
    'Refractive Consultation',
    'Retinal Treatments'
  ];

  return (
    <footer
      className="container-padding mx-auto relative w-full min-h-[450px] lg:mb-6  overflow-hidden lg:rounded-[20px] bg-[#15224D] text-white "
      style={{
        backgroundImage: `url('/images/common/footer.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative z-10">
        {/* Top Section - Logo + Support */}
        <div className="max-w-[1400px] mx-auto pt-[36px] pb-[28px]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 border-b border-white/10 pb-[28px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-[50px] h-[50px] rounded-full bg-[#00ADEE] flex items-center justify-center">
                <div className="w-[26px] h-[26px] rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-[10px] h-[10px] rounded-full bg-white" />
                </div>
              </div>
              <span className="text-[24px] font-semibold text-white">Eyora.</span>
            </Link>

            {/* Support Blocks */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[30px]">
              {/* Urgent Support */}
              <a href="tel:+911234567890" className="flex items-center gap-[15px]">
                <div className="w-[50px] h-[50px] rounded-full bg-[#00ADEE] flex items-center justify-center">
                  <Phone className="w-[24px] h-[24px] text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-[19.8px] leading-[24px]">Urgent Support?</p>
                  <p className="text-white text-[13.5px] leading-[26px]">+91 123 456 789</p>
                </div>
              </a>

              {/* Email Support */}
              <a href="mailto:info@dominname.com" className="flex items-center gap-[15px]">
                <div className="w-[50px] h-[50px] rounded-full bg-[#00ADEE] flex items-center justify-center">
                  <Mail className="w-[24px] h-[24px] text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-[19.8px] leading-[24px]">Email Support?</p>
                  <p className="text-white text-[15.6px] leading-[26px]">info@dominname.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section - 4 Columns */}
        <div className="max-w-[1400px] mx-auto pt-[26px] pb-[60px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[60px]">
            {/* Column 1 - About */}
            <div>
              <h3 className="text-white font-semibold text-[19.7px] leading-[24px] mb-[14px]">About Our Eye Care</h3>
              <p className="text-white text-[15.1px] leading-[26px] mb-[24px]">
                We are committed to providing high-quality, compassionate eye care using advanced technology and personalized treatment.
              </p>
              <div className="flex items-center gap-[18px]">
                <a
                  href="#"
                  className="w-[36px] h-[36px] rounded-full border border-white flex items-center justify-center text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="w-[18px] h-[18px]" />
                </a>
                <a
                  href="#"
                  className="w-[36px] h-[36px] rounded-full border border-white flex items-center justify-center text-white"
                  aria-label="Instagram"
                >
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-[36px] h-[36px] rounded-full border border-white flex items-center justify-center text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-[18px] h-[18px]" />
                </a>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-[19.8px] leading-[24px] mb-[18px]">Quick Links</h3>
              <ul className="space-y-[15px]">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <Link
                      to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                      className="text-white text-[15.6px] leading-[24px]"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Our Services */}
            <div>
              <h3 className="text-white font-semibold text-[19.7px] leading-[24px] mb-[18px]">Our Services</h3>
              <ul className="space-y-[15px]">
                {services.map((service) => (
                  <li key={service}>
                    <Link to="/services" className="text-white text-[15.4px] leading-[24px]">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Our Schedule */}
            <div>
              <h3 className="text-white font-semibold text-[19.7px] leading-[24px] mb-[18px]">Our Schedule</h3>
              <div className="space-y-[16px]">
                <div className="flex items-center justify-between border-b border-white/10 pb-[12px]">
                  <span className="text-white text-[17px] leading-[18px] font-medium">Mon To Fri:</span>
                  <span className="text-white text-[14.6px] leading-[24px]">09:00 AM - 07:00 PM</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-[12px]">
                  <span className="text-white text-[17.2px] leading-[18px] font-medium">Sat To Sun:</span>
                  <span className="text-white text-[14.6px] leading-[24px]">09:00 AM - 07:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white text-[17.4px] leading-[18px] font-medium">Emergency:</span>
                  <span className="text-white text-[15px] leading-[24px]">24/7 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="max-w-[1400px] mx-auto py-[32px] border-t border-white/10">
          <p className="text-white text-[14.8px] leading-[26px] text-center">
            Copyright © 2026 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
