package com.eventportal.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.*;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Event {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
 private Long id;
 private String title;
 @Column(length=2000)
 private String description;
 private LocalDate eventDate;
 private LocalTime eventTime;
 private String venue;
 private Double price;
 private Integer availableSeats;
 private String imageUrl;
 @ManyToOne
 private Category category;
 @ManyToOne
 private User organizer;
}
