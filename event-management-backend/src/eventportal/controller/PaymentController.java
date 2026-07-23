package com.eventportal.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin(origins="*")
public class PaymentController {

    @PostMapping
    public ResponseEntity<String> makePayment() {
        return ResponseEntity.ok("Payment Successful");
    }

    @GetMapping("/history")
    public ResponseEntity<String> paymentHistory() {
        return ResponseEntity.ok("Payment History");
    }
}
