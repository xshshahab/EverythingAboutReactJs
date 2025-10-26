import React from "react";
import { useCounter } from "../../app/store";

const ActionsButton: React.FC = () => {
  const increment = useCounter((state) => state.increment);
  const decrement = useCounter((state) => state.decrement);
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default ActionsButton;
