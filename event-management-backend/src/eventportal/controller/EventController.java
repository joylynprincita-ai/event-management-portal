package com.eventportal.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins="*")
public class EventController {

    @GetMapping
    public ResponseEntity<String> getAllEvents() {
        return ResponseEntity.ok("All Events");
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> getEvent(@PathVariable Long id) {
        return ResponseEntity.ok("Event : " + id);
    }

    @PostMapping
    public ResponseEntity<String> createEvent() {
        return ResponseEntity.ok("Event Created");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateEvent(@PathVariable Long id) {
        return ResponseEntity.ok("Event Updated");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEvent(@PathVariable Long id) {
        return ResponseEntity.ok("Event Deleted");
    }
}
