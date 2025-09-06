import React from "react";
import InputRef from "./components/InputRef";
import ScrollToBottom from "./components/ScrollToBottom";

const App: React.FC = () => {
  return (
    <div>
      <ScrollToBottom />
      <InputRef />
    </div>
  );
};

export default App;
