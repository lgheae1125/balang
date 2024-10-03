import axios from "axios";

const baseURL = "https://api.ballang.yoojinyoung.com";

export const baseAPI = axios.create({
  baseURL,
  timeout: 10000,
});
