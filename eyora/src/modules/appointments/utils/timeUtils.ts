// Time utility functions for appointments

/**
 * Convert 24-hour time to 12-hour format
 * @param time24 - Time in HH:MM format
 * @returns Time in h:mm AM/PM format
 */
export const formatTime12Hour = (time24: string): string => {
    const [hours, minutes] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12;
    return `${hour12}:${minutes.toString().padStart(2, '0')} ${period}`;
};

/**
 * Convert time string to minutes from midnight
 */
export const timeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
};

/**
 * Convert minutes from midnight to time string
 */
export const minutesToTime = (totalMinutes: number): string => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

/**
 * Format duration in human readable format
 */
export const formatDuration = (minutes: number): string => {
    if (minutes < 60) {
        return `${minutes} min`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (remainingMinutes === 0) {
        return hours === 1 ? '1 hour' : `${hours} hours`;
    }
    return `${hours}h ${remainingMinutes}m`;
};

/**
 * Check if a time slot has passed for today
 */
export const isTimePassed = (date: string, time: string): boolean => {
    const now = new Date();
    const slotDate = new Date(date);

    // If not today, check if date is in past
    if (slotDate.toDateString() !== now.toDateString()) {
        return slotDate < now;
    }

    // If today, check time
    const [hours, minutes] = time.split(':').map(Number);
    const slotTime = new Date(slotDate);
    slotTime.setHours(hours, minutes, 0, 0);

    return slotTime < now;
};

/**
 * Get time range display string
 */
export const getTimeRange = (startTime: string, endTime: string): string => {
    return `${formatTime12Hour(startTime)} - ${formatTime12Hour(endTime)}`;
};
