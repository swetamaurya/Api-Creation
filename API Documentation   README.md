**API documentation**
**User API**
**Endpoints**

**GET** /
**Description:** Status check endpoint.
**Response:** "How it works?" with status code 200.

**GET** /users
**Description:** Retrieve all users.
**Response:** JSON array of user objects with status code 200.

**POST** /users
**Description:** Create a new user.
**Request Body:**
json
Copy code
{
  "name": "string",
  "email": "string",
  "password": "string"
}
**Response:** "User created successfully" with status code 200.

**DELETE** /users/:userId
**Description:** Delete a user by userId.
**URL Params:**
**userId:** The ID of the user to delete.
**Response:** JSON object of the deleted user with status code 200, or "User not found" with status code 400 if the user does not exist.

**post** /users/:userId
**Description:** Update a user's email by userId.
**URL Params:**
**userId:** The ID of the user to update.
**Request Body:**
json
Copy code
{
  "email": "string"
}
**Response:** JSON object of the updated user with status code 200, or "User not found" with status code 400 if the user does not exist.
