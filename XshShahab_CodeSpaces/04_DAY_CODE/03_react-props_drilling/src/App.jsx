import { ComponentA } from "./components/ComponentA";

const App = () => {
  const user = {
    username: "xshshahab",
    age: 21,
    region: "India",
  };

  return (
    <div>
      <ComponentA user={user} />
    </div>
  );
};

export default App;
