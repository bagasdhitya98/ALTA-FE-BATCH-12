import React, { useState, useEffect, FC } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Layout from "../../components/Layout";

import api from "../../services/api";

interface DetailProps {
  item?: any;
}

const Detail: FC<DetailProps> = ({ item }) => {
  const location = useLocation();
  const [data, setData] = useState(item);
  const [loading, setLoading] = useState(false);

  async function getSingleProduct() {
    await api
      .singleProduct(location?.state?.id)
      .then((response) => {
        setLoading(true);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <Layout>
      <div className="flex justify-center mt-40">
        {data && loading === true ? (
          <>
            <img src={data.image} />
            <div className="mt-10">
              <h1>{data.title}</h1>
            </div>
            <div className="mt-10">
              <p>{data.description}</p>
            </div>
          </>
        ) : (
          <h1 className="flex justify-center">Please wait ...</h1>
        )}
      </div>
    </Layout>
  );
};

export default Detail;
