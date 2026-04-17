import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ChevronDown, Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react';
import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';
import { API_BASE_URL, getPublicHeaders } from '../utils/apiConfig';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    timeSlot: ''
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    service: false,
    date: false,
    timeSlot: false
  });
  
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [showSummaryError, setShowSummaryError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!formData.date) {
      setAvailableSlots([]);
      setFormData(prev => ({...prev, timeSlot: ''}));
      return;
    }

    const fetchSlots = async () => {
      setIsLoadingSlots(true);
      try {
        const resp = await fetch(`${API_BASE_URL}/public/schedule/info?date=${formData.date}`, {
          headers: getPublicHeaders()
        });
        const result = await resp.json();
        if(result.success) {
          const { openTime, closeTime, breakStart, breakEnd } = result.data.workingHours;
          const slots = [];
          
          let curr = parseInt(openTime.split(':')[0]);
          let end = parseInt(closeTime.split(':')[0]);
          let brkStart = parseInt(breakStart.split(':')[0]);
          let brkEnd = parseInt(breakEnd.split(':')[0]);

          for(let i = curr; i < end; i++) {
            if(i >= brkStart && i < brkEnd) continue; // skip break
            slots.push(`${i.toString().padStart(2, '0')}:00`);
            slots.push(`${i.toString().padStart(2, '0')}:30`);
          }
          setAvailableSlots(slots);
        }
      } catch (e) {
        console.error('Failed to fetch schedule', e);
      } finally {
        setIsLoadingSlots(false);
      }
    };

    fetchSlots();
  }, [formData.date]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check validation
    const newErrors = {
      firstName: formData.firstName.trim() === '',
      lastName: formData.lastName.trim() === '',
      email: formData.email.trim() === '',
      phone: formData.phone.trim() === '',
      service: formData.service.trim() === '',
      date: formData.date.trim() === '',
      timeSlot: formData.timeSlot.trim() === ''
    };
    
    setErrors(newErrors);
    
    const hasErrors = Object.values(newErrors).some(err => err);
    setShowSummaryError(hasErrors);
    
    if (hasErrors) return;

    setIsSubmitting(true);
    try {
      const patientName = `${formData.firstName} ${formData.lastName}`;
      const payload = {
        PatientName: patientName,
        PatientPhone: formData.phone,
        PatientEmail: formData.email,
        date: formData.date,
        arrivingTime: formData.timeSlot,
        notes: `Service: ${formData.service}`
      };

      const resp = await fetch(`${API_BASE_URL}/public/bookings`, {
        method: 'POST',
        headers: getPublicHeaders(),
        body: JSON.stringify(payload)
      });

      const result = await resp.json();
      if(result.success) {
        setBookingRef(result.data.bookingReference);
        setIsSuccess(true);
        // Reset form
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', service: '', date: '', timeSlot: ''
        });
        setAvailableSlots([]);
      } else {
        alert(result.message || 'Something went wrong');
      }
    } catch(e) {
      console.error(e);
      alert('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({...prev, [field]: value}));
    // Clear error for this field if user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({...prev, [field]: false}));
    }
  };

  return (
    <>
      <style>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          opacity: 0;
          cursor: pointer;
          position: absolute;
          right: 15px;
          height: 100%;
          width: 30px;
        }
      `}</style>
      <section className="bg-[#F8F9FA] py-[50px] md:py-[80px] lg:py-[120px]">
        <div className="container-padding max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-[30px] lg:gap-[60px]">
            
            {/* Left Side: Contact Information Wrapper */}
            <div className="w-full lg:w-[45%] xl:w-[50%] lg:sticky lg:top-[120px]">
              <AnimateOnScroll>
                {/* Tag */}
                <div className="flex items-center gap-[8px] mb-[15px]">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#00ADEE]" />
                  <span className="text-[#15224D] font-sans text-[15px] tracking-wide">Book An Appointment</span>
                </div>
                
                {/* Header */}
                <h2 className="text-[#15224D] font-sans text-[26px] sm:text-[38px] md:text-[48px] leading-[1.2] md:leading-[1.15] tracking-[-1px] md:tracking-[-1.5px] mb-[15px] md:mb-[25px]">
                  Create your Appointment<br className="hidden sm:block" /> for Expert Eye Care
                </h2>
                
                {/* Subtitle Paragraph */}
                <p className="text-[#424C6F] font-normal text-[14.5px] md:text-[15.5px] leading-[24px] md:leading-[26px] mb-[30px] max-w-[500px]">
                  Booking your eye care appointment is simple and convenient Experienced specialists are ready to provide personalized vision care, advanced treatments.
                </p>
                
                {/* Contact White Rounded Card */}
                <div className="bg-white rounded-[20px] p-[20px] sm:p-[30px] lg:p-[40px] shadow-[0_5px_30px_rgba(21,34,77,0.06)]">
                  
                  {/* Top Row: Call and Email */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                    {/* Box 1 - Call Us */}
                    <a href="tel:+123456789" className="flex items-center gap-[15px] group cursor-pointer w-full sm:w-max flex-1">
                      <div className="w-[45px] h-[45px] rounded-full bg-[#00ADEE] flex items-center justify-center shrink-0 group-hover:bg-[#15224D] transition-colors duration-300">
                        <Phone className="w-[20px] h-[20px] text-white transition-colors duration-300" />
                      </div>
                      <div className="flex flex-col overflow-hidden">
                        <span className="text-[#15224D] font-bold text-[17px] mb-[2px]">Call Us!</span>
                        <span className="text-[#424C6F] font-normal text-[14.5px] truncate sm:whitespace-normal">+(123) 456 789</span>
                      </div>
                    </a>
                    
                    {/* Vertical Divider (Horizontal on mobile) */}
                    <div className="w-full sm:w-px h-px sm:h-[55px] bg-gray-200/80 my-[20px] sm:my-0 sm:mx-[20px]" />
                    
                    {/* Box 2 - Email Us */}
                    <a href="mailto:info@domainname.com" className="flex items-center gap-[15px] group cursor-pointer w-full sm:w-max flex-1">
                      <div className="w-[45px] h-[45px] rounded-full bg-[#00ADEE] flex items-center justify-center shrink-0 group-hover:bg-[#15224D] transition-colors duration-300">
                        <Mail className="w-[20px] h-[20px] text-white transition-colors duration-300" />
                      </div>
                      <div className="flex flex-col overflow-hidden">
                        <span className="text-[#15224D] font-bold text-[17px] mb-[2px]">E-mail Us!</span>
                        <span className="text-[#424C6F] font-normal text-[14.5px] truncate sm:whitespace-normal">info@dominname.com</span>
                      </div>
                    </a>
                  </div>
                  
                  {/* Horizontal Divider line */}
                  <div className="w-full h-px bg-gray-200/80 my-[25px]" />
                  
                  {/* Bottom Row - Visit */}
                  <a href="#" className="flex items-center gap-[15px] group cursor-pointer w-full sm:w-max">
                    <div className="w-[45px] h-[45px] rounded-full bg-[#00ADEE] flex items-center justify-center shrink-0 group-hover:bg-[#15224D] transition-colors duration-300">
                      <MapPin className="w-[20px] h-[20px] text-white transition-colors duration-300" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#15224D] font-bold text-[17px] mb-[2px]">Visited Today!</span>
                      <span className="text-[#424C6F] font-normal text-[14.5px]">123 Vision Care Street, City Name, State, 005</span>
                    </div>
                  </a>

                </div>
              </AnimateOnScroll>
            </div>

            {/* Right Side: Form White Rounded Card */}
            <div className="w-full lg:w-[55%] xl:w-[50%] mt-[20px] lg:mt-0">
              <AnimateOnScroll delay={0.2}>
                <div className="bg-white rounded-[20px] p-[20px] sm:p-[30px] md:p-[50px] lg:p-[60px] shadow-[0_5px_40px_rgba(21,34,77,0.08)]">
                  <form className="space-y-[15px]" onSubmit={handleSubmit} noValidate>
                    
                    {/* Row 1: Names */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
                      <div>
                        <input 
                          type="text" 
                          placeholder="First Name*" 
                          value={formData.firstName}
                          onChange={(e) => handleChange('firstName', e.target.value)}
                          className={`w-full h-[58px] px-[20px] rounded-[10px] border ${errors.firstName ? 'border-[#ef4444]' : 'border-gray-200'} text-[#424C6F] font-sans outline-none placeholder-[#aaafc4] focus:border-[#00ADEE] transition-colors bg-white `}
                        />
                        {errors.firstName && <p className="text-[#ef4444] text-[13.5px] mt-[6px]">Please fill out this field.</p>}
                      </div>
                      <div>
                        <input 
                          type="text" 
                          placeholder="Last Name*" 
                          value={formData.lastName}
                          onChange={(e) => handleChange('lastName', e.target.value)}
                          className={`w-full h-[58px] px-[20px] rounded-[10px] border ${errors.lastName ? 'border-[#ef4444]' : 'border-gray-200'} text-[#424C6F] font-sans outline-none placeholder-[#aaafc4] focus:border-[#00ADEE] transition-colors bg-white `}
                        />
                        {errors.lastName && <p className="text-[#ef4444] text-[13.5px] mt-[6px]">Please fill out this field.</p>}
                      </div>
                    </div>
                    
                    {/* Row 2: Email */}
                    <div>
                      <input 
                        type="email" 
                        placeholder="E-mail Address*" 
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={`w-full h-[58px] px-[20px] rounded-[10px] border ${errors.email ? 'border-[#ef4444]' : 'border-gray-200'} text-[#424C6F] font-sans outline-none placeholder-[#aaafc4] focus:border-[#00ADEE] transition-colors bg-white `}
                      />
                      {errors.email && <p className="text-[#ef4444] text-[13.5px] mt-[6px]">Please fill out this field.</p>}
                    </div>
                    
                    {/* Row 3: Phone */}
                    <div>
                      <input 
                        type="tel" 
                        placeholder="Phone no. *" 
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={`w-full h-[58px] px-[20px] rounded-[10px] border ${errors.phone ? 'border-[#ef4444]' : 'border-gray-200'} text-[#424C6F] font-sans outline-none placeholder-[#aaafc4] focus:border-[#00ADEE] transition-colors bg-white `}
                      />
                      {errors.phone && <p className="text-[#ef4444] text-[13.5px] mt-[6px]">Please fill out this field.</p>}
                    </div>
                    
                    {/* Row 4: Service & Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
                      <div className="relative">
                        <select 
                          value={formData.service}
                          onChange={(e) => handleChange('service', e.target.value)}
                          className={`w-full h-[58px] px-[20px] rounded-[10px] border ${errors.service ? 'border-[#ef4444]' : 'border-gray-200'} text-[#424C6F] font-sans outline-none appearance-none ${!formData.service ? 'text-[#aaafc4]' : 'text-[#424C6F]'} focus:border-[#00ADEE] transition-colors bg-white `}
                        >
                          <option value="" disabled hidden>Select a Services</option>
                          <option value="Eye Examination">Eye Examination</option>
                          <option value="Ophthalmic Surgery">Ophthalmic Surgery</option>
                          <option value="Contact Lenses">Contact Lenses</option>
                          <option value="Pediatric Eye Care">Pediatric Eye Care</option>
                        </select>
                        <ChevronDown className="absolute right-[20px] top-[29px] -translate-y-1/2 w-[16px] h-[16px] text-[#aaafc4] pointer-events-none" />
                        {errors.service && <p className="text-[#ef4444] text-[13.5px] mt-[6px]">Please fill out this field.</p>}
                      </div>
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="mm/dd/yyyy"
                          onFocus={(e) => e.target.type = 'date'}
                          onBlur={(e) => {if(!e.target.value) e.target.type = 'text'}}
                          value={formData.date}
                          onChange={(e) => handleChange('date', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className={`w-full h-[58px] px-[20px] rounded-[10px] border ${errors.date ? 'border-[#ef4444]' : 'border-gray-200'} font-sans outline-none focus:border-[#00ADEE] transition-colors bg-white  ${!formData.date ? 'text-[#aaafc4]' : 'text-[#424C6F]'}`}
                        />
                        <CalendarIcon className="absolute right-[20px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#aaafc4] pointer-events-none" />
                        {errors.date && <p className="text-[#ef4444] text-[13.5px] mt-[6px]">Please select a date.</p>}
                      </div>
                    </div>

                    {/* Time Slots Area */}
                    {formData.date && (
                      <div className="pt-2 animate-in slide-in-from-top-2 duration-300">
                        <label className="block text-[#15224D] text-[15px] font-semibold mb-3">Select Time Slot</label>
                        {isLoadingSlots ? (
                          <div className="flex items-center justify-center h-[50px]">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-t-2 border-[#00ADEE]" />
                          </div>
                        ) : availableSlots.length > 0 ? (
                          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                            {availableSlots.map(slot => (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => {
                                  handleChange('timeSlot', slot);
                                  setErrors(prev => ({...prev, timeSlot: false}));
                                }}
                                className={`py-[8px] px-1 text-[14px] font-medium rounded-lg border transition-all duration-200 ${
                                  formData.timeSlot === slot 
                                    ? 'bg-[#00ADEE] text-white border-[#00ADEE] shadow-md scale-105' 
                                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#00ADEE] hover:text-[#00ADEE]'
                                }`}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <p className="text-[14px] text-gray-500 italic p-3 bg-gray-50 rounded-lg border border-gray-100">
                            No available slots for this date.
                          </p>
                        )}
                        {errors.timeSlot && <p className="text-[#ef4444] text-[13.5px] mt-[6px]">Please select a time slot.</p>}
                      </div>
                    )}
                    
                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-[58px] flex items-center justify-center bg-[#00ADEE] text-white font-bold text-[16.5px] rounded-[10px] hover:bg-[#15224D] transition-colors mt-[10px] disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                      ) : (
                        'Make An Appointment'
                      )}
                    </button>

                    {/* Summary Error */}
                    {showSummaryError && (
                      <div className="border border-[#ef4444] rounded-[30px] sm:rounded-full py-[12px] px-[20px] mt-[20px] bg-red-50 w-full text-center">
                        <span className="text-[#ef4444] text-[14px] font-medium leading-tight">One or more fields have an error. Please check and try again.</span>
                      </div>
                    )}

                  </form>
                </div>
              </AnimateOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* Success Modal Overlay */}
      {isSuccess && bookingRef && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#15224D]/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-[24px] p-8 max-w-[450px] w-full shadow-2xl relative animate-in zoom-in-95 duration-300">
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-50 mb-6 border-8 border-green-100/50">
              <CheckCircle2 className="h-10 w-10 text-green-500" />
            </div>
            
            <h3 className="text-[26px] font-bold text-center text-[#15224D] mb-3 tracking-tight">Booking Requested!</h3>
            <p className="text-center text-[#424C6F] text-[15px] leading-relaxed mb-8">
              Your appointment request has been successfully submitted. We will confirm it shortly via email.
            </p>
            
            <div className="bg-[#F8F9FA] border border-gray-100 rounded-[16px] p-5 mb-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#00ADEE]" />
              <p className="text-[13px] uppercase tracking-wider font-semibold text-gray-500 mb-2">Your Booking Reference</p>
              <p className="text-[22px] font-mono font-bold text-[#00ADEE] tracking-wide">{bookingRef}</p>
            </div>
            
            <button 
              onClick={() => setIsSuccess(false)}
              className="w-full h-[54px] bg-[#15224D] text-white font-bold text-[16px] rounded-[12px] hover:bg-[#00ADEE] hover:shadow-lg hover:shadow-[#00ADEE]/20 transition-all duration-300"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentForm;
