import axios from "axios";

const API = axios.create({
  baseURL: "https://localhost:5000/", // replace with your deployed backend
});

// Example functions
export const fetchMerchandise = () => API.get('/merchandise');
export const fetchEvents = () => API.get('/events');
export const createPayment = (data) => API.post('/pay', data);

export default API;
