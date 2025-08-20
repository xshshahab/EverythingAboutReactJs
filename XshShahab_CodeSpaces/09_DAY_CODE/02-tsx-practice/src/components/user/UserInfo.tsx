import type React from "react";
import type { userInf } from "../../types/Info";

type UserInfoProps = {
  user: userInf;
};

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <div>
      <h1>User Information</h1>
      <span>Id: {user.id}</span>
      <h3>Name: {user.fullName} </h3>
      <h4>Username: {user.username} </h4>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserInfo;
