import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import Home from "./pages/home";
import Login from "./pages/login";
import Products from "./pages/products";
import Detail from "./pages/detail";
import Count from "./pages/count";
import Results from "./pages/results";

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/:username" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/detail/:name" element={<Detail />} />
          <Route path="/count" element={<Count />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default App;
