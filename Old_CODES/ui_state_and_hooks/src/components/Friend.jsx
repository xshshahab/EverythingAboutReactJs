import React, { useState } from "react";

const Friend = () => {
    const [friends, setFriends] = useState([
        "Mohammed Ali",
        "Abdul Rahman",
        "Ayesha Siddiqui",
        "Yusuf Khan",
        "Fatima Begum",
    ]);

    const containerStyle = {
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        marginTop: "50px",
    };

    const cardStyle = {
        backgroundColor: "#f4f4f4",
        padding: "15px",
        margin: "10px auto",
        width: "300px",
        borderRadius: "8px",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "left",
    };

    const nameStyle = {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#333",
    };

    const handleAddNewFd = () => {
        setFriends([...friends, "Ali Murtaza"])
    }

    const removeFd = () => setFriends(friends.filter(f => f !== "Abdul Rahman"))

    const handleUpdateFd = () => setFriends(friends.map(f => f === "Ali Murtaza" ? "Mohammed Ali Murtaza" : f))

    return (
        <div style={containerStyle}>
            <h1>Friends List</h1>
            {friends.map((friend, index) => (
                <div key={index} style={cardStyle}>
                    <p style={nameStyle}>Full Name: {friend}</p>
                </div>
            ))}
            <button
                onClick={handleAddNewFd}
                style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    borderRadius: "5px",
                    transition: "0.3s",
                    marginTop: "10px"
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#45a049"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#4CAF50"}
            >
                Add New Friend
            </button>

            <button
                onClick={removeFd}
                style={{
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    borderRadius: "5px",
                    transition: "0.3s",
                    margin: "10px",
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#d32f2f"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#f44336"}
            >
                Remove One Friend
            </button>

            <button
                onClick={handleUpdateFd}
                style={{
                    backgroundColor: "#ff9800",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    borderRadius: "5px",
                    transition: "0.3s",
                    margin: "10px",
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#e68900"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#ff9800"}
            >
                Update One Friend
            </button>



        </div>
    );
};

export default Friend;
