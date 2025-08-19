import { useEffect, useState } from "react";

const ProblemFetchingData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json)
      .then((result) => setData(result));
  }, []);

  return (
    <>
      <p>{data.length === 0 && <span>Data fetching...</span>}</p>
      <div>
        {data &&
          data.map((item) => {
            return <p key={item.div}>{item.title}</p>;
          })}
      </div>
    </>
  );
};

export default ProblemFetchingData;
