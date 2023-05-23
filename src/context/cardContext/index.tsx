import { urls } from "@/@shared/constants/api";
import { translateErrors } from "@/@shared/help/translation";
import { FiltersParams, ICard, IListResponse } from "@/@shared/interfaces";
import { getAPIClient } from "@/@shared/lib/http";
import { IError } from "@/@shared/lib/http.error";
import { cardServices } from "@/@shared/services";
import { toastNotification } from "@/pages/components/toast";
import { createContext, useCallback, useEffect, useState } from "react";

type CardContextTypes = {
  listCards: (filtersParams?: FiltersParams) => Promise<void>;
  cards: IListResponse<ICard>;
  getCard(id: string): Promise<ICard | undefined>;
};

export const CardContext = createContext({} as CardContextTypes);

export const CardProvider = ({ children }: any) => {
  const { get } = cardServices();
  const [cards, setCards] = useState<IListResponse<ICard>>(
    {} as IListResponse<ICard>
  );

  const list = useCallback(
    async (filters?: any): Promise<IListResponse<ICard>> => {
      return getAPIClient().get(urls.card.list(), { params: filters });
    },
    []
  );

  const listCards = useCallback(
    async (filtersParams?: FiltersParams) => {
      try {
        const response = await list({ ...filtersParams });
        setCards(response);
      } catch (e) {
        const error = e as IError;
        toastNotification({
          type: "error",
          message: translateErrors(error.response.data.message),
        });
      }
    },
    [list]
  );

  async function getCard(id: string) {
    try {
      const response = await get(id);
      return response;
    } catch (e) {
      const error = e as IError;
      toastNotification({
        type: "error",
        message: translateErrors(error.response.data.message),
      });
    }
  }

  return (
    <CardContext.Provider value={{ listCards, cards, getCard }}>
      {children}
    </CardContext.Provider>
  );
};
