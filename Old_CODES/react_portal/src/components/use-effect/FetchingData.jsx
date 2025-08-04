import React, { useEffect, useState } from "react";
import "./FetchingData.css";

const FetchingData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const result = await response.json();

            if (result && result.length) {
                setData(result);
            }
        }

        getData();
    }, []);

    return (
        <div className="container">
            <h1>Fetching Data</h1>
            <div className="grid">
                {data.map((curData) => {
                    const { id, title, completed } = curData;

                    return (
                        <div key={id} className="card">
                            <div className="card-header">
                                <span className="id">ID: {id}</span>
                                <span className={`status ${completed ? "completed" : "pending"}`}>
                                    {completed ? "✔" : "❌"}
                                </span>
                            </div>
                            <h2 className="title">{title}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FetchingData;
