# User Registration Endpoint Documentation

## Endpoint: `users/register`

### Description:
This endpoint is used to register a new user in the system. It validates the input, hashes the user's password, and stores the user data in the database.

---

### Method:
`POST`

---

### Request Body:
The endpoint expects a JSON object with the following fields:

| Field     | Type   | Required | Validation                                |
|-----------|--------|----------|------------------------------------------|
| `fullName`| String | Yes      | Minimum 3 characters                     |
| `email`   | String | Yes      | Must be a valid email format             |
| `password`| String | Yes      | Minimum 6 characters                     |
| `token`   | String | No      | 
#### Example:
```json
{
  "fullName": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123",
  "token":"JWT_TOKEN",
}
