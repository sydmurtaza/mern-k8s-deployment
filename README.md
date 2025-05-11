# MERN Task Management Application

A full-stack task management application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- User authentication (register, login, profile)
- Create, read, update, delete tasks
- Filter tasks by status (pending, in progress, completed)
- Task organization with priority levels
- Responsive UI for desktop and mobile devices

## Tech Stack

### Frontend
- React with TypeScript
- React Router for navigation
- React Hook Form for form handling
- Tailwind CSS for styling
- Lucide React for icons
- Axios for API requests

### Backend
- Express.js server
- MongoDB database with Mongoose
- JWT for authentication
- RESTful API design

## Getting Started

### Prerequisites

- Node.js
- MongoDB (local instance or MongoDB Atlas)

### Installation

1. Clone the repository
2. Install dependencies:

```
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```
MONGODB_URI=mongodb://127.0.0.1:27017/taskmanager
JWT_SECRET=yoursecretkey
PORT=5000
```

4. Start the development server:

```
npm run dev:full
```

This will start both the frontend and backend servers.

## API Endpoints

### Auth
- POST /api/users - Register a new user
- POST /api/users/login - Authenticate a user
- GET /api/users/profile - Get user profile (protected)

### Tasks
- GET /api/tasks - Get all tasks for the logged in user (protected)
- POST /api/tasks - Create a new task (protected)
- GET /api/tasks/:id - Get a specific task (protected)
- PUT /api/tasks/:id - Update a task (protected)
- DELETE /api/tasks/:id - Delete a task (protected)

## Project Structure

```
├── server/               # Backend code
│   ├── config/           # Database configuration
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/           # Mongoose models
│   ├── routes/           # Express routes
│   └── utils/            # Utility functions
├── src/                  # Frontend code
│   ├── api/              # API service functions
│   ├── components/       # React components
│   ├── context/          # React context providers
│   ├── pages/            # Page components
│   ├── types/            # TypeScript types
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Entry point
├── .env                  # Environment variables
└── package.json          # Dependencies and scripts
```
