import axios, { AxiosError } from "axios";

const Http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

Http.interceptors.request.use(
  // (config) => {
  //   const response = getDataLocalStorage<IGetLocalStorage>(KEY);
  //   const { headers } = config;

  //   if (response.token) {
  //     headers.Authorization = `Bearer ${response.token.token}`;
  //   }

  //   headers["Content-Type"] = "application/json";
  //   headers.Accept = "application/json";

  //   return config;
  // },
  async (error) => {
    return error;
  }
);

export default Http;
