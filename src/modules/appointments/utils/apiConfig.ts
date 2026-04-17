export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export const getApiUrl = (): string => API_BASE_URL;
export const getBackendUrl = (): string => BACKEND_URL;

// Builds headers for all API calls
// - Always sends Content-Type: application/json
// - Sends x-api-key for clinic identification (required by public routes)
// - Sends Authorization: Bearer <token> if patient is logged in
export const getPublicHeaders = () => {
  const token = localStorage.getItem('web_token');
  const apiKey = import.meta.env.VITE_XBOOK_CLINIC_API_KEY || import.meta.env.XBOOK_CLINIC_API_KEY;

  return {
    'Content-Type': 'application/json',
    ...(apiKey ? { 'x-api-key': apiKey } : {}),
    ...(token ? { 'Authorization': `Bearer ${token}` } : {})
  };
};
