# Login Application

# output 

![page 1](https://github.com/user-attachments/assets/7a850f9b-fb0d-49c9-8366-37624f15578f)

# Registration Page
![page 2](https://github.com/user-attachments/assets/94398a82-64f7-4e5a-8e92-2c7cb8f932c3)

# Login Page
![page 3](https://github.com/user-attachments/assets/edffa10d-7234-4641-8220-5f3a5c60ebc7)


A simple React-based Login application with a modern design. This project allows users to log in and navigate to a dashboard upon successful authentication.

---

## Features

- Responsive design with a clean and user-friendly interface.
- Login form with email and password validation.
- Seamless navigation using React Router.
- Backend integration for authentication using Axios.
## User Information Storage

This project saves user information to the browser's `localStorage` upon registration or login using data received from Node.js APIs. 

### How It Works:
1. User submits their credentials (e.g., username and password) through the registration or login form.
2. The front-end makes an API request to the Node.js backend for authentication or registration.
3. Upon successful response, the user data is saved in the browser's `localStorage`.
---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A running backend server for authentication (e.g., Express.js with the endpoint `http://localhost:5000/api/login`)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/login-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd login-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   Or, if you prefer yarn:

   ```bash
   yarn install
   ```

---

## Running the Application

1. Start the development server:

   ```bash
   npm start
   ```

   Or, if using yarn:

   ```bash
   yarn start
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

---

## Backend Setup

Ensure you have a backend server running with the endpoint `http://localhost:5000/api/login` for handling login requests. The backend should return a JWT token and user information upon successful authentication.

---

## Folder Structure

```
login-app/
├── public/
├── src/
│   ├── components/
│   │   └── Login.js
│   ├── styles/
│   │   └── Login.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

---

## How to Clone and Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/login-app.git
   ```

2. Navigate to the project folder:

   ```bash
   cd login-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. The application will open at `http://localhost:3000`.

---

## Technologies Used

- **Frontend**: React, CSS (for styling)
- **Backend**: Node.js with Express.js (for login API, not included in this repo)
- **HTTP Client**: Axios
- **Routing**: React Router DOM
