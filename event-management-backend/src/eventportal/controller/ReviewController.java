package com.eventportal.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin(origins="*")
public class ReviewController {

    @PostMapping
    public ResponseEntity<String> addReview() {
        return ResponseEntity.ok("Review Added");
    }

    @GetMapping("/{eventId}")
    public ResponseEntity<String> getReviews(@PathVariable Long eventId) {
        return ResponseEntity.ok("Reviews for Event " + eventId);
    }
}
