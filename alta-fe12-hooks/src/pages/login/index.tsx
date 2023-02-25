import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies();

  function handleLogin(e: any) {
    Swal.fire({
      title: "Success",
      text: "Successfully Login",
      confirmButtonText: "OK",
    });
    // --- set cookie storage
    setCookie("Username", username, { path: "/" });
    setCookie("Password", password, { path: "/" });
    // --- set session storage
    sessionStorage.setItem("Username", username);
    sessionStorage.setItem("Password", password);
    // --- set local storage
    localStorage.setItem("Username", username);
    localStorage.setItem("Password", password);
    if (username === "" && password === "") {
      Swal.fire({
        title: "Failed",
        text: "Failed to login, fill your username and password!",
        confirmButtonText: "OK",
      });
    } else {
      navigate(`/home/${username}`, {
        state: {
          username: username,
        },
      });
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
        <Button
          name="login"
          label="Login"
          onClick={(e) => handleLogin(e.preventDefault())}
        />
      </div>
    </div>
  );
};

export default Login;
