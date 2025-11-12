import { LogOut, User2 } from "lucide-react";
import React from "react";

const Header: React.FC = () => {
  return (
    <nav className="flex bg-gray-900 text-white items-center justify-between">
      <h1>My Dashboard</h1>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 bg-neutral-900 text-white p-2 px-3 rounded shadow">
          <User2 />
          Profile
        </button>
        <button className="flex items-center gap-2 bg-neutral-900 text-white p-2 px-3 rounded shadow">
          <LogOut />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;
