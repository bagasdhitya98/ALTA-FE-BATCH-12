import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { CountProvider } from "./context/countContext";
import { AuthProvider } from "./context/authContext";
import { CartProvider } from "./context/cartContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <AuthProvider>
        <CountProvider>
          <App />
        </CountProvider>
      </AuthProvider>
    </CartProvider>
  </React.StrictMode>
);
