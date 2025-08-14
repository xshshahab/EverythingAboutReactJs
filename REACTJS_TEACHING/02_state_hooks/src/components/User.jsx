import { useState } from "react";

const User = ({ data }) => {
  const [userData, setUserData] = useState(data);

  const updateAge = () => {
    setUserData(
      userData.map((user) => (user.age === 21 ? { ...user, age: 40 } : user))
    );
  };

  const handleDeleteOneUser = () => {
    setUserData(userData.filter((user) => user.id !== 1));
  };

  return (
    <main>
      {userData.map((user) => {
        return (
          <div className="flex items-center gap-4 p-4 rounded-md" key={user.id}>
            <h1>{user.username}</h1>
            <h2>{user.age}</h2>
          </div>
        );
      })}

      <button onClick={updateAge}>Update Age</button>
      <button onClick={handleDeleteOneUser}>Delete User</button>
    </main>
  );
};

export default User;
