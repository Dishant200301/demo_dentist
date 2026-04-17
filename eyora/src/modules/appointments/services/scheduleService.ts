import { getApiUrl, getPublicHeaders } from '../utils/apiConfig';

const API_URL = getApiUrl();

export interface PublicDayInfo {
  date: string;
  isHoliday: boolean;
  isHalfday: boolean;
  halfDayEndTime?: string;
  note?: string | null;
  workingHours: {
    openTime: string;
    closeTime: string;
    breakStart?: string;
    breakEnd?: string;
    halfDayEndTime?: string;
  };
}

export const scheduleService = {
  async getDayInfo(date: string): Promise<{ success: boolean; data: PublicDayInfo }> {
    const params = new URLSearchParams({ date });
    const res = await fetch(`${API_URL}/public/schedule/info?${params}`, {
      headers: getPublicHeaders(),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || 'Failed to fetch schedule info');
    }
    return res.json();
  },
};

