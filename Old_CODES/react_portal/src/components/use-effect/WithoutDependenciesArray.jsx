import React, { useEffect, useState } from "react";

const WithoutDependenciesArray = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log("call useEffect");
        document.title = `Increment ${value}`;
    });

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1 style={{ marginBottom: "10px" }}>Without Dependencies Array</h1>
            <h2 style={{ marginBottom: "15px" }}>Value: {value}</h2>
            <button
                onClick={() => setValue(value + 1)}
                style={{
                    backgroundColor: "blue",
                    color: "white",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                    marginBottom: "20px",
                }}
            >
                Click Me
            </button>
        </div>
    );
};

export default WithoutDependenciesArray;
