import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const faqs = [
  {
    question: "1. What common eye problems can be detected early?",
    answer: "Regular eye exam can detect condition like glaucoma, cataracts, diabetic retinopathy and refractive errors, helping prevent vision loss."
  },
  {
    question: "2. Do you offer treatments for children's vision problems?",
    answer: "Yes, we provide comprehensive pediatric eye care including vision therapy, lazy eye treatments, and myopia control tailored for children's developing eyes."
  },
  {
    question: "3. Can cataracts and glaucoma be treated effectively?",
    answer: "Absolutely. With early detection, both conditions can be managed effectively using advanced treatments, medication, or minimally invasive surgical options."
  },
  {
    question: "4. Do you accept insurance for treatments and exams?",
    answer: "We accept most major insurance plans and offer flexible payment options to ensure you receive the eye care you need without financial stress."
  }
];

const ServiceFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-transparent pb-[80px] lg:pb-[120px] relative">
      <div className="px-0 sm:px-0 lg:px-8 xl:px-[60px] max-w-[1500px] mx-auto relative z-10">
        <div className="bg-white lg:rounded-[20px] p-[20px] md:p-[30px] lg:p-[60px] xl:p-[80px] shadow-[0_10px_40px_rgba(21,34,77,0.03)] relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[80px] xl:gap-[60px] items-center relative z-10">
            
            {/* Left: Content & Accordion */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <AnimateOnScroll className="max-w-[800px] w-full">
                <div className="flex items-center gap-[8px] mb-[15px]">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#00ADEE]" />
                  <span className="text-[#15224D] text-[15.6px] font-medium leading-[22px]">Frequently Asked Question</span>
                </div>

                <h2 className="text-[#15224D] font-medium text-[30px] sm:text-[36px] md:text-[40px] leading-[1.2] sm:leading-[1.1] tracking-[-0.52px] mb-[30px] sm:mb-[40px] xl:mb-[20px]">
                  Common Question About  Vision Care Services
                </h2>

                <div className="flex flex-col w-full">
                  {faqs.map((faq, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                      <div key={idx} className="border-b border-[#15224D]/10 last:border-0">
                        <button 
                          className="w-full py-[16px] sm:py-[22px] flex items-center justify-between text-left focus:outline-none group"
                          onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                        >
                          <span className="text-[15px] sm:text-[17px] font-medium text-[#15224D] pr-[15px] sm:pr-[20px] block w-full">{faq.question}</span>
                          <div className={`w-[24px] sm:w-[26px] h-[24px] sm:h-[26px] rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-[#15224D]' : 'bg-[#00ADEE]'}`}>
                            {isOpen ? (
                              <ChevronUp className="w-[14px] sm:w-[16px] h-[14px] sm:h-[16px] text-white" strokeWidth={2.5} />
                            ) : (
                              <ChevronDown className="w-[14px] sm:w-[16px] h-[14px] sm:h-[16px] text-white" strokeWidth={2.5} />
                            )}
                          </div>
                        </button>
                          <div 
                            className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-[25px]' : 'grid-rows-[0fr] opacity-0 pb-0'}`}
                          >
                            <div className="overflow-hidden">
                              <p className="text-[#424C6F] font-normal text-[14px] sm:text-[15.5px] leading-[22px] sm:leading-[26px] pr-[0%] sm:pr-[10%] pt-[5px]">{faq.answer}</p>
                            </div>
                          </div>
                      </div>
                    );
                  })}
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right: Image */}
            <AnimateOnScroll className="w-full lg:w-1/2 relative mt-[20px] lg:mt-0">
              <div className="relative rounded-[20px] overflow-hidden shine-hover w-full min-h-[350px] sm:min-h-[450px] lg:min-h-[600px] shadow-[0_15px_40px_rgba(21,34,77,0.06)]">
                <img 
                  src="/images/services/service-3.jpg" 
                  alt="Eye Exam with Patient" 
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('service-1.jpg')) {
                      target.src = '/images/services/service-1.jpg';
                    }
                  }}
                />
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-[20px] sm:bottom-[30px] lg:bottom-[40px] left-[20px] sm:left-[30px] lg:left-[40px] bg-white rounded-[15px] sm:rounded-[20px] p-[20px] sm:p-[30px] lg:p-[35px] shadow-[0_20px_50px_rgba(21,34,77,0.12)] w-max max-w-[220px] sm:max-w-[280px] z-10">
                <div className="mb-[15px] sm:mb-[20px]">
                  {/* Custom Speech Bubble SVG */}
                  <svg className="w-[35px] h-[35px] sm:w-[45px] sm:h-[45px]" viewBox="0 0 24 24" fill="#00ADEE" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="none" />
                    {/* Central question mark cutout */}
                    <text x="50%" y="54%" textAnchor="middle" fill="white" fontSize="14px" fontWeight="bold" fontFamily="sans-serif" dy=".3em">?</text>
                  </svg>
                </div>
                <h4 className="text-[#15224D] font-bold text-[16px] sm:text-[18px] lg:text-[22px] leading-[22px] sm:leading-[24px] lg:leading-[28px]">
                  Relax, We've Got the Answers
                </h4>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQSection;
