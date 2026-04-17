import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';

const ContactCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] mb-[60px] lg:mb-[80px]">
      
      {/* Email Card */}
      <AnimateOnScroll delay={0}>
        <a 
          href="mailto:domain@mail.com" 
          className="bg-white rounded-[20px] p-[25px] flex flex-col group cursor-pointer transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(21,34,77,0.08)]"
          style={{ boxShadow: '0 2px 12px rgba(21,34,77,0.04)' }}
        >
          <div className="mb-[20px]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#15224D" strokeWidth="1.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <h3 className="text-[#15224D] font-bold text-[18px] mb-[8px]">E-mail Us!</h3>
          <p className="text-[#555C7A] font-normal text-[14.5px] mb-[25px]">domain@mail.com</p>
          <div className="mt-auto w-full h-[45px] rounded-full text-white text-[14.5px] font-bold flex items-center justify-center transition-colors duration-300 bg-[#00ADEE] group-hover:bg-[#15224D]">
            E-Mail Us
          </div>
        </a>
      </AnimateOnScroll>

      {/* Call Card */}
      <AnimateOnScroll delay={0.1}>
        <a 
          href="tel:+91132465798" 
          className="bg-white rounded-[20px] p-[25px] flex flex-col group cursor-pointer transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(21,34,77,0.08)]"
          style={{ boxShadow: '0 2px 12px rgba(21,34,77,0.04)' }}
        >
          <div className="mb-[20px]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#15224D" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              <path d="M14.05 2l.94 2.94L18 5.86l-2.94.94L14.05 9l-.94-2.94L10.17 5.12l2.94-.94z" fill="#15224D" stroke="none"/>
            </svg>
          </div>
          <h3 className="text-[#15224D] font-bold text-[18px] mb-[8px]">Call Us!</h3>
          <p className="text-[#555C7A] font-normal text-[14.5px] mb-[25px]">+91132465798</p>
          <div className="mt-auto w-full h-[45px] rounded-full text-white text-[14.5px] font-bold flex items-center justify-center transition-colors duration-300 bg-[#00ADEE] group-hover:bg-[#15224D]">
            Call Now
          </div>
        </a>
      </AnimateOnScroll>

      {/* Visit Card */}
      <AnimateOnScroll delay={0.2}>
        <a 
          href="https://maps.google.com/?q=123+Vision+Care+Street,+State,+05"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-[20px] p-[25px] flex flex-col group cursor-pointer transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(21,34,77,0.08)]"
          style={{ boxShadow: '0 2px 12px rgba(21,34,77,0.04)' }}
        >
          <div className="mb-[20px]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#15224D" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h3 className="text-[#15224D] font-bold text-[18px] mb-[8px]">Visited Today!</h3>
          <p className="text-[#555C7A] font-normal text-[14.5px] mb-[25px]">123 Vision Care Street, State, 05</p>
          <div className="mt-auto w-full h-[45px] rounded-full text-white text-[14.5px] font-bold flex items-center justify-center transition-colors duration-300 bg-[#00ADEE] group-hover:bg-[#15224D]">
            Visit Us
          </div>
        </a>
      </AnimateOnScroll>

      {/* Hours Card */}
      <AnimateOnScroll delay={0.3}>
        <a 
          href="#"
          className="bg-white rounded-[20px] p-[25px] flex flex-col group cursor-pointer transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(21,34,77,0.08)]"
          style={{ boxShadow: '0 2px 12px rgba(21,34,77,0.04)' }}
        >
          <div className="mb-[20px]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#15224D" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <h3 className="text-[#15224D] font-bold text-[18px] mb-[8px]">Opening Hours!</h3>
          <p className="text-[#555C7A] font-normal text-[14.5px] mb-[25px]">Mon-Sat:- 9:00 AM - 7:00 PM</p>
          <div className="mt-auto w-full h-[45px] rounded-full text-white text-[14.5px] font-bold flex items-center justify-center transition-colors duration-300 bg-[#00ADEE] group-hover:bg-[#15224D]">
            24/7 Support
          </div>
        </a>
      </AnimateOnScroll>
    </div>
  );
};

export default ContactCards;
