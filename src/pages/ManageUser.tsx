import React, { useEffect, useState } from "react";
import { User, mockData } from "../data/mockUsers";
import UserCard from "../components/UserCard";

const ManageUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);

  useEffect(() => {
    const storedUsers = getUsers();
    if (storedUsers.length === 0) {
      saveUsers(mockData);
      setUsers(mockData);
    } else {
      setUsers(storedUsers);
    }
  }, []);

  const handleDeleteUser = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    saveUsers(updatedUsers);
    setUsers(updatedUsers);
    // Optionally, add toast notification here
  };

  const handleEditUser = (id: number) => {
    setEditingUserId(id);
    // Optionally, trigger modal or form display logic here for editing
    console.log("Edit user functionality initiated for user ID:", id);
  };

  const handleSaveEditUser = (updatedUser: User) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    saveUsers(updatedUsers);
    setUsers(updatedUsers);
    setEditingUserId(null); // Close the edit form/modal
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={() => handleEditUser(user.id)}
            onDelete={() => handleDeleteUser(user.id)}
            showActions={true}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
