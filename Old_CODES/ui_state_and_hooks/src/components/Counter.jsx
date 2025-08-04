import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
    }

    function handleDecrement() {
        setCount(count - 1);
    }

    function handleReset() {
        setCount(0);
    }

    return (
        <div className="counter-container">
            <h1>Counter App</h1>
            <div className="counter-box">
                <button className="btn" onClick={handleDecrement}>-</button>
                <h2 className="count">{count}</h2>
                <button className="btn" onClick={handleIncrement}>+</button>
            </div>
            <button className="reset-btn" onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;
