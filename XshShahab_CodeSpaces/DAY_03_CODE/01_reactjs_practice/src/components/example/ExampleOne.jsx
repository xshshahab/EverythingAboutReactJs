import { useState } from "react";

const ExampleOne = () => {
  const [count, setCount] = useState(() => {
    return (initialCount = 0);
  });

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default ExampleOne;
