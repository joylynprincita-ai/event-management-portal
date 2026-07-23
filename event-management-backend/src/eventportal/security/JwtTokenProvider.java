package com.eventportal.security;

public class JwtTokenProvider {

    public String generateToken(String username){
        return "GENERATED_JWT_TOKEN";
    }

    public boolean validateToken(String token){
        return token != null && !token.isBlank();
    }

    public String getUsernameFromToken(String token){
        return "user@example.com";
    }
}
