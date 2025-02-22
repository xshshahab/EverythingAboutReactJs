import React, { useState, useReducer } from "react";
import { initialState, counterReducer } from "../hook/counterReducer";

const Counter = () => {
    const [inputValue, setInputValue] = useState(0);
    const [state, dispatch] = useReducer(counterReducer, initialState);

    const handleIncrementByAmount = () => {
        dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
        setInputValue(0);
    };

    const handleDecrementByAmount = () => {
        dispatch({ type: "decrementByAmount", payload: Number(inputValue) });
        setInputValue(0);
    };

    return (
        <div className="flex justify-center flex-col gap-4 items-center min-h-[55vh]">
            <h1 className='text-3xl text-orange-500 font-semibold text-center' >Exercise - Building Counter app</h1>
            <div className="w-full max-w-md p-6 bg-gray-800 text-white border border-orange-500 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-center mb-4">
                    Count: <span className="text-orange-400">{state.count}</span>
                </h2>

                <div className="flex justify-center gap-4 mb-6">
                    <button
                        onClick={() => dispatch({ type: "increment" })}
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 transition rounded-lg shadow-md"
                    >
                        Increment
                    </button>
                    <button
                        onClick={() => dispatch({ type: "decrement" })}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 transition rounded-lg shadow-md"
                    >
                        Decrement
                    </button>
                </div>

                <div className="flex flex-col items-center space-y-4">
                    <label htmlFor="inputValue" className="text-lg font-medium">
                        Amount:
                    </label>
                    <input
                        type="number"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="w-24 p-2 text-center text-white rounded border border-gray-300"
                        id="inputValue"
                    />

                    <div className="flex justify-center gap-4 mt-4">
                        <button
                            onClick={handleIncrementByAmount}
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition rounded-lg shadow-md"
                        >
                            Add
                        </button>
                        <button
                            onClick={handleDecrementByAmount}
                            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 transition rounded-lg shadow-md"
                        >
                            Subtract
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
