package com.eventportal.service;

public interface EventService {
    String getAllEvents();
    String getEventById(Long id);
    String createEvent();
    String updateEvent(Long id);
    String deleteEvent(Long id);
}
