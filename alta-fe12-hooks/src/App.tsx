import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import Home from "./pages/home";
import Login from "./pages/login";

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/:username" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default App;
