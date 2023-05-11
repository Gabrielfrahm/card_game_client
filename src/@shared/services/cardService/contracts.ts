import { FiltersParams, ICard, IListResponse } from "@/@shared/interfaces";

export type TMethod = {
  list: (filters?: FiltersParams) => Promise<IListResponse<ICard>>;
};
