import React from 'react'
import { useSelector } from "react-redux"
import { CartState } from "../../features/cartSlice"
import Layout from '../../components/Layout'

const Detail = () => {

    const cart = useSelector((state: { cart: CartState }) => state.cart)

    return (
        <Layout>
            <div
                className='m-10'
            >
                {
                    cart.items.map((item) => {
                        return (
                            <>
                                <div>
                                    <h1>Title : {item.name}</h1>
                                </div>
                                <div>
                                    <p className='font-semibold'>Price : {item.price}</p>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </Layout>
    )
}

export default Detail