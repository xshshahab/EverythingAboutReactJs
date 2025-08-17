import React, { useState } from "react";

const AdvCounter = () => {
  const [count, setCount] = useState(0);

  // Inline styles for dark mode
  const styles = {
    container: {
      padding: "20px",
      backgroundColor: "#121212",
      color: "#f5f5f5",
      minHeight: "10vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      fontSize: "3rem",
      marginBottom: "20px",
    },
    button: {
      padding: "10px 20px",
      margin: "10px",
      fontSize: "1rem",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      backgroundColor: "#1f1f1f",
      color: "#f5f5f5",
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
      transition: "background-color 0.2s ease",
    },
    buttonHover: {
      backgroundColor: "#333",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Count : {count}</h1>
      <div>
        <button style={styles.button} onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button style={styles.button} onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default AdvCounter;
