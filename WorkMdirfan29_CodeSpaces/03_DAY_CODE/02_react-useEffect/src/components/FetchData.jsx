import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  console.log(data);

  let getApi = async () => {
    let dataAaya = await fetch("https://jsonplaceholder.typicode.com/todos");
    let holdData = await dataAaya.json();
    setData(holdData);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      {data.length === 0 && "DATA LOADING"}
      <>
        {data.map(({ id, title, completed }) => {
          return (
            <div>
              <input type="checkbox" name="" id="" checked={completed} /> - {id}{" "}
              - {title}
            </div>
          );
        })}
      </>
    </>
  );
};

export default FetchData;
