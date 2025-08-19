import useFetch from "../hooks/useFetch";

const SolveFetchingData = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
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

export default SolveFetchingData;
