import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default {
  allProducts: () =>
    instance({
      method: "GET",
      url: "/products",
    }),
  singleProduct: (id: any) =>
    instance({
      method: "GET",
      url: `/products/${id}`,
    }),
};
