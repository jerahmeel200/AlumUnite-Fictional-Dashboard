 
import UserForm from "../components/UserForm";
import { getUsers, saveUsers } from  "../utils/localStorage";

const AddUser = () => {
  const handleSave = (user: any) => {
    const users = getUsers();
    user.id = users.length + 1;
    saveUsers([...users, user]);
     
  };

  return (
    <div className="p-4 mt-20">
      <h2 className="text-xl font-bold mb-4">Add a New User</h2>
      <UserForm onSave={handleSave} />
    </div>
  );
};

export default AddUser;
3