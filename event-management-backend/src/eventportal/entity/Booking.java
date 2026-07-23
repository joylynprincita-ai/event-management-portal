package com.eventportal.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Booking {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
 private Long id;
 @ManyToOne private User user;
 @ManyToOne private Event event;
 private Integer quantity;
 private Double amount;
 private LocalDateTime bookingDate;
 private String status;
}
