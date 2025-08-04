import React from 'react'

const UsersLists = () => {
    const userInfo = [
        {
            "id": "1",
            "username": "xsh_shahab",
            "email": "try.xshshahab@gmail.com",
            "location": "Bihar, India",
            "gender": "Male"
        },
        {
            "id": "2",
            "username": "john_doe",
            "email": "john.doe@example.com",
            "location": "New York, USA",
            "gender": "Male"
        },
        {
            "id": "3",
            "username": "emma_smith",
            "email": "emma.smith@example.com",
            "location": "London, UK",
            "gender": "Female"
        },
        {
            "id": "4",
            "username": "michael_jones",
            "email": "michael.jones@example.com",
            "location": "Sydney, Australia",
            "gender": "Male"
        },
        {
            "id": "5",
            "username": "sophia_wilson",
            "email": "sophia.wilson@example.com",
            "location": "Toronto, Canada",
            "gender": "Female"
        },
        {
            "id": "6",
            "username": "david_brown",
            "email": "david.brown@example.com",
            "location": "Berlin, Germany",
            "gender": "Male"
        }
    ];

    return (
        <main style={{ padding: "20px", margin: "15px" }}>
            <h1>Users Lists</h1>
            {
                userInfo.map((user) => (
                    <div style={{ padding: "5px", marginBottom: "10px", border: "1px solid grey" }} key={user.email}>
                        <h2 style={{ padding: "2px" }}>{user.id} - {user.username}</h2>
                        <h3 style={{ padding: "5px" }}>{user.email}</h3>
                        <p style={{ padding: "4px" }}>{user.location}</p>
                        <span style={{ padding: "6px" }}>{user.gender}</span>
                    </div>
                ))
            }
        </main>
    )
}

export default UsersLists