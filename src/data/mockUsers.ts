export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
    profilePhoto: string;
  }
  
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
      profilePhoto: "/assets/react.svg"
    },
    {
      id: 3,
      name: "Samuel Lee",
      email: "samuel.lee@example.com",
      role: "Guest",
      status: "Active",
      profilePhoto: "/assets/react.svg"
    }
  ];
  