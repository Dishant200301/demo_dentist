// BookingForm Component - Patient details form for booking
import React from 'react';
import type { PatientFormData, PatientValidation } from '../types/Patient';

interface BookingFormProps {
    PatientData: PatientFormData;
    onChange: (data: PatientFormData) => void;
    validation: PatientValidation;
    notes: string;
    onNotesChange: (notes: string) => void;
    disabled?: boolean;
}

const BookingForm: React.FC<BookingFormProps> = ({
    PatientData,
    onChange,
    validation,
    notes,
    onNotesChange,
    disabled = false
}) => {
    const handleChange = (field: keyof PatientFormData, value: string) => {
        onChange({
            ...PatientData,
            [field]: value
        });
    };

    return (
        <div className="booking-form">
            <h3 className="booking-form__title">Your Details</h3>

            <div className="booking-form__field">
                <label className="booking-form__label" htmlFor="name">
                    Full Name <span className="booking-form__required">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    className={`booking-form__input ${validation.errors.name ? 'booking-form__input--error' : ''}`}
                    placeholder="Enter your full name"
                    value={PatientData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    disabled={disabled}
                />
                {validation.errors.name && (
                    <span className="booking-form__error">{validation.errors.name}</span>
                )}
            </div>

            <div className="booking-form__field">
                <label className="booking-form__label" htmlFor="phone">
                    Phone Number <span className="booking-form__required">*</span>
                </label>
                <input
                    type="tel"
                    id="phone"
                    className={`booking-form__input ${validation.errors.phone ? 'booking-form__input--error' : ''}`}
                    placeholder="Enter 10-digit phone number"
                    value={PatientData.phone}
                    onChange={(e) => handleChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                    disabled={disabled}
                />
                {validation.errors.phone && (
                    <span className="booking-form__error">{validation.errors.phone}</span>
                )}
            </div>

            <div className="booking-form__field">
                <label className="booking-form__label" htmlFor="email">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    className={`booking-form__input ${validation.errors.email ? 'booking-form__input--error' : ''}`}
                    placeholder="Enter your email (optional)"
                    value={PatientData.email || ''}
                    onChange={(e) => handleChange('email', e.target.value)}
                    disabled={disabled}
                />
                {validation.errors.email && (
                    <span className="booking-form__error">{validation.errors.email}</span>
                )}
            </div>



            <div className="booking-form__field">
                <label className="booking-form__label" htmlFor="notes">
                    Additional Notes
                </label>
                <textarea
                    id="notes"
                    className="booking-form__textarea"
                    placeholder="Any special requirements or notes..."
                    value={notes}
                    onChange={(e) => onNotesChange(e.target.value)}
                    rows={3}
                    disabled={disabled}
                />
            </div>
        </div>
    );
};

export default BookingForm;
