package com.eventportal.dto.response;

import lombok.Data;

@Data
public class BookingResponse {
    private Long bookingId;
    private String status;
    private Double amount;
}
