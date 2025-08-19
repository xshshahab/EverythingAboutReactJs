import { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInputValue("");
    } else if (value === "DEL") {
      setInputValue(inputValue.slice(0, -1));
    } else if (value === "=") {
      try {
        // eslint-disable-next-line no-eval
        setInputValue(eval(inputValue).toString());
      } catch {
        setInputValue("Error");
      }
    } else {
      setInputValue(inputValue + value);
    }
  };

  const buttonStyle = {
    flex: "1 0 21%",
    margin: "5px",
    padding: "15px",
    fontSize: "18px",
    borderRadius: "8px",
    border: "none",
    background: "#333",
    color: "#fff",
    cursor: "pointer",
    textAlign: "center",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.6)",
    transition: "all 0.2s ease-in-out",
  };

  const containerStyle = {
    width: "320px",
    margin: "50px auto",
    padding: "20px",
    border: "2px solid #444",
    borderRadius: "12px",
    background: "#1e1e1e",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.7)",
  };

  const inputStyle = {
    width: "100%",
    padding: "15px",
    fontSize: "22px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "none",
    background: "#000",
    color: "#0f0",
    textAlign: "right",
    boxShadow: "inset 0px 2px 6px rgba(0,0,0,0.8)",
  };

  const buttonContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  return (
    <div style={containerStyle}>
      <input type="text" value={inputValue} readOnly style={inputStyle} />
      <div style={buttonContainerStyle}>
        {[
          "C",
          "DEL",
          "%",
          "/",
          "7",
          "8",
          "9",
          "*",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "+",
          "0",
          ".",
          "=",
        ].map((btn) => (
          <button
            key={btn}
            style={{
              ...buttonStyle,
              background: btn === "=" ? "#0a84ff" : "#333",
              color: btn === "=" ? "#fff" : "#fff",
            }}
            onClick={() => handleClick(btn)}
            onMouseOver={(e) =>
              (e.target.style.background = btn === "=" ? "#0066cc" : "#444")
            }
            onMouseOut={(e) =>
              (e.target.style.background = btn === "=" ? "#0a84ff" : "#333")
            }
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
