import { useRef } from "react";

const Input = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef?.current?.focus();
    inputRef?.current?.value = "XshShahab"
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => focusInput()}>Focus & Write XshShahab.</button>
    </div>
  );
};

export default Input;
