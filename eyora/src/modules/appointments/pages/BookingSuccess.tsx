import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import BookingConfirmation from '../components/BookingConfirmation';
import { ArrowLeft } from 'lucide-react';
import './BookingSuccess.css';

const BookingSuccess: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const booking = location.state?.booking;

    // Redirect to appointments if no booking data found (prevent direct access)
    useEffect(() => {
        if (!booking) {
            navigate('/appointments');
        }
    }, [booking, navigate]);

    if (!booking) return null;

    return (
        <div className="booking-success-page">
            <div className="booking-success-page__container">
                <div className="booking-success-page__back-nav">
                    <Link to="/appointments" className="booking-success-page__back-link">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Appointments
                    </Link>
                </div>

                <div className="booking-success-page__content">
                    <BookingConfirmation 
                        booking={booking} 
                        onBookAnother={() => navigate('/appointments')} 
                    />
                </div>
            </div>
        </div>
    );
};

export default BookingSuccess;
