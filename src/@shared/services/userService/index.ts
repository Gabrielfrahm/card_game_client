import { urls } from "@/@shared/constants/api";
import { getAPIClient } from "@/@shared/lib/http";
import { TMethod, TRequest, TRequestUpdate, TResponse } from "./contracts";
import { TUser } from "@/@shared/interfaces";

const userServices = (): TMethod => {
  async function create(data: TRequest): Promise<TResponse> {
    return getAPIClient().post(urls.user.create(), data);
  }

  async function update(id: string, data: TRequestUpdate): Promise<void> {
    return getAPIClient().put(urls.user.update(id), data);
  }

  async function get(id: string): Promise<TUser> {
    return getAPIClient().get(urls.user.get(id));
  }

  return { create, update, get };
};

export default userServices;
