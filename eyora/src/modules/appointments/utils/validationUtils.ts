// Validation utility functions for appointments

import type { PatientFormData, PatientValidation } from '../types/Patient';

/**
 * Validate phone number (Indian format)
 */
export const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Validate email
 */
export const validateEmail = (email: string): boolean => {
    if (!email) return true; // Email is optional
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};



/**
 * Validate name
 */
export const validateName = (name: string): boolean => {
    return name.trim().length >= 2;
};

/**
 * Validate entire Patient form
 */
export const validatePatientForm = (data: PatientFormData): PatientValidation => {
    const errors: PatientValidation['errors'] = {};

    if (!validateName(data.name)) {
        errors.name = 'Please enter a valid name (at least 2 characters)';
    }

    if (!validatePhone(data.phone)) {
        errors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!validateEmail(data.email || '')) {
        errors.email = 'Please enter a valid email address';
    }



    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

/**
 * Format phone number for display
 */
export const formatPhoneDisplay = (phone: string): string => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
        return `${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
    }
    return phone;
};


