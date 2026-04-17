import React from 'react';
import { Eye, Search, Building2, Phone, Check } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import EyoraButton from './EyoraButton';

const TrustedCareSection = () => {
  return (
    <section className="bg-transparent pb-[80px] lg:pb-[120px]">
      <div className="px-6 sm:px-6 lg:px-8 xl:px-[50px] max-w-[1400px] mx-auto">
        <div className="flex flex-col xl:flex-row gap-[50px] lg:gap-[80px] items-start">
          
          {/* Left: Image with Stats */}
          <AnimateOnScroll className="w-full xl:w-1/2 relative pl-[0px] sm:pl-[40px] xl:pl-[50px]">
            <div className="relative rounded-[20px] overflow-hidden shine-hover w-full min-h-[450px] sm:min-h-[500px]">
              {/* Note: I'm using an existing image. You can specify a different one if needed! */}
              <img 
                src="/images/services/service-1.jpg" 
                alt="Eye Care Examination" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute top-[20px] sm:top-[60px] left-[16px] md:left-[0px] bg-white rounded-[20px] p-[25px] sm:p-[30px] shadow-[0_15px_40px_rgba(21,34,77,0.08)] w-[240px] sm:w-[280px] z-10">
              <div className="flex items-center gap-[15px] mb-[15px]">
                <div className="w-[45px] h-[45px] rounded-full bg-[#00ADEE] flex items-center justify-center shrink-0">
                  <Eye className="w-[24px] h-[24px] text-white" />
                </div>
                <span className="text-[#15224D] font-semibold text-[32px] sm:text-[38px] leading-[1]">98%</span>
              </div>
              <p className="text-[#424C6F] font-normal text-[14px] sm:text-[15px] leading-[26px]">
                We consistently achieve high satisfaction delivering personalized.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Right: Content */}
          <div className="w-full xl:w-1/2 mt-[20px] sm:mt-[40px] lg:mt-0 flex flex-col justify-center">
            <AnimateOnScroll delay={0.2} className="max-w-[1000px]">
              <div className="flex items-center gap-[8px] mb-[15px]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#00ADEE]" />
                <span className="text-[#15224D] text-[15.6px] font-medium leading-[22px]">Why Choose Us</span>
              </div>

              <h2 className="text-[#15224D] font-medium text-[32px] sm:text-[38px] md:text-[46px] leading-[1.2] md:leading-[52px] tracking-[-0.52px] mb-[20px] sm:mb-[25px]">
                Why choose for exception<br className="hidden sm:block" /> Trusted Eye Care
              </h2>

              <p className="text-[#424C6F] font-normal text-[15px] leading-[26px] mb-[40px]">
                Our experienced team of eye care specialists uses advanced technology and proven treatment methods to ensure the best possible outcomes for your vision.
              </p>

              {/* Grid Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] mb-[40px]">
                <div className="flex flex-col">
                  <div className="flex items-center gap-[15px] mb-[15px]">
                    <div className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#00ADEE] flex items-center justify-center shrink-0">
                      <Building2 className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] text-white" />
                    </div>
                    <h3 className="text-[#15224D] font-semibold text-[19px] leading-[26px]">Expert Specialists</h3>
                  </div>
                  <p className="text-[#424C6F] font-normal text-[14.5px] leading-[26px]">
                    Highly qualified optometrists providing expert care.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-[15px] mb-[15px]">
                    <div className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#00ADEE] flex items-center justify-center shrink-0">
                      <Search className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] text-white" />
                    </div>
                    <h3 className="text-[#15224D] font-semibold text-[19px] leading-[26px]">Personalized Care</h3>
                  </div>
                  <p className="text-[#424C6F] font-normal text-[14.5px] leading-[26px]">
                    Highly qualified optometrists providing expert care.
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-[#15224D]/10 mb-[35px]" />

              {/* Footer Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-[25px] sm:gap-[40px]">
                {/* User provided code: Contact Us vs Book Appointment */}
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

        {/* Bottom Checkmarks List */}
        <AnimateOnScroll delay={0.4} className="mt-[60px] lg:mt-[80px]">
          <div className="w-full h-px bg-[#15224D]/10 mb-[30px] lg:mb-[40px]" />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[20px] md:gap-[30px]">
            <div className="flex items-center gap-[15px]">
              <div className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] rounded-full bg-[#00ADEE] flex items-center justify-center shrink-0">
                <Check className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] text-white" strokeWidth={3} />
              </div>
              <span className="text-[#424C6F] font-normal text-[14px] sm:text-[15px]">Personalized treatment plan for patient</span>
            </div>
            <div className="flex items-center gap-[15px]">
              <div className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] rounded-full bg-[#00ADEE] flex items-center justify-center shrink-0">
                <Check className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] text-white" strokeWidth={3} />
              </div>
              <span className="text-[#424C6F] font-normal text-[14px] sm:text-[15px]">Comprehensive solutions for vision need</span>
            </div>
            <div className="flex items-center gap-[15px]">
              <div className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] rounded-full bg-[#00ADEE] flex items-center justify-center shrink-0">
                <Check className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] text-white" strokeWidth={3} />
              </div>
              <span className="text-[#424C6F] font-normal text-[14px] sm:text-[15px]">Friendly staff enhancing care experience</span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default TrustedCareSection;
