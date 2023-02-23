import React, { Component } from "react";

type ModeType = {
  buttonType?: boolean;
  handleType?: React.MouseEventHandler;
  previousPage?: React.MouseEventHandler;
  nextPage?: React.MouseEventHandler;
};

class Navbar extends Component<ModeType> {
  render() {
    const { handleType, buttonType, previousPage, nextPage } = this.props;

    const image =
      "https://academy.alterra.id/blog/wp-content/uploads/2021/06/cropped-cropped-Alterra-Academy-logo.png";

    return (
      <div className="navbar bg-white shadow-md z-10 top-0 sticky">
        <div className="flex-1 ml-7">
          <img src={image} width={90} height={90} />
          <a className="text-black ml-10 font-semibold">ALTA NEWS</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <button className="bg-white text-black" onClick={previousPage}>
                Previous Page
              </button>
              <button className="bg-white text-black" onClick={nextPage}>
                Next Page
              </button>
            </li>
            <li>
              {buttonType === true ? (
                <button
                  onClick={handleType}
                  className="rounded-md w-30 h-10 bg-dark text-white focus:bg-black hover:bg-black"
                >
                  Dark Mode
                </button>
              ) : (
                <button
                  onClick={handleType}
                  className="rounded-md w-30 h-10 bg-white text-black focus:bg-white hover:bg-white"
                >
                  White Mode
                </button>
              )}
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Experience</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
