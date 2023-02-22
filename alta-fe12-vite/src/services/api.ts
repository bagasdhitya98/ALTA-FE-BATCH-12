import axios from "axios";

const instance = axios.create({
  baseURL: `https://fakestoreapi.com/`,
});

export default {
  allProducts: () =>
    instance({
      method: "GET",
      url: "products",
    }),
  getProduct: (id: any) =>
    instance({
      method: "GET",
      url: `products/${id}`,
    }),
  addProduct: (title: string, price: string, image: string, category: string) =>
    instance({
      method: "POST",
      url: "products",
      data: {
        title: title,
        price: price,
        image: image,
        category: category,
      },
    }),
};
