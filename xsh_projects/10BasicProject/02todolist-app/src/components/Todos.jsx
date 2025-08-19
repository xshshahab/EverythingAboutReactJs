import { useState } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;

    setTodos((todos) =>
      todos.concat({
        id: Math.floor(Math.random() * 10000),
        text: input,
      })
    );

    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const styles = {
    app: {
      backgroundColor: "#121212",
      color: "#E0E0E0",
      minHeight: "100vh",
      padding: "2rem",
      fontFamily: "Arial, sans-serif",
    },
    input: {
      padding: "0.5rem",
      border: "1px solid #333",
      borderRadius: "4px",
      backgroundColor: "#1F1F1F",
      color: "#E0E0E0",
      marginRight: "0.5rem",
      width: "250px",
    },
    button: {
      padding: "0.5rem 1rem",
      backgroundColor: "#BB86FC",
      color: "#121212",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    buttonHover: {
      backgroundColor: "#3700B3",
    },
    list: {
      listStyleType: "none",
      padding: 0,
      marginTop: "1rem",
    },
    listItem: {
      backgroundColor: "#1F1F1F",
      border: "1px solid #333",
      padding: "0.75rem",
      borderRadius: "4px",
      marginBottom: "0.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    removeButton: {
      backgroundColor: "#BB86FC",
      border: "none",
      borderRadius: "4px",
      color: "#121212",
      cursor: "pointer",
      padding: "0.25rem 0.5rem",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.app}>
      <section>
        <h1>Todo App</h1>
        <input
          type="text"
          placeholder="Add a new todo"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          style={styles.input}
        />
        <button style={styles.button} onClick={handleAdd}>
          Add
        </button>
      </section>

      <section>
        <ul style={styles.list}>
          {todos.map(({ text, id }) => (
            <li key={id} style={styles.listItem}>
              <span>{text}</span>
              <button
                style={styles.removeButton}
                onClick={() => removeTodo(id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
