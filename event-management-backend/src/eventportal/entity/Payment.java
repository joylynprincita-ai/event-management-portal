package com.eventportal.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Payment {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
 private Long id;
 @OneToOne private Booking booking;
 private String paymentId;
 private Double amount;
 private String status;
}
