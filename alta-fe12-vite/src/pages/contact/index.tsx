import React, { Component } from "react";
import { withRouter } from "../../withRouter";
import Navbar from "../../components/Navbar";

import Layout from "../../components/Layout";

interface ContactProps {
  location: any;
}

class Contact extends Component<ContactProps> {
  render() {
    const { location } = this.props;

    return (
      <Layout>
        <Navbar
          name={
            location?.state?.username
              ? "Hi, Good Morning " + location.state.username
              : 'You"re not logged in'
          }
        />
      </Layout>
    );
  }
}

export default withRouter(Contact);
