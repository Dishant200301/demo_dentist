import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageBanner from '@/modules/core/components/PageBanner';
import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';
import { services } from '../data';
import WhyChooseSection from '@/modules/core/components/WhyChooseSection';
import ArrowIcon from '@/modules/core/components/ArrowIcon';
import ExpertiseSection from '../components/ExpertiseSection';
import TrustedCareSection from '@/modules/core/components/TrustedCareSection';
import ServiceFAQSection from '@/modules/core/components/ServiceFAQSection';
import ServiceTestimonials from '@/modules/core/components/ServiceTestimonials';
import AppointmentSection from '@/modules/core/components/AppointmentSection';
import BlogSection from '@/modules/core/components/BlogSection';

const Services = () => (
  <>
    <Helmet>
      <title>Our Services - Eyora Eye Care</title>
      <meta name="description" content="Comprehensive eye care services including eye exams, contact lens fitting, retinal treatments, and more at Eyora." />
    </Helmet>
    <div className="pt-0">
      <PageBanner title="Our services" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />

      <section className="section-padding container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.id} delay={i * 0.1}>
              <Link to={`/services/${service.id}`} className="group relative block w-full h-[454px] rounded-[20px] overflow-hidden cursor-pointer hover-lift">
                {/* Background Image */}
                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(21, 34, 77, 0) 34.89%, #15224D 100%)' }} />

                {/* Eyora Contact Box */}
                <div className="absolute inset-0 p-[40px] flex flex-col justify-end translate-y-[81px] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  {/* Heading & Paragraph */}
                  <h3 className="text-white font-semibold text-[19.7px] leading-[24px] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white font-normal text-[15.1px] leading-[26px]">
                    {service.desc}
                  </p>

                  {/* Border & Read More Button - Fades in on hover */}
                  <div className="mt-[24px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col">
                    <div className="w-full h-px bg-white/20 mb-[24px]" />
                    <div className="flex items-center gap-3">
                      <span className="text-white font-bold text-[18px]">Read More</span>
                      <span className="w-8 h-8 rounded-full bg-[#00b4fe] flex items-center justify-center">
                        <ArrowIcon className="w-4 h-4 text-white transition-transform duration-300 group-hover:-rotate-45" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <ExpertiseSection />
      <TrustedCareSection />
      <ServiceFAQSection />
      <ServiceTestimonials />
    </div>
  </>
);

export default Services;
