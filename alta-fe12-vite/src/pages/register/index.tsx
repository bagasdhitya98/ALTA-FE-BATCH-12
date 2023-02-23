import React, { Component } from "react";
import { withRouter } from "../../withRouter";
import Swal from "sweetalert2";

import Input from "../../components/Input";
import Button from "../../components/Button";

interface RegisterProps {
  navigate: any;
}

interface RegisterState {
  username: string;
  password: string;
}

class Register extends Component<RegisterProps, RegisterState> {
  state = {
    username: "",
    password: "",
  };

  handleRegister() {
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
            name="register"
            label="Register"
            onClick={() => this.handleRegister()}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
