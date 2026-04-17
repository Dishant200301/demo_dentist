import React, { useState, useEffect, useRef } from 'react';
import { Eye, Clock } from 'lucide-react';
import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';

// CountUp animation hook
const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (!start) return;
    
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      countRef.current = Math.floor(easeOut * end);
      setCount(countRef.current);
      
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    
    rafRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration, start]);

  return count;
};

interface CountUpNumberProps {
  stat: string;
  isVisible: boolean;
}

const CountUpNumber = ({ stat, isVisible }: CountUpNumberProps) => {
  const numericPart = stat.replace(/[^0-9]/g, '');
  const symbolPart = stat.replace(/[0-9]/g, '');
  const targetNumber = parseInt(numericPart, 10) || 0;
  
  const count = useCountUp(targetNumber, 2000, isVisible);
  
  return (
    <span className="flex items-baseline">
      <span className="text-[27.3px] font-semibold leading-[36px] text-[#15224D] group-hover:text-white transition-colors duration-500">
        {count}
      </span>
      <span className="text-[30px] font-semibold leading-[36px] text-[#15224D] group-hover:text-white transition-colors duration-500">
        {symbolPart}
      </span>
    </span>
  );
};

interface ApproachCardProps {
  badge: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  image: string;
  delay?: number;
}

const ApproachCard = ({ 
  badge, 
  title, 
  description, 
  stat, 
  statLabel, 
  image, 
  delay = 0 
}: ApproachCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <AnimateOnScroll delay={delay} onVisible={() => setIsVisible(true)}>
      <div className="group relative w-full sm:max-w-[340px] md:max-w-[380px] lg:max-w-none lg:w-[406.61px] h-auto sm:h-[450px] lg:h-[490px] bg-[#F5F5F5] rounded-[16px] sm:rounded-[20px] overflow-hidden cursor-pointer transition-all duration-500">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[16px] sm:rounded-[20px]">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
          />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-[#15224D]/85 transition-all duration-500 ease-in-out z-10 pointer-events-none" />

        {/* Content Container */}
        <div className="relative h-full p-4 sm:p-8 lg:p-[40px] flex flex-col z-20">
          {/* Badge */}
          <div className="inline-flex h-[30px] sm:h-[34px] px-[20px] rounded-full border border-[rgba(21,34,77,0.1)] group-hover:border-white/30 transition-all duration-500 bg-transparent items-center gap-[8px] mb-4 w-max">
            <span className="w-[6px] h-[6px] rounded-full bg-[#00ADEE]" />
            <span className="text-[13px] sm:text-[15.5px] font-normal text-[#424C6F] group-hover:text-white transition-colors duration-500">
              {badge}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[18px] sm:text-[20px] lg:text-[19.7px] font-semibold leading-[1.3] lg:leading-[28px] tracking-[-0.52px] text-[#15224D] group-hover:text-white transition-colors duration-500 mb-4">
            {title}
          </h3>

          {/* Line Separator (only on group hover or desktop) */}
          <div className="w-full h-[1px] bg-[rgba(21,34,77,0.1)] group-hover:bg-white/20 transition-all duration-500 mb-6 mt-auto hidden lg:block" />

          {/* Description */}
          <p className="text-[14px] sm:text-[15.1px] leading-[1.6] lg:leading-[26px] font-normal text-[#424C6F] group-hover:text-white/80 transition-colors duration-500 mb-6 lg:mb-12">
            {description}
          </p>

          {/* Stat Footer */}
          <div className="flex items-center gap-[15px] mt-auto lg:mt-0">
            {/* Eye Icon Circle */}
            <div className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#00ADEE] flex items-center justify-center text-white shadow-lg shadow-[#00ADEE]/30 group-hover:shadow-none transition-all duration-500 flex-shrink-0">
              <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            {/* Stat with Count Animation */}
            <div className="flex items-baseline">
              <CountUpNumber stat={stat} isVisible={isVisible} />
              <span className="ml-[10px] text-[14px] sm:text-[15.3px] leading-[26px] font-normal text-[#424C6F] group-hover:text-white/70 whitespace-nowrap transition-colors duration-500">
                {statLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

const ApproachSection = () => {
  const cards = [
    {
      badge: "Our Mission",
      title: "Our Mission to Deliver Trusted Eye Care",
      description: "Our mission is high-quality eye care through medical excellence, technology.",
      stat: "250+",
      statLabel: "Happy Patients",
      image: "/images/about/mission-hover.png"
    },
    {
      badge: "Our Vision",
      title: "Clear Vision for Healthier Eyes and Brighter Lives",
      description: "Our mission is high-quality eye care through medical excellence, technology.",
      stat: "10k+",
      statLabel: "Successful treatment",
      image: "/images/about/vision-hover.png"
    },
    {
      badge: "Our Goal",
      title: "Delivering Lifelong Eye Health Compassionate Care",
      description: "Our mission is high-quality eye care through medical excellence, technology.",
      stat: "99%",
      statLabel: "Patient Satisfaction",
      image: "/images/about/goal-hover.png"
    }
  ];

  return (
    <section className="bg-white overflow-hidden relative my-12 lg:my-24 mx-0 md:mx-0 lg:mx-[50px] xl:rounded-[20px] py-16 lg:py-24">
      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-[8px] mb-4">
          <span className="w-[6px] h-[6px] rounded-full bg-[#00ADEE]" />
          <span className="font-medium text-[#15224D] text-[15.6px] leading-[22px]">
            Our Approach
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="w-full max-w-[700px] text-[#15224D] font-medium text-center text-[32px] sm:text-[40px] lg:text-[50.9px] leading-[1.2] lg:leading-[62px] tracking-[-0.52px] mb-12 lg:mb-16">
          Our Trusted Approach to Complete Eye Care
        </h2>

        {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col laptop/desktop */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-[30px] mb-12 lg:mb-16 justify-items-center">
          {cards.map((card, index) => (
            <div key={index} className={`w-full flex justify-center ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              <ApproachCard {...card} delay={index * 0.15} />
            </div>
          ))}
        </div>

        {/* Working Hours Footer */}
        <AnimateOnScroll delay={0.6}>
          <div className="flex items-center flex-wrap sm:flex-nowrap justify-center gap-3">
            {/* Avatars & Clock */}
            <div className="flex items-center">
              <div className="w-[32px] h-[32px] rounded-full border border-white overflow-hidden z-10">
                <img 
                  src="/images/about/working-hours-avatar.png" 
                  alt="Doctor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[32px] h-[32px] rounded-full bg-[#00ADEE] flex items-center justify-center text-white border border-white -ml-3 z-20">
                <Clock className="w-[15px] h-[15px]" />
              </div>
            </div>

            {/* Working Hours Text */}
            <p className="font-bold text-[#15224D] text-[15.1px] leading-[26px] text-center sm:text-left">
              Working Hours: <span className="text-[#424C6F] font-normal ml-1">Monday-Saturday, 9:00 AM - 7:00 PM</span>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ApproachSection;

