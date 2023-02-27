import React from "react";
import Button from "../../components/Button";
import Layout from "../../components/Layout";

import { useCountContext } from "../../context/countContext";
import { useNavigate } from "react-router-dom";

const Count = () => {
  const { handleCount, handleMode, count, toggle } = useCountContext();
  const navigate = useNavigate();

  console.log(count);

  return (
    <Layout mode={toggle}>
      <div className="m-10">
        <Button name="mode" label="Dark Mode" onClick={() => handleMode()} />
      </div>
      <div className="m-10 space-y-5">
        <p className="font-semibold"> Result : {count}</p>
        <div className="flex flex-row">
          <Button name="increment" label="+" onClick={() => handleCount(1)} />
          <Button name="reset" label="Reset" onClick={() => handleCount(0)} />
          <Button name="decrement" label="-" onClick={() => handleCount(-1)} />
        </div>
        <Button
          name="navigate"
          label="Navigate"
          onClick={() => navigate("/results")}
        />
      </div>
    </Layout>
  );
};

export default Count;
