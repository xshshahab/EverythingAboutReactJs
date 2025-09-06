import React, { useRef } from "react";

const InputRef: React.FC = () => {
  const inpRef = useRef<HTMLInputElement>(null);

  const handleClickRef = () => {
    if (inpRef.current) {
      inpRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inpRef} type="text" />
      <button onClick={handleClickRef}>Click me to focus on input</button>
    </div>
  );
};

export default InputRef;
