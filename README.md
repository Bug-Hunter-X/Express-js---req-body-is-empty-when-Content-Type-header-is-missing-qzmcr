# Express.js - req.body is empty when Content-Type header is missing

This repository demonstrates a common issue in Express.js applications where the request body (req.body) is empty when the Content-Type header is missing or incorrect in the request.

## Bug Description

The Express.js application fails to parse the JSON request body if the Content-Type header is missing or is set to an incorrect value (e.g., 'text/plain' instead of 'application/json').  As a result, `req.body` will be an empty object, leading to unexpected behavior.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install` to install the required dependencies.
3. Run `node bug.js` to start the server.
4. Send a POST request to `http://localhost:3000/data` with a JSON payload in the body.  Ensure the Content-Type header is missing or incorrect (e.g., 'Content-Type: text/plain').
5. Observe that the server logs an empty object for `req.body`, and the response is 'OK'.

## Solution

The problem is resolved by ensuring that the body-parser middleware is correctly configured to handle JSON requests, including cases where the `Content-Type` header is missing or improperly set. This is done by setting the `type` option in `express.json()` to match any request content type. Refer to `bugSolution.js` for the solution.