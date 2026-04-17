import { Helmet } from 'react-helmet-async';
import PageBanner from '@/modules/core/components/PageBanner';
import AboutHero from '../components/AboutHero';
import ApproachSection from '../components/ApproachSection';
import WhatWeDoSection from '@/modules/core/components/WhatWeDoSection';
import WhyChooseSection from '@/modules/core/components/WhyChooseSection';
import VideoSection from '@/modules/core/components/VideoSection';
import TrustedCareSection from '@/modules/core/components/TrustedCareSection';
import TeamSection from '@/modules/core/components/TeamSection';
import ServiceFAQSection from '@/modules/core/components/ServiceFAQSection';
import ServiceTestimonials from '@/modules/core/components/ServiceTestimonials';
const About = () => (
  <>
    <Helmet>
      <title>About Us - Eyora Eye Care</title>
      <meta name="description" content="Learn about Eyora Eye Care - trusted ophthalmologists dedicated to providing advanced, reliable eye care services." />
    </Helmet>
    <div className="pt-0">
      <PageBanner title="About Us" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />
      <AboutHero />
      <ApproachSection />
      <WhatWeDoSection />
      <WhyChooseSection />
      <VideoSection />
      <TrustedCareSection />
      <TeamSection />
      <ServiceFAQSection />
      <ServiceTestimonials />
    
    </div>
  </>
);

export default About;
