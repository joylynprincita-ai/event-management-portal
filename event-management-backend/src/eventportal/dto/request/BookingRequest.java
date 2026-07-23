package com.eventportal.dto.request;

import lombok.Data;

@Data
public class BookingRequest {
    private Long eventId;
    private Integer quantity;
}
