import { baseAPI } from "./baseAPI/baseAPI";

const getBrands = async () => {
  try {
    const response = await baseAPI.get("/brands");
    const brands = await response.data.result;
    return brands;
  } catch (err) {
    console.log("Error >>", err);
  }
};

export const brandsAPIs = {
  getBrands,
};
