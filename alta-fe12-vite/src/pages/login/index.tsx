import React, { Component } from "react";
import { withRouter } from "../../withRouter";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

import Input from "../../components/Input";
import Button from "../../components/Button";

interface LoginProps {
  navigate: any;
}

interface LoginState {
  username: string;
  password: string;
}

class Login extends Component<LoginProps, LoginState> {
  state = {
    username: "",
    password: "",
  };

  handleSetCookie() {
    const { username } = this.state;
    Cookies.set("Username", username, { path: "/" });
  }

  handleLogin() {
    this.handleSetCookie();
    Swal.fire({
      title: "Success",
      text: "Successfully Register",
      confirmButtonText: "OK",
    });
    this.props.navigate(`/home/${this.state.username}`, {
      state: {
        username: this.state.username,
        password: this.state.password,
      },
    });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-md shadow-md">
          <Input
            name="username-input"
            label="Username"
            type="text"
            value={username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <Input
            name="password-input"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <Button
            name="login"
            label="Login"
            onClick={() => this.handleLogin()}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
