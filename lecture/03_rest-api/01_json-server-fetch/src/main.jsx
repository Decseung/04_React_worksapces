import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/PostApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
