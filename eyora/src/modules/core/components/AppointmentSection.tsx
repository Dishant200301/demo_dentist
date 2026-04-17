import { useState, useEffect } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { Phone, Mail, ChevronDown, Calendar, Clock, Loader2, CheckCircle2 } from 'lucide-react';
import { useWebAuth } from '@/modules/auth/context/WebAuthContext';
import { publicBookingService } from '@/modules/appointments/services/bookingService';

const AppointmentSection = () => {
  const { user } = useWebAuth();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')[0] || '', 
    lastName: user?.name?.split(' ')[1] || '', 
    email: user?.email || '', 
    phone: user?.phone || '', 
    service: '', 
    date: '',
    time: '09:00',
  });

  // Reset success state after 5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      if (!formData.firstName || !formData.phone || !formData.date || !formData.time) {
        throw new Error('Please fill in all required fields (Name, Phone, Date, Time)');
      }

      await publicBookingService.createBookingRequest({
        PatientName: `${formData.firstName} ${formData.lastName}`.trim(),
        PatientPhone: formData.phone,
        PatientEmail: formData.email,
        date: formData.date,
        arrivingTime: formData.time,
        notes: `Selected Service: ${formData.service || 'General'}`
      });

      setSuccess(true);
      // Optional: Reset form
      if (!user) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '09:00',
        });
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-[60px] md:py-[100px] overflow-hidden">
      {/* Background with pattern/image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(/images/hero/hero-bg.jpg)',
          filter: 'brightness(0.35)' 
        }} 
      />
      
      <div className="container-padding max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left - Content */}
          <div className="flex-1 lg:max-w-[550px]">
            <AnimateOnScroll>
              <div className="flex flex-col">
                {/* Section Label */}
                <div className="flex items-center gap-[8px] mb-[13px]">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#00ADEE]"></span>
                  <span className="text-white text-[15.6px] leading-[22px] font-medium">
                    {user ? `Hello, ${user?.name ? user.name.split(' ')[0] : (user?.email?.split('@')[0] || '')}` : 'Book An Appointment'}
                  </span>
                </div>

                {/* Heading */}
                <h2 className="text-white text-[32px] md:text-[50px] font-bold leading-[1.15] mb-[20px]">
                  Take the first step <br />
                  toward <span className="text-[#00ADEE]">Healthy Eyes.</span>
                </h2>

                <p className="text-white/80 text-[16px] leading-[1.7] mb-[40px]">
                  Ready to schedule your eye exam or consultation? Fill out the form below 
                  and our team will be in touch shortly to confirm your visit.
                </p>

                {/* Contact Boxes */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-14 h-14 rounded-full bg-[#00ADEE] flex items-center justify-center group-hover:bg-[#15224D] transition-colors duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Call Us Anytime</p>
                      <p className="text-white font-bold text-lg">+(123) 456 789 001</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right - Form Container */}
          <div className="flex-1 w-full lg:max-w-[650px]">
            <AnimateOnScroll delay={0.2}>
              <div className="bg-white rounded-[40px] p-6 md:p-10 shadow-2xl relative">
                {/* Form Title */}
                <h3 className="text-[#15224D] text-[24px] md:text-[32px] font-bold mb-8">
                  Get An <span className="text-[#00ADEE]">Appointment.</span>
                </h3>

                {success ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#15224D] mb-2">Request Sent!</h4>
                    <p className="text-gray-500">We will contact you shortly to confirm your slot.</p>
                    <button 
                      onClick={() => setSuccess(false)}
                      className="mt-6 text-[#00ADEE] font-bold hover:underline"
                    >
                      Book another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <input 
                        type="text" 
                        placeholder="First Name *" 
                        required
                        className="h-[60px] w-full px-6 bg-gray-50 border border-gray-100 rounded-2xl focus:border-[#00ADEE] outline-none transition-all placeholder:text-[#868E96]"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                      <input 
                        type="text" 
                        placeholder="Last Name" 
                        className="h-[60px] w-full px-6 bg-gray-50 border border-gray-100 rounded-2xl focus:border-[#00ADEE] outline-none transition-all placeholder:text-[#868E96]"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="h-[60px] w-full px-6 bg-gray-50 border border-gray-100 rounded-2xl focus:border-[#00ADEE] outline-none transition-all placeholder:text-[#868E96]"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                      <input 
                        type="tel" 
                        placeholder="Phone Number *" 
                        required
                        className="h-[60px] w-full px-6 bg-gray-50 border border-gray-100 rounded-2xl focus:border-[#00ADEE] outline-none transition-all placeholder:text-[#868E96]"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="relative">
                        <select 
                          className="h-[60px] w-full px-6 bg-gray-50 border border-gray-100 rounded-2xl focus:border-[#00ADEE] outline-none transition-all appearance-none text-[#15224D]"
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                        >
                          <option value="" disabled>Choose Services</option>
                          <option value="General Checkup">General Checkup</option>
                          <option value="Eye Surgery">Eye Surgery</option>
                          <option value="Vision Consultation">Vision Consultation</option>
                        </select>
                        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#868E96] pointer-events-none" />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative">
                          <input 
                            type="date" 
                            required
                            className="h-[60px] w-full px-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-[#00ADEE] outline-none transition-all placeholder:text-[#868E96] text-[#15224D] text-sm"
                            value={formData.date}
                            onChange={(e) => setFormData({...formData, date: e.target.value})}
                          />
                          <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#868E96] pointer-events-none hidden sm:block" />
                        </div>
                        <div className="relative">
                          <input 
                            type="time" 
                            required
                            className="h-[60px] w-full px-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-[#00ADEE] outline-none transition-all placeholder:text-[#868E96] text-[#15224D] text-sm"
                            value={formData.time}
                            onChange={(e) => setFormData({...formData, time: e.target.value})}
                          />
                          <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#868E96] pointer-events-none hidden sm:block" />
                        </div>
                      </div>
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm font-medium">{error}</p>
                    )}

                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full h-[65px] bg-[#00ADEE] text-white font-bold text-lg rounded-2xl hover:bg-[#15224D] transition-all duration-300 shadow-xl shadow-[#00ADEE]/20 mt-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : 'Submit Now'}
                    </button>
                  </form>
                )}
              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
