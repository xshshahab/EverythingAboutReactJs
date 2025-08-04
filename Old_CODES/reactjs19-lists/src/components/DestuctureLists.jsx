import React from 'react';

const DestuctureLists = () => {
    const destuctureUser = [
        {
            name: "Mohan",
            email: "mohan@example.com",
            age: 22
        },
        {
            name: "Sohan",
            email: "sohan@example.com",
            age: 29
        }
    ]
    return (
        <div style={{ padding: "20px", margin: "15px" }}>
            <h1>Destucture User Lists</h1>
            {
                destuctureUser.map(({
                    name, email, age
                }) => (
                    <ul style={{ padding: "5px", marginBottom: "10px", border: "1px solid grey" }} key={Math.floor(Math.random() * 10)}>
                        <li>{name}</li>
                        <li>{email}</li>
                        <li>{age}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default DestuctureLists