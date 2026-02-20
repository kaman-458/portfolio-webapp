import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MouseContextProvider from "./context/MouseContext";

// Suppress browser extension errors
const originalError = console.error;
console.error = (...args) => {
  if (
    typeof args[0] === "string" &&
    args[0].includes("runtime.lastError")
  ) {
    return;
  }
  originalError.apply(console, args);
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MouseContextProvider>
        <App />
      </MouseContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
