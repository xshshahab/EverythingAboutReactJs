import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BlogProvider } from "./context/BlogContext.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BlogProvider>
      <App />
    </BlogProvider>
  </StrictMode>
);
