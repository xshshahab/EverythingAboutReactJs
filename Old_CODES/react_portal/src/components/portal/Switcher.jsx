import React, { useState } from "react";

const Switcher = () => {
    const [sw, setSw] = useState(false);

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "40vh",
        backgroundColor: sw ? "#111" : "#84a6f5",
        color: sw ? "white" : "black",
        transition: "background 0.3s ease-in-out, color 0.3s ease-in-out",
        border: "1px solid gray",
        borderRadius: "5px"
    };

    const inputStyle = {
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "16px",
        margin: "10px 5px",
        backgroundColor: sw ? "#555" : "#fff",
        color: sw ? "white" : "black",
    };

    const buttonStyle = {
        backgroundColor: sw ? "orange" : "blue",
        color: "white",
        border: "none",
        padding: "9px 15px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background 0.3s",
    };

    return (
        <section style={containerStyle}>
            <span>{sw ? "Dark" : "Light"}</span>
            <div>
                <input type="text" key={sw ? "dark" : "light"} style={inputStyle} />
                <button onClick={() => setSw((s) => !s)} style={buttonStyle}>
                    Switch
                </button>
            </div>
        </section>
    );
};

export default Switcher;
