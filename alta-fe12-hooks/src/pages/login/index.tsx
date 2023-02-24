import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    Swal.fire({
      title: "Success",
      text: "Successfully Register",
      confirmButtonText: "OK",
    });
    navigate(`/home/${username}`, {
      state: {
        username: username,
      },
    });
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
  );
};

export default Login;
