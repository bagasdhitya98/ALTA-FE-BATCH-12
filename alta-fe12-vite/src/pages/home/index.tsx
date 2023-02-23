import React, { Component } from "react";
import { withRouter } from "../../withRouter";

import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";

interface HomeProps {
  location: any;
}

class Home extends Component<HomeProps> {
  render() {
    const { location } = this.props;

    return (
      <Layout>
        <Navbar name={location?.state?.username} />
      </Layout>
    );
  }
}

export default withRouter(Home);
