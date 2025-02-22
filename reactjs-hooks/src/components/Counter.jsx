import React from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
    const { count, dispatch } = useCounter();

    return (
        <div className="flex flex-col items-center justify-center min-h-[30vh] bg-zinc-900 text-white">
            <h1 className="text-3xl font-bold mb-4">Counter App - Using useReducer</h1>
            <div className="flex items-center space-x-4 bg-gray-800 p-6 rounded-lg shadow-lg">
                <button
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    onClick={() => dispatch({ type: "increment" })}
                >
                    +
                </button>
                <h2 className="text-2xl font-semibold">{count}</h2>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    onClick={() => dispatch({ type: "decrement" })}
                >
                    -
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    onClick={() => dispatch({ type: "reset" })}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;
