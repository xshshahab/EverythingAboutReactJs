import React from "react";
import { ThemeToggle } from "@/components/toggle/ThemeToggle";

const Navbar: React.FC = () => {
  return (
    <header className="border-b p-3">
      <nav className="flex items-center justify-between container mx-auto max-w-7xl">
        <h1 className="text-2xl font-bold text-green-500">
          <span className="text-3xl">S</span>yphar
          <span className="dark:text-white text-black font-bold">
            Dev<span className="text-green-500">.</span>
          </span>
        </h1>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
