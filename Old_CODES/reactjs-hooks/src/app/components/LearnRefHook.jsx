import React, { useRef, useState } from 'react';

const LearnRefHook = () => {
    const [inputVal, setInputVal] = useState("");
    const [items, setItems] = useState([]);
    const inputElement = useRef(null);

    function focusInput() {
        inputElement.current.focus();
        inputElement.current.value = "XshShahab";
        setInputVal("XshShahab");
    }

    const handleReset = () => {
        setInputVal("");
        inputElement.current.value = "";
        inputElement.current.focus();
    };

    const handleAdd = () => {
        if (inputVal.trim() === "") return; // Prevent adding empty items
        setItems([...items, inputVal]);
        setInputVal("");
        inputElement.current.value = "";
        inputElement.current.focus();
    };

    const handleDelete = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    return (
        <section className="my-5 max-w-4xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg text-white">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-200">React useRef Hook Example</h2>

            {/* Input & Buttons */}
            <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
                <input
                    placeholder="Add anything..."
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    type="text"
                    ref={inputElement}
                    className="flex-1 px-4 py-2 border border-gray-700 rounded-md bg-gray-800 font-normal text-white outline-none focus:border-blue-500"
                />
                <button onClick={handleAdd} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition">
                    Add
                </button>
                <button onClick={focusInput} className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md transition">
                    Focus & Write
                </button>
                <button onClick={handleReset} className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md transition">
                    Reset
                </button>
            </div>

            {/* Display List */}
            <ul className="mt-4 space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex justify-between items-center bg-gray-800 p-3 rounded-md">
                        <span className="text-gray-300">{item}</span>
                        <button onClick={() => handleDelete(index)} className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-md transition">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default LearnRefHook;
