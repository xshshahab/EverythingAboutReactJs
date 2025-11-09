import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./app/store";
import { increment, decrement } from "./app/features/counterSlice";

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  const value = useSelector((state: RootState) => state.counter.value);

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        background: "#f5f5f5",
        color: "#333",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", margin: 0 }}>Counter App</h1>
      <h2 style={{ margin: 0 }}>Value: {value}</h2>

      <div style={{ display: "flex", gap: "15px" }}>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "8px",
            background: "#4CAF50",
            color: "#fff",
            border: "none",
          }}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "8px",
            background: "#FF5252",
            color: "#fff",
            border: "none",
          }}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </main>
  );
};
