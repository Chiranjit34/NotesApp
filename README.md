# MERN Note App

This is a simple Note App built using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to create, edit, delete, and view notes. It's designed to showcase the basic functionalities of a full-stack web application.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Running the Application](#running-the-application)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

## Getting Started

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Chiranjit34/NotesApp.git
   ```

2. Navigate to the project folder:

   ```bash
   cd NoteApp
   ```

3. Install dependencies for both the server and client:

   ```bash
   cd server && npm install
   cd ../client && npm install
   ```

## Folder Structure

The project is organized into two main folders:

- **client**: Contains the React.js frontend code.
- **server**: Contains the Node.js and Express.js backend code.

```
NotesApp/
|-- client/
|   |-- public/
|   |-- src/
|   |   |-- components/
|   |   |   |-- notes/
|   |   |   |   |-- CreateNote.jsx
|   |   |   |   |-- EditNote.jsx
|   |   |   |   |-- Home.jsx
|   |   |   |   |-- Nav.jsx
|   |   |   |-- Login.jsx
|   |   |   |-- Notes.jsx
|   |   |-- App.css
|   |   |-- App.js
|   |   |-- api.js
|   |   |-- index.css
|   |   |-- index.js
|   |   |-- App.css
|   |-- package.json
|-- server/
|   |-- controllers/
|   |   |-- noteCtrl.js
|   |   |-- userCtrl.js
|   |-- middleware/
|   |   |-- auth.js
|   |-- models/
|   |   |-- noteModel.js
|   |   |-- userModel.js
|   |-- routes/
|   |   |-- noteRouter.js
|   |   |-- userRouter.js
|   |-- .env
|   |-- .gitignore
|   |-- index.js
|   |-- package.json
|-- README.md
```

## Running the Application

1. In a new terminal, navigate to the `server` folder and start the backend server:

   ```bash
   cd server
   npm start
   ```

2. In another terminal, navigate to the `client` folder and start the React development server:

   ```bash
   cd client
   npm start
   ```

4. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS, Styled Components

## Contributing

- Feel free to contribute to the development of this project.
- Create a new branch and start contributing new fetures.

## Acknowledgments

- Special thanks to the MERN stack for providing a powerful and efficient way to build full-stack web applications.
- Inspiration from various online tutorials and resources.
- Contributors to the open-source community for creating and maintaining the tools and libraries used in this project.
