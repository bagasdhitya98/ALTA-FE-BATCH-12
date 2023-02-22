import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Card from "./components/Card";

import axios from "axios";

interface DataState {
  data: [];
  darkMode: boolean;
}

class App extends Component<DataState> {
  state = {
    data: [],
    darkMode: false,
  };

  async handleNews(country?: string, category?: string) {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
          import.meta.env.VITE_NEWS_KEY
        }`
      )
      .then((response) => {
        console.log("data : ", response.data.articles);
        this.setState({ data: response.data.articles });
      })
      .catch((error) => {
        console.log("error : ", error);
      });
  }

  componentDidMount() {
    this.handleNews();
  }

  render() {
    const { data, darkMode } = this.state;

    return (
      <div
        className={`w-screen h-screen ${
          darkMode ? "bg-black" : !darkMode && "bg-white"
        }`}
      >
        <Navbar
          buttonType={!darkMode}
          handleType={() => this.setState({ darkMode: !darkMode })}
        />
        <div className="flex justify-center my-5 space-x-7 mx-10">
          <button
            className="bg-white text-black shadow-md"
            onClick={() => this.handleNews("id", "business")}
          >
            Business
          </button>
          <button
            className="bg-white text-black shadow-md"
            onClick={() => this.handleNews("id", "entertainment")}
          >
            Entertainment
          </button>
          <button
            className="bg-white text-black shadow-md"
            onClick={() => this.handleNews("id", "politics")}
          >
            Politics
          </button>
        </div>
        <div className="flex flex-wrap space-x-5 space-y-5 justify-center">
          {data.map((item: any, index) => {
            return (
              <div className="my-5">
                <Card
                  key={index}
                  id={item.source.id}
                  title={item.title}
                  description={item.description}
                  image={item.urlToImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;

// --- LIFE CYCLE CLASS COMPONENT ---

// interface State {
//   count: number;
// }

// class App extends Component<State> {
//   state = {
//     count: 0,
//   };

//   // -- Fase saat dimana komponen sedang dirender
//   componentDidMount() {
//     console.log("Component mounted");
//   }

//   // -- Fase saat dimana komponen sedang diupdate
//   componentDidUpdate() {
//     console.log("Component updated");
//   }

//   // -- Fase saat dimana komponen sedang dihapus
//   componentWillUnmount() {
//     console.log("Component will unmount");
//   }

//   handleClick() {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     const { count } = this.state;

//     return (
//       <div>
//         <h1>You clicked {count} times</h1>
//         <button
//           className="bg-blue-500 font-semibold text-white shadow-md"
//           onClick={() => this.handleClick()}
//         >
//           Click me
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// interface State {
//   count: number;
//   color: string;
//   isOpen: boolean;
//   isModal: boolean;
//   isDark: boolean;
//   data: any;
// }

// class App extends Component<State> {
//   state = {
//     count: 0,
//     color: "",
//     isOpen: false,
//     isModal: false,
//     isDark: false,
//     data: "",
//   };

//   increment() {
//     this.setState({ count: this.state.count + 1 });
//   }

//   decrement() {
//     this.setState({ count: this.state.count - 1 });
//   }

//   showModal() {
//     this.setState({ isOpen: true });
//   }

//   closeModal() {
//     this.setState({ isOpen: false });
//   }

//   onHandleDetail(item: any) {
//     this.setState({ data: item.description });
//     this.setState({ isModal: true });
//   }

//   render() {
//     const { count, color, isOpen, isModal, isDark, data } = this.state;

//     return (
//       <div className={`w-screen h-full ${isDark ? `bg-black` : `bg-white`}`}>
//         <Navbar handleType={() => this.setState({ isDark: true })} />
//         <div className="my-10">
//           <button
//             className="w-20 h-10 bg-blue-500 text-white font-semibold"
//             onClick={() => this.setState({ isModal: true })}
//           >
//             Trigger Modal
//           </button>
//         </div>
//         <div className="space-x-7 flex flex-row">
//           {fashion.map((item: any, index) => {
//             return (
//               <Card
//                 key={index}
//                 id={item.id}
//                 title={item.title}
//                 description={item.description}
//                 image={item.image}
//                 handleDetail={() => this.onHandleDetail(item)}
//               />
//             );
//           })}
//         </div>
//         <div>
//           <Modal
//             id="modal"
//             handleModal={isModal}
//             handleClose={() => this.setState({ isModal: false })}
//           >
//             <p>{data}</p>
//           </Modal>
//         </div>
//         <div>
//           <button
//             className="w-40 h-10 bg-alta-amber text-white font-semibold"
//             onClick={() => this.showModal()}
//           >
//             Open Modal!
//           </button>
//         </div>
//         {isOpen ? (
//           <div className="w-60 h-40 bg-white rounded-md shadow-xl">
//             <button
//               onClick={() => this.closeModal()}
//               className="w-20 h-10 bg-red-500 text-white"
//             >
//               Close Modal
//             </button>
//           </div>
//         ) : (
//           <></>
//         )}

//         <div className="w-60 h-20 bg-red-500 text-white mt-10">
//           <h1>Result : {count}</h1>
//         </div>
//         <div className="flex flex-row">
//           <button
//             className="w-40 h-20 bg-alta-blue text-white font-semibold"
//             onClick={() => this.increment()}
//           >
//             Increment
//           </button>
//           <button
//             className="w-40 h-20 bg-alta-amber text-white font-semibold"
//             onClick={() => this.decrement()}
//           >
//             Decrement
//           </button>
//         </div>
//         <div>
//           <h1 className={`${color}`}>
//             {color ? "Color has changed!" : "Initial color"}
//           </h1>
//           <button
//             className="w-40 h-20 bg-alta-blue text-white font-semibold"
//             onClick={() => this.setState({ color: "text-red-500" })}
//           >
//             Change Color to Red
//           </button>
//         </div>
//         {/* Floating whatsapp icon */}
//         <div className="sticky z-10 bottom-10 flex justify-end">
//           <CustomerService />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
