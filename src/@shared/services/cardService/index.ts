import { urls } from "@/@shared/constants/api";
import { getAPIClient } from "@/@shared/lib/http";
import { TMethod } from "./contracts";
import { ICard } from "@/@shared/interfaces";

const cardServices = (): TMethod => {
  async function get(id: string): Promise<ICard> {
    const card = await getAPIClient().get(urls.card.get(id));
    return card.data;
  }

  return { get };
};

export default cardServices;
