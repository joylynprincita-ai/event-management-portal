# Event Management Portal

A full-stack **Event Management Portal** built using **React.js**, **Spring Boot**, and **MySQL**. This platform enables users to discover and book events, organizers to create and manage events, and administrators to monitor the entire system through a secure dashboard.

---

## Project Overview

The Event Management Portal is designed to simplify event planning and ticket booking by providing three user roles:

* **User** – Browse events, search events, book tickets, and manage bookings.
* **Organizer** – Create and manage events, attendees, and bookings.
* **Admin** – Manage users, organizers, events, payments, reports, and analytics.

---

## Technologies Used

### Frontend

* React.js
* Vite
* Redux Toolkit
* Tailwind CSS
* React Router
* Axios

### Backend

* Java 21
* Spring Boot 3
* Spring Security
* Spring Data JPA
* Maven

### Database

* MySQL

### Authentication

* JWT Authentication
* BCrypt Password Encryption
* Role-Based Access Control (RBAC)

### Tools

* Git & GitHub
* Postman
* IntelliJ IDEA
* VS Code

### Deployment

* AWS EC2
* Docker (Optional)
* Nginx (Optional)

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Role-Based Access Control

### User Features

* Browse Events
* Search & Filter Events
* View Event Details
* Book Tickets
* View Booking History
* Download QR Code Tickets
* Submit Reviews & Ratings

### Organizer Features

* Create Events
* Edit Events
* Delete Events
* Upload Event Images
* Manage Attendees
* View Revenue Dashboard

### Admin Features

* Dashboard Analytics
* Manage Users
* Manage Organizers
* Manage Events
* Payment Monitoring
* Reports & Statistics

---

## Project Description

The Event Management Portal is a full-stack web application that streamlines event organization and ticket booking. Users can browse and reserve tickets for events, organizers can publish and manage events, and administrators can oversee platform operations using a secure role-based system built with React, Spring Boot, and MySQL.

---

## Project Structure

```text
event-management-portal/
│
├── backend/
│   ├── src/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── entity/
│   ├── security/
│   └── config/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   └── assets/
│
├── database/
│
└── README.md
```

---

## Database

* Users
* Roles
* Events
* Categories
* Bookings
* Payments
* Reviews
* Notifications

---

## REST APIs

### Authentication

* `POST /api/auth/register`
* `POST /api/auth/login`
* `POST /api/auth/logout`

### Events

* `GET /api/events`
* `GET /api/events/{id}`
* `POST /api/events`
* `PUT /api/events/{id}`
* `DELETE /api/events/{id}`

### Bookings

* `POST /api/bookings`
* `GET /api/bookings`
* `DELETE /api/bookings/{id}`

### Payments

* `POST /api/payments`
* `GET /api/payments/history`

---

## Development Roadmap

### Phase 1

* Project Setup
* Spring Boot Configuration
* React Setup
* MySQL Integration
* JWT Authentication

### Phase 2

* User & Role Management
* Event Categories
* Profile Management

### Phase 3

* Event Management
* Image Upload
* Event Search & Filtering

### Phase 4

* Ticket Booking System
* Seat Management
* Booking History

### Phase 5

* Payment Gateway Integration
* QR Code Generation
* Email Notifications

### Phase 6

* Admin Dashboard
* Organizer Dashboard
* Reports & Analytics

### Phase 7

* Testing
* Docker
* AWS Deployment
* Performance Optimization

---

## Installation

### Clone Repository

```bash
git clone https://github.com/joylyn/event-management-portal.git
cd event-management-portal
```

### Backend

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Future Enhancements

* Razorpay Payment Gateway
* QR Code Scanner
* Google Maps Integration
* Email & SMS Notifications
* AI Event Recommendations
* Multi-language Support
* Docker Deployment
* CI/CD with GitHub Actions

---

## License

This project is developed for educational and learning purposes.

---

## Submitted By

**Joylyn Princita Fernandes**

**Intern ID: CITS4025**
