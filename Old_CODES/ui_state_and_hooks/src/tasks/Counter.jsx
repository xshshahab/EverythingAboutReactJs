import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Counter Value : {count}</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        </div>
    )
}

export default Counter