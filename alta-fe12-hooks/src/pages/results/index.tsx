import React from "react";
import Layout from "../../components/Layout";

import { useCountContext } from "../../context/countContext";

const Results = () => {
  const { count } = useCountContext();

  console.log("count : ", count);

  return (
    <Layout>
      <h1 className="text-black font-semibold">{count}</h1>
    </Layout>
  );
};

export default Results;
