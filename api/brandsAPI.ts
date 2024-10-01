import axios from "axios";
import { baseURL } from "./baseURL/baseURL";

const brandsAPI = axios.create({
  baseURL,
  timeout: 10000,
});

const getBrands = async () => {
  try {
    const response = await brandsAPI.get("/brands");
    const brands = await response.data.result;
    return brands;
  } catch (err) {
    console.log("Error >>", err);
  }
};

export const brandsAPIs = {
  getBrands,
};
