import React, { useState, useTransition } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Posts from "./components/Posts";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("home");

  const [isPending, startTransition] = useTransition();

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

  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  return (
    <div>
      <div className="tabs">
        <button onClick={() => handleTabChange("home")}>Home</button>
        <button onClick={() => handleTabChange("contact")}>Contact</button>
        <button onClick={() => handleTabChange("posts")}>Posts</button>
      </div>

      {isPending && <p>Loading...</p>}
      <div id="content">{renderContent()}</div>
    </div>
  );
};

export default App;
