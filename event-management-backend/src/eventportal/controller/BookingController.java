package com.eventportal.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins="*")
public class BookingController {

    @PostMapping
    public ResponseEntity<String> bookTicket() {
        return ResponseEntity.ok("Ticket Booked");
    }

    @GetMapping
    public ResponseEntity<String> getBookings() {
        return ResponseEntity.ok("Booking List");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> cancelBooking(@PathVariable Long id) {
        return ResponseEntity.ok("Booking Cancelled");
    }
}
