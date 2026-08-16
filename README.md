# RESTful-API-Microservice
This project is a RESTful API microservice built using Node.js and Express.js. It manages product resources and provides CRUD operations including Create, Read, Update, and Delete.
Week 4 – RESTful API Microservice
Project Overview

This project is a RESTful API microservice built using Node.js and Express.js. It manages product resources and provides CRUD operations including Create, Read, Update, and Delete.

Technologies Used
Node.js
Express.js
JavaScript
CORS
Zod
Postman
Features
RESTful API architecture
Product CRUD operations
CORS middleware
JSON body parsing
Request logging middleware
Zod payload validation
Input sanitization
Global error handling
404 route handling
Structured JSON responses
Proper HTTP status codes
Installation

Install the required dependencies:

npm install
Running the Server

Start the server:

node app.js

The API runs at:

http://localhost:5000
API Endpoints
Get All Products
GET /api/products
Get Product by ID
GET /api/products/:id
Create Product
POST /api/products

Example request:

{
  "name": "Laptop",
  "price": 120000,
  "category": "Electronics",
  "description": "High performance laptop"
}
Update Product
PUT /api/products/:id
Delete Product
DELETE /api/products/:id
Validation

Product data is validated using Zod.

Validation rules:

Product name must contain at least 2 characters.
Price must be greater than 0.
Category must contain at least 2 characters.
Description must contain at least 5 characters.
String inputs are trimmed for sanitization.

Invalid requests return:

400 Bad Request
Error Handling

The API includes global error handling and returns structured JSON responses.

Supported status codes:

200 OK
201 Created
400 Bad Request
404 Not Found
500 Server Error

A test error endpoint is available:

GET /api/test-error
Middleware

The application uses:

CORS middleware
JSON body parser
Request logging middleware
Validation middleware
Global error-handling middleware
API Testing

The API was tested using Postman, including:

GET requests
POST requests
PUT requests
DELETE requests
Validation errors
404 errors
500 server errors
Project Structure
Week4-REST-API/
├── app.js
├── package.json
├── package-lock.json
├── README.md
├── routes/
├── controllers/
├── schemas/
└── src/
    └── middleware/
Conclusion

This project demonstrates backend architecture and REST API design using Node.js and Express.js, including CRUD operations, middleware, validation, sanitization, error handling, and API testing.
