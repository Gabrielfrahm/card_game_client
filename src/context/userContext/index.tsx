import { TUser } from "@/@shared/interfaces";
import { TRequest } from "@/@shared/services/userService/contracts";
import { userServices } from "@/@shared/services";
import { createContext, useEffect, useState } from "react";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { api } from "@/@shared/lib/api";
import { toastNotification } from "@/pages/components/toast";
import { IError } from "@/@shared/lib/http.error";
import { translateErrors } from "@/@shared/help/translation";
import Router from "next/router";

type UserContextType = {
  createUser: ({ email, name, password }: TRequest) => Promise<void>;
};

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: any) => {
  // const [user, setUser] = useState<TUser>({} as TUser);
  const { create } = userServices();

  async function createUser({ email, name, password }: TRequest) {
    try {
      await create({
        email,
        name,
        password,
      });

      toastNotification({
        type: "success",
        message: "usuário criado com sucesso",
      });

      Router.push("/login");
    } catch (e) {
      const error = e as IError;
      toastNotification({
        type: "error",
        message: translateErrors(error.response.data.message),
      });
    }
  }

  return (
    <UserContext.Provider value={{ createUser }}>
      {children}
    </UserContext.Provider>
  );
};
