// BookingConfirmation Component - Shows a modern, premium confirmation dashboard
import React, { useState } from 'react';
import { 
    CheckCircle2, 
    Calendar, 
    Clock, 
    User, 
    Phone, 
    Copy,
    Check,
    ArrowRight,
    MapPin
} from 'lucide-react';
import type { BookingResponse } from '../types/booking';
import { formatTime12Hour } from '../utils/timeUtils';
import { formatDateFull } from '../utils/dateUtils';
import './BookingConfirmation.css';

interface BookingConfirmationProps {
    booking: BookingResponse;
    onBookAnother: () => void;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
    booking,
    onBookAnother
}) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        const ref = booking.bookingReference || booking.bookingId || '';
        navigator.clipboard.writeText(ref);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const bookingId = booking.bookingReference || booking.bookingId || booking._id?.slice(-8).toUpperCase();

    return (
        <div className="booking-confirmation-dashboard">
            <div className="booking-confirmation-dashboard__card">
                {/* Left Side: Success Hero */}
                <div className="booking-confirmation-dashboard__hero">
                    <div className="success-lottie-container">
                        <div className="success-icon-wrapper">
                            <CheckCircle2 className="w-16 h-16 text-white" />
                        </div>
                        <div className="success-pulse-ring"></div>
                    </div>
                    
                    <h2 className="confirmation-title font-playfair">
                        Booking <br /> <span>Confirmed!</span>
                    </h2>
                    
                    <p className="confirmation-desc">
                        Your dental care journey starts here. We've received your request and will notify you shortly.
                    </p>

                    <div className="reference-box">
                        <span className="reference-label">REFERENCE NUMBER</span>
                        <div className="reference-value-wrapper">
                            <span className="reference-value">{bookingId}</span>
                            <button 
                                className={`copy-btn ${copied ? 'copied' : ''}`}
                                onClick={copyToClipboard}
                                title="Copy to clipboard"
                            >
                                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side: Details Card */}
                <div className="booking-confirmation-dashboard__details">
                    <div className="details-header">
                        <h3 className="details-title">Appointment Details</h3>
                        <div className="status-indicator">
                            <span className="status-dot"></span>
                            Awaiting Approval
                        </div>
                    </div>

                    <div className="details-grid">
                        <div className="detail-item">
                            <div className="detail-icon">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <div className="detail-content">
                                <label>Date</label>
                                <span>{formatDateFull(booking.slot.date)}</span>
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="detail-icon">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div className="detail-content">
                                <label>Time</label>
                                <span>{formatTime12Hour(booking.slot.startTime)}</span>
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="detail-icon">
                                <User className="w-5 h-5" />
                            </div>
                            <div className="detail-content">
                                <label>Patient</label>
                                <span>{booking.Patient.name}</span>
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="detail-icon">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div className="detail-content">
                                <label>Phone</label>
                                <span>{booking.Patient.phone}</span>
                            </div>
                        </div>
                    </div>

                    <div className="helpful-tip">
                        <MapPin className="w-4 h-4" />
                        <span>Please arrive 5 minutes before your time.</span>
                    </div>

                    <div className="action-footer">
                        <button
                            className="primary-action-btn"
                            onClick={onBookAnother}
                        >
                            <span>Book Another Appointment</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingConfirmation;
