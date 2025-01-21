# Silent Failure in Express.js Route Handler

This repository demonstrates a common but subtle bug in Express.js route handlers: silent failure when dealing with invalid parameter types.

The `bug.js` file contains a route handler that fetches user data based on a provided ID.  However, it lacks proper input validation and error handling.  If a non-numeric ID is passed, the code may fail silently, leading to unexpected behavior or server errors.

The `bugSolution.js` file provides a corrected version with improved error handling and input validation.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install` to install dependencies.
4. Run `node bug.js` and test with valid and invalid user IDs using tools such as curl or Postman.