import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Product from "./pages/product";
import Count from "./pages/count";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/count" element={<Count />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
