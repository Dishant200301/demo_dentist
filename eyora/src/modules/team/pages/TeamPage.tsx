import { Helmet } from 'react-helmet-async';
import PageBanner from '@/modules/core/components/PageBanner';
import TeamList from '../components/TeamList';
import WhyChooseSection from '@/modules/core/components/WhyChooseSection';
import ServiceFAQSection from '@/modules/core/components/ServiceFAQSection';
import ServiceTestimonials from '@/modules/core/components/ServiceTestimonials';
import BlogSection from '@/modules/core/components/BlogSection';
import AppointmentSection from '@/modules/core/components/AppointmentSection';

const Team = () => (
  <>
    <Helmet>
      <title>Our Team - Eyora Eye Care</title>
      <meta name="description" content="Meet our experienced eye care professionals at Eyora. Expert ophthalmologists dedicated to your vision health." />
    </Helmet>
    <div className="pt-0 bg-[#F8F9FA]">
      <PageBanner title="Our team" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Our Team' }]} />

      <TeamList />
      
      <WhyChooseSection />
      <ServiceFAQSection />
      <ServiceTestimonials />
      <BlogSection />
      <AppointmentSection />
    </div>
  </>
);

export default Team;
