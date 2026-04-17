import { useState, useEffect } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { Phone, Mail, ChevronDown, Calendar } from 'lucide-react';

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', service: '', date: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Appointment request submitted!');
  };

  // Logo animation - start after 5 seconds
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Company logo component using PNG images from logo folder
  const CompanyLogo = ({ index }: { index: number }) => {
    return (
      <div className="flex items-center justify-center shrink-0" style={{ width: '170px', height: '40px' }}>
        <img 
          src={`/images/hero/logo/logo-${index}.png`} 
          alt={`Logo ${index}`} 
          className="w-full h-full object-contain"
        />
      </div>
    );
  };

  return (
    <section className="px-4 sm:px-4 lg:px-8 xl:px-[20px] max-w-[1600px] mx-auto my-8">
      <div 
        className="relative rounded-[20px] overflow-hidden"
        style={{ minHeight: '706.6px' }}
      >
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero/hero-bg.jpg)' }}
        />
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: '#15224D', opacity: 0.8 }}
        />

        <div className="relative z-10 py-[50px] sm:py-[60px] md:py-[80px] px-[20px] sm:px-[30px] md:px-[50px] lg:px-[80px] xl:px-[100px]">
          <div className="flex flex-col lg:flex-row gap-[40px] sm:gap-[50px] md:gap-[60px] xl:gap-[150px] ">
            {/* Left - Content */}
            <div className="flex-1 lg:max-w-[550px]">
              <AnimateOnScroll>
                {/* Section Label */}
                <div className="flex items-center gap-[8px] mb-[13px]">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#00ADEE]"></span>
                  <span className="text-white text-[15.6px] leading-[22px] font-medium">Book An Appointment</span>
                </div>

                {/* Heading */}
                <h2 
                  className="font-medium text-white mb-[10px] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-[62px]"
                  style={{ 
                    letterSpacing: '-0.52px',
                    maxWidth: '603.55px'
                  }}
                >
                  Book Your Eye Health Consultation Now
                </h2>

                {/* Paragraph */}
                <p 
                  className="text-white mb-[30px] sm:mb-[40px] text-[14px] sm:text-[15px] leading-[24px] sm:leading-[26px]"
                  style={{ 
                    maxWidth: '580.71px'
                  }}
                >
                  Scheduling your eye care appointment is quick and hassle-free. Our easy booking process allows you to choose a convenient time to consult
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                {/* Contact Links */}
                <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[30px]">
                  {/* Call Us */}
                  <a href="tel:+123456789" className="flex items-center gap-[12px] sm:gap-[15px] group">
                    <span 
                      className="flex items-center justify-center group-hover:bg-white transition-colors"
                      style={{ 
                        width: '50px', 
                        height: '50px', 
                        backgroundColor: '#00ADEE', 
                        borderRadius: '25px' 
                      }}
                    >
                      <Phone className="w-[24px] h-[24px] text-white group-hover:text-[#15224D] transition-colors" />
                    </span>
                    <div>
                      <p className="text-white font-semibold text-[16px] sm:text-[19.8px] leading-[22px] sm:leading-[24px]">Call Us!</p>
                      <p className="text-white text-[12px] sm:text-[13.8px] leading-[22px] sm:leading-[26px]">+(123) 456 789</p>
                    </div>
                  </a>

                  {/* Email Us */}
                  <a href="mailto:info@domainname.com" className="flex items-center gap-[12px] sm:gap-[15px] group">
                    <span 
                      className="flex items-center justify-center group-hover:bg-white transition-colors"
                      style={{ 
                        width: '50px', 
                        height: '50px', 
                        backgroundColor: '#00ADEE', 
                        borderRadius: '25px' 
                      }}
                    >
                      <Mail className="w-[24px] h-[24px] text-white group-hover:text-[#15224D] transition-colors" />
                    </span>
                    <div>
                      <p className="text-white font-semibold text-[16px] sm:text-[19.2px] leading-[22px] sm:leading-[24px]">E-mail Us!</p>
                      <p className="text-white text-[13px] sm:text-[15.6px] leading-[22px] sm:leading-[26px]">info@domainname.com</p>
                    </div>
                  </a>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right - Form */}
            <div className="w-full lg:w-[480px] xl:w-[540px] shrink-0">
              <AnimateOnScroll delay={0.2}>
                <form onSubmit={handleSubmit}>
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] sm:gap-[16px] mb-[12px] sm:mb-[16px]">
                    <input 
                      type="text" 
                      placeholder="First Name*" 
                      required 
                      value={formData.firstName} 
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} 
                      className="w-full h-[52px] sm:h-[58.4px] px-[15px] sm:px-[20px] text-white text-[14px] sm:text-[15.3px] outline-none focus:border-[#00ADEE]"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.1)', 
                        border: '1px solid rgba(255, 255, 255, 0.1)', 
                        borderRadius: '10px',
                        backdropFilter: 'blur(10px)'
                      }}
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name*" 
                      required 
                      value={formData.lastName} 
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} 
                      className="w-full h-[52px] sm:h-[58.4px] px-[15px] sm:px-[20px] text-white text-[14px] sm:text-[15.4px] outline-none focus:border-[#00ADEE]"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.1)', 
                        border: '1px solid rgba(255, 255, 255, 0.1)', 
                        borderRadius: '10px',
                        backdropFilter: 'blur(10px)'
                      }}
                    />
                  </div>

                  {/* Email */}
                  <input 
                    type="email" 
                    placeholder="E-mail Address*" 
                    required 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    className="w-full h-[52px] sm:h-[58.4px] px-[15px] sm:px-[20px] text-white text-[14px] sm:text-[15.1px] outline-none mb-[12px] sm:mb-[16px] focus:border-[#00ADEE]"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.1)', 
                      border: '1px solid rgba(255, 255, 255, 0.1)', 
                      borderRadius: '10px',
                      backdropFilter: 'blur(10px)'
                    }}
                  />

                  {/* Phone */}
                  <input 
                    type="tel" 
                    placeholder="Phone no. *" 
                    required 
                    value={formData.phone} 
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                    className="w-full h-[52px] sm:h-[58.4px] px-[15px] sm:px-[20px] text-white text-[14px] sm:text-[15px] outline-none mb-[12px] sm:mb-[16px] focus:border-[#00ADEE]"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.1)', 
                      border: '1px solid rgba(255, 255, 255, 0.1)', 
                      borderRadius: '10px',
                      backdropFilter: 'blur(10px)'
                    }}
                  />

                  {/* Service & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] sm:gap-[16px] mb-[16px] sm:mb-[20px]">
                    <div className="relative">
                      <select 
                        value={formData.service} 
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })} 
                        className="w-full h-[52px] sm:h-[58.4px] px-[15px] sm:px-[20px] text-white text-[14px] sm:text-[15.1px] outline-none appearance-none focus:border-[#00ADEE]"
                        style={{ 
                          background: 'rgba(255, 255, 255, 0.1)', 
                          border: '1px solid rgba(255, 255, 255, 0.1)', 
                          borderRadius: '10px',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        <option value="" className="text-[#15224D]">Select a Services</option>
                        <option value="eye-exam" className="text-[#15224D]">Eye Examination</option>
                        <option value="contact-lens" className="text-[#15224D]">Contact Lens Fitting</option>
                        <option value="retinal" className="text-[#15224D]">Retinal Treatment</option>
                        <option value="diabetic" className="text-[#15224D]">Diabetic Eye Care</option>
                      </select>
                      <ChevronDown className="absolute right-[20px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-white/60 pointer-events-none" />
                    </div>
                    <div className="relative">
                      <input 
                        type="date" 
                        value={formData.date} 
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })} 
                        className="w-full h-[52px] sm:h-[58.4px] px-[15px] sm:px-[20px] text-white text-[14px] sm:text-[15.8px] outline-none focus:border-[#00ADEE]"
                        style={{ 
                          background: 'rgba(255, 255, 255, 0.1)', 
                          border: '1px solid rgba(255, 255, 255, 0.1)', 
                          borderRadius: '10px',
                          backdropFilter: 'blur(10px)'
                        }}
                      />
                      <Calendar className="absolute right-[20px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-white/60 pointer-events-none" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="w-full h-[46px] sm:h-[50px] bg-[#00ADEE] text-white font-semibold text-[14px] sm:text-[15.9px] rounded-[10px] hover:bg-white hover:text-[#15224D] transition-colors"
                    style={{ textTransform: 'capitalize' }}
                  >
                    Make An Appointment
                  </button>
                </form>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Divider and Trusted Clients Text */}
          <div className="flex items-center justify-center gap-[10px] sm:gap-[20px] mt-[50px] sm:mt-[60px] md:mt-[80px] mb-[30px] sm:mb-[40px]">
            <div className="h-[0.8px] flex-1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
            <p className="text-white text-[13px] sm:text-[15px] leading-[22px] sm:leading-[26px] text-center">
              1000+ Trusted Clients Over Worldwide
            </p>
            <div className="h-[0.8px] flex-1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
          </div>

          {/* Logo Carousel */}
          <div className="overflow-hidden mt-[30px] sm:mt-[40px] px-[15px] sm:px-[20px] lg:px-[50px] xl:px-[100px]">
            <div 
              className={`flex items-center ${animate ? 'animate-marquee' : ''}`}
              style={{
                gap: 'calc((100% - 850px) / 4)'
              }}
            >
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center shrink-0" style={{ gap: 'calc((100vw - 200px - 850px) / 4)' }}>
                  {[1, 2, 3, 4, 5].map((index) => (
                    <CompanyLogo key={`${setIndex}-${index}`} index={index} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
