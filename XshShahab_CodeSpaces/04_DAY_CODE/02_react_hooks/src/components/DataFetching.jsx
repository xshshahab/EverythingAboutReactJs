import { useEffect, useState } from "react";

const DataFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const rawData = await response.json();
      if (rawData && rawData.length) setData(rawData);
    }

    getData();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#1e1e1e", // dark background
        color: "#f0f0f0", // light text
        maxWidth: "600px",
        margin: "0 auto",
        border: "1px solid #333",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
      }}
    >
      <h2
        style={{ textAlign: "center", color: "#ffffff", marginBottom: "10px" }}
      >
        Todo List
      </h2>
      {data.length === 0 && (
        <p
          style={{
            textAlign: "center",
            margin: "10px 0",
            color: "#b00020",
            backgroundColor: "#ffebee",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          Todos Not Available
        </p>
      )}
      {data.map((d) => (
        <div
          key={d.id}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            backgroundColor: d.completed ? "#2d4a2d" : "#2c2c2c", // greenish or dark gray
            marginBottom: "8px",
            borderRadius: "4px",
            border: "1px solid #444",
          }}
        >
          <input
            type="checkbox"
            checked={d.completed}
            readOnly
            style={{
              marginRight: "10px",
              accentColor: "#00ff99", // checkbox color
              width: "16px",
              height: "16px",
            }}
          />
          <span style={{ color: "#e0e0e0" }}>
            <strong>{d.id}</strong> - {d.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DataFetching;
