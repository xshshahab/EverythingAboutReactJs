import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const [tryT, setTryT] = useState(0);

  useEffect(() => {
    console.log("Components Mounted ");
    document.title = `Increment : ${tryT}`;
  }, [count, tryT]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setTryT((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
