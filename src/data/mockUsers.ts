import { UserRole, User } from "../type/index";

// Import mock user data from JSON file
import dummy from "./mockUsers.json";

/**
 * Mapping of role strings to UserRole enum values.
 * This ensures consistency in role naming conventions.
 */
const roleMap: { [key: string]: UserRole } = {
  admin: "Admin",
  guest: "Guest",
  user: "User",
};
console.log(dummy)
// Function to transform mock user data to conform to User type.
export const mockData = (): User[] => {
  return dummy.map((user) => ({
    ...user,
    role: roleMap[user.role.toLowerCase()],
  }));
   
};
  

