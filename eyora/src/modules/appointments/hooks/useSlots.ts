// useSlots Hook - Manage available slots state and fetching
import { useState, useEffect, useCallback } from 'react';
import { scheduleService } from '../services/scheduleService';
import type { PublicSlot, SlotsByDate } from '../types/slot';
import { formatDateToString } from '../utils/dateUtils';
import { minutesToTime, timeToMinutes } from '../utils/timeUtils';

interface UseSlotsReturn {
    slots: PublicSlot[];
    slotsByDate: SlotsByDate;
    loading: boolean;
    error: string | null;
    selectedDate: Date;
    setSelectedDate: (date: Date) => void;
    refreshSlots: () => Promise<void>;
    getAvailableSlots: (date: Date) => PublicSlot[];
}

export const useSlots = (initialDate: Date = new Date()): UseSlotsReturn => {
    const [slots, setSlots] = useState<PublicSlot[]>([]);
    const [slotsByDate, setSlotsByDate] = useState<SlotsByDate>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date>(initialDate);

    // Fetch slots for selected date (generate 30-min intervals from working hours)
    const fetchSlots = useCallback(async (date: Date) => {
        setLoading(true);
        setError(null);

        try {
            const dateStr = formatDateToString(date);
            const response = await scheduleService.getDayInfo(dateStr);

            const { workingHours, isHoliday, isHalfday, halfDayEndTime } = response.data;
            if (isHoliday) {
                setSlots([]);
                setSlotsByDate(prev => ({ ...prev, [dateStr]: [] }));
                setLoading(false);
                return;
            }

            const open = timeToMinutes(workingHours.openTime);
            const close = timeToMinutes(
                isHalfday && (halfDayEndTime || workingHours.halfDayEndTime || workingHours.closeTime)
                    ? (halfDayEndTime || workingHours.halfDayEndTime!) : workingHours.closeTime
            );
            const breakStart = workingHours.breakStart ? timeToMinutes(workingHours.breakStart) : null;
            const breakEnd = workingHours.breakEnd ? timeToMinutes(workingHours.breakEnd) : null;

            const generated: PublicSlot[] = [];
            for (let t = open; t < close; t += 30) {
                // Skip break window
                if (breakStart !== null && breakEnd !== null && t >= breakStart && t < breakEnd) continue;
                const startTime = minutesToTime(t);
                const endTime = minutesToTime(Math.min(t + 30, close));
                generated.push({
                    _id: `${dateStr}_${startTime}`,
                    date: dateStr,
                    startTime,
                    endTime,
                    durationMinutes: 30,
                    status: 'active',
                    isAvailable: true
                });
            }

            setSlots(generated);
            setSlotsByDate(prev => ({
                ...prev,
                [dateStr]: generated
            }));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load slots');
            setSlots([]);
        } finally {
            setLoading(false);
        }
    }, []);

    // Prefetch range: generate counts quickly per day using day info
    const fetchSlotsRange = useCallback(async (startDate: Date, endDate: Date) => {
        try {
            const days: SlotsByDate = {};
            const s = new Date(startDate);
            while (s <= endDate) {
                const ds = formatDateToString(s);
                try {
                    const info = await scheduleService.getDayInfo(ds);
                    const { workingHours, isHoliday, isHalfday, halfDayEndTime } = info.data;
                    if (!isHoliday) {
                        const open = timeToMinutes(workingHours.openTime);
                        const close = timeToMinutes(
                            isHalfday && (halfDayEndTime || workingHours.halfDayEndTime || workingHours.closeTime)
                                ? (halfDayEndTime || workingHours.halfDayEndTime!) : workingHours.closeTime
                        );
                        const breakStart = workingHours.breakStart ? timeToMinutes(workingHours.breakStart) : null;
                        const breakEnd = workingHours.breakEnd ? timeToMinutes(workingHours.breakEnd) : null;
                        const generated: PublicSlot[] = [];
                        for (let t = open; t < close; t += 30) {
                            if (breakStart !== null && breakEnd !== null && t >= breakStart && t < breakEnd) continue;
                            const startTime = minutesToTime(t);
                            const endTime = minutesToTime(Math.min(t + 30, close));
                            generated.push({
                                _id: `${ds}_${startTime}`,
                                date: ds,
                                startTime,
                                endTime,
                                durationMinutes: 30,
                                status: 'active',
                                isAvailable: true
                            });
                        }
                        days[ds] = generated;
                    } else {
                        days[ds] = [];
                    }
                } catch {
                    days[ds] = [];
                }
                s.setDate(s.getDate() + 1);
            }
            setSlotsByDate(days);
        } catch (err) {
            console.error('Failed to fetch slots range:', err);
        }
    }, []);

    // Refresh current date slots
    const refreshSlots = useCallback(async () => {
        await fetchSlots(selectedDate);
    }, [fetchSlots, selectedDate]);

    // Get available slots for a specific date from cache
    const getAvailableSlots = useCallback((date: Date): PublicSlot[] => {
        const dateStr = formatDateToString(date);
        return slotsByDate[dateStr] || [];
    }, [slotsByDate]);

    // Fetch on date change
    useEffect(() => {
        fetchSlots(selectedDate);
    }, [selectedDate, fetchSlots]);

    // Prefetch next 7 days on mount
    useEffect(() => {
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 7);
        fetchSlotsRange(new Date(), endDate);
    }, [fetchSlotsRange]);

    return {
        slots,
        slotsByDate,
        loading,
        error,
        selectedDate,
        setSelectedDate,
        refreshSlots,
        getAvailableSlots
    };
};
