import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "@styles/index.css";
import App from "@components/Flowsheet";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
