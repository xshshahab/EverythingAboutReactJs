import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        if (input.trim() === "") return;
        setTodos((todos) => {
            return todos.concat({
                text: input,
                id: Math.round(Math.random() * 10)
            })
        });

        setInput("");
    }

    const closeTodo = (id) => {
        setTodos(todos => todos.filter(t => t.id !== id));
    }

    return (
        <main>
            <h2>Todo App</h2>
            <input
                type="text"
                placeholder='Add new todos'
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>

            <ul>
                {todos && todos.map(todo => (
                    <li key={todo.id}>
                        <h3>{todo.text}</h3>
                        <button className='close' onClick={() => closeTodo(todo.id)}>x</button>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Todo;
