import axios from "axios";
import { baseURL } from "./baseURL/baseURL";

const productsAPI = axios.create({
  baseURL,
  timeout: 10000,
});

const getProducts = async () => {
  try {
    const response = await productsAPI.get("/products");
    const products = response.data.result;
    return products;
  } catch (err) {
    console.log("Error >>", err);
  }
};

export const productsAPIs = {
  getProducts,
};
