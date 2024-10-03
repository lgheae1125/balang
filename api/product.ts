import { baseAPI } from "./baseAPI/baseAPI";

const getProduct = async (productId: string) => {
  try {
    const response = await baseAPI.get(`/products/${productId}`);
    const product = response.data.result;
    return product;
  } catch (err) {
    console.log("Error >>", err);
  }
};

export const productAPIs = {
  getProduct,
};
