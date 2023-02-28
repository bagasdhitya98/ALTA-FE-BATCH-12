import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "./src/features/counterSlice"

export default configureStore({
    reducer: {
        counter: counterSlice.reducer,
    }
})