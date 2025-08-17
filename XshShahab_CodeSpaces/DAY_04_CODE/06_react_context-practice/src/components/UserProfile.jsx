import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default UserProfile;
