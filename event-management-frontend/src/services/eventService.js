import api from "./api";

export const getAllEvents = () => api.get("/events");

export const getEventById = (id) => api.get(`/events/${id}`);

export const createEvent = (event) => api.post("/events", event);

export const updateEvent = (id, event) => api.put(`/events/${id}`, event);

export const deleteEvent = (id) => api.delete(`/events/${id}`);
