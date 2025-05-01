# 📝 Task Tracker App

A full-stack Task Tracker application that allows users to manage up to 4 projects, with task tracking functionality inside each project. Built using **ReactJS**, **ExpressJS**, and **MongoDB**, and deployed on **Vercel** and **Render**.

## 🚀 Live Demo

- 🔗 **Frontend (React)**: [https://task-tracker-app-navy.vercel.app/](https://task-tracker-app-navy.vercel.app/)
- 🔗 **Backend (Express + MongoDB)**: [https://task-tracker-app-1l08.onrender.com](https://task-tracker-app-1l08.onrender.com)

## 📦 Features

- ✅ User signup and login (JWT authentication)
- ✅ Create up to 4 projects per user
- ✅ Add, view, update, and delete tasks per project
- ✅ Task status tracking (pending, in progress, completed)
- ✅ Fully responsive frontend
- ✅ Secure API routes with token-based protection

## 🛠️ Tech Stack

### Frontend (ReactJS)
- React Router DOM
- Axios
- Context API for auth management
- Vercel for hosting

### Backend (ExpressJS)
- MongoDB Atlas via Mongoose
- JWT for auth
- Bcrypt for password hashing
- Render for hosting


## 📂 Folder Structure

- /client → React frontend (deployed to Vercel)
- /server → Express backend (deployed to Render)

## 🛠️ Running the App Locally

### 🔁 Clone the Repository

```bash
git clone https://github.com/Nag-san/Task-Tracker-App.git
cd task-tracker-app

BACKEND SETUP
cd server
npm install

Create a .env file inside server/:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

Start the backend:
npm run dev

FRONTEND SETUP
cd ../client
npm install

If using local backend, update src/services/api.js:
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

Start the frontend:
npm start

```

## 🚀 Deployment Instructions

### 🖥️ Backend (Render)
- Set **root directory** to `server`
- Set environment variables:
  - `MONGO_URI`
  - `JWT_SECRET`
- Build Command: `npm install`
- Start Command: `npm run start`
- Ensure `"type": "module"` is in `package.json`
- Use proper `.js` extensions in all `import` statements

---

### 🌐 Frontend (Vercel)
- Deploy the `/client` folder from GitHub
- Build Command: `npm run build`
- Output Directory: `build`
- (Optional) Set `REACT_APP_API_BASE` as an env variable
- Alternatively, hardcode API base URL in `src/services/api.js`

---

## 📧 Contact

Made with ❤️ by [Nagraj](https://github.com/Nag-san)

---








