import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext"; // ← import this
import "./css/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MovieProvider> {/* ← wrap App here */}
        <App />
      </MovieProvider>
    </BrowserRouter>
  </StrictMode>
);

