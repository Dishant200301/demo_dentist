// DateSelector Component - Horizontal scrollable date picker
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getNextDays, formatDateToString, isToday, getRelativeDayName } from '../utils/dateUtils';

interface DateSelectorProps {
    selectedDate: Date;
    onSelectDate: (date: Date) => void;
    daysToShow?: number;
    slotCounts?: { [date: string]: number };
}

const DateSelector: React.FC<DateSelectorProps> = ({
    selectedDate,
    onSelectDate,
    daysToShow = 30,
    slotCounts = {}
}) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const dates = getNextDays(daysToShow);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 200;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Auto-scroll selected date into view
    useEffect(() => {
        if (scrollContainerRef.current) {
            const dateStr = formatDateToString(selectedDate);
            const selectedElement = scrollContainerRef.current.querySelector(`[data-date="${dateStr}"]`);
            if (selectedElement) {
                selectedElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }, [selectedDate]);

    return (
        <div className="date-selector">
            <button 
                type="button"
                className="date-selector__nav-btn date-selector__nav-btn--left"
                onClick={() => scroll('left')}
                aria-label="Previous dates"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="date-selector__scroll-container" ref={scrollContainerRef}>
                {dates.map((date) => {
                    const dateStr = formatDateToString(date);
                    const isSelected = formatDateToString(selectedDate) === dateStr;
                    const dayName = getRelativeDayName(date);
                    const isTodayDate = isToday(date);
                    
                    // Format day name for high-fidelity look (short for others, Today/Tomorrow for special)
                    const displayDayName = isTodayDate ? "TODAY" : 
                                         dayName === "Tomorrow" ? "TOMORROW" : 
                                         date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();

                    return (
                        <button
                            key={dateStr}
                            data-date={dateStr}
                            onClick={() => onSelectDate(date)}
                            className={`
                                date-selector__item
                                ${isSelected ? 'date-selector__item--selected' : ''}
                                ${isTodayDate ? 'date-selector__item--today' : ''}
                            `}
                        >
                            <span className="date-selector__day-name">
                                {displayDayName}
                            </span>
                            <span className="date-selector__date-number">
                                {date.getDate()}
                            </span>
                        </button>
                    );
                })}
            </div>

            <button 
                type="button"
                className="date-selector__nav-btn date-selector__nav-btn--right"
                onClick={() => scroll('right')}
                aria-label="Next dates"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
};

export default DateSelector;
