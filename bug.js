const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... database query to fetch user data ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

//Problem: The code doesn't handle non-numeric user IDs.
//If a user requests `/users/abc`, req.params.id will be 'abc',
//and the database query might fail or return unexpected results.

//In some database systems (like Postgres), this will result in a query failure.
//In others (like MongoDB), it might return an empty array or null.
//This will cause an error to appear to the user only in the latter scenario. The former scenario will result in a server error.