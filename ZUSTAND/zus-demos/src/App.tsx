import React from "react";
import Counter from "./components/Counter";
import Count from "./components/pages/Count";
import ActionsButton from "./components/pages/ActionsButton";

const App: React.FC = () => {
  return (
    <div className="app">
      <Counter />
      <br />
      <hr />
      <br />
      <div>
        <Count />
        <ActionsButton />
      </div>
    </div>
  );
};

export default App;
