# isms-backend-project
This is a backend API built with Express and MongoDB.
It handles form submissions and login requests for a frontend cat application. It can be tested using apps like Postman.

The API allows users to:
- Check server status
- Submit form data
- Simulate login functionality
- ## Live API
https://isms-backend-project-au4h.onrender.com

## API Endpoints

### 1. Check Server Status
GET /api/server/status

Response:
{
  "msg": "server is up and ready!"
}

---

### 2. Submit Form
POST /api/submit-form

Body:
{
  "username": "Jane",
  "password": "12345"
}

Response:
{
  "statusCode": 201,
  "msg": "Cat Form submission successful!",
  "data": {
    "username": "Jane",
    "password": "12345"
  }
}

---

### 3. Login
POST /api/submit-form/login

Response:
{
  "status": 200,
  "msg": "Login successful!"
}

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Dotenv
