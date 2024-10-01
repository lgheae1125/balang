import axios from "axios";
import { baseURL } from "./baseURL/baseURL";

type authAPIsType = {
  postAuthorization: (email: string, password: string) => void;
};

const authorization = axios.create({ baseURL, timeout: 10000 });

const postAuthorization = async (email: string, password: string) => {
  const getAuth = await authorization.post("/auth/sign-up", {
    email,
    password,
  });
  console.log(getAuth);
};

export const authAPIs: authAPIsType = {
  postAuthorization,
};
