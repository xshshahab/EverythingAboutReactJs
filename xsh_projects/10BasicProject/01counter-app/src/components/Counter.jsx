import { useState } from "react";
import "../styles/Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleIncrement = () => setCount((prevCount) => prevCount + 1);
  const handleDecrement = () => setCount((prevCount) => prevCount - 1);
  const handleReset = () => setCount(0);

  return (
    <div className={`counter-container ${darkMode ? "dark" : ""}`}>
      <h1>Counter App</h1>
      <p>Count : {count}</p>

      <div className="btn-group">
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {/* Dark Mode Toggle */}
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
};

export default Counter;
