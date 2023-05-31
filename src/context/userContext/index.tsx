import {
  TRequest,
  TRequestUpdate,
} from "@/@shared/services/userService/contracts";
import { userServices } from "@/@shared/services";
import { createContext, useCallback, useContext } from "react";

import { toastNotification } from "@/pages/components/toast";
import { IError } from "@/@shared/lib/http.error";
import { translateErrors } from "@/@shared/help/translation";
import Router from "next/router";
import { AuthContext } from "../authContext";
import { destroyCookie, parseCookies } from "nookies";

type UserContextType = {
  createUser: ({ email, name, password }: TRequest) => Promise<void>;
  updateUser: ({ email, nick, password }: TRequestUpdate) => Promise<void>;
};

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: any) => {
  const { create, update, get } = userServices();
  const { user, setUser } = useContext(AuthContext);

  const getUser = useCallback(async () => {
    try {
      const getUser = await get(user.id);
      console.log(getUser);
      const { ["eldencard"]: data } = parseCookies();
      if (data) {
        const { user } = JSON.parse(data);
      }

      setUser(getUser);
    } catch (e) {
      const error = e as IError;
      toastNotification({
        type: "error",
        message: translateErrors(error.response.data.message),
      });
    }
  }, [get, setUser, user.id]);

  const updateUser = useCallback(
    async ({ email, nick, password }: TRequestUpdate) => {
      try {
        await update(user.id, {
          ...(email && {
            email: email,
          }),
          ...(nick && {
            name: nick,
          }),
          ...(password && {
            password: password,
          }),
        });

        await getUser();

        toastNotification({
          type: "success",
          message: "user updated",
        });
      } catch (e) {
        const error = e as IError;
        toastNotification({
          type: "error",
          message: translateErrors(error.response.data.message),
        });
      }
    },
    [update, user, getUser]
  );

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
    <UserContext.Provider value={{ createUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
