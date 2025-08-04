import React from 'react';

const Cart = () => {
    const items = ["Wireless Earphone", "Power Bank", "New SSD", "Hoddie"];
    return (
        <div>
            <h1>Cart</h1>
            {items.length > 0 && <h2>You have {items.length} items in your cart.</h2>}

            <ul style={{ padding: "20px" }}>
                <h3>Products.</h3>
                {items.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

        </div>
    );
}

export default Cart;