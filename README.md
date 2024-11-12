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
 
 export const mockData: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    profilePhoto: "/assets/default-profile.png"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
    status: "Inactive",
    profilePhoto: "/assets/default-profile.png"
  }
];


```
## Folder Structure

```js

alumunite/
├── public/
│   ├── assets/
│   │   └── avartar.png
├── src/
│   ├── components/
│   │   └── UserCard.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── ManageUsers.tsx
│   ├── utils/
│   │   └── localStorage.ts
│   ├── mockData.ts
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


## Debugging Report
This section provides troubleshooting steps and common issues you may encounter while running or developing the app.

## Common Issues
1. App Not Starting

- Symptom: Running npm start shows errors, or the app fails to load in the browser.
Solution:
- Ensure all dependencies are installed. Run npm install to reinstall them if needed.
- Make sure you’re using a compatible Node.js version (preferably Node.js 14 or newer).
- Check if there are any errors in the terminal and resolve them.
2. localStorage Data Not Showing

- Symptom: User data from localStorage does not appear on the Home or Manage Users page.
Solution:
- Open your browser’s Developer Tools (usually by pressing F12 or Ctrl+Shift+I) and go to the Application tab to inspect localStorage.
- Ensure that data is saved in localStorage under the correct key. By default, user data should be saved under the key users (or check the actual key if modified in utils/localStorage.ts).
- If localStorage is empty, the app should populate mock data. Clear localStorage data to test if mock data appears.
2. Form Validation Issues

- Symptom: Submitting the “Add User” form does not display the required validation warnings or errors.
Solution:
- Confirm that validation is applied to fields in the AddUser component.
- Check the console for any errors related to validation and fix them as needed.
3. Notifications Not Displaying

- Symptom: Toast notifications are not appearing for actions like adding a user.
Solution:
- Ensure that React Toastify is installed correctly (npm install react-toastify).
- Verify that ToastContainer is added in the App.tsx or AddUser component.
- Inspect the console to confirm that notifications are correctly triggered in the onSubmit function in AddUser.
4. Mock Data Not Loading When localStorage is Empty

- Symptom: Even after clearing localStorage, no user data is shown on the Home page.
Solution:
- Check if the mock data is properly imported and used as a fallback in the Home component.
- Verify that the getUsers() function in localStorage.ts has a fallback mechanism to load mock data if localStorage is empty.
- Confirm that mockData is defined in mockData.ts and correctly imported into Home and ManageUsers.
5. Edit/Delete Buttons Not Working

- Symptom: Clicking  delete buttons on the Manage Users page does not update or remove users as expected.
Solution:
- Verify the event handlers for  delete actions in the ManageUsers component.
- Ensure that these handlers properly update localStorage and refresh the component state.
- Use console.log statements to trace if the correct user ID is passed to each function.
## Tips for Further Debugging
- Check Console Logs: Console errors or warnings often provide useful information. Use console.log statements to inspect variables or confirm code execution at specific points.
- Inspect Network Requests: Open the Network tab in Developer Tools to monitor any network calls, especially if data is fetched or modified remotely.
- Review State and Props: Ensure that the correct data is passed between components. Missing or misconfigured props can cause unexpected UI issues.
