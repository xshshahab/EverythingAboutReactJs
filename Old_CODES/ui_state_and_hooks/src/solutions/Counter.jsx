import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    // 🎨 Object styles
    const styles = {
        container: {
            textAlign: "center",
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#282c34",
            color: "white",
            minHeight: "10vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        heading: {
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#00FFFF"
        },
        button: {
            padding: "12px 20px",
            margin: "5px 10px",
            borderRadius: "5px",
            border: "2px solid cyan",
            backgroundColor: "transparent",
            color: "#00FFFF",
            fontSize: "18px",
            cursor: "pointer",
            transition: "0.3s ease"
        },
        buttonHover: {
            backgroundColor: "#00FFFF",
            color: "#282c34"
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Counter Value : {count}</h1>
            <button
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#00FFFF", e.target.style.color = "#282c34")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "transparent", e.target.style.color = "#00FFFF")}
                onClick={() => setCount(prevCount => prevCount + 1)}
            >
                Increment
            </button>
            <button
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#FF4500", e.target.style.color = "#fff")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "transparent", e.target.style.color = "#00FFFF")}
                onClick={() => setCount(prevCount => prevCount - 1)}
            >
                Decrement
            </button>
            <button
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#FF4500", e.target.style.color = "#fff")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "transparent", e.target.style.color = "#00FFFF")}
                onClick={() => setCount(prevCount => prevCount * 5)}
            >
                Updated by 5
            </button>
        </div>
    );
};

export default Counter;
