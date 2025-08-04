import React, { useState } from "react";

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !quantity) return;

        const newItem = {
            name,
            quantity: parseInt(quantity)
        };

        setItems((prevItems) => [...prevItems, newItem]);
        setName("");
        setQuantity("");
    };

    // 🎨 Object styles
    const styles = {
        container: {
            textAlign: "center",
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#2C3E50",
            color: "white",
            minHeight: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        heading: {
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#1ABC9C"
        },
        form: {
            backgroundColor: "#34495E",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            width: "300px"
        },
        inputContainer: {
            marginBottom: "15px"
        },
        label: {
            fontSize: "16px",
            display: "block",
            marginBottom: "5px"
        },
        input: {
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #1ABC9C",
            backgroundColor: "#2C3E50",
            color: "white",
            fontSize: "16px",
            outline: "none"
        },
        button: {
            width: "100%",
            padding: "10px",
            backgroundColor: "#1ABC9C",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "10px"
        },
        listContainer: {
            marginTop: "20px",
            width: "300px",
            textAlign: "left",
            padding: "15px",
            borderRadius: "8px",
            backgroundColor: "#1F2C3D"
        },
        listItem: {
            fontSize: "18px",
            color: "#ECF0F1",
            padding: "5px 0",
            borderBottom: "1px solid #1ABC9C"
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Your Shopping List</h1>

            <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.inputContainer}>
                    <label style={styles.label} htmlFor="name">Item Name:</label>
                    <input
                        style={styles.input}
                        placeholder="Enter item name..."
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div style={styles.inputContainer}>
                    <label style={styles.label} htmlFor="quantity">Quantity:</label>
                    <input
                        style={styles.input}
                        placeholder="Enter quantity..."
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <input type="submit" value="Add Item" style={styles.button} />
            </form>

            {items.length > 0 && (
                <ul style={styles.listContainer}>
                    {items.map((item, idx) => (
                        <li key={idx} style={styles.listItem}>
                            {item.name} - {item.quantity}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ShoppingList;
