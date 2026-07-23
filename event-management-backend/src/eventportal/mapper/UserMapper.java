package com.eventportal.mapper;

import com.eventportal.dto.request.RegisterRequest;
import com.eventportal.entity.User;

public class UserMapper {

    private UserMapper() {}

    public static User toEntity(RegisterRequest request) {
        return User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(request.getPassword())
                .phone(request.getPhone())
                .role(request.getRole())
                .build();
    }
}
