import { useState } from "react";

const AdvTodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");

  const handleAddNewTodo = () => {
    if (inputTodo.trim()) {
      setTodos([...todos, inputTodo]);
      setInputTodo("");
    }
  };

  // Inline styles
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      maxWidth: "900px",
      margin: "40px auto",
      border: "1px solid #ccc",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      backgroundColor: "#332",
    },
    form: {
      display: "flex",
      justifyContent: "space-between",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      flex: 1,
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#45a049",
    },
    todoList: {
      listStyleType: "none",
      padding: 0,
    },
    todoItem: {
      backgroundColor: "#222",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
    },
    noTodos: {
      textAlign: "center",
      color: "#999",
    },
  };

  return (
    <div style={styles.container}>
      <div id="todo-form" style={styles.form}>
        <input
          type="text"
          placeholder="Add a new todo..."
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddNewTodo} style={styles.button}>
          Add Todo
        </button>
      </div>

      <div id="list-todos">
        {todos.length === 0 && (
          <div style={styles.noTodos}>Todos Not Available</div>
        )}
        <ul style={styles.todoList}>
          {todos.map((todo, index) => (
            <li key={index} style={styles.todoItem}>
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdvTodoList;
