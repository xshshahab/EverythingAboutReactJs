import React from "react";
import CompA from "./components/CompA";

function App() {

  let name = "Mohammad Shahabuddin";
  let username = "xshshahab"

  return (
    <div className="bg-zinc-900 flex justify-center min-h-screen">
      <CompA name={name} username={username} />
    </div>
  )
}

export default App;
