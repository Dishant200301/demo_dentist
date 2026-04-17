// Date utility functions for appointments

/**
 * Format date to YYYY-MM-DD string
 */
export const formatDateToString = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

/**
 * Format date for display (e.g., "Mon, Dec 28")
 */
export const formatDateForDisplay = (date: Date | string): string => {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    });
};

/**
 * Format date for full display (e.g., "Monday, December 28, 2025")
 */
export const formatDateFull = (date: Date | string): string => {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
};

/**
 * Format date for DMY display (e.g., "Sunday 23/04/2025")
 */
export const formatDateDMY = (date: Date | string): string => {
    const d = typeof date === 'string' ? new Date(date) : date;
    const weekday = d.toLocaleDateString('en-US', { weekday: 'long' });
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${weekday} ${day}/${month}/${year}`;
};

/**
 * Get array of dates for next N days
 */
export const getNextDays = (count: number, startFrom: Date = new Date()): Date[] => {
    const dates: Date[] = [];
    for (let i = 0; i < count; i++) {
        const date = new Date(startFrom);
        date.setDate(date.getDate() + i);
        dates.push(date);
    }
    return dates;
};

/**
 * Check if date is today
 */
export const isToday = (date: Date | string): boolean => {
    const d = typeof date === 'string' ? new Date(date) : date;
    const today = new Date();
    return d.toDateString() === today.toDateString();
};

/**
 * Check if date is in the past
 */
export const isPastDate = (date: Date | string): boolean => {
    const d = typeof date === 'string' ? new Date(date) : date;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return d < today;
};

/**
 * Get relative day name (Today, Tomorrow, or day name)
 */
export const getRelativeDayName = (date: Date | string): string => {
    const d = typeof date === 'string' ? new Date(date) : date;
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (d.toDateString() === today.toDateString()) {
        return 'Today';
    } else if (d.toDateString() === tomorrow.toDateString()) {
        return 'Tomorrow';
    } else {
        return d.toLocaleDateString('en-US', { weekday: 'long' });
    }
};
