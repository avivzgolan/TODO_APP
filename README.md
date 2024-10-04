````markdown
# TODO_APP

TODO_APP is a full-stack application designed for managing duties or tasks. The application consists of two main services:

- **Frontend**: A React-based user interface for managing your duties.
- **Backend**: An Express-based API for handling CRUD operations on duties, backed by a PostgreSQL database.

## Project Structure

The project is structured into two main directories: `frontend` and `backend`. Each service has its own readme file with detailed information about setup, configuration, and usage.

- **Frontend**: [Frontend README](./frontend/README.md)
- **Backend**: [Backend README](./backend/README.md)

## Features

- Create, read, update, and delete duties.
- User-friendly interface using Ant Design (AntD).
- Persistent data storage using PostgreSQL.

## Quick Setup with Docker Compose

For a quick setup, you can use Docker Compose to build and run both the frontend and backend services along with the PostgreSQL database. Here’s how:

1. Ensure that you have [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed on your machine.

2. Clone the repository:

   ```bash
   git clone git@github.com:avivzgolan/TODO_APP.git
   cd TODO_APP
   ```
````

3. Run the following command to build the images and start the services:

   ```bash
   docker-compose up --build
   ```

4. Access the application:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:4000](http://localhost:4000)

---

Feel free to reach out if you have any questions or need further assistance!

```

### Instructions for Usage

- **`<git@github.com:avivzgolan/TODO_APP.git>`**:

```
