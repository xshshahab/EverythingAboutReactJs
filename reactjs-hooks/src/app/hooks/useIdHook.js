import React, { useId } from "react";

const useIdHook = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-example`}>Example Label</label>
      <input type="text" id={`${id}-example`} />
    </div>
  );
};
