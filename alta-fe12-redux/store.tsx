import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "./src/features/counterSlice"
import { authSlice } from "./src/features/authSlice"

export default configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})