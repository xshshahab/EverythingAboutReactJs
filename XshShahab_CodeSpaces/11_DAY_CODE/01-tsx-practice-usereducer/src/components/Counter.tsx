import React, { useReducer } from "react";
import type { State } from "../types/counterTypes";
import { counterReducer } from "../reducer/counterReducer";

const initialState: State = { count: 0 };

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <p>Count: {state?.count || "Not Available"} </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Counter;
