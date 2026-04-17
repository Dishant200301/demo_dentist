// Slot Types - Public facing slots
export interface PublicSlot {
    _id: string;
    date: string;
    startTime: string;
    endTime: string;
    durationMinutes: number;
    status: 'active' | 'disabled' | 'booked';
    isAvailable: boolean;
}

export interface SlotsByDate {
    [date: string]: PublicSlot[];
}
