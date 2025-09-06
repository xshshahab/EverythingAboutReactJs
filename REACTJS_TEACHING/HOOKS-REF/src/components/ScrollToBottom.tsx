import React, { useRef } from "react";

const ScrollToBottom: React.FC = () => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div>
        {Array.from({ length: 20 }, (_, index) => (
          <div key={index}>Message - {index + 1}</div>
        ))}

        <div ref={messagesEndRef} />
        <button onClick={scrollToBottom} style={{ marginTop: "10px" }}>
          Scroll to bottom
        </button>
      </div>
    </div>
  );
};

export default ScrollToBottom;
