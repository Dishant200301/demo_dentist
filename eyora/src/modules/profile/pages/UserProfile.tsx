import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader2, User, Calendar, Mail, Phone, X, ArrowRight } from 'lucide-react';
import { publicBookingService } from '@/modules/appointments/services/bookingService';
import { useWebAuth } from '../../auth/context/WebAuthContext';
import { useToast } from '../../core/hooks/use-toast';
import { formatTime12Hour } from '@/modules/appointments/utils/timeUtils';
import { Button } from '@/modules/core/components/ui/button';

const formatDateDMY = (dateStr: string) => {
  const d = new Date(dateStr);
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
};

// ── Appointments Tab ──────────────────────────────────────────────────────────
const AppointmentsTab = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState<any | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  useEffect(() => {
    fetchMyBookings();
  }, []);

  const fetchMyBookings = async () => {
    try {
      setLoading(true);
      const response = await publicBookingService.getMyBookings();
      setBookings(response.data);
    } catch (error: any) {
      toast({ title: 'Error', description: error.message || 'Failed to fetch bookings', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-[#00ADEE]" />
        <p className="text-gray-500 font-medium">Loading your appointments...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              {['Reference', 'Date', 'Schedule', 'Status', 'Action'].map((h, i) => (
                <th
                  key={h}
                  className={`py-4 px-4 text-[11px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap border-b border-slate-200 ${i !== 4 ? 'border-r' : ''}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan={5}>
                  <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 400px)' }}>
                    <p className="text-sm font-medium text-slate-400">No appointments yet</p>
                  </div>
                </td>
              </tr>
            ) : (
              bookings.map((booking) => {
                const requestedTime = booking.arrivingTime;
                const approvedTime = booking.startTime;
                const hasTimeShift = approvedTime && requestedTime && approvedTime !== requestedTime;

                return (
                  <tr key={booking._id} className="hover:bg-slate-50/30 transition-colors">
                    <td className="border-b border-r border-slate-200 py-3 px-4">
                      <span className="text-sm font-medium text-slate-900 tracking-tighter">
                        #{booking.bookingReference || booking._id.slice(-6).toUpperCase()}
                      </span>
                    </td>
                    <td className="border-b border-r border-slate-200 py-3 px-4">
                      <span className="text-base font-medium text-slate-900 tracking-tighter">
                        {formatDateDMY(booking.date)}
                      </span>
                    </td>
                    <td className="border-b border-r border-slate-200 py-3 px-4">
                      <div className="flex flex-col gap-0.5 justify-center min-h-[36px]">
                        {hasTimeShift ? (
                          <>
                            <span className="text-xs font-bold text-slate-400 line-through tracking-tighter">Req: {formatTime12Hour(requestedTime)}</span>
                            <span className="text-base font-medium text-[#00ADEE] tracking-tighter">App: {formatTime12Hour(approvedTime)}</span>
                          </>
                        ) : (
                          <span className="text-base font-medium text-slate-900 tracking-tighter">
                            {formatTime12Hour(approvedTime || requestedTime || 'TBD')}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="border-b border-r border-slate-200 py-3 px-4 text-center">
                      <span className={`inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-sm ${booking.status === 'pending' ? 'bg-yellow-400' :
                          booking.status === 'booked' || booking.status === 'approved' ? 'bg-[#00ADEE]' :
                            booking.status === 'rejected' ? 'bg-red-500' : 'bg-slate-400'
                        }`}>
                        {booking.status === 'booked' || booking.status === 'approved' ? 'Confirmed' : booking.status}
                      </span>
                    </td>
                    <td className="border-b border-slate-200 py-3 px-4 text-center">
                      <Button
                        onClick={() => { setSelectedBooking(booking); setIsDetailModalOpen(true); }}
                        className="bg-[#00ADEE] hover:bg-[#15224D] text-white w-9 h-9 p-0 rounded-xl inline-flex items-center justify-center transition-all mx-auto shadow-sm"
                      >
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                        </svg>
                      </Button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Detail Modal */}
      {isDetailModalOpen && selectedBooking && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsDetailModalOpen(false)} />
          <div className="bg-white rounded-[40px] w-full max-w-lg p-8 relative z-10 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center mb-8 pb-5 border-b border-slate-100">
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter font-mono">
                #{selectedBooking.bookingReference || selectedBooking._id.slice(-6).toUpperCase()}
              </h2>
              <div className="flex items-center gap-4">
                <span className={`px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-sm ${selectedBooking.status === 'pending' ? 'bg-yellow-400' :
                    selectedBooking.status === 'booked' || selectedBooking.status === 'approved' ? 'bg-[#00ADEE]' :
                      selectedBooking.status === 'rejected' ? 'bg-red-500' : 'bg-slate-400'
                  }`}>
                  {selectedBooking.status === 'booked' || selectedBooking.status === 'approved' ? 'Confirmed' : selectedBooking.status}
                </span>
                <button onClick={() => setIsDetailModalOpen(false)} className="bg-slate-400 hover:bg-slate-500 text-white p-2 rounded-full transition-all shadow-md flex items-center justify-center h-9 w-9">
                  <X className="w-5 h-5 stroke-[3.5]" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-7">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-[14px] font-bold text-slate-400 tracking-tight">Appointment date</span>
                  <span className="text-[22px] font-black text-slate-900 tracking-tighter">{formatDateDMY(selectedBooking.date)}</span>
                </div>
                <div className="flex flex-col gap-2 text-right">
                  <span className="text-[14px] font-bold text-slate-400 tracking-tight">Clinical profile</span>
                  <span className="text-[22px] font-black text-slate-900 tracking-tighter truncate pl-6">
                    {selectedBooking.profileId?.name || 'General Clinic'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-[14px] font-bold text-slate-400 tracking-tight">Request time</span>
                  <span className="text-[22px] font-black text-slate-900 tracking-tighter">
                    {selectedBooking.arrivingTime ? formatTime12Hour(selectedBooking.arrivingTime) : 'TBD'}
                  </span>
                </div>
                <div className="flex flex-col gap-2 text-right">
                  <span className="text-[14px] font-bold text-slate-400 tracking-tight">Approved time</span>
                  <span className="text-[22px] font-black text-slate-900 tracking-tighter">
                    {selectedBooking.status === 'booked' || selectedBooking.status === 'approved'
                      ? (selectedBooking.startTime ? formatTime12Hour(selectedBooking.startTime) : 'N/A')
                      : 'Pending'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-[14px] font-bold text-slate-400 tracking-tight">Requested on</span>
                  <span className="text-base font-black text-slate-600 italic">
                    {new Date(selectedBooking.createdAt).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}
                  </span>
                </div>
                <div className="flex flex-col gap-2 text-right">
                  <span className="text-[14px] font-bold text-slate-400 tracking-tight">Activity by admin on</span>
                  <span className="text-base font-black text-slate-600 italic">
                    {selectedBooking.status !== 'pending'
                      ? new Date(selectedBooking.approvedAt || selectedBooking.rejectedAt || selectedBooking.updatedAt).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })
                      : 'Awaiting action'}
                  </span>
                </div>
              </div>

              <div className="px-6 py-5 bg-slate-50/50 rounded-2xl border border-slate-100 italic text-slate-700 text-lg leading-relaxed shadow-inner">
                {selectedBooking.notes ? `"${selectedBooking.notes}"` : 'No additional instructions entered.'}
              </div>

              {selectedBooking.status === 'rejected' && (
                <div className="px-6 py-5 bg-red-50 rounded-2xl border border-red-100 shadow-sm">
                  <span className="text-xs font-black text-red-500 uppercase tracking-widest block mb-1.5 pl-1">Rejection reason</span>
                  <p className="text-lg font-black text-red-700 leading-tight">{selectedBooking.rejectionReason || 'Unavailable for this slot.'}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── My Profile Tab ────────────────────────────────────────────────────────────
const ProfileTab = ({ user }: { user: any }) => (
  <div className="max-w-xl">
    <div className="flex flex-col gap-5">
      {/* Avatar */}
      <div className="flex items-center gap-5">
        <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-[#00ADEE] font-black text-3xl shadow-sm border border-[#00ADEE]/10">
          {user.name?.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="text-2xl font-black text-slate-900 tracking-tight">{user.name}</p>
        </div>
      </div>

      {/* Info Fields */}
      <div className="mt-4 flex flex-col gap-4">
        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-10 h-10 bg-[#00ADEE]/10 rounded-xl flex items-center justify-center">
            <User className="w-5 h-5 text-[#00ADEE]" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">Full Name</p>
            <p className="text-base font-bold text-slate-800">{user.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-10 h-10 bg-[#00ADEE]/10 rounded-xl flex items-center justify-center">
            <Mail className="w-5 h-5 text-[#00ADEE]" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">Email Address</p>
            <p className="text-base font-bold text-slate-800">{user.email}</p>
          </div>
        </div>

        {user.phone && (
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-10 h-10 bg-[#00ADEE]/10 rounded-xl flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#00ADEE]" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">Phone Number</p>
              <p className="text-base font-bold text-slate-800">{user.phone}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

// ── Main UserProfile Page ────────────────────────────────────────────────────
const UserProfile = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { user, loading: authLoading } = useWebAuth();

  const activeTab = (searchParams.get('tab') || 'profile') as 'profile' | 'appointments';

  const setTab = (tab: 'profile' | 'appointments') => {
    setSearchParams({ tab });
  };

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
    }
  }, [user, authLoading]);

  if (authLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-[#00ADEE]" />
        <p className="text-gray-500 font-medium">Loading profile...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="lg:mt-10 w-[92%] max-w-4xl lg:max-w-7xl mx-auto">

        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Account</h1>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            {[
              { key: 'profile', label: 'My Profile' },
              { key: 'appointments', label: 'Appointments' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key as any)}
                className={`
                  flex items-center py-4 text-sm md:text-base font-bold border-b-2 transition-all mr-8 sm:mr-10 md:mr-12 -mb-px whitespace-nowrap
                  ${activeTab === key
                    ? 'border-gray-900 text-gray-900 dark:border-white dark:text-white'
                    : 'border-transparent text-slate-400'
                  }
                `}
              >
                {label}
              </button>
            ))}
          </div>

          {activeTab === 'appointments' && (
            <button
              onClick={() => navigate('/appointments')}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#00ADEE] hover:bg-[#15224D] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 whitespace-nowrap"
            >
              Book Appointment <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'profile' && <ProfileTab user={user} />}
          {activeTab === 'appointments' && <AppointmentsTab />}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
