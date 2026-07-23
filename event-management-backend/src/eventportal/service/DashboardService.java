package com.eventportal.service;

import com.eventportal.dto.response.DashboardResponse;

public interface DashboardService {

    DashboardResponse getAdminDashboard();

    DashboardResponse getOrganizerDashboard(Long organizerId);

    DashboardResponse getUserDashboard(Long userId);
}
