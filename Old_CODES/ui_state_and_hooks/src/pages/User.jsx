import React, { useEffect, useState } from 'react';

const User = () => {

    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem("name")
        return savedName ? JSON.parse(savedName) : ""
    });

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name))
    }, [name])


    const handleClear = () => {
        localStorage.clear();
        setName("");
    }

    return (
        <div>
            <h1>Your username : {name}</h1>
            <br />
            <input placeholder='Update your username' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <button onClick={handleClear} className="btn">Clear Name</button>
        </div>
    )
}

export default User