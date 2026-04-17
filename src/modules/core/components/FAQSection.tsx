import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import SectionLabel from './SectionLabel';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const faqs = [
  { q: 'How often should I have an eye examination?', a: 'Most adults should have an eye exam once a year. Children, seniors, or people with existing eye conditions may need more frequent checkups.' },
  { q: 'What happens during a comprehensive eye exam?', a: 'A comprehensive eye exam includes vision testing, eye pressure measurement, dilated eye exam to check the retina, and assessment for eye diseases.' },
  { q: 'Do I need an appointment or can I walk in?', a: 'While we welcome walk-ins when possible, we recommend scheduling an appointment to ensure minimal wait time and dedicated attention.' },
  { q: 'When should children have their first eye exam?', a: 'Children should have their first comprehensive eye exam at 6 months of age, then at age 3, and again before starting school.' },
  { q: 'What are signs that I may need glasses?', a: 'Common signs include blurry vision, difficulty seeing at night, frequent headaches, eye strain, and squinting to see clearly.' },
  { q: 'Do you accept insurance for treatments and exams?', a: 'Yes, we accept most major insurance plans. Please contact our office to verify your specific coverage and benefits.' },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(2);

  return (
    <section className="section-padding container-padding bg-white rounded-[20px]">
      {/* Layer with background image */}
      <div 
        className=" bg-no-repeat"
        style={{
          backgroundImage: `url('/images/common/faq.png')`,
          backgroundPosition: 'left center',
          backgroundSize: 'auto 100%'
        }}
      />
        {/* Content layer */}
        <div className="w-full">
          <div className="bg-white rounded-[20px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-20">
            {/* Left Column */}
            <div>
              <AnimateOnScroll>
                <SectionLabel text="Frequently Asked Questions" />
                <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[50px] font-medium text-[#15224D] leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-[50px] xl:leading-[62px] mb-6 max-w-[600px] tracking-[-0.5px]">
                  Your Eye Care Questions Answered Here
                </h2>
                <p className="text-[#424C6F] text-[15px] leading-[26px] mb-12 max-w-[570px]">
                  This section answers the most common questions about our eye care services, appointments, and treatments. It is designed to help patients
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="bg-[#15224D] rounded-[16px] p-5 sm:p-6 max-w-[380px]">
                  <h3 className="text-white text-[20px] sm:text-[24px] font-medium mb-3 leading-[28px] sm:leading-[32px]">Still have questions?</h3>
                  <p className="text-white/70 text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px] mb-5">
                    If you didn't find the answer you were looking for, our team is here to help. Feel free to reach out to us for personalized guidance and expert support.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-white font-semibold text-[14px] sm:text-[15px] group">
                    <span>Call Our Clinic</span>
                    <span className="w-5 h-5 rounded-full bg-[#00ADEE] flex items-center justify-center group-hover:bg-white transition-colors">
                      <ArrowRight className="w-3 h-3 text-white group-hover:text-[#15224D] transition-colors" />
                    </span>
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right Column - Accordion */}
            <div>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <AnimateOnScroll key={i} delay={i * 0.08}>
                    <div className="rounded-[16px] overflow-hidden transition-all duration-300 bg-[#F5F5F5]">
                      <button
                        onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left"
                      >
                        <span className="flex items-center gap-3 text-[#15224D] font-medium text-[15px] sm:text-[16px] lg:text-[17px] leading-[22px] sm:leading-[23px] lg:leading-[24px] pr-4">
                          <span className="text-[#15224D] font-medium">{i + 1}.</span>
                          {faq.q}
                        </span>
                        {openIndex === i ? (
                          <ChevronUp className="w-5 h-5 text-[#15224D] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#15224D] flex-shrink-0" />
                        )}
                      </button>
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          openIndex === i ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-6 pb-5 pt-0">
                          <p className="text-[#424C6F] text-[15px] leading-[26px] pl-7">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { faqs };
export default FAQSection;
