# Task Manager API

## 📌 Overview

The **Task Manager API** is a Flask-based RESTful API that allows users to **register, log in, and manage their tasks** efficiently. It uses **JWT authentication** to secure endpoints and integrates with **MongoDB** for data storage.

## 🚀 Features

- **User Authentication (JWT-based)**
- **Task CRUD Operations** (Create, Read, Update, Delete)
- **Middleware for Authentication** (Protects routes)
- **MongoDB Integration** (Data persistence)
- **Pagination for Tasks** (Optional feature)
- **Task Categories** (Work, Personal, etc.)
- **Task Deadlines** (Sort by due date)

## 🏗 Folder Structure

```
/flask_task_manager
│── app.py                 # Main entry point
│── config.py              # Configuration file
│── requirements.txt       # Dependencies
│── /routes                # API route handlers
│   │── user_routes.py
│   │── task_routes.py
│── /controllers           # Handles request logic
│   │── user_controller.py
│   │── task_controller.py
│── /models                # Database models
│   │── user_model.py
│   │── task_model.py
│── /middleware            # Authentication middleware
│   │── auth.py
```

## 🛠 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/flask-task-manager.git
cd flask-task-manager
```

### 2️⃣ Create a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate  # On Mac/Linux
```

### 3️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Setup MongoDB

- Install and run MongoDB locally OR use MongoDB Atlas.
- Update **config.py** with your MongoDB URI.

### 5️⃣ Run the app

```bash
python app.py
```

## 🔑 Authentication (JWT Token)

- Users must **register** and **log in** to receive a JWT token.
- The token must be included in the **Authorization header** for protected routes.

## 📝 API Endpoints

### **1️⃣ User Authentication**

| Method | Endpoint    | Description         |
| ------ | ----------- | ------------------- |
| POST   | `/register` | Register a new user |
| POST   | `/login`    | Log in and get JWT  |

### **2️⃣ Task Management** (Protected)

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| POST   | `/tasks`      | Create a new task |
| GET    | `/tasks`      | Get all tasks     |
| PUT    | `/tasks/<id>` | Update a task     |
| DELETE | `/tasks/<id>` | Delete a task     |

## 🔐 Using JWT in Requests

Include the token in headers:

```bash
Authorization: Bearer YOUR_JWT_TOKEN
```

## 🚀 Deployment (Optional)

### **Deploy to Render / Railway / AWS**

1. **Push Code to GitHub**
2. **Deploy to a Hosting Service**
3. **Set Environment Variables** (MongoDB URI, Secret Key)

---

### 🎯 Now you are ready to build and test your Flask Task Manager API! 🚀
