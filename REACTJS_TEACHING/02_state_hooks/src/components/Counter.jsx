import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // count -> immutable sirf or sirf setcount se hi value change kar paoge
  // count ko jab increment karte hai to value increment ho rha hai but ui update nahi hota
  // jab setCount ki wajah value update hota hai aur ui re render hota.

  const handleIncrement = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleDecrement = () => setCount(count - 1);

  return (
    <div className="flex items-center gap-3">
      <button onClick={handleIncrement}>+</button>
      <h1 className="text-3xl font-bold underline">{count}</h1>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
