import  { useEffect, useState } from "react";
import { getUsers } from "../utils/localStorage";
import UserCard from "../components/UserCard";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getUsers());
  }, []);
 

  return (
    <div className="mt-20 p-4">

      <h2 className="text-xl font-bold mb-4">Users</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-4  ">

      {users.map((user: any) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
    </div> 
   
  );
};

export default Home;
