import React, { Component } from "react";

import Navbar from "./components/Navbar";
import CustomerService from "./components/CustomerService";

class App extends Component {
  render() {
    const dummy = [
      {
        image:
          "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/422990/item/idgoods_69_422990.jpg?width=750",
        title: "Clothes",
        desc: "Lorem Ipsum blablabla",
      },
      {
        image:
          "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/422990/item/idgoods_69_422990.jpg?width=750",
        title: "Clothes",
        desc: "Lorem Ipsum blablabla",
      },
      {
        image:
          "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/422990/item/idgoods_69_422990.jpg?width=750",
        title: "Clothes",
        desc: "Lorem Ipsum blablabla",
      },
    ];

    return (
      <div className="w-screen">
        {/* Floating Navbar */}
        <Navbar />
        <div className="m-20">
          <div className="flex flex-row space-x-5">
            {dummy.map((item: any, index: any) => {
              return (
                <div className="card w-96 bg-white shadow-xl" id={index}>
                  <figure>
                    <img src={item.image} alt="Clothes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.desc}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Z-index Implementation from z-0,z-10,etc.  */}
          <div className="flex flex-row">
            <div className="w-20 h-20 bg-alta-blue rounded-xl text-white font-bold z-40 outline outline-offset-0 outline-2 outline-blue-900">
              05
            </div>
            <div className="w-20 h-20 bg-alta-blue rounded-xl text-white font-bold z-30 outline outline-offset-0 outline-2 outline-blue-900">
              04
            </div>
            <div className="w-20 h-20 bg-alta-blue rounded-xl text-white font-bold z-20 outline outline-offset-0 outline-2 outline-blue-900">
              03
            </div>
            <div className="w-20 h-20 bg-alta-blue rounded-xl text-white font-bold z-10 outline outline-offset-0 outline-2 outline-blue-900">
              02
            </div>
            <div className="w-20 h-20 bg-alta-blue rounded-xl text-white font-bold z-0 outline outline-offset-0 outline-2 outline-blue-900">
              01
            </div>
            <div className="w-20 h-20 bg-alta-blue rounded-xl text-white font-bold -z-5 outline outline-offset-0 outline-2 outline-blue-900">
              00
            </div>
          </div>
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
          {/* Floating whatsapp icon */}
          <div className="sticky z-10 bottom-10 flex justify-end">
            <CustomerService />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
