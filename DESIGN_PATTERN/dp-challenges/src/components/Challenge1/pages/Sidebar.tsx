import { Home, Settings, User2 } from "lucide-react";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-gray-100 flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-8 text-white tracking-wide">
        Dashboard
      </h1>

      <ul className="space-y-4">
        <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition">
          <Home className="w-5 h-5 text-gray-300" />
          <span className="text-sm font-medium">Home</span>
        </li>

        <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition">
          <Settings className="w-5 h-5 text-gray-300" />
          <span className="text-sm font-medium">Settings</span>
        </li>

        <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition">
          <User2 className="w-5 h-5 text-gray-300" />
          <span className="text-sm font-medium">Profile</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
