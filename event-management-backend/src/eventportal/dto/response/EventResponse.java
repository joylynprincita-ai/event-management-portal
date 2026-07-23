package com.eventportal.dto.response;

import lombok.Data;

@Data
public class EventResponse {
    private Long id;
    private String title;
    private String venue;
    private Double price;
}
