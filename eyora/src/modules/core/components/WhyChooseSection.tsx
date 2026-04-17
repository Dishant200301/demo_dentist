import { useEffect, useRef, useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { Check, Plus } from 'lucide-react';

const ProgressBar = ({ label, value }: { label: string; value: number }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(value); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="mb-[20px]">
      <div className="flex justify-between mb-[8px]">
        <span className="text-white text-[14px] font-medium">{label}</span>
        <span className="text-white text-[14px] font-bold">{value}%</span>
      </div>
      <div className="h-[4px] bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#00ADEE] rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${width}%` }} 
        />
      </div>
    </div>
  );
};

const WhyChooseSection = () => (
  <section className="container-padding py-[60px] sm:py-[80px] lg:py-[60px]">
    <div 
      className="bg-[#15224D] rounded-[16px] sm:rounded-[20px] overflow-hidden relative"
      style={{
        backgroundImage: `url('/images/common/footer.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left - Image with Floating Cards */}
        <div className="relative h-[350px] sm:h-[400px] lg:h-[700px]">
          <img 
            src="/images/hero/whychooseus.png" 
            alt="Why Choose Eyora" 
            loading="lazy" 
            className="w-full h-full object-contain object-bottom" 
          />
          
          {/* Floating Card - Trusted by Happy Patient */}
          <div className="absolute top-[20px] sm:top-[40px] lg:top-[60px] left-[15px] sm:left-[20px] lg:left-[40px] bg-white/10 backdrop-blur-md rounded-[10px] sm:rounded-[12px] p-[10px] sm:p-[15px] border border-white/20">
            <div className="flex items-center gap-0 mb-[8px] sm:mb-[10px]">
              <div className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-full border border-white bg-gray-300 overflow-hidden relative z-10">
                <img src="/images/team/doctor-1.png" alt="Author" className="w-full h-full object-cover" />
              </div>
              <div className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-full border border-white bg-gray-300 overflow-hidden -ml-[6px] sm:-ml-[8px] relative z-20">
                <img src="/images/team/doctor-2.png" alt="Author" className="w-full h-full object-cover" />
              </div>
              <div className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-full border border-white bg-gray-300 overflow-hidden -ml-[6px] sm:-ml-[8px] relative z-30">
                <img src="/images/team/doctor-3.png" alt="Author" className="w-full h-full object-cover" />
              </div>
              <div className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-full border border-white bg-[#00ADEE] flex items-center justify-center -ml-[6px] sm:-ml-[8px] relative z-40">
                <Plus className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] text-white" />
              </div>
            </div>
            <p className="text-white text-[12px] sm:text-[13px] font-medium">Trusted by Happy Patient</p>
          </div>

          {/* Floating Card - Success Treatment */}
          <div className="absolute bottom-[20px] sm:bottom-[40px] lg:bottom-[60px] right-[15px] sm:right-[20px] lg:right-[40px] bg-white/10 backdrop-blur-md rounded-[10px] sm:rounded-[12px] p-[10px] sm:p-[15px] border border-white/20 flex items-center gap-[10px] sm:gap-[15px]">
            <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] relative flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="22" fill="none" stroke="#2A3A6E" strokeWidth="4" />
                <circle 
                  cx="25" 
                  cy="25" 
                  r="22" 
                  fill="none" 
                  stroke="#00ADEE" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  strokeDasharray="138"
                  strokeDashoffset="28"
                />
              </svg>
              <span className="text-white text-[12px] sm:text-[14px] font-bold">80%</span>
            </div>
            <p className="text-white text-[12px] sm:text-[13px] font-medium">Success Treatment</p>
          </div>
        </div>

        {/* Right - Content */}
        <div className="p-[20px] sm:p-[30px] lg:p-[60px] flex flex-col justify-center">
          <AnimateOnScroll>
            {/* Section Label */}
            <div className="flex items-center gap-[8px] mb-[10px] sm:mb-[13px]">
              <span className="w-[6px] h-[6px] rounded-full bg-[#00ADEE]"></span>
              <span className="text-white text-[14px] sm:text-[15.6px] leading-[20px] sm:leading-[22px] font-medium">Why Choose Us</span>
            </div>
            
            <h2 className="text-[24px] sm:text-[28px] lg:text-[48px] font-medium text-white leading-[32px] sm:leading-[36px] lg:leading-[62px] mb-[12px] sm:mb-[15px] lg:mb-[20px] max-w-[700px] tracking-[-0.52px]">
              Reasons Patients Choose Our Eye Care
            </h2>
            
            <p className="text-white/70 text-[13px] sm:text-[14px] lg:text-[15px] leading-[22px] sm:leading-[24px] lg:leading-[26px] mb-[20px] sm:mb-[25px] lg:mb-[30px] max-w-[550px]">
              We provide advanced vision care treatments designed to address a wide range of eye health needs with precision, safety.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] sm:gap-[15px] lg:gap-[20px] mb-[25px] sm:mb-[30px] lg:mb-[40px]">
              {[
                'Trusted eye care specialists',
                'Advanced vision care technology',
                'Expert eye care specialists',
                'Complete vision care solutions',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-[8px] sm:gap-[10px]">
                  <span className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] rounded-full bg-[#00ADEE] flex items-center justify-center flex-shrink-0">
                    <Check className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] text-white" strokeWidth={3} />
                  </span>
                  <span className="text-white text-[13px] sm:text-[14px] lg:text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            {/* Progress Bars */}
            <ProgressBar label="Cataract Surgery" value={95} />
            <ProgressBar label="Team Leadership" value={92} />
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
