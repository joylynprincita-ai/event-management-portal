package com.eventportal.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins="*")
public class UserController {

    @GetMapping("/profile")
    public ResponseEntity<String> getProfile() {
        return ResponseEntity.ok("User Profile");
    }

    @PutMapping("/profile")
    public ResponseEntity<String> updateProfile() {
        return ResponseEntity.ok("Profile Updated");
    }

    @GetMapping("/bookings")
    public ResponseEntity<String> bookingHistory() {
        return ResponseEntity.ok("Booking History");
    }
}
