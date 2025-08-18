import { useReducer, useState } from "react";
import { initialState, counterReducer } from "../reducer/counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(null);

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });
  const handleReset = () => dispatch({ type: "reset" });

  const handleIncrementByAmount = () => {
    dispatch({
      type: "incrementByAmount",
      payload: Number(inputValue),
    });
    setInputValue("");
  };

  const handleDecrementByAmount = () => {
    dispatch({
      type: "decrementByAmount",
      payload: Number(inputValue),
    });
    setInputValue("");
  };

  return (
    <div>
      <h2>Count : {state.count}</h2>
      <section>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </section>
      <section>
        <input
          placeholder="Enter number"
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Sub</button>
      </section>
    </div>
  );
};

export default Counter;
