import { urls } from "@/@shared/constants/api";
import { getAPIClient } from "@/@shared/lib/http";
import { TMethod } from "./contracts";
import { ICard, IListResponse } from "@/@shared/interfaces";

const cardServices = (): TMethod => {
  async function list(filters?: any): Promise<IListResponse<ICard>> {
    return getAPIClient().get(urls.card.list(), { params: filters });
  }

  async function get(id: string): Promise<ICard> {
    const card = await getAPIClient().get(urls.card.get(id));
    return card.data;
  }

  return { list, get };
};

export default cardServices;
