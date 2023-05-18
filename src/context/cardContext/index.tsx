import { translateErrors } from "@/@shared/help/translation";
import { FiltersParams, ICard, IListResponse } from "@/@shared/interfaces";
import { IError } from "@/@shared/lib/http.error";
import { cardServices } from "@/@shared/services";
import { toastNotification } from "@/pages/components/toast";
import { createContext, useEffect, useState } from "react";

type CardContextTypes = {
  listCards: (filtersParams?: FiltersParams) => Promise<void>;
  cards: IListResponse<ICard>;
  getCard(id: string): Promise<ICard | undefined>;
};

export const CardContext = createContext({} as CardContextTypes);

export const CardProvider = ({ children }: any) => {
  const { list, get } = cardServices();
  const [cards, setCards] = useState<IListResponse<ICard>>(
    {} as IListResponse<ICard>
  );

  async function listCards(filtersParams?: FiltersParams) {
    try {
      const response = await list({ ...filtersParams });
      console.log("FiltersParams", filtersParams);
      setCards(response);
    } catch (e) {
      const error = e as IError;
      toastNotification({
        type: "error",
        message: translateErrors(error.response.data.message),
      });
    }
  }

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
