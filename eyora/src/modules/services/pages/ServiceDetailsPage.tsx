import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { Check, Phone, Plus, Minus, Info, Eye, User, Binoculars, Printer, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useRef } from 'react';
import PageBanner from '@/modules/core/components/PageBanner';
import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';
import { services, serviceDetailsData } from '../data';
import ArrowIcon from '@/modules/core/components/ArrowIcon';

const Counter = ({ end, duration = 2000 }: { end: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !hasStarted) setHasStarted(true);
      }, { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const target = parseFloat(end.replace(/[^0-9.]/g, ''));
    if (isNaN(target)) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  const isFloat = end.includes('.');
  const displayValue = isFloat ? count.toFixed(1) : Math.floor(count);
  const suffix = end.replace(/[0-9.]/g, '');

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const FaqAccordion = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-[#15224D]/10">
      <button 
        className="w-full py-[22px] flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-[17px] font-semibold text-[#15224D] pr-[20px]">{question}</span>
        <div className={`w-[26px] h-[26px] rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-[#15224D]' : 'bg-[#00ADEE]'}`}>
          {isOpen ? (
            <ChevronUp className="w-[16px] h-[16px] text-white" strokeWidth={2.5} />
          ) : (
            <ChevronDown className="w-[16px] h-[16px] text-white" strokeWidth={2.5} />
          )}
        </div>
      </button>
      <div 
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-[25px]' : 'grid-rows-[0fr] opacity-0 pb-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-[#424C6F] font-normal text-[15.5px] leading-[26px] pr-[10%] pt-[5px]">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id) || services[0];
  const data = serviceDetailsData[id || ''] || serviceDetailsData['comprehensive-eye-exams'];
  
  const [activeFaq, setActiveFaq] = useState<number>(0);

  return (
    <>
      <Helmet>
        <title>{service.title} - Eyora Eye Care</title>
        <meta name="description" content={service.desc} />
      </Helmet>
      <div className="pt-0 bg-[#F8F9FA]">
        <PageBanner
          title={service.title}
          breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.title }]}
        />

        <section className="py-[80px] lg:py-[120px]">
          <div className="container-padding max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-[40px] xl:gap-[40px]">
              
              {/* Left Sidebar */}
              <div className="w-full lg:w-[32%] xl:w-[28%] shrink-0">
                <div className="lg:sticky lg:top-[120px]">
                  
                  {/* Explore Our Services */}
                  <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_5px_20px_rgba(21,34,77,0.04)] mb-[30px] xl:mb-[40px]">
                    <div className="bg-[#15224D] px-[30px] xl:px-[40px] py-[30px] xl:py-[35px]">
                      <h3 className="text-white font-semibold text-[19.8px] xl:text-[22px] leading-[1]">Explore Our Services</h3>
                    </div>
                    <ul className="flex flex-col">
                      {services.map((s, index) => {
                        const isLast = index === services.length - 1;
                        const isActive = s.id === id;
                        return (
                          <li key={s.id} className="relative group">
                            <Link to={`/services/${s.id}`} className={`flex items-center justify-between ${isActive ? 'pt-[18px] pb-[22px]' : 'py-[22px]'} px-[30px] xl:px-[40px] transition-colors relative z-10 w-full`}>
                              <div className="flex flex-col items-start gap-[5px]">
                               
                                <span className={`font-medium text-[16px] xl:text-[17px] transition-colors duration-300 ${isActive ? 'text-[#00ADEE]' : 'text-[#15224D] group-hover:text-[#00ADEE]'}`}>
                                  {s.title}
                                </span>
                              </div>
                              <ArrowIcon className={`w-[20px] h-[20px] transition-all duration-300 ${isActive ? 'text-black' : 'text-black group-hover:text-black group-hover:scale-125 group-hover:translate-x-[4px]'}`} />
                            </Link>
                            {!isLast && (
                              <div className="mx-[30px] xl:mx-[40px] h-px bg-[#15224D]/10 relative z-0" />
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Eyora Contact Box */}
                  <div className="bg-[#15224D] rounded-[20px] overflow-hidden flex flex-col pt-[40px] xl:pt-[50px]">
                    <div className="px-[30px] xl:px-[40px] text-center flex flex-col items-center pb-[35px] xl:pb-[45px]">
                      <div className="flex items-center gap-[12px] mb-[25px]">
                        <div className="w-[45px] h-[45px] rounded-full bg-[#00ADEE] flex items-center justify-center shrink-0 shadow-[0_0_0_5px_rgba(0,173,238,0.2)]">
                           <div className="w-[20px] h-[20px] rounded-full border-[3px] border-white flex items-center justify-center">
                              <div className="w-[6px] h-[6px] rounded-full bg-white" />
                           </div>
                        </div>
                        <span className="text-white font-bold text-[28px] xl:text-[32px] tracking-tight">Eyora<span className="text-[#00ADEE]">.</span></span>
                      </div>
                      <p className="text-white/90 font-normal text-[14.5px] xl:text-[15px] leading-[26px] mb-[25px]">
                         We are a trusted eye care clinic dedicated providing advanced, reliable.
                      </p>
                      <a href="mailto:info@domainname.com" className="text-[#00ADEE] font-bold text-[15.5px] xl:text-[16.5px] mb-[15px] leading-[1] underline underline-offset-4 decoration-2 hover:text-[#008dbf] transition-colors">
                        info@domainname.com
                      </a>
                      <p className="text-[#A0A8C3] font-medium text-[13.5px] mb-0">Mon-Sat 9:00 AM – 7:00 PM</p>
                    </div>
                    <a href="tel:+123456789" className="w-full bg-[#00ADEE] py-[25px] flex items-center justify-center gap-[12px] text-white hover:bg-white hover:text-black transition-colors mt-auto group">
                       <Phone className="w-[20px] h-[20px] text-white group-hover:text-black transition-all duration-300 group-hover:scale-110" strokeWidth={2.5} />
                       <span className="font-bold text-[17px] xl:text-[19px]">+(123) 456 - 789</span>
                    </a>
                  </div>

                </div>
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-[68%] xl:w-[72%]">
                <AnimateOnScroll delay={0.1}>
                  {data.subtitle1 && (
                    <h2 className="text-[#15224D] font-medium text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.1] tracking-[-1px] mb-[20px] md:mb-[25px]">
                      {data.subtitle1}
                    </h2>
                  )}
                  {data.introText && (
                    <p className="text-[#424C6F] font-normal text-[16px] xl:text-[17px] leading-[28px] mb-[45px]">
                      {data.introText}
                    </p>
                  )}
                  {data.text1 && (
                    <p className="text-[#424C6F] font-normal text-[16px] leading-[26px] mb-[30px]">
                      {data.text1}
                    </p>
                  )}
                  
                  <div className="flex flex-col gap-[20px] sm:gap-[30px] md:grid md:grid-cols-2 lg:gap-[25px] mt-[30px] md:mt-[35px] mb-[40px] md:mb-[50px]">
                    {data.features.map((feat, i) => {
                      // Desktop: Img, Card, Card, Img
                      // Mobile: Img, Card, Img, Card (Swap idx 2 and 3)
                      let mobileOrder = "order-none";
                      if (i === 0) mobileOrder = "order-1";
                      if (i === 1) mobileOrder = "order-2";
                      if (i === 2) mobileOrder = "order-4"; // Accurate eye measurement (card)
                      if (i === 3) mobileOrder = "order-3"; // Image 2

                      if (feat.type === 'image') {
                        return (
                          <div key={i} className={`rounded-[20px] overflow-hidden h-[240px] sm:h-[300px] md:h-[180px] xl:h-[220px] ${mobileOrder} md:order-none`}>
                            <img src={feat.src} alt="Feature" className="w-full h-full object-cover" />
                          </div>
                        );
                      }
                      return (
                        <div key={i} className={`bg-white rounded-[20px] shadow-[0_15px_40px_rgba(21,34,77,0.06)] p-[25px] xl:p-[35px] flex flex-col gap-[20px] h-auto md:h-[180px] xl:h-[220px] min-h-[160px] ${mobileOrder} md:order-none`}>
                          <div className="flex items-center gap-[20px]">
                            <div className="w-[45px] h-[45px] rounded-full bg-[#00ADEE] flex items-center justify-center shrink-0">
                              {feat.icon === 'eye' && <Eye className="w-[20px] h-[20px] text-white" />}
                              {feat.icon === 'user' && <User className="w-[20px] h-[20px] text-white" />}
                              {feat.icon === 'binoculars' && <Binoculars className="w-[20px] h-[20px] text-white" />}
                              {feat.icon === 'printer' && <Printer className="w-[20px] h-[20px] text-white" />}
                            </div>
                            <h4 className="text-[#15224D] font-bold text-[18px] sm:text-[20px] md:text-[22px] leading-[1.2]">{feat.title}</h4>
                          </div>
                          <div>
                            <p className="text-[#424C6F] font-normal text-[15.5px] sm:text-[16px] leading-[26px]">{feat.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.2}>
                  <h2 className="text-[#15224D] font-medium text-[28px] sm:text-[34px] md:text-[40px] leading-[1.2] tracking-[-0.52px] mb-[15px] md:mb-[20px]">
                    {data.subtitle2}
                  </h2>
                  <p className="text-[#424C6F] font-normal text-[15px] leading-[26px] whitespace-pre-line mb-[40px]">
                    {data.text2}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px] xl:gap-[30px] mb-[40px] md:mb-[60px]">
                    {data.stats.map((st, i) => (
                      <div key={i} className="bg-white rounded-[20px] shadow-[0_15px_40px_rgba(21,34,77,0.03)] p-[35px] xl:p-[45px] text-left flex flex-col items-start justify-between min-h-[340px]">
                        <div className="flex flex-col items-start">
                          <span className="text-[#15224D] font-sans text-[44px] xl:text-[52px] leading-[1] mb-[18px]">
                            <Counter end={st.num} />
                          </span>
                          <span className="text-[#424C6F] font-normal text-[17px] xl:text-[19.2px] leading-[26px]">{st.label}</span>
                        </div>
                        
                        <div className="w-full flex flex-col items-start gap-[30px]">
                          <div className="w-full h-px bg-[#15224D]/5" />
                          <div className="px-[25px] py-[10px] border border-[#15224D]/10 rounded-full w-max">
                            <span className="text-[#424C6F] text-[16px] font-normal">{st.badge}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-[15px] mb-[40px] md:mb-[60px] w-full">
                    <div className="flex items-center relative pr-[15px]">
                      {/* Avatar */}
                      <div className="w-[34px] h-[34px] rounded-full overflow-hidden border-2 border-white shadow-sm z-0">
                        <img src="/images/services/service-1.jpg" alt="Doctor" className="w-full h-full object-cover" />
                      </div>
                      {/* Overlapping Clock Icon */}
                      <div className="absolute left-[20px] top-1/2 -translate-y-1/2 w-[34px] h-[34px] rounded-full bg-[#00ADEE] flex items-center justify-center border-2 border-white shadow-sm z-10">
                        <Clock className="w-[18px] h-[18px] text-white" />
                      </div>
                    </div>
                    <div className="text-[#15224D] text-[16px] md:text-[18.5px] font-sans leading-none flex items-center gap-1 flex-wrap justify-center">
                      <span className="font-bold text-[17px] md:text-[20px]">Working Hours:</span>
                      <span className="text-[#555C7A]">Monday-Saturday, 9:00 AM – 7:00 PM</span>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.3}>
                  <div className="flex flex-col md:flex-row gap-[40px] xl:gap-[50px] mb-[60px] xl:mb-[80px]">
                    <div className="w-full md:w-[45%] h-[300px] md:h-[400px] xl:h-[550px] rounded-[20px] overflow-hidden shrink-0">
                      <img className="w-full h-full object-cover" src={data.benefits.image} alt={data.benefits.title} />
                    </div>
                    <div className="w-full md:w-[55%] flex flex-col justify-center">
                      <h3 className="text-[#15224D] font-medium text-[32px] md:text-[36px] leading-[1.2] tracking-[-0.52px] mb-[20px]">{data.benefits.title}</h3>
                      <p className="text-[#424C6F] font-normal text-[15px] leading-[26px] mb-[35px]">{data.benefits.desc}</p>
                      <div className="flex flex-col">
                        {data.benefits.points.map((pt, i) => (
                           <React.Fragment key={i}>
                            {i > 0 && <div className="w-full h-px bg-[#15224D]/10 my-[25px]" />}
                            <div className="flex items-start gap-[15px]">
                              <div className="w-[20px] h-[20px] rounded-full bg-[#00ADEE] flex items-center justify-center shrink-0 mt-[2px]">
                                <Check className="w-[14px] h-[14px] text-white font-bold" strokeWidth={4} />
                              </div>
                              <div>
                                <h4 className="text-[#15224D] font-bold text-[19.2px] mb-[10px]">{pt.title}</h4>
                                <p className="text-[#424C6F] font-normal text-[15.5px] leading-[26px]">{pt.desc}</p>
                              </div>
                            </div>
                           </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* FAQ Section Integrated Inline */}
                <AnimateOnScroll delay={0.4}>
                  <div className="pt-0">
                    <h3 className="text-[#15224D] font-medium text-[32px] sm:text-[42px] md:text-[52px] leading-[1.1] tracking-[-1px] mb-[30px] md:mb-[35px]">Frequently Asked Questions</h3>
                    <div className="flex flex-col border-t border-[#15224D]/10">
                      {data.faqs.map((faq, idx) => (
                        <FaqAccordion
                          key={idx}
                          question={`${idx + 1}. ${faq.question}`}
                          answer={faq.answer}
                          isOpen={activeFaq === idx}
                          onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                        />
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetails;
