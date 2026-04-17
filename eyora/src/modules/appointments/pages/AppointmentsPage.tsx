import { Helmet } from 'react-helmet-async';
import PageBanner from '@/modules/core/components/PageBanner';
import AppointmentForm from '../components/AppointmentForm';
import ServiceFAQSection from '@/modules/core/components/ServiceFAQSection';
import ServiceTestimonials from '@/modules/core/components/ServiceTestimonials';
import TrustedCareSection from '@/modules/core/components/TrustedCareSection';
import ExpertiseSection from '@/modules/services/components/ExpertiseSection';

const Appointment = () => {
  return (
    <>
      <Helmet>
        <title>Book an Appointment - Eyora Eye Care</title>
        <meta name="description" content="Book your eye health consultation with our expert ophthalmologists at Eyora Eye Care." />
      </Helmet>
      <div className="pt-0 overflow-hidden">
        <PageBanner title="Book an Appointment" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Book Appointment' }]} />
        
        <AppointmentForm />
        <ExpertiseSection/>
        <TrustedCareSection />
        <ServiceFAQSection />
        <ServiceTestimonials />
      </div>
    </>
  );
};

export default Appointment;
