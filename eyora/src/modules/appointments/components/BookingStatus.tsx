// BookingStatus Component - Check booking status by reference
import React, { useState } from 'react';
import type { BookingResponse } from '../types/booking';
import { formatTime12Hour } from '../utils/timeUtils';
import { formatDateFull } from '../utils/dateUtils';

interface BookingStatusProps {
    onCheckStatus: (reference: string, phone: string) => Promise<BookingResponse | null>;
    onCancelBooking: (reference: string, phone: string) => Promise<boolean>;
    loading: boolean;
}

const BookingStatus: React.FC<BookingStatusProps> = ({
    onCheckStatus,
    onCancelBooking,
    loading
}) => {
    const [reference, setReference] = useState('');
    const [phone, setPhone] = useState('');
    const [booking, setBooking] = useState<BookingResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [showCancelConfirm, setShowCancelConfirm] = useState(false);

    const handleCheck = async () => {
        if (!reference.trim() || !phone.trim()) {
            setError('Please enter both reference number and phone number');
            return;
        }

        setError(null);
        const result = await onCheckStatus(reference.trim(), phone.trim());

        if (result) {
            setBooking(result);
        } else {
            setError('Booking not found. Please check your reference number and phone.');
        }
    };

    const handleCancel = async () => {
        const success = await onCancelBooking(reference.trim(), phone.trim());
        if (success) {
            setBooking(null);
            setShowCancelConfirm(false);
            setReference('');
            setPhone('');
            setError('Booking cancelled successfully');
        }
    };

    const getStatusBadge = (status: string) => {
        const statusConfig: { [key: string]: { label: string; className: string } } = {
            pending: { label: '⏳ Pending', className: 'booking-status__badge--pending' },
            approved: { label: '✅ Approved', className: 'booking-status__badge--approved' },
            rejected: { label: '❌ Rejected', className: 'booking-status__badge--rejected' },
            cancelled: { label: '🚫 Cancelled', className: 'booking-status__badge--cancelled' }
        };

        const config = statusConfig[status] || statusConfig.pending;
        return (
            <span className={`booking-status__badge ${config.className}`}>
                {config.label}
            </span>
        );
    };

    return (
        <div className="booking-status">
            <h3 className="booking-status__title">Check Booking Status</h3>

            {!booking ? (
                <div className="booking-status__form">
                    <div className="booking-status__field">
                        <label className="booking-status__label">Reference Number</label>
                        <input
                            type="text"
                            className="booking-status__input"
                            placeholder="Enter your booking reference"
                            value={reference}
                            onChange={(e) => setReference(e.target.value.toUpperCase())}
                        />
                    </div>

                    <div className="booking-status__field">
                        <label className="booking-status__label">Phone Number</label>
                        <input
                            type="tel"
                            className="booking-status__input"
                            placeholder="Enter registered phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        />
                    </div>

                    {error && (
                        <div className="booking-status__error">{error}</div>
                    )}

                    <button
                        className="booking-status__button"
                        onClick={handleCheck}
                        disabled={loading}
                    >
                        {loading ? 'Checking...' : 'Check Status'}
                    </button>
                </div>
            ) : (
                <div className="booking-status__result">
                    <div className="booking-status__header">
                        <span className="booking-status__reference">{booking.bookingReference}</span>
                        {getStatusBadge(booking.status)}
                    </div>

                    <div className="booking-status__details">
                        <div className="booking-status__row">
                            <span>📅 Date:</span>
                            <span>{formatDateFull(booking.slot.date)}</span>
                        </div>
                        <div className="booking-status__row">
                            <span>⏰ Time:</span>
                            <span>{formatTime12Hour(booking.slot.startTime)}</span>
                        </div>
                        <div className="booking-status__row">
                            <span>👤 Name:</span>
                            <span>{booking.Patient.name}</span>
                        </div>
                    </div>

                    {booking.message && (
                        <div className="booking-status__message">
                            <strong>Message:</strong> {booking.message}
                        </div>
                    )}

                    <div className="booking-status__actions">
                        <button
                            className="booking-status__button booking-status__button--secondary"
                            onClick={() => setBooking(null)}
                        >
                            Check Another
                        </button>

                        {booking.status === 'pending' && !showCancelConfirm && (
                            <button
                                className="booking-status__button booking-status__button--danger"
                                onClick={() => setShowCancelConfirm(true)}
                            >
                                Cancel Booking
                            </button>
                        )}
                    </div>

                    {showCancelConfirm && (
                        <div className="booking-status__cancel-confirm">
                            <p>Are you sure you want to cancel this booking?</p>
                            <div className="booking-status__cancel-actions">
                                <button
                                    className="booking-status__button booking-status__button--danger"
                                    onClick={handleCancel}
                                    disabled={loading}
                                >
                                    {loading ? 'Cancelling...' : 'Yes, Cancel'}
                                </button>
                                <button
                                    className="booking-status__button booking-status__button--secondary"
                                    onClick={() => setShowCancelConfirm(false)}
                                >
                                    No, Keep It
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default BookingStatus;
