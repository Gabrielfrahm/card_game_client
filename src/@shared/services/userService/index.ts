import { urls } from "@/@shared/constants/api";
import { getAPIClient } from "@/@shared/lib/http";
import { TMethod, TRequest, TResponse } from "./contracts";

const userServices = (): TMethod => {
  async function create(data: TRequest): Promise<TResponse> {
    return getAPIClient().post(urls.user.create(), data);
  }

  return { create };
};

export default userServices;
