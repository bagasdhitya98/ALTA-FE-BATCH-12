import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Item {
    id: number,
    name: string,
    price: number
}

export interface CartState {
    items: Item[]
}

const initialState: CartState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<Item>) {
            state.items.push(action.payload)
        },
        removeItemFromCart(state, action: PayloadAction<number>) {
            state.items = state.items.filter((item) => {
                item.id !== action.payload
            })
        }
    }
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions