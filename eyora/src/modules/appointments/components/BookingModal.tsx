import React, { useState } from 'react';
import { X, Edit2, Calendar as CalendarIcon, Plus } from 'lucide-react';
import SlotCard from './SlotCard';
import { Calendar } from "@/modules/core/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/modules/core/components/ui/popover";
import { Button } from "@/modules/core/components/ui/button";
import { cn } from "@/modules/core/lib/utils";
import type { PatientFormData, PatientValidation } from '../types/Patient';
import type { PublicSlot } from '../types/slot';
import { formatDateDMY } from '../utils/dateUtils';
import { formatTime12Hour, isTimePassed } from '../utils/timeUtils';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedDate: Date;
    onDateChange: (date: Date) => void;
    slotCounts: { [date: string]: number };
    selectedSlot: PublicSlot | null;
    onSlotChange: (slot: PublicSlot) => void;
    availableSlots: PublicSlot[];
    PatientData: PatientFormData;
    onChange: (data: PatientFormData) => void;
    validation: PatientValidation;
    notes: string;
    onNotesChange: (notes: string) => void;
    onSubmit: () => void;
    loading?: boolean;
    error?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({
    isOpen,
    onClose,
    selectedDate,
    onDateChange,
    slotCounts,
    selectedSlot,
    onSlotChange,
    availableSlots,
    PatientData,
    onChange,
    validation,
    notes,
    onNotesChange,
    onSubmit,
    loading = false,
    error
}) => {
    const [isEditingTime, setIsEditingTime] = useState(false);
    const [datePopoverOpen, setDatePopoverOpen] = useState(false);

    if (!isOpen) return null;

    const handleChange = (field: keyof PatientFormData, value: string) => {
        onChange({
            ...PatientData,
            [field]: value
        });
    };

    const handleSlotSelect = (slot: PublicSlot) => {
        onSlotChange(slot);
        setIsEditingTime(false);
    };

    const handleDateSelect = (date: Date | undefined) => {
        if (date) {
            onDateChange(date);
            setDatePopoverOpen(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <>
            {/* Overlay */}
            <div className="booking-modal-overlay" onClick={onClose}></div>

            {/* Modal */}
            <div className="booking-modal">
                {/* Header with Date Switching */}
                <div className="booking-modal__header">
                    <div>
                        <h2 className="booking-modal__title">Book Appointment</h2>
                    </div>
                    
                    <div className="booking-modal__header-controls">
                        <Popover open={datePopoverOpen} onOpenChange={setDatePopoverOpen}>
                            <PopoverTrigger asChild>
                                <div className="booking-modal__date-wrapper booking-modal__date-wrapper--clickable">
                                    <p className="booking-modal__date">{formatDateDMY(selectedDate)}</p>
                                    <button 
                                        type="button"
                                        className="booking-modal__edit-date-btn"
                                        title="Change Date"
                                    >
                                        <CalendarIcon className="w-4 h-4" />
                                    </button>
                                </div>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 z-[1050]" align="end">
                                <Calendar
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={handleDateSelect}
                                    className="rounded-md border shadow"
                                    disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))}
                                />
                            </PopoverContent>
                        </Popover>

                        <button className="booking-modal__close-button" onClick={onClose} aria-label="Close">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="booking-modal__form">
                    {!selectedSlot && (
                        <div className="booking-modal__pick-slot-prompt">
                            <p>Please select an available time for {formatDateDMY(selectedDate)}</p>
                        </div>
                    )}
                    {/* Row 1: Full Name & Phone Number */}
                    <div className="booking-modal__row">
                        <div className="booking-modal__field">
                            <label className="booking-modal__label" htmlFor="modal-name">
                                Full Name <span className="booking-modal__required">*</span>
                            </label>
                            <input
                                type="text"
                                id="modal-name"
                                className={`booking-modal__input ${validation.errors.name ? 'booking-modal__input--error' : ''}`}
                                placeholder="Enter your full name"
                                value={PatientData.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                                disabled={loading}
                            />
                            {validation.errors.name && (
                                <span className="booking-modal__error">{validation.errors.name}</span>
                            )}
                        </div>

                        <div className="booking-modal__field">
                            <label className="booking-modal__label" htmlFor="modal-phone">
                                Phone Number <span className="booking-modal__required">*</span>
                            </label>
                            <input
                                type="tel"
                                id="modal-phone"
                                className={`booking-modal__input ${validation.errors.phone ? 'booking-modal__input--error' : ''}`}
                                placeholder="Enter 10-digit phone number"
                                value={PatientData.phone}
                                onChange={(e) => handleChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                                disabled={loading}
                            />
                            {validation.errors.phone && (
                                <span className="booking-modal__error">{validation.errors.phone}</span>
                            )}
                        </div>
                    </div>

                    {/* Row 2: Email & Time Display */}
                    <div className="booking-modal__row">
                        <div className="booking-modal__field">
                            <label className="booking-modal__label" htmlFor="modal-email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="modal-email"
                                className={`booking-modal__input ${validation.errors.email ? 'booking-modal__input--error' : ''}`}
                                placeholder="Enter your email (optional)"
                                value={PatientData.email || ''}
                                onChange={(e) => handleChange('email', e.target.value)}
                                disabled={loading}
                            />
                            {validation.errors.email && (
                                <span className="booking-modal__error">{validation.errors.email}</span>
                            )}
                        </div>

                        <div className="booking-modal__field">
                            <label className="booking-modal__label">Selected Time</label>
                            
                            {isEditingTime ? (
                                <>
                                    <div className="booking-modal__slots-picker">
                                        {availableSlots.filter(s => !isTimePassed(s.date, s.startTime)).length > 0 ? (
                                            availableSlots
                                                .filter(s => !isTimePassed(s.date, s.startTime))
                                                .map(slot => (
                                                    <SlotCard
                                                        key={slot._id}
                                                        slot={slot}
                                                        isSelected={selectedSlot?._id === slot._id}
                                                        onSelect={() => handleSlotSelect(slot)}
                                                    />
                                                ))
                                        ) : (
                                            <p className="booking-modal__no-slots">No other slots available</p>
                                        )}
                                    </div>
                                    <button 
                                        type="button" 
                                        className="booking-modal__cancel-edit"
                                        onClick={() => setIsEditingTime(false)}
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <div className="booking-modal__time-display">
                                    {selectedSlot ? (
                                        <>
                                            <span>{formatTime12Hour(selectedSlot.startTime)}</span>
                                            <button 
                                                type="button" 
                                                className="booking-modal__edit-time-inline"
                                                onClick={() => setIsEditingTime(true)}
                                            >
                                                <Edit2 className="w-4 h-4" />
                                                Edit
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-muted-foreground italic">Please select a slot</span>
                                            <button 
                                                type="button" 
                                                className="booking-modal__edit-time-inline"
                                                onClick={() => setIsEditingTime(true)}
                                            >
                                                <Plus className="w-4 h-4" />
                                                Select
                                            </button>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Row 3: Additional Notes (Full Width) */}
                    <div className="booking-modal__field booking-modal__field--full">
                        <label className="booking-modal__label" htmlFor="modal-notes">
                            Additional Notes
                        </label>
                        <textarea
                            id="modal-notes"
                            className="booking-modal__textarea"
                            placeholder="Any special requirements or notes..."
                            value={notes}
                            onChange={(e) => onNotesChange(e.target.value)}
                            rows={3}
                            disabled={loading}
                        />
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="booking-modal__error-message">
                            {error}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="booking-modal__submit"
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Request Appointment'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default BookingModal;
