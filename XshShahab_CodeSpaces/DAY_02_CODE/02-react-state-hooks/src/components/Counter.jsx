import { useState } from "react";

const Counter = () => {
  const [data, setData] = useState(0);

  const dataHandler = () => {
    console.log("Data increase");
    setData(data + 1);
  };
  return (
    <div>
      <h1>Data Increases Only.</h1>
      <br />
      <p onClick={dataHandler}> Click me to increase the data value : {data}</p>
    </div>
  );
};

export default Counter;
