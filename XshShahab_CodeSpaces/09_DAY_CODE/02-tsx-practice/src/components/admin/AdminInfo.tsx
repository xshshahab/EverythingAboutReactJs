import React from "react";
import type { adminInf } from "../../types/Info";

type AdminInfoProps = {
  admin: adminInf;
};

const AdminInfo: React.FC<AdminInfoProps> = ({ admin }) => {
  return (
    <div>
      <h1>Admin Information</h1>
      <span>Id: {admin.id}</span>
      <h3>Name: {admin.fullName} </h3>
      <h4>Username: {admin.username} </h4>
      <p>Email: {admin.email}</p>
      <p>Role: {admin.role}</p>
      <strong>Last Login: {admin.lastLogin.toLocaleString()}</strong>
    </div>
  );
};

export default AdminInfo;
