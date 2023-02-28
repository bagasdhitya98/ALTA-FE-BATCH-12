import React, { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../../components/Layout";
import Card from "../../components/Card";

const Product = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  async function getAllProduct() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      setLoading(true)
      setData(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllProduct()
  }, [])


  return (
    <Layout>
      <div className="m-10 text-black flex flex-wrap">
        {
          data && loading === true ?
            data.map((item: any, index) => {
              return (
                <div className="m-10" key={index}>
                  <Card
                    key={index}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                  />
                </div>

              )
            }) :
            <h1
              className="m-10"
            >Please wait ...</h1>
        }
      </div>
    </Layout>
  )
};

export default Product;
