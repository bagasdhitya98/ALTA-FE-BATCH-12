import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { CounterState, decrement, increment } from "../../features/counterSlice"
import { useNavigate } from "react-router-dom"

import Layout from '../../components/Layout'
import Button from '../../components/Button'

const Count = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const counter = useSelector((state: { counter: CounterState }) => state.counter)

    console.log(counter?.value)

    return (
        <Layout>
            <div className='m-10 space-y-5'>
                <div className='font-semibold text-black'>
                    <p>Result : {counter?.value}</p>
                </div>
                <div className='space-x-5 flex flex-row'>
                    <Button
                        label='+'
                        name='increment'
                        onClick={() => dispatch(increment())}
                    />
                    <Button
                        label='-'
                        name='decrement'
                        onClick={() => dispatch(decrement())}
                    />
                </div>
                <div>
                    <Button
                        label='Navigate'
                        name='navigate'
                        onClick={() => navigate('/products')}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default Count