import React from "react";
import Home from "./components/Home";
import About from "./components/About";

const App: React.FC = () => {
  return (
    <div id="app">
      <div style={{ height: "100vh", backgroundColor: "#291313ff" }}>
        React JS Devloper
      </div>

      <Home name={"Ranjan"} />

      <div style={{ height: "100vh", backgroundColor: "#291313ff" }}>
        App JS ABOUT PAGE
      </div>
      <About />
    </div>
  );
};

export default App;
