import AdvCounter from "./advancedVersion/AdvCounter";
import AdvProfile from "./advancedVersion/AdvProfile";
import AdvTodoList from "./advancedVersion/AdvTodoList";
import Counter from "./components/Counter";
import Profile from "./components/Profile";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <section
        id="withoutstyle"
        style={{ padding: "20px", margin: "20px", border: "2px solid #ccc" }}
      >
        <h1 style={{ marginBottom: "10px" }}>
          React.js Practice Example without style
        </h1>
        <Counter /> <br />
        <br />
        <TodoList /> <br /> <br />
        <Profile /> <br /> <br />
      </section>

      <section
        id="with-style"
        style={{ padding: "20px", margin: "20px", border: "2px solid #222" }}
      >
        <h1 style={{ marginBottom: "10px" }}>
          React.js Practice Example with style
        </h1>
        <AdvCounter />
        <AdvTodoList />
        <AdvProfile />
      </section>
    </div>
  );
};

export default App;
