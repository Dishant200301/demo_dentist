import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhatWeDoSection from '@/modules/core/components/WhatWeDoSection';
import WhyChooseSection from '@/modules/core/components/WhyChooseSection';
import TeamSection from '@/modules/core/components/TeamSection';
import VideoSection from '@/modules/core/components/VideoSection';
import PricingSection from '@/modules/core/components/PricingSection';
import AppointmentSection from '@/modules/core/components/AppointmentSection';
import TestimonialsSection from '@/modules/core/components/TestimonialsSection';
import FAQSection from '@/modules/core/components/FAQSection';
import BlogSection from '@/modules/core/components/BlogSection';

const Home = () => (
  <>
    <Helmet>
      <title>Eyora - Complete Eye Care For Every Stage Of Life</title>
      <meta name="description" content="Experience comprehensive eye care from our team of specialized ophthalmologists. Advanced diagnostics, personalized treatment plans, and compassionate care." />
    </Helmet>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <WhatWeDoSection />
    <WhyChooseSection />
    <TeamSection />
    <VideoSection />
    <PricingSection />
    <AppointmentSection />
    <TestimonialsSection />
    <FAQSection />
    <BlogSection />
  </>
);

export default Home;
