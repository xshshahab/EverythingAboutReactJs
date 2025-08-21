import React, { useState } from "react";

interface TodoState {
  id: number;
  task: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<TodoState[]>([]);

  const addTodo = (task: string) => {
    let newTodo: TodoState = {
      id: todos.length + 1,
      task,
      completed: true,
    };

    setTodos((prevTodo) => [...prevTodo, newTodo]);
  };

  return (
    <div>
      <h2>Todo List App</h2>

      <button
        onClick={() => addTodo(`New todo => ${Math.floor(Math.random() * 10)}`)}
      >
        Add Todo
      </button>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.task} {todo.completed ? "(Completed)" : ""}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoApp;
