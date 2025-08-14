import { useState } from "react";

const FetchList = () => {
  const [user, setUser] = useState({
    username: "Mohan Kumar Ranjan",
    age: 21,
    address: "India",
  });
  return (
    <div>
      <h1>{user.username}</h1>
      <h3>{user.age}</h3>
      <h3>{user["address"]}</h3>
    </div>
  );
};

export default FetchList;
