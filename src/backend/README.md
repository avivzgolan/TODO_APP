# 📋 Duty Manager Backend

This is the backend for the **Duty Manager** application, a simple RESTful API that handles CRUD operations for managing "Duties" (To-do items). The backend is built using **Node.js**, **Express**, and **TypeScript** in strict mode, and uses a **PostgreSQL** database for data persistence.

## 📁 Project Structure

The project is structured as follows:

```
root                       # Root directory of the project
├── init.sql               # SQL initialization script for setting up the database
├── jest.config.js         # Configuration file for Jest testing framework
├── package.json           # Project metadata, scripts, and dependencies
├── README.md              # Documentation for the project
├── tsconfig.json          # TypeScript configuration file for the project
├── .gitignore             # Specifies files and directories to ignore in Git
└── src                    # Source directory containing application code
    ├── controllers        # Contains controller logic for handling requests and business logic
    ├── models             # Defines database models and schemas
    ├── routes             # Contains API route definitions for handling HTTP requests
    ├── test               # Directory for unit and integration tests
    ├── app.ts             # Main entry point for the Express application
    └── database.ts        # Handles database connection and initialization logic
```

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

Create a `.env` file in the root of your project and define the following environment variables:

```bash
PORT=4000
DATABASE_URL=postgres://username:password@localhost:5432/duties_db
```

Replace `username`, `password`, and `duties_db` with your PostgreSQL credentials.

### 4. Initialize the Database

Make sure your PostgreSQL instance is running, then run the SQL initialization script:

```bash
psql -U postgres -f init.sql
```

This will create the `duties_db` database and the necessary table for storing duties.

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
