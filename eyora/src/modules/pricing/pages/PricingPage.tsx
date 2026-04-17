import { Helmet } from 'react-helmet-async';
import PageBanner from '@/modules/core/components/PageBanner';
import PricingCards from '../components/PricingCards';
import ServiceTestimonials from '@/modules/core/components/ServiceTestimonials';
import ServiceFAQSection from '@/modules/core/components/ServiceFAQSection';
import TrustedCareSection from '@/modules/core/components/TrustedCareSection';
import PricingAppointmentBlock from '@/modules/core/components/PricingAppointmentBlock';

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Our pricing - Eyora Eye Care</title>
        <meta name="description" content="Affordable eye care pricing plans at Eyora. Choose from Basic, Standard, and Premium plans for comprehensive vision care." />
      </Helmet>
      <div className="pt-0">
        <PageBanner title="Our pricing" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Pricing Plan' }]} />

        <PricingCards />
        <PricingAppointmentBlock />
        <TrustedCareSection />
        <ServiceFAQSection />
        <ServiceTestimonials />
      </div>
    </>
  );
};

export default Pricing;
