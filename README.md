
# Workshop Users API

The Persons API is a RESTful API for managing user data in an application.

## Table of Contents

- [Project Description](#project-description)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)

## Project Description

The Persons API serves as the backend for an application, allowing users to create, read, update, and delete user records. It provides a simple and efficient way to manage user data for the application.

## Getting Started

To get started with the Workshop Users API, follow the instructions below.

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- Node.js
- MongoDB

## Usage

To use the Workshop Users API, follow the guidelines below.

## API Endpoints

The Workshop Users API provides the following endpoints:

- `GET /api/users`: Retrieve a list of all users.
- `POST /api/users`: Create a new user.
- `GET /api/users/:id`: Retrieve a user by ID.
- `PUT /api/users/:id`: Update a user by ID.
- `DELETE /api/users/:id`: Delete a user by ID.


## Database Schema

The database schema for the Users API includes the following fields:

- `user_id` (Number): Unique user identifier.
- `name` (String): User's name.
