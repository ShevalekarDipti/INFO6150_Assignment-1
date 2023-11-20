 1. `connectDB.js`
   -  Description : This module establishes a connection to MongoDB using Mongoose.
   -  Features :
     - Utilizes `mongoose` to connect to MongoDB.
     - Uses async/await for handling asynchronous operations.
     - Logs the successful connection to the console.
     - Handles potential errors during connection.

 2. `user.js` (Mongoose Model)
   -  Description : Defines a Mongoose schema for the 'employees' collection, including pre-save middleware for password hashing.
   -  Features :
     - Schema includes fields for email, fullname, and password.
     - Pre-save hook hashes the password before saving it to the database.

 3. `userRoutes.js`
   -  Description : Express router handling CRUD operations for user management.
   -  Features :
     - Includes routes for getting all users, getting a specific user, user login, creating a new user, updating user details, and deleting a user.
     - Uses `bcrypt` for password hashing and comparison.
     - Implements validation for email and fullname during user creation.
     - Returns appropriate HTTP status codes and messages.

 4. `server.js`
   -  Description : Entry point for the Node.js server.
   -  Features :
     - Initializes Express and connects to MongoDB using `connectDB`.
     - Configures routes using `userRoutes`.

 5. `LoginPage.js` (React Component)
   -  Description : React component for the login page.
   -  Features :
     - Utilizes the `useNavigate` hook from React Router for navigation.
     - Performs user authentication using a POST request to the server.
     - Displays appropriate error messages and loading indicators.

 6. `MainPage.js` (React Component)
   -  Description : React component for the main page after successful login.
   -  Features :
     - Provides navigation links to different sections (Home, About, Profile, Jobs).
     - Basic layout for a navigation bar and footer.

 7. `App.js` (React Component)
   -  Description : Main React component for the application.
   -  Features :
     - Uses React Router for handling different routes.
     - Conditionally renders `MainPage` if the user is logged in.
     - Renders `LoginPage` and other protected routes when not logged in.
     - Manages the login state.

