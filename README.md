# Literature Auctions 📜

![screenshot](frontend/web-app/public/literature_auctions.png)

## Project Description

**Literature Auctions** is a microservices-based web application designed to enable **real-time online auctions for literature and books**. The system empowers users to **search, bid, and receive notifications** about rare books, manuscripts, and other literary works. Built using a combination of modern technologies like **ASP.NET Core**, **Next.js**, and **RabbitMQ**, the app delivers a scalable, event-driven experience for both buyers and sellers.

This project follows a **microservice architecture**, providing modularity, scalability, and efficient development and deployment.

## Services (Microservices)

- **AuctionService** – Handles auction creation, listing, and lifecycle management.
- **BiddingService** – Manages bidding logic and bid placement.
- **SearchService** – Full-text and filtered search functionality over auctions.
- **NotificationService** – Sends real-time notifications messages.
- **IdentityService** – Handles user authentication, authorization, and account management.
- **GatewayService** – API Gateway routing requests to the appropriate services and aggregating responses.
- **Contracts** – Defines shared models and message contracts across services.

## Technologies Used

- **ASP.NET Core** – Backend framework for building scalable REST and gRPC services.
- **Next.js** – React framework for a performant, server-rendered frontend.
- **Flowbite React** – UI library built on TailwindCSS for responsive, modern interfaces.
- **RabbitMQ** – Message broker used for asynchronous communication between services.
- **MongoDB** – NoSQL database used by services like Notification and Search.
- **PostgreSQL** – Relational database used by Auction and Bidding services.
- **Docker** – Containerization for each microservice and database.
- **gRPC** – High-performance communication protocol used for internal service-to-service calls.
- **XUnit** – Unit testing framework used for robust test coverage.

## Features

- 🧑‍💼 **User Authentication** and Role-based Authorization (via IdentityService)
- 📚 **Create & Manage Auctions** with real-time bidding
- 🔎 **Search** through active and historical auctions
- 📩 **Real-Time Notifications** for bidding updates and auction outcomes
- 🛡️ **Secure APIs** exposed via GatewayService
- 🔗 **Inter-service communication** via RabbitMQ and gRPC
- 🧪 **Unit Testing** using XUnit for high reliability

## Architecture Overview

This project follows **event-driven microservices** principles:

- **Service Bus Communication**: Event publishing and subscribing via **RabbitMQ**.
- **Service Isolation**: Each service is independently deployable and containerized using **Docker**.
- **Database per Service**: Services use dedicated data stores (MongoDB or PostgreSQL).
- **Contract-Driven Development**: Shared message contracts defined in the `Contracts` library.

## Installation and Setup

> 🐳 This project is fully containerized. Docker and Docker Compose are recommended for setup.

### Prerequisites

- **Docker** & **Docker Compose**
- **.NET SDK** (for local development and testing)
- **Node.js** v14+ (for Next.js frontend)

### Running the Application

**Clone the Repository**

**Run All Services with Docker Compose**
  - Run the following command:
    ```bash
    docker-compose up --build
    ```

**Backend (ASP.NET Core)**
   - Navigate to the backend directory.
   - Run the following command:
     ```bash
     dotnet run
     ```

**Frontend (Next.js)**
   - Navigate to the frontend directory.
   - Install dependencies by running:
     ```bash
     npm install
     ```
   - Then start the frontend application:
     ```bash
     npm run dev
     ```

**Testing**
   - Run unit tests:
     ```bash
     cd tests/AuctionService.Tests
     dotnet test
     ```

### Author
- [Kacper Ludwiczak](https://github.com/KacperLudwiczak) - Software Developer
