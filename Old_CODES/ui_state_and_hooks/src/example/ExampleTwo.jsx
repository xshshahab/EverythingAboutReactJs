import React, { useState } from 'react'

const ExampleTwo = () => {
    const [randomNumber, setRandomNumber] = useState(() => Math.floor(Math.random() * 100))

    const updateRandom = () => {
        const newNumber = Math.round(Math.random() * 200)
        setRandomNumber(newNumber)
    }

    return (
        <div>
            <h1>Random Number : {randomNumber}</h1>
            <button className="btn" onClick={updateRandom}>Get Another Random</button>
        </div>
    )
}

export default ExampleTwo