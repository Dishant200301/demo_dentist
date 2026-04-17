export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export const getApiUrl = (): string => API_BASE_URL;
export const getBackendUrl = (): string => BACKEND_URL;

// Public API doesn't need auth headers for some things, but we send if available
// Public API requires x-api-key header for clinic identification
export const getPublicHeaders = () => {
    const token = localStorage.getItem('web_token');
    const apiKey = import.meta.env.XBOOK_CLINIC_API_KEY;
    
    return {
        'Content-Type': 'application/json',
        ...(apiKey ? { 'x-api-key': apiKey } : {}),
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    };
};
