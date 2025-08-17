import { useEffect, useState } from "react";

const MohanData = () => {
  const [data, setData] = useState([]);

  console.log("data: ", data);

  const getData = async () => {
    let respose = await fetch("https://jsonplaceholder.typicode.com/posts");
    let result = await respose.json();
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.length === 0 && <div>Data Loading...</div>}
      {/* {data.map(({ id, body, title }) => {
        return (
          <ul key={id}>
            <li>Title : {title}</li>
            <li>Body : {body}</li>
          </ul>
        );
      })} */}
      {data.map(({ id, title, body }) => {
        return (
          <div key={id}>
            <h1>{title}</h1>
            <h2>{body}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default MohanData;
