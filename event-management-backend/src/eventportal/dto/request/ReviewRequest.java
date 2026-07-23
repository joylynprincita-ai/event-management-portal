package com.eventportal.dto.request;

import lombok.Data;

@Data
public class ReviewRequest {
    private Long eventId;
    private Integer rating;
    private String comment;
}
