import { baseAPI } from "../baseAPI/baseAPI";

const getRefreshToken = async () => {
  const getAuth = await baseAPI.get("/auth/refresh-token");
};

export const refreshAPIs = {
  getRefreshToken,
};
