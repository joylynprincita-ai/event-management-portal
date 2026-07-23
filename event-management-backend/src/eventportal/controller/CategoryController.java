package com.eventportal.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins="*")
public class CategoryController {

    @GetMapping
    public ResponseEntity<String> getCategories() {
        return ResponseEntity.ok("Categories");
    }

    @PostMapping
    public ResponseEntity<String> addCategory() {
        return ResponseEntity.ok("Category Added");
    }
}
