# Blog Platform with Role-Based Access Control (RBAC)

This project implements a Blog Platform using Role-Based Access Control (RBAC), where different user roles (admin and user) have distinct permissions to access and manage blog posts. The application allows admins to create, update, and delete blog posts, while regular users can view blog posts.

## Features

- **Role-Based Authentication**: Admins can create, edit, and delete blog posts. Users can only view posts.
- **JWT Authentication**: Secure login and token-based authentication.
- **Frontend**: Built with React to manage the UI for both users and admins.
- **Backend**: Built with Node.js and Express.js to handle authentication, blog post management, and authorization.
- **MongoDB**: MongoDB is used to store user information, blog posts, and roles.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Authorization**: Role-based access (Admin, User)

## Requirements

Before setting up the project, ensure you have the following installed:

- Node.js (>= 16.x)
- npm (>= 7.x)
- MongoDB (or use MongoDB Atlas for cloud-based database)

## Project Setup

Follow these steps to get the project up and running:

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/rbac-blog-platform.git
cd rbac-blog-platform
```

### 2. Setup Backend

Navigate to the backend directory and install the required dependencies:

```bash
cd backend
npm install
```

Create `.env` file in the backend directory and add the following:

```env
PORT=5000
MONGO_URI=<Your MongoDB Connection URI>
JWT_SECRET=<Your JWT Secret Key>
```

You can get a MongoDB connection URI from MongoDB Atlas if you are using the cloud version.

### 3. Setup Frontend

Navigate to the frontend directory and install the required dependencies:

```bash
cd frontend
npm install
```

### 4. Running the Backend and Frontend

To run both the backend and frontend:

1. Open a terminal and navigate to the backend directory:

```bash
cd backend
npm start
```

This will start the server on `http://localhost:5000`.

2. Open a new terminal, navigate to the frontend directory, and run:

```bash
cd frontend
npm start
```

This will start the React app on `http://localhost:3000`.

## API Endpoints

### 1. User Authentication

- `POST /api/auth/signup` – Create a new user (admin or regular user).
- `POST /api/auth/login` – Login and get a JWT token.

### 2. Blog Post Management

- `GET /api/blogs` – Fetch all blog posts (accessible by both admin and user).
- `POST /api/blogs` – Create a new blog post (admin only).
- `PUT /api/blogs/:id` – Update a blog post (admin only).
- `DELETE /api/blogs/:id` – Delete a blog post (admin only).

### 3. User Info

- `GET /api/user` – Fetch the logged-in user's details (role: admin or user).

## Frontend

### Login and Signup

- Admin users can log in with admin credentials to manage blog posts.
- Regular users can log in to view posts but cannot manage them.

### Admin Dashboard

- Admin users can create, update, and delete blog posts from the Admin Dashboard.
- Users can view a list of blog posts.

## Example User

**Admin**
- Email: `admin@example.com`
- Password: `admin123`

**Regular User**
- Email: `user@example.com`
- Password: `user123`

## Notes

- Make sure to add your JWT secret and MongoDB URI in the `.env` file for the backend.
- The admin dashboard can be accessed only by admin users.
- Make sure your MongoDB database is running locally or use MongoDB Atlas for a cloud-based solution.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contribution

Feel free to fork this repository, make changes, and create a pull request. Contributions are always welcome!
