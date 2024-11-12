import  { useEffect, useState } from "react";
import { mockData } from "../data/mockUsers";
import {User} from "../type/index"
import { getUsers, saveUsers } from "../utils/localStorage";
import UserCard from "../components/UserCard";
import { toast } from "react-toastify";

const ManageUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const storedUsers = getUsers();
    if (storedUsers.length === 0) {
      const initialData = mockData(); 
      saveUsers(initialData);
      setUsers(initialData);
    } else {
      setUsers(storedUsers);
    }
  }, []);

  const handleDeleteUser = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    saveUsers(updatedUsers);
    setUsers(updatedUsers);
    toast.success("User Deleted Sucessfully")
  };

 

 

  return (
    <div className="p-4 mt-20">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          
            onDelete={() => handleDeleteUser(user.id)}
            showActions={true}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
