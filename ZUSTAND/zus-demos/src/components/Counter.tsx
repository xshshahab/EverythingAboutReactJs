import React from "react";
import { useCounter } from "../app/store";

const Counter: React.FC = () => {
  const { count, increment, decrement } = useCounter((state) => state);

  return (
    <div className="app">
      <h1>Count: {count}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  );
};

export default Counter;
