import { useState } from "react";

const ExampleTwo = () => {
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * 100)
  );

  const generateRandomNumber = () => {
    const rdmNumber = Math.floor(Math.random() * 100);
    setRandomNumber(rdmNumber);
  };

  return (
    <div>
      <h1>Random Number : {randomNumber}</h1>
      <button onClick={generateRandomNumber}>Generate New Number</button>
    </div>
  );
};

export default ExampleTwo;
