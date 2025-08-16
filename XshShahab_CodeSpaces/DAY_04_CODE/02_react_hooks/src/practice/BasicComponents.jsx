import React, { useEffect } from "react";

const BasicComponents = () => {
  useEffect(() => {
    console.log("Basic Component Mounted!");
  }, []);

  return (
    <div>
      <h1>Check the console to see the message </h1>
      <p>Press Ctrl + Shift + i</p>
    </div>
  );
};

export default BasicComponents;
