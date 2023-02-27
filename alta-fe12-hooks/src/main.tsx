import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { CountProvider } from "./context/countContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CountProvider>
      <App />
    </CountProvider>
  </React.StrictMode>
);
