import React, { Component } from "react";

type ModeType = {
  name?: string;
};

class Navbar extends Component<ModeType> {
  render() {
    const { name } = this.props;

    const image =
      "https://academy.alterra.id/blog/wp-content/uploads/2021/06/cropped-cropped-Alterra-Academy-logo.png";

    return (
      <div className="navbar w-screen bg-white shadow-md z-10 top-0 sticky">
        <div className="flex-1 ml-7">
          <img src={image} width={90} height={90} />
          <a className="text-black ml-10 font-semibold">ALTA FRONTEND 12</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Experience</a>
            </li>
            <li>
              <p>{name}</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
