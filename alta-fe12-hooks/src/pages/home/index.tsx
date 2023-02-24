import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  return (
    <div>
      <h1>{location?.state?.name}</h1>
    </div>
  );
};

export default Home;
