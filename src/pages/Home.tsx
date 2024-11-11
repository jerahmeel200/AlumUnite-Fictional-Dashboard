import  { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {users.map((user: any) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Home;
