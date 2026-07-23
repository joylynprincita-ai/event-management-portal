package com.eventportal.mapper;

import com.eventportal.dto.response.BookingResponse;
import com.eventportal.entity.Booking;

public class BookingMapper {

    private BookingMapper() {}

    public static BookingResponse toResponse(Booking booking) {
        BookingResponse response = new BookingResponse();
        response.setBookingId(booking.getId());
        response.setAmount(booking.getAmount());
        response.setStatus(booking.getStatus());
        return response;
    }
}
