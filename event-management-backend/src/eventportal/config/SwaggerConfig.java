package com.eventportal.config;

import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class SwaggerConfig {

    @Bean
    public List<Server> servers() {
        Server local = new Server();
        local.setUrl("http://localhost:8080");
        local.setDescription("Local Development Server");
        return List.of(local);
    }
}
