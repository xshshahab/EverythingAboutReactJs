import React, { useState } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Posts from "./components/Posts";

const Oldapp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "contact":
        return <Contact />;
      case "posts":
        return <Posts />;

      default:
        return <Home />;
    }
  };

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setActiveTab("home")}>Home</button>
        <button onClick={() => setActiveTab("contact")}>Contact</button>
        <button onClick={() => setActiveTab("posts")}>Posts</button>
      </div>

      <div id="content">{renderContent()}</div>
    </div>
  );
};

export default Oldapp;
