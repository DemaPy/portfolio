import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./routes/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container mx-auto md:px-6 px-2">
      <Router />
    </div>
  </React.StrictMode>
);
