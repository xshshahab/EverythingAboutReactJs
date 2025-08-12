const ListsIteration = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const keys = Math.floor(Math.random() * 10);

  return (
    <div>
      {numbers.map((num) => {
        return (
          <ul key={keys}>
            <li>{num}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default ListsIteration;
