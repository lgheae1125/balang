import axios from "axios";
import { baseURL } from "./baseURL/baseURL";

const productAPI = axios.create({
  baseURL,
  timeout: 10000,
});

const getProduct = async (productId: string) => {
  try {
    const response = await productAPI.get(`/products/${productId}`);
    const product = response.data.result;
    return product;
  } catch (err) {
    console.log("Error >>", err);
  }
};

export const productAPIs = {
  getProduct,
};
