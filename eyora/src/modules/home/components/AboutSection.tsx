import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';
import SectionLabel from '@/modules/core/components/SectionLabel';
import EyoraButton from '@/modules/core/components/EyoraButton';
import { Phone, ArrowRight, Eye } from 'lucide-react';

const AboutSection = () => (
  <section className="container-padding pt-[60px] sm:pt-[80px] lg:pt-[120px] pb-[60px] sm:pb-[80px] lg:pb-[120px]">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[60px] items-start">
      {/* Left - Visual Grid */}
      <AnimateOnScroll>
        <div className="relative w-full max-w-[600px] mx-auto">
          {/* Google Review Badge */}
          <div className="absolute -top-[20px] right-[20px] sm:right-[40px] z-20 bg-white rounded-[12px] px-[16px] py-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-[8px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div>
                <p className="text-[#15224D] font-semibold text-[14px]">4.9/5 Review</p>
                <div className="flex gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#00ADEE" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Images Container */}
          <div className="relative pt-[40px]">
            {/* Main Tall Image */}
            <div className="relative rounded-[20px] overflow-hidden w-[280px] sm:w-[320px] lg:w-[350px] h-[380px] sm:h-[450px] lg:h-[500px]">
              <img 
                src="/images/about/about-main.jpg" 
                alt="Eye Care Examination" 
                loading="lazy" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Overlapping Secondary Image */}
            <div className="absolute bottom-[60px] right-0 sm:right-[20px] lg:right-[40px] rounded-[20px] overflow-hidden w-[220px] sm:w-[280px] lg:w-[320px] h-[280px] sm:h-[350px] lg:h-[400px] shadow-[0_10px_40px_rgba(0,0,0,0.15)] border-4 border-white">
              <img 
                src="/images/about/about-secondary.jpg" 
                alt="Doctor with Patient" 
                loading="lazy" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Dotted Decoration */}
            <div className="absolute top-[20px] left-[20px] w-[40px] h-[40px] opacity-60">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="3" fill="#00ADEE" fillOpacity="0.3"/>
                <circle cx="20" cy="4" r="3" fill="#00ADEE" fillOpacity="0.3"/>
                <circle cx="36" cy="4" r="3" fill="#00ADEE" fillOpacity="0.3"/>
                <circle cx="4" cy="20" r="3" fill="#00ADEE" fillOpacity="0.3"/>
                <circle cx="20" cy="20" r="3" fill="#00ADEE" fillOpacity="0.3"/>
                <circle cx="36" cy="20" r="3" fill="#00ADEE" fillOpacity="0.3"/>
                <circle cx="4" cy="36" r="3" fill="#00ADEE" fillOpacity="0.3"/>
                <circle cx="20" cy="36" r="3" fill="#00ADEE" fillOpacity="0.3"/>
                <circle cx="36" cy="36" r="3" fill="#00ADEE" fillOpacity="0.3"/>
              </svg>
            </div>
          </div>

          {/* Need Help Card */}
          <div className="absolute bottom-[20px] left-[20px] sm:left-[30px] bg-white rounded-[16px] px-[16px] sm:px-[20px] py-[14px] sm:py-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center gap-[12px] sm:gap-[15px]">
            <div className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#15224D] flex items-center justify-center flex-shrink-0">
              <Phone className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] text-white" />
            </div>
            <div>
              <p className="text-[#15224D] font-semibold text-[14px] sm:text-[16px]">Need help ?</p>
              <p className="text-[#424C6F] text-[12px] sm:text-[14px]">+1 (123) 456-789</p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Right - Content */}
      <div className="pt-[20px] sm:pt-[30px] lg:pt-[40px]">
        <AnimateOnScroll>
          <SectionLabel text="About Eyecare" />
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-medium text-[#15224D] leading-[1.2] mb-4 sm:mb-6 max-w-[500px] tracking-[-0.52px]">
            Your Vision Matters to Our Skilled Specialists
          </h2>
          <p className="text-[#424C6F] text-[14px] sm:text-[15px] leading-[1.7] mb-8 sm:mb-10 max-w-[500px]">
            Our dedicated team brings years of clinical expertise to every appointment, providing personalized eye care tailored to your unique needs.
          </p>
        </AnimateOnScroll>

        {/* Testimonial Card */}
        <AnimateOnScroll delay={0.2}>
          <div className="bg-white rounded-[16px] p-[20px] sm:p-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] mb-8 sm:mb-10 border border-gray-100">
            <div className="flex items-center gap-[15px] sm:gap-[20px]">
              {/* Testimonial Image */}
              <div className="relative flex-shrink-0">
                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-[12px] overflow-hidden">
                  <img 
                    src="/images/about/testimonial-patient.jpg" 
                    alt="Patient" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/about/about-secondary.jpg";
                    }}
                  />
                </div>
                {/* Eye Icon Badge */}
                <div className="absolute -right-[10px] top-1/2 -translate-y-1/2 w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#00ADEE] flex items-center justify-center text-white shadow-lg">
                  <Eye className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" />
                </div>
              </div>
              
              {/* Quote */}
              <p className="text-[#15224D] text-[13px] sm:text-[14px] leading-[1.6] italic">
                "We create thought fully design apartment that blend comfort, modern architecture, & quality living experience for familie."
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* CTA + Signature */}
        <AnimateOnScroll delay={0.3}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <EyoraButton 
              to="/contact" 
              text="Contact Us Now" 
              className="text-[14px] sm:text-[15px] font-semibold px-[24px] sm:px-[30px]"
              icon={<ArrowRight className="w-4 h-4" />}
            />
            
            {/* Signature */}
            <div className="flex flex-col">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
                <path d="M10 30 C 20 10, 40 10, 50 25 S 80 35, 100 20" stroke="#15224D" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <text x="75" y="15" fontSize="8" fill="#15224D" fontStyle="italic">M</text>
              </svg>
              <p className="text-[#424C6F] text-[13px] sm:text-[14px]">Financial Consultant</p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
);

export default AboutSection;
