import AnimateOnScroll from './AnimateOnScroll';
import SectionLabel from './SectionLabel';
import EyoraButton from './EyoraButton';
import { Phone, ArrowRight, Check } from 'lucide-react';

const WhatWeDoSection = () => (
  <section className="container-padding py-[60px] sm:py-[80px] lg:py-[120px]">
    {/* Setting exact width constraints to mimic absolute layout when possible on large screens */}
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,1fr)] max-w-[1284px] mx-auto gap-[30px] lg:gap-[53px] items-start">
      
      {/* Left Image Column */}
      <AnimateOnScroll>
        <div className="rounded-[20px] overflow-hidden w-full lg:max-w-[596.64px] h-[300px] md:h-[500px] lg:h-[883px] shine-hover text-center">
          <img src="/images/about/about-main.jpg" alt="What We Do" loading="lazy" className="w-full h-full object-cover" />
        </div>
      </AnimateOnScroll>

      {/* Right Content Column */}
      <div className="w-full lg:max-w-[634px] pt-[30px] sm:pt-[40px] lg:pt-0">
        <AnimateOnScroll>
          <SectionLabel text="What We Do" />
          <h2 className="text-[#15224D] font-medium text-[28px] sm:text-[36px] lg:text-[46px] leading-[36px] sm:leading-[44px] lg:leading-[62px] tracking-[-0.52px] mb-[15px] sm:mb-[20px] max-w-[599px]">
            Comprehensive Eye Care Services We Provide
          </h2>
          <p className="text-[#424C6F] font-normal text-[14px] sm:text-[14.9px] leading-[24px] sm:leading-[26px] mb-[25px] sm:mb-[35px] max-w-[573px]">
            We provide comprehensive eye care services designed to protect, enhance, and maintain your vision at every stage of life. Using advanced diagnostic technology
          </p>
        </AnimateOnScroll>

        {/* Info Card with Left Text & Right Image */}
        <AnimateOnScroll delay={0.1}>
          <div className="bg-white rounded-[20px] p-[10px] shadow-[0px_4px_20px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row items-center justify-between mb-[40px] h-auto lg:h-[241.51px]">
            <div className="px-[10px] py-[20px] lg:pl-[20px] lg:py-[28px] flex flex-col gap-[30px] lg:gap-[62px] w-full lg:w-auto">
              <div className="flex items-center gap-[15px]">
                <div className="w-[50px] h-[50px] rounded-full bg-[#00ADEE] flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 12H16.5M12 7.5V16.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-[#15224D] font-semibold text-[19.8px] leading-[26px] max-w-[170px]">
                  Clear & improve vision quality
                </h4>
              </div>
              <div className="flex items-center gap-[15px]">
                <div className="w-[50px] h-[50px] rounded-full bg-[#00ADEE] flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-[#15224D] font-semibold text-[19.5px] leading-[26px] max-w-[170px]">
                  Experienced Eye Specialists
                </h4>
              </div>
            </div>
            
            <div className="h-[220.5px] w-full lg:w-[332.6px] rounded-[20px] overflow-hidden ml-auto mt-[20px] lg:mt-0 hidden sm:block">
              <img src="/images/about/about-secondary.jpg" alt="Eye examination" className="w-full h-full object-cover" />
            </div>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col xl:flex-row gap-[20px] sm:gap-[30px] lg:gap-[30px] mb-[40px] sm:mb-[58px]">
          {/* Success Treatment Dark Card */}
          <AnimateOnScroll delay={0.2} className="w-full xl:w-auto">
            <div className="bg-[#15224D] rounded-[20px] p-[15px] sm:p-[20px] w-full xl:w-[344.66px] h-auto xl:h-[155.7px] relative overflow-hidden">
              <h3 className="text-white font-semibold text-[14px] sm:text-[15.9px] leading-[18px] sm:leading-[19px] mb-[10px] sm:mb-[15px]">Success Treatment</h3>
              
              <div className="flex items-center gap-0">
                <div className="w-[36px] h-[36px] sm:w-[41.6px] sm:h-[41.6px] rounded-full border border-white bg-gray-300 overflow-hidden relative z-10">
                   <img src="/images/team/doctor-1.png" alt="Author" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiLz48L3N2Zz4=' }} />
                </div>
                <div className="w-[36px] h-[36px] sm:w-[41.6px] sm:h-[41.6px] rounded-full border border-white bg-gray-300 overflow-hidden -ml-[8px] sm:-ml-[10px] relative z-20">
                   <img src="/images/team/doctor-1.png" alt="Author" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiLz48L3N2Zz4=' }} />
                </div>
                <div className="w-[36px] h-[36px] sm:w-[41.6px] sm:h-[41.6px] rounded-full border border-white bg-gray-300 overflow-hidden -ml-[8px] sm:-ml-[10px] relative z-30">
                   <img src="/images/team/doctor-1.png" alt="Author" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiLz48L3N2Zz4=' }} />
                </div>
                <div className="w-[36px] h-[36px] sm:w-[41.6px] sm:h-[41.6px] rounded-full border border-white bg-[#00ADEE] flex items-center justify-center -ml-[8px] sm:-ml-[10px] relative z-40">
                  <span className="text-white text-[14px] sm:text-[16px] font-black">+</span>
                </div>
              </div>
              
              <p className="text-white text-[14px] sm:text-[15px] font-normal leading-[22px] sm:leading-[26px] mt-[10px] sm:mt-[15px]">
                Trusted by Happy Patient
              </p>

              {/* Progress Circle with Animation */}
              <div className="absolute right-[10px] sm:right-[20px] top-1/2 -translate-y-1/2 w-[100px] h-[100px] sm:w-[135px] sm:h-[135px] flex items-center justify-center">
                {/* Animated Progress Ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 135 135">
                  {/* Background track */}
                  <circle
                    cx="67.5"
                    cy="67.5"
                    r="60"
                    fill="none"
                    stroke="#2A3A6E"
                    strokeWidth="8"
                  />
                  {/* Animated progress arc - 82% */}
                  <circle
                    cx="67.5"
                    cy="67.5"
                    r="60"
                    fill="none"
                    stroke="#00ADEE"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="377"
                    strokeDashoffset="68"
                    className="animate-[progress_1.5s_ease-out_forwards]"
                    style={{
                      filter: 'drop-shadow(0 0 4px rgba(0, 173, 238, 0.5))'
                    }}
                  />
                </svg>
                {/* Center circle with percentage */}
                <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full bg-white flex items-center justify-center shadow-lg">
                  <span className="text-[#15224D] font-medium text-[16px] sm:text-[18px]">82%</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* List Of Features */}
          <AnimateOnScroll delay={0.3} className="flex-1 w-full xl:max-w-[300px]">
            <ul className="flex flex-col gap-[15px] sm:gap-[20px] py-[10px]">
              {[
                {text: 'Pediatric eye care services'},
                {text: 'Contact lens fitting services'},
                {text: 'Diabetic eye care monitoring'},
                {text: 'Vision correction solutions'}
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-[10px] sm:gap-[12px]">
                  <span className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-[4px] bg-[#00ADEE] flex items-center justify-center flex-shrink-0">
                    <Check className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[#424C6F] font-normal text-[14px] sm:text-[14.9px] leading-[22px] sm:leading-[24px]">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </div>

        {/* Bottom Actions Bordered */}
        <AnimateOnScroll delay={0.4}>
          <div className="border-t-[0.8px] border-[rgba(21,34,77,0.1)] pt-[30px] md:pt-[44px] flex flex-wrap items-center gap-[30px] md:gap-[55px]">
            {/* Contact Us Button */}
            <div className="relative group cursor-pointer inline-flex items-center">
                          <EyoraButton to="/about" text="More About Us" className="text-[14px] sm:text-[15.9px] font-semibold px-[24px] sm:px-[30px]" />

            </div>

            {/* Telephone Number */}
            <div className="flex items-center gap-[15px]">
              <div className="w-[50px] h-[50px] bg-[#15224D] rounded-[25px] flex items-center justify-center">
                <Phone className="w-[24px] h-[24px] text-white" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[#15224D] font-semibold text-[19.8px] leading-[26px]">Urgent Support?</h3>
                <p className="text-[#424C6F] font-medium text-[13.6px] leading-[26px]">+91 (123) 456-789</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </div>
  </section>
);

export default WhatWeDoSection;
