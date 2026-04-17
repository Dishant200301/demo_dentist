// SlotCard Component - Displays a single time slot
import React from 'react';
import type { PublicSlot } from '../types/slot';
import { formatTime12Hour, formatDuration, isTimePassed } from '../utils/timeUtils';

interface SlotCardProps {
    slot: PublicSlot;
    isSelected: boolean;
    onSelect: (slot: PublicSlot) => void;
    disabled?: boolean;
}

const SlotCard: React.FC<SlotCardProps> = ({
    slot,
    isSelected,
    onSelect,
    disabled = false
}) => {
    const isPast = isTimePassed(slot.date, slot.startTime);
    const isUnavailable = slot.status !== 'active' || isPast || disabled;

    const handleClick = () => {
        if (!isUnavailable) {
            onSelect(slot);
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={isUnavailable}
            className={`
                slot-card
                ${isSelected ? 'slot-card--selected' : ''}
                ${isUnavailable ? 'slot-card--unavailable' : ''}
            `}
        >
            <div className="slot-card__time">
                {formatTime12Hour(slot.startTime)}
            </div>
            {isPast && (
                <div className="slot-card__badge slot-card__badge--past">
                    Passed
                </div>
            )}
        </button>
    );
};

export default SlotCard;
