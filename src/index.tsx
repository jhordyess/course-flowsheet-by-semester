import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "@styles/global.css";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
