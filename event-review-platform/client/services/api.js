import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  
  export const login = (credentials) => api.post('/auth/login', credentials);
  export const register = (userData) => api.post('/auth/register', userData);
  export const getEvents = () => api.get('/events');
  export const createEvent = (eventData) => api.post('/events', eventData);
  export const getReviews = (eventId) => api.get(`/reviews/${eventId}`);
  export const createReview = (reviewData) => api.post('/reviews', reviewData);