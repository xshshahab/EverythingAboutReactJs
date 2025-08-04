import React, { useState } from 'react';

const TodoList = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setTodos(prevTodos => [{ name, email }, ...prevTodos]);

        setName("");
        setEmail("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 style={{ padding: "5px", margin: "5px" }}>TodoList App :</h1>
            <div style={{ padding: "10px", margin: "5px" }}>
                <label htmlFor="name">Name: </label>
                <input
                    required
                    type="text"
                    id='name'
                    placeholder='Enter Your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div style={{ padding: "10px", margin: "5px" }}>
                <label htmlFor="email">Email: </label>
                <input
                    required
                    type="email"
                    id='email'
                    placeholder='Enter Your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br /> <br />
                <button style={{ padding: "10px 25px", margin: "5px" }} type="submit">Submit</button>
            </div>
            {
                todos.length > 0 && <div>
                    <h3>Todo List:</h3>
                    <ul>
                        {todos.map((todo, index) => (
                            <ul style={{ padding: "30px 50px", border: "1px solid crimson", margin: "10px" }} key={index}>
                                <li>
                                    Name : {todo.name}
                                </li>
                                <li>
                                    Email : {todo.email}
                                </li>
                            </ul>
                        ))}
                    </ul>
                </div>
            }
        </form>
    );
};

export default TodoList;
