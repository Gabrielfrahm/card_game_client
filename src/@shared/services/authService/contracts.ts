import { IAuth } from "@/@shared/interfaces";

export type TRequest = {
  email: string;
  password: string;
};

export type TResponse = {
  data: IAuth;
  status: number;
};

export type TMethod = {
  login: (data: TRequest) => Promise<TResponse>;
};
