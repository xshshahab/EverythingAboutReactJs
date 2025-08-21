import React, { type MouseEvent } from "react";

const EventHandling: React.FC = () => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("Button Clicked: ", event.currentTarget);
  };

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Entered: ", event.currentTarget);
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
      <h1>Event Handling Example</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default EventHandling;
