import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface User {
    username: string,
    password: string
}

export interface AuthState {
    isAuthenticated: boolean
    user: User | null
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action: PayloadAction<User>) {
            state.isAuthenticated = true
            state.user = action.payload
        },
        logout(state) {
            state.isAuthenticated = false
            state.user = null
        }
    }
})

export const { login, logout } = authSlice.actions 