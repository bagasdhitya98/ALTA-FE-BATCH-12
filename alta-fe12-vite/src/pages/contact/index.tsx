import React, { Component } from "react";
import { withRouter } from "../../withRouter";
import Navbar from "../../components/Navbar";

interface ContactProps {
  location: any;
}

class Contact extends Component<ContactProps> {
  render() {
    const { location } = this.props;

    return (
      <div className="w-screen h-screen">
        <Navbar
          name={
            location?.state?.username
              ? "Hi, Good Morning " + location.state.username
              : 'You"re not logged in'
          }
        />
      </div>
    );
  }
}

export default withRouter(Contact);
