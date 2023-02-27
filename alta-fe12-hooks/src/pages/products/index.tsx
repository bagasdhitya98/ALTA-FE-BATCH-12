import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

import Layout from "../../components/Layout";
import Card from "../../components/Card";

import api from "../../services/api";

import { CartContext } from "../../context/cartContext";

const Products = () => {
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getAllProduct() {
    await api
      .allProducts()
      .then((response) => {
        setLoading(true);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getAllProduct();
  }, []);

  console.log("cart : ", cartItems);

  return (
    <Layout>
      <div className="flex flex-wrap justify-center">
        {data && loading === true ? (
          data.map((item: any, index) => {
            return (
              <div className="m-10" key={index}>
                <Card
                  key={index}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  handleIncrement={() => addToCart(item)}
                  handleDecrement={() => removeFromCart(item.id)}
                  handleDetail={() =>
                    navigate(`/detail/${item.title}`, {
                      state: {
                        id: item.id,
                      },
                    })
                  }
                />
              </div>
            );
          })
        ) : (
          <h1 className="flex justify-center">Please wait ...</h1>
        )}
      </div>
    </Layout>
  );
};

export default Products;
