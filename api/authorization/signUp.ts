import { baseAPI } from "../baseAPI/baseAPI";

const postSignUp = async (email: string, password: string) => {
  const getAuth = await baseAPI.post("/auth/sign-up", {
    email,
    password,
  });
  console.log(getAuth);
};

export const signUpAPIs = {
  postSignUp,
};
