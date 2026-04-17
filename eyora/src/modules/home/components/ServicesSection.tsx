import { Link } from 'react-router-dom';
import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';
import SectionLabel from '@/modules/core/components/SectionLabel';
import { ArrowRight } from 'lucide-react';

import { services } from '@/modules/services/data';

const serviceIcons = [
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5C7.03 5 3.24 8.83 2 12c1.24 3.17 5.03 7 10 7s8.76-3.83 10-7c-1.24-3.17-5.03-7-10-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 4L6 6M20 4L18 6M4 20L6 18M20 20L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2" fill="white"/>
  </svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12h4M18 12h4M12 2v4M12 18v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
];

const ServicesSection = () => (
  <section className="container-padding py-[80px] lg:py-[120px] bg-white rounded-[20px]">
    <AnimateOnScroll>
      <div className="flex items-center justify-center gap-[8px] mb-[13px]">
        <span className="w-[6px] h-[6px] rounded-full bg-[#00ADEE]"></span>
        <span className="text-[#15224D] text-[15.5px] leading-[22px] font-medium">Our Services</span>
      </div>
      <h2 className="text-[32px] sm:text-[40px] lg:text-[50.2px] font-medium text-[#15224D] leading-[40px] sm:leading-[50px] lg:leading-[62px] text-center max-w-[600px] mx-auto mb-[50px] lg:mb-[80px] tracking-[-0.52px]">
        Excellence in Vision Care<br className="hidden sm:block" /> Through Innovation
      </h2>
    </AnimateOnScroll>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[30px]">
      {services.slice(0, 3).map((service, i) => (
        <AnimateOnScroll key={service.id} delay={i * 0.1}>
          <div className="bg-[#F5F5F5] rounded-[20px] p-[30px]">
            <div className="flex items-center gap-[15px] mb-[25px]">
              <div className="w-[50px] h-[50px] rounded-full bg-[#00ADEE] flex items-center justify-center flex-shrink-0">
                {serviceIcons[i % 3]}
              </div>
              <h3 className="text-[#15224D] font-semibold text-[18px] lg:text-[19.7px] leading-[26px]">
                {service.title}
              </h3>
            </div>
            <div className="rounded-[12px] overflow-hidden mb-[20px] h-[94px]">
              <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <p className="text-[#424C6F] text-[15.1px] leading-[26px] mb-[20px] min-h-[78px]">
              {service.desc}
            </p>
            <div className="border-t border-[#15224D]/10 pt-[15px]">
              <Link to={`/services/${service.id}`} className="group inline-flex items-center gap-[10px] text-[#15224D] font-semibold text-[15.9px] leading-[16px]">
                <span>Read More</span>
                <span className="w-[24px] h-[24px] rounded-full bg-[#00ADEE] flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-white group-hover:-rotate-45 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      ))}
    </div>

    <AnimateOnScroll>
      <div className="text-center">
        <div className="flex flex-wrap items-center justify-center gap-[10px] mb-[15px]">
          <span className="bg-[#00ADEE] text-white text-[13.5px] font-medium px-[12px] py-[4px] rounded-[20px]">Free</span>
          <span className="text-[#424C6F] text-[15.1px] leading-[26px]">Begin your path to total relaxation today.</span>
          <Link to="/appointment" className="text-[#00ADEE] font-bold text-[15.9px] leading-[26px] underline hover:no-underline">Book Your Free Eye Care Testing!</Link>
        </div>
        <div className="flex items-center justify-center gap-[10px]">
          <span className="font-semibold text-[#15224D] text-[14px] leading-[21px] tracking-[-0.16px]">4.9</span>
          <span className="font-semibold text-[#15224D] text-[16px] leading-[21px] tracking-[-0.16px]">/5</span>
          <div className="flex gap-[6px]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#00ADEE" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <span className="text-[#15224D] font-semibold text-[15.1px] leading-[21px]">Over 4200 Reviews</span>
        </div>
      </div>
    </AnimateOnScroll>
  </section>
);

export default ServicesSection;
