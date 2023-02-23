import React, { Component } from "react";
import { withRouter } from "../../withRouter";

import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";

import Cookies from "js-cookie";
import Button from "../../components/Button";

interface ContactProps {
  location: any;
  navigate: any;
}

class Contact extends Component<ContactProps> {
  removeCookies() {
    Cookies.remove("Username");
    this.props.navigate("/");
  }

  render() {
    const { location } = this.props;
    const value = Cookies.get("Username");

    return (
      <Layout>
        <Navbar
          name={
            location?.state?.username
              ? "Hi, Good Morning " + location.state.username
              : 'You"re not logged in'
          }
        />
        <h1>{value}</h1>
        <div className="w-60">
          <Button
            label="Logout"
            name="remove-cookie"
            onClick={() => this.removeCookies()}
          />
        </div>
      </Layout>
    );
  }
}

export default withRouter(Contact);
