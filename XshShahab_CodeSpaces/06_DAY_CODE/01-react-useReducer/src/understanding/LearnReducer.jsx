import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const LearnReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ margin: "10px 0" }}>Count : {state.count}</h1>
      <button
        style={{ padding: "5px 20px", fontSize: "20px", marginLeft: "5px" }}
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
      <button
        style={{ padding: "5px 20px", fontSize: "20px", marginLeft: "5px" }}
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
      <button
        style={{ padding: "5px 20px", fontSize: "20px", marginLeft: "5px" }}
        onClick={() => dispatch({ type: "reset" })}
      >
        x
      </button>
    </div>
  );
};

export default LearnReducer;
