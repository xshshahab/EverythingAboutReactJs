import React, { use } from "react";

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
};

const FetchTodo: React.FC = () => {
  const data = use(fetchData());

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
};

export default FetchTodo;
