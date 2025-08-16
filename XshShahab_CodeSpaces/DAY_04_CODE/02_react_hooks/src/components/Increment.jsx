import { useEffect, useState } from "react";

const Increment = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(`call useEffect hook ${Math.round(Math.random() * 10)}`);
    document.title = `Increment: ${value}`;
  });

  return (
    <div>
      <h1>Count : {value}</h1>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
};

export default Increment;
