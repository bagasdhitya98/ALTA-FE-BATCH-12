import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { CountProvider } from "./context/countContext";
import { AuthProvider } from "./context/authContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <CountProvider>
        <App />
      </CountProvider>
    </AuthProvider>
  </React.StrictMode>
);
