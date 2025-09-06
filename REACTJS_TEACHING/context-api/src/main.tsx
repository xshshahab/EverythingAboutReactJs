import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import OldApp from "./OldApp.tsx";
import NewApp from "./NewApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <OldApp />
      <br />
      <hr />
      <br />
      <NewApp />
    </>
  </StrictMode>
);
