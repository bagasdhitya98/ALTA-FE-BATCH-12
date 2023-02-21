import React, { Component } from "react";

import Navbar from "./components/Navbar";
import CustomerService from "./components/CustomerService";

interface State {
  count: number;
  color: string;
  isOpen: boolean;
  dummy: [];
}

class App extends Component<State> {
  state = {
    count: 0,
    color: "",
    isOpen: false,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  showModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { count, color, isOpen } = this.state;

    return (
      <div className="w-screen h-screen">
        <Navbar />
        <div>
          <button
            className="w-40 h-10 bg-alta-amber text-white font-semibold"
            onClick={this.showModal}
          >
            Open Modal!
          </button>
        </div>
        {isOpen ? (
          <div className="w-60 h-40 bg-white rounded-md shadow-xl">
            <button
              onClick={this.closeModal}
              className="w-20 h-10 bg-red-500 text-white"
            >
              Close Modal
            </button>
          </div>
        ) : (
          <></>
        )}

        <div className="w-60 h-20 bg-red-500 text-white mt-10">
          <h1>Result : {count}</h1>
        </div>
        <div className="flex flex-row">
          <button
            className="w-40 h-20 bg-alta-blue text-white font-semibold"
            onClick={this.increment}
          >
            Increment
          </button>
          <button
            className="w-40 h-20 bg-alta-amber text-white font-semibold"
            onClick={this.decrement}
          >
            Decrement
          </button>
        </div>
        <div>
          <h1 className={`${color}`}>
            {color ? "Color has changed!" : "Initial color"}
          </h1>
          <button
            className="w-40 h-20 bg-alta-blue text-white font-semibold"
            onClick={() => this.setState({ color: "text-red-500" })}
          >
            Change Color to Red
          </button>
        </div>
        {/* Floating whatsapp icon */}
        <div className="sticky z-10 bottom-10 flex justify-end">
          <CustomerService />
        </div>
      </div>
    );
  }
}

export default App;
