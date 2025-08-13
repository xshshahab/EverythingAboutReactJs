{
  /* Learning Inline CSS */
}

const StyleCard = () => {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "20px",
        borderRadius: "10px",
        border: "1px solid #ccc",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          fontFamily: "monospace",
        }}
      >
        Hello Style Inline Card{" "}
      </h1>
    </div>
  );
};

export default StyleCard;
