import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    };

    // 🎨 Object styles
    const styles = {
        container: {
            textAlign: "center",
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            color: "white",
            backgroundColor: "#333",
            minHeight: "15vh"
        },
        heading: {
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#FFD700"
        },
        form: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px"
        },
        input: {
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            background: "transparent",
            color: "yellow",
            fontSize: "16px"
        },
        button: {
            padding: "8px 12px",
            cursor: "pointer",
            border: "1px solid grey",
            borderRadius: "4px",
            background: "transparent",
            color: "yellow",
            fontSize: "16px"
        },
        listContainer: {
            textAlign: "left",
            maxWidth: "400px",
            margin: "auto"
        },
        listHeading: {
            fontSize: "20px",
            color: "#FFD700",
            marginBottom: "10px"
        },
        listItem: {
            background: "#444",
            padding: "10px",
            margin: "5px 0",
            borderRadius: "4px",
            color: "white"
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Todo List</h1>

            <form onSubmit={handleSubmit} style={styles.form}>
                <label>Add New Todos:</label>
                <input
                    required
                    type="text"
                    placeholder="Add a todo"
                    style={styles.input}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" style={styles.button}>Add Todo</button>
            </form>

            {todos.length > 0 && (
                <div style={styles.listContainer}>
                    <h2 style={styles.listHeading}>List Of All Todos:</h2>
                    <ul>
                        {todos.map((todo, index) => (
                            <li key={index} style={styles.listItem}>{todo}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default TodoList;
