import { Helmet } from 'react-helmet-async';
import PageBanner from '@/modules/core/components/PageBanner';
import ContactCards from '../components/ContactCards';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Eyora Eye Care</title>
        <meta name="description" content="Get in touch with Eyora Eye Care. Contact us for appointments, inquiries, or expert eye care guidance." />
      </Helmet>
      <div className="pt-0 relative overflow-hidden">
        <PageBanner title="Contact us" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]} />

        <section className="bg-[#F8F9FA] py-[50px] md:py-[80px] lg:py-[120px]">
          <div className="container-padding max-w-[1400px] mx-auto">
            <ContactCards />
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
