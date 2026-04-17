// useBooking Hook - Manage booking form state and submission
import { useState, useCallback } from 'react';
import { publicBookingService } from '../services/bookingService';
import type { BookingRequest, BookingResponse } from '../types/booking';
import type { PatientFormData, PatientValidation } from '../types/Patient';
import { validatePatientForm } from '../utils/validationUtils';
import type { PublicSlot } from '../types/slot';
import { useWebAuth } from '@/modules/auth/context/WebAuthContext';
import { useEffect } from 'react';

interface UseBookingReturn {
    // Form state
    PatientData: PatientFormData;
    setPatientData: React.Dispatch<React.SetStateAction<PatientFormData>>;
    selectedSlot: PublicSlot | null;
    setSelectedSlot: (slot: PublicSlot | null) => void;
    notes: string;
    setNotes: (notes: string) => void;

    // Validation
    validation: PatientValidation;
    validateForm: () => boolean;

    // Submission
    loading: boolean;
    error: string | null;
    bookingResponse: BookingResponse | null;
    submitBooking: () => Promise<boolean>;

    // Status check
    checkStatus: (reference: string, phone: string) => Promise<BookingResponse | null>;
    cancelBooking: (reference: string, phone: string) => Promise<boolean>;

    // Reset
    resetForm: () => void;
}

const initialPatientData: PatientFormData = {
    name: '',
    phone: '',
    email: ''
};

const initialValidation: PatientValidation = {
    isValid: true,
    errors: {}
};

export const useBooking = (): UseBookingReturn => {
    const { user } = useWebAuth();

    // Form state
    const [PatientData, setPatientData] = useState<PatientFormData>(initialPatientData);
    const [selectedSlot, setSelectedSlot] = useState<PublicSlot | null>(null);
    const [notes, setNotes] = useState<string>('');

    // Pre-fill user data if logged in
    useEffect(() => {
        if (user && !PatientData.name && !PatientData.phone) {
            setPatientData({
                name: user.name || '',
                phone: user.phone || '',
                email: user.email || ''
            });
        }
    }, [user]);

    // Validation state
    const [validation, setValidation] = useState<PatientValidation>(initialValidation);

    // Submission state
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [bookingResponse, setBookingResponse] = useState<BookingResponse | null>(null);

    // Validate form
    const validateForm = useCallback((): boolean => {
        const result = validatePatientForm(PatientData);
        setValidation(result);

        if (!selectedSlot) {
            setError('Please select a time slot');
            return false;
        }

        return result.isValid;
    }, [PatientData, selectedSlot]);

    // Submit booking request
    const submitBooking = useCallback(async (): Promise<BookingResponse | null> => {
        if (!validateForm()) {
            return null;
        }

        if (!selectedSlot) {
            setError('Please select a time slot');
            return null;
        }

        setLoading(true);
        setError(null);

        try {
            const bookingRequest: BookingRequest = {
                PatientName: PatientData.name.trim(),
                PatientPhone: PatientData.phone.replace(/\s/g, ''),
                PatientEmail: PatientData.email?.trim() || undefined,
                notes: notes.trim() || undefined,
                date: selectedSlot.date,
                arrivingTime: selectedSlot.startTime,
                slotId: selectedSlot._id,
                profileId: user?.id // Explicitly link to authenticated user
            };

            const response = await publicBookingService.createBookingRequest(bookingRequest);

            if (response.success) {
                // Transform server response to UI shape
                const transformed: BookingResponse = {
                    _id: response.data._id || response.data.bookingId || '',
                    bookingReference: response.data.bookingReference || response.data.bookingId,
                    bookingId: response.data.bookingId,
                    status: response.data.status,
                    slot: {
                        date: response.data.slot?.date || selectedSlot.date,
                        startTime: response.data.slot?.startTime || selectedSlot.startTime,
                        endTime: selectedSlot.endTime,
                        durationMinutes: selectedSlot.durationMinutes
                    },
                    Patient: {
                        name: PatientData.name,
                        phone: PatientData.phone,
                        email: PatientData.email || undefined
                    },
                    createdAt: new Date().toISOString(),
                    message: response.data.message
                };
                setBookingResponse(transformed);
                return transformed;
            }

            return null;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to submit booking');
            return null;
        } finally {
            setLoading(false);
        }
    }, [PatientData, selectedSlot, notes, validateForm, user]);

    // Check booking status
    const checkStatus = useCallback(async (reference: string, phone: string): Promise<BookingResponse | null> => {
        setLoading(true);
        setError(null);

        try {
            const response = await publicBookingService.checkBookingStatus({
                bookingReference: reference,
                phone: phone.replace(/\s/g, '')
            });

            if (response.success) {
                type RawStatus = {
                    _id?: string;
                    bookingId?: string;
                    bookingReference?: string;
                    status: 'pending' | 'approved' | 'rejected' | 'cancelled' | 'booked' | 'attended' | 'not-attended';
                    date?: string;
                    arrivingTime?: string;
                    slot?: { date: string; startTime: string; endTime?: string; durationMinutes?: number };
                    Patient?: { name: string; phone: string; email?: string };
                    createdAt?: string;
                    message?: string;
                };
                const data = response.data as unknown as RawStatus;
                const transformed: BookingResponse = {
                    _id: data._id || data.bookingId || '',
                    bookingReference: data.bookingReference || data.bookingId,
                    bookingId: data.bookingId,
                    status: data.status,
                    slot: {
                        date: data.slot?.date || data.date,
                        startTime: data.slot?.startTime || data.arrivingTime,
                        endTime: data.slot?.endTime || '',
                        durationMinutes: data.slot?.durationMinutes || 30
                    },
                    Patient: {
                        name: data.Patient?.name || '',
                        phone: data.Patient?.phone || '',
                        email: data.Patient?.email
                    },
                    createdAt: data.createdAt || new Date().toISOString(),
                    message: data.message
                };
                return transformed;
            }
            return null;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to check status');
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    // Cancel booking
    const cancelBooking = useCallback(async (reference: string, phone: string): Promise<boolean> => {
        setLoading(true);
        setError(null);

        try {
            const response = await publicBookingService.cancelBookingRequest(
                reference,
                phone.replace(/\s/g, '')
            );

            return response.success;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to cancel booking');
            return false;
        } finally {
            setLoading(false);
        }
    }, []);

    // Reset form
    const resetForm = useCallback(() => {
        setPatientData(initialPatientData);
        setSelectedSlot(null);
        setNotes('');
        setValidation(initialValidation);
        setError(null);
        setBookingResponse(null);
    }, []);

    return {
        PatientData,
        setPatientData,
        selectedSlot,
        setSelectedSlot,
        notes,
        setNotes,
        validation,
        validateForm,
        loading,
        error,
        bookingResponse,
        submitBooking,
        checkStatus,
        cancelBooking,
        resetForm
    };
};
