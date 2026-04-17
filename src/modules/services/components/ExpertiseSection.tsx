import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';
import EyoraButton from '@/modules/core/components/EyoraButton';

const AnimatedProgressBar = ({ label, percentage, className = "mb-[25px]" }: { label: string; percentage: number; className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={className} ref={barRef}>
      <div className="flex justify-between items-center mb-[10px]">
        <span className="text-[#15224D] font-medium text-[17.2px]">{label}</span>
        <span className="text-[#15224D] font-medium text-[18px]">{percentage}%</span>
      </div>
      <div className="w-full h-[6px] bg-[#15224D]/10 rounded-[10px] overflow-hidden">
        <div
          className="h-full bg-[#00ADEE] rounded-[10px] transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${percentage}%` : '0%' }}
        />
      </div>
    </div>
  );
};

const ExpertiseSection = () => {
  return (
    <section className="bg-transparent pb-[80px] lg:pb-[120px]">
      <div className="px-0 sm:px-0 lg:px-8 xl:px-[40px] max-w-[1500px] mx-auto">
        <div className="bg-white lg:rounded-[20px] p-[16px] sm:p-[20px] md:p-[30px] lg:p-[50px] relative overflow-hidden shadow-[0px_10px_40px_rgba(21,34,77,0.04)]">
          {/* Faint watermark illustration can be added here if available */}
          <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[60px] xl:gap-[80px] items-stretch">

            {/* Left: Image & Stats */}
            <AnimateOnScroll className="w-full lg:w-1/2 relative min-h-[450px] sm:min-h-[500px] lg:min-h-[625px]">
              {/* Image */}
              <div className="absolute inset-0 rounded-[20px] overflow-hidden">
                <img src="/images/services/service-1.jpg" alt="Expertise" className="w-full h-full object-cover" />
              </div>

              {/* Stats Card */}
              <div className="absolute top-[20px] bottom-[20px] left-[15px] sm:left-[20px] w-[140px] sm:w-[180px] md:w-[250px] bg-white rounded-[20px] shadow-[0_15px_40px_rgba(21,34,77,0.08)] flex flex-col z-10 py-[10px] sm:py-0">
                <div className="flex-1 flex flex-col items-center justify-center mx-[10px] sm:mx-[20px] md:mx-[30px] border-b border-[#15224D]/10">
                  <div className="flex items-center text-[#15224D] mb-0 sm:mb-1">
                    <span className="font-semibold text-[22px] sm:text-[28px] md:text-[33.4px] leading-[30px] sm:leading-[40px]">15</span>
                    <span className="font-semibold text-[24px] sm:text-[32px] md:text-[40px] leading-[30px] sm:leading-[40px]">+</span>
                  </div>
                  <span className="text-[#424C6F] font-normal text-[11px] sm:text-[13px] md:text-[15px] leading-[16px] sm:leading-[26px] text-center">Years of experience</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center mx-[10px] sm:mx-[20px] md:mx-[30px] border-b border-[#15224D]/10">
                  <div className="flex items-center text-[#15224D] mb-0 sm:mb-1">
                    <span className="font-semibold text-[24px] sm:text-[32px] md:text-[40px] leading-[30px] sm:leading-[40px]">5</span>
                    <span className="font-semibold text-[24px] sm:text-[32px] md:text-[40px] leading-[30px] sm:leading-[40px]">k+</span>
                  </div>
                  <span className="text-[#424C6F] font-normal text-[11px] sm:text-[13px] md:text-[15.3px] leading-[16px] sm:leading-[26px] text-center">Our happy patients</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center mx-[10px] sm:mx-[20px] md:mx-[30px] border-b border-[#15224D]/10">
                  <div className="flex items-center text-[#15224D] mb-0 sm:mb-1">
                    <span className="font-semibold text-[22px] sm:text-[28px] md:text-[35px] leading-[30px] sm:leading-[40px]">100</span>
                    <span className="font-semibold text-[24px] sm:text-[32px] md:text-[40px] leading-[30px] sm:leading-[40px]">%</span>
                  </div>
                  <span className="text-[#424C6F] font-normal text-[11px] sm:text-[13px] md:text-[15.1px] leading-[16px] sm:leading-[26px] text-center">Patient center care</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center mx-[10px] sm:mx-[20px] md:mx-[30px]">
                  <div className="flex items-center text-[#15224D] mb-0 sm:mb-1">
                    <span className="font-semibold text-[22px] sm:text-[28px] md:text-[35px] leading-[30px] sm:leading-[40px]">4.9</span>
                  </div>
                  <span className="text-[#424C6F] font-normal text-[11px] sm:text-[13px] md:text-[15.1px] leading-[16px] sm:leading-[26px] text-center">Satisfied client rate</span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right: Content */}
            <div className="w-full lg:w-1/2 mt-[40px] lg:mt-0 flex flex-col justify-center">
              <AnimateOnScroll delay={0.2} className="max-w-[800px]">
                <div className="flex items-center gap-[8px] mb-[15px]">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#00ADEE]" />
                  <span className="text-[#15224D] text-[15.6px] font-medium leading-[22px]">Our Expertise</span>
                </div>

                <h2 className="text-[#15224D] font-medium text-[28px] sm:text-[36px] md:text-[45px] leading-[1.2] md:leading-[52px] tracking-[-0.52px] mb-[15px] sm:mb-[25px]">
                  Professional Expertise<br className="hidden md:block" /> You Can Always Trust
                </h2>

                <p className="text-[#424C6F] font-normal text-[14px] sm:text-[15px] leading-[22px] sm:leading-[26px] mb-[30px] sm:mb-[45px]">
                  Our team brings years of specialized experience, advanced training, excellence to every patient interaction we are committed to delivering accurate diagnoses.
                </p>

                {/* Bars */}
                <div className="pr-[10px] sm:pr-[20px] lg:pr-[50px]">
                  <AnimatedProgressBar label="Eye Diagnosis" percentage={86} className="mb-[20px] sm:mb-[25px]" />
                  <AnimatedProgressBar label="Glaucoma Care" percentage={94} className="mb-[30px] sm:mb-[40px]" />
                </div>

                {/* Footer Buttons */}
                <div className="border-t border-[#15224D]/10 pt-[30px] sm:pt-[45px] flex flex-col sm:flex-row items-start sm:items-center justify-start gap-[25px] sm:gap-[40px]">
                  <EyoraButton to="/appointment" text="Book An Appointment" className="text-[14px] sm:text-[15.9px] font-semibold px-[24px] sm:px-[30px]" />

                  <div className="flex items-center gap-[15px]">
                    <div className="w-[45px] sm:w-[50px] h-[45px] sm:h-[50px] bg-[#15224D] rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] fill-white text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#15224D] font-semibold text-[18px] sm:text-[19.8px] leading-[22px] sm:leading-[24px]">Urgent Support?</span>
                      <span className="text-[#424C6F] font-normal text-[13px] sm:text-[13.5px] leading-[22px] sm:leading-[26px]">+91 (123) 456-789</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
