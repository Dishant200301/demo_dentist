import { useState } from 'react';
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const PricingAppointmentBlock = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    date: ''
  });

  return (
    <section className="bg-[#f8f9fa] pb-[50px] md:pb-[80px] lg:pb-[120px]">
      <div className="lg:container-padding max-w-[1600px] mx-auto">
        <div
          className="relative lg:rounded-[20px] shadow-xl overflow-hidden bg-local xl:bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/images/about/about-secondary.jpg')" }}
        >
          {/* Parallax Overlay Matrix */}
          <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />

          <AnimateOnScroll className="relative z-10">
            <div className="p-[20px] sm:p-[30px] lg:p-[50px] xl:p-[70px] flex flex-col xl:flex-row gap-[30px] lg:gap-[60px] items-center">

              {/* Left side Content */}
              <div className="w-full xl:w-1/2">
                <div className="flex items-center gap-[8px] mb-[10px] lg:mb-[15px]">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#00ADEE]" />
                  <span className="text-white text-[13px] lg:text-[14px] font-medium tracking-wide">Book An Appointment</span>
                </div>
                <h2 className="text-white font-medium text-[28px] sm:text-[36px] md:text-[44px] leading-[1.2] lg:leading-[1.1] mb-[15px] lg:mb-[20px] tracking-[-1px]">
                  Create your Appointment<br className="hidden sm:block" /> for Expert Eye Care
                </h2>
                <p className="text-white/80 text-[14px] lg:text-[14.5px] leading-[24px] lg:leading-[26px] mb-[30px] lg:mb-[40px] max-w-[500px]">
                  Booking your eye care appointment is simple and convenient Experienced specialists are ready to provide personalized vision care, advanced treatments.
                </p>

                {/* Contact Info Embedded Card */}
                <div className="bg-[#6B7593]/40 backdrop-blur-md border border-white/5 rounded-[20px] p-[20px] sm:p-[25px] lg:p-[30px]">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <a href="tel:+123456789" className="flex items-center gap-[15px] flex-1 group cursor-pointer w-full sm:w-max">
                      <div className="w-[45px] h-[45px] bg-[#00ADEE] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#15224D] transition-colors duration-300">
                        <Phone className="w-[20px] h-[20px] text-white" strokeWidth={2} />
                      </div>
                      <div className="flex flex-col overflow-hidden">
                        <span className="block text-white font-bold text-[16px] leading-tight mb-[4px] group-hover:text-[#00ADEE] transition-colors duration-300">Call Us!</span>
                        <span className="text-white/80 font-normal text-[13.5px] truncate sm:whitespace-normal">+(123) 456 789</span>
                      </div>
                    </a>

                    <div className="w-full sm:w-px h-px sm:h-[45px] bg-white/10 my-[20px] sm:my-0 sm:mx-[25px]" />

                    <a href="mailto:info@dominname.com" className="flex items-center gap-[15px] flex-1 group cursor-pointer w-full sm:w-max">
                      <div className="w-[45px] h-[45px] bg-[#00ADEE] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#15224D] transition-colors duration-300">
                        <Mail className="w-[20px] h-[20px] text-white" strokeWidth={2} />
                      </div>
                      <div className="flex flex-col overflow-hidden">
                        <span className="block text-white font-bold text-[16px] leading-tight mb-[4px] group-hover:text-[#00ADEE] transition-colors duration-300">E-mail Us!</span>
                        <span className="text-white/80 font-normal text-[13.5px] truncate sm:whitespace-normal">info@dominname.com</span>
                      </div>
                    </a>
                  </div>

                  <div className="w-full h-px bg-white/10 my-[25px]" />

                  <a href="https://maps.google.com/?q=123+Vision+Care+Street,+City+Name,+State,+005" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[15px] group cursor-pointer w-full sm:w-max">
                    <div className="w-[45px] h-[45px] bg-[#00ADEE] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#15224D] transition-colors duration-300">
                      <MapPin className="w-[20px] h-[20px] text-white" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col">
                      <span className="block text-white font-bold text-[16px] leading-tight mb-[4px] group-hover:text-[#00ADEE] transition-colors duration-300">Visited Today!</span>
                      <span className="text-white/80 font-normal text-[13.5px]">123 Vision Care Street, City Name, State, 005</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right side - Form Container */}
              <div className="w-full xl:w-1/2 bg-white rounded-[20px] p-[20px] sm:p-[30px] md:p-[56px] shadow-[0_15px_40px_rgba(21,34,77,0.08)]">
                <form
                  className="space-y-[20px]"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setHasSubmitted(true);
                    const hasErrors = Object.values(formState).some(v => v === '');
                    if (!hasErrors) {
                      setIsSuccess(true);
                    } else {
                      setIsSuccess(false);
                    }
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="First Name*"
                        className={`w-full h-[55px] px-[20px] rounded-[8px] border ${hasSubmitted && !formState.firstName ? 'border-[#FA6E6E]' : 'border-[#E5E7EB]'} text-[#424C6F] font-medium text-[15px] outline-none focus:border-[#00ADEE] transition-colors`}
                        value={formState.firstName}
                        onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                      />
                      {hasSubmitted && !formState.firstName && <span className="text-[#FA6E6E] text-[14px] mt-[6px] text-left">Please fill out this field.</span>}
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="Last Name*"
                        className={`w-full h-[55px] px-[20px] rounded-[8px] border ${hasSubmitted && !formState.lastName ? 'border-[#FA6E6E]' : 'border-[#E5E7EB]'} text-[#424C6F] font-medium text-[15px] outline-none focus:border-[#00ADEE] transition-colors`}
                        value={formState.lastName}
                        onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                      />
                      {hasSubmitted && !formState.lastName && <span className="text-[#FA6E6E] text-[14px] mt-[6px] text-left">Please fill out this field.</span>}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <input
                      type="email"
                      placeholder="E-mail Address*"
                      className={`w-full h-[55px] px-[20px] rounded-[8px] border ${hasSubmitted && !formState.email ? 'border-[#FA6E6E]' : 'border-[#E5E7EB]'} text-[#424C6F] font-medium text-[15px] outline-none focus:border-[#00ADEE] transition-colors`}
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                    {hasSubmitted && !formState.email && <span className="text-[#FA6E6E] text-[14px] mt-[6px] text-left">Please fill out this field.</span>}
                  </div>

                  <div className="flex flex-col">
                    <input
                      type="tel"
                      placeholder="Phone no. *"
                      className={`w-full h-[55px] px-[20px] rounded-[8px] border ${hasSubmitted && !formState.phone ? 'border-[#FA6E6E]' : 'border-[#E5E7EB]'} text-[#424C6F] font-medium text-[15px] outline-none focus:border-[#00ADEE] transition-colors`}
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                    {hasSubmitted && !formState.phone && <span className="text-[#FA6E6E] text-[14px] mt-[6px] text-left">Please fill out this field.</span>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                    <div className="flex flex-col">
                      <div className="relative">
                        <select
                          className={`w-full h-[55px] px-[20px] rounded-[8px] border ${hasSubmitted && !formState.service ? 'border-[#FA6E6E]' : 'border-[#E5E7EB]'} text-[#424C6F] font-medium text-[15px] outline-none appearance-none focus:border-[#00ADEE] transition-colors bg-white`}
                          value={formState.service}
                          onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        >
                          <option value="">Select a Services</option>
                          <option value="Eye Examination">Eye Examination</option>
                          <option value="Contact Lenses">Contact Lenses</option>
                        </select>
                        <ChevronDown className="absolute right-[15px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#424C6F] pointer-events-none" strokeWidth={2} />
                      </div>
                      {hasSubmitted && !formState.service && <span className="text-[#FA6E6E] text-[14px] mt-[6px] text-left">Please fill out this field.</span>}
                    </div>
                    <div className="flex flex-col">
                      <div className="relative">
                        <input
                          type="date"
                          placeholder="mm/dd/yyyy"
                          className={`w-full h-[55px] px-[20px] rounded-[8px] border ${hasSubmitted && !formState.date ? 'border-[#FA6E6E]' : 'border-[#E5E7EB]'} text-[#424C6F] font-medium text-[15px] outline-none focus:border-[#00ADEE] transition-colors bg-white w-[100%]`}
                          value={formState.date}
                          onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                        />
                      </div>
                      {hasSubmitted && !formState.date && <span className="text-[#FA6E6E] text-[14px] mt-[6px] text-left">Please fill out this field.</span>}
                    </div>
                  </div>

                  <div className="pt-[5px]">
                    <button type="submit" className="w-full bg-[#00ADEE] text-white font-bold text-[16px] py-[18px] rounded-[8px] hover:bg-[#15224D] transition-colors text-center inline-block">
                      Make An Appointment
                    </button>
                  </div>

                  {hasSubmitted && Object.values(formState).some(v => v === '') && (
                    <div className="w-full border border-[#FA6E6E] rounded-[30px] sm:rounded-full py-[12px] px-[20px] text-center mt-[20px]">
                      <span className="text-[#FA6E6E] text-[14.5px] font-normal leading-tight">One or more fields have an error. Please check and try again.</span>
                    </div>
                  )}

                  {isSuccess && (
                    <div className="w-full border border-[#4CAF50] rounded-full py-[12px] px-[20px] mt-[20px]">
                      <span className="text-[#4CAF50] text-[15px] font-normal leading-tight">Thank you for your message. It has been sent.</span>
                    </div>
                  )}
                </form>
              </div>

            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default PricingAppointmentBlock;
