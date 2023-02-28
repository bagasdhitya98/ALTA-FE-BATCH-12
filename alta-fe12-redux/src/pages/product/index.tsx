import React from "react";
import { useSelector } from "react-redux"
import { CounterState } from "../../features/counterSlice"

import Layout from "../../components/Layout";

const Product = () => {

  const counter = useSelector((state: { counter: CounterState }) => state.counter)

  return (
    <Layout>
      <div className="m-10 text-black">
        <h1>Result from global state : {counter?.value}</h1>
      </div>
    </Layout>
  )
};

export default Product;
