import React from "react";
import { FaTrash } from "react-icons/fa";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  profilePhoto: string;
};

type UserCardProps = {
  user: User;
  onEdit?: () => void;
  onDelete?: () => void;
  showActions?: boolean;
};

const UserCard = ({ user, onEdit, onDelete, showActions }: UserCardProps) => (
  <div className="border p-4 rounded-lg flex items-center space-x-4 bg-white shadow relative">
    <img
      src={user.profilePhoto || "/assets/default-profile.png"}
      alt={user.name}
      className="w-16 h-16 rounded-full"
    />
    <div>
      <h3 className="text-lg font-bold">{user.name}</h3>
      <p>{user.email}</p>
      <p className="text-sm">{user.role}</p>
      <p className="text-sm text-green-500">{user.status}</p>
      {showActions && (
        <div className="mt-3 flex space-x-2 absolute top-0 right-3">
          
          {onDelete && (
            <button
              onClick={onDelete}
              className=""
            >
              <FaTrash />
            </button>
          )}
        </div>
      )}
    </div>
  </div>
);

export default UserCard;
