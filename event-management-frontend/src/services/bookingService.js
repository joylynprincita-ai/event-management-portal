import api from "./api";

export const bookTicket = (booking) => api.post("/bookings", booking);

export const getBookings = () => api.get("/bookings");

export const cancelBooking = (id) => api.delete(`/bookings/${id}`);
