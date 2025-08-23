import React, { Suspense } from "react";
import FetchTodo from "./components/FetchTodo";

const App: React.FC = () => {
  return (
    <Suspense>
      <FetchTodo />
    </Suspense>
  );
};

export default App;
