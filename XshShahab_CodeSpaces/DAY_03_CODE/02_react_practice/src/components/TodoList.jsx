import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");

  const handleAddNewTodo = () => {
    if (inputTodo.trim()) {
      setTodos([...todos, inputTodo]);
      setInputTodo("");
    }
  };

  return (
    <div>
      <div id="todo-form">
        <input
          type="text"
          placeholder="Add a new todo..."
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button onClick={handleAddNewTodo}>Add Todo</button>
      </div>

      <div id="list-todos">
        {todos.length > 0 || <div>Todos Not Available</div>}
        {todos.map((todo) => {
          return (
            <ul key={Math.random() * 10}>
              <li>{todo}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
