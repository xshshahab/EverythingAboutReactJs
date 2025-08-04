import React from 'react'
import Counter from '../solutions/Counter'
import TodoList from '../solutions/TodoList'
import MyProfile from '../solutions/MyProfile'
import ShoppingList from '../solutions/ShoppingList'

const Solution = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", padding: "30px ", border: "2px solid pink", borderRadius: "10px" }}>
            <Counter />
            <TodoList />
            <MyProfile />
            <ShoppingList />
        </div>
    )
}

export default Solution