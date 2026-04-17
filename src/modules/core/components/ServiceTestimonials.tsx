import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Phone } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Patel",
    role: "Business Owner",
    review: "Professional & thorough I felt confident throughout my entire treatment process every step The team provided exceptional care and attention. My vision has never been clearer!",
    avatar: "/images/testimonials/patient-1.jpg"
  },
  {
    id: 2,
    name: "John D.",
    role: "Specialist Eye care",
    review: "Professional & thorough I felt confident throughout my entire treatment process every step The team provided exceptional care and attention. My vision has never been clearer!",
    avatar: "/images/testimonials/patient-2.jpg"
  },
  {
    id: 3,
    name: "Michael K.",
    role: "Financial Consultant",
    review: "Professional & thorough I felt confident throughout my entire treatment process every step The team provided exceptional care and attention. My vision has never been clearer!",
    avatar: "/images/testimonials/patient-3.jpg"
  },
  {
    id: 4,
    name: "Rajesh Patel",
    role: "Business Owner",
    review: "Professional & thorough I felt confident throughout my entire treatment process every step The team provided exceptional care and attention. My vision has never been clearer!",
    avatar: "/images/testimonials/patient-1.jpg"
  },
  {
    id: 5,
    name: "John D.",
    role: "Specialist Eye care",
    review: "Professional & thorough I felt confident throughout my entire treatment process every step The team provided exceptional care and attention. My vision has never been clearer!",
    avatar: "/images/testimonials/patient-2.jpg"
  },
  {
    id: 6,
    name: "Michael K.",
    role: "Financial Consultant",
    review: "Professional & thorough I felt confident throughout my entire treatment process every step The team provided exceptional care and attention. My vision has never been clearer!",
    avatar: "/images/testimonials/patient-3.jpg"
  }
];

const StarIcon = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 0L10.618 5.666H16.5L11.741 9.25L13.859 15L8.5 11.25L3.141 15L5.259 9.25L0.5 5.666H6.382L8.5 0Z" fill="#00ADEE"/>
  </svg>
);

const ServiceTestimonials = () => {
  // Configured embla to respect drag, align start, and responsive breakpoints
  const [emblaRef] = useEmblaCarousel({ 
    align: 'start', 
    loop: false, 
    dragFree: false, 
    slidesToScroll: 1 
  });

  return (
    <section className="bg-[#F8F9FA] pb-[80px] lg:pb-[120px] overflow-hidden">
      <div className="container-padding">
        
        {/* Header */}
        <AnimateOnScroll className="flex flex-col items-center justify-center text-center mb-[60px]">
          <div className="flex items-center justify-center gap-[8.1px] mb-[10px]">
            <span className="w-[6px] h-[6px] rounded-full bg-[#00ADEE]" />
            <span className="text-[#15224D] font-medium text-[15.6px] leading-[22px]">Client Testimonials</span>
          </div>
          <h2 className="text-[#15224D] font-medium text-[30px] sm:text-[40px] md:text-[50.6px] leading-[1.2] md:leading-[62px] tracking-[-0.52px] max-w-[800px]">
            Trusted Eye Care Reflections from Valued Patients
          </h2>
        </AnimateOnScroll>

        {/* Carousel */}
        <AnimateOnScroll delay={0.2} className="w-full">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-[20px]" ref={emblaRef}>
            <div className="flex touch-pan-y" style={{ marginLeft: '-30px' }}>
              {testimonials.map((item) => (
                // Responsive slide sizing: 1 on mobile, 2 on tablet, 3 on desktop
                <div 
                  key={item.id} 
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] pl-[30px]"
                >
                  <div className="bg-white rounded-[20px] shadow-[0_5px_20px_rgba(21,34,77,0.03)] h-[440px] w-full relative select-none">
                    
                    {/* Stars */}
                    <div className="absolute top-[40px] left-[40px] flex items-center gap-[5.3px]">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>

                    {/* Review Text */}
                    <div className="absolute top-[79px] left-[40px] right-[40px]">
                      <p className="text-[#424C6F] font-medium text-[17.4px] leading-[25px]">
                        {item.review}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="absolute top-[304px] left-[40px] right-[40px] h-px bg-[#15224D]/10" />

                    {/* Author */}
                    <div className="absolute left-[40px] bottom-[44px] flex items-center">
                      <img 
                        src={item.avatar} 
                        alt={item.name} 
                        className="w-[47px] h-[47px] rounded-full object-cover shrink-0 pointer-events-none select-none"
                        draggable="false"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (!target.src.includes('author')) target.src = '/images/author-1.jpg'; // fallback
                        }}
                      />
                      <div className="ml-[20px] flex flex-col justify-center leading-none">
                        <span className="text-[#15224D] font-semibold text-[19.8px] leading-[24px] mb-[7px]">
                          {item.name}
                        </span>
                        <span className="text-[#424C6F] font-normal text-[15.1px] leading-[26px]">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Footer Actions */}
        <AnimateOnScroll delay={0.4} className="mt-[40px] flex flex-col items-center justify-center">
          
          <div className="flex flex-wrap items-center justify-center gap-[15px] mb-[15px]">
            <div className="relative w-[36px] h-[36px] sm:w-[42px] sm:h-[42px]">
              <img src="/images/testimonials/patient-1.jpg" alt="Author" className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] rounded-full object-cover border-[3px] border-[#F8F9FA]" />
              <div className="absolute right-[-6px] bottom-[-2px] w-[20px] h-[20px] rounded-full bg-[#00ADEE] flex items-center justify-center border-2 border-[#F8F9FA]">
                <Phone className="w-[8px] h-[8px] text-white" fill="white" />
              </div>
            </div>
            <p className="text-[#424C6F] font-normal text-[14px] sm:text-[15.5px] leading-[26px] text-center">
              Let's make something great work together. <a href="/contact" className="text-[#00ADEE] font-bold hover:text-[#008dbf] transition-colors ml-1">Get Free Quote</a>
            </p>
          </div>

          <div className="flex items-center flex-wrap justify-center gap-[6px]">
            <span className="text-[#15224D] font-bold text-[15.6px] mr-[4px]">4.9/5</span>
            <div className="flex items-center gap-[4px] mr-[4px]">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <span className="text-[#15224D] font-bold text-[15.6px]">Our 2000 Reviews</span>
          </div>

        </AnimateOnScroll>

      </div>
    </section>
  );
};

export default ServiceTestimonials;
