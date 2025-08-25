import React from "react";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Sidebar: React.FC = () => {
  const topIcons = [FaHome, FaUser, FaSearch];

  return (
    <aside className="fixed top-0 left-0 h-screen sidebar bg-zinc-950 text-zinc-50">
      <ul className="flex flex-col items-center justify-between h-full p-4">
        <div id="top" className="top">
          {topIcons.map((Icon, index) => (
            <li key={index} className="mb-2">
              <div className="flex items-center">
                <Icon className="mb-3 mr-2" size={18} />
              </div>
            </li>
          ))}
        </div>
        <div id="bottom" className="bottom">
          <li>
            <IoMdSettings size={18} />
            <FaUser className="mt-5" size={18} />
          </li>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
