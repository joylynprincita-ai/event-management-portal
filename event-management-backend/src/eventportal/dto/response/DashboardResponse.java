package com.eventportal.dto.response;

import lombok.Data;

@Data
public class DashboardResponse {
    private Long totalUsers;
    private Long totalEvents;
    private Long totalBookings;
    private Double totalRevenue;
}
