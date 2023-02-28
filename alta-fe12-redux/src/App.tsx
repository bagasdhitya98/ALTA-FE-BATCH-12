import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Product from "./pages/product";
import Count from "./pages/count";
import Login from "./pages/login";
import Detail from "./pages/detail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/count" element={<Count />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
