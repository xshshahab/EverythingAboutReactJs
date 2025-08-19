import React, { useState } from "react";

const ToggleBackground = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleBtnClick = () => {
    setBackgroundColor(backgroundColor === " white" ? "#1b1b1b1" : "white");

    setTextColor(textColor === "#1b1b1b" ? "ffa31a" : "#1b1b1b");

    setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
  };

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <section>
        <h1>Toggle Background Color</h1>
        <h2>
          Welcome To A <br /> Real World.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
          voluptatibus consectetur ipsa asperiores dolor magni repudiandae
          accusamus nam quam sint nulla optio necessitatibus non velit,
          perferendis laboriosam quod. Officia necessitatibus iusto voluptates
          nulla repellat.
        </p>
      </section>
      <button
        style={{
          border: `2px solid ${textColor}`,
          buttonStyle,
          color: textColor,
        }}
        onClick={handleBtnClick}
      >
        {backgroundColor === "#1b1b1b" ? "Black Theme" : "Light Theme"}
      </button>
    </div>
  );
};

export default ToggleBackground;
