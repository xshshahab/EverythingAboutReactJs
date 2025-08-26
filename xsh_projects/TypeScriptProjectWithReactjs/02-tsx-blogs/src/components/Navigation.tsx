import React from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 text-black border-2">
      <div className="flex ml-[5rem] items-center border-2 rounded-full px-4 py-2 max-w-md">
        <FaSearch />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent border-none outline-none"
        />
      </div>

      <section className="flex items-center mr-[5rem]">
        <FaUserCircle className="mr-2 text-3xl" />
      </section>
    </nav>
  );
};

export default Navigation;
