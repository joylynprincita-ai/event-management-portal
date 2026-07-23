package com.eventportal.dto.request;

import lombok.Data;

@Data
public class EventRequest {
    private String title;
    private String description;
    private String venue;
    private Double price;
    private Integer availableSeats;
    private Long categoryId;
}
