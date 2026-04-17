import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';
import { API_BASE_URL, getPublicHeaders } from '@/modules/appointments/utils/apiConfig';

const ContactForm = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);
    const hasErrors = Object.values(form).some(v => typeof v === 'string' && v.trim() === '');
    
    if (hasErrors) {
      setIsSuccess(false);
      return;
    }
    
    setIsLoading(true);
    try {
      const payload = {
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        phone: form.phone,
        message: form.message,
        subject: 'Contact Form Inquiry',
        source: 'eyora-website'
      };

      const resp = await fetch(`${API_BASE_URL}/contact-inquiries`, {
        method: 'POST',
        headers: getPublicHeaders(),
        body: JSON.stringify(payload)
      });
      const data = await resp.json();
      if(data.success) {
        setIsSuccess(true);
        setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        setHasSubmitted(false);
      } else {
        alert(data.message || 'Error sending message');
      }
    } catch(e) {
      console.error(e);
      alert('Network Error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-[40px] lg:gap-[60px] items-start">
      
      {/* Map Layout */}
      <AnimateOnScroll className="w-full h-full">
        <div 
          className="rounded-[20px] overflow-hidden h-[350px] sm:h-[450px] lg:h-[600px] xl:h-[700px] w-full"
          style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.241264871845!2d-73.98784368459377!3d40.75797477932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480293%3A0x517020050e56b635!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
          ></iframe>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.2} className="w-full">
        <div className="py-[10px] lg:py-[20px]">
          {/* Section Label */}
          <div className="flex items-center gap-[8px] mb-[15px]">
            <span className="w-[6px] h-[6px] rounded-full bg-[#00ADEE]"></span>
            <span className="text-[#15224D] text-[15px] font-medium tracking-wide">Contact Us</span>
          </div>
          
          <h2 
            className="text-[#15224D] mb-[25px] lg:mb-[40px] font-sans"
            style={{ 
              fontSize: 'clamp(30px, 4vw, 44px)', 
              lineHeight: '1.2', 
              letterSpacing: '-1px',
              maxWidth: '500px'
            }}
          >
            Get in Touch for Expert & Trusted Eye Care
          </h2>

          {/* Form */}
          <form 
            className="space-y-[20px]" 
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
              <div className="flex flex-col">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className={`w-full h-[58px] px-[20px] text-[15px] font-sans text-[#424C6F] outline-none rounded-[10px] border ${hasSubmitted && !form.firstName.trim() ? 'border-[#FA6E6E]' : 'border-gray-200'} focus:border-[#00ADEE] transition-colors`}
                  style={{ backgroundColor: 'white' }}
                  value={form.firstName} 
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })} 
                />
                {hasSubmitted && !form.firstName.trim() && <span className="text-[#FA6E6E] text-[14px] mt-[6px] text-left">Please fill out this field.</span>}
              </div>
              
              <div className="flex flex-col">
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className={`w-full h-[58px] px-[20px] text-[15px] font-sans text-[#424C6F] outline-none rounded-[10px] border ${hasSubmitted && !form.lastName.trim() ? 'border-[#FA6E6E]' : 'border-gray-200'} focus:border-[#00ADEE] transition-colors`}
                  style={{ backgroundColor: 'white' }}
                  value={form.lastName} 
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })} 
                />
                {hasSubmitted && !form.lastName.trim() && <span className="text-[#FA6E6E] text-[14px] mt-[6px] text-left">Please fill out this field.</span>}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
              <div className="flex flex-col">
                <input 
                  type="email" 
                  placeholder="Enter Email Address*" 
                  className={`w-full h-[58px] px-[20px] text-[15px] font-sans text-[#424C6F] outline-none rounded-[10px] border ${hasSubmitted && !form.email.trim() ? 'border-[#FA6E6E]' : 'border-gray-200'} focus:border-[#00ADEE] transition-colors`}
                  style={{ backgroundColor: 'white' }}
                  value={form.email} 
                  onChange={(e) => setForm({ ...form, email: e.target.value })} 
                />
                {hasSubmitted && !form.email.trim() && <span className="text-[#FA6E6E] text-[14px] mt-[6px] text-left">Please fill out this field.</span>}
              </div>

              <div className="flex flex-col">
                <input 
                  type="tel" 
                  placeholder="Enter Phone Number*" 
                  className={`w-full h-[58px] px-[20px] text-[15px] font-sans text-[#424C6F] outline-none rounded-[10px] border ${hasSubmitted && !form.phone.trim() ? 'border-[#FA6E6E]' : 'border-gray-200'} focus:border-[#00ADEE] transition-colors`}
                  style={{ backgroundColor: 'white' }}
                  value={form.phone} 
                  onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                />
                {hasSubmitted && !form.phone.trim() && <span className="text-[#FA6E6E] text-[14px] mt-[6px] text-left">Please fill out this field.</span>}
              </div>
            </div>

            <div className="flex flex-col">
              <textarea 
                placeholder="Message" 
                rows={6} 
                className={`w-full px-[20px] py-[20px] text-[15px] font-sans text-[#424C6F] outline-none rounded-[10px] border ${hasSubmitted && !form.message.trim() ? 'border-[#FA6E6E]' : 'border-gray-200'} focus:border-[#00ADEE] transition-colors resize-none`}
                style={{ backgroundColor: 'white' }}
                value={form.message} 
                onChange={(e) => setForm({ ...form, message: e.target.value })} 
              />
              {hasSubmitted && !form.message.trim() && <span className="text-[#FA6E6E] text-[14px] mt-[6px] text-left">Please fill out this field.</span>}
            </div>

            <div className="pt-[10px]">
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full sm:w-auto px-[35px] h-[58px] flex items-center justify-center rounded-[100px] text-white text-[16px] font-bold transition-colors duration-300 bg-[#00ADEE] hover:bg-[#15224D] inline-flex disabled:opacity-70"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin mx-4" /> : 'Submit Message'}
              </button>
            </div>

            {/* Error Summary Message */}
            {hasSubmitted && Object.values(form).some(v => v.trim() === '') && (
              <div className="w-full border border-[#FA6E6E] rounded-[30px] sm:rounded-full py-[12px] px-[20px] text-center mt-[20px]">
                <span className="text-[#FA6E6E] text-[14.5px] font-normal leading-tight">One or more fields have an error. Please check and try again.</span>
              </div>
            )}

            {/* Success Message */}
            {isSuccess && (
              <div className="w-full border border-[#4CAF50] rounded-[30px] sm:rounded-full py-[12px] px-[20px] mt-[20px] text-center">
                <span className="text-[#4CAF50] text-[15px] font-normal leading-tight">Thank you for your message. It has been sent.</span>
              </div>
            )}

          </form>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default ContactForm;
