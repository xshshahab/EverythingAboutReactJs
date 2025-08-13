import { useState } from "react";

const CounterApp = () => {
  let [count, setCount] = useState(0);

  let increment = () => setCount(count + 1);
  let decrement = () => setCount(count - 1);

  const container = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "20px",
  };

  const styles = {
    padding: "10px 20px",
    border: "none",
    outline: "none",
    borderRadius: "5px",
    backgroundColor: "#ccc",
    color: "black",
    fontSize: "18px",
  };
  return (
    <div style={container}>
      <button style={styles} onClick={increment}>
        +
      </button>
      <h1>{count}</h1>
      <button style={styles} onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default CounterApp;
