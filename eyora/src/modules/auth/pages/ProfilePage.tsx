import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useWebAuth } from '../context/WebAuthContext';
import { API_BASE_URL, getPublicHeaders } from '@/modules/appointments/utils/apiConfig';
import { User, Calendar, Mail, Phone, ChevronRight, Loader2, Clock, History } from 'lucide-react';
import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';

const ProfilePage = () => {
  const { user } = useWebAuth();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Profile
        const profResp = await fetch(`${API_BASE_URL}/web-auth/me`, {
          headers: getPublicHeaders()
        });
        const profData = await profResp.json();
        if (profData.success) {
          setProfile(profData.data);
        }

        // Fetch Appointments
        const resp = await fetch(`${API_BASE_URL}/public/bookings/my-bookings`, {
          headers: getPublicHeaders()
        });
        const data = await resp.json();
        if (data.success) {
          setAppointments(data.data);
        }
      } catch (e) {
        console.error('Error fetching data', e);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  const displayUser = profile || user;

  if (!user) return null;

  return (
    <>
      <Helmet>
        <title>My Profile - Eyora Eye Care</title>
      </Helmet>

      <div className="min-h-screen bg-[#F8F9FA] pt-28 md:pt-[160px] pb-20">
        <div className="container-padding max-w-[1400px] mx-auto px-4 md:px-6">
          
          <AnimateOnScroll>
            <div className="bg-white rounded-[24px] shadow-[0_10px_40px_rgba(21,34,77,0.06)] overflow-hidden mb-8 md:mb-10">
              <div className="bg-[#15224D] px-6 py-10 md:px-12 md:py-14 relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00ADEE]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#00ADEE] flex items-center justify-center text-3xl md:text-4xl font-bold border-4 border-white/10 shrink-0">
                    {(displayUser.name || 'U').charAt(0).toUpperCase()}
                  </div>
                  <div className="w-full">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-3">{displayUser.name}</h1>
                    <div className="flex flex-col md:flex-row items-center md:items-start flex-wrap justify-center md:justify-start gap-3 md:gap-6 text-[#CED4DA]">
                      <div className="flex items-center gap-2 text-sm md:text-base break-all">
                        <Mail className="w-4 h-4 text-[#00ADEE] shrink-0" /> {displayUser.email}
                      </div>
                      {displayUser.phone && (
                        <div className="flex items-center gap-2 text-sm md:text-base">
                          <Phone className="w-4 h-4 text-[#00ADEE] shrink-0" /> {displayUser.phone}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Account Info */}
            <AnimateOnScroll delay={0.1} className="lg:col-span-1">
              <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-[0_5px_25px_rgba(21,34,77,0.04)] h-full">
                <h2 className="text-lg md:text-xl font-bold text-[#15224D] mb-6 flex items-center gap-3">
                  <User className="w-5 h-5 text-[#00ADEE]" /> Account Details
                </h2>
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] md:text-sm text-[#868E96] block mb-1 uppercase font-bold tracking-wider">Full Name</span>
                    <p className="text-[#15224D] font-medium break-words">{displayUser.name}</p>
                  </div>
                  <div>
                    <span className="text-[11px] md:text-sm text-[#868E96] block mb-1 uppercase font-bold tracking-wider">Email Address</span>
                    <p className="text-[#15224D] font-medium break-all">{displayUser.email}</p>
                  </div>
                  <div>
                    <span className="text-[11px] md:text-sm text-[#868E96] block mb-1 uppercase font-bold tracking-wider">Phone Number</span>
                    <p className="text-[#15224D] font-medium">{displayUser.phone || 'Not provided'}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Booking History */}
            <AnimateOnScroll delay={0.2} className="lg:col-span-2">
              <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-[0_5px_25px_rgba(21,34,77,0.04)] h-full">
                <h2 className="text-lg md:text-xl font-bold text-[#15224D] mb-6 flex items-center gap-3">
                  <History className="w-5 h-5 text-[#00ADEE]" /> Appointment History
                </h2>

                {loading ? (
                  <div className="flex items-center justify-center py-20">
                    <Loader2 className="w-8 h-8 animate-spin text-[#00ADEE]" />
                  </div>
                ) : appointments.length === 0 ? (
                  <div className="text-center py-20 bg-gray-50 rounded-[16px] border border-dashed border-gray-200">
                    <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-[#424C6F]">You haven't booked any appointments yet.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {appointments.map((apt) => (
                      <div key={apt._id} className="group p-5 md:p-6 rounded-[20px] border border-gray-100 hover:border-[#00ADEE] hover:bg-[#00ADEE]/5 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                          <div className="flex items-start md:items-center gap-4">
                            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0 mt-1 md:mt-0 ${apt.status === 'confirmed' ? 'bg-green-100 text-green-600' : apt.status === 'pending' ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-600'}`}>
                              <Clock className="w-6 h-6 md:w-7 md:h-7" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-[#15224D] font-bold text-sm md:text-base truncate mb-2 md:mb-1" title={apt.bookingReference}>
                                Ref: {apt.bookingReference}
                              </p>
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] md:text-sm text-[#424C6F]">
                                <span className="flex items-center gap-1.5 shrink-0"><Calendar className="w-3.5 h-3.5" /> {new Date(apt.date).toLocaleDateString()}</span>
                                <span className="flex items-center gap-1.5 shrink-0"><Clock className="w-3.5 h-3.5" /> {apt.arrivingTime}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between sm:justify-end gap-3 md:gap-6 pt-4 sm:pt-0 border-t sm:border-t-0 border-gray-50">
                            <span className={`px-4 py-1.5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-wider ${apt.status === 'confirmed' ? 'bg-green-100 text-green-700' : apt.status === 'pending' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'}`}>
                              {apt.status}
                            </span>
                            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#00ADEE] transition-colors hidden md:block" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProfilePage };
