import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyContextProvider from "./context/MyContext.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </StrictMode>
);
