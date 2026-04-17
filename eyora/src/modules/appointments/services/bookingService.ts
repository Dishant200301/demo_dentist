// Public Booking Service - API calls for creating and checking booking requests
import { getApiUrl, getPublicHeaders } from '../utils/apiConfig';
import type { BookingRequest, BookingResponse, BookingStatusCheck } from '../types/booking';

const API_URL = getApiUrl();

export const publicBookingService = {
    /**
     * Create a new booking request
     * This is a PUBLIC endpoint - no authentication required
     * The booking goes to 'pending' status and needs admin approval
     */
    async createBookingRequest(data: BookingRequest): Promise<{
        success: boolean;
        message: string;
        data: BookingResponse
    }> {
        // Build payload for server: expects date and arrivingTime
        const payload: {
            PatientName: string;
            PatientPhone: string;
            PatientEmail?: string;
            PatientAadhar?: string;
            notes?: string;
            date: string;
            arrivingTime: string;
            profileId?: string;
        } = {
            PatientName: data.PatientName,
            PatientPhone: data.PatientPhone,
            PatientEmail: data.PatientEmail,
            PatientAadhar: data.PatientAadhar,
            notes: data.notes,
            date: data.date,
            arrivingTime: data.arrivingTime || data.startTime
        };

        const response = await fetch(`${API_URL}/public/bookings`, {
            method: 'POST',
            headers: getPublicHeaders(),
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to create booking request');
        }

        return response.json();
    },

    /**
     * Check booking status using reference number and phone
     * This is a PUBLIC endpoint - no authentication required
     */
    async checkBookingStatus(data: BookingStatusCheck): Promise<{
        success: boolean;
        data: BookingResponse
    }> {
        const params = new URLSearchParams({
            reference: data.bookingReference,
            phone: data.phone
        });

        const response = await fetch(`${API_URL}/public/bookings/status?${params}`, {
            headers: getPublicHeaders()
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to check booking status');
        }

        return response.json();
    },

    /**
     * Cancel a booking request (only if pending)
     * This is a PUBLIC endpoint - requires reference and phone for verification
     */
    async cancelBookingRequest(bookingReference: string, phone: string): Promise<{
        success: boolean;
        message: string
    }> {
        const response = await fetch(`${API_URL}/public/bookings/cancel`, {
            method: 'POST',
            headers: getPublicHeaders(),
            body: JSON.stringify({ bookingReference, phone })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to cancel booking');
        }

        return response.json();
    },

    /**
     * Get all bookings for the current authenticated web user
     */
    async getMyBookings(): Promise<{
        success: boolean;
        data: BookingResponse[]
    }> {
        const response = await fetch(`${API_URL}/public/bookings/my-bookings`, {
            headers: getPublicHeaders()
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to fetch your bookings');
        }

        return response.json();
    }
};
