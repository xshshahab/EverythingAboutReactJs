import React, { useRef } from "react";

const FocusInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Click the button to focus on me."
      />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default FocusInput;
