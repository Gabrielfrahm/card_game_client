import { urls } from "@/@shared/constants/api";
import { translateErrors } from "@/@shared/help/translation";
import {
  FiltersParams,
  ICard,
  IDeck,
  IListResponse,
} from "@/@shared/interfaces";
import { getAPIClient } from "@/@shared/lib/http";
import { IError } from "@/@shared/lib/http.error";

import { toastNotification } from "@/pages/components/toast";
import { createContext, useCallback, useContext, useState } from "react";
import { AuthContext } from "../authContext";

type DeckContextTypes = {
  listDecks: (filtersParams?: FiltersParams) => Promise<void>;
  decks: IListResponse<IDeck>;
  getDeck: (id: string) => Promise<void>;
  deck: IDeck;
};

export const DeckContext = createContext({} as DeckContextTypes);

export const DeckProvider = ({ children }: any) => {
  const { user } = useContext(AuthContext);

  const [decks, setDecks] = useState<IListResponse<IDeck>>(
    {} as IListResponse<IDeck>
  );
  const [deck, setDeck] = useState<IDeck>({} as IDeck);

  const list = useCallback(
    async (user_id: string, filters?: any): Promise<IListResponse<IDeck>> => {
      return getAPIClient().get(urls.deck.list(user_id), { params: filters });
    },
    []
  );

  const get = useCallback(async function get(id: string): Promise<IDeck> {
    const deck = await getAPIClient().get(urls.deck.get(id));
    return deck.data;
  }, []);

  const listDecks = useCallback(
    async (filtersParams?: FiltersParams) => {
      try {
        const response = await list(user.id, { ...filtersParams });
        setDecks(response);
      } catch (e) {
        const error = e as IError;
        toastNotification({
          type: "error",
          message: translateErrors(error.response.data.message),
        });
      }
    },
    [user.id, list]
  );

  const getDeck = useCallback(
    async (id: string) => {
      try {
        const response = await get(id);
        setDeck(response);
      } catch (e) {
        const error = e as IError;
        toastNotification({
          type: "error",
          message: error.response.data.message,
        });
      }
    },
    [get]
  );

  return (
    <DeckContext.Provider value={{ listDecks, decks, getDeck, deck }}>
      {children}
    </DeckContext.Provider>
  );
};
