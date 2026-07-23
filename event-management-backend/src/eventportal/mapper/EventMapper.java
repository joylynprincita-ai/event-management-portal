package com.eventportal.mapper;

import com.eventportal.dto.request.EventRequest;
import com.eventportal.dto.response.EventResponse;
import com.eventportal.entity.Event;

public class EventMapper {

    private EventMapper() {}

    public static EventResponse toResponse(Event event) {
        EventResponse response = new EventResponse();
        response.setId(event.getId());
        response.setTitle(event.getTitle());
        response.setVenue(event.getVenue());
        response.setPrice(event.getPrice());
        return response;
    }

    public static void updateEntity(Event event, EventRequest request) {
        event.setTitle(request.getTitle());
        event.setDescription(request.getDescription());
        event.setVenue(request.getVenue());
        event.setPrice(request.getPrice());
        event.setAvailableSeats(request.getAvailableSeats());
    }
}
