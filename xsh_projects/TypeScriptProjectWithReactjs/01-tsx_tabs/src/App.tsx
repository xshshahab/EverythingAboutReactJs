import React from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";

const App: React.FC = () => {
  return (
    <main>
      <Sidebar />
      <Profile />
    </main>
  );
};

export default App;
