import React, { useRef } from 'react';

const FocusInput = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <section className="bg-gray-900 my-3 font-normal p-6 rounded-lg shadow-lg max-w-sm mx-auto text-center">
            <h1 className='text-2xl text-orange-500 mb-4 font-bold'>Focus Input Exercise</h1>
            <input
                type="text"
                ref={inputRef}
                placeholder="Click the button to focus"
                className="w-full px-4 py-2 mb-4 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleFocus}
                className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200"
            >
                Focus
            </button>
        </section>
    );
};

export default FocusInput;
