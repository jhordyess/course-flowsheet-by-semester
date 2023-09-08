import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import Home from "./Home";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
