# AlumUnite

AlumUnite is a simple, responsive React and TypeScript web application for managing a list of users, ideal for alumni networks, community groups, or small organizations. It allows administrators to add and delete users and view user profiles with real-time feedback and beautiful, professional styling.

 

 
## Table of Contents
- Features
- Tech Stack
- Installation
- Usage
- Mock Data
- Folder Structure
- Contributing
- License


## Features
- User Management: Add, edit, and delete users.
- Responsive Design: Supports both mobile and desktop views, including a responsive hamburger menu.
- Mock Data: Initial set of users is provided when no user data is stored.
- Persistent Storage: Stores user data locally using localStorage.
- Toast Notifications: User actions like adding and deleting users trigger notifications for a better user experience.
- Professional UI: Clean and modern design with easy navigation.

## Tech Stack
- Frontend: React, TypeScript, Tailwind CSS
- Routing: React Router
- Local Storage: Custom hooks for saving and retrieving data from localStorage
- Notifications: React Toastify for showing user action feedback

## Installation
1. Clone the repository:
```js
 git clone https://github.com/your-username/alumunite.git
cd alumunite

```
2. Install dependencies:
```js
 
npm install

```

3. Run the app:
```js
 
npm run dev


```
4. Open the app:
Open http://localhost:3000 in your browser to view it.

## Usage
1. Home Page:

- Displays user profiles.
- Pulls data from localStorage and, if none exists, falls back to mock data.
2. Manage Users Page:
- View a list of users with options to edit and delete.
- Provides a responsive, grid-based layout for user cards with edit and delete buttons.
3. Adding New Users:

- Go to the Add User page to create a new user.
- User data is saved to localStorage and added to the list of displayed users.
4. Notifications:

- Notifications appear for actions like adding, deleting, or attempting to edit users.
## Mock Data
 If no user data exists in localStorage, a default set of users will be displayed using the mock data.

The mockData.ts file is structured as follows:

 
 ```js
 


[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "Admin",
    "status": "Active",
    "profilePhoto": "../assets/avatar.png"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "role": "User",
    "status": "Inactive",
    "profilePhoto": "../assets/avatar.png"
  },
  {
    "id": 3,
    "name": "Samuel Lee",
    "email": "samuel.lee@example.com",
    "role": "Guest",
    "status": "Active",
    "profilePhoto": "../assets/avatar.png"
  }
]



```
## Folder Structure

```js

alumunite/
├── public/
│   ├── assets/
│   │   └── default-profile.png
├── src/
│   ├── components/
│   │   └── UserCard.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── ManageUsers.tsx
        └── AddUser.tsx
│   ├── utils/
│   │   └── localStorage.ts
│   ├── data
    └── mockUser.json
    └── mockUser.ts
│   ├── App.tsx
│   └── index.tsx
└── README.md


```
 
## Key Files
- App.tsx: Main application file with routes.
- mockData.ts: Contains the mock user data.
- localStorage.ts: Utility file for handling local storage.
- UserCard.tsx: Component for displaying individual user information.
## Contributing
Contributions are welcome! Please follow these steps:

 

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

 
