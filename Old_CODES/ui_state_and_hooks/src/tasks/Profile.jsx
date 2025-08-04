import React, { useState } from 'react'

const Profile = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "Mohan Kumar", age: 21 },
        { id: 2, name: "Kumar Sanu", age: 32 },
    ]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [selectedId, setSelectedId] = useState(null);

    const ReferToSubmit = (id) => {
        const userToEdit = users.find((user) => user.id === id);
        if (userToEdit) {
            setName(userToEdit.name);
            setAge(userToEdit.age);
            setSelectedId(id);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedId) {
            // Update existing user
            setUsers(prevUsers =>
                prevUsers.map(user =>
                    user.id === selectedId ? { ...user, name, age } : user
                )
            );
            setSelectedId(null); // Reset selected ID after updating
        } else {
            // Add a new user
            setUsers(prevUsers => [
                { id: prevUsers.length + 1, name, age },
                ...prevUsers
            ]);
        }

        // Clear input fields
        setName("");
        setAge("");
    };





    return (
        <>
            <h1 style={{ padding: "5px", margin: "5px" }}>Profile Updater.</h1>
            {users.length > 0 && (<div>
                {
                    users.map((user) => {
                        return <div style={{ padding: "5px", margin: "5px" }} key={user.id}>
                            <h3>Name : {user.name}</h3>
                            <p>Age : {user.age}</p>
                            <button onClick={(id) => ReferToSubmit(user.id)}>Update</button>
                        </div>
                    })
                }
            </div>)}

            <form onSubmit={handleSubmit}>
                <div style={{ padding: "10px", margin: "5px" }}>
                    <label htmlFor="name">Name: </label>
                    <input
                        required
                        type="text"
                        id='name'
                        placeholder='Enter Your name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div style={{ padding: "10px", margin: "5px" }}>
                    <label htmlFor="age">Age: </label>
                    <input
                        required
                        type="age"
                        id='age'
                        placeholder='Enter Your age'
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <br /> <br />
                    <button style={{ padding: "10px 25px", margin: "5px" }} type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Profile