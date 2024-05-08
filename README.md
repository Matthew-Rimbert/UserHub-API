# User Management RESTful Service

This Node.js application provides a RESTful service for managing a list of users, leveraging the Express framework to handle routing and HTTP server functionalities.

![image](https://github.com/Matthew-Rimbert/UserHub-API/assets/169205418/dd67a0ff-0d23-4adb-bf4c-6217401f97b9)

## Features

- RESTful API to create, read, update, and delete user data.
- In-memory data storage for users.
- Express server setup for handling requests.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Basic knowledge of JavaScript and RESTful services.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Matthew-Rimbert/User-Management-Service.git
```

2. Navigate to Projecct Directory
```bash
cd User-Management-Service
```

3. Install Dependencies
```bash
npm install express
```
### Running the Server
To start the server, run the following command:

```bash
node w4_matthew_rimbert.js
```

The server will start on **port 3000**. You can access it at *http://localhost:3000*.

<div align="center">
  
![RESTAPI](https://github.com/Matthew-Rimbert/UserHub-API/assets/169205418/0717a92c-03f4-4408-ae9d-ded1d2434602)

## API Endpoints

Below are the available endpoints of the UserHub API, detailing how to interact with the user data.

| HTTP Method | Endpoint        | Description                           | Operation         |
|-------------|-----------------|---------------------------------------|-------------------|
| GET         | `/users`        | Retrieve a list of all users.         | Read all users    |
| GET         | `/users/:id`    | Retrieve details of a specific user.  | Read a single user|
| POST        | `/users`        | Add a new user.                       | Create a user     |
| PUT         | `/users/:id`    | Update an existing user by ID.        | Update a user     |
| DELETE      | `/users/:id`    | Delete a user by ID.                  | Delete a user     |

These endpoints provide full **CRUD (Create, Read, Update, Delete)** functionality for managing user data within the application.

</div>

<div align="center">

## Examples

Below are example commands for using the UserHub API endpoints.

| Endpoint        | Example Command                                                                 |
|-----------------|---------------------------------------------------------------------------------|
| GET /users      | `curl http://localhost:3000/users`                                              |
| GET /users/:id  | `curl http://localhost:3000/users/1`                                            |
| POST /users     | `curl -X POST -H "Content-Type: application/json" -d '{"name":"Alice","age":30}' http://localhost:3000/users` |
| PUT /users/:id  | `curl -X PUT -H "Content-Type: application/json" -d '{"name":"Alice","age":31}' http://localhost:3000/users/1` |
| DELETE /users/:id | `curl -X DELETE http://localhost:3000/users/1`                                  |

</div><br>

Below is an example of the Command: `curl http://localhost:3000/users` in both the command line and web browser.<br>

![Restful_Service](https://github.com/Matthew-Rimbert/UserHub-API/assets/169205418/e2e2c128-4f8b-4daf-aac9-f44ec351ff40)
