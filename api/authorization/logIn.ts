import { baseAPI } from "../baseAPI/baseAPI";

const postLogIn = async (email: string, password: string) => {
  const getAuth = await baseAPI.post("/auth/log-in", {
    email,
    password,
  });
  console.log(getAuth);
};

export const logInAPIs = {
  postLogIn,
};
