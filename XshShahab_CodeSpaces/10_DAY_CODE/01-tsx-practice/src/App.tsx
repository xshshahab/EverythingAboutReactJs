import React from "react";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import Seperator from "./lib/Seperator";
import TodoApp from "./components/TodoApp";

const App: React.FC = () => {
  return (
    <>
      <Counter />
      <Seperator />
      <UserProfile />
      <Seperator />
      <TodoApp />
    </>
  );
};

export default App;
