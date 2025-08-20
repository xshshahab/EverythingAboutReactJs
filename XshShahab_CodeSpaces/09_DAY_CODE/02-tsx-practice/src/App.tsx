import React from "react";
import UserInfo from "./components/user/UserInfo";
import AdminInfo from "./components/admin/AdminInfo";
import type { adminInf, userInf } from "./types/Info";

const App: React.FC = () => {
  const user: userInf = {
    id: 1,
    username: "user.xshshahab",
    fullName: "Mohammad Shahabuddin",
    email: "xsh@shahab.user.com",
  };

  const admin: adminInf = {
    id: 2,
    username: "admin.xshshahab",
    fullName: "Mohammad Shahabuddin",
    email: "xsh@shahab.user.com",
    role: "admin",
    lastLogin: new Date(),
  };

  return (
    <div>
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </div>
  );
};

export default App;
