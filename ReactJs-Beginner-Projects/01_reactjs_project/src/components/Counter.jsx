import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < 25) {
            setCount(prevCount => prevCount + 1);
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <section className="counter-container">
            <h1 className="count-display">{count}</h1>

            <div id="btn-container">
                <button onClick={increment} className="increment">+</button>
                <button onClick={decrement} className="decrement">-</button>
            </div>
        </section>
    );
}

export default Counter;
