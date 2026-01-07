# Portfolio Website with Enquiry Management

A full-stack portfolio website built using **React (Vite)** for the frontend and **Node.js + Express + MongoDB** for the backend.  
The project allows visitors to submit enquiries via a contact form, while admins can securely manage those enquiries through a protected dashboard.

---

## 📁 Project Structure

```
portfolio-website/
├── backend/
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── src/
│       ├── config/
│       │   └── db.js
│       ├── controllers/
│       │   ├── adminController.js
│       │   └── enquiryController.js
│       ├── middlewares/
│       │   ├── isAuth.js
│       │   └── validate.js
│       ├── models/
│       │   ├── Admin.js
│       │   └── Enquiry.js
│       ├── routes/
│       │   ├── adminRoutes.js
│       │   └── enquiryRoutes.js
│       ├── server.js
│       └── validators/
│           └── enquiryValidator.js
└── frontend/
    ├── .gitignore
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public/
    │   └── vite.svg
    ├── src/
    │   ├── App.jsx
    │   ├── components/
    │   │   ├── Background.jsx
    │   │   ├── EditEnquiryForm.jsx
    │   │   ├── Header.jsx
    │   │   ├── Login.jsx
    │   │   └── NotFound.jsx
    │   ├── context/
    │   │   └── AdminContext.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   ├── pages/
    │   │   ├── Contact.jsx
    │   │   ├── Enquiries.jsx
    │   │   └── Home.jsx
    │   └── services/
    │       └── api.js
    ├── vercel.json
    └── vite.config.js
```

---

## 🚀 Project Setup Steps

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ankitjhagithub21/portfolio-website.git
cd portfolio-website
```
### 2️⃣ Backend Setup
```bash
cd backend
npm install
```
Create a .env file inside the backend folder:

 ```bash
PORT = 8000
FRONTEND_URL = http://localhost:5173
MONGO_URI = your_mongodb_connection_string
JWT_SECRET = your_secret_key
```
Run the backend server:

```bash
npm run dev
```
Backend will be available at:

```bash
http://localhost:8000
```

### 3️⃣ Frontend Setup
```bash
cd backend
npm install
npm run dev
```

Create a .env file inside the frontend folder:
```bash
VITE_SERVER_URL = http://localhost:8000
```

Frontend will be available at:
```bash
http://localhost:5173
```

## 🧠 Tech Stack Used

### 🔹 Frontend
- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS
- DaisyUI
- React Icons
- React Hot Toast


### 🔹 Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- express-validator
- cookie-parser
- dotenv
- CORS

---

## ✨ Features Implemented

### 🌐 Public Features
- Responsive portfolio UI
- Contact / Enquiry submission form
- Server-side form validation
- Toast notifications for user feedback
- Custom 404 (Not Found) page

### 🔐 Admin Features
- Admin authentication (JWT based)
- Secure login and logout
- Protected routes using middleware
- View all submitted enquiries
- Edit enquiry details
- Delete enquiries
- Enquiry details popup / modal

### ⚙️ Backend Features
- RESTful API architecture
- MongoDB schemas and models
- Request validation using `express-validator`
- Centralized validation error handling
- JWT-based authentication middleware
- Secure password hashing using bcrypt
- Role-protected API routes

## 🚀 Deployment

- Frontend deployed using **Vercel**
- Backend deployed on **Render** 
- Environment variables managed securely

---

## 👤 Author

**Ankit Jha**  
Full Stack Web Developer


