import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addItemToCart, Item, CartState } from "../../features/cartSlice"
import axios from "axios";
import Swal from "sweetalert2";

import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Button from "../../components/Button";

const Product = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state: { cart: CartState }) => state.cart)
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

  function handleAddToCart(item: any) {
    const newItem: Item = {
      id: item.id,
      name: item.title,
      price: item.price
    }
    dispatch(addItemToCart(newItem))
    Swal.fire({
      title: "Success",
      text: "Successfully add to cart!",
      confirmButtonText: "OK"
    })
  }

  useEffect(() => {
    getAllProduct()
  }, [])


  return (
    <Layout>
      <div className="m-10 text-black flex flex-wrap">
        <div className="w-40 h-20">
          <Button
            label="Navigate to Detail"
            name="navigate"
            onClick={() => navigate('/detail')}
          />
        </div>

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
                    handleDetail={() => handleAddToCart(item)}
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
