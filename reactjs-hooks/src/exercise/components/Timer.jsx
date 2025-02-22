import React, { useEffect, useRef, useState } from 'react';

const Timer = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <section className="bg-gray-900 font-normal text-white p-6 rounded-lg shadow-lg max-w-sm mx-auto text-center mt-10">
            <h1 className="text-2xl font-bold text-orange-500 mb-4">Timer Exercise</h1>
            <h2 className="text-xl font-semibold mb-6">Timer: <span className="text-blue-400">{count}</span> seconds</h2>
            <button
                onClick={() => clearInterval(intervalRef.current)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 transition-all duration-200 rounded-lg font-semibold"
            >
                Stop Timer
            </button>
        </section>
    );
};

export default Timer;
