import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import SectionLabel from './SectionLabel';
import { Phone, Star } from 'lucide-react';

const testimonials = [
  { 
    name: 'Anita Sharma', 
    role: 'Specialist Eye care', 
    image: '/images/testimonials/patient-1.jpg', 
    text: 'Professional, and thorough. I felt confident throughout my entire treatment process every step The' 
  },
  { 
    name: 'John D.', 
    role: 'Specialist Eye care', 
    image: '/images/testimonials/patient-2.jpg', 
    text: 'Professional, and thorough. I felt confident throughout my entire treatment process every step The' 
  },
  { 
    name: 'Courtney Henry', 
    role: 'Specialist Eye care', 
    image: '/images/testimonials/patient-3.jpg', 
    text: 'Professional, and thorough. I felt confident throughout my entire treatment process every step The' 
  },
  { 
    name: 'Michael R.', 
    role: 'Specialist Eye care', 
    image: '/images/testimonials/patient-4.jpg', 
    text: 'Professional, and thorough. I felt confident throughout my entire treatment process every step The' 
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (translateX < -50 && currentIndex < testimonials.length - 2) {
      setCurrentIndex(currentIndex + 1);
    } else if (translateX > 50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    setTranslateX(0);
  };

  return (
    <section className="section-padding container-padding bg-[#F8F9FA]">
      <AnimateOnScroll>
        <SectionLabel text="Client Testimonials" center />
        <h2 className="text-[24px] md:text-[40px] lg:text-[50px] font-medium text-[#15224D] leading-[32px] md:leading-[42px] lg:leading-[62px] text-center max-w-[700px] mx-auto mb-12 tracking-[-0.5px]">
          Genuine Feedback From Our Valued Patients
        </h2>
      </AnimateOnScroll>

      {/* Testimonial Slider */}
      <div 
        ref={containerRef}
        className="overflow-hidden mb-8 cursor-grab active:cursor-grabbing"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{ 
            transform: `translateX(calc(-${currentIndex * 50}% - ${currentIndex * 12}px + ${translateX}px))` 
          }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="w-full  lg:w-[calc(50%-12px)] flex-shrink-0">
              <div className="bg-white rounded-[20px] overflow-hidden flex flex-col md:flex-row lg:flex-row h-auto lg:h-[360px]">
                {/* Image */}
                <div className="w-full md:w-[46%] lg:w-[46%] h-[240px] sm:h-[280px] lg:h-full p-[10px]">
                  <div className="w-full h-full rounded-[16px] overflow-hidden">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      loading="lazy" 
                      className="w-full h-full object-cover" 
                      draggable={false}
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="w-full md:w-[46%] lg:w-[54%] py-6 px-5 lg:py-8 lg:pr-6 lg:pl-2 flex flex-col justify-center">
                  {/* Quote Icon */}
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none" className="mb-3 sm:mb-4 lg:mb-4">
                    <path d="M10 20C10 15.5817 13.5817 12 18 12V16C15.7909 16 14 17.7909 14 20H18V28H10V20ZM22 20C22 15.5817 25.5817 12 30 12V16C27.7909 16 26 17.7909 26 20H30V28H22V20Z" fill="#00ADEE"/>
                  </svg>
                  
                  <p className="text-[#424C6F] text-[14px] sm:text-[15px] leading-[24px] sm:leading-[26px] mb-4 sm:mb-5 lg:mb-6">{t.text}</p>
                  
                  {/* Divider */}
                  <div className="border-t border-[#15224D]/10 pt-3 sm:pt-3 lg:pt-4 mt-auto">
                    <h4 className="text-[#15224D] font-semibold text-[16px] sm:text-[17px] lg:text-[18px] leading-[20px] sm:leading-[21px] lg:leading-[22px] mb-1">{t.name}</h4>
                    <p className="text-[#424C6F] text-[14px] sm:text-[15px] leading-[20px] sm:leading-[21px] lg:leading-[22px]">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <AnimateOnScroll>
        <div className="flex flex-col items-center gap-4 mt-8">
          {/* Contact Row */}
          <div className="flex items-center md:gap-0">
            <div className="w-[32px] h-[32px] rounded-full overflow-hidden border border-white">
              <img src="/images/testimonials/patient-1.jpg" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <span className="md:mr-2 w-[32px] h-[32px] rounded-full bg-[#00ADEE] border border-white flex items-center justify-center flex-shrink-0">
            <Phone className="w-4 h-4 text-white" />
            </span>
            <p className="text-[#424C6F] text-[12px] md:text-[15px]">
              Connect with us today and take the first step toward clearer vision - 
              <Link to="/contact" className="text-[#00ADEE] font-semibold underline hover:no-underline">Contact Us.</Link>
            </p>
          </div>
          
          {/* Rating Row */}
          <div className="flex items-center gap-2">
            <span className="text-[#15224D] font-bold text-[15px]">4.9/5</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#00ADEE] text-[#00ADEE]" />
              ))}
            </div>
            <span className="text-[#15224D] font-semibold text-[15px]">Our 4200 Reviews</span>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default TestimonialsSection;
