// Booking Types - Public facing bookings
export interface BookingRequest {
    // New format expected by server
    PatientName: string;
    PatientPhone: string;
    PatientEmail?: string;
    PatientAadhar?: string;
    notes?: string;
    date: string;
    arrivingTime: string;
    profileId?: string;
    // Backward-compat fields (ignored by server)
    slotId?: string;
    startTime?: string;
}

export interface BookingResponse {
    _id: string;
    bookingReference?: string;
    bookingId?: string;
    status: 'pending' | 'booked' | 'attended' | 'not-attended' | 'rejected' | 'approved' | 'cancelled';
    slot: {
        date: string;
        startTime: string;
        endTime: string;
        durationMinutes: number;
    };
    Patient: {
        name: string;
        phone: string;
        email?: string;
    };
    createdAt: string;
    message?: string;
}

export interface BookingStatusCheck {
    bookingReference: string;
    phone: string;
}
