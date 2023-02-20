import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="w-screen">
        <div className="sm:w-40 sm:h-20 sm:bg-purple-500 md:w-52 md:bg-red-500 lg:w-full lg:bg-blue-500 w-full h-20 bg-blue-500"></div>
        <div className="sm:w-40 sm:h-20 sm:bg-cyan-500 md:w-52 md:bg-blue-500 lg:w-full lg:bg-emerald-500 w-full h-20 bg-green-500"></div>
        <div className="sm:w-40 sm:h-20 sm:bg-red-500 md:w-52 md:bg-yellow-500 lg:w-full lg:bg-amber-500 w-full h-20 bg-yellow-500"></div>
        <div className="sm:text-lg sm:text-orange-400 md:text-lg md:text-blue-400 lg:text-lg lg:text-yellow-400 text-xl text-red-400">
          <h1>Lorem Ipsum 1</h1>
        </div>
        <div className="sm:text-lg sm:text-orange-400 md:text-lg md:text-blue-400 lg:text-lg lg:text-yellow-400 text-xl text-red-400">
          <h1>Lorem Ipsum 2</h1>
        </div>
        <div className="sm:text-lg sm:text-orange-400 md:text-lg md:text-blue-400 lg:text-lg lg:text-yellow-400 text-xl text-red-400">
          <h1>Lorem Ipsum 3</h1>
        </div>
        <div>
          <button className="w-30 h-20 bg-blue-700 hover:bg-blue-900 text-white font-bold">
            Hover me!
          </button>
        </div>
        <div>
          <button className="w-30 h-20 bg-amber-500 hover:bg-amber-700 focus:ring focus:ring-red-500 text-white font-bold">
            Focus me!
          </button>
        </div>
        <div className="text-alta-blue">Alta Blue</div>
        <div className="text-alta-amber">Alta Amber</div>
      </div>
    );
  }
}

export default App;
