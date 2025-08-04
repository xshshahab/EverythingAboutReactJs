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

const useCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { count: state.count, dispatch };
};

export default useCounter;
