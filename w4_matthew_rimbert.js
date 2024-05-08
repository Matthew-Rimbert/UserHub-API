/*
Filename:     w4_matthew_rimbert.js
Description:  RESTful service for managing a list of users
Author:       Matthew Rimbert
Class:        ENTD261 / Scripting Languages for the Administrator
Date:         January 26 2024
Overview:     This application provides a RESTful service for managing a list of users.

Instructions: 
1. Make sure you have Node.js installed.
2. Navigate to the directory containing this script in the terminal.
3. Install dependencies using the command: npm install express
4. Run the server using the command: node w4_matthew_rimbert.js
5. Access the API endpoints using a tool like Postman or a web browser.

Example:      
GET http://localhost:3000/users
POST http://localhost:3000/users with JSON body for creating a new user.
PUT http://localhost:3000/users/:id with JSON body for updating a user.
DELETE http://localhost:3000/users/:id for deleting a user.
*/

// Import required modules
const express = require("express");
const http = require("http");

// Create an Express application
const app = express();

// Initialize data storage (model)
const users = [
  { id: 1, name: 'John Doe', age: 19 },
  { id: 2, name: 'Jill Smith', age: 31 },
  { id: 3, name: 'Mike Johnson', age: 45 }
];

// Define routes for the RESTful application
app.get("/users", (req, res) => {
  // Get list of users
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  // Get user by ID
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.post("/users", (req, res) => {
  // Add a new user
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);

  res.json(newUser);
});

app.put("/users/:id", (req, res) => {
  // Update user by ID
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.delete("/users/:id", (req, res) => {
  // Delete user by ID
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index !== -1) {
    const deletedUser = users.splice(index, 1)[0];
    res.json(deletedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Create an HTTP server and make it listen on port 3000
http.createServer(app).listen(3000, () => {
  console.log('Express server listening on port 3000');
});
