import { TUser } from "@/@shared/interfaces";
import { TRequest } from "@/@shared/services/authService/contracts";
import { authServices } from "@/@shared/services";
import { createContext, useEffect, useState } from "react";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { api } from "@/@shared/lib/api";
import { toastNotification } from "@/pages/components/toast";
import { IError } from "@/@shared/lib/http.error";
import { translateErrors } from "@/@shared/help/translation";
import Router from "next/router";

type AuthContextType = {
  isAuthenticated: boolean;
  user: TUser;
  signIn: (data: TRequest) => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<TUser>({} as TUser);
  const { login } = authServices();
  const isAuthenticated = !!user.id;

  useEffect(() => {
    const { ["eldencard"]: data } = parseCookies();
    if (data) {
      const { user } = JSON.parse(data);
      setUser(user);
    }
  }, []);

  async function signIn({ email, password }: TRequest) {
    try {
      const { data } = await login({
        email,
        password,
      });

      setCookie(undefined, "eldencard", JSON.stringify(data), {
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      api.defaults.headers["Authorization"] = `Bearer ${data.token}`;

      setUser(data.user);

      toastNotification({
        type: "success",
        message: "success",
      });

      Router.push("/home");
    } catch (e) {
      const error = e as IError;
      toastNotification({
        type: "error",
        message: translateErrors(error.response.data.message),
      });
    }
  }

  async function signOut() {
    setUser({} as TUser);
    destroyCookie(null, "eldencard");
    Router.push("/login");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
