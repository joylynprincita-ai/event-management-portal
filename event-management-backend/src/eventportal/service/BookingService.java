package com.eventportal.service;

public interface BookingService {
    String bookTicket();
    String getBookings();
    String cancelBooking(Long id);
}
