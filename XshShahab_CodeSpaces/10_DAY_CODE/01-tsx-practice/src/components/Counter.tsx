import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = (): void => setCount((prevCount) => prevCount + 1);
  const handleDecrement = (): void => setCount((prevCount) => prevCount - 1);
  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
};

export default Counter;
