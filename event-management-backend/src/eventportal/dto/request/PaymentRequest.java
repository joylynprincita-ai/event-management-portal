package com.eventportal.dto.request;

import lombok.Data;

@Data
public class PaymentRequest {
    private Long bookingId;
    private Double amount;
}
