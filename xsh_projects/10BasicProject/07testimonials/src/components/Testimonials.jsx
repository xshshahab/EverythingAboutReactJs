import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: "test-01",
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      id: "test-02",
      quote: "Amazing quality and fantastic customer support.",
      author: "John Smith",
    },
    {
      id: "test-03",
      quote: "I recommend this to all my friends. Worth every penny!",
      author: "Emily Johnson",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const containerStyle = {
    width: "400px",
    margin: "60px auto",
    padding: "30px",
    borderRadius: "12px",
    background: "#1e1e1e",
    color: "#fff",
    textAlign: "center",
    boxShadow: "0px 6px 20px rgba(0,0,0,0.5)",
    fontFamily: "Arial, sans-serif",
  };

  const quoteStyle = {
    fontSize: "20px",
    fontStyle: "italic",
    marginBottom: "15px",
    color: "#ddd",
    lineHeight: "1.5",
  };

  const authorStyle = {
    fontWeight: "bold",
    fontSize: "16px",
    marginBottom: "25px",
    color: "#0a84ff",
  };

  const buttonSectionStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const buttonStyle = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    background: "#333",
    color: "#fff",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <div style={containerStyle}>
      <div style={quoteStyle}>"{testimonials[currentIndex].quote}"</div>
      <div style={authorStyle}>- {testimonials[currentIndex].author}</div>

      <section style={buttonSectionStyle}>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.background = "#444")}
          onMouseOut={(e) => (e.target.style.background = "#333")}
          onClick={handlePrev}
        >
          ⬅ Prev
        </button>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.background = "#444")}
          onMouseOut={(e) => (e.target.style.background = "#333")}
          onClick={handleNext}
        >
          Next ➡
        </button>
      </section>
    </div>
  );
};

export default Testimonials;
