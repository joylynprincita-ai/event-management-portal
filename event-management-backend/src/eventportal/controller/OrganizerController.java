package com.eventportal.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/organizer")
@CrossOrigin(origins="*")
public class OrganizerController {

    @GetMapping("/dashboard")
    public ResponseEntity<String> dashboard() {
        return ResponseEntity.ok("Organizer Dashboard");
    }

    @GetMapping("/events")
    public ResponseEntity<String> myEvents() {
        return ResponseEntity.ok("Organizer Events");
    }
}
