# EmployWise User Management Dashboard

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern user management dashboard built with React and the Reqres API, featuring authentication, CRUD operations, and sleek UI animations.

![Dashboard Preview](https://via.placeholder.com/800x400.png?text=Dashboard+Preview) <!-- Add real screenshot -->

## Features

- 🔐 JWT Authentication
- 📃 Paginated User Listing
- ✏️ User Editing & Deletion
- 📱 Fully Responsive Design
- ✨ Modern UI with Animations
- ⚡ Lazy Loading Components
- 🛠️ Error Handling & Form Validation
- 🔄 Real-time State Management
- 🌓 Dark Mode Aesthetic
- 🔗 GitHub Source Code Integration

## Getting Started

### Prerequisites
- Node.js ≥16.x
- npm ≥9.x

### Installation
```bash
git clone https://github.com/yourusername/employwise-dashboard.git
cd employwise-dashboard
npm install
npm run dev
```


## Usage
1. Login
   
   Use demo credentials:

   ```bash
    Email: eve.holt@reqres.in
    Password: cityslicka
   ```

2. User management
   
   - Browse paginated user list
   - Edit user details with inline form
   - Delete users with confirmation dialog

3. Navigation

   - Protected routes for authenticated users
   - Responsive navbar with profile dropdown
   - Logout functionality

4. Tech Stack

   - Frontend:

     React | TypeScript | Tailwind CSS
React Router | Axios | Framer Motion
react-toastify | Heroicons

   - Backend:
  
     Reqres.in Mock API

   - Build Tools:

      Vite | npm

## API Endpoints

| Method | Endpoint | Description |
| ---- | ---- | ---- |
| POST | /api/login | User Authentication |
| GET | /api/users?page=1 | Get paginated Users |
| PUT | /api/users/{id} | Update user details |
| DELETE | /api/user/{id} | Delete User |

## Project Structure

```bash
src/
├── components/       # Reusable components
├── pages/            # Route-based pages
├── services/         # API service layer
├── context/         # React context providers
├── lib/            # Helper functions & constants
└── App.tsx           # Main application router
```

## Key Components

- #### Authentication System
  
  JWT token storage with React Context

- #### Protected Routes

  Route guarding for authenticated users

- #### Animated UI

  Framer Motion animations and transitions

- #### Modern Loading States

  Skeleton loaders and progress indicators

- #### Error Handling

  Toast notifications and error boundaries