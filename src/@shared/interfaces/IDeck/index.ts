import { ICard } from "../ICard";
import { TUser } from "../IUser";

export type IDeck = {
  id: string;
  name: string;
  user: TUser;
  cards: ICard[];
  main_card?: ICard;
  created_at: string;
};
