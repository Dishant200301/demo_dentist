import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Loader2, Calendar as CalendarIcon, Clock, LogOut, User as UserIcon, ChevronRight } from 'lucide-react';
import { useWebAuth } from '@/modules/auth/context/WebAuthContext';
import { API_BASE_URL, getPublicHeaders } from '@/modules/appointments/utils/apiConfig';

const PatientDashboard = () => {
  const { user, logout, loading: authLoading } = useWebAuth();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState('appointments');
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Profile Form state
  const [profileData, setProfileData] = useState({
    name: '',
    phone: '',
    address: '',
    dateOfBirth: '',
    gender: ''
  });
  const [savingProfile, setSavingProfile] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch Profile
        const profileResp = await fetch(`${API_BASE_URL}/web-auth/me`, {
          headers: getPublicHeaders()
        });
        const profileResult = await profileResp.json();
        
        if(profileResult.success) {
          const profile = profileResult.data;
          setProfileData({
            name: profile.name || '',
            phone: profile.phone || '',
            address: profile.address || '',
            dateOfBirth: profile.dateOfBirth || '',
            gender: profile.gender || ''
          });
        }

        // Fetch Bookings
        const bookingsResp = await fetch(`${API_BASE_URL}/public/bookings/my-bookings`, {
          headers: getPublicHeaders()
        });
        const bookingsResult = await bookingsResp.json();
        if(bookingsResult.success) {
          setBookings(bookingsResult.data);
        }
      } catch (e) {
        console.error('Error fetching dashboard data', e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const handleProfileSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingProfile(true);
    try {
      await fetch(`${API_BASE_URL}/web-auth/profile`, {
        method: 'PUT',
        headers: getPublicHeaders(),
        body: JSON.stringify(profileData)
      });
      alert('Profile updated successfully!');
    } catch(e) {
      alert('Error updating profile');
    } finally {
      setSavingProfile(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center bg-[#F8F9FA]">
        <Loader2 className="w-10 h-10 animate-spin text-[#00ADEE]" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>My Dashboard - Eyora Eye Care</title>
      </Helmet>
      
      <div className="min-h-screen bg-[#F8F9FA] pt-28 md:pt-[160px] pb-20">
        <div className="container-padding max-w-[1200px] mx-auto">
          
          {/* Header */}
          <div className="bg-[#15224D] rounded-3xl p-6 md:p-10 mb-8 text-white flex flex-col md:flex-row items-center justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-6 md:mb-0 text-center md:text-left w-full md:w-auto">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center border border-white/20 shrink-0">
                <UserIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div className="w-full md:w-auto overflow-hidden">
                <h1 className="text-xl md:text-3xl font-bold mb-1 leading-tight">Hello, {user?.name}</h1>
                <p className="text-[#00ADEE] font-medium text-sm md:text-base break-all px-2 md:px-0">{user?.email}</p>
              </div>
            </div>
            
            <button 
              onClick={handleLogout}
              className="relative z-10 flex items-center gap-2 bg-white/10 hover:bg-red-500/80 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-xl transition-colors backdrop-blur-sm border border-white/10 hover:border-red-500/50 text-sm md:text-base shrink-0"
            >
              <LogOut className="w-4 h-4 md:w-5 md:h-5" /> Logout
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-[280px] shrink-0">
              <div className="bg-white rounded-2xl p-4 shadow-[0_5px_40px_rgba(21,34,77,0.05)] sticky top-32">
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab('appointments')}
                    className={`w-full text-left px-5 py-4 rounded-xl font-medium transition-all duration-200 flex items-center gap-3 ${activeTab === 'appointments' ? 'bg-[#00ADEE]/10 text-[#00ADEE]' : 'text-[#424C6F] hover:bg-gray-50'}`}
                  >
                    <CalendarIcon className="w-5 h-5" /> My Appointments
                  </button>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full text-left px-5 py-4 rounded-xl font-medium transition-all duration-200 flex items-center gap-3 ${activeTab === 'profile' ? 'bg-[#00ADEE]/10 text-[#00ADEE]' : 'text-[#424C6F] hover:bg-gray-50'}`}
                  >
                    <UserIcon className="w-5 h-5" /> Profile Settings
                  </button>
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1">
              {activeTab === 'appointments' && (
                <div className="bg-white rounded-2xl shadow-[0_5px_40px_rgba(21,34,77,0.05)] p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4">
                  <h2 className="text-2xl font-bold text-[#15224D] mb-6">Appointment History</h2>
                  
                  {bookings.length === 0 ? (
                    <div className="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                      <CalendarIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-500 mb-4">You have no appointments yet.</p>
                      <button 
                        onClick={() => navigate('/appointment')}
                        className="text-[#00ADEE] font-medium hover:underline"
                      >
                        Book an appointment
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {bookings.map((booking: any) => (
                        <div key={booking._id} className="border border-gray-100 rounded-xl p-5 hover:border-[#00ADEE]/30 transition-colors bg-gray-50/50">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                                  ${booking.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                                    booking.status === 'approved' ? 'bg-green-100 text-green-700' :
                                    booking.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                                    'bg-blue-100 text-blue-700'
                                  }
                                `}>
                                  {booking.status}
                                </span>
                                <span className="text-xs text-gray-400 font-mono">Ref: {booking.bookingReference}</span>
                              </div>
                              <h3 className="font-bold text-[#15224D]">{booking.notes || 'General Checkup'}</h3>
                            </div>
                            
                            <div className="flex items-center gap-6 text-sm text-[#424C6F]">
                              <div className="flex items-center gap-2">
                                <CalendarIcon className="w-4 h-4 text-[#00ADEE]" /> 
                                {booking.date}
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#00ADEE]" /> 
                                {booking.arrivingTime}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'profile' && (
                <div className="bg-white rounded-2xl shadow-[0_5px_40px_rgba(21,34,77,0.05)] p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4">
                  <h2 className="text-2xl font-bold text-[#15224D] mb-6">Profile Settings</h2>
                  
                  <form onSubmit={handleProfileSave} className="space-y-5 max-w-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-gray-500 mb-1 block">Full Name</label>
                        <input 
                          type="text" 
                          value={profileData.name}
                          onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                          className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#00ADEE] outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500 mb-1 block">Phone Number</label>
                        <input 
                          type="text" 
                          value={profileData.phone}
                          onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                          className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#00ADEE] outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500 mb-1 block">Date of Birth</label>
                        <input 
                          type="date" 
                          value={profileData.dateOfBirth}
                          onChange={(e) => setProfileData({...profileData, dateOfBirth: e.target.value})}
                          className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#00ADEE] outline-none transition-all"
                        />
                      </div>
                      <div className="relative">
                        <label className="text-sm font-medium text-gray-500 mb-1 block">Gender</label>
                        <div className="relative">
                          <select 
                            value={profileData.gender}
                            onChange={(e) => setProfileData({...profileData, gender: e.target.value})}
                            className="w-full h-12 px-4 pr-10 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#00ADEE] outline-none transition-all appearance-none cursor-pointer text-[#15224D]"
                          >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                          </select>
                          <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none rotate-90" />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-sm font-medium text-gray-500 mb-1 block">Address</label>
                        <input 
                          type="text" 
                          value={profileData.address}
                          onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                          className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#00ADEE] outline-none transition-all"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={savingProfile}
                      className="h-12 px-8 bg-[#15224D] text-white font-bold rounded-xl hover:bg-[#00ADEE] transition-colors disabled:opacity-70 mt-4 flex items-center gap-2"
                    >
                      {savingProfile ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Save Changes'}
                    </button>
                  </form>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default PatientDashboard;
