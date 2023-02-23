import React, { Component } from "react";
import { withRouter } from "../../withRouter";

import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";

interface HomeProps {
  navigate: any;
}

class Home extends Component<HomeProps> {
  nextPage() {
    this.props.navigate("/contact", {
      state: {
        username: "John Doe",
      },
    });
  }

  render() {
    return (
      <Layout>
        <Navbar />
        <button
          className="bg-blue-500 text-white font-semibold"
          onClick={() => this.nextPage()}
        >
          Next Page
        </button>
      </Layout>
    );
  }
}

export default withRouter(Home);
