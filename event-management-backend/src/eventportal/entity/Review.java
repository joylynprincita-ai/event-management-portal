package com.eventportal.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Review {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
 private Long id;
 @ManyToOne private User user;
 @ManyToOne private Event event;
 private Integer rating;
 @Column(length=1000)
 private String comment;
}
