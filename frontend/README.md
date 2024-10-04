# 📝 Duty Manager Frontend

This is the frontend application for the **Duty Manager**, a simple to-do list application where each to-do item is referred to as a "Duty". It allows users to add, edit, delete, and view duties. The application is built using **React 18**, **TypeScript**, and **React Hooks**.

## 📁 Project Structure

The project is structured as follows:

```
root
├── public              # Public static assets (HTML template, favicon)
├── src
│   ├── components      # Reusable UI components like DutyList and DutyItem
│   ├── services        # API interaction with the backend
│   ├── App.tsx         # Main application component
│   ├── index.tsx       # Entry point for the React app
│   ├── App.css         # Global styles
│   └── index.css       # Main index styling
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
├── .gitignore          # Files and directories to ignore in Git
└── README.md           # Project documentation
```

---

## 🛠️ Tech Stack

- **React 18**: JavaScript library for building user interfaces.
- **TypeScript**: Statically typed JavaScript.
- **Axios**: HTTP client for API calls.
- **React Testing Library**: For unit testing React components.
- **Jest**: Testing framework for unit tests.

---

## ⚙️ Setup and Installation

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (or **yarn**)

### 1. Clone the repository

```bash
git clone git@github.com:avivzgolan/TODO_APP.git
cd TODO_APP/frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the application

Make sure your backend server is running on `http://localhost:4000`. Then start the frontend:

```bash
npm start
```

This will launch the app at `http://localhost:3000`.

---

## 🌐 API Integration

The frontend communicates with the backend RESTful API to manage duties. The API base URL is set to `http://localhost:4000`.

### API Endpoints:

- **GET** `/api/duties`: Retrieve all duties.
- **POST** `/api/duties`: Create a new duty.
- **PUT** `/api/duties/:id`: Update an existing duty.
- **DELETE** `/api/duties/:id`: Delete a duty by its ID.

To update the API base URL or configure the API endpoints, modify the `services/api.ts` file.

---

## 🧪 Running Tests

Unit tests are written using **Jest** and **React Testing Library**. To run the tests:

```bash
npm test
```

---

## 🖥️ Application Features

- **Add Duty**: A form to add new duties.
- **Edit Duty**: Modify existing duties using the edit button.
- **Delete Duty**: Remove a duty from the list.
- **View All Duties**: Displays all the duties in a list format.

---

## 🎨 Styling

The application utilizes the **Ant Design (AntD)** library for styling, which provides a set of high-quality React components out of the box.

To customize AntD styles, you can refer to the [Ant Design Documentation](https://ant.design/docs/react/introduce) for details on theme customization and component usage.

---

## 🔧 Development Notes

- The app uses **Axios** for API calls to the backend.
- Error handling is in place to manage unsuccessful operations.
- The app is fully functional with basic validation on forms (e.g., duty name must not be empty).
- Ensure that the backend server (Duty Manager Backend) is running before testing the application.

---

## 👥 Contributors

- **Aviv Golan** - [GitHub Profile](https://github.com/avivzgolan)

---
