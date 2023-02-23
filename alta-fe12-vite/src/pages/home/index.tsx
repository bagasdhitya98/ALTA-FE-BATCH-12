import React, { Component } from "react";
import { withRouter } from "../../withRouter";

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
      <div className="w-screen h-full">
        <div className="m-10">
          <button
            className="bg-blue-500 text-white font-semibold"
            onClick={() => this.nextPage()}
          >
            Next Page
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
