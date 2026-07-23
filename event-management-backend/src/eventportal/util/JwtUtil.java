package com.eventportal.util;

public class JwtUtil {

    public String generateToken(String username){
        return "JWT_TOKEN";
    }

    public boolean validateToken(String token){
        return token!=null && !token.isBlank();
    }

    public String getUsername(String token){
        return "user@example.com";
    }
}
