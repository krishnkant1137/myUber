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
| `fullname`| String | Yes      | Minimum 3 characters                     |
| `email`   | String | Yes      | Must be a valid email format             |
| `password`| String | Yes      | Minimum 6 characters                     |
| `token`   | String | No      |     - 
#### Example:
```json
{
  "fullname": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123",
  "token":"JWT_TOKEN",
}


## Endpoint: `users/login`

### Description:
This endpoint is used to register a new user in the system. It validates the input, hashes the user's password, and stores the user data in the database.

---

### Method:
`POST`

---y

### Request Body:
The endpoint expects a JSON object with the following fields:

| Field     | Type   | Required | Validation
|-----------|--------|----------|               
                   
| `email`   | String | Yes      | Must be a valid email format             |
| `password`| String | Yes      | Minimum 6 characters                     |
| `token`   | String | No      |     - 
#### Example:
```json
{
  "email": "johndoe@example.com",
  "password": "password123",
  "token":"JWT_TOKEN",
}

User Profile Endpoint
Endpoint: /users/profile
Description: Retrieves the profile of the authenticated user.

Method: GET
Headers:
Key	Value
Authorization	Bearer <JWT_TOKEN>
Response Example:

{
  "user": {
    "_id": "1234567890",
    "fullname": "John Doe",
    "email": "johndoe@example.com"
  }
}
User Logout Endpoint
Endpoint: /users/logout
Description: Logs out the user by clearing the authentication token and blacklisting it.

Method: GET
Headers:
Key	Value
Authorization	Bearer <JWT_TOKEN>
Response Example:

{
  "message": "Logged out"
}


 Register Captain
Endpoint: POST /register
Description: Register a new captain, including vehicle details.

Request Body (JSON):

json
Copy code

{
  "fullname": "John Doe",
  "email": "john@example.com",
  "password": "securepassword",
  "vehicle": {
    "color": "Blue",
    "plate": "ABC-1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}

Field	      Type    	Required	    Validation
fullname	  String	Yes	Minimum 3   characters
email      	String	Yes	Must be a   valid email
password	  String	Yes	Minimum 6   characters
vehicle.color	String	Yes	Minimum 3  characters
vehicle.plate	String	Yes	Minimum 3  characters
vehicle.capacity Number	Yes	Minimum value of 1
vehicle.vehicleType	String	Yes	One of car, motorcycle, auto

Response:

201 Created:
json
Copy code
{
  "message": "Captain registered successfully",
  "captain": {
    "_id": "unique-id",
    "fullname": "John Doe",
    "email": "john@example.com",
    "vehicle": {
      "color": "Blue",
      "plate": "ABC-1234",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"
  }
}


Get Captain Profile
Endpoint: GET /profile
Description: Retrieves the profile of the authenticated captain.

Headers:

Key              	Value
Authorization	   Bearer <JWT_TOKEN>

Response:

200 OK:
json
Copy code
{
  "captain": {
    "_id": "unique-id",
    "fullname": "John Doe",
    "email": "john@example.com",
    "vehicle": {
      "color": "Blue",
      "plate": "ABC-1234",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"
  }
}

 Update Captain Status
Endpoint: PATCH /status
Description: Update the status of a captain (e.g., active, inactive).

Headers:

Key	             Value
Authorization	 Bearer <JWT_TOKEN>

Request Body:

{
  "status": "active"
}
Field  	Type	 Required	  Validation
status	String	Yes	    Must be either active or inactive  

Response:

200 OK:
json
Copy code
{
  "message": "Status updated successfully",
  "status": "active"
}

Logout Captain
Endpoint: GET /logout
Description: Logs out the captain and invalidates their token.

Headers:

Key	              Value
Authorization  	Bearer <JWT_TOKEN>

Response:

200 OK:
json
Copy code
{ "message": "Logged out successfully" }