import { Eye, Phone } from 'lucide-react';
import EyoraButton from '@/modules/core/components/EyoraButton';
import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';

const AboutHero = () => (
  <section className="section-padding container-padding bg-[#F9F9F9]/30 relative overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Left Side - Images & Floating Elements */}
      <div className="relative h-[650px] lg:h-[700px]">
        {/* Top Curved Arrow / Decoration */}
        <div className="absolute top-[20px] left-[150px] z-[1]">
          <svg width="60" height="60" viewBox="0 0 54 53" fill="none">
            <path d="M52.5 1.5C52.5 1.5 50.5 45.5 15.5 51.5" stroke="#15224D" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" />
            <path d="M12.5 47L11.5 52.5L17.5 51.5" stroke="#15224D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Google Review Badge - Top Rightish */}
        <div
          className="absolute top-[20px] right-[20px] lg:right-[80px] z-20 bg-white rounded-[20px] p-[10px_20px] lg:p-[15px_30px] shadow-[0_15px_45px_rgba(21,34,77,0.06)] flex items-center gap-4 animate-float"
          style={{ minWidth: '180px' }}
        >
          <div className="w-[40px] h-[40px] flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </div>
          <div className="flex flex-col gap-0">
            <p className="text-[#15224D] font-medium text-[18.4px] leading-[26px]">4.9/5 Review</p>
            <div className="flex items-center gap-[4px]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="17" height="17" viewBox="0 0 24 24" fill="#00ADEE">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Main Tall Image (Left) */}
        <div
          className="absolute left-0 top-[100px] w-[320px] lg:w-[380px] aspect-[4/6] rounded-[20px] overflow-hidden z-[2] shadow-[0_20px_50px_rgba(21,34,77,0.1)]"
        >
          <img
            src="/images/about/about-secondary.jpg"
            alt="Eye Exam"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Secondary Overlapping Image (Right) */}
        <div
          className="absolute left-[140px] lg:left-[250px] top-[260px] lg:top-[300px] w-[340px] lg:w-[420px] h-[400px] lg:h-[461px] rounded-[30px] p-[8px] bg-[#F5F5F5] z-[3] shadow-2xl border-[8px] border-[#F5F5F5]"
        >
          <div className="w-full h-full rounded-[25px] overflow-hidden">
            <img
              src="/images/about/about-main.jpg"
              alt="Eye Examination Clinic"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Bottom Dotted Arrow / Decoration */}
        <div className="absolute bottom-[20px] left-[-30px] z-10 rotate-[20deg]">
          <svg width="60" height="60" viewBox="0 0 54 53" fill="none">
            <path d="M1.5 1.5C1.5 1.5 3.5 45.5 38.5 51.5" stroke="#15224D" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" />
            <path d="M35.5 47L41.5 52.5L42.5 47" stroke="#15224D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Need Help Badge - Bottom Left */}
        <div
          className="absolute bottom-[20px] left-[-20px] lg:left-[-15px] z-20 bg-white rounded-[20px] p-[15px_30px] lg:p-[15px_40px] shadow-[0_15px_40px_rgba(21,34,77,0.06)] flex items-center gap-4 animate-float-delayed"
          style={{ minWidth: '240px' }}
        >
          <div
            className="w-[50px] h-[50px] rounded-full bg-[#15224D] flex items-center justify-center flex-shrink-0"
          >
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <p className="text-[#15224D] font-semibold text-[19.4px] leading-[24px]">Need help ?</p>
            <p className="text-[#424C6F] font-normal text-[13.5px] leading-[26px]">+1 (123) 456-789</p>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          {/* Section Header */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-[6px] h-[6px] bg-[#00ADEE] rounded-full"></div>
            <span className="text-[#15224D] font-medium text-[15.5px] uppercase tracking-wider">About Eyecare</span>
          </div>

          <h2 className="text-[40px] lg:text-[50.6px] leading-[1.15] font-semibold text-[#15224D] mb-4 tracking-[-0.02em]">
            Your Vision Matters to <br className="hidden lg:block" /> Our Skilled Specialists
          </h2>

          <p className="text-[#424C6F] text-[16px] leading-[26px] max-w-[500px]">
            Our dedicated team brings years of clinical expertise to every appointment,
            providing personalized eye care tailored to your unique needs.
          </p>
        </div>

        {/* Quote Box */}
        <div className="bg-white rounded-[20px] p-[10px] shadow-[0_15px_40px_rgba(21,34,77,0.04)] flex flex-col md:flex-row items-center gap-8 relative overflow-visible h-auto md:h-[153.83px] mt-4">
          <div className="relative w-full md:w-[200px] h-[133.83px] rounded-[10px] overflow-hidden flex-shrink-0">
            <img
              src="/images/about/about-main.jpg"
              alt="Eye Care"
              className="w-full h-full object-cover"
            />
            {/* Eye Icon badge overlapping image */}
            <div className="absolute -right-[28px] top-1/2 -translate-y-1/2 w-[56px] h-[56px] bg-[#00ADEE] border-[3px] border-white rounded-full flex items-center justify-center z-10 shadow-lg">
              <Eye className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="flex-1 pr-6 py-2 max-w-[360px]">
            <p className="text-[#15224D] font-medium text-[17.4px] leading-[25px]">
              "We create thought fully design apartment that blend comfort, modern architecture, & quality living experience for familie."
            </p>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-[#15224D]/10 my-4"></div>

        {/* Button & Signature Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12">
          <EyoraButton
            text="Contact Us Now"
            to="/contact"
            variant="primary"
          />

          <div className="flex flex-col gap-0">
            <img
              src="/images/about/signeture.png"
              alt="Signature"
              className="h-[35px] object-contain mb-[-5px]"
            />
            <span className="text-[#424C6F] text-[15.4px]">Financial Consultant</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutHero;
