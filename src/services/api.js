import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

// Add auth token if exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const bookTest = (data) => API.post('/bookings', data);
export const submitContact = (data) => API.post('/contact', data);
export const getDashboardStats = () => API.get('/admin/stats');
export const sendWhatsAppMessage = (data) => API.post('/whatsapp', data);
export const getBookings = () => API.get('/bookings');
export const sendEmail = (data) => API.post('/email/send', data);
export const postToInstagram = (data) => API.post('/instagram/post', data);
export const postToLinkedIn = (data) => API.post('/linkedin/post', data);