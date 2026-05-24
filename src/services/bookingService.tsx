import axios from "axios";

const API = "http://localhost:5000/api"; 
// ⚠️ change port if your backend uses different one

export const getBookings = async () => {
  const res = await axios.get(`${API}/bookings`);
  return res.data;
};

export const updateBookingStatus = async (id: number, status: string) => {
  const res = await axios.put(`${API}/bookings/${id}/status`, {
    status,
  });
  return res.data;
};