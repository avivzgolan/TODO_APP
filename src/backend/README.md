# 📋 Duty Manager Backend

This is the backend for the **Duty Manager** application, a simple RESTful API that handles CRUD operations for managing "Duties" (To-do items). The backend is built using **Node.js**, **Express**, and **TypeScript** in strict mode, and uses a **PostgreSQL** database for data persistence.

## 🚀 Quick Setup Guide

Get up and running in minutes:

1. **Clone the repository:**
   ```bash
   git clone git@github.com:avivzgolan/TODO_APP.git
   cd TODO_APP
   ```

2. **Make sure required services are running:**
   - Docker service is running
   - PostgreSQL service is running

3. **Configure environment variables:**
   ```bash
   # Update the .env file in the backend directory
   # Set your database credentials and other configuration
   cd src/backend
   cp .env.example .env  # If .env.example exists
   # Edit .env file with your actual values
   ```

4. **Run with Docker Compose:**
   ```bash
   docker compose -f configs/docker/docker-compose.yml up --build
   ```

5. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:4000

---

## 🚀 Features

- **Create Duty**: Add a new duty.
- **Read Duties**: Get a list of all duties.
- **Update Duty**: Edit an existing duty.
- **Delete Duty**: Remove a duty.

---

## Tech Stack

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for handling routes and requests.
- **TypeScript**: Statically typed JavaScript.
- **PostgreSQL**: Relational database system.
- **Jest**: Testing framework for unit tests.
- **Axios**: HTTP client for API interactions.

---

## ⚙️ Setup and Installation

### Prerequisites

- **Node.js** (v16 or higher)
- **PostgreSQL** (Ensure it's running locally or in a cloud service)
- **TypeScript** installed globally (`npm install -g typescript`)

### 1. Clone the repository

```bash
git clone git@github.com:avivzgolan/TODO_APP.git
cd TODO_APP/backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of your backend project and define environment variables following the example file .env.example

### 4. Initialize the Database

Make sure your PostgreSQL instance is running

### 5. Run the server

```bash
npm start
```

The API will be accessible at `http://localhost:4000`.

---

## 🧪 Running Tests

To run unit and integration tests using Jest:

```bash
npm test
```

---

## 📋 API Endpoints

### Base URL: `http://localhost:4000/api/duties`

| Method | Endpoint | Description             | Request Body                 |
| ------ | -------- | ----------------------- | ---------------------------- |
| GET    | `/`      | Retrieve all duties     |                              |
| POST   | `/`      | Create a new duty       | `{ "name": "New Duty" }`     |
| PUT    | `/:id`   | Update an existing duty | `{ "name": "Updated Duty" }` |
| DELETE | `/:id`   | Delete a duty by its ID |                              |

### Example Requests

#### Create Duty (POST `/api/duties`)

```bash
curl -X POST http://localhost:4000/api/duties -H 'Content-Type: application/json' -d '{"name": "Buy Groceries"}'
```

#### Update Duty (PUT `/api/duties/:id`)

```bash
curl -X PUT http://localhost:4000/api/duties/1 -H 'Content-Type: application/json' -d '{"name": "Go Shopping"}'
```

#### Delete Duty (DELETE `/api/duties/:id`)

```bash
curl -X DELETE http://localhost:4000/api/duties/1
```

---

## 🔐 Security Considerations

- **Validation**: Basic validation is in place to ensure that a duty name is provided when creating or updating a duty.
- **Error Handling**: The app returns appropriate HTTP status codes for success and failure scenarios (e.g., 404 for not found, 400 for bad requests).

---

## 📝 Additional Notes

- Ensure your PostgreSQL database is running before starting the server.
- Modify the `init.sql` file to change database schema or settings as required.

---

## 👥 Contributors

- **Aviv Golan** - [GitHub Profile](https://github.com/avivzgolan)

---

Feel free to update this file as the project evolves! Let me know if you need further clarification on any part.