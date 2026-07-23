package com.eventportal.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {

    @GetMapping("/admin")
    public ResponseEntity<Map<String, Object>> adminDashboard() {
        Map<String, Object> dashboard = new HashMap<>();
        dashboard.put("totalUsers", 150);
        dashboard.put("totalOrganizers", 20);
        dashboard.put("totalEvents", 45);
        dashboard.put("totalBookings", 320);
        dashboard.put("totalRevenue", 125000.00);
        return ResponseEntity.ok(dashboard);
    }

    @GetMapping("/organizer")
    public ResponseEntity<Map<String, Object>> organizerDashboard() {
        Map<String, Object> dashboard = new HashMap<>();
        dashboard.put("myEvents", 12);
        dashboard.put("totalBookings", 180);
        dashboard.put("totalRevenue", 78000.00);
        dashboard.put("upcomingEvents", 5);
        return ResponseEntity.ok(dashboard);
    }

    @GetMapping("/user")
    public ResponseEntity<Map<String, Object>> userDashboard() {
        Map<String, Object> dashboard = new HashMap<>();
        dashboard.put("upcomingBookings", 3);
        dashboard.put("completedEvents", 8);
        dashboard.put("cancelledBookings", 1);
        dashboard.put("favoriteEvents", 6);
        return ResponseEntity.ok(dashboard);
    }

    @GetMapping("/statistics")
    public ResponseEntity<Map<String, Object>> statistics() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("todayBookings", 25);
        stats.put("todayRevenue", 14500.00);
        stats.put("activeUsers", 98);
        stats.put("activeEvents", 18);
        return ResponseEntity.ok(stats);
    }
}
