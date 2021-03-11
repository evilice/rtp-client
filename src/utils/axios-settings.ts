import axios from "axios";

axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers = { authorization: `Bearer ${token}` };
    config.baseURL = "http://localhost:3030";
    return config;
  },
  (error) => Promise.reject(error)
);
