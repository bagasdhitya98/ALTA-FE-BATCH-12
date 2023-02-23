import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

// ---- EXAMPLE OF PAGINATION

// interface MovieState {
//   movies: [];
//   count: number;
// }

// class App extends Component<MovieState> {
//   state = {
//     movies: [],
//     count: 1,
//   };

//   handleTrendingMovies(page: number) {
//     axios
//       .get(
//         `https://api.themoviedb.org/3/movie/now_playing?api_key=f297d44c25022cf9a12c2b75b9059c2d&language=en-US&page=${page.toString()}`
//       )
//       .then((response) => {
//         this.setState({ movies: response.data.results });
//         console.log(response.data.results);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   nextPage() {
//     this.setState({ count: this.state.count + 1 });
//     this.handleTrendingMovies(this.state.count);
//   }

//   previousPage() {
//     this.setState({ count: this.state.count - 1 });
//     this.handleTrendingMovies(this.state.count);
//   }

//   render() {
//     const { movies } = this.state;

//     return (
//       <div className={`w-screen h-screen bg-white`}>
//         <Navbar
//           previousPage={() => this.previousPage()}
//           nextPage={() => this.nextPage()}
//         />
//         <div className="flex flex-wrap space-x-5 space-y-5 justify-center">
//           {movies.map((item: any, index) => {
//             return (
//               <div className="my-5" key={index}>
//                 <Card
//                   key={index}
//                   id={item.id}
//                   title={item.original_title}
//                   description={item.overview}
//                   image={"https://image.tmdb.org/t/p/w500" + item.poster_path}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

// ---------------------------------------------------

// interface StoreState {
//   data: [];
// }

// export class App extends Component {
//   state = {
//     data: [],
//   };

//   // getAllProduct() {
//   //   axios
//   //     .get(`https://fakestoreapi.com/products`)
//   //     .then((response) => {
//   //       console.log("data: ", response.data);
//   //       this.setState({ data: response.data });
//   //     })
//   //     .catch((error) => {
//   //       console.log("error: ", error);
//   //     });
//   // }

//   // getProduct(id: any) {
//   //   axios
//   //     .get(`https://fakestoreapi.com/products/${id}`)
//   //     .then((response) => {
//   //       console.log(response.data);
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //     });
//   // }

//   // addProduct() {
//   //   axios
//   //     .post(
//   //       `https://fakestoreapi.com/products`,
//   //       {},
//   //       {
//   //         data: {
//   //           title: "test product",
//   //           price: 13.5,
//   //           description: "lorem ipsum set",
//   //           image: "https://i.pravatar.cc",
//   //           category: "electronic",
//   //         },
//   //       }
//   //     )
//   //     .then((response) => {
//   //       console.log(response.data);
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //     });
//   // }

//   async getAllProducts() {
//     await api
//       .allProducts()
//       .then((response) => {
//         console.log(response.data);
//         this.setState({ data: response.data });
//       })
//       .catch((error) => console.log(error));
//   }

// async getProduct(item: any) {
//   await api
//     .getProduct(item)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

//   async addProduct() {
//     await api
//       .addProduct(
//         "Clothes",
//         "IDR 50,000",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6-81i0Uk-5ldURjNpDwx_QgiF6hfl6YaXQ&usqp=CAU",
//         "sweater"
//       )
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   componentDidMount() {
//     this.getAllProducts();
//   }

//   render() {
//     const { data } = this.state;

//     return (
//       <div className={`w-screen h-screen bg-white`}>
//         <Navbar />
//         <div>
//           <button
//             className="w-40 h-10 bg-blue-500 text-white"
//             onClick={() => this.addProduct()}
//           >
//             Post Product
//           </button>
//         </div>
//         <div className="flex flex-wrap space-x-5 space-y-5 justify-center">
//           {data.map((item: any, index) => {
//             return (
//               <div className="my-5" key={index}>
//                 <Card
//                   key={index}
//                   id={item.id}
//                   title={item.title}
//                   description={item.description}
//                   image={item.image}
//                   handleDetail={() => this.getProduct(item.id)}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

// ---------------------------------------------------

// --- EXAMPLE : NEWS API

// interface DataState {
//   data: [];
//   darkMode: boolean;
// }

// class App extends Component<DataState> {
//   state = {
//     data: [],
//     darkMode: false,
//   };

//   async handleNews(country?: string, category?: string) {
//     axios
//       .get(
//         `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
//           import.meta.env.VITE_NEWS_KEY
//         }`
//       )
//       .then((response) => {
//         console.log("data : ", response.data.articles);
//         this.setState({ data: response.data.articles });
//       })
//       .catch((error) => {
//         console.log("error : ", error);
//       });
//   }

//   componentDidMount() {
//     this.handleNews();
//   }

//   render() {
//     const { data, darkMode } = this.state;

//     return (
//       <div
//         className={`w-screen h-screen ${
//           darkMode ? "bg-black" : !darkMode && "bg-white"
//         }`}
//       >
//         <Navbar
//           buttonType={!darkMode}
//           handleType={() => this.setState({ darkMode: !darkMode })}
//         />
//         <div className="flex justify-center my-5 space-x-7 mx-10">
//           <button
//             className="bg-white text-black shadow-md"
//             onClick={() => this.handleNews("id", "business")}
//           >
//             Business
//           </button>
//           <button
//             className="bg-white text-black shadow-md"
//             onClick={() => this.handleNews("id", "entertainment")}
//           >
//             Entertainment
//           </button>
//           <button
//             className="bg-white text-black shadow-md"
//             onClick={() => this.handleNews("id", "politics")}
//           >
//             Politics
//           </button>
//         </div>
//         <div className="flex flex-wrap space-x-5 space-y-5 justify-center">
//           {data.map((item: any, index) => {
//             return (
//               <div className="my-5">
//                 <Card
//                   key={index}
//                   id={item.source.id}
//                   title={item.title}
//                   description={item.description}
//                   image={item.urlToImage}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

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

// ---------------------------------------------------

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
