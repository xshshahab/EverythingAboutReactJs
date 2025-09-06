import React from "react";
import ReactDOM from "react-dom/client";
import { withProvider } from "./hoc/withProvider";
import App from "./App";
import "./index.css";

const AppWithProvider = withProvider(App);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppWithProvider />
  </React.StrictMode>
);
