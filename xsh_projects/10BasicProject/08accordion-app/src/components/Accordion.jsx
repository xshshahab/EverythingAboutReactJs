import { useId, useState, useRef } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);

  let id = useId();
  let random = Math.floor(Math.random() * 8798);
  let key = `${id} + ${random}-${id}`;
  console.log(key);

  const sectionStyle = {
    border: "1px solid #444",
    borderRadius: "8px",
    marginBottom: "10px",
    background: "#1e1e1e",
    color: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
    fontFamily: "Arial, sans-serif",
    overflow: "hidden",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    fontSize: "18px",
    cursor: "pointer",
    userSelect: "none",
    background: "#2b2b2b",
    borderRadius: "8px 8px 0 0",
    transition: "background 0.3s ease",
  };

  const iconStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const contentWrapperStyle = {
    maxHeight: isActive ? contentRef.current?.scrollHeight + "px" : "0px",
    overflow: "hidden",
    transition: "max-height 0.5s ease",
  };

  const contentStyle = {
    padding: "15px",
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#ccc",
    background: "#1e1e1e",
  };

  return (
    <section style={sectionStyle} key={key}>
      <div
        style={headerStyle}
        onClick={() => setIsActive(!isActive)}
        onMouseOver={(e) => (e.currentTarget.style.background = "#3b3b3b")}
        onMouseOut={(e) => (e.currentTarget.style.background = "#2b2b2b")}
      >
        <div>{title}</div>
        <p style={iconStyle}>{isActive ? "−" : "+"}</p>
      </div>
      <div ref={contentRef} style={contentWrapperStyle}>
        <p style={contentStyle}>{content}</p>
      </div>
    </section>
  );
};

export default Accordion;
