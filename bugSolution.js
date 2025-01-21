const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate that userId is a number
  if (isNaN(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }
  // ... database query to fetch user data ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});
//Improved error handling: The code now explicitly checks if userId is a valid number using isNaN. 
//If the ID is invalid, it sends a 400 Bad Request response.
//This prevents unexpected behavior and provides more informative error messages to the client.