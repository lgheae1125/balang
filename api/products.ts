import { baseAPI } from "./baseAPI/baseAPI";

const getProducts = async () => {
  try {
    const response = await baseAPI.get("/products");
    const products = response.data.result;
    return products;
  } catch (err) {
    console.log("Error >>", err);
  }
};

export const productsAPIs = {
  getProducts,
};
