import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';
import EyoraButton from '@/modules/core/components/EyoraButton';
import NumberCounter from '@/modules/core/components/NumberCounter';
import { Star } from 'lucide-react';

const GoogleLogo = () => (
  <svg width="36" height="36" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20c11.045 0 20-8.955 20-20c0-1.336-.145-2.642-.411-3.917z" />
    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" />
    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.222 0-9.649-3.342-11.124-7.992l-6.571 4.819C9.656 39.663 16.318 44 24 44z" />
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.336-.145-2.642-.411-3.917z" />
  </svg>
);

const HeroSection = () => (
  <section className="relative mx-0 sm:mx-0 lg:mx-0 xl:mx-[14px] xl:mt-4 xl:rounded-[20px] overflow-hidden h-auto min-h-[600px] lg:h-[900px] pt-[120px] lg:pt-0 flex flex-col lg:block">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero/hero-bg.jpg)' }} />
    <div className="absolute inset-0 bg-secondary/40 mix-blend-multiply" />
    <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-secondary/90 via-secondary/80 lg:via-secondary/90 to-secondary/30 lg:to-transparent" />
    
    <div className="relative z-10 lg:h-full flex flex-col lg:flex-row items-center container-padding">
      <div className="w-full lg:w-[60%] relative z-20 xl:mt-20 pb-10 lg:pb-0">
        <AnimateOnScroll>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex -space-x-3">
              <img src="/images/team/doctor-1.png" className="w-[38px] h-[38px] rounded-full object-cover border-2 border-secondary bg-white" alt="Doctor" />
              <img src="/images/team/doctor-2.png" className="w-[38px] h-[38px] rounded-full object-cover border-2 border-secondary bg-white" alt="Doctor" />
              <img src="/images/team/doctor-3.png" className="w-[38px] h-[38px] rounded-full object-cover border-2 border-secondary bg-white" alt="Doctor" />
            </div>
            <p className="text-white text-sm font-semibold">250+ Our Expert Doctor</p>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={0.1}>
          <h1 className="text-[32px] sm:text-5xl lg:text-[60px] font-medium text-white leading-[1.1] lg:leading-[72px] max-w-[650px] mb-4 sm:mb-6 tracking-tight">
            Complete Eye Care <br /> For Every Stage Of Life
          </h1>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={0.2}>
          <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed max-w-[580px] mb-8 sm:mb-10 font-light">
            We provide comprehensive and advanced eye care services designed to protect, improve, and maintain your vision at every stage of life.
          </p>
        </AnimateOnScroll>

        {/* Stats */}
        <AnimateOnScroll delay={0.3}>
          <div className="border-t border-b border-white/20 py-6 sm:py-8 mb-8 sm:mb-10 max-w-[600px]">
            <div className="flex items-center justify-between lg:justify-between px-0 sm:px-0">
              {[
                { end: 15, suffix: '+', mobileLabel: 'Years of\nExperience', desktopLabel: 'Years of Experience' },
                { end: 5, suffix: 'k+', mobileLabel: 'Our Happy\nPatient', desktopLabel: 'Our Happy Patient' },
                { end: 98, suffix: '%', mobileLabel: 'Patient-\nCentered Care', desktopLabel: 'Patient-Centered Care' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex flex-col items-left text-left sm:items-start sm:text-left">
                    <div className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-white leading-none mb-2 sm:mb-3">
                      <NumberCounter end={stat.end} suffix={stat.suffix} duration={2500} />
                    </div>
                    <div className="text-white/90 text-[11px] sm:text-[14px] lg:text-[15px] font-light whitespace-pre-line sm:whitespace-nowrap leading-tight">
                      <span className="sm:hidden">{stat.mobileLabel}</span>
                      <span className="hidden sm:inline">{stat.desktopLabel}</span>
                    </div>
                  </div>
                  {i < 2 && (
                    <div className="h-[50px] sm:h-[60px] w-[1px] bg-white/20 transform rotate-[15deg] mx-3 sm:mx-8 lg:mx-[30px]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* CTA + Rating */}
        <AnimateOnScroll delay={0.4}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <EyoraButton to="/appointment" text="Get Eye Checkup" hoverStyle="default" />
            <div className="flex items-center gap-4">
              <GoogleLogo />
              <div className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-[18px] leading-none">
                  <NumberCounter end={4.9} decimals={1} suffix="/5" duration={2500} />
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-[15px] h-[15px] fill-primary text-primary" strokeWidth={0} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>

    {/* Right - Doctor Image */}
    <div className="absolute lg:block right-0 bottom-0 h-full w-[35%] xl:w-[35%] z-10 pointer-events-none hidden">
      <img src="/images/hero/doctor-hero.png" alt="Expert Eye Doctor" className="absolute bottom-0 right-10 xl:right-[10%] h-[90%] w-auto object-contain object-bottom drop-shadow-2xl" />
    </div>
    
    {/* Mobile/Tablet Doctor Image (Stacked at bottom) */}
    <div className="lg:hidden w-full relative z-10 mt-auto flex justify-center items-end px-4 pt-10">
      <img src="/images/hero/doctor-hero.png" alt="Expert Eye Doctor" className="w-[85%] sm:w-[65%] max-w-[400px] h-auto object-contain object-bottom drop-shadow-2xl" />
    </div>
  </section>
);

export default HeroSection;
