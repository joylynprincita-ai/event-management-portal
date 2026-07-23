package com.eventportal.security;

import org.springframework.security.core.userdetails.*;

public class CustomUserDetailsService implements UserDetailsService {
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        throw new UsernameNotFoundException("User not implemented");
    }
}
