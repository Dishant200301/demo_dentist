import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import PageBanner from '@/modules/core/components/PageBanner';
import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';
import { Phone, Mail, MapPin, Award, Check } from 'lucide-react';
import { teamDetailsData } from '../data';
import React from 'react';
import { motion } from 'framer-motion';
import ServiceTestimonials from '@/modules/core/components/ServiceTestimonials';
import AppointmentSection from '@/modules/core/components/AppointmentSection';

const TeamDetails = () => {
  const { id } = useParams();

  // Use data from teamDetailsData matching exactly
  const data = teamDetailsData[id || ''] || teamDetailsData['dr-meera-shah'];

  return (
    <>
      <Helmet>
        <title>{data.name} - Eyora Eye Care</title>
        <meta name="description" content={`Learn more about ${data.name}, ${data.role} at Eyora Eye Care.`} />
      </Helmet>
      <div className="pt-0">
        <PageBanner
          title={data.name}
          breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Our Team', to: '/team' }, { label: data.name }]}
        />

        <section className="py-[50px] md:py-[80px] lg:py-[120px]">
          <div className="container-padding max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-[40px] xl:gap-[45px]">

              {/* Left Sidebar */}
              <div className="w-full lg:w-[35%] xl:w-[32%] shrink-0">
                <div className="lg:sticky lg:top-[120px]">

                  {/* Doctor Portrait */}
                  <AnimateOnScroll>
                    <div className="bg-white rounded-[20px] pt-[30px] px-[20px] h-[300px] sm:h-[400px] lg:h-[380px] xl:h-[450px] flex justify-center items-end mb-[20px] md:mb-[30px] xl:mb-[40px] overflow-hidden shadow-[0_5px_20px_rgba(21,34,77,0.03)] lg:shadow-none border border-[#15224D]/5 lg:border-none">
                      <img src={data.image} alt={data.name} className="h-full object-contain object-bottom pointer-events-none w-auto" />
                    </div>
                  </AnimateOnScroll>

                  {/* Eyora Contact Box */}
                  <AnimateOnScroll delay={0.1}>
                    <div className="bg-[#15224D] rounded-[20px] overflow-hidden flex flex-col pt-[40px] xl:pt-[50px]">
                      <div className="px-[30px] xl:px-[40px] text-center flex flex-col items-center pb-[35px] xl:pb-[40px]">
                        <div className="flex items-center gap-[12px] mb-[25px]">
                          <div className="w-[45px] h-[45px] rounded-full bg-[#00ADEE] flex items-center justify-center shrink-0 shadow-[0_0_0_5px_rgba(0,173,238,0.2)]">
                            <div className="w-[20px] h-[20px] rounded-full border-[3px] border-white flex items-center justify-center">
                              <div className="w-[6px] h-[6px] rounded-full bg-white" />
                            </div>
                          </div>
                          <span className="text-white font-bold text-[28px] xl:text-[32px] tracking-tight">Eyora<span className="text-[#00ADEE]">.</span></span>
                        </div>
                        <p className="text-white/90 font-normal text-[14.5px] xl:text-[15.5px] leading-[26px] mb-[25px]">
                          We are a trusted eye care clinic dedicated providing care and support.
                        </p>
                        <a href="mailto:info@domainname.com" className="text-white font-bold text-[15.5px] xl:text-[16px] mb-[8px] leading-[1]">
                          info@domainname.com
                        </a>
                        <p className="text-white/80 font-normal text-[14.5px] mb-0">Free Toll: +(123) 456 - 789</p>
                      </div>
                      <a href="tel:+123456789" className="w-full bg-[#00ADEE] py-[22px] flex items-center justify-center gap-[12px] text-white hover:bg-white hover:text-[#15224D] transition-colors mt-auto group">
                        <Phone className="w-[18px] h-[18px] text-white group-hover:text-[#15224D] transition-all duration-300 group-hover:scale-110" strokeWidth={2.5} />
                        <span className="font-bold text-[16px] xl:text-[18px]">+(123) 456 - 789</span>
                      </a>
                    </div>
                  </AnimateOnScroll>

                </div>
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-[65%] xl:w-[68%] mt-[20px] lg:mt-0">

                <AnimateOnScroll delay={0.2}>
                  <h2 className="text-[#15224D] font-medium text-[28px] sm:text-[34px] md:text-[38px] lg:text-[44px] leading-[1.2] lg:leading-[1.1] tracking-[-1px] mb-[15px] lg:mb-[20px]">About {data.name}</h2>
                  <p className="text-[#424C6F] font-normal text-[15px] sm:text-[16px] leading-[26px] lg:leading-[28px] mb-[30px] lg:mb-[45px]">
                    {data.aboutText}
                  </p>

                  {/* Contact Info + Image Row */}
                  <div className="flex flex-col md:flex-row gap-[20px] lg:gap-[30px] mb-[40px] lg:mb-[60px] xl:mb-[80px]">

                    <div className="w-full md:w-[48%] flex flex-col pt-[5px]">
                      <div className="flex items-start sm:items-center justify-between py-[12px] lg:py-[16px] border-b border-[#15224D]/10">
                        <div className="flex items-center gap-[12px] mb-[5px] sm:mb-0">
                          <Phone className="w-[16px] lg:w-[18px] h-[16px] lg:h-[18px] text-[#00ADEE]" strokeWidth={2.5} />
                          <span className="text-[#15224D] font-bold text-[15px] lg:text-[16px]">Phone:</span>
                        </div>
                        <span className="text-[#424C6F] font-normal text-[14.5px] lg:text-[15.5px] text-right">{data.contact.phone}</span>
                      </div>
                      <div className="flex items-start sm:items-center justify-between py-[12px] lg:py-[16px] border-b border-[#15224D]/10">
                        <div className="flex items-center gap-[12px] mb-[5px] sm:mb-0">
                          <Mail className="w-[16px] lg:w-[18px] h-[16px] lg:h-[18px] text-[#00ADEE]" strokeWidth={2.5} />
                          <span className="text-[#15224D] font-bold text-[15px] lg:text-[16px]">Email:</span>
                        </div>
                        <a href={`mailto:${data.contact.email}`} className="text-[#00ADEE] font-normal text-[14.5px] lg:text-[15.5px] text-right hover:underline break-all sm:break-normal">{data.contact.email}</a>
                      </div>
                      <div className="flex items-start sm:items-center justify-between py-[12px] lg:py-[16px] border-b border-[#15224D]/10">
                        <div className="flex items-center gap-[12px] mb-[5px] sm:mb-0">
                          <Award className="w-[16px] lg:w-[18px] h-[16px] lg:h-[18px] text-[#00ADEE]" strokeWidth={2.5} />
                          <span className="text-[#15224D] font-bold text-[15px] lg:text-[16px]">Position:</span>
                        </div>
                        <span className="text-[#424C6F] font-normal text-[14.5px] lg:text-[15.5px] text-right max-w-[140px] lg:max-w-[150px]">{data.contact.position}</span>
                      </div>
                      <div className="flex items-start sm:items-center justify-between py-[12px] lg:py-[16px] border-b border-[#15224D]/10">
                        <div className="flex items-center gap-[12px] mb-[5px] sm:mb-0">
                          <MapPin className="w-[16px] lg:w-[18px] h-[16px] lg:h-[18px] text-[#00ADEE]" strokeWidth={2.5} />
                          <span className="text-[#15224D] font-bold text-[15px] lg:text-[16px]">Location:</span>
                        </div>
                        <span className="text-[#424C6F] font-normal text-[14.5px] lg:text-[15.5px] text-right max-w-[140px] lg:max-w-[150px]">{data.contact.location}</span>
                      </div>
                    </div>

                    <div className="w-full md:w-[52%] h-[260px] xl:h-[280px] rounded-[20px] overflow-hidden shrink-0">
                      <img src={data.aboutImage} alt="Consultation" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* Personal Philosophy */}
                <AnimateOnScroll delay={0.3}>
                  <h3 className="text-[#15224D] font-medium text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[1.2] tracking-[-0.52px] mb-[15px] lg:mb-[20px]">Personal Philosophy</h3>
                  <p className="text-[#424C6F] font-normal text-[15px] sm:text-[16px] leading-[26px] lg:leading-[28px] mb-[20px] lg:mb-[25px]">
                    {data.philosophy.text1}
                  </p>
                  <p className="text-[#424C6F] font-normal text-[16px] leading-[28px] mb-[35px]">
                    {data.philosophy.text2}
                  </p>

                  <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-x-[30px] gap-y-[12px] lg:gap-y-[15px] mb-[40px] lg:mb-[60px] xl:mb-[80px]">
                    {data.philosophy.points.map(pt => (
                      <div key={pt} className="flex items-start sm:items-center gap-[10px]">
                        <div className="w-[18px] lg:w-[20px] h-[18px] lg:h-[20px] rounded-full bg-[#00ADEE] flex items-center justify-center text-white shrink-0 mt-[4px] sm:mt-0">
                          <Check className="w-[10px] lg:w-[12px] h-[10px] lg:h-[12px]" strokeWidth={4} />
                        </div>
                        <span className="text-[#424C6F] font-normal text-[14.5px] lg:text-[15.5px] leading-[24px]">{pt}</span>
                      </div>
                    ))}
                  </div>
                </AnimateOnScroll>

                {/* Education & Certifications */}
                <AnimateOnScroll delay={0.4}>
                  <h3 className="text-[#15224D] font-medium text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[1.2] tracking-[-0.52px] mb-[15px] lg:mb-[20px]">Education & Certifications</h3>
                  <p className="text-[#424C6F] font-normal text-[15px] sm:text-[16px] leading-[26px] lg:leading-[28px] mb-[25px] lg:mb-[35px]">
                    {data.education.intro}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px] lg:gap-[25px] mb-[40px] lg:mb-[60px] xl:mb-[80px]">
                    {data.education.cards.map((card, idx) => (
                      <div key={idx} className="bg-[#F8F9FA] sm:bg-white rounded-[15px] p-[20px] sm:p-[30px] border border-[#15224D]/5 shadow-[0_5px_20px_rgba(21,34,77,0.03)] flex flex-col items-start hover:shadow-[0_10px_30px_rgba(21,34,77,0.06)] transition-shadow">
                        <div className="flex items-center gap-[10px] sm:gap-[12px] mb-[12px] sm:mb-[15px]">
                          <div className="w-[20px] sm:w-[22px] h-[20px] sm:h-[22px] rounded-full bg-[#00ADEE] flex items-center justify-center text-white shrink-0">
                            <Check className="w-[12px] h-[12px]" strokeWidth={4} />
                          </div>
                          <h4 className="text-[#15224D] font-bold text-[16px] sm:text-[18px] leading-[1.2]">{card.title}</h4>
                        </div>
                        <p className="text-[#424C6F] font-normal text-[14.5px] sm:text-[15px] leading-[24px]">{card.desc}</p>
                      </div>
                    ))}
                  </div>
                </AnimateOnScroll>

                {/* Specializations */}
                <AnimateOnScroll delay={0.5}>
                  <h3 className="text-[#15224D] font-medium text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[1.2] tracking-[-0.52px] mb-[15px] lg:mb-[20px]">Specializations</h3>
                  <p className="text-[#424C6F] font-normal text-[15px] sm:text-[16px] leading-[26px] lg:leading-[28px] mb-[25px] lg:mb-[45px]">
                    {data.specializations.text}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[35px] mb-[60px] xl:mb-[80px]">
                    {data.specializations.skills.map(skill => (
                      <div key={skill.label}>
                        <div className="flex justify-between items-center mb-[12px]">
                          <span className="text-[#15224D] font-bold text-[16px]">{skill.label}</span>
                          <span className="text-[#424C6F] font-medium text-[15px]">{skill.percentage}%</span>
                        </div>
                        <div className="w-full h-[6px] rounded-full bg-[#15224D]/10 overflow-visible relative">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                            className="h-full bg-[#15224D] rounded-full absolute left-0 top-0"
                          >
                            {/* Inner pseudo-element for style */}
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimateOnScroll>

                {/* Contact Form */}
                <AnimateOnScroll delay={0.6}>
                  <div className="bg-[#F8F9FA] rounded-[20px] p-[10px] sm:p-[35px] md:p-[0px] lg:p-[0px] lg:bg-[#F8F9FA] md:bg-transparent">
                    <div className="flex items-center gap-[6px] mb-[10px] lg:mb-[15px]">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#00ADEE]" />
                      <span className="text-[#00ADEE] font-medium text-[14px] lg:text-[15px]">Contact Me</span>
                    </div>
                    <h3 className="text-[#15224D] font-medium text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] leading-[1.2] lg:leading-[1.15] tracking-[-1px] mb-[25px] lg:mb-[35px]">
                      Contact {data.name} for <br className="hidden sm:block" />Expert Eye Care
                    </h3>
                    <form className="flex flex-col gap-[20px]" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                        <input type="text" placeholder="First Name*" className="w-full bg-white rounded-[10px] px-[25px] py-[18px] text-[#424C6F] font-normal text-[15.5px] placeholder:text-[#A0A8C3] outline-none border border-transparent focus:border-[#00ADEE] transition-colors shadow-sm" />
                        <input type="text" placeholder="Last Name*" className="w-full bg-white rounded-[10px] px-[25px] py-[18px] text-[#424C6F] font-normal text-[15.5px] placeholder:text-[#A0A8C3] outline-none border border-transparent focus:border-[#00ADEE] transition-colors shadow-sm" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                        <input type="tel" placeholder="Enter Phone Number*" className="w-full bg-white rounded-[10px] px-[25px] py-[18px] text-[#424C6F] font-normal text-[15.5px] placeholder:text-[#A0A8C3] outline-none border border-transparent focus:border-[#00ADEE] transition-colors shadow-sm" />
                        <input type="email" placeholder="Enter Email Address*" className="w-full bg-white rounded-[10px] px-[25px] py-[18px] text-[#424C6F] font-normal text-[15.5px] placeholder:text-[#A0A8C3] outline-none border border-transparent focus:border-[#00ADEE] transition-colors shadow-sm" />
                      </div>
                      <textarea rows={5} placeholder="Message" className="w-full bg-white rounded-[10px] px-[25px] py-[18px] text-[#424C6F] font-normal text-[15.5px] placeholder:text-[#A0A8C3] outline-none border border-transparent focus:border-[#00ADEE] transition-colors resize-none shadow-sm"></textarea>
                      <button type="submit" className="w-max bg-[#00ADEE] text-white font-bold text-[15.5px] px-[40px] py-[18px] rounded-full hover:bg-[#15224D] transition-colors mt-[5px]">
                        Submit Message
                      </button>
                    </form>
                  </div>
                </AnimateOnScroll>

              </div>
            </div>
          </div>
        </section>
        <ServiceTestimonials />
        <AppointmentSection />
      </div>
    </>
  );
};

export default TeamDetails;
