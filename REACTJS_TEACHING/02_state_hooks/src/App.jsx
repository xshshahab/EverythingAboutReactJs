import Counter from "./components/Counter";
import FetchList from "./components/FetchList";
import User from "./components/User";

const App = () => {
  const UserData = [
    { id: 1, username: "johnwick", age: 21 },
    { id: 2, username: "spiderman", age: 11 },
    { id: 3, username: "thor", age: 31 },
  ];

  return (
    <div>
      <Counter />
      <User data={UserData} />
      <FetchList />
    </div>
  );
};

export default App;
