import { urls } from "@/@shared/constants/api";
import { getAPIClient } from "@/@shared/lib/http";
import { TMethod, TRequest, TResponse } from "./contracts";

const authServices = (): TMethod => {
  async function login(data: TRequest): Promise<TResponse> {
    return getAPIClient().post(urls.auth.login(), data);
  }

  return { login };
};

export default authServices;
