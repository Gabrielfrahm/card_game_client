import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
  const { ["eldencard"]: data } = parseCookies(ctx);
  let verifyToken: string = "";
  if (data) {
    const { token } = JSON.parse(data);
    verifyToken = token;
  }

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  api.interceptors.request.use(async (error) => {
    return error;
  });

  if (verifyToken) {
    api.defaults.headers["Authorization"] = `Bearer ${verifyToken}`;
  }

  return api;
}
