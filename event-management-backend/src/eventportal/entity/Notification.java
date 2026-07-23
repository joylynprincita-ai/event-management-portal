package com.eventportal.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Notification {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
 private Long id;
 private String title;
 @Column(length=2000)
 private String message;
 @ManyToOne private User user;
 private Boolean isRead;
}
