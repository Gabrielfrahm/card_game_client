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
import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { AuthContext } from "../authContext";
import Router from "next/router";

type DeckContextTypes = {
  listDecks: (filtersParams?: FiltersParams) => Promise<void>;
  decks: IListResponse<IDeck>;
  getDeck: (id: string) => Promise<IDeck | undefined>;
  deck: IDeck;
  createDeck: (name: string) => Promise<IDeck | undefined>;
  setDeck: Dispatch<SetStateAction<IDeck>>;
  updateDeck: ({
    id,
    cards,
    main_card_id,
    name,
  }: DeckUpdateProps) => Promise<void>;
};

type DeckUpdateProps = {
  id: string;
  name?: string;
  main_card_id?: string;
  cards?: string[];
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

  const create = useCallback(
    async function create(name: string): Promise<IDeck> {
      const deck = await getAPIClient().post(urls.deck.create(), {
        name: name,
        user_id: user.id,
      });
      return deck.data;
    },
    [user.id]
  );

  const update = useCallback(async function update({
    id,
    name,
    main_card_id,
    cards,
  }: DeckUpdateProps): Promise<void> {
    await getAPIClient().put(urls.deck.update(id), {
      name,
      main_card_id,
      cards,
    });
  },
  []);

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
        return response
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

  const createDeck = async (name: string) => {
    try {
      const response = await create(name);
      setDeck(response);
      return response;
    } catch (e) {
      const error = e as IError;
      toastNotification({
        type: "error",
        message: error.response.data.message,
      });
    }
  };

  const updateDeck = async ({
    id,
    cards,
    main_card_id,
    name,
  }: DeckUpdateProps) => {
    try {
      await update({
        id,
        cards,
        main_card_id,
        name,
      });
      Router.push("/home");
    } catch (e) {
      const error = e as IError;
      toastNotification({
        type: "error",
        message: error.response.data.message,
      });
    }
  };

  return (
    <DeckContext.Provider
      value={{
        listDecks,
        decks,
        getDeck,
        deck,
        createDeck,
        setDeck,
        updateDeck,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
};
