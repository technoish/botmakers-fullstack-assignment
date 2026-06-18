# BotLeague Frontend

A modern React-based frontend developed for the BotMakers Full Stack Developer Internship Assignment.

## Features

* Responsive Landing Page
* Hero Section
* Competitions & Events Section
* User Journey Section
* Categories & Competition Disciplines
* Why Register Section
* Join Ecosystem Section
* Login Page
* Signup Page
* Protected Dashboard
* JWT Authentication Integration
* Mobile Responsive Design

## Tech Stack

* React.js
* React Router DOM
* Tailwind CSS
* Axios
* React Icons

## Project Structure

```bash
src/
│
├── components/
│   ├── home/
│   ├── layout/
│   
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── Dashboard.jsx
│
│
├── App.jsx
└── main.jsx
```

## Installation

Clone the repository:

```bash
git clone https://github.com/technoish/botmakers-fullstack-assignment.git
```

Move to frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

## Environment Configuration

Create a `.env` file:

```env
VITE_API_URL=http://localhost:8000
```

## Authentication Flow

### Registration

* User enters name, email and password
* Data is sent to backend API
* JWT token is returned
* User is redirected to Dashboard

### Login

* User enters credentials
* Backend validates user
* JWT token is stored in Local Storage
* User is redirected to Dashboard

### Protected Routes

Dashboard is protected using JWT authentication. Users without a valid token are redirected to the Login page.

## Dashboard Features

* User Welcome Section
* Profile Information
* Competition Statistics
* Upcoming Events
* Logout Functionality

## API Endpoints Used

### Register

```http
POST /api/auth/register
```

### Login

```http
POST /api/auth/login
```

### Profile

```http
GET /api/auth/profile
```

## Future Improvements

* Event Registration System
* Competition Management
* Real-time Rankings
* User Profile Editing
* Admin Dashboard
* Event Search & Filtering

## Author

Nisha Kumari

