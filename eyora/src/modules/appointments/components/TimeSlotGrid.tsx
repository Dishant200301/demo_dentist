// TimeSlotGrid Component - Grid display of available time slots
import React from 'react';
import SlotCard from './SlotCard';
import type { PublicSlot } from '../types/slot';
import { isTimePassed } from '../utils/timeUtils';

interface TimeSlotGridProps {
    slots: PublicSlot[];
    selectedSlot: PublicSlot | null;
    onSelectSlot: (slot: PublicSlot) => void;
    loading?: boolean;
    emptyMessage?: string;
}

const TimeSlotGrid: React.FC<TimeSlotGridProps> = ({
    slots,
    selectedSlot,
    onSelectSlot,
    loading = false,
    emptyMessage = 'No available slots for this date'
}) => {
    // Filter out passed time slots
    const availableSlots = slots.filter(slot => !isTimePassed(slot.date, slot.startTime));

    if (loading) {
        return (
            <div className="time-slot-grid time-slot-grid--loading">
                <div className="time-slot-grid__spinner"></div>
                <p>Loading available slots...</p>
            </div>
        );
    }

    if (availableSlots.length === 0) {
        return (
            <div className="time-slot-grid time-slot-grid--empty">
                <p>{emptyMessage}</p>
            </div>
        );
    }


    return (
        <div className="time-slot-grid">
            <div className="time-slot-grid__slots">
                {availableSlots.map(slot => (
                    <SlotCard
                        key={slot._id}
                        slot={slot}
                        isSelected={selectedSlot?._id === slot._id}
                        onSelect={onSelectSlot}
                    />
                ))}
            </div>
        </div>
    );
};

export default TimeSlotGrid;
