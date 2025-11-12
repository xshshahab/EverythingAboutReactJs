import { Menu } from "lucide-react";
import React, { useState } from "react";
import { Link, Outlet } from "react-router";

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  // ✅ Menu items ko ek array me define kar do
  const menuItems = [
    { name: "Index", path: "/" },
    { name: "Challenge 2", path: "/c2" },
    { name: "Challenge 3", path: "/c3" },
    { name: "Challenge 4", path: "/c4" },
  ];

  return (
    <>
      {/* Floating Menu Button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="bg-amber-400 p-3 rounded-full shadow-lg hover:bg-amber-500 transition-colors"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>

        {open && (
          <div className="absolute top-14 right-0 bg-white rounded-lg shadow-xl flex flex-col items-start gap-2 p-3 w-40 border border-gray-100">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="w-full p-2 rounded hover:bg-amber-100 transition"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <main className="p-2 bg-sky-200">
        <Outlet />
      </main>
    </>
  );
};

export default App;
