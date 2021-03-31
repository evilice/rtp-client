import axios, { AxiosError, AxiosResponse } from "axios";
import { TOKEN, REFRESH_TOKEN, BASE_URL } from "../constants";

interface ITokens {
  token: string;
  refreshToken: string;
}
const tokenAxios = axios.create({ baseURL: BASE_URL });

axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem(TOKEN);
    if (token) config.headers = { authorization: `Bearer ${token}` };
    config.baseURL = BASE_URL;
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  ({ response, config: failurRequest }: AxiosError) => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    return new Promise((res, reject) => {
      if (response?.status === 401) {
        tokenAxios
          .post("/auth/refresh", { refreshToken })
          .then(async ({ data }: AxiosResponse<ITokens>) => {
            localStorage.setItem(TOKEN, data.token);
            localStorage.setItem(REFRESH_TOKEN, data.refreshToken);
            failurRequest.headers["Authorization"] = `Bearer ${data.token}`;
            const retry = await axios(failurRequest);
            res(retry);
          })
          .catch(() => {
            res(response);
          });
      } else {
        reject({ description: response?.data, status: response?.status });
      }
    });
  }
);
