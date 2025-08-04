import React, { useState } from 'react'

const ExampleOne = () => {
    const [count, setCount] = useState(() => {
        const initialCount = 10;
        return initialCount;
    });

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1)
    }
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1)
    }


    return (
        <div>
            <h1>Count : {count}</h1>
            <br />
            <button className='btn' onClick={handleIncrement}>increment</button> <br /><br />
            <button className='btn' onClick={handleDecrement}>decrement</button>

        </div>
    )
}

export default ExampleOne