import React from 'react'

const Header = () => {
    return (
        <nav style={{ marginBottom: "20px", padding: "20px" }}>
            <h1>Navbar</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Header