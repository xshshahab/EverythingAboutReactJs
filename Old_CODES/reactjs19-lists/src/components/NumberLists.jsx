import React from 'react'

const NumberLists = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <section style={{ padding: "20px", margin: "15px" }}>
            <h1>Number Lists</h1>
            {
                numbers.map((number, index) => {
                    return <ul key={index}>
                        <li style={{ padding: "5px" }}>{number}</li>
                    </ul>
                })
            }
        </section>
    )
}

export default NumberLists