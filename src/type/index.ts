export type UserRole = "Admin" | "Guest" | "User";

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: string;
  profilePhoto: string;
}
