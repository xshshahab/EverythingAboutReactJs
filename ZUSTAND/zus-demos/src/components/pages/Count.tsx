import React from "react";
import { useCounter } from "../../app/store";

const Count: React.FC = () => {
  const count = useCounter((state) => state.count);

  return <h1>Count: {count}</h1>;
};

export default Count;
