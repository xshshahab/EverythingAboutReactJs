import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './HiddenSearchBar.css';

const HiddenSearchBar = () => {
    const [showInput, setShowInput] = useState(false);
    const [bgColor, setBgColor] = useState("white");

    const handleClick = (e) => {
        setBgColor("#1a1a1a");

        if (e.target.className === "container") {
            setShowInput(false);
            setBgColor("#fff");
        }
    }

    return (
        <section
            style={{ backgroundColor: bgColor }}
            className='container'
            onClick={handleClick}
        >
            {
                showInput ? (
                    <input type="text" placeholder='Search....' className="search-input" />
                ) : (
                    <div className='my-search' onClick={() => setShowInput(true)}>
                        <FaSearch
                            size={20}
                            color='#333'
                        />
                        <p style={{ fontSize: "20px", color: "#333" }}>Search</p>
                    </div>

                )
            }
        </section>
    );
}

export default HiddenSearchBar;
