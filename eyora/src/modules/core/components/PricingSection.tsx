import AnimateOnScroll from './AnimateOnScroll';
import { Check, ArrowRight, Calendar, DollarSign, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
        <path d="M2 12H6M18 12H22M12 2V6M12 18V22" stroke="white" strokeWidth="2"/>
      </svg>
    ),
    title: 'Basic Eye Care Plan',
    subtitle: 'Ideal for routine checkups and preventive care',
    price: '$29',
    features: ['Comprehensive eye examination', 'Vision testing and eye pressure check', 'All Advanced Eye Care services', 'Priority appointment scheduling'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21M4 18H20M6 18V13L12 8L18 13V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8V4M12 4L15 7M12 4L9 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Standard Vision Care Plan',
    subtitle: 'Ideal for routine checkups and preventive care',
    price: '$39',
    features: ['Comprehensive eye examination', 'Vision testing and eye pressure check', 'All Advanced Eye Care services', 'Priority appointment scheduling'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Advanced Eye Care Plan',
    subtitle: 'Ideal for routine checkups and preventive care',
    price: '$49',
    features: ['Comprehensive eye examination', 'Vision testing and eye pressure check', 'All Advanced Eye Care services', 'Priority appointment scheduling'],
  },
];

const PricingSection = () => (
  <section className="container-padding py-[80px] lg:py-[120px] bg-[#F8F9FA]">
    {/* Section Header */}
    <AnimateOnScroll>
      <div className="flex items-center justify-center gap-[8px] mb-[13px]">
        <span className="w-[6px] h-[6px] rounded-full bg-[#00ADEE]"></span>
        <span className="text-[#15224D] text-[15.5px] leading-[22px] font-medium">Pricing Plan</span>
      </div>
      <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium text-[#15224D] leading-[40px] sm:leading-[50px] lg:leading-[62px] text-center max-w-[680px] mx-auto mb-[50px] lg:mb-[60px] tracking-[-0.5px]">
        Patient Friendly Pricing Plans For Eye Care
      </h2>
    </AnimateOnScroll>

    {/* Pricing Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 max-w-[1200px] mx-auto">
      {pricingPlans.map((plan, i) => (
        <AnimateOnScroll key={i} delay={i * 0.1}>
          <div className="bg-white rounded-[20px] p-[30px] lg:p-[35px] shadow-sm">
            {/* Icon */}
            <div className="w-[50px] h-[50px] rounded-full bg-[#00ADEE] flex items-center justify-center mb-[20px]">
              {plan.icon}
            </div>
            
            {/* Title */}
            <h3 className="text-[#15224D] font-semibold text-[19px] lg:text-[20px] leading-[26px] mb-[8px]">{plan.title}</h3>
            
            {/* Subtitle */}
            <p className="text-[#424C6F] text-[14px] lg:text-[15px] leading-[24px] mb-[25px]">{plan.subtitle}</p>
            
            {/* Price Box */}
            <div className="bg-[#F5F5F5] rounded-[12px] px-[20px] py-[15px] mb-[25px]">
              <span className="text-[#15224D] text-[32px] lg:text-[36px] font-bold leading-[40px]">{plan.price}</span>
              <span className="text-[#424C6F] text-[14px] leading-[20px]">/Per Month</span>
            </div>
            
            {/* Features */}
            <ul className="space-y-[15px] mb-[30px]">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-[12px] text-[#424C6F] text-[14px] lg:text-[15px] leading-[24px]">
                  <span className="w-[20px] h-[20px] rounded-full bg-[#00ADEE] flex items-center justify-center flex-shrink-0">
                    <Check className="w-[12px] h-[12px] text-white" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            
            {/* Choose Plan Button */}
            <Link to="/pricing" className="w-full h-[50px] bg-[#00ADEE] rounded-[25px] flex items-center justify-center gap-[10px] text-white font-semibold text-[15px] hover:bg-[#0095CC] transition-colors duration-300 group">
              <span>Choose Plan</span>
              <span className="w-[24px] h-[24px] rounded-full bg-[#15224D] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="w-[14px] h-[14px] text-white" />
              </span>
            </Link>
          </div>
        </AnimateOnScroll>
      ))}
    </div>

    {/* Bottom Info */}
    <AnimateOnScroll>
      <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-[40px] text-[14px] text-[#424C6F]">
        <div className="flex items-center gap-[8px]">
          <Calendar className="w-[18px] h-[18px] text-[#00ADEE]" />
          <span>Get 30 day free trial</span>
        </div>
        <div className="flex items-center gap-[8px]">
          <DollarSign className="w-[18px] h-[18px] text-[#00ADEE]" />
          <span>No any hidden fees pay</span>
        </div>
        <div className="flex items-center gap-[8px]">
          <Clock className="w-[18px] h-[18px] text-[#00ADEE]" />
          <span>You can cancel anytime</span>
        </div>
      </div>
    </AnimateOnScroll>
  </section>
);

export { pricingPlans };
export default PricingSection;
