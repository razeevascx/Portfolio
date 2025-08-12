import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App";
import App2 from "./App-test";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App2 />
  </StrictMode>
);
