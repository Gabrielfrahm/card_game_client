import { TUser } from "@/@shared/interfaces";

export type TRequest = {
  email: string;
  name: string;
  password: string;
};

export type TRequestUpdate = {
  email?: string;
  nick?: string;
  password?: string;
};

export type TResponse = {
  data: TUser;
  status: number;
};

export type TMethod = {
  create: (data: TRequest) => Promise<TResponse>;
  update(id: string, data: TRequestUpdate): Promise<void>;
  get(id: string): Promise<TResponse>;
};
