import React, { useState } from "react";
import ExerciseApp from "../exercise/ExerciseApp";
import App from "../app/App";

const Layout = () => {
    const [activeTab, setActiveTab] = useState("app");

    return (
        <div className="flex flex-col items-center min-h-screen bg-neutral-900 text-white">
            <div className="flex space-x-2 my-2 bg-gray-800 p-3 rounded-lg shadow-md">
                <button
                    className={`px-6 py-2 rounded-md transition ${activeTab === "app"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-700 hover:bg-gray-600"
                        }`}
                    onClick={() => setActiveTab("app")}
                >
                    Main App
                </button>
                <button
                    className={`px-6 py-2 rounded-md transition ${activeTab === "exercise"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-700 hover:bg-gray-600"
                        }`}
                    onClick={() => setActiveTab("exercise")}
                >
                    Exercise App
                </button>
            </div>

            <div className="w-full p-6 min-h-screen my-5 bg-zinc-900 rounded-b-lg shadow-lg">
                {activeTab === "app" ? <App /> : <ExerciseApp />}
            </div>
        </div>
    );
};

export default Layout;
