import { TRequest } from "@/@shared/services/userService/contracts";
import { userServices } from "@/@shared/services";
import { createContext } from "react";

import { toastNotification } from "@/pages/components/toast";
import { IError } from "@/@shared/lib/http.error";
import { translateErrors } from "@/@shared/help/translation";
import Router from "next/router";

type UserContextType = {
  createUser: ({ email, name, password }: TRequest) => Promise<void>;
};

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: any) => {
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
        message: "user created",
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
