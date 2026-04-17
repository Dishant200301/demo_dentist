// AppointmentsPage - Main booking page (COMMON across all client websites)
import React, { useState } from 'react';
import { useSlots } from '../hooks/useSlots';
import { useBooking } from '../hooks/useBooking';
import DateSelector from '../components/DateSelector';
import TimeSlotGrid from '../components/TimeSlotGrid';
import BookingModal from '../components/BookingModal';
import { formatDateFull } from '../utils/dateUtils';
import { isTimePassed } from '../utils/timeUtils';
import { useWebAuth } from '@/modules/auth/context/WebAuthContext';
import { useNavigate } from 'react-router-dom';
import './AppointmentsPage.css';
import '../components/BookingModal.css';
import PageBanner from '@/modules/core/components/PageBanner';
import AppointmentSection from '@/modules/core/components/AppointmentSection';
import ExpertiseSection from '@/modules/services/components/ExpertiseSection';
import TrustedCareSection from '@/modules/core/components/TrustedCareSection';
import ServiceFAQSection from '@/modules/core/components/ServiceFAQSection';
import ServiceTestimonials from '@/modules/core/components/ServiceTestimonials';

const AppointmentsPage: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useWebAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Hooks
    const {
        slots,
        loading: slotsLoading,
        selectedDate,
        setSelectedDate,
        slotsByDate
    } = useSlots();

    const {
        PatientData,
        setPatientData,
        selectedSlot,
        setSelectedSlot,
        notes,
        setNotes,
        validation,
        loading: bookingLoading,
        error,
        bookingResponse,
        submitBooking,
    } = useBooking();

    // Calculate slot counts for date selector (excluding passed slots)
    const slotCounts: { [date: string]: number } = {};
    Object.entries(slotsByDate).forEach(([date, dateSlots]) => {
        // @ts-ignore - Handle typed slots
        slotCounts[date] = dateSlots.filter((s: any) =>
            s.status === 'active' && !isTimePassed(s.date, s.startTime)
        ).length;
    });

    // Handle slot selection - Open modal
    const handleSlotSelect = (slot: typeof selectedSlot | any) => {
        if (!user) {
            navigate('/login');
            return;
        }
        setSelectedSlot(slot);
        setIsModalOpen(true);
    };

    // Handle modal close
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    // Handle booking submission
    const handleSubmit = async () => {
        const bookingData = await submitBooking();
        if (bookingData) {
            setIsModalOpen(false);
            // Navigate to standalone success page with direct data
            navigate('/appointment/success', {
                state: {
                    booking: bookingData
                }
            });
        }
    };

    return (
        <div className="pt-0 relative overflow-hidden">
            <PageBanner title="Book an Appointment" breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Book Appointment' }]} />

            <main className="appointments-page__content">
                {/* Date Selector and Time Slots - Combined */}
                <section className="appointments-page__section">
                    <h2 className="appointments-page__section-title font-playfair text-xl sm:text-xl md:text-xl lg:text-2xl font-bold leading-[1.1] tracking-tight text-[#1E2024] max-w-3xl text-center mx-auto">
                        Select Date
                    </h2>
                    <DateSelector
                        selectedDate={selectedDate}
                        onSelectDate={setSelectedDate}
                        slotCounts={slotCounts}
                    />

                    <div className="appointments-page__divider"></div>

                    <TimeSlotGrid
                        slots={slots}
                        selectedSlot={selectedSlot}
                        onSelectSlot={handleSlotSelect}
                        loading={slotsLoading}
                    />
                </section>

                {/* Booking Modal */}
                <BookingModal
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    selectedDate={selectedDate}
                    onDateChange={(date) => {
                        setSelectedDate(date);
                        setSelectedSlot(null);
                    }}
                    slotCounts={slotCounts}
                    selectedSlot={selectedSlot}
                    onSlotChange={setSelectedSlot}
                    availableSlots={slots} // Current date slots
                    PatientData={PatientData}
                    onChange={setPatientData}
                    validation={validation}
                    notes={notes}
                    onNotesChange={setNotes}
                    onSubmit={handleSubmit}
                    loading={bookingLoading}
                    error={error}
                />

        
                <ExpertiseSection />
                <TrustedCareSection />
                <ServiceFAQSection />
                <ServiceTestimonials />
            </main>
        </div>
    );
};

export default AppointmentsPage;
