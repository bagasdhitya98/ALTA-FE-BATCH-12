import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { User, login } from "../../features/authSlice"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

import Input from '../../components/Input'
import Button from '../../components/Button'

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        const user: User = {
            username,
            password
        }
        if (user.username !== "" && user.password !== "") {
            dispatch(login(user))
            navigate("/home")
        } else {
            Swal.fire({
                title: "Failed",
                text: "Please try again fill username and password!",
                confirmButtonText: "OK"
            })
        }
    }

    return (
        <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md shadow-md">
                <Input
                    name="username-input"
                    label="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    name="password-input"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button name="login" label="Login" onClick={() => handleLogin()} />
            </div>
        </div>
    )
}

export default Login