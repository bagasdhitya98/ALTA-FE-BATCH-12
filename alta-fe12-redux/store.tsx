import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "./src/features/counterSlice"
import { authSlice } from "./src/features/authSlice"
import { cartSlice } from "./src/features/cartSlice"

export default configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
        cart: cartSlice.reducer
    }
})